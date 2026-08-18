# src/components/AppShell.tsx

Tipo: Componente ou rota React em TypeScript.

Este documento foi gerado para estudo e manutencao. Ele preserva o codigo original e explica linha por linha sem alterar o comportamento do sistema publicado.

| Linha | Codigo original | Explicacao |
| ---: | --- | --- |
| 1 | `import { Link, useRouterState } from "@tanstack/react-router";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 2 | `import { useAuth } from "@/hooks/use-auth";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 3 | `import { Avatar, AvatarFallback } from "@/components/ui/avatar";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 4 | `import { Button } from "@/components/ui/button";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 5 | `import { LayoutDashboard, ListChecks, Users, Building2, Settings, LogOut, Moon, Sun, PanelLeft, PanelRight, NotebookPen, BarChart3, Trash2, FileUp } from "lucide-react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 6 | `import { NotificationBell } from "@/components/NotificationBell";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 7 | `import { AssignmentPopup } from "@/components/AssignmentPopup";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 8 | `import { useEffect, useMemo, useState, type ReactNode } from "react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 9 | `import taskflowLogo from "@/assets/taskflow-logo.png.asset.json";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 10 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 11 | `function useTheme() {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 12 | `  const [theme, setTheme] = useState<"light" | "dark">(() => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 13 | `    if (typeof window === "undefined") return "light";` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 14 | `    const stored = localStorage.getItem("theme");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 15 | `    if (stored === "dark" || stored === "light") return stored;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 16 | `    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 17 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 18 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 19 | `    document.documentElement.classList.toggle("dark", theme === "dark");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 20 | `    localStorage.setItem("theme", theme);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 21 | `  }, [theme]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 22 | `  return { theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")) };` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 23 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 24 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 25 | `type NavItem = { to: string; label: string; icon: typeof LayoutDashboard; adminOnly?: boolean };` | Declara um contrato de tipos TypeScript para deixar os dados mais seguros e previsiveis. |
| 26 | `const allNav: readonly NavItem[] = [` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 27 | `  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 28 | `  { to: "/tasks", label: "Minhas Tarefas", icon: ListChecks },` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 29 | `  { to: "/notes", label: "Anotações", icon: NotebookPen },` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 30 | `  { to: "/import-ata", label: "Importar Ata", icon: FileUp },` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 31 | `  { to: "/clients", label: "Clientes", icon: Building2 },` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 32 | `  { to: "/reports", label: "Relatórios", icon: BarChart3, adminOnly: true },` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 33 | `  { to: "/users", label: "Usuários", icon: Users, adminOnly: true },` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 34 | `  { to: "/trash", label: "Lixeira", icon: Trash2 },` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 35 | `  { to: "/settings", label: "Personalizar", icon: Settings },` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 36 | `] as const;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 37 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 38 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 39 | `export function AppShell({ children }: { children: ReactNode }) {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 40 | `  const { profile, user, signOut, isAdmin } = useAuth();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 41 | `  const nav = useMemo(() => allNav.filter(n => !n.adminOnly || isAdmin), [isAdmin]);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 42 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 43 | `  const { theme, toggle } = useTheme();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 44 | `  const [sidebarOpen, setSidebarOpen] = useState(() => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 45 | `    if (typeof window === "undefined") return true;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 46 | `    const stored = localStorage.getItem("sidebar-open");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 47 | `    return stored === null ? true : stored === "true";` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 48 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 49 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 50 | `    localStorage.setItem("sidebar-open", String(sidebarOpen));` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 51 | `  }, [sidebarOpen]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 52 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 53 | `  const pathname = useRouterState({ select: (s) => s.location.pathname });` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 54 | `  const initials = (profile?.full_name || user?.email || "?").slice(0, 2).toUpperCase();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 55 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 56 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 57 | `    <div className="flex min-h-screen bg-background">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 58 | `      <aside` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 59 | `        className={\`hidden shrink-0 flex-col text-sidebar-foreground transition-all duration-300 md:flex ${` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 60 | `          sidebarOpen ? "w-60" : "w-16 items-center"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 61 | `        }\`}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 62 | `        style={{ background: "var(--gradient-sidebar)" }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 63 | `      >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 64 | `        <div className={\`flex items-center gap-2 py-5 ${sidebarOpen ? "px-5" : "px-2 justify-center"}\`}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 65 | `          <div className={\`flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-black ${sidebarOpen ? "h-9 w-9" : "h-9 w-9"}\`}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 66 | `            <img src={taskflowLogo.url} alt="TaskFlow" className="h-full w-full object-contain" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 67 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 68 | `          {sidebarOpen && <span className="text-lg font-semibold">TaskFlow</span>}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 69 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 70 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 71 | `        <div className={\`flex ${sidebarOpen ? "justify-end px-3" : "justify-center"} mb-2\`}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 72 | `          <Button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 73 | `            size="icon"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 74 | `            variant="ghost"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 75 | `            className="h-7 w-7 text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 76 | `            onClick={() => setSidebarOpen((o) => !o)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 77 | `            title={sidebarOpen ? "Recolher menu" : "Expandir menu"}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 78 | `          >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 79 | `            {sidebarOpen ? <PanelLeft className="h-4 w-4" /> : <PanelRight className="h-4 w-4" />}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 80 | `          </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 81 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 82 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 83 | `        <nav className="flex-1 space-y-1 px-3">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 84 | `          {nav.map((n) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 85 | `            const Active = pathname === n.to || pathname.startsWith(n.to + "/");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 86 | `            const Icon = n.icon;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 87 | `            return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 88 | `              <Link` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 89 | `                key={n.to}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 90 | `                to={n.to}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 91 | `                className={\`flex items-center gap-3 rounded-lg transition ${` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 92 | `                  sidebarOpen ? "px-3 py-2 text-sm" : "justify-center px-2 py-2 text-sm"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 93 | `                } ${` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 94 | `                  Active` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 95 | `                    ? "bg-sidebar-accent text-sidebar-accent-foreground"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 96 | `                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 97 | `                }\`}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 98 | `                title={n.label}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 99 | `              >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 100 | `                <Icon className="h-4 w-4 shrink-0" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 101 | `                {sidebarOpen && <span className="truncate">{n.label}</span>}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 102 | `              </Link>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 103 | `            );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 104 | `          })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 105 | `        </nav>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 106 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 107 | `        <div className={\`border-t border-sidebar-border p-3 ${sidebarOpen ? "" : "flex flex-col items-center gap-2"}\`}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 108 | `          <div className={\`flex items-center gap-3 rounded-lg p-2 ${sidebarOpen ? "" : "flex-col"}\`}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 109 | `            <Avatar className="h-8 w-8">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 110 | `              <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground text-xs">{initials}</AvatarFallback>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 111 | `            </Avatar>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 112 | `            {sidebarOpen && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 113 | `              <div className="min-w-0 flex-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 114 | `                <p className="truncate text-sm font-medium">{profile?.full_name || user?.email}</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 115 | `                <p className="truncate text-xs text-sidebar-foreground/60">{user?.email}</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 116 | `              </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 117 | `            )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 118 | `            <div className={\`flex ${sidebarOpen ? "gap-1" : "flex-col gap-2"}\`}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 119 | `              <Button size="icon" variant="ghost" className="h-8 w-8 text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent" onClick={toggle} title={theme === "dark" ? "Modo claro" : "Modo escuro"}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 120 | `                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 121 | `              </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 122 | `              <Button size="icon" variant="ghost" className="h-8 w-8 text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent" onClick={signOut} title="Sair">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 123 | `                <LogOut className="h-4 w-4" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 124 | `              </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 125 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 126 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 127 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 128 | `      </aside>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 129 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 130 | `      {/* Mobile sidebar toggle header */}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 131 | `      <div className="md:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between bg-background border-b px-3 py-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 132 | `        <Button size="icon" variant="ghost" onClick={() => setSidebarOpen((o) => !o)}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 133 | `          <PanelLeft className="h-5 w-5" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 134 | `        </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 135 | `        <span className="font-semibold">TaskFlow</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 136 | `        <NotificationBell />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 137 | `      </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 138 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 139 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 140 | `      {/* Mobile overlay sidebar */}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 141 | `      {sidebarOpen && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 142 | `        <div className="md:hidden fixed inset-0 z-50 flex">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 143 | `          <div className="w-60 bg-background border-r flex flex-col" style={{ background: "var(--gradient-sidebar)" }}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 144 | `            <div className="flex items-center justify-between px-5 py-4">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 145 | `              <div className="flex items-center gap-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 146 | `              <div className="flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-black h-9 w-9">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 147 | `                <img src={taskflowLogo.url} alt="TaskFlow" className="h-full w-full object-contain" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 148 | `              </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 149 | `                <span className="text-lg font-semibold">TaskFlow</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 150 | `              </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 151 | `              <Button size="icon" variant="ghost" onClick={() => setSidebarOpen(false)}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 152 | `                <PanelLeft className="h-5 w-5" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 153 | `              </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 154 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 155 | `            <nav className="flex-1 space-y-1 px-3">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 156 | `              {nav.map((n) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 157 | `                const Active = pathname === n.to || pathname.startsWith(n.to + "/");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 158 | `                const Icon = n.icon;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 159 | `                return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 160 | `                  <Link` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 161 | `                    key={n.to}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 162 | `                    to={n.to}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 163 | `                    onClick={() => setSidebarOpen(false)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 164 | `                    className={\`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 165 | `                      Active` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 166 | `                        ? "bg-sidebar-accent text-sidebar-accent-foreground"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 167 | `                        : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 168 | `                    }\`}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 169 | `                  >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 170 | `                    <Icon className="h-4 w-4" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 171 | `                    {n.label}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 172 | `                  </Link>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 173 | `                );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 174 | `              })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 175 | `            </nav>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 176 | `            <div className="border-t border-sidebar-border p-3">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 177 | `              <div className="flex items-center gap-3 rounded-lg p-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 178 | `                <Avatar className="h-8 w-8">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 179 | `                  <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground text-xs">{initials}</AvatarFallback>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 180 | `                </Avatar>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 181 | `                <div className="min-w-0 flex-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 182 | `                  <p className="truncate text-sm font-medium">{profile?.full_name || user?.email}</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 183 | `                  <p className="truncate text-xs text-sidebar-foreground/60">{user?.email}</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 184 | `                </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 185 | `                <Button size="icon" variant="ghost" className="h-8 w-8" onClick={toggle} title={theme === "dark" ? "Modo claro" : "Modo escuro"}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 186 | `                  {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 187 | `                </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 188 | `                <Button size="icon" variant="ghost" className="h-8 w-8" onClick={signOut} title="Sair">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 189 | `                  <LogOut className="h-4 w-4" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 190 | `                </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 191 | `              </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 192 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 193 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 194 | `          <div className="flex-1 bg-black/50" onClick={() => setSidebarOpen(false)} />` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 195 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 196 | `      )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 197 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 198 | `      <main className="flex-1 overflow-x-hidden md:pt-0 pt-12">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 199 | `        <div className="hidden md:flex sticky top-0 z-30 justify-end gap-2 px-4 py-2 bg-background/80 backdrop-blur border-b">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 200 | `          <NotificationBell />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 201 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 202 | `        {children}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 203 | `      </main>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 204 | `      <AssignmentPopup />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 205 | `    </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 206 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 207 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 208 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
