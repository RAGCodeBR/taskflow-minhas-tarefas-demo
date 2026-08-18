# src/routes/_app/notes.tsx

Tipo: Componente ou rota React em TypeScript.

Este documento foi gerado para estudo e manutencao. Ele preserva o codigo original e explica linha por linha sem alterar o comportamento do sistema publicado.

| Linha | Codigo original | Explicacao |
| ---: | --- | --- |
| 1 | `import { createFileRoute } from "@tanstack/react-router";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 2 | `import { useServerFn } from "@tanstack/react-start";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 3 | `import { useCallback, useEffect, useMemo, useRef, useState } from "react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 4 | `import { supabase } from "@/integrations/supabase/client";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 5 | `import { useAuth } from "@/hooks/use-auth";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 6 | `import { useClients, useTasks } from "@/hooks/use-data";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 7 | `import { Button } from "@/components/ui/button";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 8 | `import { Input } from "@/components/ui/input";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 9 | `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 10 | `import { Card } from "@/components/ui/card";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 11 | `import { Dialog, DialogContent } from "@/components/ui/dialog";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 12 | `import {` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 13 | `  Plus, Trash2, Highlighter, Bold, Italic, Underline, Eraser, NotebookPen, Link2, ExternalLink,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 14 | `  ArrowUp, ArrowDown, Paperclip, FileText, Save, Sparkles, FileDown, Maximize2, Minimize2, Check, Loader2,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 15 | `} from "lucide-react";` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 16 | `import { format, parseISO } from "date-fns";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 17 | `import { ptBR } from "date-fns/locale";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 18 | `import { toast } from "sonner";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 19 | `import { marked } from "marked";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 20 | `import { AttachmentPreviewDialog, type PreviewableAttachment } from "@/components/AttachmentPreviewDialog";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 21 | `import { formatNoteWithAI } from "@/lib/ai-format.functions";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 22 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 23 | `export const Route = createFileRoute("/_app/notes")({` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 24 | `  component: NotesPage,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 25 | `});` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 26 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 27 | `const sb = supabase as any;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 28 | `const PREVIEWABLE_MIME_RE = /^(image\/|video\/|audio\/|text\/)|application\/pdf|json/i;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 29 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 30 | `type SortMode = "manual" | "date_desc" | "date_asc" | "updated_desc" | "title_asc";` | Declara um contrato de tipos TypeScript para deixar os dados mais seguros e previsiveis. |
| 31 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 32 | `interface ClientNote {` | Declara um contrato de tipos TypeScript para deixar os dados mais seguros e previsiveis. |
| 33 | `  id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 34 | `  client_id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 35 | `  title: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 36 | `  content: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 37 | `  content_html: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 38 | `  done: boolean;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 39 | `  position: number;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 40 | `  created_at: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 41 | `  updated_at: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 42 | `  note_date: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 43 | `  task_id: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 44 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 45 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 46 | `interface NoteAttachment {` | Declara um contrato de tipos TypeScript para deixar os dados mais seguros e previsiveis. |
| 47 | `  id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 48 | `  note_id: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 49 | `  file_name: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 50 | `  storage_path: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 51 | `  mime_type: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 52 | `  size_bytes: number | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 53 | `  created_at: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 54 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 55 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 56 | `function escapeHtml(value: string) {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 57 | `  return value` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 58 | `    .replace(/&/g, "&amp;")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 59 | `    .replace(/</g, "&lt;")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 60 | `    .replace(/>/g, "&gt;")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 61 | `    .replace(/"/g, "&quot;")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 62 | `    .replace(/'/g, "&#39;");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 63 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 64 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 65 | `function normalizeNoteHtmlForPdf(rawHtml: string) {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 66 | `  if (typeof window === "undefined") return rawHtml;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 67 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 68 | `  const parser = new DOMParser();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 69 | `  const doc = parser.parseFromString(rawHtml || "", "text/html");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 70 | `  const root = doc.body;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 71 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 72 | `  root.querySelectorAll("script, style, meta, link, title, noscript, iframe, object").forEach((node) => node.remove());` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 73 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 74 | `  root.querySelectorAll<HTMLElement>("*").forEach((el) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 75 | `    const tag = el.tagName.toLowerCase();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 76 | `    const keepBackground = el.style.backgroundColor;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 77 | `    const keepColor = el.style.color;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 78 | `    const keepTextAlign = el.style.textAlign;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 79 | `    const keepFontWeight = el.style.fontWeight;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 80 | `    const keepFontStyle = el.style.fontStyle;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 81 | `    const keepTextDecoration = el.style.textDecoration;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 82 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 83 | `    el.removeAttribute("class");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 84 | `    el.removeAttribute("id");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 85 | `    el.removeAttribute("width");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 86 | `    el.removeAttribute("height");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 87 | `    el.removeAttribute("face");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 88 | `    el.removeAttribute("size");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 89 | `    el.removeAttribute("dir");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 90 | `    el.removeAttribute("data-start");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 91 | `    el.removeAttribute("data-end");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 92 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 93 | `    if (tag !== "a") {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 94 | `      el.removeAttribute("href");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 95 | `      el.removeAttribute("target");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 96 | `      el.removeAttribute("rel");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 97 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 98 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 99 | `    const nextStyle = [` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 100 | `      keepBackground ? \`background-color: ${keepBackground}\` : "",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 101 | `      keepColor ? \`color: ${keepColor}\` : "",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 102 | `      keepTextAlign ? \`text-align: ${keepTextAlign}\` : "",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 103 | `      keepFontWeight && keepFontWeight !== "400" && keepFontWeight !== "normal" ? \`font-weight: ${keepFontWeight}\` : "",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 104 | `      keepFontStyle && keepFontStyle !== "normal" ? \`font-style: ${keepFontStyle}\` : "",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 105 | `      keepTextDecoration && keepTextDecoration !== "none" ? \`text-decoration: ${keepTextDecoration}\` : "",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 106 | `    ].filter(Boolean).join("; ");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 107 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 108 | `    if (nextStyle) el.setAttribute("style", nextStyle);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 109 | `    else el.removeAttribute("style");` | Define o caminho alternativo da condicao anterior. |
| 110 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 111 | `    if (tag === "font") {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 112 | `      const fragment = doc.createDocumentFragment();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 113 | `      while (el.firstChild) fragment.appendChild(el.firstChild);` | Inicia uma repeticao sobre dados ou condicoes. |
| 114 | `      el.replaceWith(fragment);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 115 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 116 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 117 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 118 | `  return root.innerHTML;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 119 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 120 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 121 | `function syncEditorDom(target: HTMLDivElement | null, html: string) {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 122 | `  if (!target || target.innerHTML === html) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 123 | `  target.innerHTML = html;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 124 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 125 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 126 | `function extractTextFromHtml(rawHtml: string) {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 127 | `  if (typeof window === "undefined") return rawHtml;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 128 | `  const doc = new DOMParser().parseFromString(rawHtml || "", "text/html");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 129 | `  return doc.body.textContent ?? "";` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 130 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 131 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 132 | `function openNotePrintPreview({` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 133 | `  title,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 134 | `  dateLabel,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 135 | `  html,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 136 | `}: {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 137 | `  title: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 138 | `  dateLabel: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 139 | `  html: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 140 | `}) {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 141 | `  const popup = window.open("", "_blank");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 142 | `  if (!popup) throw new Error("Não foi possível abrir a nova aba do PDF.");` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 143 | `  const previewCss = \`` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 144 | `    :root {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 145 | `      color-scheme: light;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 146 | `      --page-width: 210mm;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 147 | `      --page-padding-y: 20mm;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 148 | `      --page-padding-x: 18mm;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 149 | `      --surface: #eef1f5;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 150 | `      --paper: #ffffff;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 151 | `      --ink: #1f2937;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 152 | `      --muted: #6b7280;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 153 | `      --rule: #d1d5db;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 154 | `      --accent: #0f172a;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 155 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 156 | `    * { box-sizing: border-box; }` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 157 | `    html, body { margin: 0; padding: 0; background: var(--surface); color: var(--ink); }` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 158 | `    body { font-family: Arial, Helvetica, sans-serif; }` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 159 | `    .preview-shell { min-height: 100vh; padding: 24px; }` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 160 | `    .preview-toolbar {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 161 | `      position: sticky; top: 0; z-index: 5; display: flex; justify-content: center;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 162 | `      padding-bottom: 16px;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 163 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 164 | `    .preview-toolbar-inner {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 165 | `      display: flex; align-items: center; gap: 12px; padding: 10px 14px; border: 1px solid var(--rule);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 166 | `      background: rgba(255,255,255,0.96); backdrop-filter: blur(8px); box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 167 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 168 | `    .toolbar-button {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 169 | `      border: 1px solid var(--rule); background: #fff; color: var(--accent); padding: 10px 14px; cursor: pointer;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 170 | `      font-size: 13px; font-weight: 600;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 171 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 172 | `    .toolbar-note { font-size: 12px; color: var(--muted); }` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 173 | `    .paper {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 174 | `      width: min(100%, calc(var(--page-width) + 36mm)); margin: 0 auto; background: var(--paper);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 175 | `      box-shadow: 0 18px 48px rgba(15, 23, 42, 0.12);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 176 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 177 | `    .paper-inner {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 178 | `      padding: var(--page-padding-y) var(--page-padding-x) calc(var(--page-padding-y) + 2mm);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 179 | `      min-height: 297mm;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 180 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 181 | `    .doc-title {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 182 | `      margin: 0 0 10px; font-size: 28px; line-height: 1.1; font-weight: 700; color: var(--accent);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 183 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 184 | `    .doc-date {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 185 | `      margin: 0 0 22px; padding-bottom: 14px; border-bottom: 1px solid var(--rule); font-size: 13px; color: var(--muted);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 186 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 187 | `    .doc-body, .doc-body * {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 188 | `      max-width: 100%; letter-spacing: 0; word-break: normal; overflow-wrap: break-word;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 189 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 190 | `    .doc-body {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 191 | `      font-family: Georgia, 'Times New Roman', serif; font-size: 13.5pt; line-height: 1.7; color: var(--ink);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 192 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 193 | `    .doc-body h1, .doc-body h2, .doc-body h3, .doc-body h4 {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 194 | `      font-family: Arial, Helvetica, sans-serif; color: var(--accent); line-height: 1.25; break-after: avoid;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 195 | `      margin: 22px 0 10px;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 196 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 197 | `    .doc-body h1 { font-size: 22px; }` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 198 | `    .doc-body h2 { font-size: 18px; }` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 199 | `    .doc-body h3 { font-size: 16px; }` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 200 | `    .doc-body p, .doc-body div { margin: 0 0 12px; }` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 201 | `    .doc-body ul, .doc-body ol { margin: 0 0 14px; padding-left: 24px; }` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 202 | `    .doc-body li { margin-bottom: 6px; }` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 203 | `    .doc-body blockquote {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 204 | `      margin: 16px 0; padding: 0 0 0 14px; border-left: 3px solid #cbd5e1; color: #475569;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 205 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 206 | `    .doc-body table { width: 100%; border-collapse: collapse; margin: 14px 0; }` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 207 | `    .doc-body th, .doc-body td { border: 1px solid var(--rule); padding: 7px 8px; text-align: left; }` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 208 | `    .doc-body img { max-width: 100%; height: auto; }` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 209 | `    .doc-body pre, .doc-body code {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 210 | `      font-family: Consolas, Monaco, monospace; white-space: pre-wrap; word-break: break-word; font-size: 11.5pt;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 211 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 212 | `    .doc-body span[style*="background"] { padding: 0 2px; }` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 213 | `    @page {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 214 | `      size: A4;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 215 | `      margin: 18mm 16mm 20mm;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 216 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 217 | `    @media print {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 218 | `      html, body { background: #fff; }` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 219 | `      .preview-shell { padding: 0; }` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 220 | `      .preview-toolbar { display: none; }` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 221 | `      .paper {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 222 | `        width: auto; margin: 0; box-shadow: none;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 223 | `      }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 224 | `      .paper-inner {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 225 | `        min-height: auto; padding: 0;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 226 | `      }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 227 | `      .doc-title, .doc-date, .doc-body h1, .doc-body h2, .doc-body h3, .doc-body h4,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 228 | `      .doc-body p, .doc-body div, .doc-body ul, .doc-body ol, .doc-body table, .doc-body blockquote, .doc-body pre {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 229 | `        break-inside: avoid-page;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 230 | `      }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 231 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 232 | `  \`;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 233 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 234 | `  popup.document.open();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 235 | `  popup.document.write(\`<!doctype html>` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 236 | `    <html lang="pt-BR">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 237 | `      <head>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 238 | `        <meta charset="utf-8" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 239 | `        <meta name="viewport" content="width=device-width, initial-scale=1" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 240 | `        <title>${escapeHtml(title || "Anotação")}</title>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 241 | `        <style>${previewCss}</style>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 242 | `      </head>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 243 | `      <body>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 244 | `        <div class="preview-shell">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 245 | `          <div class="preview-toolbar">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 246 | `            <div class="preview-toolbar-inner">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 247 | `              <button class="toolbar-button" onclick="window.print()">Imprimir / Salvar em PDF</button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 248 | `              <button class="toolbar-button" onclick="window.close()">Fechar</button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 249 | `              <span class="toolbar-note">Pré-visualização limpa para impressão profissional.</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 250 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 251 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 252 | `          <article class="paper">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 253 | `            <div class="paper-inner">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 254 | `              <h1 class="doc-title">${escapeHtml(title || "Sem título")}</h1>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 255 | `              <p class="doc-date">${escapeHtml(dateLabel)}</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 256 | `              <div class="doc-body">${html}</div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 257 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 258 | `          </article>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 259 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 260 | `        <script>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 261 | `          window.addEventListener('load', () => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 262 | `            setTimeout(() => window.print(), 250);` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 263 | `          });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 264 | `        </script>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 265 | `      </body>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 266 | `    </html>\`);` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 267 | `  popup.document.close();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 268 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 269 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 270 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 271 | `function NotesPage() {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 272 | `  const { user } = useAuth();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 273 | `  const { data: clients = [] } = useClients();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 274 | `  const { data: tasks = [] } = useTasks();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 275 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 276 | `  const [clientId, setClientId] = useState<string | null>(null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 277 | `  const [notes, setNotes] = useState<ClientNote[]>([]);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 278 | `  const [selectedId, setSelectedId] = useState<string | null>(null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 279 | `  const [loading, setLoading] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 280 | `  const [search, setSearch] = useState("");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 281 | `  const [sortMode, setSortMode] = useState<SortMode>(() => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 282 | `    if (typeof window === "undefined") return "manual";` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 283 | `    return (localStorage.getItem("notes_sort_mode") as SortMode) || "manual";` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 284 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 285 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 286 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 287 | `    if (typeof window !== "undefined") localStorage.setItem("notes_sort_mode", sortMode);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 288 | `  }, [sortMode]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 289 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 290 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 291 | `    if (!clientId && clients[0]) setClientId(clients[0].id);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 292 | `  }, [clients, clientId]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 293 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 294 | `  const load = async (cid: string) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 295 | `    setLoading(true);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 296 | `    const { data, error } = await sb` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 297 | `      .from("client_notes")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 298 | `      .select("*")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 299 | `      .eq("client_id", cid)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 300 | `      .order("position", { ascending: true })` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 301 | `      .order("created_at", { ascending: false });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 302 | `    setLoading(false);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 303 | `    if (error) { toast.error(error.message); return; }` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 304 | `    const list = (data ?? []) as ClientNote[];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 305 | `    setNotes(list);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 306 | `    if (list.length && !list.find((n) => n.id === selectedId)) {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 307 | `      setSelectedId(list[0].id);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 308 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 309 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 310 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 311 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 312 | `    if (clientId) void load(clientId);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 313 | `    // eslint-disable-next-line react-hooks/exhaustive-deps` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 314 | `  }, [clientId]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 315 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 316 | `  const addNote = async () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 317 | `    if (!clientId || !user) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 318 | `    const today = new Date().toISOString().slice(0, 10);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 319 | `    const minPos = notes.reduce((m, n) => Math.min(m, n.position), 0);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 320 | `    const { data, error } = await sb.from("client_notes").insert({` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 321 | `      client_id: clientId,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 322 | `      title: "Nova anotação",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 323 | `      content: "",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 324 | `      content_html: "",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 325 | `      note_date: today,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 326 | `      created_by: user.id,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 327 | `      position: minPos - 1,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 328 | `    }).select().single();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 329 | `    if (error) { toast.error(error.message); return; }` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 330 | `    const created = data as ClientNote;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 331 | `    setNotes((n) => [created, ...n]);` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 332 | `    setSelectedId(created.id);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 333 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 334 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 335 | `  const deleteNote = async (id: string) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 336 | `    if (!confirm("Excluir esta anotação?")) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 337 | `    setNotes((n) => n.filter((x) => x.id !== id));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 338 | `    if (selectedId === id) setSelectedId(null);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 339 | `    const { error } = await sb.from("client_notes").delete().eq("id", id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 340 | `    if (error) toast.error(error.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 341 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 342 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 343 | `  const patchNote = (id: string, patch: Partial<ClientNote>) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 344 | `    setNotes((n) => n.map((x) => (x.id === id ? { ...x, ...patch } : x)));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 345 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 346 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 347 | `  const persistNote = async (id: string, patch: Partial<ClientNote>) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 348 | `    const { error } = await sb.from("client_notes").update(patch).eq("id", id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 349 | `    if (error) toast.error(error.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 350 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 351 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 352 | `  const sortedNotes = useMemo(() => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 353 | `    const arr = [...notes];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 354 | `    switch (sortMode) {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 355 | `      case "date_desc":` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 356 | `        arr.sort((a, b) => (b.note_date || "").localeCompare(a.note_date || ""));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 357 | `        break;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 358 | `      case "date_asc":` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 359 | `        arr.sort((a, b) => (a.note_date || "").localeCompare(b.note_date || ""));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 360 | `        break;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 361 | `      case "updated_desc":` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 362 | `        arr.sort((a, b) => (b.updated_at || "").localeCompare(a.updated_at || ""));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 363 | `        break;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 364 | `      case "title_asc":` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 365 | `        arr.sort((a, b) => (a.title || "").localeCompare(b.title || "", "pt-BR"));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 366 | `        break;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 367 | `      case "manual":` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 368 | `      default:` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 369 | `        arr.sort((a, b) => a.position - b.position || b.created_at.localeCompare(a.created_at));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 370 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 371 | `    return arr;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 372 | `  }, [notes, sortMode]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 373 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 374 | `  const filteredNotes = useMemo(() => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 375 | `    const q = search.trim().toLowerCase();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 376 | `    if (!q) return sortedNotes;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 377 | `    return sortedNotes.filter((n) =>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 378 | `      n.title.toLowerCase().includes(q) ||` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 379 | `      (n.content ?? "").toLowerCase().includes(q),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 380 | `    );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 381 | `  }, [sortedNotes, search]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 382 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 383 | `  const move = async (id: string, dir: -1 | 1) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 384 | `    const ordered = [...sortedNotes];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 385 | `    const idx = ordered.findIndex((n) => n.id === id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 386 | `    const swap = idx + dir;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 387 | `    if (idx < 0 || swap < 0 || swap >= ordered.length) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 388 | `    [ordered[idx], ordered[swap]] = [ordered[swap], ordered[idx]];` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 389 | `    const reIndexed = ordered.map((n, i) => ({ ...n, position: i }));` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 390 | `    setNotes(reIndexed);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 391 | `    await Promise.all(` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 392 | `      reIndexed.map((n) => sb.from("client_notes").update({ position: n.position }).eq("id", n.id)),` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 393 | `    );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 394 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 395 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 396 | `  const selected = useMemo(() => notes.find((n) => n.id === selectedId) ?? null, [notes, selectedId]);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 397 | `  const clientTasks = useMemo(` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 398 | `    () => (clientId ? tasks.filter((t) => t.client_id === clientId) : tasks),` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 399 | `    [tasks, clientId],` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 400 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 401 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 402 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 403 | `    <div className="flex h-[calc(100vh-0px)] flex-col">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 404 | `      <header className="border-b bg-background p-4">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 405 | `        <div className="flex flex-wrap items-center justify-between gap-3">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 406 | `          <div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 407 | `            <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 408 | `              <NotebookPen className="h-6 w-6" /> Anotações` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 409 | `            </h1>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 410 | `            <p className="text-sm text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 411 | `              Anotações dedicadas por cliente, com data, grifos, anexos e vínculo a cards do Kanban.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 412 | `            </p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 413 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 414 | `          <div className="flex items-center gap-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 415 | `            <Select value={clientId ?? undefined} onValueChange={(v) => setClientId(v)}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 416 | `              <SelectTrigger className="w-[260px]"><SelectValue placeholder="Selecione um cliente" /></SelectTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 417 | `              <SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 418 | `                {clients.map((c) => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 419 | `              </SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 420 | `            </Select>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 421 | `            <Button onClick={addNote} disabled={!clientId}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 422 | `              <Plus className="mr-1 h-4 w-4" /> Nova anotação` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 423 | `            </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 424 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 425 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 426 | `      </header>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 427 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 428 | `      <div className="grid min-h-0 flex-1 grid-cols-1 gap-0 md:grid-cols-[340px_1fr]">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 429 | `        {/* Lista lateral */}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 430 | `        <aside className="flex min-h-0 flex-col border-r bg-muted/20">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 431 | `          <div className="space-y-2 border-b p-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 432 | `            <Input` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 433 | `              placeholder="Buscar anotação…"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 434 | `              value={search}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 435 | `              onChange={(e) => setSearch(e.target.value)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 436 | `              className="h-8"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 437 | `            />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 438 | `            <div className="flex items-center gap-1.5">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 439 | `              <span className="text-[11px] text-muted-foreground">Ordenar:</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 440 | `              <Select value={sortMode} onValueChange={(v) => setSortMode(v as SortMode)}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 441 | `                <SelectTrigger className="h-7 flex-1 text-xs"><SelectValue /></SelectTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 442 | `                <SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 443 | `                  <SelectItem value="manual">Manual (arrastar)</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 444 | `                  <SelectItem value="date_desc">Data ↓ (mais recente)</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 445 | `                  <SelectItem value="date_asc">Data ↑ (mais antiga)</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 446 | `                  <SelectItem value="updated_desc">Atualizado recente</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 447 | `                  <SelectItem value="title_asc">Título A→Z</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 448 | `                </SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 449 | `              </Select>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 450 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 451 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 452 | `          <div className="min-h-0 flex-1 overflow-y-auto p-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 453 | `            {loading ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 454 | `              <p className="p-4 text-sm text-muted-foreground">Carregando…</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 455 | `            ) : filteredNotes.length === 0 ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 456 | `              <p className="rounded border border-dashed p-6 text-center text-xs text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 457 | `                {clientId ? "Nenhuma anotação ainda." : "Selecione um cliente."}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 458 | `              </p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 459 | `            ) : (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 460 | `              <ul className="space-y-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 461 | `                {filteredNotes.map((n, i) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 462 | `                  const linkedTask = n.task_id ? tasks.find((t) => t.id === n.task_id) : null;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 463 | `                  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 464 | `                    <li key={n.id} className="flex items-stretch gap-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 465 | `                      {sortMode === "manual" && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 466 | `                        <div className="flex flex-col justify-center">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 467 | `                          <Button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 468 | `                            size="icon" variant="ghost" className="h-5 w-5"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 469 | `                            onClick={(e) => { e.stopPropagation(); void move(n.id, -1); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 470 | `                            disabled={i === 0}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 471 | `                            title="Mover para cima"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 472 | `                          >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 473 | `                            <ArrowUp className="h-3 w-3" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 474 | `                          </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 475 | `                          <Button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 476 | `                            size="icon" variant="ghost" className="h-5 w-5"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 477 | `                            onClick={(e) => { e.stopPropagation(); void move(n.id, 1); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 478 | `                            disabled={i === filteredNotes.length - 1}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 479 | `                            title="Mover para baixo"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 480 | `                          >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 481 | `                            <ArrowDown className="h-3 w-3" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 482 | `                          </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 483 | `                        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 484 | `                      )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 485 | `                      <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 486 | `                        type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 487 | `                        onClick={() => setSelectedId(n.id)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 488 | `                        className={\`flex-1 rounded-md border px-3 py-2 text-left transition ${` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 489 | `                          selectedId === n.id` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 490 | `                            ? "border-primary bg-primary/10"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 491 | `                            : "border-transparent hover:bg-muted"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 492 | `                        }\`}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 493 | `                      >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 494 | `                        <div className="flex items-center justify-between gap-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 495 | `                          <p className="line-clamp-1 text-sm font-medium">{n.title || "(sem título)"}</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 496 | `                          <span className="shrink-0 text-[10px] text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 497 | `                            {n.note_date ? format(parseISO(n.note_date), "dd/MM", { locale: ptBR }) : ""}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 498 | `                          </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 499 | `                        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 500 | `                        {linkedTask && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 501 | `                          <p className="mt-0.5 line-clamp-1 text-[10px] text-primary">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 502 | `                            <Link2 className="mr-0.5 inline h-3 w-3" />{linkedTask.title}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 503 | `                          </p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 504 | `                        )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 505 | `                        <p` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 506 | `                          className="mt-1 line-clamp-2 text-[11px] text-muted-foreground"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 507 | `                          dangerouslySetInnerHTML={{` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 508 | `                            __html: (n.content_html || n.content || "").replace(/<[^>]+>/g, " "),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 509 | `                          }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 510 | `                        />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 511 | `                      </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 512 | `                    </li>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 513 | `                  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 514 | `                })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 515 | `              </ul>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 516 | `            )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 517 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 518 | `        </aside>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 519 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 520 | `        {/* Editor */}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 521 | `        <section className="min-h-0 overflow-y-auto p-4">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 522 | `          {selected ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 523 | `            <NoteEditor` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 524 | `              key={selected.id}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 525 | `              note={selected}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 526 | `              tasks={clientTasks}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 527 | `              onPatch={(p) => patchNote(selected.id, p)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 528 | `              onSave={(p) => persistNote(selected.id, p)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 529 | `              onDelete={() => deleteNote(selected.id)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 530 | `            />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 531 | `          ) : (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 532 | `            <Card className="grid h-full place-items-center p-10 text-center text-sm text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 533 | `              Selecione ou crie uma anotação.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 534 | `            </Card>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 535 | `          )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 536 | `        </section>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 537 | `      </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 538 | `    </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 539 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 540 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 541 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 542 | `function NoteEditor({` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 543 | `  note, tasks, onPatch, onSave, onDelete,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 544 | `}: {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 545 | `  note: ClientNote;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 546 | `  tasks: { id: string; title: string }[];` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 547 | `  onPatch: (p: Partial<ClientNote>) => void;` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 548 | `  onSave: (p: Partial<ClientNote>) => Promise<void>;` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 549 | `  onDelete: () => void;` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 550 | `}) {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 551 | `  const { user } = useAuth();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 552 | `  const aiFormat = useServerFn(formatNoteWithAI);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 553 | `  const [title, setTitle] = useState(note.title);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 554 | `  const [noteDate, setNoteDate] = useState(note.note_date ?? new Date().toISOString().slice(0, 10));` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 555 | `  const [taskId, setTaskId] = useState<string | null>(note.task_id ?? null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 556 | `  const editorRef = useRef<HTMLDivElement>(null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 557 | `  const fsEditorRef = useRef<HTMLDivElement>(null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 558 | `  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 559 | `  const pendingPatch = useRef<Partial<ClientNote>>({});` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 560 | `  const syncingRef = useRef(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 561 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 562 | `  const [saveState, setSaveState] = useState<"idle" | "dirty" | "saving" | "saved">("idle");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 563 | `  const [fullscreen, setFullscreen] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 564 | `  const [aiLoading, setAiLoading] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 565 | `  const [editorHtml, setEditorHtml] = useState(note.content_html ?? note.content ?? "");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 566 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 567 | `  const [attachments, setAttachments] = useState<NoteAttachment[]>([]);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 568 | `  const [attUrls, setAttUrls] = useState<Record<string, string>>({});` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 569 | `  const [uploading, setUploading] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 570 | `  const [preview, setPreview] = useState<PreviewableAttachment | null>(null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 571 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 572 | `  const setEditorsHTML = useCallback((html: string) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 573 | `    syncingRef.current = true;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 574 | `    setEditorHtml(html);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 575 | `    syncEditorDom(editorRef.current, html);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 576 | `    syncEditorDom(fsEditorRef.current, html);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 577 | `    requestAnimationFrame(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 578 | `      syncingRef.current = false;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 579 | `    });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 580 | `  }, []);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 581 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 582 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 583 | `    setEditorsHTML(note.content_html ?? note.content ?? "");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 584 | `    setTitle(note.title);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 585 | `    setNoteDate(note.note_date ?? new Date().toISOString().slice(0, 10));` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 586 | `    setTaskId(note.task_id ?? null);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 587 | `    pendingPatch.current = {};` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 588 | `    setSaveState("idle");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 589 | `    // eslint-disable-next-line react-hooks/exhaustive-deps` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 590 | `  }, [note.id]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 591 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 592 | `  // Sync between main editor and focus-mode editor when toggling fullscreen` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 593 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 594 | `    if (fullscreen) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 595 | `      const html = editorHtml || editorRef.current?.innerHTML || note.content_html || note.content || "";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 596 | `      requestAnimationFrame(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 597 | `        syncEditorDom(fsEditorRef.current, html);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 598 | `      });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 599 | `    } else {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 600 | `      syncEditorDom(editorRef.current, editorHtml || fsEditorRef.current?.innerHTML || "");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 601 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 602 | `    // eslint-disable-next-line react-hooks/exhaustive-deps` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 603 | `  }, [fullscreen, editorHtml]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 604 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 605 | `  const loadAttachments = async () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 606 | `    const { data, error } = await sb` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 607 | `      .from("client_note_attachments")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 608 | `      .select("*")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 609 | `      .eq("note_id", note.id)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 610 | `      .order("created_at", { ascending: true });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 611 | `    if (error) { toast.error(error.message); return; }` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 612 | `    const list = (data ?? []) as NoteAttachment[];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 613 | `    setAttachments(list);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 614 | `    const next: Record<string, string> = {};` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 615 | `    await Promise.all(list.map(async (a) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 616 | `      const { data: signed } = await supabase.storage` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 617 | `        .from("task-attachments").createSignedUrl(a.storage_path, 3600);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 618 | `      if (signed) next[a.id] = signed.signedUrl;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 619 | `    }));` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 620 | `    setAttUrls(next);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 621 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 622 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 623 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 624 | `    void loadAttachments();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 625 | `    // eslint-disable-next-line react-hooks/exhaustive-deps` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 626 | `  }, [note.id]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 627 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 628 | `  const doSave = useCallback(async () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 629 | `    const patch = pendingPatch.current;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 630 | `    if (!Object.keys(patch).length) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 631 | `    pendingPatch.current = {};` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 632 | `    setSaveState("saving");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 633 | `    try {` | Inicia bloco protegido para capturar erros durante a execucao. |
| 634 | `      await onSave(patch);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 635 | `      setSaveState("saved");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 636 | `      setTimeout(() => setSaveState((s) => (s === "saved" ? "idle" : s)), 1500);` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 637 | `    } catch (e: any) {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 638 | `      setSaveState("dirty");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 639 | `      toast.error(e?.message ?? "Falha ao salvar");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 640 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 641 | `  }, [onSave]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 642 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 643 | `  const queueSave = useCallback((patch: Partial<ClientNote>) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 644 | `    onPatch(patch);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 645 | `    pendingPatch.current = { ...pendingPatch.current, ...patch };` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 646 | `    setSaveState("dirty");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 647 | `    if (saveTimer.current) clearTimeout(saveTimer.current);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 648 | `    saveTimer.current = setTimeout(() => { void doSave(); }, 800);` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 649 | `  }, [onPatch, doSave]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 650 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 651 | `  const flushNow = useCallback((patch?: Partial<ClientNote>) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 652 | `    if (saveTimer.current) clearTimeout(saveTimer.current);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 653 | `    if (patch) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 654 | `      onPatch(patch);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 655 | `      pendingPatch.current = { ...pendingPatch.current, ...patch };` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 656 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 657 | `    void doSave();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 658 | `  }, [doSave, onPatch]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 659 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 660 | `  // Save on unmount / before unload` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 661 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 662 | `    const handler = (e: BeforeUnloadEvent) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 663 | `      if (saveState === "dirty" || saveState === "saving" || Object.keys(pendingPatch.current).length) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 664 | `        e.preventDefault();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 665 | `        e.returnValue = "";` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 666 | `      }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 667 | `    };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 668 | `    window.addEventListener("beforeunload", handler);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 669 | `    return () => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 670 | `      window.removeEventListener("beforeunload", handler);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 671 | `      if (saveTimer.current) clearTimeout(saveTimer.current);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 672 | `      if (Object.keys(pendingPatch.current).length) void doSave();` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 673 | `    };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 674 | `  }, [doSave, saveState]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 675 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 676 | `  // Ctrl+S manual save` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 677 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 678 | `    const onKey = (e: KeyboardEvent) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 679 | `      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 680 | `        e.preventDefault();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 681 | `        flushNow();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 682 | `      }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 683 | `    };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 684 | `    window.addEventListener("keydown", onKey);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 685 | `    return () => window.removeEventListener("keydown", onKey);` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 686 | `  }, [flushNow]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 687 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 688 | `  const getActiveEditor = () => (fullscreen ? fsEditorRef.current : editorRef.current);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 689 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 690 | `  const applyEditorChange = useCallback((html: string, flush = false) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 691 | `    setEditorsHTML(html);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 692 | `    const text = extractTextFromHtml(html);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 693 | `    if (flush) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 694 | `      flushNow({ content_html: html, content: text });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 695 | `      return;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 696 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 697 | `    queueSave({ content_html: html, content: text });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 698 | `  }, [flushNow, queueSave, setEditorsHTML]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 699 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 700 | `  const exec = (cmd: string, value?: string) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 701 | `    const ed = getActiveEditor();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 702 | `    ed?.focus();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 703 | `    document.execCommand(cmd, false, value);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 704 | `    const html = ed?.innerHTML ?? "";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 705 | `    applyEditorChange(html);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 706 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 707 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 708 | `  const onEditorInput = (which: "main" | "fs") => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 709 | `    if (syncingRef.current) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 710 | `    const ed = which === "fs" ? fsEditorRef.current : editorRef.current;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 711 | `    const html = ed?.innerHTML ?? "";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 712 | `    applyEditorChange(html);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 713 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 714 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 715 | `  // Smart paste: prefer HTML; if only plain text and looks like markdown, convert` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 716 | `  const onPaste = (e: React.ClipboardEvent<HTMLDivElement>) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 717 | `    const cd = e.clipboardData;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 718 | `    const html = cd.getData("text/html");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 719 | `    const text = cd.getData("text/plain");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 720 | `    if (html && html.trim()) return; // browser default keeps formatting` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 721 | `    if (!text) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 722 | `    const looksLikeMarkdown = /(^|\n)\s*(#{1,6}\s|[-*+]\s|\d+\.\s|>\s|\`\`\`)|\*\*[^*]+\*\*|\`[^\`]+\`|\[[^\]]+\]\(/.test(text);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 723 | `    if (!looksLikeMarkdown) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 724 | `    e.preventDefault();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 725 | `    const converted = String(marked.parse(text, { breaks: true, async: false }));` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 726 | `    document.execCommand("insertHTML", false, converted);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 727 | `    const ed = getActiveEditor();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 728 | `    if (ed) applyEditorChange(ed.innerHTML);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 729 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 730 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 731 | `  const runAIFormat = async () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 732 | `    const ed = getActiveEditor();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 733 | `    const html = ed?.innerHTML ?? "";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 734 | `    if (!html.trim()) { toast.info("Escreva algo primeiro."); return; }` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 735 | `    setAiLoading(true);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 736 | `    try {` | Inicia bloco protegido para capturar erros durante a execucao. |
| 737 | `      const res = await aiFormat({ data: { html, title } });` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 738 | `      applyEditorChange(res.html, true);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 739 | `      toast.success("Texto reformatado pela IA.");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 740 | `    } catch (e: any) {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 741 | `      toast.error(e?.message ?? "Falha ao reformatar.");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 742 | `    } finally {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 743 | `      setAiLoading(false);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 744 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 745 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 746 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 747 | `  const exportPDF = () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 748 | `    const html = normalizeNoteHtmlForPdf(editorHtml || getActiveEditor()?.innerHTML || "");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 749 | `    const dateLabel = noteDate ? format(parseISO(noteDate), "dd 'de' MMMM 'de' yyyy", { locale: ptBR }) : "";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 750 | `    Promise.resolve().then(() => openNotePrintPreview({ title: title || "Sem título", dateLabel, html })).catch((error: any) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 751 | `      toast.error(error?.message ?? "Falha ao gerar PDF.");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 752 | `    });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 753 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 754 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 755 | `  const onUpload = async (fl: FileList | null) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 756 | `    if (!fl || !fl.length || !user) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 757 | `    setUploading(true);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 758 | `    for (const file of Array.from(fl)) {` | Inicia uma repeticao sobre dados ou condicoes. |
| 759 | `      const safe = file.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9._-]+/g, "_");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 760 | `      const path = \`notes/${note.id}/${Date.now()}_${safe}\`;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 761 | `      const { error: upErr } = await supabase.storage.from("task-attachments").upload(path, file);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 762 | `      if (upErr) { toast.error(upErr.message); continue; }` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 763 | `      const { error: insErr } = await sb.from("client_note_attachments").insert({` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 764 | `        note_id: note.id,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 765 | `        file_name: file.name,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 766 | `        storage_path: path,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 767 | `        mime_type: file.type,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 768 | `        size_bytes: file.size,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 769 | `        uploaded_by: user.id,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 770 | `      });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 771 | `      if (insErr) toast.error(insErr.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 772 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 773 | `    setUploading(false);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 774 | `    void loadAttachments();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 775 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 776 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 777 | `  const removeAttachment = async (a: NoteAttachment) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 778 | `    if (!confirm(\`Excluir "${a.file_name}"?\`)) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 779 | `    await supabase.storage.from("task-attachments").remove([a.storage_path]);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 780 | `    await sb.from("client_note_attachments").delete().eq("id", a.id);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 781 | `    void loadAttachments();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 782 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 783 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 784 | `  const openAttachment = (a: NoteAttachment) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 785 | `    const canPreview = PREVIEWABLE_MIME_RE.test(a.mime_type ?? "");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 786 | `    if (canPreview) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 787 | `      setPreview({ file_name: a.file_name, storage_path: a.storage_path, mime_type: a.mime_type });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 788 | `      return;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 789 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 790 | `    const u = attUrls[a.id];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 791 | `    if (u) window.open(u, "_blank", "noopener,noreferrer");` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 792 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 793 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 794 | `  const linkedTask = taskId ? tasks.find((t) => t.id === taskId) : null;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 795 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 796 | `  const SaveBadge = (` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 797 | `    <span` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 798 | `      className={\`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] ${` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 799 | `        saveState === "saved" ? "bg-green-500/15 text-green-600 dark:text-green-400" :` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 800 | `        saveState === "saving" ? "bg-blue-500/15 text-blue-600 dark:text-blue-400" :` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 801 | `        saveState === "dirty" ? "bg-amber-500/15 text-amber-700 dark:text-amber-400" :` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 802 | `        "bg-muted text-muted-foreground"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 803 | `      }\`}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 804 | `      title="Estado do salvamento"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 805 | `    >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 806 | `      {saveState === "saving" ? <Loader2 className="h-3 w-3 animate-spin" /> :` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 807 | `       saveState === "saved" ? <Check className="h-3 w-3" /> :` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 808 | `       saveState === "dirty" ? <span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> :` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 809 | `       <Check className="h-3 w-3 opacity-60" />}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 810 | `      {saveState === "saving" ? "Salvando…" :` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 811 | `       saveState === "saved" ? "Salvo" :` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 812 | `       saveState === "dirty" ? "Não salvo" : "Salvo"}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 813 | `    </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 814 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 815 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 816 | `  const Toolbar = (` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 817 | `    <div className="flex flex-wrap items-center gap-1 rounded-md border bg-muted/30 p-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 818 | `      <Button type="button" variant="ghost" size="sm" onClick={() => exec("bold")} title="Negrito (Ctrl+B)">` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 819 | `        <Bold className="h-4 w-4" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 820 | `      </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 821 | `      <Button type="button" variant="ghost" size="sm" onClick={() => exec("italic")} title="Itálico (Ctrl+I)">` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 822 | `        <Italic className="h-4 w-4" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 823 | `      </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 824 | `      <Button type="button" variant="ghost" size="sm" onClick={() => exec("underline")} title="Sublinhado">` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 825 | `        <Underline className="h-4 w-4" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 826 | `      </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 827 | `      <div className="mx-1 h-5 w-px bg-border" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 828 | `      <Button type="button" variant="ghost" size="sm" onClick={() => exec("hiliteColor", "#fde047")} title="Grifar amarelo" className="text-yellow-700 dark:text-yellow-400">` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 829 | `        <Highlighter className="h-4 w-4" /><span className="ml-1 text-xs">Amarelo</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 830 | `      </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 831 | `      <Button type="button" variant="ghost" size="sm" onClick={() => exec("hiliteColor", "#86efac")} title="Grifar verde" className="text-green-700 dark:text-green-400">` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 832 | `        <Highlighter className="h-4 w-4" /><span className="ml-1 text-xs">Verde</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 833 | `      </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 834 | `      <Button type="button" variant="ghost" size="sm" onClick={() => exec("hiliteColor", "#fca5a5")} title="Grifar vermelho" className="text-red-700 dark:text-red-400">` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 835 | `        <Highlighter className="h-4 w-4" /><span className="ml-1 text-xs">Vermelho</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 836 | `      </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 837 | `      <Button type="button" variant="ghost" size="sm" onClick={() => exec("hiliteColor", "#93c5fd")} title="Grifar azul" className="text-blue-700 dark:text-blue-400">` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 838 | `        <Highlighter className="h-4 w-4" /><span className="ml-1 text-xs">Azul</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 839 | `      </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 840 | `      <Button type="button" variant="ghost" size="sm" onClick={() => exec("hiliteColor", "transparent")} title="Limpar grifo">` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 841 | `        <Eraser className="h-4 w-4" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 842 | `      </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 843 | `      <div className="mx-1 h-5 w-px bg-border" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 844 | `      <Button type="button" variant="ghost" size="sm" onClick={runAIFormat} disabled={aiLoading} title="Reformatar texto com IA">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 845 | `        {aiLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 846 | `        <span className="ml-1 text-xs">Auto-ajuste</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 847 | `      </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 848 | `      <Button type="button" variant="ghost" size="sm" onClick={exportPDF} title="Gerar PDF em nova aba">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 849 | `        <FileDown className="h-4 w-4" /><span className="ml-1 text-xs">PDF</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 850 | `      </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 851 | `      <Button type="button" variant="ghost" size="sm" onClick={() => setFullscreen((v) => !v)} title="Modo foco (tela cheia)">` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 852 | `        {fullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 853 | `        <span className="ml-1 text-xs">{fullscreen ? "Sair" : "Foco"}</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 854 | `      </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 855 | `      <div className="ml-auto flex items-center gap-2 pr-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 856 | `        {SaveBadge}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 857 | `        <Button type="button" size="sm" onClick={() => flushNow()} disabled={saveState === "saving"}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 858 | `          <Save className="mr-1 h-4 w-4" /> Salvar` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 859 | `        </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 860 | `      </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 861 | `    </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 862 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 863 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 864 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 865 | `    <>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 866 | `      <Card className="mx-auto flex h-full max-w-4xl flex-col overflow-hidden">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 867 | `        <div className="space-y-3 border-b p-4">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 868 | `          <div className="flex items-start gap-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 869 | `            <Input` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 870 | `              value={title}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 871 | `              onChange={(e) => { setTitle(e.target.value); queueSave({ title: e.target.value }); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 872 | `              onBlur={() => flushNow({ title })}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 873 | `              placeholder="Título da anotação"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 874 | `              className="h-11 flex-1 border-0 px-1 text-xl font-semibold shadow-none focus-visible:ring-0"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 875 | `            />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 876 | `            <Button variant="ghost" size="icon" className="text-destructive" onClick={onDelete}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 877 | `              <Trash2 className="h-4 w-4" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 878 | `            </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 879 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 880 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 881 | `          <div className="flex flex-wrap items-center gap-2 text-sm">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 882 | `            <label className="flex items-center gap-1.5">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 883 | `              <span className="text-xs text-muted-foreground">Data:</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 884 | `              <Input` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 885 | `                type="date"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 886 | `                value={noteDate}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 887 | `                onChange={(e) => { setNoteDate(e.target.value); flushNow({ note_date: e.target.value }); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 888 | `                className="h-8 w-[160px]"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 889 | `              />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 890 | `            </label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 891 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 892 | `            <label className="flex items-center gap-1.5">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 893 | `              <span className="text-xs text-muted-foreground">Card:</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 894 | `              <Select` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 895 | `                value={taskId ?? "__none__"}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 896 | `                onValueChange={(v) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 897 | `                  const next = v === "__none__" ? null : v;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 898 | `                  setTaskId(next);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 899 | `                  flushNow({ task_id: next });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 900 | `                }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 901 | `              >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 902 | `                <SelectTrigger className="h-8 w-[260px]">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 903 | `                  <SelectValue placeholder="Vincular a um card…" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 904 | `                </SelectTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 905 | `                <SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 906 | `                  <SelectItem value="__none__">— Nenhum —</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 907 | `                  {tasks.map((t) => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 908 | `                    <SelectItem key={t.id} value={t.id}>{t.title}</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 909 | `                  ))}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 910 | `                </SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 911 | `              </Select>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 912 | `            </label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 913 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 914 | `            {linkedTask && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 915 | `              <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 916 | `                <Link2 className="h-3 w-3" /> {linkedTask.title}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 917 | `                <ExternalLink className="h-3 w-3 opacity-60" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 918 | `              </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 919 | `            )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 920 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 921 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 922 | `          {Toolbar}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 923 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 924 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 925 | `        <div className="min-h-0 flex-1 overflow-y-auto p-6">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 926 | `          <div` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 927 | `            ref={editorRef}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 928 | `            contentEditable` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 929 | `            suppressContentEditableWarning` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 930 | `            onInput={() => onEditorInput("main")}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 931 | `            onPaste={onPaste}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 932 | `            onBlur={() => flushNow({` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 933 | `              content_html: editorRef.current?.innerHTML ?? "",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 934 | `              content: editorRef.current?.innerText ?? "",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 935 | `            })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 936 | `            className="prose prose-sm dark:prose-invert min-h-[360px] max-w-none rounded-md border border-dashed bg-background p-5 text-base leading-relaxed outline-none transition focus:border-primary focus:bg-card focus:shadow-lg focus:ring-2 focus:ring-primary/30"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 937 | `            data-placeholder="Escreva sua anotação aqui… (Ctrl+S para salvar, botão Foco para tela cheia)"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 938 | `          />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 939 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 940 | `          {/* Anexos */}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 941 | `          <div className="mt-6 space-y-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 942 | `            <div className="flex items-center justify-between">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 943 | `              <h3 className="flex items-center gap-2 text-sm font-semibold">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 944 | `                <Paperclip className="h-4 w-4" /> Anexos` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 945 | `                <span className="text-xs font-normal text-muted-foreground">({attachments.length})</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 946 | `              </h3>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 947 | `              <label className="cursor-pointer">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 948 | `                <input` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 949 | `                  type="file"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 950 | `                  multiple` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 951 | `                  accept="*/*"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 952 | `                  className="hidden"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 953 | `                  onChange={(e) => { void onUpload(e.target.files); e.currentTarget.value = ""; }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 954 | `                />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 955 | `                <span className="inline-flex items-center rounded-md border bg-background px-3 py-1 text-xs hover:bg-muted">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 956 | `                  {uploading ? "Enviando…" : "+ Adicionar arquivo"}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 957 | `                </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 958 | `              </label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 959 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 960 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 961 | `            {attachments.length === 0 ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 962 | `              <p className="rounded border border-dashed p-4 text-center text-xs text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 963 | `                Nenhum anexo. Aceita qualquer tipo (imagens, PDF, Word, Excel, etc.).` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 964 | `              </p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 965 | `            ) : (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 966 | `              <ul className="space-y-1.5">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 967 | `                {attachments.map((a) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 968 | `                  const isImage = a.mime_type?.startsWith("image/");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 969 | `                  const canPreview = PREVIEWABLE_MIME_RE.test(a.mime_type ?? "");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 970 | `                  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 971 | `                    <li key={a.id} className="flex items-center gap-2 rounded-md border bg-card p-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 972 | `                      <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 973 | `                        type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 974 | `                        onClick={() => openAttachment(a)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 975 | `                        className="h-10 w-10 shrink-0 overflow-hidden rounded border bg-muted"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 976 | `                        title={a.file_name}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 977 | `                      >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 978 | `                        {isImage && attUrls[a.id] ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 979 | `                          <img src={attUrls[a.id]} alt={a.file_name} className="h-full w-full object-cover" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 980 | `                        ) : (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 981 | `                          <div className="flex h-full w-full items-center justify-center text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 982 | `                            {canPreview ? <FileText className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 983 | `                          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 984 | `                        )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 985 | `                      </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 986 | `                      <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 987 | `                        type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 988 | `                        onClick={() => openAttachment(a)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 989 | `                        className="flex min-w-0 flex-1 flex-col text-left"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 990 | `                      >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 991 | `                        <span className="truncate text-sm">{a.file_name}</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 992 | `                        <span className="text-[11px] text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 993 | `                          {a.mime_type || "arquivo"}{a.size_bytes ? \` · ${Math.round(a.size_bytes / 1024)} KB\` : ""}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 994 | `                        </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 995 | `                      </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 996 | `                      <Button size="sm" variant="ghost" onClick={() => openAttachment(a)}>Abrir</Button>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 997 | `                      <Button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 998 | `                        size="icon" variant="ghost" className="h-8 w-8 text-destructive"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 999 | `                        onClick={() => void removeAttachment(a)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1000 | `                        title="Excluir"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1001 | `                      >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1002 | `                        <Trash2 className="h-4 w-4" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1003 | `                      </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1004 | `                    </li>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1005 | `                  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1006 | `                })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1007 | `              </ul>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1008 | `            )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1009 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1010 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1011 | `          <p className="mt-4 text-[11px] text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1012 | `            Atualizado em {format(new Date(note.updated_at), "dd MMM yyyy 'às' HH:mm", { locale: ptBR })}.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1013 | `          </p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1014 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1015 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1016 | `        <AttachmentPreviewDialog` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1017 | `          open={!!preview}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1018 | `          onOpenChange={(o) => { if (!o) setPreview(null); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1019 | `          attachment={preview}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1020 | `        />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1021 | `      </Card>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1022 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1023 | `      {/* Fullscreen / Focus mode */}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1024 | `      <Dialog open={fullscreen} onOpenChange={setFullscreen}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1025 | `        <DialogContent className="flex h-[96vh] max-h-[96vh] w-[96vw] max-w-[1100px] flex-col gap-3 p-4">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1026 | `          <div className="flex items-center gap-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1027 | `            <Input` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1028 | `              value={title}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1029 | `              onChange={(e) => { setTitle(e.target.value); queueSave({ title: e.target.value }); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1030 | `              placeholder="Título da anotação"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1031 | `              className="h-11 flex-1 border-0 px-1 text-2xl font-bold shadow-none focus-visible:ring-0"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1032 | `            />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1033 | `            <span className="text-xs text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1034 | `              {noteDate ? format(parseISO(noteDate), "dd 'de' MMM yyyy", { locale: ptBR }) : ""}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1035 | `            </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1036 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1037 | `          {Toolbar}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1038 | `          <div` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1039 | `            ref={fsEditorRef}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1040 | `            contentEditable` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1041 | `            suppressContentEditableWarning` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1042 | `            onInput={() => onEditorInput("fs")}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1043 | `            onPaste={onPaste}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1044 | `            onBlur={() => flushNow({` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1045 | `              content_html: fsEditorRef.current?.innerHTML ?? "",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1046 | `              content: fsEditorRef.current?.innerText ?? "",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1047 | `            })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1048 | `            className="prose dark:prose-invert min-h-0 flex-1 max-w-none overflow-y-auto rounded-md border bg-background p-8 text-lg leading-relaxed outline-none focus:ring-2 focus:ring-primary/30"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1049 | `            data-placeholder="Modo foco — escreva à vontade…"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1050 | `          />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1051 | `        </DialogContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1052 | `      </Dialog>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1053 | `    </>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1054 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1055 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1056 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1057 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
