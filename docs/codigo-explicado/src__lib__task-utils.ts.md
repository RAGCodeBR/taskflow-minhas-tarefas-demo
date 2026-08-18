# src/lib/task-utils.ts

Tipo: Modulo TypeScript.

Este documento foi gerado para estudo e manutencao. Ele preserva o codigo original e explica linha por linha sem alterar o comportamento do sistema publicado.

| Linha | Codigo original | Explicacao |
| ---: | --- | --- |
| 1 | `import {` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 2 | `  endOfDay,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 3 | `  endOfMonth,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 4 | `  endOfWeek,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 5 | `  isAfter,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 6 | `  isBefore,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 7 | `  isWithinInterval,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 8 | `  startOfDay,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 9 | `  startOfMonth,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 10 | `  startOfWeek,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 11 | `  addDays,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 12 | `} from "date-fns";` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 13 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 14 | `export type DateFilter =` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 15 | `  | "all"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 16 | `  | "today"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 17 | `  | "due_today"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 18 | `  | "tomorrow"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 19 | `  | "this_week"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 20 | `  | "this_month"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 21 | `  | "overdue"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 22 | `  | "no_due"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 23 | `  | "completed"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 24 | `  | "pending";` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 25 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 26 | `export const dateFilterLabels: Record<DateFilter, string> = {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 27 | `  all: "Todas",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 28 | `  today: "Hoje",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 29 | `  due_today: "Vence hoje",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 30 | `  tomorrow: "Amanhã",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 31 | `  this_week: "Semana",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 32 | `  this_month: "Mês",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 33 | `  overdue: "Atrasadas",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 34 | `  no_due: "Sem prazo",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 35 | `  completed: "Concluídas",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 36 | `  pending: "Pendentes",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 37 | `};` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 38 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 39 | `export interface TaskLike {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 40 | `  due_date: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 41 | `  status: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 42 | `  completed_at: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 43 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 44 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 45 | `export function matchDateFilter(task: TaskLike, filter: DateFilter): boolean {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 46 | `  const now = new Date();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 47 | `  const due = task.due_date ? new Date(task.due_date) : null;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 48 | `  const isDone = task.status === "done" || !!task.completed_at;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 49 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 50 | `  switch (filter) {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 51 | `    case "all":` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 52 | `      return true;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 53 | `    case "today":` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 54 | `      if (!due) return false;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 55 | `      return isWithinInterval(due, { start: startOfDay(now), end: endOfDay(now) });` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 56 | `    case "due_today":` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 57 | `      if (!due || isDone) return false;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 58 | `      return isWithinInterval(due, { start: startOfDay(now), end: endOfDay(now) });` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 59 | `    case "tomorrow":` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 60 | `      if (!due) return false;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 61 | `      const t = addDays(now, 1);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 62 | `      return isWithinInterval(due, { start: startOfDay(t), end: endOfDay(t) });` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 63 | `    case "this_week":` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 64 | `      if (!due) return false;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 65 | `      return isWithinInterval(due, {` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 66 | `        start: startOfWeek(now, { weekStartsOn: 1 }),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 67 | `        end: endOfWeek(now, { weekStartsOn: 1 }),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 68 | `      });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 69 | `    case "this_month":` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 70 | `      if (!due) return false;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 71 | `      return isWithinInterval(due, { start: startOfMonth(now), end: endOfMonth(now) });` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 72 | `    case "overdue":` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 73 | `      if (!due || isDone) return false;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 74 | `      return isBefore(due, startOfDay(now));` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 75 | `    case "no_due":` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 76 | `      return !due;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 77 | `    case "completed":` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 78 | `      return isDone;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 79 | `    case "pending":` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 80 | `      return !isDone;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 81 | `  }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 82 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 83 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 84 | `export function taskUrgency(task: TaskLike): "overdue" | "due_today" | "due_soon" | "ok" {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 85 | `  if (!task.due_date) return "ok";` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 86 | `  if (task.status === "done") return "ok";` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 87 | `  const due = new Date(task.due_date);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 88 | `  const now = new Date();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 89 | `  if (isWithinInterval(due, { start: startOfDay(now), end: endOfDay(now) })) return "due_today";` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 90 | `  if (isBefore(due, startOfDay(now))) return "overdue";` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 91 | `  if (isAfter(due, now) && isBefore(due, addDays(now, 2))) return "due_soon";` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 92 | `  return "ok";` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 93 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 94 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 95 | `export const priorityLabels = {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 96 | `  low: "Baixa",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 97 | `  medium: "Média",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 98 | `  high: "Alta",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 99 | `  urgent: "Urgente",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 100 | `} as const;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 101 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 102 | `export const priorityColors: Record<string, string> = {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 103 | `  low: "#64748b",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 104 | `  medium: "#2563eb",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 105 | `  high: "#f59e0b",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 106 | `  urgent: "#dc2626",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 107 | `};` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 108 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 109 | `export const statusLabels = {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 110 | `  todo: "A Fazer",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 111 | `  in_progress: "Em Andamento",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 112 | `  review: "Em Revisão",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 113 | `  done: "Concluído",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 114 | `} as const;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 115 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
