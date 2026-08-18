# src/hooks/use-data.ts

Tipo: Modulo TypeScript.

Este documento foi gerado para estudo e manutencao. Ele preserva o codigo original e explica linha por linha sem alterar o comportamento do sistema publicado.

| Linha | Codigo original | Explicacao |
| ---: | --- | --- |
| 1 | `import { useEffect } from "react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 2 | `import { useQuery, useQueryClient } from "@tanstack/react-query";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 3 | `import { supabase } from "@/integrations/supabase/client";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 4 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 5 | `/**` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 6 | ` * Data access layer for the TaskFlow screens.` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 7 | ` *` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 8 | ` * Most pages should read data through these hooks instead of calling Supabase directly.` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 9 | ` * That keeps cache keys, filters and real-time invalidation in one place. When this clean` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 10 | ` * copy points to a new database, the table names must still match the migrations under` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 11 | ` * supabase/migrations.` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 12 | ` */` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 13 | `export interface Task {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 14 | `  id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 15 | `  title: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 16 | `  description: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 17 | `  status: "todo" | "in_progress" | "review" | "done" | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 18 | `  status_id: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 19 | `  priority: "low" | "medium" | "high" | "urgent" | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 20 | `  due_date: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 21 | `  assignee_id: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 22 | `  client_id: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 23 | `  column_id: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 24 | `  position: number;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 25 | `  color: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 26 | `  completed_at: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 27 | `  created_by: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 28 | `  tag_id: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 29 | `  interruptions: number;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 30 | `  deleted_at: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 31 | `  deleted_by: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 32 | `  created_at: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 33 | `  updated_at: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 34 | `  card_width: number | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 35 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 36 | `export interface TaskStatus {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 37 | `  id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 38 | `  name: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 39 | `  color: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 40 | `  position: number;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 41 | `  is_completed: boolean;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 42 | `  is_active: boolean;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 43 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 44 | `export interface TaskTag {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 45 | `  id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 46 | `  name: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 47 | `  color: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 48 | `  position: number;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 49 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 50 | `export interface KanbanColumn {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 51 | `  id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 52 | `  name: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 53 | `  color: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 54 | `  position: number;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 55 | `  client_id: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 56 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 57 | `export interface Client {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 58 | `  id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 59 | `  name: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 60 | `  color: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 61 | `  description: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 62 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 63 | `export interface Profile {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 64 | `  id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 65 | `  full_name: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 66 | `  email: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 67 | `  color: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 68 | `  avatar_url: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 69 | `  is_active?: boolean;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 70 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 71 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 72 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 73 | `export function useTasks() {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 74 | `  return useQuery({` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 75 | `    queryKey: ["tasks"],` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 76 | `    queryFn: async () => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 77 | `      // Soft-delete strategy: deleted tasks stay in the database, but normal screens hide them.` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 78 | `      const { data, error } = await supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 79 | `        .from("tasks")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 80 | `        .select("*")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 81 | `        .is("deleted_at", null)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 82 | `        .order("position", { ascending: true })` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 83 | `        .order("created_at", { ascending: false });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 84 | `      if (error) throw error;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 85 | `      return (data ?? []) as Task[];` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 86 | `    },` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 87 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 88 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 89 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 90 | `export function useDeletedTasks() {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 91 | `  return useQuery({` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 92 | `    queryKey: ["tasks", "deleted"],` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 93 | `    queryFn: async () => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 94 | `      // Trash page uses the opposite filter so records can be restored later.` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 95 | `      const { data, error } = await supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 96 | `        .from("tasks")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 97 | `        .select("*")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 98 | `        .not("deleted_at", "is", null)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 99 | `        .order("deleted_at", { ascending: false });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 100 | `      if (error) throw error;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 101 | `      return (data ?? []) as Task[];` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 102 | `    },` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 103 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 104 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 105 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 106 | `export function useColumns() {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 107 | `  return useQuery({` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 108 | `    queryKey: ["columns"],` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 109 | `    queryFn: async () => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 110 | `      // Kanban columns are global unless client_id is filled for client-specific boards.` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 111 | `      const { data, error } = await supabase.from("kanban_columns").select("*").order("position");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 112 | `      if (error) throw error;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 113 | `      return (data ?? []) as KanbanColumn[];` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 114 | `    },` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 115 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 116 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 117 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 118 | `export interface UserColumnOrder { column_id: string; position: number }` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 119 | `export function useUserColumnOrder() {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 120 | `  return useQuery({` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 121 | `    queryKey: ["user_column_order"],` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 122 | `    queryFn: async () => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 123 | `      // Per-user layout preferences are optional; anonymous/non-loaded users get the default order.` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 124 | `      const { data: u } = await supabase.auth.getUser();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 125 | `      const uid = u.user?.id;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 126 | `      if (!uid) return [] as UserColumnOrder[];` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 127 | `      const { data, error } = await supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 128 | `        .from("user_column_order")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 129 | `        .select("column_id, position")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 130 | `        .eq("user_id", uid);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 131 | `      if (error) throw error;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 132 | `      return (data ?? []) as UserColumnOrder[];` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 133 | `    },` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 134 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 135 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 136 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 137 | `export interface UserTaskOrder { task_id: string; position: number }` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 138 | `export function useUserTaskOrder() {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 139 | `  return useQuery({` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 140 | `    queryKey: ["user_task_order"],` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 141 | `    queryFn: async () => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 142 | `      const { data: u } = await supabase.auth.getUser();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 143 | `      const uid = u.user?.id;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 144 | `      if (!uid) return [] as UserTaskOrder[];` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 145 | `      const { data, error } = await supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 146 | `        .from("user_task_order")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 147 | `        .select("task_id, position")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 148 | `        .eq("user_id", uid);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 149 | `      if (error) throw error;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 150 | `      return (data ?? []) as UserTaskOrder[];` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 151 | `    },` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 152 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 153 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 154 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 155 | `export function useClients() {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 156 | `  return useQuery({` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 157 | `    queryKey: ["clients"],` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 158 | `    queryFn: async () => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 159 | `      const { data, error } = await supabase.from("clients").select("*").order("name");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 160 | `      if (error) throw error;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 161 | `      return (data ?? []) as Client[];` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 162 | `    },` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 163 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 164 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 165 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 166 | `export function useProfiles() {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 167 | `  return useQuery({` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 168 | `    queryKey: ["profiles"],` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 169 | `    queryFn: async () => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 170 | `      const { data, error } = await (supabase.from("profiles") as any).select("id, full_name, color, avatar_url, is_active");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 171 | `      if (error) throw error;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 172 | `      return (data ?? []) as Profile[];` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 173 | `    },` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 174 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 175 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 176 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 177 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 178 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 179 | `export function useTaskTags() {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 180 | `  return useQuery({` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 181 | `    queryKey: ["task_tags"],` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 182 | `    queryFn: async () => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 183 | `      const { data, error } = await supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 184 | `        .from("task_tags")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 185 | `        .select("*")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 186 | `        .order("position", { ascending: true })` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 187 | `        .order("name", { ascending: true });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 188 | `      if (error) throw error;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 189 | `      return (data ?? []) as TaskTag[];` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 190 | `    },` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 191 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 192 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 193 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 194 | `export interface TaskTagLink { task_id: string; tag_id: string }` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 195 | `export function useTaskTagLinks() {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 196 | `  return useQuery({` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 197 | `    queryKey: ["task_tag_links"],` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 198 | `    queryFn: async () => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 199 | `      const { data, error } = await supabase.from("task_tag_links").select("task_id, tag_id");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 200 | `      if (error) throw error;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 201 | `      return (data ?? []) as TaskTagLink[];` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 202 | `    },` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 203 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 204 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 205 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 206 | `export interface Subtask {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 207 | `  id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 208 | `  task_id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 209 | `  title: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 210 | `  done: boolean;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 211 | `  position: number;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 212 | `  assignee_id: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 213 | `  due_date: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 214 | `  completed_at: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 215 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 216 | `export function useSubtasks() {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 217 | `  const qc = useQueryClient();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 218 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 219 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 220 | `    // Realtime updates keep task/subtask counters fresh across browser tabs and team members.` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 221 | `    const channel = supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 222 | `      .channel(\`subtasks-cache-${Math.random().toString(36).slice(2)}\`)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 223 | `      .on(` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 224 | `        "postgres_changes",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 225 | `        { event: "*", schema: "public", table: "subtasks" },` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 226 | `        () => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 227 | `          void qc.invalidateQueries({ queryKey: ["subtasks"] });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 228 | `          void qc.invalidateQueries({ queryKey: ["tasks"] });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 229 | `        },` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 230 | `      )` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 231 | `      .subscribe();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 232 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 233 | `    return () => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 234 | `      void supabase.removeChannel(channel);` | Interage com o cliente Supabase para autenticar ou acessar o banco. |
| 235 | `    };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 236 | `  }, [qc]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 237 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 238 | `  return useQuery({` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 239 | `    queryKey: ["subtasks"],` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 240 | `    queryFn: async () => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 241 | `      const { data, error } = await supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 242 | `        .from("subtasks")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 243 | `        .select("id, task_id, title, done, position, assignee_id, due_date, completed_at")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 244 | `        .order("position");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 245 | `      if (error) throw error;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 246 | `      return (data ?? []) as Subtask[];` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 247 | `    },` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 248 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 249 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 250 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 251 | `export function useTaskStatuses() {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 252 | `  return useQuery({` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 253 | `    queryKey: ["task_statuses"],` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 254 | `    queryFn: async () => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 255 | `      const { data, error } = await supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 256 | `        .from("task_statuses")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 257 | `        .select("*")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 258 | `        .order("position");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 259 | `      if (error) throw error;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 260 | `      return (data ?? []) as TaskStatus[];` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 261 | `    },` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 262 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 263 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 264 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
