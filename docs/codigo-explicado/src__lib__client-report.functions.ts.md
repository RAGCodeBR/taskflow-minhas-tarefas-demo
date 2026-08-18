# src/lib/client-report.functions.ts

Tipo: Modulo TypeScript.

Este documento foi gerado para estudo e manutencao. Ele preserva o codigo original e explica linha por linha sem alterar o comportamento do sistema publicado.

| Linha | Codigo original | Explicacao |
| ---: | --- | --- |
| 1 | `import { createServerFn } from "@tanstack/react-start";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 2 | `import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 3 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 4 | `export const generateClientReport = createServerFn({ method: "POST" })` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 5 | `  .middleware([requireSupabaseAuth])` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 6 | `  .inputValidator((input: { clientId: string }) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 7 | `    if (!input?.clientId || typeof input.clientId !== "string") throw new Error("clientId requerido");` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 8 | `    return { clientId: input.clientId };` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 9 | `  })` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 10 | `  .handler(async ({ data, context }) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 11 | `    const apiKey = process.env.LOVABLE_API_KEY;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 12 | `    if (!apiKey) throw new Error("LOVABLE_API_KEY ausente");` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 13 | `    const { supabase } = context;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 14 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 15 | `    const { data: client, error: cErr } = await supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 16 | `      .from("clients")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 17 | `      .select("id, name, description")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 18 | `      .eq("id", data.clientId)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 19 | `      .maybeSingle();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 20 | `    if (cErr) throw cErr;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 21 | `    if (!client) throw new Error("Cliente não encontrado");` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 22 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 23 | `    const { data: tasks, error: tErr } = await supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 24 | `      .from("tasks")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 25 | `      .select("id, title, description, status, priority, due_date, completed_at, created_at, updated_at, assignee_id")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 26 | `      .eq("client_id", data.clientId)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 27 | `      .is("deleted_at", null)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 28 | `      .order("created_at", { ascending: false });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 29 | `    if (tErr) throw tErr;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 30 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 31 | `    const taskIds = (tasks ?? []).map((t) => t.id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 32 | `    const [{ data: subs }, { data: notes }, { data: profiles }, { data: dueChanges }, { data: interruptions }] = await Promise.all([` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 33 | `      taskIds.length` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 34 | `        ? supabase.from("subtasks").select("id, task_id, title, done, position, due_date, completed_at, comment_id").in("task_id", taskIds).order("position")` | Interage com o cliente Supabase para autenticar ou acessar o banco. |
| 35 | `        : Promise.resolve({ data: [] as any[] }),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 36 | `      taskIds.length` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 37 | `        ? supabase.from("comments").select("id, task_id, title, body, created_at, position").in("task_id", taskIds).order("position")` | Interage com o cliente Supabase para autenticar ou acessar o banco. |
| 38 | `        : Promise.resolve({ data: [] as any[] }),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 39 | `      supabase.from("profiles").select("id, full_name, email"),` | Interage com o cliente Supabase para autenticar ou acessar o banco. |
| 40 | `      taskIds.length` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 41 | `        ? supabase.from("task_due_date_changes").select("task_id, old_due_date, new_due_date, reason, created_at").in("task_id", taskIds).order("created_at")` | Interage com o cliente Supabase para autenticar ou acessar o banco. |
| 42 | `        : Promise.resolve({ data: [] as any[] }),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 43 | `      taskIds.length` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 44 | `        ? supabase.from("task_interruptions").select("task_id, reason, created_at").in("task_id", taskIds).order("created_at")` | Interage com o cliente Supabase para autenticar ou acessar o banco. |
| 45 | `        : Promise.resolve({ data: [] as any[] }),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 46 | `    ]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 47 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 48 | `    const subIds = (subs ?? []).map((s: any) => s.id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 49 | `    const { data: subDueChanges } = subIds.length` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 50 | `      ? await supabase.from("subtask_due_date_changes").select("subtask_id, old_due_date, new_due_date, reason, created_at").in("subtask_id", subIds).order("created_at")` | Interage com o cliente Supabase para autenticar ou acessar o banco. |
| 51 | `      : { data: [] as any[] };` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 52 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 53 | `    const profileById = new Map((profiles ?? []).map((p: any) => [p.id, p.full_name || p.email || "?"]));` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 54 | `    const stripHtml = (s: string | null | undefined) =>` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 55 | `      (s ?? "").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 56 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 57 | `    const subById = new Map((subs ?? []).map((s: any) => [s.id, s]));` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 58 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 59 | `    // Payload compacto pra IA` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 60 | `    const payload = {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 61 | `      client: { name: client.name, description: client.description ?? "" },` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 62 | `      total_tasks: tasks?.length ?? 0,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 63 | `      done: (tasks ?? []).filter((t: any) => t.status === "done" || t.completed_at).length,` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 64 | `      pending: (tasks ?? []).filter((t: any) => t.status !== "done" && !t.completed_at).length,` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 65 | `      tasks: (tasks ?? []).map((t: any) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 66 | `        const taskSubs = (subs ?? []).filter((s: any) => s.task_id === t.id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 67 | `        const taskNotes = (notes ?? []).filter((n: any) => n.task_id === t.id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 68 | `        const secoes = taskNotes.map((n: any) => ({` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 69 | `          titulo: n.title ?? "",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 70 | `          corpo: stripHtml(n.body).slice(0, 600),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 71 | `          criada_em: n.created_at,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 72 | `          subtarefas: taskSubs` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 73 | `            .filter((s: any) => s.comment_id === n.id)` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 74 | `            .map((s: any) => ({` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 75 | `              titulo: stripHtml(s.title),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 76 | `              feita: s.done,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 77 | `              concluida_em: s.completed_at,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 78 | `              prazo: s.due_date,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 79 | `              mudancas_prazo: (subDueChanges ?? [])` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 80 | `                .filter((c: any) => c.subtask_id === s.id)` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 81 | `                .map((c: any) => ({ de: c.old_due_date, para: c.new_due_date, motivo: c.reason ?? null })),` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 82 | `            })),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 83 | `        }));` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 84 | `        const subtarefasRaiz = taskSubs.filter((s: any) => !s.comment_id).map((s: any) => ({` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 85 | `          titulo: stripHtml(s.title),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 86 | `          feita: s.done,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 87 | `          concluida_em: s.completed_at,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 88 | `          prazo: s.due_date,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 89 | `          mudancas_prazo: (subDueChanges ?? [])` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 90 | `            .filter((c: any) => c.subtask_id === s.id)` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 91 | `            .map((c: any) => ({ de: c.old_due_date, para: c.new_due_date, motivo: c.reason ?? null })),` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 92 | `        }));` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 93 | `        return {` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 94 | `          titulo: t.title,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 95 | `          descricao: stripHtml(t.description).slice(0, 800),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 96 | `          status: t.status,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 97 | `          prioridade: t.priority,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 98 | `          prazo: t.due_date,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 99 | `          concluida_em: t.completed_at,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 100 | `          criada_em: t.created_at,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 101 | `          responsavel: t.assignee_id ? profileById.get(t.assignee_id) : null,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 102 | `          secoes,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 103 | `          subtarefas_raiz: subtarefasRaiz,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 104 | `          mudancas_prazo: (dueChanges ?? [])` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 105 | `            .filter((c: any) => c.task_id === t.id)` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 106 | `            .map((c: any) => ({ de: c.old_due_date, para: c.new_due_date, motivo: c.reason ?? null })),` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 107 | `          interrupcoes: (interruptions ?? []).filter((i: any) => i.task_id === t.id).map((i: any) => ({ motivo: i.reason, quando: i.created_at })),` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 108 | `        };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 109 | `      }),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 110 | `    };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 111 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 112 | `    const prompt = \`Você é um analista sênior. Produza um RELATÓRIO INTELIGENTE em HTML profissional (PT-BR) sobre tudo que foi feito para o cliente "${client.name}".` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 113 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 114 | `DIRETRIZES:` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 115 | `- Devolva APENAS HTML (sem markdown, sem \\`\\`\\`).` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 116 | `- Use <h2>, <h3>, <p>, <ul>, <ol>, <li>, <strong>, <em>, <table>, <thead>, <tbody>, <tr>, <th>, <td>.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 117 | `- Estruture em seções:` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 118 | `  1) <h2>Resumo executivo</h2> (3-6 linhas com o essencial)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 119 | `  2) <h2>Indicadores</h2> (tabela com totais, concluídas, pendentes, atrasadas, subtarefas concluídas, interrupções, mudanças de prazo)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 120 | `  3) <h2>Entregas por período</h2> (agrupe por mês/ano em ordem cronológica, use as datas de conclusão de tarefas E de subtarefas — cada subtarefa concluída é uma entrega pontual; cite o título da subtarefa e a seção/tarefa pai quando útil)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 121 | `  4) <h2>Detalhamento por tarefa</h2> (para cada tarefa relevante: contexto, seções (observações), subtarefas concluídas com data, subtarefas pendentes, prazos e mudanças de prazo — se um motivo foi registrado em uma mudança de prazo de tarefa OU de subtarefa, cite-o textualmente)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 122 | `  5) <h2>Trabalho em andamento</h2> (tarefas/subtarefas não concluídas, com contexto e riscos aparentes)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 123 | `  6) <h2>Mudanças de prazo</h2> (resuma o padrão; destaque justificativas registradas — inclua tanto as de tarefa quanto as de subtarefa)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 124 | `  7) <h2>Interrupções</h2> (se houver — liste os motivos registrados)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 125 | `  8) <h2>Insights e recomendações</h2> (3-6 bullets acionáveis)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 126 | `- Seja específico: cite nomes de tarefas e subtarefas quando útil, mas SEM listar tudo cru — sintetize.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 127 | `- Não invente dados. Se um campo estiver vazio, ignore.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 128 | `- Use tom profissional, direto, sem jargão desnecessário.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 129 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 130 | `DADOS (JSON):` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 131 | `${JSON.stringify(payload)}\`;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 132 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 133 | `    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 134 | `      method: "POST",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 135 | `      headers: { "Content-Type": "application/json", Authorization: \`Bearer ${apiKey}\` },` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 136 | `      body: JSON.stringify({` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 137 | `        model: "google/gemini-2.5-pro",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 138 | `        messages: [` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 139 | `          { role: "system", content: "Você produz relatórios executivos em HTML limpo, sem inventar dados." },` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 140 | `          { role: "user", content: prompt },` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 141 | `        ],` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 142 | `      }),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 143 | `    });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 144 | `    if (!res.ok) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 145 | `      const t = await res.text();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 146 | `      if (res.status === 429) throw new Error("Limite de requisições atingido. Tente novamente em instantes.");` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 147 | `      if (res.status === 402) throw new Error("Créditos de IA esgotados. Adicione créditos no workspace.");` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 148 | `      throw new Error(\`AI: ${res.status} ${t.slice(0, 200)}\`);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 149 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 150 | `    const json = await res.json();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 151 | `    const raw: string = json?.choices?.[0]?.message?.content ?? "";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 152 | `    const html = raw.replace(/^\`\`\`html\s*/i, "").replace(/\`\`\`\s*$/i, "").trim();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 153 | `    return { html, stats: { total: payload.total_tasks, done: payload.done, pending: payload.pending } };` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 154 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 155 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
