# src/components/AssignmentPopup.tsx

Tipo: Componente ou rota React em TypeScript.

Este documento foi gerado para estudo e manutencao. Ele preserva o codigo original e explica linha por linha sem alterar o comportamento do sistema publicado.

| Linha | Codigo original | Explicacao |
| ---: | --- | --- |
| 1 | `import { useEffect, useState } from "react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 2 | `import { useNavigate } from "@tanstack/react-router";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 3 | `import { useQueryClient } from "@tanstack/react-query";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 4 | `import { Bell, ExternalLink, Calendar, AlertCircle } from "lucide-react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 5 | `import { format, formatDistanceToNow } from "date-fns";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 6 | `import { ptBR } from "date-fns/locale";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 7 | `import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 8 | `import { Button } from "@/components/ui/button";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 9 | `import { supabase } from "@/integrations/supabase/client";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 10 | `import { useAuth } from "@/hooks/use-auth";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 11 | `import { priorityLabels, priorityColors } from "@/lib/task-utils";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 12 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 13 | `interface AssignmentNotification {` | Declara um contrato de tipos TypeScript para deixar os dados mais seguros e previsiveis. |
| 14 | `  id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 15 | `  task_id: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 16 | `  type: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 17 | `  title: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 18 | `  body: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 19 | `  created_at: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 20 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 21 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 22 | `interface TaskPreview {` | Declara um contrato de tipos TypeScript para deixar os dados mais seguros e previsiveis. |
| 23 | `  title: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 24 | `  description: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 25 | `  due_date: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 26 | `  priority: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 27 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 28 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 29 | `const ASSIGN_TYPES = new Set(["assignment", "subtask_assignment"]);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 30 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 31 | `export function AssignmentPopup() {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 32 | `  const { user } = useAuth();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 33 | `  const navigate = useNavigate();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 34 | `  const qc = useQueryClient();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 35 | `  const [queue, setQueue] = useState<AssignmentNotification[]>([]);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 36 | `  const [preview, setPreview] = useState<TaskPreview | null>(null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 37 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 38 | `  const storageKey = user ? \`assign-popup-seen:${user.id}\` : null;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 39 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 40 | `  const getSeen = (): Set<string> => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 41 | `    if (!storageKey || typeof window === "undefined") return new Set();` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 42 | `    try {` | Inicia bloco protegido para capturar erros durante a execucao. |
| 43 | `      const raw = localStorage.getItem(storageKey);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 44 | `      if (!raw) return new Set();` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 45 | `      const arr = JSON.parse(raw);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 46 | `      return new Set(Array.isArray(arr) ? arr : []);` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 47 | `    } catch {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 48 | `      return new Set();` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 49 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 50 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 51 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 52 | `  const refreshAssignedWork = () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 53 | `    void qc.invalidateQueries({ queryKey: ["tasks"] });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 54 | `    void qc.invalidateQueries({ queryKey: ["subtasks"] });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 55 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 56 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 57 | `  const markSeen = (ids: string[]) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 58 | `    if (!storageKey || typeof window === "undefined" || ids.length === 0) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 59 | `    const seen = getSeen();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 60 | `    ids.forEach((id) => seen.add(id));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 61 | `    const arr = Array.from(seen).slice(-500);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 62 | `    try { localStorage.setItem(storageKey, JSON.stringify(arr)); } catch { /* noop */ }` | Inicia bloco protegido para capturar erros durante a execucao. |
| 63 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 64 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 65 | `  const enqueueFromRow = (row: AssignmentNotification) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 66 | `    const seen = getSeen();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 67 | `    if (seen.has(row.id)) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 68 | `    refreshAssignedWork();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 69 | `    setQueue((prev) => (prev.some((n) => n.id === row.id) ? prev : [...prev, row]));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 70 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 71 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 72 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 73 | `    if (!user) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 74 | `    let cancelled = false;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 75 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 76 | `    const loadFreshAssignments = async () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 77 | `      const { data } = await supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 78 | `        .from("notifications")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 79 | `        .select("id, task_id, title, body, created_at, type")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 80 | `        .eq("user_id", user.id)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 81 | `        .in("type", ["assignment", "subtask_assignment"])` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 82 | `        .order("created_at", { ascending: false })` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 83 | `        .limit(20);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 84 | `      if (cancelled || !data) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 85 | `      const seen = getSeen();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 86 | `      const fresh = (data as any[])` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 87 | `        .filter((n) => !seen.has(n.id))` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 88 | `        .map((n) => ({ id: n.id, task_id: n.task_id, type: n.type, title: n.title, body: n.body, created_at: n.created_at }))` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 89 | `        .reverse();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 90 | `      if (fresh.length > 0) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 91 | `        refreshAssignedWork();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 92 | `        setQueue((prev) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 93 | `          const existing = new Set(prev.map((n) => n.id));` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 94 | `          return [...prev, ...fresh.filter((n) => !existing.has(n.id))];` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 95 | `        });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 96 | `      }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 97 | `    };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 98 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 99 | `    void loadFreshAssignments();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 100 | `    const poll = window.setInterval(() => void loadFreshAssignments(), 12_000);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 101 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 102 | `    const channel = supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 103 | `      .channel(\`assign-popup-${user.id}-${Math.random().toString(36).slice(2)}\`)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 104 | `      .on(` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 105 | `        "postgres_changes",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 106 | `        { event: "INSERT", schema: "public", table: "notifications", filter: \`user_id=eq.${user.id}\` },` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 107 | `        (payload: any) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 108 | `          const n = payload.new;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 109 | `          if (!n || !ASSIGN_TYPES.has(n.type)) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 110 | `          enqueueFromRow({` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 111 | `            id: n.id, task_id: n.task_id ?? null, type: n.type,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 112 | `            title: n.title, body: n.body ?? null, created_at: n.created_at,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 113 | `          });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 114 | `        },` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 115 | `      )` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 116 | `      .subscribe();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 117 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 118 | `    return () => { cancelled = true; window.clearInterval(poll); supabase.removeChannel(channel); };` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 119 | `    // eslint-disable-next-line react-hooks/exhaustive-deps` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 120 | `  }, [user?.id]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 121 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 122 | `  const current = queue[0] ?? null;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 123 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 124 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 125 | `    setPreview(null);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 126 | `    if (!current?.task_id) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 127 | `    let cancelled = false;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 128 | `    (async () => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 129 | `      const { data } = await supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 130 | `        .from("tasks")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 131 | `        .select("title, description, due_date, priority")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 132 | `        .eq("id", current.task_id!)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 133 | `        .maybeSingle();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 134 | `      if (!cancelled && data) setPreview(data as TaskPreview);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 135 | `    })();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 136 | `    return () => { cancelled = true; };` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 137 | `  }, [current?.task_id]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 138 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 139 | `  const dismiss = () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 140 | `    if (!current) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 141 | `    markSeen([current.id]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 142 | `    setQueue((prev) => prev.slice(1));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 143 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 144 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 145 | `  const openTask = () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 146 | `    if (!current) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 147 | `    const target = current;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 148 | `    markSeen([target.id]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 149 | `    setQueue((prev) => prev.slice(1));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 150 | `    if (target.task_id) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 151 | `      navigate({ to: "/tasks/list", search: { task: target.task_id, mine: true } as any });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 152 | `    } else {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 153 | `      navigate({ to: "/tasks/list", search: { mine: true } as any });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 154 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 155 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 156 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 157 | `  if (!user || !current) return null;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 158 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 159 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 160 | `    <Dialog open onOpenChange={(o) => { if (!o) dismiss(); }}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 161 | `      <DialogContent className="max-w-md">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 162 | `        <DialogHeader>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 163 | `          <DialogTitle className="flex items-center gap-2 text-base">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 164 | `            <span className="grid h-8 w-8 place-items-center rounded-full bg-primary/10 text-primary">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 165 | `              <Bell className="h-4 w-4" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 166 | `            </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 167 | `            {current.title}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 168 | `          </DialogTitle>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 169 | `        </DialogHeader>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 170 | `        {current.body && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 171 | `          <p className="text-sm text-muted-foreground">{current.body}</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 172 | `        )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 173 | `        {preview && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 174 | `          <div className="space-y-2 rounded-md border bg-muted/30 p-3 text-sm">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 175 | `            <p className="font-medium">{preview.title}</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 176 | `            {preview.description && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 177 | `              <p className="line-clamp-3 text-xs text-muted-foreground">{preview.description}</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 178 | `            )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 179 | `            <div className="flex flex-wrap items-center gap-2 text-xs">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 180 | `              {preview.due_date && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 181 | `                <span className="inline-flex items-center gap-1 rounded bg-background px-2 py-1 font-medium">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 182 | `                  <Calendar className="h-3 w-3" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 183 | `                  Prazo: {format(new Date(preview.due_date), "dd/MM/yyyy 'às' HH:mm", { locale: ptBR })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 184 | `                </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 185 | `              )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 186 | `              {preview.priority && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 187 | `                <span className="inline-flex items-center gap-1 rounded bg-background px-2 py-1 font-medium"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 188 | `                  style={{ color: priorityColors[preview.priority] }}>` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 189 | `                  <AlertCircle className="h-3 w-3" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 190 | `                  {priorityLabels[preview.priority as keyof typeof priorityLabels] ?? preview.priority}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 191 | `                </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 192 | `              )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 193 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 194 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 195 | `        )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 196 | `        <p className="text-xs text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 197 | `          {formatDistanceToNow(new Date(current.created_at), { addSuffix: true, locale: ptBR })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 198 | `          {queue.length > 1 && <span className="ml-2">• {queue.length - 1} outra(s) na fila</span>}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 199 | `        </p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 200 | `        <DialogFooter className="gap-2 sm:gap-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 201 | `          <Button variant="ghost" onClick={dismiss}>Depois</Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 202 | `          <Button onClick={openTask}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 203 | `            <ExternalLink className="mr-2 h-4 w-4" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 204 | `            Ver tarefa` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 205 | `          </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 206 | `        </DialogFooter>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 207 | `      </DialogContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 208 | `    </Dialog>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 209 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 210 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 211 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 212 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
