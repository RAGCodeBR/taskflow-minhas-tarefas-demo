import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

// The demonstration never contacts the production database.  This small
// Supabase-compatible adapter persists its task board in the visitor's own
// browser, letting the existing TaskFlow components run unchanged.
const DEMO_USER = { id: "taskflow-demo-user", email: "demo@taskflow.local" };
const defaults: Record<string, any[]> = {
  profiles: [{ id: DEMO_USER.id, full_name: "Usuário demonstração", email: DEMO_USER.email, avatar_url: null, is_active: true }],
  kanban_columns: [
    ["A Fazer", "#64748b"], ["Em Andamento", "#f59e0b"], ["Aguardando Retorno", "#d9e600"],
    ["Em Revisão", "#38a4e8"], ["Acompanhamento", "#c084c8"],
  ].map(([name, color], position) => ({ id: `demo-column-${position}`, name, color, position, client_id: null })),
  task_statuses: [
    { id: "demo-status-open", name: "Em aberto", color: "#64748b", position: 0, is_completed: false, is_active: true },
    { id: "demo-status-done", name: "Concluídas", color: "#54c58a", position: 99, is_completed: true, is_active: true },
  ],
  tasks: [], clients: [], subtasks: [], comments: [], attachments: [], task_collaborators: [],
  task_tags: [], task_tag_links: [], user_column_order: [], user_task_order: [], task_history: [],
};
const key = "taskflow-demo-local-db-v1";
function db() {
  try { const saved = JSON.parse(localStorage.getItem(key) || "null"); if (saved) return saved; } catch {}
  const seed = structuredClone(defaults); localStorage.setItem(key, JSON.stringify(seed)); return seed;
}
function persist(data: any) { localStorage.setItem(key, JSON.stringify(data)); }
class LocalQuery {
  private filters: Array<(row: any) => boolean> = []; private action = "select"; private payload: any; private selected = false; private one = false;
  constructor(private table: string) {}
  select() { this.selected = true; return this; }
  eq(k: string, v: any) { this.filters.push(r => r[k] === v); return this; }
  in(k: string, values: any[]) { this.filters.push(r => values.includes(r[k])); return this; }
  is(k: string, v: any) { this.filters.push(r => r[k] === v); return this; }
  not(k: string, _op: any, v: any) { this.filters.push(r => r[k] !== v); return this; }
  order(k: string, opts: any = {}) { const old = this.filters; this.filters = [...old, (r: any) => true]; (this as any)._order = [k, opts]; return this; }
  limit() { return this; } range() { return this; } match(values: any) { Object.entries(values).forEach(([k,v]) => this.eq(k,v)); return this; } or() { return this; } filter() { return this; } contains() { return this; } over() { return this; }
  insert(value: any) { this.action = "insert"; this.payload = Array.isArray(value) ? value : [value]; return this; }
  upsert(value: any) { this.action = "upsert"; this.payload = Array.isArray(value) ? value : [value]; return this; }
  update(value: any) { this.action = "update"; this.payload = value; return this; }
  delete() { this.action = "delete"; return this; }
  single() { this.one = true; return this.exec(); } maybeSingle() { this.one = true; return this.exec(); }
  async exec() {
    const data = db(); const rows = data[this.table] ||= []; const matches = rows.filter((r: any) => this.filters.every(f => f(r)));
    let result: any = matches;
    if (this.action === "insert" || this.action === "upsert") { const created = this.payload.map((r: any) => ({ id: r.id || crypto.randomUUID(), created_at: r.created_at || new Date().toISOString(), updated_at: new Date().toISOString(), ...r })); rows.push(...created); result = created; persist(data); }
    if (this.action === "update") { matches.forEach((r: any) => Object.assign(r, this.payload, { updated_at: new Date().toISOString() })); result = matches; persist(data); }
    if (this.action === "delete") { data[this.table] = rows.filter((r: any) => !matches.includes(r)); result = matches; persist(data); }
    if (this.action === "select" && (this as any)._order) { const [field, opts] = (this as any)._order; result = [...result].sort((a,b) => String(a[field] ?? "").localeCompare(String(b[field] ?? "")) * (opts.ascending === false ? -1 : 1)); }
    return { data: this.one ? (result[0] ?? null) : result, error: null };
  }
  then(resolve: any, reject: any) { return this.exec().then(resolve, reject); }
}
function localClient() {
  const channel: any = { on: () => channel, subscribe: () => channel, unsubscribe: () => undefined };
  return {
    auth: { getUser: async () => ({ data: { user: DEMO_USER }, error: null }), getSession: async () => ({ data: { session: { user: DEMO_USER, access_token: "local" } }, error: null }), onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => undefined } } }), signOut: async () => ({ error: null }), getClaims: async () => ({ data: { claims: null } }) },
    from: (table: string) => new LocalQuery(table), channel: () => channel, removeChannel: () => undefined,
    storage: { from: () => ({ upload: async () => ({ data: null, error: null }), download: async () => ({ data: null, error: null }), remove: async () => ({ error: null }), getPublicUrl: () => ({ data: { publicUrl: "" } }) }) },
    functions: { invoke: async () => ({ data: null, error: null }) },
  } as any;
}
const url = import.meta.env.VITE_SUPABASE_URL;
const token = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
export const supabase: any = url && token ? createClient<Database>(url, token) : localClient();
