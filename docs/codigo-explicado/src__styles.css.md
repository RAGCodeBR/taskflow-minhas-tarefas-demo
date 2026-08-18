# src/styles.css

Tipo: Folha de estilos CSS.

Este documento foi gerado para estudo e manutencao. Ele preserva o codigo original e explica linha por linha sem alterar o comportamento do sistema publicado.

| Linha | Codigo original | Explicacao |
| ---: | --- | --- |
| 1 | `@import "tailwindcss" source(none);` | Importa estilos externos ou camadas usadas pela aplicacao. |
| 2 | `@source "../src";` | Participa da definicao visual da interface. |
| 3 | `@import "tw-animate-css";` | Importa estilos externos ou camadas usadas pela aplicacao. |
| 4 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 5 | `@custom-variant dark (&:is(.dark *));` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 6 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 7 | `@theme inline {` | Inicia um bloco de regras CSS para o seletor indicado. |
| 8 | `  --radius-sm: calc(var(--radius) - 4px);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 9 | `  --radius-md: calc(var(--radius) - 2px);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 10 | `  --radius-lg: var(--radius);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 11 | `  --radius-xl: calc(var(--radius) + 4px);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 12 | `  --radius-2xl: calc(var(--radius) + 8px);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 13 | `  --color-background: var(--background);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 14 | `  --color-foreground: var(--foreground);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 15 | `  --color-card: var(--card);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 16 | `  --color-card-foreground: var(--card-foreground);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 17 | `  --color-popover: var(--popover);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 18 | `  --color-popover-foreground: var(--popover-foreground);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 19 | `  --color-primary: var(--primary);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 20 | `  --color-primary-foreground: var(--primary-foreground);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 21 | `  --color-primary-glow: var(--primary-glow);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 22 | `  --color-secondary: var(--secondary);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 23 | `  --color-secondary-foreground: var(--secondary-foreground);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 24 | `  --color-muted: var(--muted);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 25 | `  --color-muted-foreground: var(--muted-foreground);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 26 | `  --color-accent: var(--accent);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 27 | `  --color-accent-foreground: var(--accent-foreground);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 28 | `  --color-destructive: var(--destructive);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 29 | `  --color-destructive-foreground: var(--destructive-foreground);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 30 | `  --color-success: var(--success);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 31 | `  --color-warning: var(--warning);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 32 | `  --color-info: var(--info);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 33 | `  --color-border: var(--border);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 34 | `  --color-input: var(--input);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 35 | `  --color-ring: var(--ring);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 36 | `  --color-sidebar: var(--sidebar);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 37 | `  --color-sidebar-foreground: var(--sidebar-foreground);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 38 | `  --color-sidebar-primary: var(--sidebar-primary);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 39 | `  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 40 | `  --color-sidebar-accent: var(--sidebar-accent);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 41 | `  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 42 | `  --color-sidebar-border: var(--sidebar-border);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 43 | `  --color-sidebar-ring: var(--sidebar-ring);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 44 | `  --color-chart-1: var(--chart-1);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 45 | `  --color-chart-2: var(--chart-2);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 46 | `  --color-chart-3: var(--chart-3);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 47 | `  --color-chart-4: var(--chart-4);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 48 | `  --color-chart-5: var(--chart-5);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 49 | `  --font-display: "Plus Jakarta Sans", system-ui, sans-serif;` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 50 | `}` | Fecha o bloco de regras CSS aberto anteriormente. |
| 51 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 52 | `:root {` | Inicia um bloco de regras CSS para o seletor indicado. |
| 53 | `  --radius: 0.75rem;` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 54 | `  /* Azul-marinho escuro como tema base */` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 55 | `  --background: oklch(0.98 0.005 250);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 56 | `  --foreground: oklch(0.18 0.04 260);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 57 | `  --card: oklch(1 0 0);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 58 | `  --card-foreground: oklch(0.18 0.04 260);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 59 | `  --popover: oklch(1 0 0);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 60 | `  --popover-foreground: oklch(0.18 0.04 260);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 61 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 62 | `  --primary: oklch(0.28 0.09 264);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 63 | `  --primary-foreground: oklch(0.98 0.005 250);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 64 | `  --primary-glow: oklch(0.45 0.16 264);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 65 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 66 | `  --secondary: oklch(0.95 0.012 250);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 67 | `  --secondary-foreground: oklch(0.28 0.09 264);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 68 | `  --muted: oklch(0.95 0.012 250);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 69 | `  --muted-foreground: oklch(0.5 0.03 260);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 70 | `  --accent: oklch(0.93 0.03 250);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 71 | `  --accent-foreground: oklch(0.28 0.09 264);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 72 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 73 | `  --destructive: oklch(0.58 0.22 27);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 74 | `  --destructive-foreground: oklch(0.98 0 0);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 75 | `  --success: oklch(0.62 0.16 155);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 76 | `  --warning: oklch(0.78 0.16 75);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 77 | `  --info: oklch(0.62 0.18 240);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 78 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 79 | `  --border: oklch(0.9 0.012 250);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 80 | `  --input: oklch(0.92 0.012 250);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 81 | `  --ring: oklch(0.45 0.16 264);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 82 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 83 | `  --chart-1: oklch(0.45 0.16 264);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 84 | `  --chart-2: oklch(0.62 0.16 155);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 85 | `  --chart-3: oklch(0.78 0.16 75);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 86 | `  --chart-4: oklch(0.58 0.22 27);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 87 | `  --chart-5: oklch(0.55 0.2 310);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 88 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 89 | `  --sidebar: oklch(0.22 0.07 264);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 90 | `  --sidebar-foreground: oklch(0.92 0.012 250);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 91 | `  --sidebar-primary: oklch(0.55 0.18 240);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 92 | `  --sidebar-primary-foreground: oklch(0.98 0 0);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 93 | `  --sidebar-accent: oklch(0.28 0.08 264);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 94 | `  --sidebar-accent-foreground: oklch(0.98 0 0);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 95 | `  --sidebar-border: oklch(0.3 0.06 264);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 96 | `  --sidebar-ring: oklch(0.55 0.18 240);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 97 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 98 | `  --gradient-primary: linear-gradient(135deg, var(--primary), var(--primary-glow));` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 99 | `  --gradient-sidebar: linear-gradient(180deg, oklch(0.22 0.07 264), oklch(0.18 0.06 264));` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 100 | `  --shadow-elegant: 0 10px 30px -10px color-mix(in oklab, var(--primary) 30%, transparent);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 101 | `  --shadow-card: 0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 102 | `}` | Fecha o bloco de regras CSS aberto anteriormente. |
| 103 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 104 | `.dark {` | Inicia um bloco de regras CSS para o seletor indicado. |
| 105 | `  --background: oklch(0.15 0.03 264);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 106 | `  --foreground: oklch(0.95 0.01 250);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 107 | `  --card: oklch(0.2 0.05 264);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 108 | `  --card-foreground: oklch(0.95 0.01 250);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 109 | `  --popover: oklch(0.2 0.05 264);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 110 | `  --popover-foreground: oklch(0.95 0.01 250);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 111 | `  --primary: oklch(0.6 0.18 250);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 112 | `  --primary-foreground: oklch(0.1 0.03 264);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 113 | `  --primary-glow: oklch(0.7 0.2 250);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 114 | `  --secondary: oklch(0.25 0.05 264);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 115 | `  --secondary-foreground: oklch(0.95 0.01 250);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 116 | `  --muted: oklch(0.25 0.05 264);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 117 | `  --muted-foreground: oklch(0.7 0.03 250);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 118 | `  --accent: oklch(0.3 0.06 264);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 119 | `  --accent-foreground: oklch(0.95 0.01 250);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 120 | `  --border: oklch(0.3 0.05 264);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 121 | `  --input: oklch(0.3 0.05 264);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 122 | `  --ring: oklch(0.6 0.18 250);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 123 | `  --sidebar: oklch(0.12 0.03 264);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 124 | `  --sidebar-foreground: oklch(0.9 0.01 250);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 125 | `  --sidebar-accent: oklch(0.2 0.05 264);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 126 | `  --sidebar-border: oklch(0.25 0.05 264);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 127 | `}` | Fecha o bloco de regras CSS aberto anteriormente. |
| 128 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 129 | `@layer base {` | Inicia um bloco de regras CSS para o seletor indicado. |
| 130 | `  * { border-color: var(--color-border); }` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 131 | `  body {` | Inicia um bloco de regras CSS para o seletor indicado. |
| 132 | `    background-color: var(--color-background);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 133 | `    color: var(--color-foreground);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 134 | `    font-feature-settings: "ss01", "cv11";` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 135 | `  }` | Fecha o bloco de regras CSS aberto anteriormente. |
| 136 | `  h1, h2, h3, h4 { font-family: var(--font-display); letter-spacing: -0.02em; }` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 137 | `}` | Fecha o bloco de regras CSS aberto anteriormente. |
| 138 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 139 | `.scrollbar-thin::-webkit-scrollbar { width: 6px; height: 6px; }` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 140 | `.scrollbar-thin::-webkit-scrollbar-thumb { background: color-mix(in oklab, var(--muted-foreground) 30%, transparent); border-radius: 999px; }` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 141 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 142 | `.kanban-scroll { scrollbar-width: thin; }` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 143 | `.task-overdue { box-shadow: inset 3px 0 0 var(--destructive); }` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 144 | `.task-due-soon { box-shadow: inset 3px 0 0 var(--warning); }` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 145 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 146 | `[contenteditable][data-placeholder]:empty::before {` | Inicia um bloco de regras CSS para o seletor indicado. |
| 147 | `  content: attr(data-placeholder);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 148 | `  color: color-mix(in oklab, var(--muted-foreground) 70%, transparent);` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 149 | `  pointer-events: none;` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 150 | `}` | Fecha o bloco de regras CSS aberto anteriormente. |
| 151 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 152 | `/* Tiptap rich-text editor styles */` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 153 | `.tiptap { cursor: text; outline: none; }` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 154 | `.tiptap p { margin: 0.25rem 0; }` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 155 | `.tiptap ul { list-style: disc; padding-left: 1.25rem; margin: 0.25rem 0; }` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 156 | `.tiptap ol { list-style: decimal; padding-left: 1.5rem; margin: 0.25rem 0; }` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 157 | `.tiptap ul ul { list-style: circle; }` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 158 | `.tiptap ul ul ul { list-style: square; }` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 159 | `.tiptap li { margin: 0.1rem 0; }` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 160 | `.tiptap li > p { margin: 0; display: inline; }` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 161 | `.tiptap h2 { font-size: 0.95rem; font-weight: 600; margin: 0.4rem 0 0.2rem; }` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 162 | `.tiptap h3 { font-size: 0.85rem; font-weight: 600; margin: 0.35rem 0 0.15rem; }` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 163 | `.tiptap blockquote { border-left: 3px solid var(--border); padding-left: 0.6rem; color: var(--muted-foreground); margin: 0.3rem 0; }` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 164 | `.tiptap code { background: color-mix(in oklab, var(--muted) 80%, transparent); padding: 0 0.25rem; border-radius: 3px; font-size: 0.85em; }` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 165 | `.tiptap a { color: var(--primary); text-decoration: underline; }` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 166 | `.tiptap mark, .prose mark { color: inherit; padding: 0 0.1em; border-radius: 2px; }` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 167 | `.tiptap-wrapper, .tiptap-wrapper * { cursor: text; }` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 168 | `.tiptap-wrapper button { cursor: pointer; }` | Define uma propriedade visual, como cor, tamanho, espacamento ou comportamento de layout. |
| 169 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
