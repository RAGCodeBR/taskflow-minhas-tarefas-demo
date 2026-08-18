# src/lib/import-ata.functions.ts

Tipo: Modulo TypeScript.

Este documento foi gerado para estudo e manutencao. Ele preserva o codigo original e explica linha por linha sem alterar o comportamento do sistema publicado.

| Linha | Codigo original | Explicacao |
| ---: | --- | --- |
| 1 | `import { createServerFn } from "@tanstack/react-start";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 2 | `import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 3 | `import { z } from "zod";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 4 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 5 | `const InputSchema = z.object({` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 6 | `  pdfBase64: z.string().optional(),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 7 | `  text: z.string().optional(),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 8 | `  filename: z.string().optional(),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 9 | `  members: z.array(z.object({ id: z.string(), name: z.string() })).max(200),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 10 | `  clients: z.array(z.object({ id: z.string(), name: z.string() })).max(500),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 11 | `  tags: z.array(z.object({ id: z.string(), name: z.string() })).max(500),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 12 | `}).refine((d) => !!(d.pdfBase64 || (d.text && d.text.trim())), {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 13 | `  message: "Envie um PDF ou cole o texto da ata",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 14 | `});` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 15 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 16 | `export interface ExtractedTask {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 17 | `  title: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 18 | `  description: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 19 | `  assignee_name: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 20 | `  assignee_id: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 21 | `  due_date: string | null; // ISO yyyy-mm-dd` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 22 | `  client_name: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 23 | `  client_id: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 24 | `  tag_name: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 25 | `  tag_id: string | null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 26 | `  priority: "low" | "medium" | "high" | "urgent";` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 27 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 28 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 29 | `function norm(s: string) {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 30 | `  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 31 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 32 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 33 | `function matchByName<T extends { id: string; name: string }>(arr: T[], name: string | null): T | null {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 34 | `  if (!name) return null;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 35 | `  const n = norm(name);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 36 | `  if (!n) return null;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 37 | `  // exact` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 38 | `  let m = arr.find((a) => norm(a.name) === n);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 39 | `  if (m) return m;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 40 | `  // first-name / contains` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 41 | `  m = arr.find((a) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 42 | `    const an = norm(a.name);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 43 | `    return an.includes(n) || n.includes(an) || an.split(/\s+/)[0] === n.split(/\s+/)[0];` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 44 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 45 | `  return m ?? null;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 46 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 47 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 48 | `export const parseAtaWithClaude = createServerFn({ method: "POST" })` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 49 | `  .middleware([requireSupabaseAuth])` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 50 | `  .inputValidator((data: unknown) => InputSchema.parse(data))` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 51 | `  .handler(async ({ data }) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 52 | `    const apiKey = process.env.ANTHROPIC_API_KEY;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 53 | `    if (!apiKey) throw new Error("ANTHROPIC_API_KEY ausente");` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 54 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 55 | `    const memberList = data.members.map((m) => m.name).join(", ") || "(nenhum)";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 56 | `    const today = new Date().toISOString().slice(0, 10);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 57 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 58 | `    const systemPrompt = \`Você é um assistente que lê atas de reunião em português e extrai APENAS as próximas etapas / próximas ações / próximos passos como tarefas acionáveis.` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 59 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 60 | `REGRAS:` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 61 | `- Foque na seção final da ata (ex.: "Próximas Etapas", "Próximas Ações", "Next Steps", "Action Items", tabela de responsável/ação).` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 62 | `- Ignore resumo, contexto e pontos discutidos a menos que claramente sejam ações pendentes.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 63 | `- Cada tarefa deve ser uma ação concreta, no infinitivo, curta (até 90 caracteres no título).` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 64 | `- Descrição: contexto extra da ata (1-3 frases). Se não houver, repita o título.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 65 | `- Responsável: nome EXATO citado na ata. Tente casar com esta lista de membros do sistema: [${memberList}]. Se não houver correspondência clara, use o nome literal da ata.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 66 | `- Prazo: se a ata mencionar data ("até 30/06", "próxima semana"), converta para AAAA-MM-DD. Hoje é ${today}. Caso contrário, null.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 67 | `- Cliente: tente identificar o cliente/projeto principal da ata.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 68 | `- Tag: classifique brevemente (ex.: "reunião", "cadastro", "configuração").` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 69 | `- Prioridade: "low" | "medium" | "high" | "urgent". Padrão "medium". Use "high" se houver urgência explícita.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 70 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 71 | `SAÍDA: Apenas JSON válido, sem markdown, sem \\`\\`\\`. Formato:` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 72 | `{"tasks":[{"title":"...","description":"...","assignee_name":"...|null","due_date":"AAAA-MM-DD|null","client_name":"...|null","tag_name":"...|null","priority":"medium"}]}\`;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 73 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 74 | `    const userContent: Array<Record<string, unknown>> = [];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 75 | `    if (data.pdfBase64) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 76 | `      userContent.push({` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 77 | `        type: "document",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 78 | `        source: { type: "base64", media_type: "application/pdf", data: data.pdfBase64 },` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 79 | `      });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 80 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 81 | `    userContent.push({` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 82 | `      type: "text",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 83 | `      text: data.text` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 84 | `        ? \`Conteúdo da ata:\n\n${data.text}\n\nExtraia as tarefas conforme as regras.\`` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 85 | `        : \`Extraia as tarefas da ata anexa conforme as regras. Arquivo: ${data.filename ?? "ata.pdf"}\`,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 86 | `    });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 87 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 88 | `    const res = await fetch("https://api.anthropic.com/v1/messages", {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 89 | `      method: "POST",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 90 | `      headers: {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 91 | `        "Content-Type": "application/json",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 92 | `        "x-api-key": apiKey,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 93 | `        "anthropic-version": "2023-06-01",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 94 | `      },` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 95 | `      body: JSON.stringify({` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 96 | `        model: "claude-sonnet-4-5",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 97 | `        max_tokens: 4096,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 98 | `        system: systemPrompt,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 99 | `        messages: [{ role: "user", content: userContent }],` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 100 | `      }),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 101 | `    });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 102 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 103 | `    if (!res.ok) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 104 | `      const t = await res.text();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 105 | `      throw new Error(\`Claude API ${res.status}: ${t.slice(0, 300)}\`);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 106 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 107 | `    const json = await res.json();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 108 | `    const raw: string = json?.content?.[0]?.text ?? "";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 109 | `    const cleaned = raw.replace(/^\`\`\`json\s*/i, "").replace(/^\`\`\`\s*/i, "").replace(/\`\`\`\s*$/i, "").trim();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 110 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 111 | `    let parsed: { tasks?: unknown };` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 112 | `    try {` | Inicia bloco protegido para capturar erros durante a execucao. |
| 113 | `      parsed = JSON.parse(cleaned);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 114 | `    } catch {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 115 | `      // try to recover JSON block` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 116 | `      const m = cleaned.match(/\{[\s\S]*\}/);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 117 | `      if (!m) throw new Error("Não foi possível interpretar a resposta da IA");` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 118 | `      parsed = JSON.parse(m[0]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 119 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 120 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 121 | `    const taskArr = Array.isArray((parsed as { tasks?: unknown }).tasks)` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 122 | `      ? ((parsed as { tasks: unknown[] }).tasks)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 123 | `      : [];` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 124 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 125 | `    const out: ExtractedTask[] = taskArr.map((t) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 126 | `      const o = (t ?? {}) as Record<string, unknown>;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 127 | `      const assigneeName = typeof o.assignee_name === "string" ? o.assignee_name : null;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 128 | `      const clientName = typeof o.client_name === "string" ? o.client_name : null;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 129 | `      const tagName = typeof o.tag_name === "string" ? o.tag_name : null;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 130 | `      const matchedAssignee = matchByName(data.members, assigneeName);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 131 | `      const matchedClient = matchByName(data.clients, clientName);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 132 | `      const matchedTag = matchByName(data.tags, tagName);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 133 | `      const priorityRaw = typeof o.priority === "string" ? o.priority.toLowerCase() : "medium";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 134 | `      const priority = (["low", "medium", "high", "urgent"].includes(priorityRaw)` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 135 | `        ? priorityRaw` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 136 | `        : "medium") as ExtractedTask["priority"];` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 137 | `      return {` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 138 | `        title: String(o.title ?? "").slice(0, 200) || "Tarefa sem título",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 139 | `        description: String(o.description ?? ""),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 140 | `        assignee_name: assigneeName,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 141 | `        assignee_id: matchedAssignee?.id ?? null,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 142 | `        due_date: typeof o.due_date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(o.due_date) ? o.due_date : null,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 143 | `        client_name: clientName,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 144 | `        client_id: matchedClient?.id ?? null,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 145 | `        tag_name: tagName,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 146 | `        tag_id: matchedTag?.id ?? null,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 147 | `        priority,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 148 | `      };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 149 | `    });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 150 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 151 | `    return { tasks: out };` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 152 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 153 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
