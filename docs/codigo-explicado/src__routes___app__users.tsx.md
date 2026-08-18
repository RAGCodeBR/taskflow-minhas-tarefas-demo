# src/routes/_app/users.tsx

Tipo: Componente ou rota React em TypeScript.

Este documento foi gerado para estudo e manutencao. Ele preserva o codigo original e explica linha por linha sem alterar o comportamento do sistema publicado.

| Linha | Codigo original | Explicacao |
| ---: | --- | --- |
| 1 | `import { createFileRoute, Navigate } from "@tanstack/react-router";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 2 | `import { useMemo, useState } from "react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 3 | `import { useProfiles, useTasks } from "@/hooks/use-data";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 4 | `import { Card } from "@/components/ui/card";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 5 | `import { Avatar, AvatarFallback } from "@/components/ui/avatar";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 6 | `import { Badge } from "@/components/ui/badge";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 7 | `import { Button } from "@/components/ui/button";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 8 | `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 9 | `import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 10 | `import { supabase } from "@/integrations/supabase/client";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 11 | `import { useAuth } from "@/hooks/use-auth";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 12 | `import { toast } from "sonner";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 13 | `import { Archive, UserCheck, UserX, ShieldCheck, User as UserIcon, ArrowRightLeft, Trash2 } from "lucide-react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 14 | `import { useServerFn } from "@tanstack/react-start";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 15 | `import { deleteUserCompletely } from "@/lib/admin-users.functions";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 16 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 17 | `export const Route = createFileRoute("/_app/users")({` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 18 | `  component: UsersPage,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 19 | `});` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 20 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 21 | `function UsersPage() {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 22 | `  const { isAdmin, user, loading } = useAuth();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 23 | `  const qc = useQueryClient();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 24 | `  const { data: profiles = [] } = useProfiles();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 25 | `  const { data: tasks = [] } = useTasks();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 26 | `  const { data: roles = [] } = useQuery({` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 27 | `    queryKey: ["roles"],` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 28 | `    queryFn: async () => (await supabase.from("user_roles").select("user_id, role")).data ?? [],` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 29 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 30 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 31 | `  const setRole = useMutation({` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 32 | `    mutationFn: async ({ userId, role }: { userId: string; role: "admin" | "member" }) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 33 | `      await supabase.from("user_roles").delete().eq("user_id", userId);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 34 | `      const { error } = await supabase.from("user_roles").insert({ user_id: userId, role });` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 35 | `      if (error) throw error;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 36 | `    },` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 37 | `    onSuccess: () => { qc.invalidateQueries({ queryKey: ["roles"] }); toast.success("Papel atualizado"); },` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 38 | `    onError: (e: any) => toast.error(e.message),` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 39 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 40 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 41 | `  const setActive = useMutation({` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 42 | `    mutationFn: async ({ userId, active }: { userId: string; active: boolean }) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 43 | `      const { error } = await (supabase.from("profiles") as any).update({ is_active: active }).eq("id", userId);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 44 | `      if (error) throw error;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 45 | `    },` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 46 | `    onSuccess: () => { qc.invalidateQueries({ queryKey: ["profiles"] }); toast.success("Status atualizado"); },` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 47 | `    onError: (e: any) => toast.error(e.message),` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 48 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 49 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 50 | `  const reassignTask = useMutation({` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 51 | `    mutationFn: async ({ taskId, newAssignee }: { taskId: string; newAssignee: string }) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 52 | `      const { error } = await supabase.from("tasks").update({ assignee_id: newAssignee }).eq("id", taskId);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 53 | `      if (error) throw error;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 54 | `    },` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 55 | `    onSuccess: () => { qc.invalidateQueries({ queryKey: ["tasks"] }); toast.success("Tarefa reatribuída"); },` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 56 | `    onError: (e: any) => toast.error(e.message),` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 57 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 58 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 59 | `  const deleteFn = useServerFn(deleteUserCompletely);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 60 | `  const deleteUser = useMutation({` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 61 | `    mutationFn: async (userId: string) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 62 | `      await deleteFn({ data: { userId } });` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 63 | `    },` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 64 | `    onSuccess: () => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 65 | `      qc.invalidateQueries({ queryKey: ["profiles"] });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 66 | `      qc.invalidateQueries({ queryKey: ["roles"] });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 67 | `      qc.invalidateQueries({ queryKey: ["tasks"] });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 68 | `      toast.success("Usuário excluído permanentemente");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 69 | `    },` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 70 | `    onError: (e: any) => toast.error(e?.message ?? "Erro ao excluir"),` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 71 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 72 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 73 | `  const [reassignTarget, setReassignTarget] = useState<Record<string, string>>({});` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 74 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 75 | `  const activeProfiles = useMemo(() => profiles.filter(p => (p as any).is_active !== false), [profiles]);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 76 | `  const inactiveProfiles = useMemo(() => profiles.filter(p => (p as any).is_active === false), [profiles]);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 77 | `  const orphanTasks = useMemo(() => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 78 | `    const inactiveIds = new Set(inactiveProfiles.map(p => p.id));` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 79 | `    return tasks.filter(t => t.assignee_id && inactiveIds.has(t.assignee_id));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 80 | `  }, [tasks, inactiveProfiles]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 81 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 82 | `  if (loading) return <div className="p-6 text-sm text-muted-foreground">Carregando…</div>;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 83 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 84 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 85 | `    <div className="space-y-6 p-6">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 86 | `      <header>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 87 | `        <h1 className="text-2xl font-bold tracking-tight">Usuários</h1>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 88 | `        <p className="text-sm text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 89 | `          {isAdmin ? "Gerencie papéis e acesso da equipe" : "Membros da equipe"}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 90 | `        </p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 91 | `      </header>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 92 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 93 | `      <div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 94 | `        <h2 className="mb-3 text-sm font-semibold text-muted-foreground">Ativos ({activeProfiles.length})</h2>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 95 | `        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 96 | `          {activeProfiles.map(p => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 97 | `            const userRoles = roles.filter(r => r.user_id === p.id).map(r => r.role);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 98 | `            const isUserAdmin = userRoles.includes("admin");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 99 | `            const userTasks = tasks.filter(t => t.assignee_id === p.id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 100 | `            const done = userTasks.filter(t => t.status === "done").length;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 101 | `            const isSelf = p.id === user?.id;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 102 | `            return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 103 | `              <Card key={p.id} className="p-4">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 104 | `                <div className="flex items-center gap-3">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 105 | `                  <Avatar className="h-12 w-12">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 106 | `                    <AvatarFallback style={{ background: p.color || "#1e3a8a", color: "white" }}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 107 | `                      {(p.full_name || p.email || "?").slice(0, 2).toUpperCase()}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 108 | `                    </AvatarFallback>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 109 | `                  </Avatar>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 110 | `                  <div className="min-w-0 flex-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 111 | `                    <h3 className="truncate font-semibold">{p.full_name || "Sem nome"}</h3>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 112 | `                    <p className="truncate text-xs text-muted-foreground">{p.email}</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 113 | `                  </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 114 | `                  {isUserAdmin ? <ShieldCheck className="h-4 w-4 text-primary" /> : <UserIcon className="h-4 w-4 text-muted-foreground" />}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 115 | `                </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 116 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 117 | `                <div className="mt-3 flex flex-wrap gap-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 118 | `                  {isUserAdmin && <Badge>Admin</Badge>}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 119 | `                  {!isUserAdmin && <Badge variant="secondary">Membro</Badge>}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 120 | `                  {isSelf && <Badge variant="outline" className="text-xs">Você</Badge>}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 121 | `                </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 122 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 123 | `                <div className="mt-3 grid grid-cols-2 gap-2 text-center text-xs">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 124 | `                  <div className="rounded bg-muted p-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 125 | `                    <p className="text-lg font-bold">{userTasks.length}</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 126 | `                    <p className="text-muted-foreground">Total</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 127 | `                  </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 128 | `                  <div className="rounded bg-muted p-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 129 | `                    <p className="text-lg font-bold text-emerald-600">{done}</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 130 | `                    <p className="text-muted-foreground">Concluídas</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 131 | `                  </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 132 | `                </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 133 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 134 | `                {isAdmin && !isSelf && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 135 | `                  <div className="mt-3 space-y-2 border-t pt-3">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 136 | `                    <Select` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 137 | `                      value={isUserAdmin ? "admin" : "member"}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 138 | `                      onValueChange={(v) => setRole.mutate({ userId: p.id, role: v as "admin" | "member" })}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 139 | `                    >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 140 | `                      <SelectTrigger className="h-8 text-xs"><SelectValue /></SelectTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 141 | `                      <SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 142 | `                        <SelectItem value="member">Membro</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 143 | `                        <SelectItem value="admin">Administrador</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 144 | `                      </SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 145 | `                    </Select>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 146 | `                    <Button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 147 | `                      size="sm"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 148 | `                      variant="outline"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 149 | `                      className="w-full text-xs"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 150 | `                      onClick={() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 151 | `                        if (confirm(\`Desativar ${p.full_name || p.email}? As tarefas dele(a) somem do kanban mas continuam visíveis em relatórios.\`)) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 152 | `                          setActive.mutate({ userId: p.id, active: false });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 153 | `                        }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 154 | `                      }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 155 | `                    >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 156 | `                      <UserX className="mr-1 h-3 w-3" /> Desativar acesso` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 157 | `                    </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 158 | `                    <Button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 159 | `                      size="sm"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 160 | `                      variant="destructive"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 161 | `                      className="w-full text-xs"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 162 | `                      disabled={deleteUser.isPending}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 163 | `                      onClick={() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 164 | `                        if (` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 165 | `                          confirm(` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 166 | `                            \`⚠️ EXCLUIR PERMANENTEMENTE ${p.full_name || p.email}?\n\nTudo será apagado: tarefas, anotações, arquivos, tags, status, colunas e o login.\nO email poderá criar uma nova conta do zero.\n\nEsta ação NÃO pode ser desfeita.\`,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 167 | `                          )` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 168 | `                        ) {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 169 | `                          deleteUser.mutate(p.id);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 170 | `                        }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 171 | `                      }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 172 | `                    >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 173 | `                      <Trash2 className="mr-1 h-3 w-3" /> Excluir do sistema` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 174 | `                    </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 175 | `                  </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 176 | `                )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 177 | `              </Card>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 178 | `            );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 179 | `          })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 180 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 181 | `      </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 182 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 183 | `      {isAdmin && inactiveProfiles.length > 0 && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 184 | `        <div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 185 | `          <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 186 | `            <Archive className="h-4 w-4" /> Desativados ({inactiveProfiles.length})` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 187 | `          </h2>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 188 | `          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 189 | `            {inactiveProfiles.map(p => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 190 | `              <Card key={p.id} className="border-dashed p-4 opacity-75">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 191 | `                <div className="flex items-center gap-3">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 192 | `                  <Avatar className="h-10 w-10 grayscale">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 193 | `                    <AvatarFallback style={{ background: "#64748b", color: "white" }}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 194 | `                      {(p.full_name || p.email || "?").slice(0, 2).toUpperCase()}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 195 | `                    </AvatarFallback>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 196 | `                  </Avatar>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 197 | `                  <div className="min-w-0 flex-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 198 | `                    <h3 className="truncate text-sm font-semibold">{p.full_name || "Sem nome"}</h3>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 199 | `                    <p className="truncate text-xs text-muted-foreground">{p.email}</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 200 | `                  </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 201 | `                </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 202 | `                <div className="mt-3 grid grid-cols-2 gap-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 203 | `                  <Button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 204 | `                    size="sm"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 205 | `                    className="text-xs"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 206 | `                    variant="outline"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 207 | `                    onClick={() => setActive.mutate({ userId: p.id, active: true })}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 208 | `                  >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 209 | `                    <UserCheck className="mr-1 h-3 w-3" /> Reativar` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 210 | `                  </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 211 | `                  <Button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 212 | `                    size="sm"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 213 | `                    variant="destructive"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 214 | `                    className="text-xs"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 215 | `                    disabled={deleteUser.isPending}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 216 | `                    onClick={() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 217 | `                      if (` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 218 | `                        confirm(` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 219 | `                          \`⚠️ EXCLUIR PERMANENTEMENTE ${p.full_name || p.email}?\n\nTudo será apagado e o email poderá criar uma nova conta do zero.\nEsta ação NÃO pode ser desfeita.\`,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 220 | `                        )` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 221 | `                      ) {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 222 | `                        deleteUser.mutate(p.id);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 223 | `                      }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 224 | `                    }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 225 | `                  >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 226 | `                    <Trash2 className="mr-1 h-3 w-3" /> Excluir` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 227 | `                  </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 228 | `                </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 229 | `              </Card>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 230 | `            ))}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 231 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 232 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 233 | `      )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 234 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 235 | `      {isAdmin && orphanTasks.length > 0 && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 236 | `        <Card className="p-4">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 237 | `          <h2 className="mb-2 flex items-center gap-2 font-semibold">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 238 | `            <ArrowRightLeft className="h-4 w-4" /> Tarefas de membros desativados ({orphanTasks.length})` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 239 | `          </h2>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 240 | `          <p className="mb-3 text-xs text-muted-foreground">Reatribua para um membro ativo.</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 241 | `          <div className="space-y-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 242 | `            {orphanTasks.map(t => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 243 | `              const target = reassignTarget[t.id] ?? "";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 244 | `              return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 245 | `                <div key={t.id} className="flex flex-wrap items-center gap-2 rounded border p-2 text-sm">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 246 | `                  <span className="flex-1 truncate">{t.title}</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 247 | `                  <Select value={target} onValueChange={(v) => setReassignTarget(s => ({ ...s, [t.id]: v }))}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 248 | `                    <SelectTrigger className="h-8 w-48 text-xs"><SelectValue placeholder="Escolher membro…" /></SelectTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 249 | `                    <SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 250 | `                      {activeProfiles.map(ap => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 251 | `                        <SelectItem key={ap.id} value={ap.id}>{ap.full_name || ap.email}</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 252 | `                      ))}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 253 | `                    </SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 254 | `                  </Select>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 255 | `                  <Button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 256 | `                    size="sm"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 257 | `                    disabled={!target}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 258 | `                    onClick={() => reassignTask.mutate({ taskId: t.id, newAssignee: target })}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 259 | `                  >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 260 | `                    Reatribuir` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 261 | `                  </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 262 | `                </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 263 | `              );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 264 | `            })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 265 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 266 | `        </Card>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 267 | `      )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 268 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 269 | `      {!isAdmin && <Navigate to="/dashboard" />}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 270 | `    </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 271 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 272 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 273 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
