# Arquitetura da copia limpa

Esta versao e uma copia React/Supabase para estudo e evolucao, sem tocar no Lovable.

## Camadas

- `src/routes`: telas e rotas do app.
- `src/components`: componentes reutilizaveis.
- `src/hooks/use-auth.tsx`: sessao, perfil e permissao admin.
- `src/hooks/use-data.ts`: consultas principais ao Supabase.
- `src/integrations/supabase/client.ts`: cliente Supabase do navegador.
- `supabase/migrations`: schema que deve ser aplicado no banco novo.
- `vite.pages.config.ts`: build estatico para GitHub Pages.

## Funcionalidades que dependem do Supabase

- Login e cadastro.
- Perfis e permissoes.
- Clientes.
- Tarefas, subtarefas, status, tags e colunas.
- Lixeira por soft delete.
- Atualizacoes realtime em algumas telas.

## Funcionalidades que ainda podem precisar de backend depois

- IA/importacao avancada de ata.
- Relatorios gerados por funcoes server-side.
- Uploads com politicas de storage mais rigorosas.

## Regra de seguranca

Toda evolucao deve acontecer neste repositorio e no Supabase novo. O projeto Lovable/original fica como referencia, nao como ambiente de teste.
