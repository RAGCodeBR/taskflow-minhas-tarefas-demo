# src/lib/ai-format.functions.ts

Tipo: Modulo TypeScript.

Este documento foi gerado para estudo e manutencao. Ele preserva o codigo original e explica linha por linha sem alterar o comportamento do sistema publicado.

| Linha | Codigo original | Explicacao |
| ---: | --- | --- |
| 1 | `import { createServerFn } from "@tanstack/react-start";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 2 | `import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 3 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 4 | `export const formatNoteWithAI = createServerFn({ method: "POST" })` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 5 | `  .middleware([requireSupabaseAuth])` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 6 | `  .inputValidator((input: { html: string; title?: string }) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 7 | `    if (typeof input?.html !== "string") throw new Error("html requerido");` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 8 | `    if (input.html.length > 50_000) throw new Error("Texto muito grande");` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 9 | `    return { html: input.html, title: input.title ?? "" };` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 10 | `  })` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 11 | `  .handler(async ({ data }) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 12 | `    const apiKey = process.env.LOVABLE_API_KEY;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 13 | `    if (!apiKey) throw new Error("LOVABLE_API_KEY ausente");` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 14 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 15 | `    const prompt = \`Você é um assistente que reformata anotações de reunião em HTML profissional, claro e bem estruturado em PORTUGUÊS do Brasil.` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 16 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 17 | `REGRAS:` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 18 | `- Devolva APENAS HTML válido (sem markdown, sem \\`\\`\\`html).` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 19 | `- Use <h2>, <h3>, <p>, <ul>, <ol>, <li>, <strong>, <em>, <u>.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 20 | `- PRESERVE qualquer <span style="background-color:..."> (grifos do usuário) exatamente como estão.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 21 | `- Não invente informações; apenas organize, agrupe em seções (ex: "Resumo", "Pontos discutidos", "Decisões", "Próximos passos") e melhore a redação.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 22 | `- Mantenha o idioma original.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 23 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 24 | `Título da anotação: ${data.title || "(sem título)"}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 25 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 26 | `HTML original:` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 27 | `${data.html}\`;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 28 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 29 | `    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 30 | `      method: "POST",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 31 | `      headers: {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 32 | `        "Content-Type": "application/json",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 33 | `        Authorization: \`Bearer ${apiKey}\`,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 34 | `      },` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 35 | `      body: JSON.stringify({` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 36 | `        model: "google/gemini-2.5-flash",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 37 | `        messages: [` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 38 | `          { role: "system", content: "Você reformata anotações em HTML limpo e profissional." },` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 39 | `          { role: "user", content: prompt },` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 40 | `        ],` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 41 | `      }),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 42 | `    });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 43 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 44 | `    if (!res.ok) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 45 | `      const t = await res.text();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 46 | `      throw new Error(\`AI Gateway: ${res.status} ${t.slice(0, 200)}\`);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 47 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 48 | `    const json = await res.json();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 49 | `    const content: string = json?.choices?.[0]?.message?.content ?? "";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 50 | `    const cleaned = content.replace(/^\`\`\`html\s*/i, "").replace(/\`\`\`\s*$/i, "").trim();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 51 | `    return { html: cleaned || data.html };` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 52 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 53 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
