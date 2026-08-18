# src/components/TaskDialog.tsx

Tipo: Componente ou rota React em TypeScript.

Este documento foi gerado para estudo e manutencao. Ele preserva o codigo original e explica linha por linha sem alterar o comportamento do sistema publicado.

| Linha | Codigo original | Explicacao |
| ---: | --- | --- |
| 1 | `import { useEffect, useRef, useState } from "react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 2 | `import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 3 | `import { Button } from "@/components/ui/button";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 4 | `import { Input } from "@/components/ui/input";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 5 | `import { Label } from "@/components/ui/label";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 6 | `import { Textarea } from "@/components/ui/textarea";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 7 | `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 8 | `import { Checkbox } from "@/components/ui/checkbox";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 9 | `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 10 | `import { supabase } from "@/integrations/supabase/client";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 11 | `import { useAuth } from "@/hooks/use-auth";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 12 | `import { useClients, useColumns, useProfiles, type Task } from "@/hooks/use-data";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 13 | `import { useQueryClient } from "@tanstack/react-query";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 14 | `import { toast } from "sonner";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 15 | `import { Bold, Italic, Underline, Trash2, Paperclip, Send, Download, ExternalLink, X, Plus, Link2, ChevronDown, ChevronRight } from "lucide-react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 16 | `import { format } from "date-fns";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 17 | `import { AttachmentPreviewDialog } from "@/components/AttachmentPreviewDialog";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 18 | `import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 19 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 20 | `interface Props {` | Declara um contrato de tipos TypeScript para deixar os dados mais seguros e previsiveis. |
| 21 | `  open: boolean;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 22 | `  onOpenChange: (o: boolean) => void;` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 23 | `  task?: Task | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 24 | `  defaultColumnId?: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 25 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 26 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 27 | `interface Subtask { id: string; title: string; done: boolean; position: number; due_date: string | null; assignee_id: string | null; notes: string | null; }` | Declara um contrato de tipos TypeScript para deixar os dados mais seguros e previsiveis. |
| 28 | `interface SubtaskAttachment { id: string; subtask_id: string; file_name: string; storage_path: string; mime_type: string | null; size_bytes: number | null; }` | Declara um contrato de tipos TypeScript para deixar os dados mais seguros e previsiveis. |
| 29 | `interface SubtaskDueChange { id: string; subtask_id: string; old_due_date: string | null; new_due_date: string | null; reason: string | null; created_at: string; }` | Declara um contrato de tipos TypeScript para deixar os dados mais seguros e previsiveis. |
| 30 | `interface Comment { id: string; title: string | null; body: string; author_id: string; created_at: string; }` | Declara um contrato de tipos TypeScript para deixar os dados mais seguros e previsiveis. |
| 31 | `interface Attachment { id: string; file_name: string; storage_path: string; mime_type: string | null; size_bytes: number | null; }` | Declara um contrato de tipos TypeScript para deixar os dados mais seguros e previsiveis. |
| 32 | `const LINK_MIME = "text/uri-list";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 33 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 34 | `export function TaskDialog({ open, onOpenChange, task, defaultColumnId }: Props) {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 35 | `  const qc = useQueryClient();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 36 | `  const { user } = useAuth();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 37 | `  const { data: cols } = useColumns();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 38 | `  const { data: clients } = useClients();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 39 | `  const { data: profiles } = useProfiles();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 40 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 41 | `  const [title, setTitle] = useState("");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 42 | `  const [description, setDescription] = useState("");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 43 | `  const [status, setStatus] = useState<Task["status"]>("todo");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 44 | `  const [priority, setPriority] = useState<Task["priority"]>("medium");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 45 | `  const [columnId, setColumnId] = useState<string>("");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 46 | `  const [clientId, setClientId] = useState<string>("");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 47 | `  const [assigneeId, setAssigneeId] = useState<string>("");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 48 | `  const [dueDate, setDueDate] = useState<string>("");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 49 | `  const [currentTaskId, setCurrentTaskId] = useState<string | null>(null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 50 | `  const currentTaskIdRef = useRef<string | null>(null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 51 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 52 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 53 | `  const [subtasks, setSubtasks] = useState<Subtask[]>([]);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 54 | `  const [newSubtask, setNewSubtask] = useState("");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 55 | `  const [newSubtaskDue, setNewSubtaskDue] = useState("");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 56 | `  const [newSubtaskAssignee, setNewSubtaskAssignee] = useState<string>("");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 57 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 58 | `  const [subDueChanges, setSubDueChanges] = useState<Record<string, SubtaskDueChange[]>>({});` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 59 | `  const [subDueOpen, setSubDueOpen] = useState<Record<string, boolean>>({});` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 60 | `  const [subExpanded, setSubExpanded] = useState<Record<string, boolean>>({});` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 61 | `  const [subAttachments, setSubAttachments] = useState<Record<string, SubtaskAttachment[]>>({});` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 62 | `  const [comments, setComments] = useState<Comment[]>([]);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 63 | `  const [newComment, setNewComment] = useState("");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 64 | `  const [newCommentTitle, setNewCommentTitle] = useState("");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 65 | `  const [openComments, setOpenComments] = useState<Record<string, boolean>>({});` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 66 | `  const [attachments, setAttachments] = useState<Attachment[]>([]);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 67 | `  const [saving, setSaving] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 68 | `  const [previewAttachment, setPreviewAttachment] = useState<Attachment | null>(null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 69 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 70 | `  // Recurrence (only used on create)` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 71 | `  const [recurrenceEnabled, setRecurrenceEnabled] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 72 | `  const [recurrenceDays, setRecurrenceDays] = useState<number[]>([1, 2, 3, 4, 5]);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 73 | `  const [recurrenceEnd, setRecurrenceEnd] = useState<string>("");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 74 | `  const [recurrenceOffsets, setRecurrenceOffsets] = useState<Record<number, number>>({` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 75 | `    0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 76 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 77 | `  const [recurrenceTime, setRecurrenceTime] = useState<string>("18:00");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 78 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 79 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 80 | `    if (!open) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 81 | `    if (task) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 82 | `      setTitle(task.title);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 83 | `      setDescription(task.description ?? "");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 84 | `      setStatus(task.status);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 85 | `      setPriority(task.priority);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 86 | `      setColumnId(task.column_id ?? "");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 87 | `      setClientId(task.client_id ?? "");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 88 | `      setAssigneeId(task.assignee_id ?? "");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 89 | `      setDueDate(task.due_date ? format(new Date(task.due_date), "yyyy-MM-dd'T'HH:mm") : "");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 90 | `      currentTaskIdRef.current = task.id;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 91 | `      setCurrentTaskId(task.id);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 92 | `      setNewSubtask("");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 93 | `      setNewSubtaskDue("");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 94 | `      setNewSubtaskAssignee("");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 95 | `      loadRelated(task.id);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 96 | `    } else {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 97 | `      setTitle(""); setDescription(""); setStatus("todo"); setPriority("medium");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 98 | `      setColumnId(defaultColumnId ?? ""); setClientId(""); setAssigneeId(""); setDueDate("");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 99 | `      currentTaskIdRef.current = null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 100 | `      setCurrentTaskId(null);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 101 | `      setSubtasks([]); setComments([]); setAttachments([]); setNewCommentTitle(""); setNewComment(""); setOpenComments({});` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 102 | `      setNewSubtask("");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 103 | `      setNewSubtaskDue("");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 104 | `      setNewSubtaskAssignee("");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 105 | `      setRecurrenceEnabled(false);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 106 | `      setRecurrenceDays([1, 2, 3, 4, 5]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 107 | `      setRecurrenceEnd("");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 108 | `      setRecurrenceOffsets({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 109 | `      setRecurrenceTime("18:00");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 110 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 111 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 112 | `  }, [open, task, defaultColumnId]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 113 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 114 | `  const loadRelated = async (taskId: string) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 115 | `    const [s, c, a] = await Promise.all([` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 116 | `      supabase.from("subtasks").select("*").eq("task_id", taskId).order("position"),` | Interage com o cliente Supabase para autenticar ou acessar o banco. |
| 117 | `      supabase.from("comments").select("*").eq("task_id", taskId).order("created_at"),` | Interage com o cliente Supabase para autenticar ou acessar o banco. |
| 118 | `      supabase.from("attachments").select("*").eq("task_id", taskId).order("created_at"),` | Interage com o cliente Supabase para autenticar ou acessar o banco. |
| 119 | `    ]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 120 | `    setSubtasks((s.data ?? []) as Subtask[]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 121 | `    setComments((c.data ?? []) as Comment[]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 122 | `    setAttachments((a.data ?? []) as Attachment[]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 123 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 124 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 125 | `  const formatSelected = (tag: "b" | "i" | "u") => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 126 | `    const map = { b: ["**", "**"], i: ["*", "*"], u: ["<u>", "</u>"] } as const;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 127 | `    const ta = document.getElementById("task-description") as HTMLTextAreaElement | null;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 128 | `    if (!ta) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 129 | `    const start = ta.selectionStart, end = ta.selectionEnd;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 130 | `    const sel = description.slice(start, end) || "texto";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 131 | `    const [a, b] = map[tag];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 132 | `    const next = description.slice(0, start) + a + sel + b + description.slice(end);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 133 | `    setDescription(next);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 134 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 135 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 136 | `  const buildPayload = () => ({` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 137 | `    title: title.trim() || "Sem título",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 138 | `    description: description || null,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 139 | `    status,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 140 | `    priority,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 141 | `    column_id: columnId || null,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 142 | `    client_id: clientId || null,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 143 | `    assignee_id: assigneeId || null,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 144 | `    due_date: dueDate ? new Date(dueDate).toISOString() : null,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 145 | `    completed_at: status === "done" ? new Date().toISOString() : null,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 146 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 147 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 148 | `  // Ensures a task row exists so sub-features (subtasks/comments/files) can attach.` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 149 | `  // Auto-creates a draft when the dialog is in "new task" mode.` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 150 | `  const ensureTask = async (): Promise<string | null> => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 151 | `    const existingId = currentTaskIdRef.current ?? currentTaskId;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 152 | `    if (existingId) return existingId;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 153 | `    if (!user) return null;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 154 | `    if (!title.trim()) { toast.error("Defina um título antes de adicionar itens"); return null; }` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 155 | `    const { data, error } = await supabase.from("tasks").insert({ ...buildPayload(), created_by: user.id }).select().single();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 156 | `    if (error) { toast.error(error.message); return null; }` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 157 | `    currentTaskIdRef.current = data.id as string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 158 | `    setCurrentTaskId(data.id as string);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 159 | `    await supabase.from("task_history").insert({ task_id: data.id, user_id: user.id, action: "created" });` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 160 | `    qc.invalidateQueries({ queryKey: ["tasks"] });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 161 | `    return data.id as string;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 162 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 163 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 164 | `  const commitPendingSubtask = async (taskId: string): Promise<boolean> => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 165 | `    const title = newSubtask.trim();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 166 | `    if (!title) return true;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 167 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 168 | `    const due = newSubtaskDue;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 169 | `    const assignee = newSubtaskAssignee;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 170 | `    const position = subtasks.length;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 171 | `    const { data, error } = await supabase.from("subtasks").insert({` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 172 | `      task_id: taskId,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 173 | `      title,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 174 | `      position,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 175 | `      due_date: due ? new Date(due).toISOString() : null,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 176 | `      assignee_id: assignee || null,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 177 | `    } as any).select("id, title, done, position, due_date, assignee_id, notes").single();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 178 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 179 | `    if (error) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 180 | `      toast.error(error.message);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 181 | `      return false;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 182 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 183 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 184 | `    setSubtasks((prev) => [...prev, data as Subtask]);` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 185 | `    setNewSubtask("");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 186 | `    setNewSubtaskDue("");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 187 | `    setNewSubtaskAssignee("");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 188 | `    await Promise.all([` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 189 | `      qc.invalidateQueries({ queryKey: ["tasks"] }),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 190 | `      qc.invalidateQueries({ queryKey: ["subtasks"] }),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 191 | `    ]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 192 | `    return true;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 193 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 194 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 195 | `  const save = async () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 196 | `    if (!title.trim()) { toast.error("Título é obrigatório"); return; }` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 197 | `    if (!user) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 198 | `    setSaving(true);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 199 | `    try {` | Inicia bloco protegido para capturar erros durante a execucao. |
| 200 | `      const payload = buildPayload();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 201 | `      const existingTaskId = currentTaskIdRef.current ?? currentTaskId;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 202 | `      if (existingTaskId) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 203 | `        const { error } = await supabase.from("tasks").update(payload).eq("id", existingTaskId);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 204 | `        if (error) throw error;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 205 | `        await supabase.from("task_history").insert({ task_id: existingTaskId, user_id: user.id, action: "updated" });` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 206 | `        if (!(await commitPendingSubtask(existingTaskId))) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 207 | `      } else if (recurrenceEnabled) {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 208 | `        if (newSubtask.trim()) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 209 | `          toast.error("Para subtarefas com responsável, crie uma tarefa única ou adicione após criar as recorrências.");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 210 | `          return;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 211 | `        }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 212 | `        if (recurrenceDays.length === 0) { toast.error("Selecione ao menos um dia da semana"); setSaving(false); return; }` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 213 | `        if (!recurrenceEnd) { toast.error("Defina a data final da recorrência"); setSaving(false); return; }` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 214 | `        const [hh, mm] = recurrenceTime.split(":").map(Number);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 215 | `        const start = new Date(); start.setHours(0, 0, 0, 0);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 216 | `        const end = new Date(recurrenceEnd + "T23:59:59");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 217 | `        if (end < start) { toast.error("A data final deve ser futura"); setSaving(false); return; }` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 218 | `        const rows: ReturnType<typeof buildPayload>[] = [];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 219 | `        for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {` | Inicia uma repeticao sobre dados ou condicoes. |
| 220 | `          const wd = d.getDay();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 221 | `          if (!recurrenceDays.includes(wd)) continue;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 222 | `          const due = new Date(d);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 223 | `          due.setDate(due.getDate() + (recurrenceOffsets[wd] ?? 0));` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 224 | `          due.setHours(hh || 18, mm || 0, 0, 0);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 225 | `          rows.push({ ...payload, due_date: due.toISOString() });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 226 | `        }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 227 | `        if (rows.length === 0) { toast.error("Nenhuma ocorrência no intervalo"); setSaving(false); return; }` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 228 | `        const { error } = await supabase.from("tasks").insert(rows.map(r => ({ ...r, created_by: user.id })));` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 229 | `        if (error) throw error;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 230 | `        toast.success(\`${rows.length} tarefas recorrentes criadas\`);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 231 | `        qc.invalidateQueries({ queryKey: ["tasks"] });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 232 | `        onOpenChange(false);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 233 | `        return;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 234 | `      } else {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 235 | `        const { data, error } = await supabase.from("tasks").insert({ ...payload, created_by: user.id }).select().single();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 236 | `        if (error) throw error;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 237 | `        await supabase.from("task_history").insert({ task_id: data.id, user_id: user.id, action: "created" });` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 238 | `        currentTaskIdRef.current = data.id as string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 239 | `        setCurrentTaskId(data.id as string);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 240 | `        if (!(await commitPendingSubtask(data.id as string))) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 241 | `      }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 242 | `      toast.success(currentTaskId || task ? "Tarefa atualizada" : "Tarefa criada");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 243 | `      await Promise.all([` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 244 | `        qc.invalidateQueries({ queryKey: ["tasks"] }),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 245 | `        qc.invalidateQueries({ queryKey: ["subtasks"] }),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 246 | `      ]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 247 | `      onOpenChange(false);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 248 | `    } catch (e) {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 249 | `      toast.error((e as Error).message);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 250 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 251 | `    } finally { setSaving(false); }` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 252 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 253 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 254 | `  const remove = async () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 255 | `    if (!currentTaskId) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 256 | `    if (!confirm("Mover esta tarefa para a lixeira? Você pode restaurá-la depois.")) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 257 | `    const { error } = await supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 258 | `      .from("tasks")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 259 | `      .update({ deleted_at: new Date().toISOString() })` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 260 | `      .eq("id", currentTaskId);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 261 | `    if (error) return toast.error(error.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 262 | `    toast.success("Tarefa movida para a lixeira");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 263 | `    qc.invalidateQueries({ queryKey: ["tasks"] });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 264 | `    onOpenChange(false);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 265 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 266 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 267 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 268 | `  // Subtasks` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 269 | `  const addSubtask = async () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 270 | `    if (!newSubtask.trim()) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 271 | `    const tid = await ensureTask();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 272 | `    if (!tid) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 273 | `    await commitPendingSubtask(tid);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 274 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 275 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 276 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 277 | `  const toggleSubtask = async (st: Subtask) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 278 | `    await supabase.from("subtasks").update({ done: !st.done }).eq("id", st.id);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 279 | `    setSubtasks(subtasks.map(s => s.id === st.id ? { ...s, done: !s.done } : s));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 280 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 281 | `  const deleteSubtask = async (id: string) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 282 | `    await supabase.from("subtasks").delete().eq("id", id);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 283 | `    setSubtasks(subtasks.filter(s => s.id !== id));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 284 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 285 | `  const updateSubtaskDue = async (st: Subtask, isoOrEmpty: string, reason?: string) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 286 | `    const next = isoOrEmpty ? new Date(isoOrEmpty).toISOString() : null;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 287 | `    const prev = st.due_date;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 288 | `    if (next === prev) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 289 | `    const { error } = await supabase.from("subtasks").update({ due_date: next }).eq("id", st.id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 290 | `    if (error) return toast.error(error.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 291 | `    setSubtasks(subtasks.map(s => s.id === st.id ? { ...s, due_date: next } : s));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 292 | `    if (user) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 293 | `      await supabase.from("subtask_due_date_changes").insert({` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 294 | `        subtask_id: st.id, old_due_date: prev, new_due_date: next,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 295 | `        reason: reason?.trim() || null, user_id: user.id,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 296 | `      });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 297 | `      // refresh history if open` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 298 | `      if (subDueOpen[st.id]) void loadSubDueChanges(st.id);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 299 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 300 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 301 | `  const loadSubDueChanges = async (subtaskId: string) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 302 | `    const { data } = await supabase.from("subtask_due_date_changes")` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 303 | `      .select("*").eq("subtask_id", subtaskId).order("created_at", { ascending: false });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 304 | `    setSubDueChanges(prev => ({ ...prev, [subtaskId]: (data ?? []) as SubtaskDueChange[] }));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 305 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 306 | `  const toggleSubDueHistory = async (subtaskId: string) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 307 | `    const willOpen = !subDueOpen[subtaskId];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 308 | `    setSubDueOpen(prev => ({ ...prev, [subtaskId]: willOpen }));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 309 | `    if (willOpen && !subDueChanges[subtaskId]) await loadSubDueChanges(subtaskId);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 310 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 311 | `  const updateSubtaskAssignee = async (st: Subtask, value: string) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 312 | `    const next = value === "none" ? null : value;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 313 | `    const { error } = await (supabase.from("subtasks") as any).update({ assignee_id: next }).eq("id", st.id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 314 | `    if (error) return toast.error(error.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 315 | `    setSubtasks(subtasks.map(s => s.id === st.id ? { ...s, assignee_id: next } : s));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 316 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 317 | `  const updateSubtaskNotes = async (st: Subtask, notes: string) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 318 | `    const { error } = await (supabase.from("subtasks") as any).update({ notes: notes || null }).eq("id", st.id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 319 | `    if (error) return toast.error(error.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 320 | `    setSubtasks(subtasks.map(s => s.id === st.id ? { ...s, notes: notes || null } : s));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 321 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 322 | `  const loadSubAttachments = async (subtaskId: string) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 323 | `    const { data } = await (supabase.from("subtask_attachments") as any)` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 324 | `      .select("*").eq("subtask_id", subtaskId).order("created_at");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 325 | `    setSubAttachments(prev => ({ ...prev, [subtaskId]: (data ?? []) as SubtaskAttachment[] }));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 326 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 327 | `  const toggleSubExpanded = async (id: string) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 328 | `    const willOpen = !subExpanded[id];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 329 | `    setSubExpanded(prev => ({ ...prev, [id]: willOpen }));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 330 | `    if (willOpen && !subAttachments[id]) await loadSubAttachments(id);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 331 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 332 | `  const uploadSubFile = async (st: Subtask, file: File) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 333 | `    if (!user) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 334 | `    const tid = currentTaskId ?? await ensureTask();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 335 | `    if (!tid) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 336 | `    const path = \`${tid}/subtasks/${st.id}/${Date.now()}-${file.name}\`;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 337 | `    const { error: upErr } = await supabase.storage.from("task-attachments").upload(path, file);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 338 | `    if (upErr) return toast.error(upErr.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 339 | `    const { data, error } = await (supabase.from("subtask_attachments") as any).insert({` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 340 | `      subtask_id: st.id, task_id: tid, file_name: file.name, storage_path: path,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 341 | `      mime_type: file.type, size_bytes: file.size, uploaded_by: user.id,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 342 | `    }).select().single();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 343 | `    if (error) return toast.error(error.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 344 | `    setSubAttachments(prev => ({ ...prev, [st.id]: [ ...(prev[st.id] ?? []), data as SubtaskAttachment ] }));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 345 | `    toast.success("Arquivo enviado");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 346 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 347 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 348 | `  const downloadSubFile = async (att: SubtaskAttachment) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 349 | `    const { data, error } = await supabase.storage.from("task-attachments").download(att.storage_path);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 350 | `    if (error) return toast.error(error.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 351 | `    const url = URL.createObjectURL(data);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 352 | `    const a = document.createElement("a"); a.href = url; a.download = att.file_name;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 353 | `    document.body.appendChild(a); a.click(); a.remove();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 354 | `    window.setTimeout(() => URL.revokeObjectURL(url), 30_000);` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 355 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 356 | `  const deleteSubFile = async (att: SubtaskAttachment) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 357 | `    await supabase.storage.from("task-attachments").remove([att.storage_path]);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 358 | `    await (supabase.from("subtask_attachments") as any).delete().eq("id", att.id);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 359 | `    setSubAttachments(prev => ({ ...prev, [att.subtask_id]: (prev[att.subtask_id] ?? []).filter(x => x.id !== att.id) }));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 360 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 361 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 362 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 363 | `  // Comments` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 364 | `  const addComment = async () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 365 | `    if (!newComment.trim() || !user) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 366 | `    const tid = await ensureTask();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 367 | `    if (!tid) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 368 | `    const { data, error } = await supabase.from("comments").insert({` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 369 | `      task_id: tid, author_id: user.id, body: newComment, title: newCommentTitle.trim() || null,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 370 | `    }).select().single();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 371 | `    if (error) return toast.error(error.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 372 | `    setComments([...comments, data as Comment]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 373 | `    setNewComment("");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 374 | `    setNewCommentTitle("");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 375 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 376 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 377 | `  const deleteComment = async (id: string) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 378 | `    const { error } = await supabase.from("comments").delete().eq("id", id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 379 | `    if (error) return toast.error(error.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 380 | `    setComments(comments.filter(c => c.id !== id));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 381 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 382 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 383 | `  // Attachments` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 384 | `  const uploadFile = async (file: File) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 385 | `    if (!user) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 386 | `    const tid = await ensureTask();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 387 | `    if (!tid) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 388 | `    const path = \`${tid}/${Date.now()}-${file.name}\`;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 389 | `    const { error: upErr } = await supabase.storage.from("task-attachments").upload(path, file);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 390 | `    if (upErr) return toast.error(upErr.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 391 | `    const { data, error } = await supabase.from("attachments").insert({` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 392 | `      task_id: tid, file_name: file.name, storage_path: path,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 393 | `      mime_type: file.type, size_bytes: file.size, uploaded_by: user.id,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 394 | `    }).select().single();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 395 | `    if (error) return toast.error(error.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 396 | `    setAttachments([...attachments, data as Attachment]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 397 | `    toast.success("Arquivo enviado");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 398 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 399 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 400 | `  const openAttachment = async (att: Attachment) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 401 | `    if (att.mime_type === LINK_MIME) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 402 | `      window.open(att.storage_path, "_blank", "noopener,noreferrer");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 403 | `      return;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 404 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 405 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 406 | `    setPreviewAttachment(att);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 407 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 408 | `  const downloadAttachment = async (att: Attachment) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 409 | `    if (att.mime_type === LINK_MIME) return openAttachment(att);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 410 | `    const { data, error } = await supabase.storage.from("task-attachments").download(att.storage_path);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 411 | `    if (error) return toast.error(error.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 412 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 413 | `    const blobUrl = URL.createObjectURL(data);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 414 | `    const a = document.createElement("a");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 415 | `    a.href = blobUrl;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 416 | `    a.download = att.file_name;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 417 | `    document.body.appendChild(a);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 418 | `    a.click();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 419 | `    a.remove();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 420 | `    window.setTimeout(() => URL.revokeObjectURL(blobUrl), 30_000);` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 421 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 422 | `  const deleteAttachment = async (att: Attachment) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 423 | `    await supabase.storage.from("task-attachments").remove([att.storage_path]);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 424 | `    await supabase.from("attachments").delete().eq("id", att.id);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 425 | `    setAttachments(attachments.filter(a => a.id !== att.id));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 426 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 427 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 428 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 429 | `    <Dialog open={open} onOpenChange={onOpenChange}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 430 | `      <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 431 | `        <DialogHeader>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 432 | `          <DialogTitle>{task ? "Editar tarefa" : "Nova tarefa"}</DialogTitle>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 433 | `        </DialogHeader>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 434 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 435 | `        <div className="space-y-4">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 436 | `          <div className="space-y-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 437 | `            <Label>Título *</Label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 438 | `            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="O que precisa ser feito?" />` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 439 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 440 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 441 | `          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 442 | `            <div className="space-y-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 443 | `              <Label className="text-xs">Status</Label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 444 | `              <Select value={status ?? "none"} onValueChange={(v) => setStatus(v === "none" ? null : (v as Task["status"]))}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 445 | `                <SelectTrigger><SelectValue /></SelectTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 446 | `                <SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 447 | `                  <SelectItem value="none">Sem status</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 448 | `                  <SelectItem value="todo">A Fazer</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 449 | `                  <SelectItem value="in_progress">Em Andamento</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 450 | `                  <SelectItem value="review">Em Revisão</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 451 | `                  <SelectItem value="done">Concluído</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 452 | `                </SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 453 | `              </Select>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 454 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 455 | `            <div className="space-y-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 456 | `              <Label className="text-xs">Prioridade</Label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 457 | `              <Select value={priority ?? "none"} onValueChange={(v) => setPriority(v === "none" ? null : (v as Task["priority"]))}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 458 | `                <SelectTrigger><SelectValue /></SelectTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 459 | `                <SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 460 | `                  <SelectItem value="none">Sem prioridade</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 461 | `                  <SelectItem value="low">Baixa</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 462 | `                  <SelectItem value="medium">Média</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 463 | `                  <SelectItem value="high">Alta</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 464 | `                  <SelectItem value="urgent">Urgente</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 465 | `                </SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 466 | `              </Select>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 467 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 468 | `            <div className="space-y-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 469 | `              <Label className="text-xs">Prazo</Label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 470 | `              <div className="flex items-center gap-1.5">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 471 | `                <Input type="datetime-local" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="flex-1" />` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 472 | `                {dueDate && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 473 | `                  <Button type="button" size="icon" variant="ghost" className="h-9 w-9 shrink-0" onClick={() => setDueDate("")} title="Sem prazo">` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 474 | `                    <X className="h-4 w-4" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 475 | `                  </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 476 | `                )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 477 | `              </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 478 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 479 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 480 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 481 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 482 | `          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 483 | `            <div className="space-y-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 484 | `              <Label className="text-xs">Coluna</Label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 485 | `              <Select value={columnId || "none"} onValueChange={(v) => setColumnId(v === "none" ? "" : v)}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 486 | `                <SelectTrigger><SelectValue placeholder="Nenhuma" /></SelectTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 487 | `                <SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 488 | `                  <SelectItem value="none">Nenhuma</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 489 | `                  {cols?.map(c => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 490 | `                </SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 491 | `              </Select>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 492 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 493 | `            <div className="space-y-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 494 | `              <Label className="text-xs">Cliente</Label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 495 | `              <Select value={clientId || "none"} onValueChange={(v) => setClientId(v === "none" ? "" : v)}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 496 | `                <SelectTrigger><SelectValue placeholder="Nenhum" /></SelectTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 497 | `                <SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 498 | `                  <SelectItem value="none">Nenhum</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 499 | `                  {clients?.map(c => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 500 | `                </SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 501 | `              </Select>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 502 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 503 | `            <div className="space-y-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 504 | `              <Label className="text-xs">Responsável</Label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 505 | `              <Select value={assigneeId || "none"} onValueChange={(v) => setAssigneeId(v === "none" ? "" : v)}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 506 | `                <SelectTrigger><SelectValue placeholder="Ninguém" /></SelectTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 507 | `                <SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 508 | `                  <SelectItem value="none">Ninguém</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 509 | `                  {profiles?.map(p => <SelectItem key={p.id} value={p.id}>{p.full_name || p.email}</SelectItem>)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 510 | `                </SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 511 | `              </Select>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 512 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 513 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 514 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 515 | `          <div className="space-y-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 516 | `            <div className="flex items-center justify-between">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 517 | `              <Label>Descrição</Label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 518 | `              <div className="flex gap-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 519 | `                <Button type="button" size="icon" variant="ghost" className="h-7 w-7" onClick={() => formatSelected("b")}><Bold className="h-3.5 w-3.5" /></Button>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 520 | `                <Button type="button" size="icon" variant="ghost" className="h-7 w-7" onClick={() => formatSelected("i")}><Italic className="h-3.5 w-3.5" /></Button>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 521 | `                <Button type="button" size="icon" variant="ghost" className="h-7 w-7" onClick={() => formatSelected("u")}><Underline className="h-3.5 w-3.5" /></Button>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 522 | `              </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 523 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 524 | `            <Textarea id="task-description" rows={4} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Use **negrito**, *itálico*, <u>sublinhado</u>" />` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 525 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 526 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 527 | `          {!currentTaskId && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 528 | `            <div className="space-y-3 rounded-md border bg-muted/20 p-3">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 529 | `              <label className="flex items-center gap-2 text-sm font-medium">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 530 | `                <Checkbox checked={recurrenceEnabled} onCheckedChange={(v) => setRecurrenceEnabled(!!v)} />` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 531 | `                Criar como tarefa recorrente` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 532 | `              </label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 533 | `              {recurrenceEnabled && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 534 | `                <div className="space-y-3">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 535 | `                  <div className="space-y-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 536 | `                    <Label className="text-xs">Dias da semana</Label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 537 | `                    <div className="flex flex-wrap gap-1.5">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 538 | `                      {["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"].map((label, idx) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 539 | `                        const active = recurrenceDays.includes(idx);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 540 | `                        return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 541 | `                          <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 542 | `                            key={idx}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 543 | `                            type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 544 | `                            onClick={() => setRecurrenceDays(active ? recurrenceDays.filter(d => d !== idx) : [...recurrenceDays, idx].sort())}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 545 | `                            className={\`rounded-md border px-3 py-1 text-xs transition ${active ? "border-primary bg-primary text-primary-foreground" : "bg-background hover:bg-muted"}\`}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 546 | `                          >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 547 | `                            {label}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 548 | `                          </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 549 | `                        );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 550 | `                      })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 551 | `                    </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 552 | `                  </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 553 | `                  <div className="grid grid-cols-2 gap-3">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 554 | `                    <div className="space-y-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 555 | `                      <Label className="text-xs">Repetir até</Label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 556 | `                      <Input type="date" value={recurrenceEnd} onChange={(e) => setRecurrenceEnd(e.target.value)} />` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 557 | `                    </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 558 | `                    <div className="space-y-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 559 | `                      <Label className="text-xs">Horário do prazo</Label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 560 | `                      <Input type="time" value={recurrenceTime} onChange={(e) => setRecurrenceTime(e.target.value)} />` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 561 | `                    </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 562 | `                  </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 563 | `                  <div className="space-y-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 564 | `                    <Label className="text-xs">Prazo personalizado por dia (dias após a ocorrência)</Label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 565 | `                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 566 | `                      {recurrenceDays.map(wd => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 567 | `                        const labels = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 568 | `                        return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 569 | `                          <div key={wd} className="flex items-center gap-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 570 | `                            <span className="w-10 text-xs text-muted-foreground">{labels[wd]}</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 571 | `                            <Input` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 572 | `                              type="number"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 573 | `                              min={0}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 574 | `                              max={30}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 575 | `                              value={recurrenceOffsets[wd] ?? 0}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 576 | `                              onChange={(e) => setRecurrenceOffsets({ ...recurrenceOffsets, [wd]: Math.max(0, Number(e.target.value) || 0) })}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 577 | `                              className="h-8 w-16"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 578 | `                            />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 579 | `                            <span className="text-xs text-muted-foreground">d</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 580 | `                          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 581 | `                        );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 582 | `                      })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 583 | `                    </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 584 | `                    <p className="text-xs text-muted-foreground">Ex.: Seg=1 → tarefa de segunda vence na terça. Use 0 para vencer no próprio dia.</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 585 | `                  </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 586 | `                </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 587 | `              )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 588 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 589 | `          )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 590 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 591 | `          {(` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 592 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 593 | `            <Tabs defaultValue="subtasks">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 594 | `              <TabsList>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 595 | `                <TabsTrigger value="subtasks">Subtarefas ({subtasks.length})</TabsTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 596 | `                <TabsTrigger value="comments">Comentários ({comments.length})</TabsTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 597 | `                <TabsTrigger value="files">Arquivos ({attachments.length})</TabsTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 598 | `              </TabsList>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 599 | `              <TabsContent value="subtasks" className="space-y-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 600 | `                {subtasks.map(s => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 601 | `                  const dueStr = s.due_date ? format(new Date(s.due_date), "yyyy-MM-dd'T'HH:mm") : "";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 602 | `                  const historyOpen = subDueOpen[s.id];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 603 | `                  const history = subDueChanges[s.id] ?? [];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 604 | `                  const expanded = subExpanded[s.id];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 605 | `                  const files = subAttachments[s.id] ?? [];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 606 | `                  const assignee = profiles?.find(p => p.id === s.assignee_id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 607 | `                  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 608 | `                    <div key={s.id} className="space-y-1.5 rounded-md border bg-muted/30 px-3 py-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 609 | `                      <div className="flex items-center gap-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 610 | `                        <Checkbox checked={s.done} onCheckedChange={() => toggleSubtask(s)} />` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 611 | `                        <span className={\`flex-1 text-sm ${s.done ? "line-through text-muted-foreground" : ""}\`}>{s.title}</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 612 | `                        {assignee && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 613 | `                          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 614 | `                            {assignee.full_name || assignee.email}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 615 | `                          </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 616 | `                        )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 617 | `                        <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => toggleSubExpanded(s.id)} title="Detalhes">` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 618 | `                          {expanded ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 619 | `                        </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 620 | `                        <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => deleteSubtask(s.id)}><X className="h-3.5 w-3.5" /></Button>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 621 | `                      </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 622 | `                      <div className="flex flex-wrap items-center gap-2 pl-6">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 623 | `                        <Label className="text-[10px] text-muted-foreground">Prazo</Label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 624 | `                        <Input` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 625 | `                          type="datetime-local"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 626 | `                          value={dueStr}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 627 | `                          onChange={(e) => updateSubtaskDue(s, e.target.value)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 628 | `                          className="h-7 w-52 text-xs"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 629 | `                        />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 630 | `                        {s.due_date && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 631 | `                          <Button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 632 | `                            type="button" size="sm" variant="ghost"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 633 | `                            className="h-7 px-2 text-xs text-muted-foreground"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 634 | `                            onClick={() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 635 | `                              const reason = window.prompt("Motivo para remover o prazo? (opcional)") ?? "";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 636 | `                              void updateSubtaskDue(s, "", reason);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 637 | `                            }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 638 | `                          >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 639 | `                            Indefinido` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 640 | `                          </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 641 | `                        )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 642 | `                        <Button type="button" size="sm" variant="ghost" className="h-7 px-2 text-xs" onClick={() => toggleSubDueHistory(s.id)}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 643 | `                          {historyOpen ? <ChevronDown className="mr-1 h-3 w-3" /> : <ChevronRight className="mr-1 h-3 w-3" />}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 644 | `                          Alterações` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 645 | `                        </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 646 | `                      </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 647 | `                      {historyOpen && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 648 | `                        <div className="ml-6 space-y-1 border-l pl-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 649 | `                          {history.length === 0 ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 650 | `                            <p className="text-[11px] text-muted-foreground">Sem alterações registradas.</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 651 | `                          ) : history.map(h => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 652 | `                            <div key={h.id} className="text-[11px] text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 653 | `                              <span className="font-medium text-foreground">{h.old_due_date ? format(new Date(h.old_due_date), "dd/MM HH:mm") : "sem prazo"}</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 654 | `                              {" → "}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 655 | `                              <span className="font-medium text-foreground">{h.new_due_date ? format(new Date(h.new_due_date), "dd/MM HH:mm") : "sem prazo"}</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 656 | `                              {h.reason ? <> — {h.reason}</> : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 657 | `                              <span className="ml-2 opacity-60">{format(new Date(h.created_at), "dd/MM HH:mm")}</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 658 | `                            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 659 | `                          ))}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 660 | `                        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 661 | `                      )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 662 | `                      {expanded && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 663 | `                        <div className="ml-6 space-y-2 border-l pl-3">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 664 | `                          <div className="space-y-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 665 | `                            <Label className="text-[10px] text-muted-foreground">Responsável</Label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 666 | `                            <Select value={s.assignee_id || "none"} onValueChange={(v) => updateSubtaskAssignee(s, v)}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 667 | `                              <SelectTrigger className="h-8"><SelectValue placeholder="Ninguém" /></SelectTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 668 | `                              <SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 669 | `                                <SelectItem value="none">Ninguém</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 670 | `                                {profiles?.map(p => <SelectItem key={p.id} value={p.id}>{p.full_name || p.email}</SelectItem>)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 671 | `                              </SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 672 | `                            </Select>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 673 | `                          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 674 | `                          <div className="space-y-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 675 | `                            <Label className="text-[10px] text-muted-foreground">Anotações</Label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 676 | `                            <Textarea` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 677 | `                              rows={2}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 678 | `                              defaultValue={s.notes ?? ""}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 679 | `                              onBlur={(e) => { if ((e.target.value || "") !== (s.notes ?? "")) void updateSubtaskNotes(s, e.target.value); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 680 | `                              placeholder="Notas desta subtarefa"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 681 | `                              className="text-xs"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 682 | `                            />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 683 | `                          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 684 | `                          <div className="space-y-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 685 | `                            <Label className="text-[10px] text-muted-foreground">Arquivos</Label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 686 | `                            {files.map(a => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 687 | `                              <div key={a.id} className="flex items-center gap-2 rounded border bg-background px-2 py-1 text-xs">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 688 | `                                <Paperclip className="h-3 w-3 text-muted-foreground" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 689 | `                                <span className="flex-1 truncate">{a.file_name}</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 690 | `                                <Button size="icon" variant="ghost" className="h-6 w-6" onClick={() => downloadSubFile(a)}><Download className="h-3 w-3" /></Button>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 691 | `                                <Button size="icon" variant="ghost" className="h-6 w-6" onClick={() => deleteSubFile(a)}><X className="h-3 w-3" /></Button>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 692 | `                              </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 693 | `                            ))}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 694 | `                            <label className="flex cursor-pointer items-center justify-center gap-2 rounded border border-dashed py-1.5 text-[11px] text-muted-foreground hover:bg-muted/40">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 695 | `                              <Paperclip className="h-3 w-3" /> Anexar arquivo` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 696 | `                              <input type="file" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) void uploadSubFile(s, f); e.target.value = ""; }} />` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 697 | `                            </label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 698 | `                          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 699 | `                        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 700 | `                      )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 701 | `                    </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 702 | `                  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 703 | `                })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 704 | `                <div className="flex flex-wrap gap-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 705 | `                  <Input placeholder="Nova subtarefa" value={newSubtask} onChange={(e) => setNewSubtask(e.target.value)} onKeyDown={(e) => e.key === "Enter" && addSubtask()} className="min-w-[180px] flex-1" />` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 706 | `                  <Input type="datetime-local" value={newSubtaskDue} onChange={(e) => setNewSubtaskDue(e.target.value)} className="w-52" title="Prazo (opcional)" />` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 707 | `                  <Select value={newSubtaskAssignee || "none"} onValueChange={(v) => setNewSubtaskAssignee(v === "none" ? "" : v)}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 708 | `                    <SelectTrigger className="w-44" title="Responsável (opcional)"><SelectValue placeholder="Responsável" /></SelectTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 709 | `                    <SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 710 | `                      <SelectItem value="none">Sem responsável</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 711 | `                      {profiles?.map(p => <SelectItem key={p.id} value={p.id}>{p.full_name || p.email}</SelectItem>)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 712 | `                    </SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 713 | `                  </Select>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 714 | `                  <Button onClick={addSubtask} size="icon"><Plus className="h-4 w-4" /></Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 715 | `                </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 716 | `                <p className="text-[11px] text-muted-foreground">Defina responsável e prazo já ao criar. Use a seta para editar anotações e anexar arquivos.</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 717 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 718 | `              </TabsContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 719 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 720 | `              <TabsContent value="comments" className="space-y-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 721 | `                <div className="max-h-72 space-y-2 overflow-y-auto">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 722 | `                  {comments.map(c => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 723 | `                    const author = profiles?.find(p => p.id === c.author_id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 724 | `                    const isOpen = openComments[c.id] ?? false;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 725 | `                    const headTitle = c.title?.trim() || (c.body.split("\n")[0].slice(0, 60) || "Anotação");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 726 | `                    return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 727 | `                      <Collapsible` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 728 | `                        key={c.id}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 729 | `                        open={isOpen}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 730 | `                        onOpenChange={(o) => setOpenComments((s) => ({ ...s, [c.id]: o }))}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 731 | `                        className="rounded-md border bg-muted/30"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 732 | `                      >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 733 | `                        <div className="flex items-center gap-1 px-2 py-1.5">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 734 | `                          <CollapsibleTrigger asChild>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 735 | `                            <Button size="icon" variant="ghost" className="h-7 w-7 shrink-0">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 736 | `                              {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 737 | `                            </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 738 | `                          </CollapsibleTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 739 | `                          <CollapsibleTrigger asChild>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 740 | `                            <button className="flex-1 truncate text-left text-sm font-medium">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 741 | `                              {headTitle}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 742 | `                            </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 743 | `                          </CollapsibleTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 744 | `                          <span className="shrink-0 text-[10px] text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 745 | `                            {format(new Date(c.created_at), "dd/MM HH:mm")}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 746 | `                          </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 747 | `                          <Button size="icon" variant="ghost" className="h-7 w-7 shrink-0" onClick={() => deleteComment(c.id)}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 748 | `                            <X className="h-3.5 w-3.5" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 749 | `                          </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 750 | `                        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 751 | `                        <CollapsibleContent className="border-t px-3 py-2 text-sm">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 752 | `                          <div className="mb-1 text-xs text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 753 | `                            {author?.full_name || author?.email || "Usuário"}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 754 | `                          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 755 | `                          <p className="whitespace-pre-wrap">{c.body}</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 756 | `                        </CollapsibleContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 757 | `                      </Collapsible>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 758 | `                    );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 759 | `                  })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 760 | `                </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 761 | `                <div className="space-y-2 rounded-md border bg-muted/10 p-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 762 | `                  <Input` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 763 | `                    placeholder="Título da anotação (opcional)"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 764 | `                    value={newCommentTitle}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 765 | `                    onChange={(e) => setNewCommentTitle(e.target.value)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 766 | `                  />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 767 | `                  <div className="flex gap-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 768 | `                    <Textarea` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 769 | `                      rows={2}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 770 | `                      placeholder="Escreva a anotação"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 771 | `                      value={newComment}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 772 | `                      onChange={(e) => setNewComment(e.target.value)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 773 | `                    />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 774 | `                    <Button onClick={addComment} size="icon" className="self-stretch"><Send className="h-4 w-4" /></Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 775 | `                  </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 776 | `                </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 777 | `              </TabsContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 778 | `              <TabsContent value="files" className="space-y-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 779 | `                {attachments.map(a => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 780 | `                  <div key={a.id} className="flex items-center gap-2 rounded-md border bg-muted/30 px-3 py-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 781 | `                    {a.mime_type === LINK_MIME ? <Link2 className="h-4 w-4 text-muted-foreground" /> : <Paperclip className="h-4 w-4 text-muted-foreground" />}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 782 | `                    <span className="flex-1 truncate text-sm">{a.file_name}</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 783 | `                    <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => openAttachment(a)}><ExternalLink className="h-3.5 w-3.5" /></Button>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 784 | `                    {a.mime_type !== LINK_MIME && <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => downloadAttachment(a)}><Download className="h-3.5 w-3.5" /></Button>}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 785 | `                    <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => deleteAttachment(a)}><X className="h-3.5 w-3.5" /></Button>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 786 | `                  </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 787 | `                ))}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 788 | `                <label className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed py-3 text-sm text-muted-foreground hover:bg-muted/40">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 789 | `                  <Paperclip className="h-4 w-4" /> Anexar arquivo` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 790 | `                  <input type="file" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) uploadFile(f); e.target.value = ""; }} />` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 791 | `                </label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 792 | `              </TabsContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 793 | `            </Tabs>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 794 | `          )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 795 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 796 | `          <div className="flex justify-between gap-2 pt-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 797 | `            <div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 798 | `              {currentTaskId && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 799 | `                <Button variant="ghost" onClick={remove} className="text-destructive hover:text-destructive">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 800 | `                  <Trash2 className="mr-2 h-4 w-4" /> Excluir` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 801 | `                </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 802 | `              )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 803 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 804 | `            <div className="flex gap-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 805 | `              <Button variant="outline" onClick={() => onOpenChange(false)}>Cancelar</Button>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 806 | `              <Button onClick={save} disabled={saving}>{saving ? "Salvando…" : "Salvar"}</Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 807 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 808 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 809 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 810 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 811 | `        <AttachmentPreviewDialog` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 812 | `          open={!!previewAttachment}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 813 | `          onOpenChange={(open) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 814 | `            if (!open) setPreviewAttachment(null);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 815 | `          }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 816 | `          attachment={previewAttachment}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 817 | `        />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 818 | `      </DialogContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 819 | `    </Dialog>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 820 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 821 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 822 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
