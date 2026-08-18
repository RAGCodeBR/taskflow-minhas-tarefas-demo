# src/routes/_app/trash.tsx

Tipo: Componente ou rota React em TypeScript.

Este documento foi gerado para estudo e manutencao. Ele preserva o codigo original e explica linha por linha sem alterar o comportamento do sistema publicado.

| Linha | Codigo original | Explicacao |
| ---: | --- | --- |
| 1 | `import { createFileRoute } from "@tanstack/react-router";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 2 | `import { useQueryClient } from "@tanstack/react-query";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 3 | `import { Trash2, RotateCcw } from "lucide-react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 4 | `import { toast } from "sonner";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 5 | `import { format } from "date-fns";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 6 | `import { supabase } from "@/integrations/supabase/client";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 7 | `import { Button } from "@/components/ui/button";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 8 | `import { useDeletedTasks, useClients, useProfiles } from "@/hooks/use-data";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 9 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 10 | `export const Route = createFileRoute("/_app/trash")({` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 11 | `  component: TrashPage,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 12 | `});` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 13 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 14 | `function TrashPage() {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 15 | `  const qc = useQueryClient();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 16 | `  const { data: tasks = [], isLoading } = useDeletedTasks();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 17 | `  const { data: clients = [] } = useClients();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 18 | `  const { data: profiles = [] } = useProfiles();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 19 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 20 | `  const restore = async (id: string) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 21 | `    const { error } = await supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 22 | `      .from("tasks")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 23 | `      .update({ deleted_at: null, deleted_by: null })` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 24 | `      .eq("id", id);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 25 | `    if (error) return toast.error(error.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 26 | `    toast.success("Tarefa restaurada");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 27 | `    qc.invalidateQueries({ queryKey: ["tasks"] });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 28 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 29 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 30 | `  const purge = async (id: string) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 31 | `    if (!confirm("Excluir esta tarefa permanentemente? Esta ação não pode ser desfeita.")) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 32 | `    const { error } = await supabase.from("tasks").delete().eq("id", id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 33 | `    if (error) return toast.error(error.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 34 | `    toast.success("Tarefa excluída permanentemente");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 35 | `    qc.invalidateQueries({ queryKey: ["tasks", "deleted"] });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 36 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 37 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 38 | `  const purgeAll = async () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 39 | `    if (!tasks.length) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 40 | `    if (!confirm(\`Excluir permanentemente ${tasks.length} tarefa(s) da lixeira?\`)) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 41 | `    const ids = tasks.map((t) => t.id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 42 | `    const { error } = await supabase.from("tasks").delete().in("id", ids);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 43 | `    if (error) return toast.error(error.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 44 | `    toast.success("Lixeira esvaziada");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 45 | `    qc.invalidateQueries({ queryKey: ["tasks", "deleted"] });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 46 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 47 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 48 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 49 | `    <div className="p-6">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 50 | `      <header className="mb-4 flex items-center justify-between gap-4">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 51 | `        <div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 52 | `          <h1 className="text-2xl font-bold tracking-tight">Lixeira</h1>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 53 | `          <p className="text-sm text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 54 | `            Tarefas excluídas. Restaure ou apague permanentemente.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 55 | `          </p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 56 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 57 | `        {tasks.length > 0 && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 58 | `          <Button variant="destructive" onClick={purgeAll}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 59 | `            <Trash2 className="mr-2 h-4 w-4" />Esvaziar lixeira` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 60 | `          </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 61 | `        )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 62 | `      </header>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 63 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 64 | `      {isLoading ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 65 | `        <p className="text-sm text-muted-foreground">Carregando…</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 66 | `      ) : tasks.length === 0 ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 67 | `        <div className="rounded-lg border border-dashed p-12 text-center text-sm text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 68 | `          A lixeira está vazia.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 69 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 70 | `      ) : (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 71 | `        <div className="overflow-hidden rounded-lg border">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 72 | `          <table className="w-full text-sm">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 73 | `            <thead className="bg-muted/50 text-xs uppercase text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 74 | `              <tr>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 75 | `                <th className="px-3 py-2 text-left">Título</th>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 76 | `                <th className="px-3 py-2 text-left">Cliente</th>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 77 | `                <th className="px-3 py-2 text-left">Responsável</th>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 78 | `                <th className="px-3 py-2 text-left">Excluída em</th>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 79 | `                <th className="px-3 py-2 text-right">Ações</th>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 80 | `              </tr>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 81 | `            </thead>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 82 | `            <tbody>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 83 | `              {tasks.map((t) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 84 | `                const c = clients.find((x) => x.id === t.client_id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 85 | `                const a = profiles.find((p) => p.id === t.assignee_id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 86 | `                return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 87 | `                  <tr key={t.id} className="border-t">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 88 | `                    <td className="px-3 py-2 font-medium">{t.title}</td>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 89 | `                    <td className="px-3 py-2 text-muted-foreground">{c?.name ?? "—"}</td>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 90 | `                    <td className="px-3 py-2 text-muted-foreground">{a?.full_name ?? a?.email ?? "—"}</td>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 91 | `                    <td className="px-3 py-2 text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 92 | `                      {t.deleted_at ? format(new Date(t.deleted_at), "dd/MM/yyyy HH:mm") : "—"}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 93 | `                    </td>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 94 | `                    <td className="px-3 py-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 95 | `                      <div className="flex justify-end gap-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 96 | `                        <Button size="sm" variant="outline" onClick={() => restore(t.id)}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 97 | `                          <RotateCcw className="mr-1.5 h-3.5 w-3.5" />Restaurar` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 98 | `                        </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 99 | `                        <Button size="sm" variant="ghost" className="text-destructive" onClick={() => purge(t.id)}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 100 | `                          <Trash2 className="h-3.5 w-3.5" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 101 | `                        </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 102 | `                      </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 103 | `                    </td>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 104 | `                  </tr>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 105 | `                );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 106 | `              })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 107 | `            </tbody>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 108 | `          </table>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 109 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 110 | `      )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 111 | `    </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 112 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 113 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 114 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
