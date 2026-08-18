# src/lib/admin-users.functions.ts

Tipo: Modulo TypeScript.

Este documento foi gerado para estudo e manutencao. Ele preserva o codigo original e explica linha por linha sem alterar o comportamento do sistema publicado.

| Linha | Codigo original | Explicacao |
| ---: | --- | --- |
| 1 | `import { createServerFn } from "@tanstack/react-start";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 2 | `import { z } from "zod";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 3 | `import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 4 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 5 | `export const deleteUserCompletely = createServerFn({ method: "POST" })` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 6 | `  .middleware([requireSupabaseAuth])` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 7 | `  .inputValidator((data) => z.object({ userId: z.string().uuid() }).parse(data))` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 8 | `  .handler(async ({ data, context }) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 9 | `    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 10 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 11 | `    // Verify caller is admin` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 12 | `    const { data: callerRoles, error: rolesErr } = await supabaseAdmin` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 13 | `      .from("user_roles")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 14 | `      .select("role")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 15 | `      .eq("user_id", context.userId);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 16 | `    if (rolesErr) throw new Error(rolesErr.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 17 | `    if (!callerRoles?.some((r) => r.role === "admin")) {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 18 | `      throw new Response("Forbidden", { status: 403 });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 19 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 20 | `    if (data.userId === context.userId) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 21 | `      throw new Error("Você não pode excluir a si mesmo.");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 22 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 23 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 24 | `    const uid = data.userId;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 25 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 26 | `    // Wipe user-owned content in public schema. Order matters for FKs.` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 27 | `    const tasksRes = await supabaseAdmin` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 28 | `      .from("tasks")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 29 | `      .select("id")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 30 | `      .or(\`assignee_id.eq.${uid},created_by.eq.${uid}\`);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 31 | `    const taskIds = (tasksRes.data ?? []).map((t: any) => t.id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 32 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 33 | `    if (taskIds.length) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 34 | `      await supabaseAdmin.from("subtasks").delete().in("task_id", taskIds);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 35 | `      await supabaseAdmin.from("task_tag_links").delete().in("task_id", taskIds);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 36 | `      await supabaseAdmin.from("task_interruptions").delete().in("task_id", taskIds);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 37 | `      await supabaseAdmin.from("task_history").delete().in("task_id", taskIds);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 38 | `      await supabaseAdmin.from("comments").delete().in("task_id", taskIds);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 39 | `      await supabaseAdmin.from("attachments").delete().in("task_id", taskIds);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 40 | `      await supabaseAdmin.from("tasks").delete().in("id", taskIds);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 41 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 42 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 43 | `    // Other user-scoped rows` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 44 | `    await supabaseAdmin.from("task_interruptions").delete().eq("user_id", uid);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 45 | `    await supabaseAdmin.from("comments").delete().eq("author_id", uid);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 46 | `    await supabaseAdmin.from("client_note_attachments").delete().eq("uploaded_by", uid);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 47 | `    await supabaseAdmin.from("client_notes").delete().eq("created_by", uid);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 48 | `    await supabaseAdmin.from("client_files").delete().eq("uploaded_by", uid);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 49 | `    // tags/statuses/columns are global — never delete on user removal` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 50 | `    await supabaseAdmin.from("user_column_order").delete().eq("user_id", uid);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 51 | `    await supabaseAdmin.from("user_task_order").delete().eq("user_id", uid);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 52 | `    await supabaseAdmin.from("board_preferences").delete().eq("user_id", uid);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 53 | `    await supabaseAdmin.from("user_roles").delete().eq("user_id", uid);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 54 | `    await supabaseAdmin.from("profiles").delete().eq("id", uid);` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 55 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 56 | `    // Finally remove auth user` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 57 | `    const { error: authErr } = await supabaseAdmin.auth.admin.deleteUser(uid);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 58 | `    if (authErr) throw new Error(authErr.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 59 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 60 | `    return { ok: true };` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 61 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 62 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
