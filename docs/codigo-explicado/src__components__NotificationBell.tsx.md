# src/components/NotificationBell.tsx

Tipo: Componente ou rota React em TypeScript.

Este documento foi gerado para estudo e manutencao. Ele preserva o codigo original e explica linha por linha sem alterar o comportamento do sistema publicado.

| Linha | Codigo original | Explicacao |
| ---: | --- | --- |
| 1 | `import { useEffect, useState } from "react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 2 | `import { Bell, Check, Trash2 } from "lucide-react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 3 | `import { useNavigate } from "@tanstack/react-router";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 4 | `import { useQueryClient } from "@tanstack/react-query";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 5 | `import { formatDistanceToNow } from "date-fns";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 6 | `import { ptBR } from "date-fns/locale";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 7 | `import { Button } from "@/components/ui/button";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 8 | `import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 9 | `import { useAuth } from "@/hooks/use-auth";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 10 | `import { supabase } from "@/integrations/supabase/client";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 11 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 12 | `interface Notification {` | Declara um contrato de tipos TypeScript para deixar os dados mais seguros e previsiveis. |
| 13 | `  id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 14 | `  user_id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 15 | `  task_id: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 16 | `  type: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 17 | `  title: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 18 | `  body: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 19 | `  is_read: boolean;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 20 | `  created_at: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 21 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 22 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 23 | `export function NotificationBell() {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 24 | `  const { user } = useAuth();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 25 | `  const navigate = useNavigate();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 26 | `  const qc = useQueryClient();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 27 | `  const [items, setItems] = useState<Notification[]>([]);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 28 | `  const [open, setOpen] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 29 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 30 | `  const refreshAssignedWork = () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 31 | `    qc.invalidateQueries({ queryKey: ["tasks"] });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 32 | `    qc.invalidateQueries({ queryKey: ["subtasks"] });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 33 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 34 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 35 | `  const load = async () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 36 | `    if (!user) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 37 | `    const { data } = await (supabase.from("notifications") as any)` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 38 | `      .select("*")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 39 | `      .eq("user_id", user.id)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 40 | `      .order("created_at", { ascending: false })` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 41 | `      .limit(30);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 42 | `    const next = (data ?? []) as Notification[];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 43 | `    if (next.some((n) => n.type === "assignment" || n.type === "subtask_assignment")) {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 44 | `      refreshAssignedWork();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 45 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 46 | `    setItems(next);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 47 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 48 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 49 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 50 | `    if (!user) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 51 | `    load();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 52 | `    const poll = window.setInterval(() => void load(), 15_000);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 53 | `    const channel = supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 54 | `      .channel(\`notifications-${user.id}-${Math.random().toString(36).slice(2)}\`)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 55 | `      .on(` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 56 | `        "postgres_changes",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 57 | `        { event: "*", schema: "public", table: "notifications", filter: \`user_id=eq.${user.id}\` },` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 58 | `        (payload: any) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 59 | `          const type = payload.new?.type ?? payload.old?.type;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 60 | `          if (type === "assignment" || type === "subtask_assignment") refreshAssignedWork();` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 61 | `          void load();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 62 | `        },` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 63 | `      )` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 64 | `      .subscribe();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 65 | `    return () => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 66 | `      window.clearInterval(poll);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 67 | `      supabase.removeChannel(channel);` | Interage com o cliente Supabase para autenticar ou acessar o banco. |
| 68 | `    };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 69 | `    // eslint-disable-next-line react-hooks/exhaustive-deps` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 70 | `  }, [user?.id]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 71 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 72 | `  const unread = items.filter((n) => !n.is_read).length;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 73 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 74 | `  const markRead = async (id: string) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 75 | `    await (supabase.from("notifications") as any).update({ is_read: true }).eq("id", id);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 76 | `    setItems((prev) => prev.map((n) => (n.id === id ? { ...n, is_read: true } : n)));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 77 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 78 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 79 | `  const markAllRead = async () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 80 | `    if (!user) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 81 | `    await (supabase.from("notifications") as any)` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 82 | `      .update({ is_read: true })` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 83 | `      .eq("user_id", user.id)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 84 | `      .eq("is_read", false);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 85 | `    setItems((prev) => prev.map((n) => ({ ...n, is_read: true })));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 86 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 87 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 88 | `  const remove = async (id: string) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 89 | `    await (supabase.from("notifications") as any).delete().eq("id", id);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 90 | `    setItems((prev) => prev.filter((n) => n.id !== id));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 91 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 92 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 93 | `  const openNotification = async (n: Notification) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 94 | `    if (!n.is_read) await markRead(n.id);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 95 | `    setOpen(false);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 96 | `    if (n.task_id) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 97 | `      navigate({ to: "/tasks/list", search: { task: n.task_id, mine: true } as any });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 98 | `    } else {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 99 | `      navigate({ to: "/tasks/list", search: { mine: true } as any });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 100 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 101 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 102 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 103 | `  if (!user) return null;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 104 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 105 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 106 | `    <Popover open={open} onOpenChange={setOpen}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 107 | `      <PopoverTrigger asChild>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 108 | `        <Button size="icon" variant="ghost" className="relative h-9 w-9" title="Notificações">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 109 | `          <Bell className="h-5 w-5" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 110 | `          {unread > 0 && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 111 | `            <span className="absolute -top-0.5 -right-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-destructive px-1 text-[10px] font-semibold text-destructive-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 112 | `              {unread > 99 ? "99+" : unread}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 113 | `            </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 114 | `          )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 115 | `        </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 116 | `      </PopoverTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 117 | `      <PopoverContent align="end" className="w-96 p-0">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 118 | `        <div className="flex items-center justify-between border-b px-4 py-3">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 119 | `          <div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 120 | `            <p className="text-sm font-semibold">Notificações</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 121 | `            <p className="text-xs text-muted-foreground">{unread > 0 ? \`${unread} não lidas\` : "Tudo em dia"}</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 122 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 123 | `          <Button size="sm" variant="ghost" disabled={unread === 0} onClick={markAllRead}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 124 | `            <Check className="mr-1 h-3.5 w-3.5" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 125 | `            Marcar todas` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 126 | `          </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 127 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 128 | `        <div className="max-h-[420px] overflow-y-auto">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 129 | `          {items.length === 0 && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 130 | `            <p className="px-4 py-8 text-center text-sm text-muted-foreground">Sem notificações</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 131 | `          )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 132 | `          {items.map((n) => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 133 | `            <div` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 134 | `              key={n.id}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 135 | `              className={\`group relative flex cursor-pointer gap-3 border-b px-4 py-3 text-sm transition hover:bg-muted/50 ${` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 136 | `                !n.is_read ? "bg-primary/5" : ""` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 137 | `              }\`}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 138 | `              onClick={() => openNotification(n)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 139 | `            >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 140 | `              {!n.is_read && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 141 | `                <span className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-primary" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 142 | `              )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 143 | `              <div className="min-w-0 flex-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 144 | `                <p className="font-medium leading-tight">{n.title}</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 145 | `                {n.body && <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">{n.body}</p>}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 146 | `                <p className="mt-1 text-[11px] text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 147 | `                  {formatDistanceToNow(new Date(n.created_at), { addSuffix: true, locale: ptBR })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 148 | `                </p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 149 | `              </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 150 | `              <Button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 151 | `                size="icon"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 152 | `                variant="ghost"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 153 | `                className="h-7 w-7 opacity-0 group-hover:opacity-100"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 154 | `                onClick={(e) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 155 | `                  e.stopPropagation();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 156 | `                  remove(n.id);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 157 | `                }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 158 | `              >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 159 | `                <Trash2 className="h-3.5 w-3.5" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 160 | `              </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 161 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 162 | `          ))}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 163 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 164 | `      </PopoverContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 165 | `    </Popover>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 166 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 167 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 168 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
