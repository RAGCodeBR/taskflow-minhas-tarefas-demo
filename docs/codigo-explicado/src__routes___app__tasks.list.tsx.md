# src/routes/_app/tasks.list.tsx

Tipo: Componente ou rota React em TypeScript.

Este documento foi gerado para estudo e manutencao. Ele preserva o codigo original e explica linha por linha sem alterar o comportamento do sistema publicado.

| Linha | Codigo original | Explicacao |
| ---: | --- | --- |
| 1 | `import { createFileRoute, useNavigate } from "@tanstack/react-router";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 2 | `import { useEffect, useMemo, useState } from "react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 3 | `import { format, isPast } from "date-fns";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 4 | `import { ptBR } from "date-fns/locale";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 5 | `import { Plus } from "lucide-react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 6 | `import { Button } from "@/components/ui/button";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 7 | `import { Badge } from "@/components/ui/badge";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 8 | `import { useTasks, useColumns, useClients, useProfiles, useSubtasks, type Task } from "@/hooks/use-data";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 9 | `import { useAuth } from "@/hooks/use-auth";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 10 | `import { TaskFilters, applyTaskFilters, type TaskFilterValue } from "@/components/TaskFilters";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 11 | `import { TaskDialog } from "@/components/TaskDialog";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 12 | `import { priorityColors, priorityLabels, statusLabels } from "@/lib/task-utils";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 13 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 14 | `export const Route = createFileRoute("/_app/tasks/list")({` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 15 | `  component: ListPage,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 16 | `  validateSearch: (s: Record<string, unknown>) => ({` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 17 | `    task: typeof s.task === "string" ? s.task : undefined,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 18 | `    mine: s.mine === "1" || s.mine === true || s.mine === "true" ? true : undefined,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 19 | `  }),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 20 | `});` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 21 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 22 | `function ListPage() {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 23 | `  const { data: tasks = [] } = useTasks();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 24 | `  const { data: clients = [] } = useClients();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 25 | `  const { data: profiles = [] } = useProfiles();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 26 | `  const { data: subtasks = [] } = useSubtasks();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 27 | `  const { user } = useAuth();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 28 | `  useColumns();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 29 | `  const search = Route.useSearch();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 30 | `  const navigate = useNavigate();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 31 | `  const [filters, setFilters] = useState<TaskFilterValue>(() =>` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 32 | `    search.mine ? { scope: "mine" } : {},` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 33 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 34 | `  const [open, setOpen] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 35 | `  const [edit, setEdit] = useState<Task | null>(null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 36 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 37 | `  // Auto-open a task when arriving with ?task=<id>` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 38 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 39 | `    if (!search.task) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 40 | `    const t = tasks.find((x) => x.id === search.task);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 41 | `    if (t) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 42 | `      setEdit(t);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 43 | `      setOpen(true);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 44 | `      navigate({ to: "/tasks/list", search: (p: any) => ({ ...p, task: undefined }), replace: true });` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 45 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 46 | `  }, [search.task, tasks, navigate]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 47 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 48 | `  const subtaskAssigneeTaskIds = useMemo(() => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 49 | `    const s = new Set<string>();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 50 | `    if (!user?.id) return s;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 51 | `    for (const st of subtasks as any[]) if (st.assignee_id === user.id && st.task_id) s.add(st.task_id);` | Inicia uma repeticao sobre dados ou condicoes. |
| 52 | `    return s;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 53 | `  }, [subtasks, user?.id]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 54 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 55 | `  const subtaskAssigneeTaskIdsByUser = useMemo(() => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 56 | `    const map = new Map<string, Set<string>>();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 57 | `    for (const st of subtasks as any[]) {` | Inicia uma repeticao sobre dados ou condicoes. |
| 58 | `      if (!st.assignee_id || !st.task_id) continue;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 59 | `      const set = map.get(st.assignee_id) ?? new Set<string>();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 60 | `      set.add(st.task_id);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 61 | `      map.set(st.assignee_id, set);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 62 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 63 | `    return map;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 64 | `  }, [subtasks]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 65 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 66 | `  const list = useMemo(() => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 67 | `    const r = applyTaskFilters(tasks, filters, { userId: user?.id ?? null, subtaskAssigneeTaskIds, subtaskAssigneeTaskIdsByUser });` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 68 | `    return [...r].sort((a, b) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 69 | `      if (!a.due_date && !b.due_date) return 0;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 70 | `      if (!a.due_date) return 1;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 71 | `      if (!b.due_date) return -1;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 72 | `      return new Date(a.due_date).getTime() - new Date(b.due_date).getTime();` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 73 | `    });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 74 | `  }, [tasks, filters, user?.id, subtaskAssigneeTaskIds, subtaskAssigneeTaskIdsByUser]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 75 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 76 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 77 | `    <div className="space-y-4 p-6">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 78 | `      <header className="flex items-center justify-between gap-3 flex-wrap">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 79 | `        <h1 className="text-2xl font-bold tracking-tight">Lista de Tarefas</h1>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 80 | `        <Button onClick={() => { setEdit(null); setOpen(true); }}><Plus className="mr-2 h-4 w-4" />Nova tarefa</Button>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 81 | `      </header>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 82 | `      <TaskFilters filters={filters} onChange={setFilters} />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 83 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 84 | `      <div className="overflow-hidden rounded-lg border bg-card">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 85 | `        <table className="w-full text-sm">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 86 | `          <thead className="bg-muted/50 text-left text-xs uppercase tracking-wide text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 87 | `            <tr>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 88 | `              <th className="px-4 py-3">Tarefa</th>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 89 | `              <th className="px-4 py-3">Cliente</th>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 90 | `              <th className="px-4 py-3">Responsável</th>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 91 | `              <th className="px-4 py-3">Status</th>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 92 | `              <th className="px-4 py-3">Prioridade</th>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 93 | `              <th className="px-4 py-3">Prazo</th>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 94 | `            </tr>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 95 | `          </thead>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 96 | `          <tbody>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 97 | `            {list.length === 0 && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 98 | `              <tr><td colSpan={6} className="py-10 text-center text-muted-foreground">Nenhuma tarefa</td></tr>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 99 | `            )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 100 | `            {list.map(t => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 101 | `              const client = clients.find(c => c.id === t.client_id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 102 | `              const assignee = profiles.find(p => p.id === t.assignee_id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 103 | `              const overdue = t.due_date && isPast(new Date(t.due_date)) && t.status !== "done";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 104 | `              return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 105 | `                <tr key={t.id} className="cursor-pointer border-t hover:bg-muted/30" onClick={() => { setEdit(t); setOpen(true); }}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 106 | `                  <td className="px-4 py-3 font-medium">{t.title}</td>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 107 | `                  <td className="px-4 py-3">{client ? <Badge variant="outline" style={{ borderColor: client.color ?? undefined }}>{client.name}</Badge> : <span className="text-muted-foreground">—</span>}</td>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 108 | `                  <td className="px-4 py-3 text-muted-foreground">{assignee?.full_name || assignee?.email || "—"}</td>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 109 | `                  <td className="px-4 py-3">{t.status ? <Badge variant="secondary">{statusLabels[t.status]}</Badge> : <span className="text-muted-foreground">—</span>}</td>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 110 | `                  <td className="px-4 py-3">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 111 | `                    {t.priority ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 112 | `                      <Badge variant="outline" style={{ borderColor: priorityColors[t.priority], color: priorityColors[t.priority] }}>{priorityLabels[t.priority]}</Badge>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 113 | `                    ) : <span className="text-muted-foreground">—</span>}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 114 | `                  </td>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 115 | `                  <td className={\`px-4 py-3 ${overdue ? "font-medium text-destructive" : "text-muted-foreground"}\`}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 116 | `                    {t.due_date ? format(new Date(t.due_date), "dd MMM yyyy", { locale: ptBR }) : "—"}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 117 | `                  </td>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 118 | `                </tr>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 119 | `              );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 120 | `            })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 121 | `          </tbody>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 122 | `        </table>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 123 | `      </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 124 | `      <TaskDialog open={open} onOpenChange={setOpen} task={edit} />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 125 | `    </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 126 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 127 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 128 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 129 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
