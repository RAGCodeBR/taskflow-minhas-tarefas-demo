# Guia de estudo do codigo

Este projeto e uma copia separada do TaskFlow para estudo e evolucao sem mexer no projeto original do Lovable.

## Como estudar

1. Comece por `src/routes/_app/dashboard.tsx` para entender a tela inicial depois do login.
2. Depois leia `src/hooks/use-auth.tsx`, que explica a sessao do usuario e a conexao com o Supabase Auth.
3. Leia `src/hooks/use-data.ts`, que concentra boa parte das consultas e operacoes de dados.
4. Abra `src/components/TaskCard.tsx`, `src/components/TaskDialog.tsx` e `src/routes/_app/tasks.kanban.tsx` para entender a parte principal das tarefas.
5. Use `docs/codigo-explicado/README.md` quando quiser ver a explicacao linha por linha de qualquer arquivo.

## Onde estao as partes principais

- `src/routes`: define as paginas e rotas da aplicacao.
- `src/components`: guarda os componentes visuais reutilizaveis.
- `src/components/ui`: guarda componentes base de interface, como botoes, dialogs, inputs e menus.
- `src/hooks`: guarda logicas reaproveitaveis do React, como autenticacao e carregamento de dados.
- `src/integrations/supabase`: concentra a conexao com o Supabase.
- `src/lib`: guarda funcoes auxiliares, funcoes de servidor e utilitarios.
- `supabase/migrations`: guarda a estrutura do banco de dados novo e separado.
- `scripts`: guarda automacoes de documentacao e publicacao no GitHub Pages.

## Observacao importante

Os comentarios linha por linha foram colocados em documentacao separada para preservar o funcionamento do sistema. Inserir comentario manual em cada linha dentro dos arquivos reais deixaria o codigo muito pesado, dificultaria manutencao e poderia quebrar arquivos gerados automaticamente.
