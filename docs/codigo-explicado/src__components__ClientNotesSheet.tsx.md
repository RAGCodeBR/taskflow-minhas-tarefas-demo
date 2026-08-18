# src/components/ClientNotesSheet.tsx

Tipo: Componente ou rota React em TypeScript.

Este documento foi gerado para estudo e manutencao. Ele preserva o codigo original e explica linha por linha sem alterar o comportamento do sistema publicado.

| Linha | Codigo original | Explicacao |
| ---: | --- | --- |
| 1 | `import { useEffect, useMemo, useRef, useState } from "react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 2 | `import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 3 | `import { Button } from "@/components/ui/button";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 4 | `import { Input } from "@/components/ui/input";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 5 | `import { Textarea } from "@/components/ui/textarea";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 6 | `import { Checkbox } from "@/components/ui/checkbox";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 7 | `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 8 | `import { Plus, Trash2, Paperclip, FileText, Link2, ChevronDown, ChevronRight, Check, Loader2, ExternalLink } from "lucide-react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 9 | `import { supabase } from "@/integrations/supabase/client";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 10 | `import { useAuth } from "@/hooks/use-auth";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 11 | `import { useClients } from "@/hooks/use-data";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 12 | `import { format } from "date-fns";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 13 | `import { ptBR } from "date-fns/locale";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 14 | `import { toast } from "sonner";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 15 | `import { AttachmentPreviewDialog, type PreviewableAttachment } from "@/components/AttachmentPreviewDialog";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 16 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 17 | `const PREVIEWABLE_MIME_RE = /^(image\/|video\/|audio\/|text\/)|application\/pdf|json/i;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 18 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 19 | `interface ClientNote {` | Declara um contrato de tipos TypeScript para deixar os dados mais seguros e previsiveis. |
| 20 | `  id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 21 | `  client_id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 22 | `  title: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 23 | `  content: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 24 | `  done: boolean;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 25 | `  position: number;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 26 | `  created_at: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 27 | `  updated_at: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 28 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 29 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 30 | `interface NoteAttachment {` | Declara um contrato de tipos TypeScript para deixar os dados mais seguros e previsiveis. |
| 31 | `  id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 32 | `  note_id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 33 | `  file_name: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 34 | `  storage_path: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 35 | `  mime_type: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 36 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 37 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 38 | `const sb = supabase as any;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 39 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 40 | `export function ClientNotesSheet({ open, onOpenChange, initialClientId }: {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 41 | `  open: boolean;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 42 | `  onOpenChange: (v: boolean) => void;` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 43 | `  initialClientId?: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 44 | `}) {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 45 | `  const { user } = useAuth();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 46 | `  const { data: clients = [] } = useClients();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 47 | `  const [clientId, setClientId] = useState<string | null>(initialClientId ?? null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 48 | `  const [notes, setNotes] = useState<ClientNote[]>([]);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 49 | `  const [loading, setLoading] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 50 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 51 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 52 | `    if (initialClientId) setClientId(initialClientId);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 53 | `  }, [initialClientId]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 54 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 55 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 56 | `    if (!open || clientId) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 57 | `    if (clients[0]) setClientId(clients[0].id);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 58 | `  }, [open, clients, clientId]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 59 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 60 | `  const load = async (cid: string) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 61 | `    setLoading(true);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 62 | `    const { data, error } = await sb` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 63 | `      .from("client_notes")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 64 | `      .select("*")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 65 | `      .eq("client_id", cid)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 66 | `      .order("done", { ascending: true })` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 67 | `      .order("created_at", { ascending: false });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 68 | `    setLoading(false);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 69 | `    if (error) { toast.error(error.message); return; }` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 70 | `    setNotes((data ?? []) as ClientNote[]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 71 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 72 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 73 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 74 | `    if (open && clientId) void load(clientId);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 75 | `  }, [open, clientId]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 76 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 77 | `  const addNote = async () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 78 | `    if (!clientId || !user) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 79 | `    const { data, error } = await sb.from("client_notes").insert({` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 80 | `      client_id: clientId, title: "Nova anotação", content: "", created_by: user.id,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 81 | `    }).select().single();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 82 | `    if (error) { toast.error(error.message); return; }` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 83 | `    setNotes((n) => [data as ClientNote, ...n]);` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 84 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 85 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 86 | `  const updateNote = async (id: string, patch: Partial<ClientNote>) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 87 | `    setNotes((n) => n.map((x) => (x.id === id ? { ...x, ...patch } : x)));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 88 | `    const { error } = await sb.from("client_notes").update(patch).eq("id", id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 89 | `    if (error) toast.error(error.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 90 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 91 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 92 | `  const deleteNote = async (id: string) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 93 | `    if (!confirm("Excluir esta anotação?")) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 94 | `    setNotes((n) => n.filter((x) => x.id !== id));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 95 | `    const { error } = await sb.from("client_notes").delete().eq("id", id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 96 | `    if (error) toast.error(error.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 97 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 98 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 99 | `  const currentClient = useMemo(() => clients.find((c) => c.id === clientId), [clients, clientId]);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 100 | `  const pendingCount = notes.filter((n) => !n.done).length;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 101 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 102 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 103 | `    <Sheet open={open} onOpenChange={onOpenChange}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 104 | `      <SheetContent side="bottom" className="flex h-[85vh] w-full flex-col p-0 sm:max-w-none">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 105 | `        <SheetHeader className="border-b px-4 py-3">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 106 | `          <SheetTitle>Anotações do cliente</SheetTitle>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 107 | `          <SheetDescription>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 108 | `            Anotações livres, com checkbox e anexos. Role na horizontal para navegar.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 109 | `          </SheetDescription>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 110 | `        </SheetHeader>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 111 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 112 | `        <div className="flex items-center gap-2 border-b px-4 py-3">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 113 | `          <Select value={clientId ?? undefined} onValueChange={(v) => setClientId(v)}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 114 | `            <SelectTrigger className="w-[260px]">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 115 | `              <SelectValue placeholder="Selecione um cliente" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 116 | `            </SelectTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 117 | `            <SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 118 | `              {clients.map((c) => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 119 | `                <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 120 | `              ))}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 121 | `            </SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 122 | `          </Select>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 123 | `          <Button onClick={addNote} disabled={!clientId}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 124 | `            <Plus className="mr-1 h-4 w-4" /> Nova` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 125 | `          </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 126 | `          {currentClient && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 127 | `            <p className="ml-2 text-xs text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 128 | `              {notes.length} anotação(ões) · {pendingCount} pendente(s)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 129 | `            </p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 130 | `          )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 131 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 132 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 133 | `        <div className="kanban-scroll min-h-0 flex-1 overflow-x-auto overflow-y-hidden p-4">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 134 | `          {loading ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 135 | `            <p className="text-sm text-muted-foreground">Carregando…</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 136 | `          ) : notes.length === 0 ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 137 | `            <p className="rounded border border-dashed p-6 text-center text-sm text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 138 | `              {clientId ? "Nenhuma anotação ainda. Clique em \"Nova\"." : "Selecione um cliente."}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 139 | `            </p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 140 | `          ) : (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 141 | `            <div className="flex h-full items-start gap-3">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 142 | `              {notes.map((note) => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 143 | `                <div key={note.id} className="flex h-full w-80 shrink-0 flex-col overflow-y-auto">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 144 | `                  <NoteCard` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 145 | `                    note={note}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 146 | `                    onChange={(p) => void updateNote(note.id, p)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 147 | `                    onDelete={() => void deleteNote(note.id)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 148 | `                  />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 149 | `                </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 150 | `              ))}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 151 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 152 | `          )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 153 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 154 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 155 | `        {clientId && <ClientFilesPanel clientId={clientId} />}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 156 | `      </SheetContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 157 | `    </Sheet>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 158 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 159 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 160 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 161 | `function NoteCard({` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 162 | `  note, onChange, onDelete,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 163 | `}: {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 164 | `  note: ClientNote;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 165 | `  onChange: (p: Partial<ClientNote>) => void;` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 166 | `  onDelete: () => void;` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 167 | `}) {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 168 | `  const { user } = useAuth();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 169 | `  const [expanded, setExpanded] = useState(true);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 170 | `  const [title, setTitle] = useState(note.title);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 171 | `  const [content, setContent] = useState(note.content);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 172 | `  const [atts, setAtts] = useState<NoteAttachment[]>([]);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 173 | `  const [urls, setUrls] = useState<Record<string, string>>({});` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 174 | `  const [uploading, setUploading] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 175 | `  const [saveState, setSaveState] = useState<"idle" | "saving" | "saved" | "error">("idle");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 176 | `  const [previewAtt, setPreviewAtt] = useState<PreviewableAttachment | null>(null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 177 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 178 | `  // Track what's actually persisted, so we don't clobber in-progress typing` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 179 | `  const savedTitleRef = useRef(note.title);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 180 | `  const savedContentRef = useRef(note.content);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 181 | `  const titleRef = useRef(title);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 182 | `  const contentRef = useRef(content);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 183 | `  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 184 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 185 | `  useEffect(() => { titleRef.current = title; }, [title]);` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 186 | `  useEffect(() => { contentRef.current = content; }, [content]);` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 187 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 188 | `  // Re-sync from props ONLY when there are no unsaved local edits` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 189 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 190 | `    if (titleRef.current === savedTitleRef.current) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 191 | `      savedTitleRef.current = note.title;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 192 | `      setTitle(note.title);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 193 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 194 | `    // eslint-disable-next-line react-hooks/exhaustive-deps` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 195 | `  }, [note.title]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 196 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 197 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 198 | `    if (contentRef.current === savedContentRef.current) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 199 | `      savedContentRef.current = note.content;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 200 | `      setContent(note.content);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 201 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 202 | `    // eslint-disable-next-line react-hooks/exhaustive-deps` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 203 | `  }, [note.content]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 204 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 205 | `  const flushSave = async () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 206 | `    const nextTitle = titleRef.current;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 207 | `    const nextContent = contentRef.current;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 208 | `    const patch: Partial<ClientNote> = {};` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 209 | `    if (nextTitle !== savedTitleRef.current) patch.title = nextTitle;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 210 | `    if (nextContent !== savedContentRef.current) patch.content = nextContent;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 211 | `    if (Object.keys(patch).length === 0) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 212 | `    setSaveState("saving");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 213 | `    // Mark as saved optimistically so prop-sync from onChange doesn't clobber` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 214 | `    savedTitleRef.current = nextTitle;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 215 | `    savedContentRef.current = nextContent;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 216 | `    const { error } = await sb.from("client_notes").update(patch).eq("id", note.id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 217 | `    if (error) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 218 | `      setSaveState("error");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 219 | `      toast.error(\`Erro ao salvar: ${error.message}\`);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 220 | `      return;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 221 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 222 | `    onChange(patch);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 223 | `    setSaveState("saved");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 224 | `    setTimeout(() => setSaveState((s) => (s === "saved" ? "idle" : s)), 1500);` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 225 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 226 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 227 | `  // Debounced autosave on title/content change` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 228 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 229 | `    if (title === savedTitleRef.current && content === savedContentRef.current) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 230 | `    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 231 | `    saveTimerRef.current = setTimeout(() => { void flushSave(); }, 600);` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 232 | `    return () => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 233 | `      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 234 | `    };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 235 | `    // eslint-disable-next-line react-hooks/exhaustive-deps` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 236 | `  }, [title, content]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 237 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 238 | `  // Flush on unmount (sheet close / navigation)` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 239 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 240 | `    return () => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 241 | `      if (titleRef.current !== savedTitleRef.current || contentRef.current !== savedContentRef.current) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 242 | `        void flushSave();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 243 | `      }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 244 | `    };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 245 | `    // eslint-disable-next-line react-hooks/exhaustive-deps` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 246 | `  }, []);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 247 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 248 | `  const loadAtts = async () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 249 | `    const { data } = await sb` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 250 | `      .from("client_note_attachments")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 251 | `      .select("*")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 252 | `      .eq("note_id", note.id)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 253 | `      .order("created_at", { ascending: false });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 254 | `    const list = (data ?? []) as NoteAttachment[];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 255 | `    setAtts(list);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 256 | `    const next: Record<string, string> = {};` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 257 | `    await Promise.all(list` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 258 | `      .filter((a) => a.mime_type !== "text/uri-list")` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 259 | `      .map(async (a) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 260 | `        const { data: signed } = await supabase.storage` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 261 | `          .from("task-attachments").createSignedUrl(a.storage_path, 3600);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 262 | `        if (signed) next[a.id] = signed.signedUrl;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 263 | `      }));` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 264 | `    setUrls(next);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 265 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 266 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 267 | `  useEffect(() => { if (expanded) void loadAtts(); }, [expanded, note.id]);` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 268 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 269 | `  const onFiles = async (files: FileList | null) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 270 | `    if (!files || files.length === 0 || !user) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 271 | `    setUploading(true);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 272 | `    for (const file of Array.from(files)) {` | Inicia uma repeticao sobre dados ou condicoes. |
| 273 | `      const safe = file.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9._-]+/g, "_");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 274 | `      const path = \`notes/${note.id}/${Date.now()}_${safe}\`;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 275 | `      const { error: upErr } = await supabase.storage` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 276 | `        .from("task-attachments").upload(path, file);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 277 | `      if (upErr) { toast.error(upErr.message); continue; }` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 278 | `      const { error: insErr } = await sb.from("client_note_attachments").insert({` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 279 | `        note_id: note.id, file_name: file.name, storage_path: path,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 280 | `        mime_type: file.type, size_bytes: file.size, uploaded_by: user.id,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 281 | `      });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 282 | `      if (insErr) toast.error(insErr.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 283 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 284 | `    setUploading(false);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 285 | `    void loadAtts();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 286 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 287 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 288 | `  const addLink = async () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 289 | `    const url = prompt("Cole o link");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 290 | `    if (!url || !user) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 291 | `    const { error } = await sb.from("client_note_attachments").insert({` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 292 | `      note_id: note.id, file_name: url, storage_path: url,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 293 | `      mime_type: "text/uri-list", uploaded_by: user.id,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 294 | `    });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 295 | `    if (error) { toast.error(error.message); return; }` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 296 | `    void loadAtts();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 297 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 298 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 299 | `  const removeAtt = async (a: NoteAttachment) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 300 | `    if (a.mime_type !== "text/uri-list") {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 301 | `      await supabase.storage.from("task-attachments").remove([a.storage_path]);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 302 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 303 | `    await sb.from("client_note_attachments").delete().eq("id", a.id);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 304 | `    void loadAtts();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 305 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 306 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 307 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 308 | `    <div className={\`rounded-lg border bg-card ${note.done ? "opacity-70" : ""}\`}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 309 | `      <div className="flex items-start gap-2 p-3">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 310 | `        <Checkbox` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 311 | `          checked={note.done}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 312 | `          onCheckedChange={(v) => onChange({ done: !!v })}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 313 | `          className="mt-1"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 314 | `        />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 315 | `        <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 316 | `          type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 317 | `          onClick={() => setExpanded((v) => !v)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 318 | `          className="mt-0.5 text-muted-foreground hover:text-foreground"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 319 | `        >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 320 | `          {expanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 321 | `        </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 322 | `        <Input` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 323 | `          value={title}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 324 | `          onChange={(e) => setTitle(e.target.value)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 325 | `          onBlur={() => void flushSave()}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 326 | `          className={\`h-8 flex-1 border-0 px-1 text-sm font-medium shadow-none focus-visible:ring-0 ${note.done ? "line-through" : ""}\`}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 327 | `          placeholder="Título"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 328 | `        />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 329 | `        <SaveIndicator state={saveState} />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 330 | `        <Button size="icon" variant="ghost" className="h-7 w-7 text-destructive" onClick={onDelete}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 331 | `          <Trash2 className="h-3.5 w-3.5" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 332 | `        </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 333 | `      </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 334 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 335 | `      {expanded && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 336 | `        <div className="space-y-3 border-t px-3 pb-3 pt-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 337 | `          <Textarea` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 338 | `            value={content}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 339 | `            onChange={(e) => setContent(e.target.value)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 340 | `            onBlur={() => void flushSave()}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 341 | `            placeholder="Escreva aqui informações, contexto, lembretes…"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 342 | `            className="min-h-[120px] resize-y text-sm"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 343 | `          />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 344 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 345 | `          <div className="rounded-md border border-dashed bg-muted/30 p-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 346 | `            <div className="mb-2 flex items-center justify-between">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 347 | `              <p className="flex items-center gap-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 348 | `                <Paperclip className="h-3 w-3" /> Arquivos e imagens ({atts.length})` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 349 | `              </p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 350 | `              <div className="flex gap-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 351 | `                <label className="cursor-pointer">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 352 | `                  <input` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 353 | `                    type="file"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 354 | `                    multiple` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 355 | `                    accept="*/*"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 356 | `                    className="hidden"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 357 | `                    onChange={(e) => void onFiles(e.target.files)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 358 | `                  />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 359 | `                  <span className="rounded border bg-background px-2 py-0.5 text-[10px] hover:bg-muted">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 360 | `                    {uploading ? "Enviando…" : "+ Arquivo"}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 361 | `                  </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 362 | `                </label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 363 | `                <button type="button" onClick={addLink} className="rounded border bg-background px-2 py-0.5 text-[10px] hover:bg-muted">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 364 | `                  + Link` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 365 | `                </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 366 | `              </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 367 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 368 | `            <p className="mb-2 text-[10px] text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 369 | `              Aceita qualquer tipo: PDF, Word, Excel, PNG, JPG, vídeo, áudio, etc. Imagens, PDFs, vídeos, áudios e textos abrem aqui; os demais baixam ou abrem em nova aba.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 370 | `            </p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 371 | `            {atts.length === 0 ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 372 | `              <p className="rounded border border-dashed bg-background/50 p-3 text-center text-[11px] text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 373 | `                Nenhum arquivo. Clique em "+ Arquivo" para enviar.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 374 | `              </p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 375 | `            ) : (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 376 | `              <div className="grid grid-cols-3 gap-1.5">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 377 | `                {atts.map((a) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 378 | `                  const isLink = a.mime_type === "text/uri-list";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 379 | `                  const isImage = !isLink && a.mime_type?.startsWith("image/");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 380 | `                  const canPreview = !isLink && PREVIEWABLE_MIME_RE.test(a.mime_type ?? "");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 381 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 382 | `                  const handleOpen = () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 383 | `                    if (isLink) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 384 | `                      window.open(a.storage_path, "_blank", "noopener,noreferrer");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 385 | `                      return;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 386 | `                    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 387 | `                    if (canPreview) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 388 | `                      setPreviewAtt({ file_name: a.file_name, storage_path: a.storage_path, mime_type: a.mime_type });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 389 | `                      return;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 390 | `                    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 391 | `                    const url = urls[a.id];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 392 | `                    if (url) window.open(url, "_blank", "noopener,noreferrer");` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 393 | `                  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 394 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 395 | `                  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 396 | `                    <div key={a.id} className="group relative aspect-square overflow-hidden rounded border bg-muted">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 397 | `                      <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 398 | `                        type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 399 | `                        onClick={handleOpen}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 400 | `                        className="block h-full w-full text-left"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 401 | `                        title={a.file_name}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 402 | `                      >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 403 | `                        {isImage && urls[a.id] ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 404 | `                          <img src={urls[a.id]} alt={a.file_name} className="h-full w-full object-cover" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 405 | `                        ) : (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 406 | `                          <div className="flex h-full w-full flex-col items-center justify-center gap-0.5 p-1 text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 407 | `                            {isLink ? <Link2 className="h-4 w-4" /> : canPreview ? <FileText className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 408 | `                            <span className="line-clamp-2 w-full break-all text-center text-[8px] leading-tight">{a.file_name}</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 409 | `                          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 410 | `                        )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 411 | `                      </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 412 | `                      <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 413 | `                        type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 414 | `                        onClick={() => void removeAtt(a)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 415 | `                        className="absolute right-0.5 top-0.5 hidden rounded bg-black/60 p-0.5 text-white group-hover:block"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 416 | `                        title="Remover"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 417 | `                      >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 418 | `                        <Trash2 className="h-3 w-3" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 419 | `                      </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 420 | `                    </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 421 | `                  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 422 | `                })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 423 | `              </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 424 | `            )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 425 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 426 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 427 | `          <p className="text-[10px] text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 428 | `            Atualizado em {format(new Date(note.updated_at), "dd MMM yyyy HH:mm", { locale: ptBR })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 429 | `          </p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 430 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 431 | `      )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 432 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 433 | `      <AttachmentPreviewDialog` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 434 | `        open={!!previewAtt}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 435 | `        onOpenChange={(o) => { if (!o) setPreviewAtt(null); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 436 | `        attachment={previewAtt}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 437 | `      />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 438 | `    </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 439 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 440 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 441 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 442 | `function SaveIndicator({ state }: { state: "idle" | "saving" | "saved" | "error" }) {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 443 | `  if (state === "idle") return null;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 444 | `  if (state === "saving") return (` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 445 | `    <span className="flex items-center gap-1 text-[10px] text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 446 | `      <Loader2 className="h-3 w-3 animate-spin" /> salvando` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 447 | `    </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 448 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 449 | `  if (state === "saved") return (` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 450 | `    <span className="flex items-center gap-1 text-[10px] text-emerald-600">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 451 | `      <Check className="h-3 w-3" /> salvo` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 452 | `    </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 453 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 454 | `  return <span className="text-[10px] text-destructive">erro</span>;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 455 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 456 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 457 | `interface ClientFile {` | Declara um contrato de tipos TypeScript para deixar os dados mais seguros e previsiveis. |
| 458 | `  id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 459 | `  client_id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 460 | `  file_name: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 461 | `  storage_path: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 462 | `  mime_type: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 463 | `  size_bytes: number | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 464 | `  created_at: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 465 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 466 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 467 | `function ClientFilesPanel({ clientId }: { clientId: string }) {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 468 | `  const { user } = useAuth();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 469 | `  const [files, setFiles] = useState<ClientFile[]>([]);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 470 | `  const [urls, setUrls] = useState<Record<string, string>>({});` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 471 | `  const [uploading, setUploading] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 472 | `  const [preview, setPreview] = useState<PreviewableAttachment | null>(null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 473 | `  const [collapsed, setCollapsed] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 474 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 475 | `  const load = async () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 476 | `    const { data, error } = await sb` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 477 | `      .from("client_files")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 478 | `      .select("*")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 479 | `      .eq("client_id", clientId)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 480 | `      .order("created_at", { ascending: false });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 481 | `    if (error) { toast.error(error.message); return; }` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 482 | `    const list = (data ?? []) as ClientFile[];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 483 | `    setFiles(list);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 484 | `    const next: Record<string, string> = {};` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 485 | `    await Promise.all(list.map(async (f) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 486 | `      const { data: signed } = await supabase.storage` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 487 | `        .from("task-attachments").createSignedUrl(f.storage_path, 3600);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 488 | `      if (signed) next[f.id] = signed.signedUrl;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 489 | `    }));` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 490 | `    setUrls(next);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 491 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 492 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 493 | `  useEffect(() => { void load(); /* eslint-disable-next-line */ }, [clientId]);` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 494 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 495 | `  const onFiles = async (fl: FileList | null) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 496 | `    if (!fl || fl.length === 0 || !user) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 497 | `    setUploading(true);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 498 | `    for (const file of Array.from(fl)) {` | Inicia uma repeticao sobre dados ou condicoes. |
| 499 | `      const safe = file.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9._-]+/g, "_");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 500 | `      const path = \`clients/${clientId}/${Date.now()}_${safe}\`;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 501 | `      const { error: upErr } = await supabase.storage.from("task-attachments").upload(path, file);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 502 | `      if (upErr) { toast.error(upErr.message); continue; }` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 503 | `      const { error: insErr } = await sb.from("client_files").insert({` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 504 | `        client_id: clientId, file_name: file.name, storage_path: path,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 505 | `        mime_type: file.type, size_bytes: file.size, uploaded_by: user.id,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 506 | `      });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 507 | `      if (insErr) toast.error(insErr.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 508 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 509 | `    setUploading(false);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 510 | `    void load();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 511 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 512 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 513 | `  const remove = async (f: ClientFile) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 514 | `    if (!confirm(\`Excluir "${f.file_name}"?\`)) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 515 | `    await supabase.storage.from("task-attachments").remove([f.storage_path]);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 516 | `    await sb.from("client_files").delete().eq("id", f.id);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 517 | `    void load();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 518 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 519 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 520 | `  const open = (f: ClientFile) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 521 | `    const canPreview = PREVIEWABLE_MIME_RE.test(f.mime_type ?? "");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 522 | `    if (canPreview) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 523 | `      setPreview({ file_name: f.file_name, storage_path: f.storage_path, mime_type: f.mime_type });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 524 | `      return;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 525 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 526 | `    const url = urls[f.id];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 527 | `    if (url) window.open(url, "_blank", "noopener,noreferrer");` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 528 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 529 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 530 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 531 | `    <div className="border-t bg-muted/20">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 532 | `      <div className="flex items-center justify-between px-4 py-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 533 | `        <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 534 | `          type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 535 | `          onClick={() => setCollapsed((v) => !v)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 536 | `          className="flex items-center gap-2 text-sm font-medium hover:text-foreground"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 537 | `        >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 538 | `          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 539 | `          <Paperclip className="h-4 w-4" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 540 | `          Arquivos do cliente ({files.length})` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 541 | `        </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 542 | `        <label className="cursor-pointer">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 543 | `          <input` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 544 | `            type="file"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 545 | `            multiple` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 546 | `            accept="*/*"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 547 | `            className="hidden"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 548 | `            onChange={(e) => void onFiles(e.target.files)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 549 | `          />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 550 | `          <span className="rounded border bg-background px-3 py-1 text-xs hover:bg-muted">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 551 | `            {uploading ? "Enviando…" : "+ Adicionar arquivo"}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 552 | `          </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 553 | `        </label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 554 | `      </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 555 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 556 | `      {!collapsed && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 557 | `        <div className="max-h-[28vh] overflow-y-auto px-4 pb-3">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 558 | `          <p className="mb-2 text-[11px] text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 559 | `            PDF, Word, Excel, imagens, vídeos, áudio, qualquer tipo. Imagens, PDF, vídeo, áudio e texto abrem aqui; os demais abrem em nova aba.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 560 | `          </p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 561 | `          {files.length === 0 ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 562 | `            <p className="rounded border border-dashed bg-background/50 p-4 text-center text-xs text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 563 | `              Nenhum arquivo enviado ainda para este cliente.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 564 | `            </p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 565 | `          ) : (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 566 | `            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 567 | `              {files.map((f) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 568 | `                const isImage = f.mime_type?.startsWith("image/");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 569 | `                const canPreview = PREVIEWABLE_MIME_RE.test(f.mime_type ?? "");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 570 | `                return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 571 | `                  <div key={f.id} className="group relative aspect-square overflow-hidden rounded border bg-background">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 572 | `                    <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 573 | `                      type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 574 | `                      onClick={() => open(f)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 575 | `                      className="block h-full w-full text-left"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 576 | `                      title={f.file_name}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 577 | `                    >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 578 | `                      {isImage && urls[f.id] ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 579 | `                        <img src={urls[f.id]} alt={f.file_name} className="h-full w-full object-cover" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 580 | `                      ) : (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 581 | `                        <div className="flex h-full w-full flex-col items-center justify-center gap-1 p-1 text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 582 | `                          {canPreview ? <FileText className="h-5 w-5" /> : <ExternalLink className="h-5 w-5" />}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 583 | `                          <span className="line-clamp-2 w-full break-all text-center text-[9px] leading-tight">{f.file_name}</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 584 | `                        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 585 | `                      )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 586 | `                    </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 587 | `                    <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 588 | `                      type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 589 | `                      onClick={() => void remove(f)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 590 | `                      className="absolute right-0.5 top-0.5 hidden rounded bg-black/60 p-0.5 text-white group-hover:block"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 591 | `                      title="Excluir"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 592 | `                    >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 593 | `                      <Trash2 className="h-3 w-3" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 594 | `                    </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 595 | `                  </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 596 | `                );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 597 | `              })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 598 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 599 | `          )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 600 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 601 | `      )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 602 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 603 | `      <AttachmentPreviewDialog` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 604 | `        open={!!preview}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 605 | `        onOpenChange={(o) => { if (!o) setPreview(null); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 606 | `        attachment={preview}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 607 | `      />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 608 | `    </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 609 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 610 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 611 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
