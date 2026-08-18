# src/components/InlineTaskEditor.tsx

Tipo: Componente ou rota React em TypeScript.

Este documento foi gerado para estudo e manutencao. Ele preserva o codigo original e explica linha por linha sem alterar o comportamento do sistema publicado.

| Linha | Codigo original | Explicacao |
| ---: | --- | --- |
| 1 | `import { useEffect, useRef, useState, type HTMLAttributes, type KeyboardEvent as ReactKeyboardEvent } from "react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 2 | `import { useQueryClient } from "@tanstack/react-query";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 3 | `import { CheckCircle2, Download, ExternalLink, GripVertical, Image as ImageIcon, Link2, Paperclip, Pencil, RotateCcw, Save, Trash2, X } from "lucide-react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 4 | `import { toast } from "sonner";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 5 | `import { AttachmentPreviewDialog } from "@/components/AttachmentPreviewDialog";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 6 | `import { Button } from "@/components/ui/button";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 7 | `import { Input } from "@/components/ui/input";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 8 | `import { Label } from "@/components/ui/label";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 9 | `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 10 | `import { Textarea } from "@/components/ui/textarea";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 11 | `import { useAuth } from "@/hooks/use-auth";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 12 | `import type { Client, KanbanColumn, Profile, Task, TaskTag } from "@/hooks/use-data";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 13 | `import { supabase } from "@/integrations/supabase/client";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 14 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 15 | `interface Attachment {` | Declara um contrato de tipos TypeScript para deixar os dados mais seguros e previsiveis. |
| 16 | `  id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 17 | `  task_id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 18 | `  file_name: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 19 | `  storage_path: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 20 | `  mime_type: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 21 | `  size_bytes: number | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 22 | `  uploaded_by: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 23 | `  created_at: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 24 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 25 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 26 | `const LINK_MIME = "text/uri-list";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 27 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 28 | `interface Props {` | Declara um contrato de tipos TypeScript para deixar os dados mais seguros e previsiveis. |
| 29 | `  task: Task;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 30 | `  clients: Client[];` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 31 | `  profiles: Profile[];` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 32 | `  columns: KanbanColumn[];` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 33 | `  tags: TaskTag[];` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 34 | `  onClose?: () => void;` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 35 | `  onOpenFull?: () => void;` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 36 | `  compact?: boolean;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 37 | `  dragHandleProps?: HTMLAttributes<HTMLSpanElement>;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 38 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 39 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 40 | `function toLocalInput(value: string | null) {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 41 | `  if (!value) return "";` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 42 | `  const date = new Date(value);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 43 | `  const offset = date.getTimezoneOffset();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 44 | `  return new Date(date.getTime() - offset * 60_000).toISOString().slice(0, 16);` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 45 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 46 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 47 | `export function InlineTaskEditor({` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 48 | `  task,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 49 | `  clients,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 50 | `  profiles,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 51 | `  columns,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 52 | `  tags,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 53 | `  onClose,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 54 | `  onOpenFull,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 55 | `  compact = false,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 56 | `  dragHandleProps,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 57 | `}: Props) {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 58 | `  const qc = useQueryClient();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 59 | `  const { user } = useAuth();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 60 | `  const fileInputRef = useRef<HTMLInputElement>(null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 61 | `  const [form, setForm] = useState({` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 62 | `    title: task.title,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 63 | `    description: task.description ?? "",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 64 | `    priority: task.priority,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 65 | `    status: task.status,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 66 | `    due_date: toLocalInput(task.due_date),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 67 | `    client_id: task.client_id ?? "none",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 68 | `    assignee_id: task.assignee_id ?? "none",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 69 | `    column_id: task.column_id ?? "none",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 70 | `    tag_id: task.tag_id ?? "none",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 71 | `    color: task.color ?? "",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 72 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 73 | `  const [saving, setSaving] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 74 | `  const [attachments, setAttachments] = useState<Attachment[]>([]);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 75 | `  const [previews, setPreviews] = useState<Record<string, string>>({});` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 76 | `  const [linkUrl, setLinkUrl] = useState("");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 77 | `  const [linkLabel, setLinkLabel] = useState("");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 78 | `  const [previewAttachment, setPreviewAttachment] = useState<Attachment | null>(null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 79 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 80 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 81 | `    let cancelled = false;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 82 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 83 | `    async function loadAttachments() {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 84 | `      const { data } = await supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 85 | `        .from("attachments")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 86 | `        .select("*")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 87 | `        .eq("task_id", task.id)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 88 | `        .order("created_at", { ascending: true });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 89 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 90 | `      if (cancelled) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 91 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 92 | `      const list = (data ?? []) as Attachment[];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 93 | `      setAttachments(list);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 94 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 95 | `      const next: Record<string, string> = {};` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 96 | `      await Promise.all(` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 97 | `        list` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 98 | `          .filter((attachment) => attachment.mime_type !== LINK_MIME && (attachment.mime_type?.startsWith("image/") ?? false))` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 99 | `          .map(async (attachment) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 100 | `            const { data: signed } = await supabase.storage` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 101 | `              .from("task-attachments")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 102 | `              .createSignedUrl(attachment.storage_path, 3600);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 103 | `            if (signed) next[attachment.id] = signed.signedUrl;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 104 | `          }),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 105 | `      );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 106 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 107 | `      if (!cancelled) setPreviews(next);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 108 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 109 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 110 | `    void loadAttachments();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 111 | `    return () => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 112 | `      cancelled = true;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 113 | `    };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 114 | `  }, [task.id]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 115 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 116 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 117 | `    setForm({` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 118 | `      title: task.title,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 119 | `      description: task.description ?? "",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 120 | `      priority: task.priority,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 121 | `      status: task.status,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 122 | `      due_date: toLocalInput(task.due_date),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 123 | `      client_id: task.client_id ?? "none",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 124 | `      assignee_id: task.assignee_id ?? "none",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 125 | `      column_id: task.column_id ?? "none",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 126 | `      tag_id: task.tag_id ?? "none",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 127 | `      color: task.color ?? "",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 128 | `    });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 129 | `  }, [task]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 130 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 131 | `  const save = async (overrides: Partial<typeof form> = {}) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 132 | `    setSaving(true);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 133 | `    const merged = { ...form, ...overrides };` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 134 | `    const payload = {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 135 | `      title: merged.title.trim() || "Sem título",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 136 | `      description: merged.description || null,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 137 | `      priority: merged.priority,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 138 | `      status: merged.status,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 139 | `      due_date: merged.due_date ? new Date(merged.due_date).toISOString() : null,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 140 | `      client_id: merged.client_id === "none" ? null : merged.client_id,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 141 | `      assignee_id: merged.assignee_id === "none" ? null : merged.assignee_id,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 142 | `      column_id: merged.column_id === "none" ? null : merged.column_id,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 143 | `      tag_id: merged.tag_id === "none" ? null : merged.tag_id,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 144 | `      color: merged.color || null,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 145 | `      completed_at: merged.status === "done" ? task.completed_at ?? new Date().toISOString() : null,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 146 | `    };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 147 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 148 | `    const { error } = await supabase.from("tasks").update(payload).eq("id", task.id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 149 | `    setSaving(false);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 150 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 151 | `    if (error) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 152 | `      toast.error(error.message);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 153 | `      return;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 154 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 155 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 156 | `    toast.success("Alterações salvas");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 157 | `    void qc.invalidateQueries({ queryKey: ["tasks"] });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 158 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 159 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 160 | `  const remove = async () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 161 | `    if (!confirm("Excluir esta tarefa?")) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 162 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 163 | `    const { error } = await supabase.from("tasks").delete().eq("id", task.id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 164 | `    if (error) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 165 | `      toast.error(error.message);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 166 | `      return;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 167 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 168 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 169 | `    toast.success("Tarefa excluída");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 170 | `    void qc.invalidateQueries({ queryKey: ["tasks"] });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 171 | `    onClose?.();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 172 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 173 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 174 | `  const toggleDone = async () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 175 | `    const nextStatus: Task["status"] = form.status === "done" ? "in_progress" : "done";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 176 | `    setForm((current) => ({ ...current, status: nextStatus }));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 177 | `    await save({ status: nextStatus });` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 178 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 179 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 180 | `  const uploadFile = async (file: File) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 181 | `    if (!user) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 182 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 183 | `    const safeName =` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 184 | `      file.name` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 185 | `        .normalize("NFD")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 186 | `        .replace(/[\u0300-\u036f]/g, "")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 187 | `        .replace(/[^a-zA-Z0-9._-]+/g, "_")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 188 | `        .replace(/_+/g, "_")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 189 | `        .slice(-120) || "arquivo";` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 190 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 191 | `    const path = \`${task.id}/${Date.now()}-${safeName}\`;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 192 | `    const contentType = file.type || "application/octet-stream";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 193 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 194 | `    const { error: uploadError } = await supabase.storage` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 195 | `      .from("task-attachments")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 196 | `      .upload(path, file, { contentType, upsert: false });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 197 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 198 | `    if (uploadError) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 199 | `      toast.error(\`Falha no upload: ${uploadError.message}\`);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 200 | `      return;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 201 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 202 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 203 | `    const { data, error } = await supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 204 | `      .from("attachments")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 205 | `      .insert({` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 206 | `        task_id: task.id,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 207 | `        file_name: file.name,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 208 | `        storage_path: path,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 209 | `        mime_type: contentType,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 210 | `        size_bytes: file.size,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 211 | `        uploaded_by: user.id,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 212 | `      })` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 213 | `      .select()` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 214 | `      .single();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 215 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 216 | `    if (error) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 217 | `      toast.error(error.message);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 218 | `      return;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 219 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 220 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 221 | `    const attachment = data as Attachment;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 222 | `    setAttachments((current) => [...current, attachment]);` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 223 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 224 | `    if (attachment.mime_type?.startsWith("image/")) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 225 | `      const { data: signed } = await supabase.storage` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 226 | `        .from("task-attachments")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 227 | `        .createSignedUrl(attachment.storage_path, 3600);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 228 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 229 | `      if (signed) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 230 | `        setPreviews((current) => ({ ...current, [attachment.id]: signed.signedUrl }));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 231 | `      }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 232 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 233 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 234 | `    toast.success("Arquivo enviado");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 235 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 236 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 237 | `  const addLink = async () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 238 | `    if (!user || !linkUrl.trim()) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 239 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 240 | `    let url = linkUrl.trim();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 241 | `    if (!/^https?:\/\//i.test(url)) url = \`https://${url}\`;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 242 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 243 | `    const { data, error } = await supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 244 | `      .from("attachments")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 245 | `      .insert({` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 246 | `        task_id: task.id,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 247 | `        file_name: linkLabel.trim() || url,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 248 | `        storage_path: url,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 249 | `        mime_type: LINK_MIME,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 250 | `        uploaded_by: user.id,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 251 | `      })` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 252 | `      .select()` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 253 | `      .single();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 254 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 255 | `    if (error) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 256 | `      toast.error(error.message);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 257 | `      return;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 258 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 259 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 260 | `    setAttachments((current) => [...current, data as Attachment]);` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 261 | `    setLinkUrl("");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 262 | `    setLinkLabel("");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 263 | `    toast.success("Link adicionado");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 264 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 265 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 266 | `  const openAttachment = (attachment: Attachment) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 267 | `    if (attachment.mime_type === LINK_MIME) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 268 | `      window.open(attachment.storage_path, "_blank", "noopener,noreferrer");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 269 | `      return;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 270 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 271 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 272 | `    setPreviewAttachment(attachment);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 273 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 274 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 275 | `  const downloadAttachment = async (attachment: Attachment) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 276 | `    if (attachment.mime_type === LINK_MIME) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 277 | `      openAttachment(attachment);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 278 | `      return;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 279 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 280 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 281 | `    const { data, error } = await supabase.storage.from("task-attachments").download(attachment.storage_path);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 282 | `    if (error) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 283 | `      toast.error(error.message);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 284 | `      return;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 285 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 286 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 287 | `    const blobUrl = URL.createObjectURL(data);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 288 | `    const anchor = document.createElement("a");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 289 | `    anchor.href = blobUrl;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 290 | `    anchor.download = attachment.file_name;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 291 | `    document.body.appendChild(anchor);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 292 | `    anchor.click();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 293 | `    anchor.remove();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 294 | `    window.setTimeout(() => URL.revokeObjectURL(blobUrl), 30_000);` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 295 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 296 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 297 | `  const deleteAttachment = async (attachment: Attachment) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 298 | `    if (attachment.mime_type !== LINK_MIME) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 299 | `      await supabase.storage.from("task-attachments").remove([attachment.storage_path]);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 300 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 301 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 302 | `    await supabase.from("attachments").delete().eq("id", attachment.id);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 303 | `    setAttachments((current) => current.filter((item) => item.id !== attachment.id));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 304 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 305 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 306 | `  const handleSaveOnEnter = (event: ReactKeyboardEvent<HTMLTextAreaElement>) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 307 | `    if (event.key === "Enter" && !event.shiftKey) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 308 | `      event.preventDefault();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 309 | `      void save();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 310 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 311 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 312 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 313 | `  const selectTriggerClass = compact ? "h-8 text-xs" : "h-7 text-xs";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 314 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 315 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 316 | `    <>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 317 | `      <div` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 318 | `        className={compact ? "rounded-lg border bg-card p-3 shadow-sm" : "max-h-[75vh] overflow-y-auto rounded-lg border bg-card p-3 shadow-md ring-2 ring-primary/40"}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 319 | `        onClick={(event) => event.stopPropagation()}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 320 | `      >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 321 | `        <div className="mb-3 flex items-start justify-between gap-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 322 | `          <div className="flex min-w-0 items-center gap-1.5">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 323 | `            {compact && dragHandleProps ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 324 | `              <span` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 325 | `                {...dragHandleProps}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 326 | `                onClick={(event) => event.stopPropagation()}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 327 | `                className="inline-flex h-7 w-7 shrink-0 cursor-grab items-center justify-center rounded-md text-muted-foreground transition hover:bg-muted hover:text-foreground active:cursor-grabbing"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 328 | `                title="Arrastar tarefa"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 329 | `              >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 330 | `                <GripVertical className="h-3.5 w-3.5" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 331 | `              </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 332 | `            ) : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 333 | `            <span className="truncate text-[10px] uppercase tracking-wide text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 334 | `              {compact ? "Inline" : "Editando"}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 335 | `            </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 336 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 337 | `          <div className="flex shrink-0 items-center gap-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 338 | `            {onOpenFull ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 339 | `              <Button size="icon" variant="ghost" className="h-6 w-6" onClick={onOpenFull} title="Tela cheia">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 340 | `                <Pencil className="h-3 w-3" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 341 | `              </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 342 | `            ) : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 343 | `            {!compact && onClose ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 344 | `              <Button size="icon" variant="ghost" className="h-6 w-6" onClick={onClose} title="Fechar">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 345 | `                <X className="h-3 w-3" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 346 | `              </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 347 | `            ) : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 348 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 349 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 350 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 351 | `        <div className="space-y-3">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 352 | `          <div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 353 | `            <Label className="text-[10px] text-muted-foreground">Nome</Label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 354 | `            <Textarea` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 355 | `              value={form.title}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 356 | `              onChange={(event) => setForm({ ...form, title: event.target.value })}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 357 | `              onKeyDown={handleSaveOnEnter}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 358 | `              placeholder="Nome da tarefa"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 359 | `              className="mt-1 min-h-[54px] resize-none overflow-hidden text-sm font-medium leading-snug [overflow-wrap:anywhere]"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 360 | `              autoFocus={!compact}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 361 | `            />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 362 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 363 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 364 | `          <div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 365 | `            <Label className="text-[10px] text-muted-foreground">Observação</Label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 366 | `            <Textarea` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 367 | `              value={form.description}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 368 | `              onChange={(event) => setForm({ ...form, description: event.target.value })}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 369 | `              onKeyDown={handleSaveOnEnter}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 370 | `              placeholder="Observações da tarefa"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 371 | `              className="mt-1 min-h-[88px] resize-y text-xs leading-relaxed [overflow-wrap:anywhere]"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 372 | `            />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 373 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 374 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 375 | `          <div className="grid grid-cols-2 gap-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 376 | `            <div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 377 | `              <Label className="text-[10px] text-muted-foreground">Tag</Label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 378 | `              <Select value={form.tag_id} onValueChange={(value) => setForm({ ...form, tag_id: value })}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 379 | `                <SelectTrigger className={selectTriggerClass}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 380 | `                  <SelectValue placeholder="Sem tag" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 381 | `                </SelectTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 382 | `                <SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 383 | `                  <SelectItem value="none">Sem tag</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 384 | `                  {tags.map((tag) => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 385 | `                    <SelectItem key={tag.id} value={tag.id}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 386 | `                      <span className="flex items-center gap-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 387 | `                        <span className="h-2.5 w-2.5 rounded-full" style={{ background: tag.color }} />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 388 | `                        {tag.name}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 389 | `                      </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 390 | `                    </SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 391 | `                  ))}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 392 | `                </SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 393 | `              </Select>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 394 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 395 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 396 | `            <div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 397 | `              <Label className="text-[10px] text-muted-foreground">Status</Label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 398 | `              <Select value={form.status ?? "none"} onValueChange={(value) => setForm({ ...form, status: value === "none" ? null : (value as Task["status"]) })}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 399 | `                <SelectTrigger className={selectTriggerClass}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 400 | `                  <SelectValue />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 401 | `                </SelectTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 402 | `                <SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 403 | `                  <SelectItem value="none">Sem status</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 404 | `                  <SelectItem value="todo">A fazer</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 405 | `                  <SelectItem value="in_progress">Em andamento</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 406 | `                  <SelectItem value="review">Em revisão</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 407 | `                  <SelectItem value="done">Concluída</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 408 | `                </SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 409 | `              </Select>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 410 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 411 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 412 | `            <div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 413 | `              <Label className="text-[10px] text-muted-foreground">Prioridade</Label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 414 | `              <Select value={form.priority ?? "none"} onValueChange={(value) => setForm({ ...form, priority: value === "none" ? null : (value as Task["priority"]) })}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 415 | `                <SelectTrigger className={selectTriggerClass}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 416 | `                  <SelectValue />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 417 | `                </SelectTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 418 | `                <SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 419 | `                  <SelectItem value="none">Sem prioridade</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 420 | `                  <SelectItem value="low">Baixa</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 421 | `                  <SelectItem value="medium">Média</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 422 | `                  <SelectItem value="high">Alta</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 423 | `                  <SelectItem value="urgent">Urgente</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 424 | `                </SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 425 | `              </Select>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 426 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 427 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 428 | `            <div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 429 | `              <Label className="text-[10px] text-muted-foreground">Cliente</Label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 430 | `              <Select value={form.client_id} onValueChange={(value) => setForm({ ...form, client_id: value })}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 431 | `                <SelectTrigger className={selectTriggerClass}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 432 | `                  <SelectValue />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 433 | `                </SelectTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 434 | `                <SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 435 | `                  <SelectItem value="none">Nenhum</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 436 | `                  {clients.map((client) => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 437 | `                    <SelectItem key={client.id} value={client.id}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 438 | `                      {client.name}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 439 | `                    </SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 440 | `                  ))}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 441 | `                </SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 442 | `              </Select>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 443 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 444 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 445 | `            <div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 446 | `              <Label className="text-[10px] text-muted-foreground">Responsável</Label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 447 | `              <Select value={form.assignee_id} onValueChange={(value) => setForm({ ...form, assignee_id: value })}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 448 | `                <SelectTrigger className={selectTriggerClass}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 449 | `                  <SelectValue />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 450 | `                </SelectTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 451 | `                <SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 452 | `                  <SelectItem value="none">Sem responsável</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 453 | `                  {profiles.map((profile) => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 454 | `                    <SelectItem key={profile.id} value={profile.id}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 455 | `                      {profile.full_name || profile.email}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 456 | `                    </SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 457 | `                  ))}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 458 | `                </SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 459 | `              </Select>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 460 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 461 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 462 | `            <div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 463 | `              <Label className="text-[10px] text-muted-foreground">Prazo</Label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 464 | `              <Input` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 465 | `                type="datetime-local"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 466 | `                value={form.due_date}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 467 | `                onChange={(event) => setForm({ ...form, due_date: event.target.value })}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 468 | `                className={selectTriggerClass}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 469 | `              />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 470 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 471 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 472 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 473 | `          {!compact ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 474 | `            <>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 475 | `              <div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 476 | `                <Label className="text-[10px] text-muted-foreground">Coluna</Label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 477 | `                <Select value={form.column_id} onValueChange={(value) => setForm({ ...form, column_id: value })}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 478 | `                  <SelectTrigger className={selectTriggerClass}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 479 | `                    <SelectValue />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 480 | `                  </SelectTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 481 | `                  <SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 482 | `                    <SelectItem value="none">Sem coluna</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 483 | `                    {columns.map((column) => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 484 | `                      <SelectItem key={column.id} value={column.id}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 485 | `                        {column.name}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 486 | `                      </SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 487 | `                    ))}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 488 | `                  </SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 489 | `                </Select>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 490 | `              </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 491 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 492 | `              <div className="flex items-center gap-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 493 | `                <Label className="text-[10px] text-muted-foreground">Cor</Label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 494 | `                <input` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 495 | `                  type="color"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 496 | `                  value={form.color || "#1e3a8a"}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 497 | `                  onChange={(event) => setForm({ ...form, color: event.target.value })}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 498 | `                  className="h-7 w-10 cursor-pointer rounded border bg-transparent"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 499 | `                />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 500 | `                {form.color ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 501 | `                  <Button size="sm" variant="ghost" className="h-6 px-2 text-[10px]" onClick={() => setForm({ ...form, color: "" })}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 502 | `                    Limpar` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 503 | `                  </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 504 | `                ) : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 505 | `              </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 506 | `            </>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 507 | `          ) : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 508 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 509 | `          <div className="space-y-2 rounded-md border border-dashed p-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 510 | `            <div className="flex items-center justify-between gap-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 511 | `              <Label className="flex items-center gap-1 text-[10px] text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 512 | `                <Paperclip className="h-3 w-3" />Arquivos` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 513 | `              </Label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 514 | `              <Button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 515 | `                type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 516 | `                size="sm"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 517 | `                variant="ghost"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 518 | `                className="h-6 px-2 text-[10px]"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 519 | `                onClick={() => fileInputRef.current?.click()}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 520 | `              >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 521 | `                <ImageIcon className="mr-1 h-3 w-3" />Enviar arquivo` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 522 | `              </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 523 | `              <input` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 524 | `                ref={fileInputRef}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 525 | `                type="file"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 526 | `                accept="*/*"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 527 | `                hidden` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 528 | `                onChange={(event) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 529 | `                  const file = event.target.files?.[0];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 530 | `                  if (file) void uploadFile(file);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 531 | `                  event.target.value = "";` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 532 | `                }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 533 | `              />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 534 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 535 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 536 | `            {attachments.length > 0 ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 537 | `              <ul className="space-y-1.5">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 538 | `                {attachments.map((attachment) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 539 | `                  const isLink = attachment.mime_type === LINK_MIME;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 540 | `                  const isImage = !isLink && attachment.mime_type?.startsWith("image/");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 541 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 542 | `                  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 543 | `                    <li key={attachment.id} className="rounded border bg-muted/30 p-1.5">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 544 | `                      <div className="flex items-start gap-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 545 | `                        {isImage && previews[attachment.id] ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 546 | `                          <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 547 | `                            type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 548 | `                            onClick={() => openAttachment(attachment)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 549 | `                            className="h-10 w-10 shrink-0 overflow-hidden rounded border"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 550 | `                            title="Visualizar"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 551 | `                          >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 552 | `                            <img src={previews[attachment.id]} alt={attachment.file_name} className="h-full w-full object-cover" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 553 | `                          </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 554 | `                        ) : (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 555 | `                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded border bg-background text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 556 | `                            {isLink ? <Link2 className="h-4 w-4" /> : <Paperclip className="h-4 w-4" />}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 557 | `                          </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 558 | `                        )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 559 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 560 | `                        <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 561 | `                          type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 562 | `                          onClick={() => openAttachment(attachment)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 563 | `                          className="min-w-0 flex-1 text-left text-xs leading-snug text-foreground transition hover:underline [overflow-wrap:anywhere]"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 564 | `                          title={isLink ? attachment.storage_path : attachment.file_name}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 565 | `                        >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 566 | `                          {attachment.file_name}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 567 | `                        </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 568 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 569 | `                        <div className="flex shrink-0 items-center gap-0.5">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 570 | `                          <Button size="icon" variant="ghost" className="h-6 w-6" onClick={() => openAttachment(attachment)} title="Abrir">` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 571 | `                            <ExternalLink className="h-3 w-3" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 572 | `                          </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 573 | `                          {!isLink ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 574 | `                            <Button size="icon" variant="ghost" className="h-6 w-6" onClick={() => downloadAttachment(attachment)} title="Baixar">` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 575 | `                              <Download className="h-3 w-3" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 576 | `                            </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 577 | `                          ) : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 578 | `                          <Button size="icon" variant="ghost" className="h-6 w-6 text-destructive" onClick={() => void deleteAttachment(attachment)} title="Remover">` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 579 | `                            <X className="h-3 w-3" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 580 | `                          </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 581 | `                        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 582 | `                      </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 583 | `                    </li>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 584 | `                  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 585 | `                })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 586 | `              </ul>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 587 | `            ) : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 588 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 589 | `            <div className="flex flex-col gap-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 590 | `              <Input` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 591 | `                value={linkLabel}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 592 | `                onChange={(event) => setLinkLabel(event.target.value)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 593 | `                placeholder="Rótulo do link (opcional)"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 594 | `                className="h-7 text-xs"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 595 | `              />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 596 | `              <div className="flex gap-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 597 | `                <Input` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 598 | `                  value={linkUrl}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 599 | `                  onChange={(event) => setLinkUrl(event.target.value)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 600 | `                  placeholder="https://..."` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 601 | `                  className="h-7 text-xs"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 602 | `                  onKeyDown={(event) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 603 | `                    if (event.key === "Enter") {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 604 | `                      event.preventDefault();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 605 | `                      void addLink();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 606 | `                    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 607 | `                  }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 608 | `                />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 609 | `                <Button size="sm" variant="outline" className="h-7 text-xs" onClick={() => void addLink()} disabled={!linkUrl.trim()}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 610 | `                  <Link2 className="mr-1 h-3 w-3" />Adicionar` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 611 | `                </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 612 | `              </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 613 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 614 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 615 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 616 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 617 | `        <div className="mt-3 flex items-center justify-between gap-2 border-t pt-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 618 | `          <Button size="sm" variant="ghost" className="h-7 text-xs text-destructive" onClick={() => void remove()}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 619 | `            <Trash2 className="mr-1 h-3 w-3" />Excluir` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 620 | `          </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 621 | `          <div className="flex items-center gap-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 622 | `            <Button size="sm" variant="outline" className="h-7 text-xs" onClick={() => void toggleDone()}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 623 | `              {form.status === "done" ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 624 | `                <>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 625 | `                  <RotateCcw className="mr-1 h-3 w-3" />Reabrir` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 626 | `                </>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 627 | `              ) : (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 628 | `                <>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 629 | `                  <CheckCircle2 className="mr-1 h-3 w-3" />Concluir` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 630 | `                </>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 631 | `              )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 632 | `            </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 633 | `            <Button size="sm" className="h-7 text-xs" onClick={() => void save()} disabled={saving}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 634 | `              <Save className="mr-1 h-3 w-3" />Salvar` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 635 | `            </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 636 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 637 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 638 | `      </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 639 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 640 | `      <AttachmentPreviewDialog` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 641 | `        open={!!previewAttachment}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 642 | `        onOpenChange={(open) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 643 | `          if (!open) setPreviewAttachment(null);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 644 | `        }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 645 | `        attachment={previewAttachment}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 646 | `      />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 647 | `    </>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 648 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 649 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 650 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
