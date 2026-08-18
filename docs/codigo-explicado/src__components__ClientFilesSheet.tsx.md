# src/components/ClientFilesSheet.tsx

Tipo: Componente ou rota React em TypeScript.

Este documento foi gerado para estudo e manutencao. Ele preserva o codigo original e explica linha por linha sem alterar o comportamento do sistema publicado.

| Linha | Codigo original | Explicacao |
| ---: | --- | --- |
| 1 | `import { useEffect, useState } from "react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 2 | `import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 3 | `import { Button } from "@/components/ui/button";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 4 | `import { Input } from "@/components/ui/input";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 5 | `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 6 | `import { ArrowDown, ArrowUp, ExternalLink, FileText, Paperclip, Trash2 } from "lucide-react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 7 | `import { supabase } from "@/integrations/supabase/client";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 8 | `import { useAuth } from "@/hooks/use-auth";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 9 | `import { useClients } from "@/hooks/use-data";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 10 | `import { toast } from "sonner";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 11 | `import { AttachmentPreviewDialog, type PreviewableAttachment } from "@/components/AttachmentPreviewDialog";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 12 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 13 | `const PREVIEWABLE_MIME_RE = /^(image\/|video\/|audio\/|text\/)|application\/pdf|json/i;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 14 | `const sb = supabase as any;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 15 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 16 | `interface ClientFile {` | Declara um contrato de tipos TypeScript para deixar os dados mais seguros e previsiveis. |
| 17 | `  id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 18 | `  client_id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 19 | `  title: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 20 | `  file_name: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 21 | `  storage_path: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 22 | `  mime_type: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 23 | `  size_bytes: number | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 24 | `  position: number;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 25 | `  created_at: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 26 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 27 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 28 | `export function ClientFilesSheet({` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 29 | `  open,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 30 | `  onOpenChange,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 31 | `  initialClientId,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 32 | `}: {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 33 | `  open: boolean;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 34 | `  onOpenChange: (v: boolean) => void;` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 35 | `  initialClientId?: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 36 | `}) {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 37 | `  const { user } = useAuth();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 38 | `  const { data: clients = [] } = useClients();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 39 | `  const [clientId, setClientId] = useState<string | null>(initialClientId ?? null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 40 | `  const [files, setFiles] = useState<ClientFile[]>([]);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 41 | `  const [urls, setUrls] = useState<Record<string, string>>({});` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 42 | `  const [uploading, setUploading] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 43 | `  const [preview, setPreview] = useState<PreviewableAttachment | null>(null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 44 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 45 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 46 | `    if (initialClientId) setClientId(initialClientId);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 47 | `  }, [initialClientId]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 48 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 49 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 50 | `    if (open && !clientId && clients[0]) setClientId(clients[0].id);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 51 | `  }, [open, clients, clientId]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 52 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 53 | `  const load = async (cid: string) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 54 | `    const { data, error } = await sb` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 55 | `      .from("client_files")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 56 | `      .select("*")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 57 | `      .eq("client_id", cid)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 58 | `      .order("position", { ascending: true })` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 59 | `      .order("created_at", { ascending: false });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 60 | `    if (error) { toast.error(error.message); return; }` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 61 | `    const list = (data ?? []) as ClientFile[];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 62 | `    setFiles(list);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 63 | `    const next: Record<string, string> = {};` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 64 | `    await Promise.all(list.map(async (f) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 65 | `      const { data: signed } = await supabase.storage` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 66 | `        .from("task-attachments").createSignedUrl(f.storage_path, 3600);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 67 | `      if (signed) next[f.id] = signed.signedUrl;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 68 | `    }));` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 69 | `    setUrls(next);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 70 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 71 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 72 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 73 | `    if (open && clientId) void load(clientId);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 74 | `  }, [open, clientId]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 75 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 76 | `  const onUpload = async (fl: FileList | null) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 77 | `    if (!fl || !fl.length || !user || !clientId) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 78 | `    setUploading(true);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 79 | `    const startPos = files.length;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 80 | `    let i = 0;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 81 | `    for (const file of Array.from(fl)) {` | Inicia uma repeticao sobre dados ou condicoes. |
| 82 | `      const safe = file.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9._-]+/g, "_");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 83 | `      const path = \`clients/${clientId}/${Date.now()}_${safe}\`;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 84 | `      const { error: upErr } = await supabase.storage.from("task-attachments").upload(path, file);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 85 | `      if (upErr) { toast.error(upErr.message); continue; }` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 86 | `      const { error: insErr } = await sb.from("client_files").insert({` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 87 | `        client_id: clientId,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 88 | `        title: file.name,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 89 | `        file_name: file.name,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 90 | `        storage_path: path,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 91 | `        mime_type: file.type,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 92 | `        size_bytes: file.size,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 93 | `        uploaded_by: user.id,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 94 | `        position: startPos + i,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 95 | `      });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 96 | `      if (insErr) toast.error(insErr.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 97 | `      i++;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 98 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 99 | `    setUploading(false);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 100 | `    if (clientId) void load(clientId);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 101 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 102 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 103 | `  const updateTitle = async (id: string, title: string) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 104 | `    setFiles((curr) => curr.map((f) => (f.id === id ? { ...f, title } : f)));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 105 | `    const { error } = await sb.from("client_files").update({ title }).eq("id", id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 106 | `    if (error) toast.error(error.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 107 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 108 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 109 | `  const remove = async (f: ClientFile) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 110 | `    if (!confirm(\`Excluir "${f.title || f.file_name}"?\`)) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 111 | `    await supabase.storage.from("task-attachments").remove([f.storage_path]);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 112 | `    await sb.from("client_files").delete().eq("id", f.id);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 113 | `    if (clientId) void load(clientId);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 114 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 115 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 116 | `  const move = async (id: string, dir: -1 | 1) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 117 | `    const idx = files.findIndex((f) => f.id === id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 118 | `    const swap = idx + dir;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 119 | `    if (idx < 0 || swap < 0 || swap >= files.length) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 120 | `    const next = [...files];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 121 | `    [next[idx], next[swap]] = [next[swap], next[idx]];` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 122 | `    const reIndexed = next.map((f, i) => ({ ...f, position: i }));` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 123 | `    setFiles(reIndexed);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 124 | `    await Promise.all(` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 125 | `      reIndexed.map((f) => sb.from("client_files").update({ position: f.position }).eq("id", f.id)),` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 126 | `    );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 127 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 128 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 129 | `  const openFile = (f: ClientFile) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 130 | `    const canPreview = PREVIEWABLE_MIME_RE.test(f.mime_type ?? "");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 131 | `    if (canPreview) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 132 | `      setPreview({ file_name: f.title || f.file_name, storage_path: f.storage_path, mime_type: f.mime_type });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 133 | `      return;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 134 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 135 | `    const u = urls[f.id];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 136 | `    if (u) window.open(u, "_blank", "noopener,noreferrer");` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 137 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 138 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 139 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 140 | `    <Sheet open={open} onOpenChange={onOpenChange}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 141 | `      <SheetContent side="right" className="flex w-full max-w-2xl flex-col p-0 sm:max-w-2xl">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 142 | `        <SheetHeader className="border-b px-4 py-3">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 143 | `          <SheetTitle className="flex items-center gap-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 144 | `            <Paperclip className="h-4 w-4" /> Arquivos do cliente` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 145 | `          </SheetTitle>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 146 | `          <SheetDescription>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 147 | `            Apenas arquivos. Defina título e reordene com as setas. Aceita qualquer tipo.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 148 | `          </SheetDescription>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 149 | `        </SheetHeader>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 150 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 151 | `        <div className="flex items-center gap-2 border-b px-4 py-3">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 152 | `          <Select value={clientId ?? undefined} onValueChange={(v) => setClientId(v)}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 153 | `            <SelectTrigger className="w-[260px]">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 154 | `              <SelectValue placeholder="Selecione um cliente" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 155 | `            </SelectTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 156 | `            <SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 157 | `              {clients.map((c) => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 158 | `                <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 159 | `              ))}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 160 | `            </SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 161 | `          </Select>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 162 | `          <label className="cursor-pointer">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 163 | `            <input` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 164 | `              type="file"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 165 | `              multiple` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 166 | `              accept="*/*"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 167 | `              className="hidden"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 168 | `              onChange={(e) => void onUpload(e.target.files)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 169 | `              disabled={!clientId}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 170 | `            />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 171 | `            <span className="inline-flex items-center rounded-md border bg-background px-3 py-1.5 text-sm hover:bg-muted">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 172 | `              {uploading ? "Enviando…" : "+ Adicionar arquivo"}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 173 | `            </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 174 | `          </label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 175 | `          {clientId && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 176 | `            <p className="ml-auto text-xs text-muted-foreground">{files.length} arquivo(s)</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 177 | `          )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 178 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 179 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 180 | `        <div className="flex-1 overflow-y-auto p-4">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 181 | `          {!clientId ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 182 | `            <p className="rounded border border-dashed p-6 text-center text-sm text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 183 | `              Selecione um cliente para ver e gerenciar arquivos.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 184 | `            </p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 185 | `          ) : files.length === 0 ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 186 | `            <p className="rounded border border-dashed p-6 text-center text-sm text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 187 | `              Nenhum arquivo enviado para este cliente.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 188 | `            </p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 189 | `          ) : (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 190 | `            <ul className="space-y-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 191 | `              {files.map((f, i) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 192 | `                const isImage = f.mime_type?.startsWith("image/");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 193 | `                const canPreview = PREVIEWABLE_MIME_RE.test(f.mime_type ?? "");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 194 | `                return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 195 | `                  <li key={f.id} className="flex items-center gap-3 rounded-lg border bg-card p-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 196 | `                    <div className="flex flex-col">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 197 | `                      <Button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 198 | `                        size="icon" variant="ghost" className="h-6 w-6"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 199 | `                        onClick={() => void move(f.id, -1)} disabled={i === 0}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 200 | `                        title="Mover para cima"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 201 | `                      >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 202 | `                        <ArrowUp className="h-3.5 w-3.5" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 203 | `                      </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 204 | `                      <Button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 205 | `                        size="icon" variant="ghost" className="h-6 w-6"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 206 | `                        onClick={() => void move(f.id, 1)} disabled={i === files.length - 1}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 207 | `                        title="Mover para baixo"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 208 | `                      >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 209 | `                        <ArrowDown className="h-3.5 w-3.5" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 210 | `                      </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 211 | `                    </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 212 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 213 | `                    <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 214 | `                      type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 215 | `                      onClick={() => openFile(f)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 216 | `                      className="h-14 w-14 shrink-0 overflow-hidden rounded border bg-muted"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 217 | `                      title={f.file_name}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 218 | `                    >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 219 | `                      {isImage && urls[f.id] ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 220 | `                        <img src={urls[f.id]} alt={f.file_name} className="h-full w-full object-cover" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 221 | `                      ) : (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 222 | `                        <div className="flex h-full w-full items-center justify-center text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 223 | `                          {canPreview ? <FileText className="h-5 w-5" /> : <ExternalLink className="h-5 w-5" />}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 224 | `                        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 225 | `                      )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 226 | `                    </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 227 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 228 | `                    <div className="flex min-w-0 flex-1 flex-col gap-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 229 | `                      <Input` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 230 | `                        value={f.title ?? ""}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 231 | `                        onChange={(e) => setFiles((curr) => curr.map((x) => (x.id === f.id ? { ...x, title: e.target.value } : x)))}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 232 | `                        onBlur={(e) => void updateTitle(f.id, e.target.value)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 233 | `                        placeholder="Título do arquivo"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 234 | `                        className="h-7 text-sm"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 235 | `                      />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 236 | `                      <p className="truncate text-[11px] text-muted-foreground" title={f.file_name}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 237 | `                        {f.file_name}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 238 | `                      </p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 239 | `                    </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 240 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 241 | `                    <Button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 242 | `                      size="sm" variant="ghost"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 243 | `                      onClick={() => openFile(f)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 244 | `                      title="Abrir"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 245 | `                    >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 246 | `                      Abrir` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 247 | `                    </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 248 | `                    <Button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 249 | `                      size="icon" variant="ghost" className="h-8 w-8 text-destructive"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 250 | `                      onClick={() => void remove(f)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 251 | `                      title="Excluir"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 252 | `                    >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 253 | `                      <Trash2 className="h-4 w-4" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 254 | `                    </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 255 | `                  </li>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 256 | `                );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 257 | `              })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 258 | `            </ul>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 259 | `          )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 260 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 261 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 262 | `        <AttachmentPreviewDialog` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 263 | `          open={!!preview}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 264 | `          onOpenChange={(o) => { if (!o) setPreview(null); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 265 | `          attachment={preview}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 266 | `        />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 267 | `      </SheetContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 268 | `    </Sheet>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 269 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 270 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 271 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
