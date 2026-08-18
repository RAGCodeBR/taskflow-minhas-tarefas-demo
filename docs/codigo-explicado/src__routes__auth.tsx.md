# src/routes/auth.tsx

Tipo: Componente ou rota React em TypeScript.

Este documento foi gerado para estudo e manutencao. Ele preserva o codigo original e explica linha por linha sem alterar o comportamento do sistema publicado.

| Linha | Codigo original | Explicacao |
| ---: | --- | --- |
| 1 | `import { createFileRoute, useNavigate } from "@tanstack/react-router";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 2 | `import { useEffect, useState } from "react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 3 | `import { motion } from "motion/react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 4 | `import { Button } from "@/components/ui/button";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 5 | `import { Input } from "@/components/ui/input";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 6 | `import { Label } from "@/components/ui/label";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 7 | `import { Card } from "@/components/ui/card";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 8 | `import { supabase } from "@/integrations/supabase/client";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 9 | `import { useAuth } from "@/hooks/use-auth";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 10 | `import { toast } from "sonner";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 11 | `import { CheckCircle2, Loader2 } from "lucide-react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 12 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 13 | `export const Route = createFileRoute("/auth")({` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 14 | `  component: AuthPage,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 15 | `});` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 16 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 17 | `function AuthPage() {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 18 | `  const navigate = useNavigate();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 19 | `  const { user } = useAuth();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 20 | `  const [mode, setMode] = useState<"signin" | "signup">("signin");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 21 | `  const [email, setEmail] = useState("");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 22 | `  const [password, setPassword] = useState("");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 23 | `  const [name, setName] = useState("");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 24 | `  const [loading, setLoading] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 25 | `  const googleAuthEnabled = import.meta.env.VITE_ENABLE_GOOGLE_AUTH === "true";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 26 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 27 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 28 | `    if (user) navigate({ to: "/dashboard", replace: true });` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 29 | `  }, [user, navigate]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 30 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 31 | `  const onSubmit = async (e: React.FormEvent) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 32 | `    e.preventDefault();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 33 | `    setLoading(true);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 34 | `    try {` | Inicia bloco protegido para capturar erros durante a execucao. |
| 35 | `      if (mode === "signup") {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 36 | `        const { error } = await supabase.auth.signUp({` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 37 | `          email,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 38 | `          password,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 39 | `          options: {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 40 | `            emailRedirectTo: window.location.origin,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 41 | `            data: { full_name: name },` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 42 | `          },` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 43 | `        });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 44 | `        if (error) throw error;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 45 | `        toast.success("Conta criada! Verifique seu e-mail se necessário.");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 46 | `      } else {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 47 | `        const { error } = await supabase.auth.signInWithPassword({ email, password });` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 48 | `        if (error) throw error;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 49 | `        toast.success("Bem-vindo de volta!");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 50 | `      }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 51 | `    } catch (err) {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 52 | `      toast.error((err as Error).message);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 53 | `    } finally {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 54 | `      setLoading(false);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 55 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 56 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 57 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 58 | `  const signInGoogle = async () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 59 | `    // Google OAuth is intentionally disabled in the clean copy until the new` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 60 | `    // Supabase project has its own OAuth client configured. Email/password works now.` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 61 | `    const { error } = await supabase.auth.signInWithOAuth({` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 62 | `      provider: "google",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 63 | `      options: { redirectTo: window.location.origin },` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 64 | `    });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 65 | `    if (error) toast.error("Falha ao entrar com Google");` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 66 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 67 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 68 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 69 | `    <div className="grid min-h-screen lg:grid-cols-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 70 | `      <div className="relative hidden bg-sidebar text-sidebar-foreground lg:flex lg:flex-col lg:justify-between lg:p-12"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 71 | `        style={{ background: "var(--gradient-sidebar)" }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 72 | `      >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 73 | `        <div className="flex items-center gap-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 74 | `          <div className="grid h-10 w-10 place-items-center rounded-xl bg-sidebar-primary text-sidebar-primary-foreground font-bold">T</div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 75 | `          <span className="text-xl font-semibold tracking-tight">TaskFlow</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 76 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 77 | `        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 78 | `          <h1 className="text-4xl font-bold leading-tight">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 79 | `            Organize o trabalho da sua equipe.<br />Tudo em um só lugar.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 80 | `          </h1>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 81 | `          <p className="mt-4 max-w-md text-sidebar-foreground/70">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 82 | `            Kanban, Lista e Calendário. Filtros inteligentes por prazo, cliente e responsável.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 83 | `            Personalize cores e crie clientes como pastas de atividades.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 84 | `          </p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 85 | `          <div className="mt-8 space-y-3">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 86 | `            {["Kanban totalmente editável com drag and drop", "Filtros: hoje, amanhã, semana, mês, atrasadas", "Dashboard com gráficos de produtividade", "Anexos, comentários e subtarefas"].map((t) => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 87 | `              <div key={t} className="flex items-center gap-2 text-sm text-sidebar-foreground/85">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 88 | `                <CheckCircle2 className="h-4 w-4 text-sidebar-primary" />{t}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 89 | `              </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 90 | `            ))}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 91 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 92 | `        </motion.div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 93 | `        <p className="text-xs text-sidebar-foreground/50">© {new Date().getFullYear()} TaskFlow</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 94 | `      </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 95 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 96 | `      <div className="flex items-center justify-center p-6">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 97 | `        <Card className="w-full max-w-md p-8 shadow-[var(--shadow-elegant)]">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 98 | `          <h2 className="text-2xl font-bold">{mode === "signin" ? "Entrar" : "Criar conta"}</h2>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 99 | `          <p className="mt-1 text-sm text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 100 | `            {mode === "signin" ? "Acesse seu painel de tarefas" : "Comece a organizar sua equipe"}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 101 | `          </p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 102 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 103 | `          {googleAuthEnabled && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 104 | `            <>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 105 | `              <Button type="button" variant="outline" className="mt-6 w-full" onClick={signInGoogle}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 106 | `                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 107 | `                Continuar com Google` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 108 | `              </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 109 | `              <div className="relative my-6 text-center text-xs text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 110 | `                <span className="bg-card px-2 relative z-10">ou</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 111 | `                <div className="absolute left-0 right-0 top-1/2 -z-0 border-t" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 112 | `              </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 113 | `            </>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 114 | `          )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 115 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 116 | `          <form onSubmit={onSubmit} className="space-y-4">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 117 | `            {mode === "signup" && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 118 | `              <div className="space-y-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 119 | `                <Label htmlFor="name">Nome completo</Label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 120 | `                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 121 | `              </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 122 | `            )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 123 | `            <div className="space-y-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 124 | `              <Label htmlFor="email">E-mail</Label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 125 | `              <Input id="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required />` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 126 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 127 | `            <div className="space-y-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 128 | `              <Label htmlFor="password">Senha</Label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 129 | `              <Input id="password" type="password" autoComplete={mode === "signin" ? "current-password" : "new-password"} value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 130 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 131 | `            <Button type="submit" className="w-full" disabled={loading}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 132 | `              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 133 | `              {mode === "signin" ? "Entrar" : "Criar conta"}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 134 | `            </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 135 | `          </form>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 136 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 137 | `          <p className="mt-4 text-center text-sm text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 138 | `            {mode === "signin" ? "Não tem conta?" : "Já tem conta?"}{" "}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 139 | `            <button onClick={() => setMode(mode === "signin" ? "signup" : "signin")} className="font-medium text-primary hover:underline">` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 140 | `              {mode === "signin" ? "Cadastre-se" : "Entrar"}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 141 | `            </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 142 | `          </p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 143 | `        </Card>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 144 | `      </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 145 | `    </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 146 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 147 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 148 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
