# package.json

Tipo: Arquivo de configuracao JSON.

Este documento foi gerado para estudo e manutencao. Ele preserva o codigo original e explica linha por linha sem alterar o comportamento do sistema publicado.

| Linha | Codigo original | Explicacao |
| ---: | --- | --- |
| 1 | `{` | Abre ou fecha uma estrutura de configuracao. |
| 2 | `  "name": "task-flow-supabase-clean",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 3 | `  "private": true,` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 4 | `  "sideEffects": false,` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 5 | `  "type": "module",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 6 | `  "scripts": {` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 7 | `    "dev": "vite dev",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 8 | `    "build": "vite build",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 9 | `    "build:pages": "vite build --config vite.pages.config.ts && node scripts/prepare-gh-pages.mjs",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 10 | `    "deploy:pages": "npm run build:pages && node scripts/deploy-gh-pages.mjs",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 11 | `    "build:dev": "vite build --mode development",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 12 | `    "preview": "vite preview",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 13 | `    "docs:codigo": "node scripts/generate-code-explanations.mjs",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 14 | `    "lint": "eslint .",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 15 | `    "format": "prettier --write ."` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 16 | `  },` | Abre ou fecha uma estrutura de configuracao. |
| 17 | `  "dependencies": {` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 18 | `    "@dnd-kit/core": "^6.3.1",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 19 | `    "@dnd-kit/sortable": "^10.0.0",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 20 | `    "@dnd-kit/utilities": "^3.2.2",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 21 | `    "@hookform/resolvers": "^5.2.2",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 22 | `    "@lovable.dev/cloud-auth-js": "^1.1.2",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 23 | `    "@radix-ui/react-accordion": "^1.2.12",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 24 | `    "@radix-ui/react-alert-dialog": "^1.1.15",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 25 | `    "@radix-ui/react-aspect-ratio": "^1.1.8",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 26 | `    "@radix-ui/react-avatar": "^1.1.11",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 27 | `    "@radix-ui/react-checkbox": "^1.3.3",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 28 | `    "@radix-ui/react-collapsible": "^1.1.12",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 29 | `    "@radix-ui/react-context-menu": "^2.2.16",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 30 | `    "@radix-ui/react-dialog": "^1.1.15",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 31 | `    "@radix-ui/react-dropdown-menu": "^2.1.16",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 32 | `    "@radix-ui/react-hover-card": "^1.1.15",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 33 | `    "@radix-ui/react-label": "^2.1.8",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 34 | `    "@radix-ui/react-menubar": "^1.1.16",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 35 | `    "@radix-ui/react-navigation-menu": "^1.2.14",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 36 | `    "@radix-ui/react-popover": "^1.1.15",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 37 | `    "@radix-ui/react-progress": "^1.1.8",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 38 | `    "@radix-ui/react-radio-group": "^1.3.8",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 39 | `    "@radix-ui/react-scroll-area": "^1.2.10",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 40 | `    "@radix-ui/react-select": "^2.2.6",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 41 | `    "@radix-ui/react-separator": "^1.1.8",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 42 | `    "@radix-ui/react-slider": "^1.3.6",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 43 | `    "@radix-ui/react-slot": "^1.2.4",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 44 | `    "@radix-ui/react-switch": "^1.2.6",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 45 | `    "@radix-ui/react-tabs": "^1.1.13",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 46 | `    "@radix-ui/react-toggle": "^1.1.10",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 47 | `    "@radix-ui/react-toggle-group": "^1.1.11",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 48 | `    "@radix-ui/react-tooltip": "^1.2.8",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 49 | `    "@supabase/supabase-js": "^2.107.0",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 50 | `    "@tailwindcss/vite": "^4.2.1",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 51 | `    "@tanstack/react-query": "^5.83.0",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 52 | `    "@tanstack/react-router": "^1.168.25",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 53 | `    "@tanstack/react-start": "^1.167.50",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 54 | `    "@tanstack/router-plugin": "^1.167.28",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 55 | `    "@tiptap/extension-highlight": "^3.27.0",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 56 | `    "@tiptap/extension-link": "^3.27.0",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 57 | `    "@tiptap/pm": "^3.27.0",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 58 | `    "@tiptap/react": "^3.27.0",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 59 | `    "@tiptap/starter-kit": "^3.27.0",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 60 | `    "class-variance-authority": "^0.7.1",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 61 | `    "clsx": "^2.1.1",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 62 | `    "cmdk": "^1.1.1",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 63 | `    "date-fns": "^4.1.0",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 64 | `    "embla-carousel-react": "^8.6.0",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 65 | `    "html2canvas": "^1.4.1",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 66 | `    "input-otp": "^1.4.2",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 67 | `    "jspdf": "^4.2.1",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 68 | `    "lucide-react": "^0.575.0",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 69 | `    "marked": "^18.0.5",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 70 | `    "motion": "^12.40.0",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 71 | `    "react": "^19.2.0",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 72 | `    "react-day-picker": "^9.14.0",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 73 | `    "react-dom": "^19.2.0",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 74 | `    "react-hook-form": "^7.71.2",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 75 | `    "react-resizable-panels": "^4.6.5",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 76 | `    "recharts": "^2.15.4",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 77 | `    "sonner": "^2.0.7",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 78 | `    "tailwind-merge": "^3.5.0",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 79 | `    "tailwindcss": "^4.2.1",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 80 | `    "tw-animate-css": "^1.3.4",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 81 | `    "vaul": "^1.1.2",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 82 | `    "vite-tsconfig-paths": "^6.0.2",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 83 | `    "zod": "^3.24.2"` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 84 | `  },` | Abre ou fecha uma estrutura de configuracao. |
| 85 | `  "devDependencies": {` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 86 | `    "@eslint/js": "^9.32.0",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 87 | `    "@lovable.dev/vite-tanstack-config": "2.7.6",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 88 | `    "@types/node": "^22.16.5",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 89 | `    "@types/react": "^19.2.0",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 90 | `    "@types/react-dom": "^19.2.0",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 91 | `    "@vitejs/plugin-react": "^5.0.4",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 92 | `    "eslint": "^9.32.0",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 93 | `    "eslint-config-prettier": "^10.1.1",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 94 | `    "eslint-plugin-prettier": "^5.2.6",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 95 | `    "eslint-plugin-react-hooks": "^5.2.0",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 96 | `    "eslint-plugin-react-refresh": "^0.4.20",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 97 | `    "globals": "^15.15.0",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 98 | `    "nitro": "3.0.260603-beta",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 99 | `    "prettier": "^3.7.3",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 100 | `    "typescript": "^5.8.3",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 101 | `    "typescript-eslint": "^8.56.1",` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 102 | `    "vite": "^7.3.1"` | Define uma opcao de configuracao usada por ferramenta, build ou ambiente. |
| 103 | `  }` | Abre ou fecha uma estrutura de configuracao. |
| 104 | `}` | Abre ou fecha uma estrutura de configuracao. |
| 105 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
