# src/routes/_app/tasks.calendar.tsx

Tipo: Componente ou rota React em TypeScript.

Este documento foi gerado para estudo e manutencao. Ele preserva o codigo original e explica linha por linha sem alterar o comportamento do sistema publicado.

| Linha | Codigo original | Explicacao |
| ---: | --- | --- |
| 1 | `import { createFileRoute } from "@tanstack/react-router";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 2 | `import { useMemo, useState } from "react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 3 | `import {` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 4 | `  addMonths, eachDayOfInterval, endOfMonth, endOfWeek, format, isSameDay,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 5 | `  isSameMonth, startOfMonth, startOfWeek, subMonths,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 6 | `} from "date-fns";` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 7 | `import { ptBR } from "date-fns/locale";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 8 | `import { ChevronLeft, ChevronRight, Plus } from "lucide-react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 9 | `import { Button } from "@/components/ui/button";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 10 | `import { useTasks, useClients, useSubtasks, type Task } from "@/hooks/use-data";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 11 | `import { useAuth } from "@/hooks/use-auth";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 12 | `import { TaskFilters, applyTaskFilters, type TaskFilterValue } from "@/components/TaskFilters";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 13 | `import { TaskDialog } from "@/components/TaskDialog";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 14 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 15 | `export const Route = createFileRoute("/_app/tasks/calendar")({` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 16 | `  component: CalendarPage,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 17 | `});` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 18 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 19 | `function CalendarPage() {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 20 | `  const { data: tasks = [] } = useTasks();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 21 | `  const { data: clients = [] } = useClients();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 22 | `  const { data: subtasks = [] } = useSubtasks();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 23 | `  const { user } = useAuth();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 24 | `  const [cursor, setCursor] = useState(new Date());` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 25 | `  const [filters, setFilters] = useState<TaskFilterValue>({});` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 26 | `  const [open, setOpen] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 27 | `  const [edit, setEdit] = useState<Task | null>(null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 28 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 29 | `  const days = useMemo(() => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 30 | `    const start = startOfWeek(startOfMonth(cursor), { weekStartsOn: 1 });` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 31 | `    const end = endOfWeek(endOfMonth(cursor), { weekStartsOn: 1 });` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 32 | `    return eachDayOfInterval({ start, end });` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 33 | `  }, [cursor]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 34 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 35 | `  const subtaskAssigneeTaskIds = useMemo(() => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 36 | `    const s = new Set<string>();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 37 | `    if (!user?.id) return s;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 38 | `    for (const st of subtasks as any[]) if (st.assignee_id === user.id && st.task_id) s.add(st.task_id);` | Inicia uma repeticao sobre dados ou condicoes. |
| 39 | `    return s;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 40 | `  }, [subtasks, user?.id]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 41 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 42 | `  const subtaskAssigneeTaskIdsByUser = useMemo(() => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 43 | `    const map = new Map<string, Set<string>>();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 44 | `    for (const st of subtasks as any[]) {` | Inicia uma repeticao sobre dados ou condicoes. |
| 45 | `      if (!st.assignee_id || !st.task_id) continue;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 46 | `      const set = map.get(st.assignee_id) ?? new Set<string>();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 47 | `      set.add(st.task_id);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 48 | `      map.set(st.assignee_id, set);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 49 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 50 | `    return map;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 51 | `  }, [subtasks]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 52 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 53 | `  const visible = useMemo(` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 54 | `    () => applyTaskFilters(tasks, filters, { userId: user?.id ?? null, subtaskAssigneeTaskIds, subtaskAssigneeTaskIdsByUser }),` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 55 | `    [tasks, filters, user?.id, subtaskAssigneeTaskIds, subtaskAssigneeTaskIdsByUser],` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 56 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 57 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 58 | `  const subtaskDueDatesByTask = useMemo(() => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 59 | `    const map = new Map<string, string[]>();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 60 | `    for (const st of subtasks) {` | Inicia uma repeticao sobre dados ou condicoes. |
| 61 | `      if (!st.task_id || !st.due_date) continue;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 62 | `      const list = map.get(st.task_id) ?? [];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 63 | `      list.push(st.due_date);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 64 | `      map.set(st.task_id, list);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 65 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 66 | `    return map;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 67 | `  }, [subtasks]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 68 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 69 | `  const dayTasks = (day: Date) => visible.filter(t => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 70 | `    if (t.due_date && isSameDay(new Date(t.due_date), day)) return true;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 71 | `    return (subtaskDueDatesByTask.get(t.id) ?? []).some((due) => isSameDay(new Date(due), day));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 72 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 73 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 74 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 75 | `    <div className="space-y-4 p-6">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 76 | `      <header className="flex items-center justify-between">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 77 | `        <div className="flex items-center gap-3">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 78 | `          <h1 className="text-2xl font-bold tracking-tight capitalize">{format(cursor, "MMMM yyyy", { locale: ptBR })}</h1>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 79 | `          <div className="flex gap-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 80 | `            <Button size="icon" variant="outline" onClick={() => setCursor(subMonths(cursor, 1))}><ChevronLeft className="h-4 w-4" /></Button>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 81 | `            <Button size="icon" variant="outline" onClick={() => setCursor(addMonths(cursor, 1))}><ChevronRight className="h-4 w-4" /></Button>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 82 | `            <Button variant="ghost" onClick={() => setCursor(new Date())}>Hoje</Button>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 83 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 84 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 85 | `        <Button onClick={() => { setEdit(null); setOpen(true); }}><Plus className="mr-2 h-4 w-4" />Tarefa</Button>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 86 | `      </header>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 87 | `      <TaskFilters filters={filters} onChange={setFilters} />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 88 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 89 | `      <div className="overflow-hidden rounded-lg border bg-card">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 90 | `        <div className="grid grid-cols-7 border-b bg-muted/40 text-xs font-medium uppercase tracking-wide text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 91 | `          {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map(d => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 92 | `            <div key={d} className="p-2 text-center">{d}</div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 93 | `          ))}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 94 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 95 | `        <div className="grid grid-cols-7">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 96 | `          {days.map(day => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 97 | `            const inMonth = isSameMonth(day, cursor);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 98 | `            const today = isSameDay(day, new Date());` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 99 | `            const ts = dayTasks(day);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 100 | `            return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 101 | `              <div key={day.toISOString()} className={\`min-h-28 border-b border-r p-2 ${inMonth ? "" : "bg-muted/20 text-muted-foreground"}\`}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 102 | `                <div className={\`mb-1 inline-grid h-6 min-w-6 place-items-center rounded-full text-xs ${today ? "bg-primary text-primary-foreground font-semibold" : ""}\`}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 103 | `                  {format(day, "d")}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 104 | `                </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 105 | `                <div className="space-y-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 106 | `                  {ts.slice(0, 3).map(t => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 107 | `                    const client = clients.find(c => c.id === t.client_id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 108 | `                    return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 109 | `                      <button key={t.id} onClick={() => { setEdit(t); setOpen(true); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 110 | `                        className="block w-full truncate rounded px-1.5 py-0.5 text-left text-[11px] hover:opacity-80"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 111 | `                        style={{ background: (client?.color || t.color || "#1e3a8a") + "22", color: client?.color || t.color || "#1e3a8a" }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 112 | `                      >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 113 | `                        {t.title}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 114 | `                      </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 115 | `                    );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 116 | `                  })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 117 | `                  {ts.length > 3 && <div className="text-[10px] text-muted-foreground">+{ts.length - 3} mais</div>}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 118 | `                </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 119 | `              </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 120 | `            );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 121 | `          })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 122 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 123 | `      </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 124 | `      <TaskDialog open={open} onOpenChange={setOpen} task={edit} />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 125 | `    </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 126 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 127 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 128 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 129 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
