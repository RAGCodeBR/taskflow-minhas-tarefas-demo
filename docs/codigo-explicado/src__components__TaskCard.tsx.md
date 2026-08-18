# src/components/TaskCard.tsx

Tipo: Componente ou rota React em TypeScript.

Este documento foi gerado para estudo e manutencao. Ele preserva o codigo original e explica linha por linha sem alterar o comportamento do sistema publicado.

| Linha | Codigo original | Explicacao |
| ---: | --- | --- |
| 1 | `import { useEffect, useMemo, useRef, useState, type HTMLAttributes } from "react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 2 | `import { useQuery, useQueryClient } from "@tanstack/react-query";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 3 | `import {` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 4 | `  AlignLeft,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 5 | `  ArrowDown,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 6 | `  ArrowUp,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 7 | `  Calendar as CalendarIcon,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 8 | `  ChevronDown,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 9 | `  ChevronRight,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 10 | `  Check,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 11 | `  CheckCircle2,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 12 | `  Copy,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 13 | `  FileText,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 14 | `  Flag,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 15 | `  Image as ImageIcon,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 16 | `  Link2,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 17 | `  History,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 18 | `  ListChecks,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 19 | `  MoreHorizontal,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 20 | `  MoveHorizontal,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 21 | `  Paperclip,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 22 | `  Pencil,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 23 | `  Plus,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 24 | `  Tag as TagIcon,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 25 | `  Trash2,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 26 | `  Upload,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 27 | `  User as UserIcon,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 28 | `  Users,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 29 | `  X,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 30 | `  Zap,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 31 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 32 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 33 | `} from "lucide-react";` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 34 | `import { format } from "date-fns";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 35 | `import { ptBR } from "date-fns/locale";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 36 | `import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 37 | `import { Button } from "@/components/ui/button";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 38 | `import { Input } from "@/components/ui/input";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 39 | `import { Label } from "@/components/ui/label";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 40 | `import { Textarea } from "@/components/ui/textarea";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 41 | `import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 42 | `import {` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 43 | `  Popover,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 44 | `  PopoverContent,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 45 | `  PopoverTrigger,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 46 | `} from "@/components/ui/popover";` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 47 | `import {` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 48 | `  Select,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 49 | `  SelectContent,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 50 | `  SelectItem,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 51 | `  SelectTrigger,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 52 | `  SelectValue,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 53 | `} from "@/components/ui/select";` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 54 | `import { AttachmentPreviewDialog } from "@/components/AttachmentPreviewDialog";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 55 | `import { RichTextEditor, RichTextView } from "@/components/RichTextEditor";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 56 | `import { CommentAttachments } from "@/components/CommentAttachments";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 57 | `import { supabase } from "@/integrations/supabase/client";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 58 | `import { useAuth } from "@/hooks/use-auth";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 59 | `import type { Client, KanbanColumn, Profile, Task, TaskStatus, TaskTag } from "@/hooks/use-data";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 60 | `import { useBoardPreferences, type CardField } from "@/hooks/use-board-preferences";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 61 | `import { InterruptionsBlock } from "@/components/InterruptionsBlock";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 62 | `import { toast } from "sonner";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 63 | `import { cn } from "@/lib/utils";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 64 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 65 | `interface Attachment {` | Declara um contrato de tipos TypeScript para deixar os dados mais seguros e previsiveis. |
| 66 | `  id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 67 | `  task_id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 68 | `  file_name: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 69 | `  storage_path: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 70 | `  mime_type: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 71 | `  size_bytes: number | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 72 | `  created_at: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 73 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 74 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 75 | `interface Subtask {` | Declara um contrato de tipos TypeScript para deixar os dados mais seguros e previsiveis. |
| 76 | `  id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 77 | `  task_id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 78 | `  title: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 79 | `  done: boolean;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 80 | `  position: number;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 81 | `  comment_id: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 82 | `  due_date: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 83 | `  completed_at: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 84 | `  assignee_id: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 85 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 86 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 87 | `interface CardComment {` | Declara um contrato de tipos TypeScript para deixar os dados mais seguros e previsiveis. |
| 88 | `  id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 89 | `  task_id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 90 | `  title: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 91 | `  body: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 92 | `  created_at: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 93 | `  position: number;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 94 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 95 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 96 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 97 | `const LINK_MIME = "text/uri-list";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 98 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 99 | `interface Props {` | Declara um contrato de tipos TypeScript para deixar os dados mais seguros e previsiveis. |
| 100 | `  task: Task;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 101 | `  columns?: KanbanColumn[];` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 102 | `  clients?: Client[];` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 103 | `  profiles?: Profile[];` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 104 | `  tags?: TaskTag[];` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 105 | `  statuses?: TaskStatus[];` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 106 | `  onEdit?: () => void;` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 107 | `  onDuplicate?: () => void;` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 108 | `  dragHandleProps?: HTMLAttributes<HTMLDivElement>;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 109 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 110 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 111 | `const PRIORITY_LABELS: Record<NonNullable<Task["priority"]>, { label: string; color: string }> = {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 112 | `  low: { label: "Baixa", color: "#64748b" },` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 113 | `  medium: { label: "Média", color: "#3b82f6" },` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 114 | `  high: { label: "Alta", color: "#f59e0b" },` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 115 | `  urgent: { label: "Urgente", color: "#ef4444" },` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 116 | `};` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 117 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 118 | `function stop(e: { stopPropagation: () => void }) {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 119 | `  e.stopPropagation();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 120 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 121 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 122 | `/* Contrast helper — returns white or black depending on bg brightness */` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 123 | `function readableText(hex: string) {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 124 | `  const m = hex.replace("#", "");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 125 | `  const full = m.length === 3 ? m.split("").map((c) => c + c).join("") : m;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 126 | `  const r = parseInt(full.slice(0, 2), 16);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 127 | `  const g = parseInt(full.slice(2, 4), 16);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 128 | `  const b = parseInt(full.slice(4, 6), 16);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 129 | `  const yiq = (r * 299 + g * 587 + b * 114) / 1000;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 130 | `  return yiq >= 160 ? "#0a0a0a" : "#ffffff";` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 131 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 132 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 133 | `export function TaskCard({` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 134 | `  task,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 135 | `  clients = [],` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 136 | `  profiles = [],` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 137 | `  tags = [],` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 138 | `  statuses = [],` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 139 | `  onEdit,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 140 | `  onDuplicate,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 141 | `  dragHandleProps,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 142 | `}: Props) {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 143 | `  const qc = useQueryClient();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 144 | `  const { user } = useAuth();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 145 | `  const fileRef = useRef<HTMLInputElement>(null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 146 | `  const descTextareaRef = useRef<HTMLTextAreaElement>(null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 147 | `  const [attachments, setAttachments] = useState<Attachment[]>([]);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 148 | `  const [thumbs, setThumbs] = useState<Record<string, string>>({});` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 149 | `  const [titleEditing, setTitleEditing] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 150 | `  const [titleDraft, setTitleDraft] = useState(task.title);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 151 | `  const [descEditing, setDescEditing] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 152 | `  const [descDraft, setDescDraft] = useState(task.description ?? "");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 153 | `  const [previewAttachment, setPreviewAttachment] = useState<Attachment | null>(null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 154 | `  const [tagIds, setTagIds] = useState<string[]>([]);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 155 | `  const [subtasks, setSubtasks] = useState<Subtask[]>([]);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 156 | `  const [comments, setComments] = useState<CardComment[]>([]);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 157 | `  const [openComments, setOpenComments] = useState<Record<string, boolean>>({});` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 158 | `  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 159 | `  const [commentDraft, setCommentDraft] = useState("");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 160 | `  const [editingSubtaskId, setEditingSubtaskId] = useState<string | null>(null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 161 | `  const [subtaskDraft, setSubtaskDraft] = useState("");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 162 | `  const [newSubtask, setNewSubtask] = useState("");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 163 | `  const [addingSubtask, setAddingSubtask] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 164 | `  const [commentSubtaskDraft, setCommentSubtaskDraft] = useState<Record<string, string>>({});` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 165 | `  const [dueChange, setDueChange] = useState<{ open: boolean; pending: string | null; reason: string }>({ open: false, pending: null, reason: "" });` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 166 | `  const [historyOpen, setHistoryOpen] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 167 | `  const { data: dueHistory = [] } = useQuery({` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 168 | `    queryKey: ["task_due_date_changes", task.id],` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 169 | `    queryFn: async () => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 170 | `      const { data, error } = await supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 171 | `        .from("task_due_date_changes")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 172 | `        .select("id, old_due_date, new_due_date, reason, created_at, user_id")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 173 | `        .eq("task_id", task.id)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 174 | `        .order("created_at", { ascending: false });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 175 | `      if (error) throw error;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 176 | `      return (data ?? []) as Array<{ id: string; old_due_date: string | null; new_due_date: string | null; reason: string | null; created_at: string; user_id: string | null }>;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 177 | `    },` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 178 | `    enabled: historyOpen,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 179 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 180 | `  const { data: prefs } = useBoardPreferences();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 181 | `  const hiddenFields = prefs?.hidden_fields ?? [];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 182 | `  const fieldOrder = prefs?.field_order ?? [];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 183 | `  const interruptionColor = prefs?.interruption_color ?? "#ef4444";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 184 | `  const isVisible = (f: CardField) => !hiddenFields.includes(f);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 185 | `  const orderOf = (f: CardField) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 186 | `    const idx = fieldOrder.indexOf(f);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 187 | `    return idx === -1 ? 999 : idx;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 188 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 189 | `  const subtasksTitleKey = \`subtasks-title:${task.id}\`;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 190 | `  const subtasksOpenKey = \`subtasks-open:${task.id}\`;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 191 | `  const [subtasksTitle, setSubtasksTitle] = useState<string>(() => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 192 | `    if (typeof window === "undefined") return "Subtarefas";` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 193 | `    return window.localStorage.getItem(subtasksTitleKey) || "Subtarefas";` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 194 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 195 | `  const [subtasksOpen, setSubtasksOpen] = useState<boolean>(() => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 196 | `    if (typeof window === "undefined") return true;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 197 | `    const v = window.localStorage.getItem(subtasksOpenKey);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 198 | `    return v === null ? true : v === "1";` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 199 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 200 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 201 | `    if (typeof window !== "undefined") window.localStorage.setItem(subtasksOpenKey, subtasksOpen ? "1" : "0");` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 202 | `  }, [subtasksOpen, subtasksOpenKey]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 203 | `  const renameSubtasksTitle = () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 204 | `    const next = window.prompt("Título da seção de subtarefas", subtasksTitle)?.trim();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 205 | `    if (!next) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 206 | `    setSubtasksTitle(next);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 207 | `    if (typeof window !== "undefined") window.localStorage.setItem(subtasksTitleKey, next);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 208 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 209 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 210 | `  useEffect(() => setTitleDraft(task.title), [task.title]);` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 211 | `  useEffect(() => setDescDraft(task.description ?? ""), [task.description]);` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 212 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 213 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 214 | `    let cancelled = false;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 215 | `    (async () => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 216 | `      const { data } = await supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 217 | `        .from("attachments")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 218 | `        .select("*")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 219 | `        .eq("task_id", task.id)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 220 | `        .order("created_at", { ascending: true });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 221 | `      if (cancelled) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 222 | `      const list = (data ?? []) as Attachment[];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 223 | `      setAttachments(list);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 224 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 225 | `      const next: Record<string, string> = {};` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 226 | `      await Promise.all(` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 227 | `        list` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 228 | `          .filter((a) => a.mime_type !== LINK_MIME && (a.mime_type?.startsWith("image/") ?? false))` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 229 | `          .map(async (a) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 230 | `            const { data: signed } = await supabase.storage` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 231 | `              .from("task-attachments")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 232 | `              .createSignedUrl(a.storage_path, 3600);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 233 | `            if (signed) next[a.id] = signed.signedUrl;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 234 | `          }),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 235 | `      );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 236 | `      if (!cancelled) setThumbs(next);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 237 | `    })();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 238 | `    return () => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 239 | `      cancelled = true;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 240 | `    };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 241 | `  }, [task.id]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 242 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 243 | `  const [subsRefreshTick, setSubsRefreshTick] = useState(0);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 244 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 245 | `    const cache = qc.getQueryCache();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 246 | `    const unsub = cache.subscribe((event: any) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 247 | `      if (event?.type !== "updated") return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 248 | `      const key = event.query?.queryKey?.[0];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 249 | `      if (key === "subtasks" || key === "tasks") {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 250 | `        setSubsRefreshTick((n) => n + 1);` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 251 | `      }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 252 | `    });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 253 | `    return () => unsub();` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 254 | `  }, [qc]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 255 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 256 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 257 | `    let cancelled = false;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 258 | `    (async () => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 259 | `      const [{ data: links }, { data: subs }, { data: notes }] = await Promise.all([` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 260 | `        supabase.from("task_tag_links").select("tag_id").eq("task_id", task.id),` | Interage com o cliente Supabase para autenticar ou acessar o banco. |
| 261 | `        supabase.from("subtasks").select("id, task_id, title, done, position, comment_id, due_date, completed_at, assignee_id").eq("task_id", task.id).order("position"),` | Interage com o cliente Supabase para autenticar ou acessar o banco. |
| 262 | `        supabase.from("comments").select("id, task_id, title, body, created_at, position").eq("task_id", task.id).order("position", { ascending: true }).order("created_at", { ascending: true }),` | Interage com o cliente Supabase para autenticar ou acessar o banco. |
| 263 | `      ]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 264 | `      if (cancelled) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 265 | `      setTagIds(((links ?? []) as { tag_id: string }[]).map((l) => l.tag_id));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 266 | `      setSubtasks((subs ?? []) as Subtask[]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 267 | `      setComments((notes ?? []) as CardComment[]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 268 | `    })();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 269 | `    return () => { cancelled = true; };` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 270 | `  }, [task.id, subsRefreshTick]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 271 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 272 | `  const selectedTags = useMemo(` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 273 | `    () => tagIds.map((id) => tags.find((t) => t.id === id)).filter(Boolean) as TaskTag[],` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 274 | `    [tagIds, tags],` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 275 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 276 | `  const client = useMemo(() => clients.find((c) => c.id === task.client_id), [clients, task.client_id]);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 277 | `  const assignee = useMemo(` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 278 | `    () => profiles.find((p) => p.id === task.assignee_id),` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 279 | `    [profiles, task.assignee_id],` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 280 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 281 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 282 | `  const update = async (patch: Partial<Task>) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 283 | `    const { error } = await supabase.from("tasks").update(patch).eq("id", task.id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 284 | `    if (error) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 285 | `      toast.error(error.message);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 286 | `      return;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 287 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 288 | `    void qc.invalidateQueries({ queryKey: ["tasks"] });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 289 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 290 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 291 | `  const saveTitle = async () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 292 | `    const next = titleDraft.trim() || "Sem título";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 293 | `    setTitleEditing(false);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 294 | `    if (next === task.title) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 295 | `    await update({ title: next });` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 296 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 297 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 298 | `  const saveDesc = async () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 299 | `    setDescEditing(false);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 300 | `    const next = descDraft.trim();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 301 | `    const current = task.description ?? "";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 302 | `    if (next === current) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 303 | `    await update({ description: next || null });` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 304 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 305 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 306 | `  const foldSelectedDescription = async () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 307 | `    if (!user) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 308 | `    const el = descTextareaRef.current;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 309 | `    const start = el?.selectionStart ?? 0;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 310 | `    const end = el?.selectionEnd ?? 0;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 311 | `    const selected = descDraft.slice(start, end).trim();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 312 | `    if (!selected || start === end) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 313 | `      toast.error("Selecione o texto que deseja transformar em seção dobrável");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 314 | `      return;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 315 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 316 | `    const suggested = selected.split("\n").find(Boolean)?.slice(0, 60) ?? "Anotação";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 317 | `    const title = window.prompt("Título da seção dobrável", suggested)?.trim();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 318 | `    if (!title) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 319 | `    const nextDescription = \`${descDraft.slice(0, start)}${descDraft.slice(end)}\`.trim();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 320 | `    const nextPos = (comments.reduce((m, c) => Math.max(m, c.position ?? 0), -1)) + 1;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 321 | `    const { data, error } = await supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 322 | `      .from("comments")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 323 | `      .insert({ task_id: task.id, author_id: user.id, title, body: selected, position: nextPos })` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 324 | `      .select("id, task_id, title, body, created_at, position")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 325 | `      .single();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 326 | `    if (error) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 327 | `      toast.error(error.message);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 328 | `      return;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 329 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 330 | `    setComments((current) => [...current, data as CardComment]);` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 331 | `    setOpenComments((current) => ({ ...current, [(data as CardComment).id]: true }));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 332 | `    setDescDraft(nextDescription);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 333 | `    await update({ description: nextDescription || null });` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 334 | `    setDescEditing(false);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 335 | `    toast.success("Seção dobrável criada");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 336 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 337 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 338 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 339 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 340 | `  const uploadFile = async (file: File) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 341 | `    if (!user) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 342 | `    const safe =` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 343 | `      file.name` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 344 | `        .normalize("NFD")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 345 | `        .replace(/[\u0300-\u036f]/g, "")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 346 | `        .replace(/[^a-zA-Z0-9._-]+/g, "_")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 347 | `        .replace(/_+/g, "_")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 348 | `        .slice(-120) || "arquivo";` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 349 | `    const path = \`${task.id}/${Date.now()}-${safe}\`;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 350 | `    const contentType = file.type || "application/octet-stream";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 351 | `    const { error: upErr } = await supabase.storage` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 352 | `      .from("task-attachments")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 353 | `      .upload(path, file, { contentType, upsert: false });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 354 | `    if (upErr) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 355 | `      toast.error(upErr.message);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 356 | `      return;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 357 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 358 | `    const { data, error } = await supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 359 | `      .from("attachments")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 360 | `      .insert({` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 361 | `        task_id: task.id,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 362 | `        file_name: file.name,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 363 | `        storage_path: path,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 364 | `        mime_type: contentType,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 365 | `        size_bytes: file.size,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 366 | `        uploaded_by: user.id,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 367 | `      })` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 368 | `      .select()` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 369 | `      .single();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 370 | `    if (error) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 371 | `      toast.error(error.message);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 372 | `      return;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 373 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 374 | `    const att = data as Attachment;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 375 | `    setAttachments((c) => [...c, att]);` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 376 | `    if (att.mime_type?.startsWith("image/")) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 377 | `      const { data: signed } = await supabase.storage` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 378 | `        .from("task-attachments")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 379 | `        .createSignedUrl(att.storage_path, 3600);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 380 | `      if (signed) setThumbs((c) => ({ ...c, [att.id]: signed.signedUrl }));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 381 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 382 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 383 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 384 | `  const deleteAttachment = async (a: Attachment) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 385 | `    if (a.mime_type !== LINK_MIME) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 386 | `      await supabase.storage.from("task-attachments").remove([a.storage_path]);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 387 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 388 | `    await supabase.from("attachments").delete().eq("id", a.id);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 389 | `    setAttachments((c) => c.filter((x) => x.id !== a.id));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 390 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 391 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 392 | `  const openAttachment = (a: Attachment) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 393 | `    if (a.mime_type === LINK_MIME) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 394 | `      window.open(a.storage_path, "_blank", "noopener,noreferrer");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 395 | `      return;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 396 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 397 | `    setPreviewAttachment(a);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 398 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 399 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 400 | `  const dueDate = task.due_date ? new Date(task.due_date) : null;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 401 | `  const hasTime = !!dueDate && (dueDate.getHours() !== 0 || dueDate.getMinutes() !== 0);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 402 | `  const dueLabel = dueDate` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 403 | `    ? format(dueDate, hasTime ? "dd MMM 'às' HH:mm" : "dd MMM", { locale: ptBR })` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 404 | `    : null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 405 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 406 | `  const dueMeta = (() => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 407 | `    if (!dueDate || task.status === "done") {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 408 | `      return { state: "none" as const, label: "Prazo", days: 0, subtext: dueLabel ?? "Definir" };` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 409 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 410 | `    const now = new Date();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 411 | `    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 412 | `    const startOfDue = new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate());` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 413 | `    const diffMs = startOfDue.getTime() - startOfToday.getTime();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 414 | `    const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 415 | `    if (diffDays < 0) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 416 | `      const overdueDays = Math.abs(diffDays);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 417 | `      return {` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 418 | `        state: "overdue" as const,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 419 | `        label: overdueDays === 1 ? "Atrasado 1 dia" : \`Atrasado ${overdueDays} dias\`,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 420 | `        days: overdueDays,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 421 | `        subtext: dueLabel,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 422 | `      };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 423 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 424 | `    if (diffDays === 0) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 425 | `      return {` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 426 | `        state: "today" as const,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 427 | `        label: "Vence hoje",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 428 | `        days: 0,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 429 | `        subtext: hasTime ? format(dueDate, "HH:mm") : dueLabel,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 430 | `      };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 431 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 432 | `    if (diffDays === 1) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 433 | `      return {` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 434 | `        state: "tomorrow" as const,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 435 | `        label: "Vence amanhã",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 436 | `        days: 1,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 437 | `        subtext: hasTime ? format(dueDate, "HH:mm") : dueLabel,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 438 | `      };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 439 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 440 | `    if (diffDays <= 7) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 441 | `      return {` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 442 | `        state: "soon" as const,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 443 | `        label: \`Vence em ${diffDays} dias\`,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 444 | `        days: diffDays,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 445 | `        subtext: hasTime ? format(dueDate, "HH:mm") : dueLabel,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 446 | `      };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 447 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 448 | `    return { state: "future" as const, label: "Prazo", days: diffDays, subtext: dueLabel };` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 449 | `  })();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 450 | `  const dueState = dueMeta.state;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 451 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 452 | `  const dueChipClass = {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 453 | `    overdue: "bg-destructive text-destructive-foreground font-bold shadow-sm ring-1 ring-destructive/40",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 454 | `    today: "bg-destructive/90 text-destructive-foreground font-semibold shadow-sm ring-1 ring-destructive/30",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 455 | `    tomorrow: "bg-amber-500 text-amber-950 font-semibold shadow-sm ring-1 ring-amber-500/40",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 456 | `    soon: "bg-amber-500/90 text-amber-950 font-semibold shadow-sm ring-1 ring-amber-500/30",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 457 | `    future: "bg-blue-500/15 text-blue-700 dark:text-blue-300 font-medium ring-1 ring-blue-500/30",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 458 | `    none: "bg-muted text-muted-foreground",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 459 | `  }[dueState];` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 460 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 461 | `  const computeSubtaskDue = (iso: string | null, done: boolean) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 462 | `    if (!iso) return { label: "Sem prazo", cls: "bg-muted/60 text-muted-foreground border border-dashed border-muted-foreground/30", state: "none" as const };` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 463 | `    const d = new Date(iso);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 464 | `    const hasT = d.getHours() !== 0 || d.getMinutes() !== 0;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 465 | `    const dateLabel = format(d, hasT ? "dd MMM 'às' HH:mm" : "dd MMM", { locale: ptBR });` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 466 | `    if (done) return { label: dateLabel, cls: "bg-muted text-muted-foreground line-through", state: "done" as const };` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 467 | `    const now = new Date();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 468 | `    const s0 = new Date(now.getFullYear(), now.getMonth(), now.getDate());` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 469 | `    const s1 = new Date(d.getFullYear(), d.getMonth(), d.getDate());` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 470 | `    const diff = Math.round((s1.getTime() - s0.getTime()) / 86400000);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 471 | `    if (diff < 0) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 472 | `      const n = Math.abs(diff);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 473 | `      return { label: n === 1 ? "Atrasado 1 dia" : \`Atrasado ${n} dias\`, cls: "bg-destructive text-destructive-foreground font-semibold ring-1 ring-destructive/40", state: "overdue" as const };` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 474 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 475 | `    if (diff === 0) return { label: "Vence hoje", cls: "bg-destructive/90 text-destructive-foreground font-semibold ring-1 ring-destructive/30", state: "today" as const };` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 476 | `    if (diff === 1) return { label: "Vence amanhã", cls: "bg-amber-500 text-amber-950 font-semibold ring-1 ring-amber-500/40", state: "tomorrow" as const };` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 477 | `    if (diff <= 7) return { label: \`Vence em ${diff} dias\`, cls: "bg-amber-500/90 text-amber-950 font-semibold ring-1 ring-amber-500/30", state: "soon" as const };` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 478 | `    return { label: dateLabel, cls: "bg-blue-500/15 text-blue-700 dark:text-blue-300 font-medium ring-1 ring-blue-500/30", state: "future" as const };` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 479 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 480 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 481 | `  const priority = task.priority ? PRIORITY_LABELS[task.priority] : null;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 482 | `  const clientText = client?.color ? readableText(client.color) : "#fff";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 483 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 484 | `  const toggleTag = async (tagId: string) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 485 | `    const has = tagIds.includes(tagId);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 486 | `    if (has) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 487 | `      const next = tagIds.filter((id) => id !== tagId);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 488 | `      setTagIds(next);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 489 | `      await supabase.from("task_tag_links").delete().eq("task_id", task.id).eq("tag_id", tagId);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 490 | `      if (task.tag_id === tagId) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 491 | `        await update({ tag_id: next[0] ?? null });` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 492 | `      }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 493 | `    } else {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 494 | `      const next = [...tagIds, tagId];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 495 | `      setTagIds(next);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 496 | `      await supabase.from("task_tag_links").insert({ task_id: task.id, tag_id: tagId });` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 497 | `      if (!task.tag_id) await update({ tag_id: tagId });` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 498 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 499 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 500 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 501 | `  const addSubtask = async (commentId: string | null = null, titleOverride?: string, dueOverride?: string | null) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 502 | `    const title = (titleOverride ?? newSubtask).trim();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 503 | `    if (!title) { setAddingSubtask(false); return; }` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 504 | `    const siblings = subtasks.filter((s) => (s.comment_id ?? null) === commentId);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 505 | `    const { data, error } = await supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 506 | `      .from("subtasks")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 507 | `      .insert({ task_id: task.id, title, position: siblings.length, comment_id: commentId, due_date: dueOverride ?? null })` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 508 | `      .select("id, task_id, title, done, position, comment_id, due_date, completed_at, assignee_id")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 509 | `      .single();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 510 | `    if (error) { toast.error(error.message); return; }` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 511 | `    setSubtasks((c) => [...c, data as Subtask]);` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 512 | `    if (commentId === null) setNewSubtask("");` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 513 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 514 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 515 | `  const toggleSubtask = async (s: Subtask) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 516 | `    const nextDone = !s.done;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 517 | `    const nextCompleted = nextDone ? new Date().toISOString() : null;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 518 | `    setSubtasks((c) => c.map((x) => (x.id === s.id ? { ...x, done: nextDone, completed_at: nextCompleted } : x)));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 519 | `    await supabase.from("subtasks").update({ done: nextDone }).eq("id", s.id);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 520 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 521 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 522 | `  const deleteSubtask = async (id: string) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 523 | `    setSubtasks((c) => c.filter((x) => x.id !== id));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 524 | `    await supabase.from("subtasks").delete().eq("id", id);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 525 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 526 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 527 | `  const startEditSubtask = (s: Subtask) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 528 | `    setEditingSubtaskId(s.id);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 529 | `    setSubtaskDraft(s.title);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 530 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 531 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 532 | `  const saveSubtaskTitle = async () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 533 | `    const id = editingSubtaskId;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 534 | `    if (!id) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 535 | `    const next = subtaskDraft.trim();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 536 | `    setEditingSubtaskId(null);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 537 | `    if (!next) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 538 | `    setSubtasks((c) => c.map((x) => (x.id === id ? { ...x, title: next } : x)));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 539 | `    const { error } = await supabase.from("subtasks").update({ title: next }).eq("id", id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 540 | `    if (error) toast.error(error.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 541 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 542 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 543 | `  const [subDueReason, setSubDueReason] = useState<{ open: boolean; subtask: Subtask | null; prev: string | null; next: string | null; reason: string }>({ open: false, subtask: null, prev: null, next: null, reason: "" });` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 544 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 545 | `  const applySubtaskDue = async (s: Subtask, nextIso: string | null, reason?: string) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 546 | `    const prev = s.due_date;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 547 | `    if (nextIso === prev) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 548 | `    setSubtasks((c) => c.map((x) => (x.id === s.id ? { ...x, due_date: nextIso } : x)));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 549 | `    const { error } = await supabase.from("subtasks").update({ due_date: nextIso }).eq("id", s.id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 550 | `    if (error) { toast.error(error.message); return; }` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 551 | `    if (user) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 552 | `      await supabase.from("subtask_due_date_changes").insert({` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 553 | `        subtask_id: s.id, old_due_date: prev, new_due_date: nextIso,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 554 | `        reason: reason?.trim() || null, user_id: user.id,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 555 | `      });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 556 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 557 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 558 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 559 | `  const updateSubtaskDue = async (s: Subtask, isoOrEmpty: string) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 560 | `    const next = isoOrEmpty ? new Date(isoOrEmpty).toISOString() : null;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 561 | `    if (next === s.due_date) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 562 | `    // Se já existia um prazo, pergunta o motivo (opcional)` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 563 | `    if (s.due_date) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 564 | `      setSubDueReason({ open: true, subtask: s, prev: s.due_date, next, reason: "" });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 565 | `      return;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 566 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 567 | `    await applySubtaskDue(s, next);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 568 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 569 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 570 | `  const updateSubtaskAssignee = async (s: Subtask, value: string) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 571 | `    const next = value === "none" ? null : value;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 572 | `    if (next === s.assignee_id) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 573 | `    setSubtasks((c) => c.map((x) => (x.id === s.id ? { ...x, assignee_id: next } : x)));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 574 | `    const { error } = await supabase.from("subtasks").update({ assignee_id: next }).eq("id", s.id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 575 | `    if (error) toast.error(error.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 576 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 577 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 578 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 579 | `  const moveSubtaskInScope = async (id: string, dir: -1 | 1, commentId: string | null) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 580 | `    const scope = subtasks.filter((s) => (s.comment_id ?? null) === commentId).sort((a, b) => a.position - b.position);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 581 | `    const idx = scope.findIndex((s) => s.id === id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 582 | `    const target = idx + dir;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 583 | `    if (idx < 0 || target < 0 || target >= scope.length) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 584 | `    const reordered = [...scope];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 585 | `    [reordered[idx], reordered[target]] = [reordered[target], reordered[idx]];` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 586 | `    const reindexed = reordered.map((s, i) => ({ ...s, position: i }));` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 587 | `    setSubtasks((c) => c.map((s) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 588 | `      const upd = reindexed.find((r) => r.id === s.id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 589 | `      return upd ? { ...s, position: upd.position } : s;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 590 | `    }));` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 591 | `    await Promise.all(` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 592 | `      reindexed.map((s) => supabase.from("subtasks").update({ position: s.position }).eq("id", s.id)),` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 593 | `    );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 594 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 595 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 596 | `  const startEditCommentBody = (c: CardComment) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 597 | `    setEditingCommentId(c.id);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 598 | `    setCommentDraft(c.body);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 599 | `    setOpenComments((cur) => ({ ...cur, [c.id]: true }));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 600 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 601 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 602 | `  const saveCommentBody = async () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 603 | `    const id = editingCommentId;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 604 | `    if (!id) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 605 | `    const next = commentDraft;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 606 | `    setEditingCommentId(null);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 607 | `    setComments((cs) => cs.map((x) => (x.id === id ? { ...x, body: next } : x)));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 608 | `    const { error } = await supabase.from("comments").update({ body: next }).eq("id", id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 609 | `    if (error) toast.error(error.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 610 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 611 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 612 | `  const renameComment = async (c: CardComment) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 613 | `    const current = c.title ?? "";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 614 | `    const next = window.prompt("Renomear seção", current)?.trim();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 615 | `    if (next === undefined) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 616 | `    const value = next || null;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 617 | `    setComments((cs) => cs.map((x) => (x.id === c.id ? { ...x, title: value } : x)));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 618 | `    const { error } = await supabase.from("comments").update({ title: value }).eq("id", c.id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 619 | `    if (error) toast.error(error.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 620 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 621 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 622 | `  const deleteComment = async (id: string) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 623 | `    setComments((cs) => cs.filter((x) => x.id !== id));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 624 | `    const { error } = await supabase.from("comments").delete().eq("id", id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 625 | `    if (error) toast.error(error.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 626 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 627 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 628 | `  const moveComment = async (id: string, dir: -1 | 1) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 629 | `    const idx = comments.findIndex((c) => c.id === id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 630 | `    const target = idx + dir;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 631 | `    if (idx < 0 || target < 0 || target >= comments.length) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 632 | `    const next = [...comments];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 633 | `    [next[idx], next[target]] = [next[target], next[idx]];` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 634 | `    const reindexed = next.map((c, i) => ({ ...c, position: i }));` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 635 | `    setComments(reindexed);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 636 | `    await Promise.all(` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 637 | `      reindexed.map((c) => supabase.from("comments").update({ position: c.position }).eq("id", c.id)),` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 638 | `    );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 639 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 640 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 641 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 642 | `  const currentStatus = useMemo(` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 643 | `    () => statuses.find((s) => s.id === task.status_id) ?? null,` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 644 | `    [statuses, task.status_id],` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 645 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 646 | `  const completedStatus = useMemo(() => statuses.find((s) => s.is_completed) ?? null, [statuses]);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 647 | `  const isActiveStatus = !!currentStatus?.is_active;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 648 | `  const isCompletedStatus = !!currentStatus?.is_completed || !!task.completed_at;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 649 | `  const completedColor = currentStatus?.is_completed ? currentStatus.color : "#10b981";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 650 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 651 | `  const changeStatus = async (s: TaskStatus) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 652 | `    const patch: Partial<Task> = {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 653 | `      status_id: s.id,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 654 | `      status: s.is_completed ? "done" : "todo",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 655 | `      completed_at: s.is_completed ? new Date().toISOString() : null,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 656 | `    };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 657 | `    // When marking as "in progress" / active, bump card to the top of its column` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 658 | `    if (s.is_active && !s.is_completed && task.column_id) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 659 | `      const { data: siblings } = await supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 660 | `        .from("tasks")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 661 | `        .select("position")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 662 | `        .eq("column_id", task.column_id)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 663 | `        .neq("id", task.id)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 664 | `        .order("position", { ascending: true })` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 665 | `        .limit(1);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 666 | `      const minPos = siblings && siblings.length > 0 ? (siblings[0] as { position: number }).position : 0;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 667 | `      patch.position = minPos - 1;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 668 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 669 | `    await update(patch);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 670 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 671 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 672 | `  const completeTask = async () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 673 | `    await update({` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 674 | `      status: "done",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 675 | `      status_id: completedStatus?.id ?? task.status_id,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 676 | `      completed_at: new Date().toISOString(),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 677 | `    });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 678 | `    toast.success("Tarefa concluída");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 679 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 680 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 681 | `  const openDueChange = (nextIso: string | null) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 682 | `    const oldIso = task.due_date ?? null;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 683 | `    if (oldIso === nextIso) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 684 | `    setDueChange({ open: true, pending: nextIso, reason: "" });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 685 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 686 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 687 | `  const confirmDueChange = async (skipReason = false) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 688 | `    const nextIso = dueChange.pending;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 689 | `    const oldIso = task.due_date ?? null;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 690 | `    setDueChange({ open: false, pending: null, reason: "" });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 691 | `    // registra histórico (só quando havia algum prazo antes ou passa a ter)` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 692 | `    if (user && (oldIso || nextIso)) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 693 | `      await supabase.from("task_due_date_changes").insert({` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 694 | `        task_id: task.id,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 695 | `        user_id: user.id,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 696 | `        old_due_date: oldIso,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 697 | `        new_due_date: nextIso,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 698 | `        reason: skipReason ? null : (dueChange.reason.trim() || null),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 699 | `      });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 700 | `      void qc.invalidateQueries({ queryKey: ["task_due_date_changes", task.id] });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 701 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 702 | `    await update({ due_date: nextIso });` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 703 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 704 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 705 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 706 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 707 | `    <>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 708 | `      <div` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 709 | `        {...dragHandleProps}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 710 | `        className={cn(` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 711 | `          "group relative cursor-grab touch-none overflow-visible rounded-lg border bg-card shadow-sm transition hover:border-primary/40 hover:shadow active:cursor-grabbing",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 712 | `          dueState === "overdue" && !isCompletedStatus && "border-destructive ring-2 ring-destructive/50",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 713 | `          dueState === "today" && !isCompletedStatus && "border-destructive/70 ring-1 ring-destructive/30",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 714 | `          dueState === "tomorrow" && !isCompletedStatus && "border-amber-500/70 ring-1 ring-amber-500/30",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 715 | `          isActiveStatus && !isCompletedStatus && "z-10 scale-[1.025] shadow-xl ring-2",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 716 | `          isCompletedStatus && "ring-2 ring-emerald-500/70 border-emerald-500/40",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 717 | `        )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 718 | `        style={{` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 719 | `          ...(task.card_width ? { width: task.card_width, minWidth: task.card_width, maxWidth: "100%" } : null),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 720 | `          ...(isCompletedStatus` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 721 | `            ? {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 722 | `                ["--tw-ring-color" as never]: completedColor,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 723 | `                background: \`linear-gradient(180deg, ${completedColor}22 0%, ${completedColor}10 100%)\`,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 724 | `                boxShadow: \`0 10px 30px -10px ${completedColor}80\`,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 725 | `              }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 726 | `            : isActiveStatus && currentStatus` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 727 | `            ? { ["--tw-ring-color" as never]: currentStatus.color, boxShadow: \`0 10px 30px -10px ${currentStatus.color}80\` }` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 728 | `            : null),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 729 | `        }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 730 | `      >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 731 | `        {/* Status color bar — visible whenever there's a custom status */}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 732 | `        {currentStatus ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 733 | `          <div` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 734 | `            className="h-1 w-full rounded-t-lg"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 735 | `            style={{ background: currentStatus.color }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 736 | `          />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 737 | `        ) : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 738 | `        {/* Client color strip at top */}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 739 | `        {client?.color ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 740 | `          <div` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 741 | `            className={cn(` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 742 | `              "flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 743 | `              !currentStatus && "rounded-t-lg",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 744 | `            )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 745 | `            style={{ background: client.color, color: clientText }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 746 | `          >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 747 | `            <Users className="h-3 w-3" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 748 | `            <span className="truncate">{client.name}</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 749 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 750 | `        ) : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 751 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 752 | `        <div className="flex flex-col gap-1.5 p-2.5">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 753 | `        {/* Tags — multiple, click chip to manage */}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 754 | `        {isVisible("tags") ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 755 | `        <div className="mb-2 -mx-1" style={{ order: orderOf("tags") }}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 756 | `          <ChipPopover` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 757 | `            value={` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 758 | `              selectedTags.length > 0 ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 759 | `                <span className="flex flex-wrap items-center gap-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 760 | `                  {selectedTags.map((t) => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 761 | `                    <span` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 762 | `                      key={t.id}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 763 | `                      className="inline-flex items-center rounded-md px-2 py-1 text-[11px] font-bold uppercase tracking-wider shadow-sm"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 764 | `                      style={{` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 765 | `                        background: t.color,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 766 | `                        color: readableText(t.color),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 767 | `                        boxShadow: \`0 2px 8px -2px ${t.color}80\`,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 768 | `                      }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 769 | `                    >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 770 | `                      {t.name}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 771 | `                    </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 772 | `                  ))}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 773 | `                  <span className="inline-flex items-center gap-1 rounded-md border border-dashed px-1.5 py-0.5 text-[10px] text-muted-foreground hover:bg-muted">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 774 | `                    <Plus className="h-2.5 w-2.5" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 775 | `                  </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 776 | `                </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 777 | `              ) : (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 778 | `                <span className="inline-flex items-center gap-1 rounded-md border border-dashed px-2 py-0.5 text-[10px] text-muted-foreground hover:bg-muted">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 779 | `                  <TagIcon className="h-2.5 w-2.5" /> Adicionar etiquetas` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 780 | `                </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 781 | `              )` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 782 | `            }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 783 | `            render={() => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 784 | `              <PopoverField label="Etiquetas">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 785 | `                <div className="max-h-56 space-y-0.5 overflow-y-auto">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 786 | `                  {tags.length === 0 ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 787 | `                    <p className="px-1 py-1 text-[11px] text-muted-foreground">Nenhuma etiqueta criada</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 788 | `                  ) : tags.map((t) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 789 | `                    const checked = tagIds.includes(t.id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 790 | `                    return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 791 | `                      <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 792 | `                        key={t.id}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 793 | `                        type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 794 | `                        onClick={() => void toggleTag(t.id)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 795 | `                        className="flex w-full items-center gap-2 rounded px-1.5 py-1 text-left text-xs hover:bg-muted"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 796 | `                      >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 797 | `                        <span className={cn("flex h-4 w-4 items-center justify-center rounded border", checked ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/40")}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 798 | `                          {checked ? <Check className="h-3 w-3" /> : null}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 799 | `                        </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 800 | `                        <span className="h-2 w-2 rounded-full" style={{ background: t.color }} />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 801 | `                        <span className="truncate">{t.name}</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 802 | `                      </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 803 | `                    );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 804 | `                  })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 805 | `                </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 806 | `              </PopoverField>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 807 | `            )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 808 | `          />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 809 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 810 | `        ) : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 811 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 812 | `        {/* Title row */}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 813 | `        <div className="mb-1 flex items-start justify-between gap-1" style={{ order: -1 }}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 814 | `          {titleEditing ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 815 | `            <Textarea` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 816 | `              value={titleDraft}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 817 | `              autoFocus` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 818 | `              onChange={(e) => setTitleDraft(e.target.value)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 819 | `              onBlur={() => void saveTitle()}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 820 | `              onKeyDown={(e) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 821 | `                if (e.key === "Enter" && !e.shiftKey) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 822 | `                  e.preventDefault();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 823 | `                  void saveTitle();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 824 | `                }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 825 | `                if (e.key === "Escape") {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 826 | `                  setTitleDraft(task.title);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 827 | `                  setTitleEditing(false);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 828 | `                }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 829 | `              }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 830 | `              onPointerDown={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 831 | `              onClick={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 832 | `              className="min-h-[28px] resize-none border-none bg-transparent p-0 text-sm font-medium leading-snug shadow-none focus-visible:ring-0 md:text-sm"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 833 | `            />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 834 | `          ) : (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 835 | `            <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 836 | `              type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 837 | `              onPointerDown={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 838 | `              onClick={(e) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 839 | `                stop(e);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 840 | `                setTitleEditing(true);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 841 | `              }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 842 | `              className="min-w-0 flex-1 text-left text-sm font-medium leading-snug [overflow-wrap:anywhere] hover:text-primary"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 843 | `            >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 844 | `              {task.title || <span className="text-muted-foreground">Sem título</span>}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 845 | `            </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 846 | `          )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 847 | `          <Button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 848 | `            size="icon"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 849 | `            variant="ghost"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 850 | `            className="h-6 w-6 shrink-0 text-success opacity-0 transition group-hover:opacity-100"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 851 | `            onPointerDown={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 852 | `            onClick={(e) => { stop(e); void completeTask(); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 853 | `            title="Concluir tarefa"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 854 | `          >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 855 | `            <CheckCircle2 className="h-4 w-4" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 856 | `          </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 857 | `          <Button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 858 | `            size="icon"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 859 | `            variant="ghost"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 860 | `            className="h-6 w-6 shrink-0 opacity-0 transition group-hover:opacity-100"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 861 | `            onPointerDown={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 862 | `            onClick={(e) => { stop(e); onDuplicate?.(); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 863 | `            title="Duplicar tarefa"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 864 | `          >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 865 | `            <Copy className="h-3.5 w-3.5" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 866 | `          </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 867 | `          <Popover>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 868 | `            <PopoverTrigger asChild>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 869 | `              <Button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 870 | `                size="icon"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 871 | `                variant="ghost"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 872 | `                className="h-6 w-6 shrink-0 opacity-0 transition group-hover:opacity-100"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 873 | `                onPointerDown={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 874 | `                onClick={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 875 | `                title="Largura do card"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 876 | `              >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 877 | `                <MoveHorizontal className="h-3.5 w-3.5" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 878 | `              </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 879 | `            </PopoverTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 880 | `            <PopoverContent` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 881 | `              className="w-56 p-2"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 882 | `              align="end"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 883 | `              onPointerDown={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 884 | `              onClick={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 885 | `            >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 886 | `              <div className="mb-1.5 px-1 text-xs font-semibold">Largura do card</div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 887 | `              <div className="grid grid-cols-2 gap-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 888 | `                {(` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 889 | `                  [` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 890 | `                    { label: "Padrão", value: null },` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 891 | `                    { label: "Médio", value: 360 },` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 892 | `                    { label: "Grande", value: 480 },` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 893 | `                    { label: "Extra", value: 640 },` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 894 | `                  ]` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 895 | `                ).map((p) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 896 | `                  const active = (task.card_width ?? null) === p.value;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 897 | `                  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 898 | `                    <Button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 899 | `                      key={p.label}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 900 | `                      size="sm"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 901 | `                      variant={active ? "default" : "outline"}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 902 | `                      className="h-8 text-[11px]"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 903 | `                      onClick={() => void update({ card_width: p.value })}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 904 | `                    >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 905 | `                      {p.label}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 906 | `                    </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 907 | `                  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 908 | `                })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 909 | `              </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 910 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 911 | `            </PopoverContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 912 | `          </Popover>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 913 | `          <Button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 914 | `            size="icon"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 915 | `            variant="ghost"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 916 | `            className="h-6 w-6 shrink-0 opacity-0 transition group-hover:opacity-100"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 917 | `            onPointerDown={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 918 | `            onClick={(e) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 919 | `              stop(e);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 920 | `              onEdit?.();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 921 | `            }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 922 | `            title="Abrir tarefa"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 923 | `          >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 924 | `            <MoreHorizontal className="h-3.5 w-3.5" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 925 | `          </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 926 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 927 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 928 | `        {/* Completion date badge — prominent green when completed */}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 929 | `        {isCompletedStatus && task.completed_at ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 930 | `          <div` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 931 | `            className="mb-2 flex items-center gap-1.5 rounded-md border px-2 py-1 text-[11px] font-semibold"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 932 | `            style={{` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 933 | `              order: -1,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 934 | `              background: \`${completedColor}1f\`,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 935 | `              borderColor: \`${completedColor}66\`,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 936 | `              color: completedColor,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 937 | `            }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 938 | `            title={format(new Date(task.completed_at), "PPPp", { locale: ptBR })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 939 | `          >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 940 | `            <CheckCircle2 className="h-3.5 w-3.5" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 941 | `            <span className="uppercase tracking-wider">Concluída em</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 942 | `            <span className="ml-auto font-bold">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 943 | `              {format(new Date(task.completed_at), "dd/MM/yyyy", { locale: ptBR })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 944 | `            </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 945 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 946 | `        ) : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 947 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 948 | `        {/* Description — inline editable */}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 949 | `        {isVisible("description") ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 950 | `        <div style={{ order: orderOf("description") }}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 951 | `        {descEditing ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 952 | `          <>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 953 | `            <Textarea` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 954 | `              value={descDraft}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 955 | `              autoFocus` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 956 | `              ref={(el) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 957 | `                descTextareaRef.current = el;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 958 | `                if (el) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 959 | `                  el.style.height = "auto";` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 960 | `                  el.style.height = \`${el.scrollHeight}px\`;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 961 | `                }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 962 | `              }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 963 | `              onChange={(e) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 964 | `                setDescDraft(e.target.value);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 965 | `                const el = e.currentTarget;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 966 | `                el.style.height = "auto";` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 967 | `                el.style.height = \`${el.scrollHeight}px\`;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 968 | `              }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 969 | `              onBlur={() => void saveDesc()}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 970 | `              onKeyDown={(e) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 971 | `                if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 972 | `                  e.preventDefault();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 973 | `                  void saveDesc();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 974 | `                }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 975 | `                if (e.key === "Escape") {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 976 | `                  setDescDraft(task.description ?? "");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 977 | `                  setDescEditing(false);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 978 | `                }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 979 | `              }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 980 | `              onPointerDown={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 981 | `              onClick={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 982 | `              placeholder="Observações..."` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 983 | `              className="mb-2 min-h-[40px] resize-none overflow-hidden whitespace-pre-wrap border-none bg-transparent p-0 text-sm leading-snug text-foreground shadow-none focus-visible:ring-0 md:text-sm"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 984 | `            />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 985 | `          </>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 986 | `        ) : task.description ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 987 | `          <p` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 988 | `            onPointerDown={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 989 | `            onClick={(e) => { stop(e); setDescEditing(true); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 990 | `            className="mb-2 cursor-text whitespace-pre-wrap rounded text-sm leading-snug text-muted-foreground [overflow-wrap:anywhere] hover:bg-muted/40"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 991 | `          >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 992 | `            {task.description}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 993 | `          </p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 994 | `        ) : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 995 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 996 | `        ) : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 997 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 998 | `        {/* Seções dobráveis de observações foram removidas — use o campo Observações acima. */}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 999 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1000 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1001 | `        {/* Subtasks — collapsible com título editável */}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1002 | `        {isVisible("subtasks") ? (() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1003 | `        const rootSubs = subtasks.filter((s) => !s.comment_id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1004 | `        return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 1005 | `        <div style={{ order: orderOf("subtasks") }}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1006 | `        {(rootSubs.length > 0 || addingSubtask) ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1007 | `          <Collapsible` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1008 | `            open={subtasksOpen}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1009 | `            onOpenChange={setSubtasksOpen}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1010 | `            className="mb-2 rounded-md border bg-muted/20"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1011 | `          >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1012 | `            <div className="flex w-full items-center gap-0.5 pr-1 hover:bg-muted/40">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1013 | `              <CollapsibleTrigger asChild>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1014 | `                <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1015 | `                  type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1016 | `                  onPointerDown={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1017 | `                  onClick={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1018 | `                  className="flex min-w-0 flex-1 items-center gap-1.5 px-2 py-1.5 text-left text-xs font-medium"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1019 | `                >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1020 | `                  {subtasksOpen ? <ChevronDown className="h-3.5 w-3.5 shrink-0" /> : <ChevronRight className="h-3.5 w-3.5 shrink-0" />}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1021 | `                  <ListChecks className="h-3 w-3 shrink-0 text-muted-foreground" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1022 | `                  <span className="min-w-0 flex-1 truncate">{subtasksTitle}</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1023 | `                  {rootSubs.length > 0 ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1024 | `                    <span className="shrink-0 text-[10px] font-normal text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1025 | `                      {rootSubs.filter((s) => s.done).length}/{rootSubs.length}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1026 | `                    </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1027 | `                  ) : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1028 | `                </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1029 | `              </CollapsibleTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1030 | `              <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1031 | `                type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1032 | `                title="Renomear seção"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1033 | `                onPointerDown={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1034 | `                onClick={(e) => { stop(e); renameSubtasksTitle(); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1035 | `                className="rounded p-0.5 opacity-0 transition group-hover:opacity-100 hover:bg-muted"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1036 | `              >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1037 | `                <Pencil className="h-3 w-3" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1038 | `              </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1039 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1040 | `            <CollapsibleContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1041 | `              <div className="space-y-0.5 border-t p-1.5">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1042 | `                {rootSubs.map((s, sIdx) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1043 | `                  const dueInfo = computeSubtaskDue(s.due_date, s.done);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1044 | `                  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 1045 | `                  <div key={s.id} className={cn(` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1046 | `                    "group/sub rounded px-1 py-1 transition-colors",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1047 | `                    s.done ? "bg-emerald-500/10 ring-1 ring-emerald-500/30 hover:bg-emerald-500/15" : "hover:bg-muted/40",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1048 | `                  )}>` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1049 | `                    <div className="flex items-start gap-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1050 | `                    <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1051 | `                      type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1052 | `                      onPointerDown={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1053 | `                      onClick={(e) => { stop(e); void toggleSubtask(s); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1054 | `                      className={cn(` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1055 | `                        "mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded border",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1056 | `                        s.done ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/40",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1057 | `                      )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1058 | `                    >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1059 | `                      {s.done ? <Check className="h-2.5 w-2.5" /> : null}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1060 | `                    </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1061 | `                    {editingSubtaskId === s.id ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1062 | `                      <div className="min-w-0 flex-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1063 | `                        <RichTextEditor` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1064 | `                          value={subtaskDraft}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1065 | `                          onChange={setSubtaskDraft}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1066 | `                          onBlur={() => void saveSubtaskTitle()}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1067 | `                          onSubmit={() => void saveSubtaskTitle()}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1068 | `                          autoFocus` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1069 | `                          placeholder="Escreva… (Ctrl+Enter para salvar)"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1070 | `                          minHeight={40}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1071 | `                        />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1072 | `                      </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1073 | `                    ) : (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1074 | `                      <div` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1075 | `                        onPointerDown={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1076 | `                        onClick={(e) => { stop(e); startEditSubtask(s); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1077 | `                        className={cn("min-w-0 flex-1 cursor-text break-words text-left hover:text-primary", s.done && "text-muted-foreground line-through")}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1078 | `                      >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1079 | `                        <RichTextView html={s.title} />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1080 | `                      </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1081 | `                    )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1082 | `                    <div className="flex shrink-0 items-center gap-0.5 opacity-0 transition group-hover/sub:opacity-100">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1083 | `                      <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1084 | `                        type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1085 | `                        title="Mover para cima"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1086 | `                        disabled={sIdx === 0}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1087 | `                        onPointerDown={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1088 | `                        onClick={(e) => { stop(e); void moveSubtaskInScope(s.id, -1, null); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1089 | `                        className="rounded p-0.5 hover:bg-muted disabled:opacity-30"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1090 | `                      >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1091 | `                        <ArrowUp className="h-3 w-3" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1092 | `                      </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1093 | `                      <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1094 | `                        type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1095 | `                        title="Mover para baixo"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1096 | `                        disabled={sIdx === rootSubs.length - 1}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1097 | `                        onPointerDown={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1098 | `                        onClick={(e) => { stop(e); void moveSubtaskInScope(s.id, 1, null); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1099 | `                        className="rounded p-0.5 hover:bg-muted disabled:opacity-30"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1100 | `                      >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1101 | `                        <ArrowDown className="h-3 w-3" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1102 | `                      </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1103 | `                      <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1104 | `                        type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1105 | `                        title="Renomear"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1106 | `                        onPointerDown={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1107 | `                        onClick={(e) => { stop(e); startEditSubtask(s); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1108 | `                        className="rounded p-0.5 hover:bg-muted"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1109 | `                      >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1110 | `                        <Pencil className="h-3 w-3" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1111 | `                      </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1112 | `                      <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1113 | `                        type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1114 | `                        onPointerDown={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1115 | `                        onClick={(e) => { stop(e); void deleteSubtask(s.id); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1116 | `                        title="Remover"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1117 | `                        className="rounded p-0.5 text-destructive hover:bg-destructive/10"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1118 | `                      >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1119 | `                        <Trash2 className="h-3 w-3" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1120 | `                      </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1121 | `                    </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1122 | `                    </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1123 | `                    <div className="mt-1 flex flex-wrap items-center gap-1 pl-5">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1124 | `                      {s.done && s.completed_at ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1125 | `                        <span` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1126 | `                          className="inline-flex shrink-0 items-center gap-1 rounded-md bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-medium leading-none text-emerald-700 ring-1 ring-emerald-500/30 dark:text-emerald-300"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1127 | `                          title={format(new Date(s.completed_at), "PPPp", { locale: ptBR })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1128 | `                        >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1129 | `                          <CheckCircle2 className="h-2.5 w-2.5" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1130 | `                          {format(new Date(s.completed_at), "dd/MM HH:mm", { locale: ptBR })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1131 | `                        </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1132 | `                      ) : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1133 | `                      <SubtaskDuePopover` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1134 | `                        dueIso={s.due_date}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1135 | `                        dueInfo={dueInfo}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1136 | `                        onApply={(iso) => void updateSubtaskDue(s, iso)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1137 | `                        onClear={() => void updateSubtaskDue(s, "")}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1138 | `                      />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1139 | `                      <SubtaskAssigneePopover` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1140 | `                        profiles={profiles}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1141 | `                        value={s.assignee_id}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1142 | `                        onChange={(v) => void updateSubtaskAssignee(s, v)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1143 | `                      />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1144 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1145 | `                    </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1146 | `                  </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1147 | `                  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1148 | `                })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1149 | `                {addingSubtask ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1150 | `                  <div className="flex items-start gap-1.5 px-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1151 | `                    <span className="mt-1 h-3.5 w-3.5 shrink-0 rounded border border-muted-foreground/40" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1152 | `                    <Textarea` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1153 | `                      value={newSubtask}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1154 | `                      autoFocus` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1155 | `                      ref={(el) => { if (el) { el.style.height = "auto"; el.style.height = \`${el.scrollHeight}px\`; } }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1156 | `                      onChange={(e) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1157 | `                        setNewSubtask(e.target.value);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1158 | `                        const el = e.currentTarget;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1159 | `                        el.style.height = "auto";` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1160 | `                        el.style.height = \`${el.scrollHeight}px\`;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1161 | `                      }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1162 | `                      onBlur={() => void addSubtask()}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1163 | `                      onKeyDown={(e) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1164 | `                        if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) { e.preventDefault(); void addSubtask(); }` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 1165 | `                        if (e.key === "Escape") { setNewSubtask(""); setAddingSubtask(false); }` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 1166 | `                      }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1167 | `                      onPointerDown={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1168 | `                      onClick={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1169 | `                      placeholder="Nova subtarefa (Ctrl+Enter para salvar)"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1170 | `                      className="min-h-[24px] flex-1 resize-none overflow-hidden whitespace-pre-wrap border-none bg-transparent p-0 text-xs leading-snug shadow-none focus-visible:ring-0"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1171 | `                    />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1172 | `                  </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1173 | `                ) : (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1174 | `                  <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1175 | `                    type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1176 | `                    onPointerDown={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1177 | `                    onClick={(e) => { stop(e); setAddingSubtask(true); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1178 | `                    className="flex w-full items-center gap-1.5 rounded px-1 py-0.5 text-left text-[11px] text-muted-foreground/70 hover:bg-muted hover:text-foreground"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1179 | `                  >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1180 | `                    <Plus className="h-3 w-3" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1181 | `                    <span>Adicionar subtarefa</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1182 | `                  </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1183 | `                )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1184 | `              </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1185 | `            </CollapsibleContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1186 | `          </Collapsible>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1187 | `        ) : (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1188 | `          <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1189 | `            type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1190 | `            onPointerDown={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1191 | `            onClick={(e) => { stop(e); setAddingSubtask(true); setSubtasksOpen(true); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1192 | `            className="mb-2 flex w-full items-center gap-1.5 rounded px-1 py-0.5 text-left text-[11px] text-muted-foreground/70 hover:bg-muted hover:text-foreground"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1193 | `          >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1194 | `            <Plus className="h-3 w-3" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1195 | `            <span>Adicionar subtarefa</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1196 | `          </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1197 | `        )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1198 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1199 | `        );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1200 | `        })() : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1201 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1202 | `        {/* Attachment thumbnails grid */}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1203 | `        {isVisible("attachments") && attachments.length > 0 ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1204 | `          <div className="mb-2 grid grid-cols-3 gap-1" style={{ order: orderOf("attachments") }}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1205 | `            {attachments.slice(0, 6).map((a) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1206 | `              const isLink = a.mime_type === LINK_MIME;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1207 | `              const isImage = !isLink && a.mime_type?.startsWith("image/");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1208 | `              return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 1209 | `                <div key={a.id} className="group/att relative aspect-square overflow-hidden rounded border bg-muted">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1210 | `                  {isImage && thumbs[a.id] ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1211 | `                    <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1212 | `                      type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1213 | `                      onPointerDown={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1214 | `                      onClick={(e) => { stop(e); openAttachment(a); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1215 | `                      className="block h-full w-full"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1216 | `                    >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1217 | `                      <img src={thumbs[a.id]} alt={a.file_name} className="h-full w-full object-cover" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1218 | `                    </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1219 | `                  ) : (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1220 | `                    <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1221 | `                      type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1222 | `                      onPointerDown={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1223 | `                      onClick={(e) => { stop(e); openAttachment(a); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1224 | `                      className="flex h-full w-full flex-col items-center justify-center gap-0.5 p-1 text-muted-foreground"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1225 | `                      title={a.file_name}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1226 | `                    >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1227 | `                      {isLink ? <Link2 className="h-4 w-4" /> : <FileText className="h-4 w-4" />}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1228 | `                      <span className="line-clamp-1 w-full break-all text-center text-[8px] leading-tight">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1229 | `                        {a.file_name}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1230 | `                      </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1231 | `                    </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1232 | `                  )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1233 | `                  <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1234 | `                    type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1235 | `                    onPointerDown={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1236 | `                    onClick={(e) => { stop(e); void deleteAttachment(a); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1237 | `                    className="absolute right-0.5 top-0.5 rounded-full bg-background/80 p-0.5 opacity-0 transition group-hover/att:opacity-100"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1238 | `                    title="Remover"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1239 | `                  >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1240 | `                    <X className="h-2.5 w-2.5" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1241 | `                  </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1242 | `                </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1243 | `              );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1244 | `            })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1245 | `            {attachments.length > 6 ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1246 | `              <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1247 | `                type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1248 | `                onPointerDown={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1249 | `                onClick={(e) => { stop(e); onEdit?.(); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1250 | `                className="flex aspect-square items-center justify-center rounded border bg-muted text-[10px] font-medium text-muted-foreground hover:bg-muted/60"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1251 | `              >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1252 | `                +{attachments.length - 6}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1253 | `              </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1254 | `            ) : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1255 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1256 | `        ) : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1257 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1258 | `        {/* Interruptions */}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1259 | `        {isVisible("interruptions") ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1260 | `          <div style={{ order: orderOf("interruptions") }}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1261 | `            <InterruptionsBlock task={task} color={interruptionColor} />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1262 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1263 | `        ) : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1264 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1265 | `        {/* Prioridade — bloco próprio */}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1266 | `        {isVisible("priority") ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1267 | `          <div className="flex flex-wrap items-center gap-1" style={{ order: orderOf("priority") }}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1268 | `            <ChipPopover` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1269 | `              value={` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1270 | `                priority ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1271 | `                  <span` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1272 | `                    className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[10px] font-medium"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1273 | `                    style={{ background: \`${priority.color}22\`, color: priority.color }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1274 | `                  >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1275 | `                    <Flag className="h-2.5 w-2.5" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1276 | `                    {priority.label}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1277 | `                  </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1278 | `                ) : (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1279 | `                  <span className="inline-flex items-center gap-1 rounded border border-dashed px-1.5 py-0.5 text-[10px] text-muted-foreground hover:bg-muted">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1280 | `                    <Flag className="h-2.5 w-2.5" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1281 | `                    Definir prioridade` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1282 | `                  </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1283 | `                )` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1284 | `              }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1285 | `              render={(close) => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1286 | `                <PopoverField label="Prioridade">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1287 | `                  <Select value={task.priority ?? "none"} onValueChange={(v) => { void update({ priority: v === "none" ? null : (v as Task["priority"]) }); close(); }}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1288 | `                    <SelectTrigger className="h-8 text-xs"><SelectValue /></SelectTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1289 | `                    <SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1290 | `                      <SelectItem value="none">Sem prioridade</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1291 | `                      <SelectItem value="low">Baixa</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1292 | `                      <SelectItem value="medium">Média</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1293 | `                      <SelectItem value="high">Alta</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1294 | `                      <SelectItem value="urgent">Urgente</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1295 | `                    </SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1296 | `                  </Select>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1297 | `                </PopoverField>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1298 | `              )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1299 | `            />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1300 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1301 | `        ) : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1302 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1303 | `        {/* Status — bloco próprio */}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1304 | `        {isVisible("status") ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1305 | `          <div className="flex flex-wrap items-center gap-1" style={{ order: orderOf("status") }}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1306 | `            <ChipPopover` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1307 | `              value={` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1308 | `                currentStatus ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1309 | `                  <span` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1310 | `                    className="inline-flex items-center gap-1 rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide shadow-sm"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1311 | `                    style={{ background: currentStatus.color, color: readableText(currentStatus.color) }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1312 | `                  >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1313 | `                    {currentStatus.is_active ? <Zap className="h-2.5 w-2.5" /> : <CheckCircle2 className="h-2.5 w-2.5" />}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1314 | `                    {currentStatus.name}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1315 | `                  </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1316 | `                ) : (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1317 | `                  <span className="inline-flex items-center gap-1 rounded border border-dashed px-1.5 py-0.5 text-[10px] text-muted-foreground hover:bg-muted">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1318 | `                    <CheckCircle2 className="h-2.5 w-2.5" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1319 | `                    Definir status` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1320 | `                  </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1321 | `                )` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1322 | `              }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1323 | `              render={(close) => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1324 | `                <PopoverField label="Status">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1325 | `                  <div className="max-h-56 space-y-0.5 overflow-y-auto">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1326 | `                    {statuses.length === 0 ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1327 | `                      <p className="px-1 py-1 text-[11px] text-muted-foreground">Nenhum status criado</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1328 | `                    ) : statuses.map((s) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1329 | `                      const checked = task.status_id === s.id;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1330 | `                      return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 1331 | `                        <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1332 | `                          key={s.id}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1333 | `                          type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1334 | `                          onClick={() => { void changeStatus(s); close(); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1335 | `                          className="flex w-full items-center gap-2 rounded px-1.5 py-1 text-left text-xs hover:bg-muted"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1336 | `                        >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1337 | `                          <span className={cn("flex h-4 w-4 items-center justify-center rounded border", checked ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/40")}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1338 | `                            {checked ? <Check className="h-3 w-3" /> : null}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1339 | `                          </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1340 | `                          <span className="h-2.5 w-2.5 rounded-full" style={{ background: s.color }} />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1341 | `                          <span className="flex-1 truncate">{s.name}</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1342 | `                          {s.is_active ? <Zap className="h-3 w-3 text-amber-500" /> : null}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1343 | `                          {s.is_completed ? <CheckCircle2 className="h-3 w-3 text-emerald-500" /> : null}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1344 | `                        </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1345 | `                      );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1346 | `                    })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1347 | `                  </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1348 | `                </PopoverField>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1349 | `              )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1350 | `            />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1351 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1352 | `        ) : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1353 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1354 | `        {/* Prazo — bloco próprio */}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1355 | `        {isVisible("due") ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1356 | `          <div className="flex flex-wrap items-center gap-1" style={{ order: orderOf("due") }}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1357 | `            <ChipPopover` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1358 | `              value={` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1359 | `                <span` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1360 | `                  className={cn(` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1361 | `                    "inline-flex items-center gap-1.5 rounded-sm border px-2 py-1 text-xs shadow-sm",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1362 | `                    dueChipClass,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1363 | `                  )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1364 | `                  title={dueMeta.label}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1365 | `                >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1366 | `                  <CalendarIcon className="h-3.5 w-3.5" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1367 | `                  <span className="flex items-center gap-1.5">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1368 | `                    <span className="text-[10px] font-medium opacity-90">{dueMeta.label}</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1369 | `                    <span className="font-semibold">{dueMeta.subtext}</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1370 | `                  </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1371 | `                </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1372 | `              }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1373 | `              render={(close) => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1374 | `                <DueDateEditor` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1375 | `                  task={task}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1376 | `                  onChange={(v) => { openDueChange(v); close(); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1377 | `                />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1378 | `              )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1379 | `            />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1380 | `            {dueLabel ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1381 | `              <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1382 | `                type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1383 | `                onPointerDown={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1384 | `                onClick={(e) => { stop(e); setHistoryOpen(true); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1385 | `                title="Histórico de mudanças de prazo"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1386 | `                className="inline-flex items-center rounded-sm border border-dashed px-1 py-0.5 text-muted-foreground hover:bg-muted hover:text-foreground"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1387 | `              >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1388 | `                <History className="h-3 w-3" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1389 | `              </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1390 | `            ) : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1391 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1392 | `        ) : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1393 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1394 | `        {/* Data de criação — bloco próprio */}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1395 | `        {isVisible("createdAt") ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1396 | `          <div className="flex flex-wrap items-center gap-1" style={{ order: orderOf("createdAt") }}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1397 | `            <ChipPopover` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1398 | `              value={` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1399 | `                <span` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1400 | `                  className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[10px] text-muted-foreground hover:bg-muted"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1401 | `                  title={\`Criada em ${format(new Date(task.created_at), "dd/MM/yyyy HH:mm", { locale: ptBR })}\`}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1402 | `                >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1403 | `                  <CalendarIcon className="h-2.5 w-2.5" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1404 | `                  Criada · {format(new Date(task.created_at), "dd MMM", { locale: ptBR })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1405 | `                </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1406 | `              }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1407 | `              render={(close) => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1408 | `                <CreatedAtEditor` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1409 | `                  value={task.created_at}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1410 | `                  onChange={(v) => { void update({ created_at: v } as Partial<Task>); close(); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1411 | `                />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1412 | `              )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1413 | `            />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1414 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1415 | `        ) : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1416 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1417 | `        {/* Meta rows (empty fields) */}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1418 | `        {isVisible("meta") ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1419 | `        <div className="mt-1 space-y-0.5" style={{ order: orderOf("meta") }}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1420 | `          <CompactRow` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1421 | `            icon={<UserIcon className="h-3 w-3" />}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1422 | `            empty={!assignee}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1423 | `            label={assignee ? (assignee.full_name || assignee.email || "Sem nome") : "Adicionar responsável"}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1424 | `            render={(close) => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1425 | `              <PopoverField label="Responsável">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1426 | `                <Select value={task.assignee_id ?? "none"} onValueChange={(v) => { void update({ assignee_id: v === "none" ? null : v }); close(); }}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1427 | `                  <SelectTrigger className="h-8 text-xs"><SelectValue /></SelectTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1428 | `                  <SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1429 | `                    <SelectItem value="none">Sem responsável</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1430 | `                    {profiles.map((p) => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1431 | `                      <SelectItem key={p.id} value={p.id}>{p.full_name || p.email}</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1432 | `                    ))}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1433 | `                  </SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1434 | `                </Select>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1435 | `              </PopoverField>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1436 | `            )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1437 | `          />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1438 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1439 | `          {!client ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1440 | `            <CompactRow` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1441 | `              icon={<Users className="h-3 w-3" />}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1442 | `              empty` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1443 | `              label="Adicionar cliente"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1444 | `              render={(close) => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1445 | `                <PopoverField label="Cliente">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1446 | `                  <Select value={task.client_id ?? "none"} onValueChange={(v) => { void update({ client_id: v === "none" ? null : v }); close(); }}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1447 | `                    <SelectTrigger className="h-8 text-xs"><SelectValue /></SelectTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1448 | `                    <SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1449 | `                      <SelectItem value="none">Nenhum</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1450 | `                      {clients.map((c) => (<SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>))}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1451 | `                    </SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1452 | `                  </Select>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1453 | `                </PopoverField>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1454 | `              )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1455 | `            />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1456 | `          ) : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1457 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1458 | `          {!dueLabel ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1459 | `            <CompactRow` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1460 | `              icon={<CalendarIcon className="h-3 w-3" />}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1461 | `              empty` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1462 | `              label="Adicionar prazo"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1463 | `              render={(close) => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1464 | `                <DueDateEditor task={task} onChange={(v) => { openDueChange(v); close(); }} />` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1465 | `              )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1466 | `            />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1467 | `          ) : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1468 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1469 | `          {!task.description ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1470 | `            <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1471 | `              type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1472 | `              onPointerDown={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1473 | `              onClick={(e) => { stop(e); setDescEditing(true); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1474 | `              className="flex w-full items-center gap-1.5 rounded px-1 py-0.5 text-left text-[11px] text-muted-foreground/70 hover:bg-muted hover:text-foreground"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1475 | `            >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1476 | `              <AlignLeft className="h-3 w-3" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1477 | `              <span>Adicionar observação</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1478 | `            </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1479 | `          ) : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1480 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1481 | `          {subtasks.filter((s) => !s.comment_id).length === 0 && !addingSubtask ? (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1482 | `            <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1483 | `              type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1484 | `              onPointerDown={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1485 | `              onClick={(e) => { stop(e); setAddingSubtask(true); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1486 | `              className="flex w-full items-center gap-1.5 rounded px-1 py-0.5 text-left text-[11px] text-muted-foreground/70 hover:bg-muted hover:text-foreground"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1487 | `            >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1488 | `              <ListChecks className="h-3 w-3" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1489 | `              <span>Adicionar subtarefa</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1490 | `            </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1491 | `          ) : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1492 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1493 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1494 | `          {/* Upload button */}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1495 | `          <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1496 | `            type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1497 | `            onPointerDown={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1498 | `            onClick={(e) => { stop(e); fileRef.current?.click(); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1499 | `            className="flex w-full items-center gap-1.5 rounded px-1 py-0.5 text-left text-[11px] text-muted-foreground/70 hover:bg-muted hover:text-foreground"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1500 | `          >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1501 | `            <Upload className="h-3 w-3" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1502 | `            <span>Adicionar arquivo</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1503 | `          </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1504 | `          <input` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1505 | `            ref={fileRef}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1506 | `            type="file"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1507 | `            hidden` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1508 | `            onChange={(e) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1509 | `              const f = e.target.files?.[0];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1510 | `              if (f) void uploadFile(f);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 1511 | `              e.target.value = "";` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1512 | `            }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1513 | `          />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1514 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1515 | `        ) : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1516 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1517 | `      </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1518 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1519 | `      <AttachmentPreviewDialog` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1520 | `        open={!!previewAttachment}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1521 | `        onOpenChange={(o) => { if (!o) setPreviewAttachment(null); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1522 | `        attachment={previewAttachment}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1523 | `      />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1524 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1525 | `      {/* Diálogo de justificativa ao mudar prazo */}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1526 | `      <Dialog open={dueChange.open} onOpenChange={(o) => { if (!o) setDueChange({ open: false, pending: null, reason: "" }); }}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1527 | `        <DialogContent onPointerDown={stop} onClick={stop} className="max-w-md">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1528 | `          <DialogHeader>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1529 | `            <DialogTitle className="text-sm">Justificar mudança de prazo</DialogTitle>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1530 | `          </DialogHeader>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1531 | `          <div className="space-y-2 text-xs">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1532 | `            <div className="rounded border bg-muted/50 p-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1533 | `              <p><strong>Prazo anterior:</strong> {task.due_date ? format(new Date(task.due_date), "dd/MM/yyyy HH:mm", { locale: ptBR }) : "—"}</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1534 | `              <p><strong>Novo prazo:</strong> {dueChange.pending ? format(new Date(dueChange.pending), "dd/MM/yyyy HH:mm", { locale: ptBR }) : "—"}</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1535 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1536 | `            <Textarea` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1537 | `              autoFocus` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1538 | `              value={dueChange.reason}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1539 | `              onChange={(e) => setDueChange((c) => ({ ...c, reason: e.target.value }))}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1540 | `              placeholder="Motivo da mudança (opcional)"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1541 | `              className="min-h-[80px] text-sm"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1542 | `            />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1543 | `            <p className="text-[10px] text-muted-foreground">Se não justificar, a mudança será registrada sem motivo.</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1544 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1545 | `          <DialogFooter className="gap-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1546 | `            <Button variant="ghost" size="sm" onClick={() => setDueChange({ open: false, pending: null, reason: "" })}>Cancelar</Button>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1547 | `            <Button variant="outline" size="sm" onClick={() => void confirmDueChange(true)}>Mudar sem justificar</Button>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1548 | `            <Button size="sm" onClick={() => void confirmDueChange(false)}>Salvar</Button>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1549 | `          </DialogFooter>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1550 | `        </DialogContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1551 | `      </Dialog>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1552 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1553 | `      {/* Justificativa mudança prazo subtarefa */}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1554 | `      <Dialog open={subDueReason.open} onOpenChange={(o) => { if (!o) setSubDueReason({ open: false, subtask: null, prev: null, next: null, reason: "" }); }}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1555 | `        <DialogContent onPointerDown={stop} onClick={stop} className="max-w-md">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1556 | `          <DialogHeader>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1557 | `            <DialogTitle className="text-sm">Mudança de prazo da subtarefa</DialogTitle>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1558 | `          </DialogHeader>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1559 | `          <div className="space-y-2 text-xs">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1560 | `            <div className="rounded border bg-muted/50 p-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1561 | `              <p><strong>Subtarefa:</strong> <span dangerouslySetInnerHTML={{ __html: subDueReason.subtask?.title ?? "" }} /></p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1562 | `              <p><strong>Prazo anterior:</strong> {subDueReason.prev ? format(new Date(subDueReason.prev), "dd/MM/yyyy HH:mm", { locale: ptBR }) : "sem prazo"}</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1563 | `              <p><strong>Novo prazo:</strong> {subDueReason.next ? format(new Date(subDueReason.next), "dd/MM/yyyy HH:mm", { locale: ptBR }) : "sem prazo"}</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1564 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1565 | `            <Textarea` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1566 | `              autoFocus` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1567 | `              value={subDueReason.reason}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1568 | `              onChange={(e) => setSubDueReason((c) => ({ ...c, reason: e.target.value }))}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1569 | `              placeholder="Motivo (opcional) — se preenchido aparece no relatório do cliente"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1570 | `              className="min-h-[80px] text-sm"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1571 | `            />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1572 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1573 | `          <DialogFooter className="gap-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1574 | `            <Button variant="ghost" size="sm" onClick={() => setSubDueReason({ open: false, subtask: null, prev: null, next: null, reason: "" })}>Cancelar</Button>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1575 | `            <Button variant="outline" size="sm" onClick={async () => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1576 | `              const st = subDueReason.subtask; if (!st) return;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1577 | `              const nx = subDueReason.next;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1578 | `              setSubDueReason({ open: false, subtask: null, prev: null, next: null, reason: "" });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1579 | `              await applySubtaskDue(st, nx);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 1580 | `            }}>Sem justificativa</Button>` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1581 | `            <Button size="sm" onClick={async () => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1582 | `              const st = subDueReason.subtask; if (!st) return;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1583 | `              const nx = subDueReason.next; const r = subDueReason.reason;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1584 | `              setSubDueReason({ open: false, subtask: null, prev: null, next: null, reason: "" });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1585 | `              await applySubtaskDue(st, nx, r);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 1586 | `            }}>Salvar com motivo</Button>` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1587 | `          </DialogFooter>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1588 | `        </DialogContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1589 | `      </Dialog>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1590 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1591 | `      {/* Histórico de mudanças de prazo */}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1592 | `      <Dialog open={historyOpen} onOpenChange={setHistoryOpen}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1593 | `        <DialogContent onPointerDown={stop} onClick={stop} className="max-w-lg">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1594 | `          <DialogHeader>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1595 | `            <DialogTitle className="flex items-center gap-2 text-sm">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1596 | `              <History className="h-4 w-4" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1597 | `              Histórico de prazos` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1598 | `            </DialogTitle>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1599 | `          </DialogHeader>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1600 | `          {dueHistory.length === 0 ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1601 | `            <p className="py-4 text-center text-sm text-muted-foreground">Nenhuma mudança de prazo registrada.</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1602 | `          ) : (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1603 | `            <ul className="max-h-[60vh] space-y-2 overflow-y-auto">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1604 | `              {dueHistory.map((h) => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1605 | `                <li key={h.id} className="rounded border p-2 text-xs">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1606 | `                  <div className="mb-1 flex items-center justify-between text-[10px] text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1607 | `                    <span>{format(new Date(h.created_at), "dd/MM/yyyy HH:mm", { locale: ptBR })}</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1608 | `                    {h.user_id ? <span>por {profiles.find((p) => p.id === h.user_id)?.full_name ?? "usuário"}</span> : null}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1609 | `                  </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1610 | `                  <p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1611 | `                    <span className="text-muted-foreground">De:</span>{" "}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1612 | `                    <strong>{h.old_due_date ? format(new Date(h.old_due_date), "dd/MM/yyyy HH:mm", { locale: ptBR }) : "sem prazo"}</strong>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1613 | `                  </p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1614 | `                  <p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1615 | `                    <span className="text-muted-foreground">Para:</span>{" "}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1616 | `                    <strong>{h.new_due_date ? format(new Date(h.new_due_date), "dd/MM/yyyy HH:mm", { locale: ptBR }) : "sem prazo"}</strong>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1617 | `                  </p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1618 | `                  <p className="mt-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1619 | `                    <span className="text-muted-foreground">Motivo: </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1620 | `                    {h.reason ? <span>{h.reason}</span> : <em className="text-muted-foreground">não justificado</em>}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1621 | `                  </p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1622 | `                </li>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1623 | `              ))}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1624 | `            </ul>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1625 | `          )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1626 | `        </DialogContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1627 | `      </Dialog>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1628 | `    </>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1629 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1630 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1631 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1632 | `function statusLabel(s: Task["status"]) {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1633 | `  if (!s) return "Sem status";` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 1634 | `  return { todo: "A fazer", in_progress: "Em andamento", review: "Em revisão", done: "Concluída" }[s];` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 1635 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1636 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1637 | `function ChipPopover({` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1638 | `  value,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1639 | `  render,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1640 | `}: {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1641 | `  value: React.ReactNode;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1642 | `  render: (close: () => void) => React.ReactNode;` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1643 | `}) {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1644 | `  const [open, setOpen] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1645 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 1646 | `    <Popover open={open} onOpenChange={setOpen}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1647 | `      <PopoverTrigger asChild>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1648 | `        <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1649 | `          type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1650 | `          onPointerDown={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1651 | `          onClick={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1652 | `          className="inline-flex items-center"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1653 | `        >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1654 | `          {value}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1655 | `        </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1656 | `      </PopoverTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1657 | `      <PopoverContent className="w-64 p-3" onPointerDown={stop} onClick={stop}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1658 | `        {render(() => setOpen(false))}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1659 | `      </PopoverContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1660 | `    </Popover>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1661 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1662 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1663 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1664 | `function CompactRow({` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1665 | `  icon,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1666 | `  label,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1667 | `  empty,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1668 | `  render,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1669 | `}: {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1670 | `  icon: React.ReactNode;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1671 | `  label: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1672 | `  empty?: boolean;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1673 | `  render: (close: () => void) => React.ReactNode;` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1674 | `}) {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1675 | `  const [open, setOpen] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1676 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 1677 | `    <Popover open={open} onOpenChange={setOpen}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1678 | `      <PopoverTrigger asChild>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1679 | `        <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1680 | `          type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1681 | `          onPointerDown={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1682 | `          onClick={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1683 | `          className={cn(` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1684 | `            "flex w-full items-center gap-1.5 rounded px-1 py-0.5 text-left text-[11px] hover:bg-muted",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1685 | `            empty ? "text-muted-foreground/70" : "text-foreground",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1686 | `          )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1687 | `        >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1688 | `          <span className="text-muted-foreground">{icon}</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1689 | `          <span className="truncate">{label}</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1690 | `        </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1691 | `      </PopoverTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1692 | `      <PopoverContent className="w-64 p-3" onPointerDown={stop} onClick={stop}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1693 | `        {render(() => setOpen(false))}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1694 | `      </PopoverContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1695 | `    </Popover>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1696 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1697 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1698 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1699 | `function PopoverField({ label, children }: { label: string; children: React.ReactNode }) {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1700 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 1701 | `    <div className="space-y-1.5">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1702 | `      <p className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">{label}</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1703 | `      {children}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1704 | `    </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1705 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1706 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1707 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1708 | `function SubtaskAssigneePopover({` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1709 | `  profiles,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1710 | `  value,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1711 | `  onChange,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1712 | `}: {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1713 | `  profiles: Profile[];` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1714 | `  value: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1715 | `  onChange: (v: string) => void;` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1716 | `}) {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1717 | `  const [open, setOpen] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1718 | `  const current = profiles.find((p) => p.id === value) ?? null;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1719 | `  const label = current ? (current.full_name || current.email || "Responsável") : "Atribuir";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1720 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 1721 | `    <Popover open={open} onOpenChange={setOpen}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1722 | `      <PopoverTrigger asChild>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1723 | `        <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1724 | `          type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1725 | `          onPointerDown={(e) => e.stopPropagation()}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1726 | `          onClick={(e) => { e.stopPropagation(); setOpen(true); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1727 | `          className={cn(` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1728 | `            "inline-flex shrink-0 items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-medium leading-none ring-1 transition",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1729 | `            current` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1730 | `              ? "bg-primary/10 text-primary ring-primary/30 hover:bg-primary/15"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1731 | `              : "bg-muted text-muted-foreground ring-border hover:bg-muted/70",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1732 | `          )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1733 | `          title={current ? \`Responsável: ${label}\` : "Atribuir responsável"}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1734 | `        >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1735 | `          <UserIcon className="h-2.5 w-2.5" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1736 | `          <span className="max-w-[100px] truncate">{label}</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1737 | `        </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1738 | `      </PopoverTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1739 | `      <PopoverContent` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1740 | `        className="w-56 p-1"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1741 | `        onPointerDown={(e) => e.stopPropagation()}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1742 | `        onClick={(e) => e.stopPropagation()}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1743 | `      >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1744 | `        <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1745 | `          type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1746 | `          onClick={() => { onChange("none"); setOpen(false); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1747 | `          className="flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-xs hover:bg-muted"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1748 | `        >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1749 | `          <span className="grid h-5 w-5 place-items-center rounded-full bg-muted text-[10px]">—</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1750 | `          Ninguém` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1751 | `        </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1752 | `        <div className="my-1 h-px bg-border" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1753 | `        <div className="max-h-56 overflow-y-auto">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1754 | `          {profiles.map((p) => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1755 | `            <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1756 | `              key={p.id}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1757 | `              type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1758 | `              onClick={() => { onChange(p.id); setOpen(false); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1759 | `              className={cn(` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1760 | `                "flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-xs hover:bg-muted",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1761 | `                value === p.id && "bg-primary/10 text-primary",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1762 | `              )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1763 | `            >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1764 | `              <span` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1765 | `                className="grid h-5 w-5 place-items-center rounded-full text-[10px] font-semibold text-white"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1766 | `                style={{ background: p.color || "#64748b" }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1767 | `              >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1768 | `                {(p.full_name || p.email || "?").slice(0, 1).toUpperCase()}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1769 | `              </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1770 | `              <span className="min-w-0 flex-1 truncate">{p.full_name || p.email}</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1771 | `            </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1772 | `          ))}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1773 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1774 | `      </PopoverContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1775 | `    </Popover>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1776 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1777 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1778 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1779 | `function SubtaskDuePopover({` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1780 | `  dueIso,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1781 | `  dueInfo,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1782 | `  onApply,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1783 | `  onClear,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1784 | `}: {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1785 | `  dueIso: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1786 | `  dueInfo: { label: string; cls: string };` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1787 | `  onApply: (iso: string) => void;` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1788 | `  onClear: () => void;` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1789 | `}) {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1790 | `  const [open, setOpen] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1791 | `  const [dateStr, setDateStr] = useState("");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1792 | `  const [timeStr, setTimeStr] = useState("");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1793 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1794 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1795 | `    if (!open) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 1796 | `    if (dueIso) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 1797 | `      const d = new Date(dueIso);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1798 | `      setDateStr(format(d, "yyyy-MM-dd"));` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1799 | `      setTimeStr(d.getHours() !== 0 || d.getMinutes() !== 0 ? format(d, "HH:mm") : "");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1800 | `    } else {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1801 | `      setDateStr("");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1802 | `      setTimeStr("");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1803 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1804 | `  }, [open, dueIso]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1805 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1806 | `  const save = () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1807 | `    if (!dateStr) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 1808 | `      onClear();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1809 | `      setOpen(false);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1810 | `      return;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 1811 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1812 | `    const t = timeStr && /^\d{2}:\d{2}$/.test(timeStr) ? timeStr : "00:00";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1813 | `    onApply(new Date(\`${dateStr}T${t}\`).toISOString());` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1814 | `    setOpen(false);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1815 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1816 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1817 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 1818 | `    <Popover open={open} onOpenChange={setOpen}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1819 | `      <PopoverTrigger asChild>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1820 | `        <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1821 | `          type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1822 | `          onPointerDown={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1823 | `          onClick={stop}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1824 | `          className={cn(` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1825 | `            "inline-flex shrink-0 items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] leading-none transition hover:opacity-90",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1826 | `            dueInfo.cls,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1827 | `          )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1828 | `          title="Editar prazo"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1829 | `        >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1830 | `          <CalendarIcon className="h-2.5 w-2.5" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1831 | `          <span>{dueInfo.label}</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1832 | `        </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1833 | `      </PopoverTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1834 | `      <PopoverContent className="w-64 p-2" onPointerDown={stop} onClick={stop}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1835 | `        <Label className="text-[10px] uppercase tracking-wider text-muted-foreground">Prazo da subtarefa</Label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1836 | `        <div className="mt-1 flex gap-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1837 | `          <Input` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1838 | `            type="date"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1839 | `            value={dateStr}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1840 | `            onChange={(e) => setDateStr(e.target.value)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1841 | `            className="h-8 flex-1 text-xs"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1842 | `          />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1843 | `          <Input` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1844 | `            type="time"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1845 | `            value={timeStr}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1846 | `            onChange={(e) => setTimeStr(e.target.value)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1847 | `            disabled={!dateStr}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1848 | `            className="h-8 w-24 text-xs"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1849 | `            placeholder="opcional"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1850 | `          />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1851 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1852 | `        <p className="mt-1 text-[10px] text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1853 | `          Hora é opcional — deixe em branco para prazo do dia todo.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1854 | `        </p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1855 | `        <div className="mt-2 flex gap-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1856 | `          <Button type="button" size="sm" onClick={save} className="h-7 flex-1 text-xs">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1857 | `            Salvar` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1858 | `          </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1859 | `          {timeStr ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1860 | `            <Button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1861 | `              type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1862 | `              variant="ghost"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1863 | `              size="sm"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1864 | `              onClick={() => setTimeStr("")}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1865 | `              className="h-7 text-xs text-muted-foreground"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1866 | `            >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1867 | `              Sem hora` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1868 | `            </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1869 | `          ) : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1870 | `          {dueIso ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1871 | `            <Button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1872 | `              type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1873 | `              variant="ghost"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1874 | `              size="sm"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1875 | `              onClick={() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1876 | `                onClear();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1877 | `                setOpen(false);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1878 | `              }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1879 | `              className="h-7 text-xs text-muted-foreground"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1880 | `            >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1881 | `              Indefinido` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1882 | `            </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1883 | `          ) : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1884 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1885 | `      </PopoverContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1886 | `    </Popover>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1887 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1888 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1889 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1890 | `function DueDateEditor({ task, onChange }: { task: Task; onChange: (v: string | null) => void }) {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1891 | `  const initial = task.due_date ? new Date(task.due_date) : null;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1892 | `  const pad = (n: number) => String(n).padStart(2, "0");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1893 | `  const toLocalDate = (d: Date) => \`${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}\`;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1894 | `  const toLocalTime = (d: Date) => \`${pad(d.getHours())}:${pad(d.getMinutes())}\`;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1895 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1896 | `  const [dateStr, setDateStr] = useState(initial ? toLocalDate(initial) : "");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1897 | `  const [timeStr, setTimeStr] = useState(` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1898 | `    initial && (initial.getHours() !== 0 || initial.getMinutes() !== 0) ? toLocalTime(initial) : "",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1899 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1900 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1901 | `  const commit = (d: string, t: string) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1902 | `    if (!d) { onChange(null); return; }` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 1903 | `    const [y, m, day] = d.split("-").map(Number);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1904 | `    const [hh, mm] = t ? t.split(":").map(Number) : [0, 0];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1905 | `    const date = new Date(y, m - 1, day, hh, mm, 0, 0);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1906 | `    onChange(date.toISOString());` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1907 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1908 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1909 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 1910 | `    <PopoverField label="Prazo">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1911 | `      <div className="space-y-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1912 | `        <div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1913 | `          <p className="mb-1 text-[10px] text-muted-foreground">Data</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1914 | `          <Input` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1915 | `            type="date"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1916 | `            value={dateStr}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1917 | `            onChange={(e) => setDateStr(e.target.value)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1918 | `            className="h-8 text-xs"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1919 | `          />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1920 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1921 | `        <div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1922 | `          <p className="mb-1 text-[10px] text-muted-foreground">Hora (opcional)</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1923 | `          <Input` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1924 | `            type="time"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1925 | `            value={timeStr}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1926 | `            onChange={(e) => setTimeStr(e.target.value)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1927 | `            disabled={!dateStr}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1928 | `            className="h-8 text-xs"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1929 | `          />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1930 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1931 | `        <div className="flex items-center justify-between gap-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1932 | `          <Button size="sm" variant="ghost" className="h-7 text-xs" onClick={() => { setDateStr(""); setTimeStr(""); onChange(null); }}>Limpar</Button>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1933 | `          <div className="flex gap-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1934 | `            {timeStr && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1935 | `              <Button size="sm" variant="ghost" className="h-7 text-xs" onClick={() => setTimeStr("")}>Sem hora</Button>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1936 | `            )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1937 | `            <Button size="sm" className="h-7 text-xs" onClick={() => commit(dateStr, timeStr)}>Salvar</Button>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1938 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1939 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1940 | `      </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1941 | `    </PopoverField>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1942 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1943 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1944 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1945 | `function CreatedAtEditor({ value, onChange }: { value: string; onChange: (v: string) => void }) {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1946 | `  const initial = new Date(value);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1947 | `  const pad = (n: number) => String(n).padStart(2, "0");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1948 | `  const toLocal = (d: Date) =>` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1949 | `    \`${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}\`;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1950 | `  const [v, setV] = useState(toLocal(initial));` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1951 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 1952 | `    <PopoverField label="Data de criação">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1953 | `      <div className="space-y-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1954 | `        <Input` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1955 | `          type="datetime-local"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1956 | `          value={v}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1957 | `          onChange={(e) => setV(e.target.value)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1958 | `          className="h-8 text-xs"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1959 | `        />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1960 | `        <div className="flex justify-end">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1961 | `          <Button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1962 | `            size="sm"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1963 | `            className="h-7 text-xs"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1964 | `            onClick={() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1965 | `              if (!v) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 1966 | `              const d = new Date(v);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1967 | `              if (isNaN(d.getTime())) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 1968 | `              onChange(d.toISOString());` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1969 | `            }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1970 | `          >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1971 | `            Salvar` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1972 | `          </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1973 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1974 | `      </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1975 | `    </PopoverField>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1976 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1977 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1978 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1979 | `function DescriptionEditor({ initial, onSave }: { initial: string; onSave: (v: string) => void }) {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1980 | `  const [v, setV] = useState(initial);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1981 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 1982 | `    <div className="space-y-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1983 | `      <Textarea` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1984 | `        value={v}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1985 | `        onChange={(e) => setV(e.target.value)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1986 | `        placeholder="Observações..."` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1987 | `        className="min-h-[120px] text-xs"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1988 | `        autoFocus` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1989 | `      />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1990 | `      <div className="flex justify-end">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1991 | `        <Button size="sm" className="h-7 text-xs" onClick={() => onSave(v)}>Salvar</Button>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1992 | `      </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1993 | `    </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1994 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1995 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1996 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
