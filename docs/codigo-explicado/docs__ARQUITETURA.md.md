# docs/ARQUITETURA.md

Tipo: Documento Markdown.

Este documento foi gerado para estudo e manutencao. Ele preserva o codigo original e explica linha por linha sem alterar o comportamento do sistema publicado.

| Linha | Codigo original | Explicacao |
| ---: | --- | --- |
| 1 | `# Arquitetura da copia limpa` | Titulo ou subtitulo usado para organizar a documentacao. |
| 2 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 3 | `Esta versao e uma copia React/Supabase para estudo e evolucao, sem tocar no Lovable.` | Texto explicativo da documentacao. |
| 4 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 5 | `## Camadas` | Titulo ou subtitulo usado para organizar a documentacao. |
| 6 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 7 | `- \`src/routes\`: telas e rotas do app.` | Item de lista com uma orientacao, decisao ou observacao. |
| 8 | `- \`src/components\`: componentes reutilizaveis.` | Item de lista com uma orientacao, decisao ou observacao. |
| 9 | `- \`src/hooks/use-auth.tsx\`: sessao, perfil e permissao admin.` | Item de lista com uma orientacao, decisao ou observacao. |
| 10 | `- \`src/hooks/use-data.ts\`: consultas principais ao Supabase.` | Item de lista com uma orientacao, decisao ou observacao. |
| 11 | `- \`src/integrations/supabase/client.ts\`: cliente Supabase do navegador.` | Item de lista com uma orientacao, decisao ou observacao. |
| 12 | `- \`supabase/migrations\`: schema que deve ser aplicado no banco novo.` | Item de lista com uma orientacao, decisao ou observacao. |
| 13 | `- \`vite.pages.config.ts\`: build estatico para GitHub Pages.` | Item de lista com uma orientacao, decisao ou observacao. |
| 14 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 15 | `## Funcionalidades que dependem do Supabase` | Titulo ou subtitulo usado para organizar a documentacao. |
| 16 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 17 | `- Login e cadastro.` | Item de lista com uma orientacao, decisao ou observacao. |
| 18 | `- Perfis e permissoes.` | Item de lista com uma orientacao, decisao ou observacao. |
| 19 | `- Clientes.` | Item de lista com uma orientacao, decisao ou observacao. |
| 20 | `- Tarefas, subtarefas, status, tags e colunas.` | Item de lista com uma orientacao, decisao ou observacao. |
| 21 | `- Lixeira por soft delete.` | Item de lista com uma orientacao, decisao ou observacao. |
| 22 | `- Atualizacoes realtime em algumas telas.` | Item de lista com uma orientacao, decisao ou observacao. |
| 23 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 24 | `## Funcionalidades que ainda podem precisar de backend depois` | Titulo ou subtitulo usado para organizar a documentacao. |
| 25 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 26 | `- IA/importacao avancada de ata.` | Item de lista com uma orientacao, decisao ou observacao. |
| 27 | `- Relatorios gerados por funcoes server-side.` | Item de lista com uma orientacao, decisao ou observacao. |
| 28 | `- Uploads com politicas de storage mais rigorosas.` | Item de lista com uma orientacao, decisao ou observacao. |
| 29 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 30 | `## Regra de seguranca` | Titulo ou subtitulo usado para organizar a documentacao. |
| 31 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 32 | `Toda evolucao deve acontecer neste repositorio e no Supabase novo. O projeto Lovable/original fica como referencia, nao como ambiente de teste.` | Texto explicativo da documentacao. |
| 33 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
