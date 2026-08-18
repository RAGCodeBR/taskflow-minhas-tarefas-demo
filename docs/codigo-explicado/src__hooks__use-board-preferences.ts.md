# src/hooks/use-board-preferences.ts

Tipo: Modulo TypeScript.

Este documento foi gerado para estudo e manutencao. Ele preserva o codigo original e explica linha por linha sem alterar o comportamento do sistema publicado.

| Linha | Codigo original | Explicacao |
| ---: | --- | --- |
| 1 | `import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 2 | `import { supabase } from "@/integrations/supabase/client";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 3 | `import { useAuth } from "@/hooks/use-auth";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 4 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 5 | `export const ALL_FIELDS = [` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 6 | `  "tags",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 7 | `  "description",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 8 | `  "comments",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 9 | `  "subtasks",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 10 | `  "attachments",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 11 | `  "interruptions",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 12 | `  "priority",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 13 | `  "status",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 14 | `  "due",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 15 | `  "createdAt",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 16 | `  "meta",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 17 | `] as const;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 18 | `export type CardField = (typeof ALL_FIELDS)[number];` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 19 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 20 | `export const FIELD_LABELS: Record<CardField, string> = {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 21 | `  tags: "Etiquetas",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 22 | `  description: "Descrição",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 23 | `  comments: "Observações (seções dobráveis)",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 24 | `  subtasks: "Subtarefas",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 25 | `  attachments: "Arquivos externos",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 26 | `  interruptions: "Interrupções",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 27 | `  priority: "Prioridade",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 28 | `  status: "Status",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 29 | `  due: "Prazo",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 30 | `  createdAt: "Data de criação",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 31 | `  meta: "Responsável e ações rápidas",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 32 | `};` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 33 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 34 | `const DEFAULT_ORDER: CardField[] = [` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 35 | `  "tags",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 36 | `  "description",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 37 | `  "comments",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 38 | `  "subtasks",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 39 | `  "attachments",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 40 | `  "interruptions",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 41 | `  "priority",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 42 | `  "status",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 43 | `  "due",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 44 | `  "createdAt",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 45 | `  "meta",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 46 | `];` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 47 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 48 | `export type KanbanOrientation = "vertical" | "horizontal";` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 49 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 50 | `export interface BoardPreferences {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 51 | `  field_order: CardField[];` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 52 | `  hidden_fields: CardField[];` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 53 | `  interruption_color: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 54 | `  kanban_orientation: KanbanOrientation;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 55 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 56 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 57 | `const DEFAULT_PREFS: BoardPreferences = {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 58 | `  field_order: DEFAULT_ORDER,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 59 | `  hidden_fields: [],` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 60 | `  interruption_color: "#ef4444",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 61 | `  kanban_orientation: "vertical",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 62 | `};` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 63 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 64 | `function migrateChips(fields: string[]): CardField[] {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 65 | `  const out: CardField[] = [];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 66 | `  const push = (x: CardField) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 67 | `    if (!out.includes(x)) out.push(x);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 68 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 69 | `  for (const f of fields) {` | Inicia uma repeticao sobre dados ou condicoes. |
| 70 | `    if (f === "chips") {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 71 | `      (["priority", "status", "due", "createdAt"] as CardField[]).forEach(push);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 72 | `    } else if (f === "due") {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 73 | `      (["due", "createdAt"] as CardField[]).forEach(push);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 74 | `    } else if ((ALL_FIELDS as readonly string[]).includes(f)) {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 75 | `      push(f as CardField);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 76 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 77 | `  }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 78 | `  return out;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 79 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 80 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 81 | `function normalize(prefs: Partial<BoardPreferences> | null | undefined): BoardPreferences {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 82 | `  const rawOrder = Array.isArray(prefs?.field_order) ? (prefs!.field_order as string[]) : [];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 83 | `  const order = migrateChips(rawOrder);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 84 | `  const merged = [...order, ...DEFAULT_ORDER.filter((f) => !order.includes(f))];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 85 | `  const rawHidden = Array.isArray(prefs?.hidden_fields) ? (prefs!.hidden_fields as string[]) : [];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 86 | `  return {` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 87 | `    field_order: merged,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 88 | `    hidden_fields: migrateChips(rawHidden),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 89 | `    interruption_color: prefs?.interruption_color || DEFAULT_PREFS.interruption_color,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 90 | `    kanban_orientation: prefs?.kanban_orientation === "horizontal" ? "horizontal" : "vertical",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 91 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 92 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 93 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 94 | `export function useBoardPreferences() {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 95 | `  const { user } = useAuth();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 96 | `  const qc = useQueryClient();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 97 | `  return useQuery({` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 98 | `    queryKey: ["board_preferences", user?.id],` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 99 | `    enabled: !!user,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 100 | `    queryFn: async (): Promise<BoardPreferences> => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 101 | `      if (!user) return DEFAULT_PREFS;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 102 | `      const { data } = await supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 103 | `        .from("board_preferences")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 104 | `        .select("field_order, hidden_fields, interruption_color, kanban_orientation")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 105 | `        .eq("user_id", user.id)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 106 | `        .maybeSingle();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 107 | `      const raw = data as Partial<BoardPreferences> | null;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 108 | `      const normalized = normalize(raw);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 109 | `      // Self-heal: if stored field_order differs from normalized (duplicates, missing createdAt, legacy "chips"),` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 110 | `      // persist the cleaned version so future reorders are stable.` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 111 | `      const rawOrder = Array.isArray(raw?.field_order) ? (raw!.field_order as string[]) : [];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 112 | `      const rawHidden = Array.isArray(raw?.hidden_fields) ? (raw!.hidden_fields as string[]) : [];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 113 | `      const orderChanged = rawOrder.length !== normalized.field_order.length || rawOrder.some((v, i) => v !== normalized.field_order[i]);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 114 | `      const hiddenChanged = rawHidden.length !== normalized.hidden_fields.length || rawHidden.some((v, i) => v !== normalized.hidden_fields[i]);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 115 | `      if (raw && (orderChanged || hiddenChanged)) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 116 | `        void supabase` | Interage com o cliente Supabase para autenticar ou acessar o banco. |
| 117 | `          .from("board_preferences")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 118 | `          .upsert({ user_id: user.id, ...normalized }, { onConflict: "user_id" })` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 119 | `          .then(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 120 | `            qc.setQueryData(["board_preferences", user.id], normalized);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 121 | `          });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 122 | `      }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 123 | `      return normalized;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 124 | `    },` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 125 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 126 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 127 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 128 | `export function useUpdateBoardPreferences() {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 129 | `  const qc = useQueryClient();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 130 | `  const { user } = useAuth();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 131 | `  return useMutation({` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 132 | `    mutationFn: async (patch: Partial<BoardPreferences>) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 133 | `      if (!user) throw new Error("not authenticated");` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 134 | `      const current = qc.getQueryData<BoardPreferences>(["board_preferences", user.id]) ?? DEFAULT_PREFS;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 135 | `      const next = { ...current, ...patch };` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 136 | `      const { error } = await supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 137 | `        .from("board_preferences")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 138 | `        .upsert({ user_id: user.id, ...next }, { onConflict: "user_id" });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 139 | `      if (error) throw error;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 140 | `      return next;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 141 | `    },` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 142 | `    onMutate: async (patch) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 143 | `      if (!user) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 144 | `      const key = ["board_preferences", user.id];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 145 | `      const prev = qc.getQueryData<BoardPreferences>(key) ?? DEFAULT_PREFS;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 146 | `      qc.setQueryData(key, { ...prev, ...patch });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 147 | `    },` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 148 | `    onSettled: () => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 149 | `      if (user) qc.invalidateQueries({ queryKey: ["board_preferences", user.id] });` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 150 | `    },` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 151 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 152 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 153 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 154 | `export interface TaskInterruption {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 155 | `  id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 156 | `  task_id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 157 | `  reason: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 158 | `  created_at: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 159 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 160 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 161 | `export function useTaskInterruptions(taskId: string) {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 162 | `  return useQuery({` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 163 | `    queryKey: ["task_interruptions", taskId],` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 164 | `    queryFn: async () => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 165 | `      const { data, error } = await supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 166 | `        .from("task_interruptions")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 167 | `        .select("id, task_id, reason, created_at")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 168 | `        .eq("task_id", taskId)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 169 | `        .order("created_at", { ascending: false });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 170 | `      if (error) throw error;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 171 | `      return (data ?? []) as TaskInterruption[];` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 172 | `    },` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 173 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 174 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 175 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
