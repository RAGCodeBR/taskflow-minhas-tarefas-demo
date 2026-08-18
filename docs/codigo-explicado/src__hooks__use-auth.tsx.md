# src/hooks/use-auth.tsx

Tipo: Componente ou rota React em TypeScript.

Este documento foi gerado para estudo e manutencao. Ele preserva o codigo original e explica linha por linha sem alterar o comportamento do sistema publicado.

| Linha | Codigo original | Explicacao |
| ---: | --- | --- |
| 1 | `import { createContext, useContext, useEffect, useState, type ReactNode } from "react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 2 | `import type { Session, User } from "@supabase/supabase-js";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 3 | `import { supabase } from "@/integrations/supabase/client";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 4 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 5 | `interface Profile {` | Declara um contrato de tipos TypeScript para deixar os dados mais seguros e previsiveis. |
| 6 | `  id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 7 | `  full_name: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 8 | `  email: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 9 | `  avatar_url: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 10 | `  color: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 11 | `  theme_preferences: Record<string, unknown> | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 12 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 13 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 14 | `interface AuthCtx {` | Declara um contrato de tipos TypeScript para deixar os dados mais seguros e previsiveis. |
| 15 | `  session: Session | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 16 | `  user: User | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 17 | `  profile: Profile | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 18 | `  isAdmin: boolean;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 19 | `  loading: boolean;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 20 | `  signOut: () => Promise<void>;` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 21 | `  refreshProfile: () => Promise<void>;` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 22 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 23 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 24 | `const AuthContext = createContext<AuthCtx | undefined>(undefined);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 25 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 26 | `export function AuthProvider({ children }: { children: ReactNode }) {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 27 | `  const [session, setSession] = useState<Session | null>(null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 28 | `  const [user, setUser] = useState<User | null>(null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 29 | `  const [profile, setProfile] = useState<Profile | null>(null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 30 | `  const [isAdmin, setIsAdmin] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 31 | `  const [loading, setLoading] = useState(true);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 32 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 33 | `  const loadProfile = async (uid: string) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 34 | `    // Profiles live in public.profiles, keyed by the Supabase auth user id.` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 35 | `    // The trigger in the migrations creates this row when a new user signs up.` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 36 | `    const { data: prof } = await supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 37 | `      .from("profiles")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 38 | `      .select("id, full_name, avatar_url, color, theme_preferences")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 39 | `      .eq("id", uid)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 40 | `      .maybeSingle();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 41 | `    const { data: authUser } = await supabase.auth.getUser();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 42 | `    setProfile(prof ? ({ ...prof, email: authUser.user?.email ?? null } as Profile) : null);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 43 | `    // Admin-only pages are controlled by public.user_roles, not by hardcoded emails.` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 44 | `    const { data: roles } = await supabase.from("user_roles").select("role").eq("user_id", uid);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 45 | `    setIsAdmin(!!roles?.some((r) => r.role === "admin"));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 46 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 47 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 48 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 49 | `    // Supabase emits auth state changes after sign-in, sign-out and token refresh.` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 50 | `    // The timeout avoids updating profile data inside the auth callback stack.` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 51 | `    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 52 | `      setSession(s);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 53 | `      setUser(s?.user ?? null);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 54 | `      if (s?.user) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 55 | `        setTimeout(() => loadProfile(s.user.id), 0);` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 56 | `      } else {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 57 | `        setProfile(null);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 58 | `        setIsAdmin(false);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 59 | `      }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 60 | `    });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 61 | `    // Initial page load: restore any saved session from localStorage.` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 62 | `    supabase.auth.getSession().then(({ data }) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 63 | `      setSession(data.session);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 64 | `      setUser(data.session?.user ?? null);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 65 | `      if (data.session?.user) loadProfile(data.session.user.id);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 66 | `      setLoading(false);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 67 | `    });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 68 | `    return () => sub.subscription.unsubscribe();` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 69 | `  }, []);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 70 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 71 | `  const signOut = async () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 72 | `    // Supabase clears the persisted browser session; the listener above resets local React state.` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 73 | `    await supabase.auth.signOut();` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 74 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 75 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 76 | `  const refreshProfile = async () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 77 | `    if (user) await loadProfile(user.id);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 78 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 79 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 80 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 81 | `    <AuthContext.Provider value={{ session, user, profile, isAdmin, loading, signOut, refreshProfile }}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 82 | `      {children}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 83 | `    </AuthContext.Provider>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 84 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 85 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 86 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 87 | `export function useAuth() {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 88 | `  const ctx = useContext(AuthContext);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 89 | `  if (!ctx) throw new Error("useAuth must be used within AuthProvider");` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 90 | `  return ctx;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 91 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 92 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
