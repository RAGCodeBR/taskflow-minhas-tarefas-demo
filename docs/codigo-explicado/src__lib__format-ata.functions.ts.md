# src/lib/format-ata.functions.ts

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
| 9 | `}).refine((d) => !!(d.pdfBase64 || (d.text && d.text.trim())), {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 10 | `  message: "Envie um PDF ou cole o texto da reunião",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 11 | `});` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 12 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 13 | `export const formatAtaWithClaude = createServerFn({ method: "POST" })` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 14 | `  .middleware([requireSupabaseAuth])` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 15 | `  .inputValidator((data: unknown) => InputSchema.parse(data))` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 16 | `  .handler(async ({ data }) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 17 | `    const apiKey = process.env.ANTHROPIC_API_KEY;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 18 | `    if (!apiKey) throw new Error("ANTHROPIC_API_KEY ausente");` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 19 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 20 | `    const today = new Date().toLocaleDateString("pt-BR");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 21 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 22 | `    const systemPrompt = \`Você organiza notas de reunião em uma ATA formal em português, no formato HTML estruturado abaixo. Use APENAS o conteúdo fornecido — não invente fatos. Se um campo não estiver claro, use "—".` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 23 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 24 | `FORMATO HTML (retorne SOMENTE o HTML, sem \\`\\`\\`, sem comentários, sem <html>/<body>):` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 25 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 26 | `<h2>Ata de Reunião</h2>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 27 | `<p><strong>TRR / Projeto:</strong> ...</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 28 | `<table>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 29 | `  <tr><td><strong>Data:</strong></td><td>...</td></tr>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 30 | `  <tr><td><strong>Horário:</strong></td><td>...</td></tr>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 31 | `  <tr><td><strong>Local:</strong></td><td>...</td></tr>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 32 | `  <tr><td><strong>Participantes:</strong></td><td>...</td></tr>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 33 | `  <tr><td><strong>Pauta:</strong></td><td>...</td></tr>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 34 | `</table>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 35 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 36 | `<h3>Resumo</h3>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 37 | `<p>Parágrafos curtos resumindo os temas centrais. Pode usar <strong>destaques temáticos:</strong> seguidos da explicação.</p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 38 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 39 | `<h3>Pontos Discutidos</h3>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 40 | `<ul>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 41 | `  <li>Cada bullet objetivo e curto, com o ponto chave em evidência.</li>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 42 | `</ul>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 43 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 44 | `<h3>Próximas Etapas / Ações</h3>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 45 | `<table>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 46 | `  <thead><tr><th>Responsável</th><th>Ação</th></tr></thead>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 47 | `  <tbody>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 48 | `    <tr><td>Nome</td><td>Ação clara, no infinitivo.</td></tr>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 49 | `  </tbody>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 50 | `</table>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 51 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 52 | `REGRAS:` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 53 | `- Preserve nomes próprios exatamente como aparecem.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 54 | `- Se houver data/horário, use-os; caso ausente, use "${today}" para a data e "—" para horário.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 55 | `- Não adicione introdução nem encerramento fora do HTML.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 56 | `- Não use markdown. Apenas HTML simples (h2, h3, p, ul, li, table, tr, td, th, strong, em).\`;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 57 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 58 | `    const userContent: Array<Record<string, unknown>> = [];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 59 | `    if (data.pdfBase64) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 60 | `      userContent.push({` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 61 | `        type: "document",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 62 | `        source: { type: "base64", media_type: "application/pdf", data: data.pdfBase64 },` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 63 | `      });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 64 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 65 | `    userContent.push({` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 66 | `      type: "text",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 67 | `      text: data.text` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 68 | `        ? \`Conteúdo bruto da reunião:\n\n${data.text}\n\nGere a ata formatada em HTML conforme as regras.\`` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 69 | `        : \`Gere a ata formatada da reunião anexa conforme as regras.\`,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 70 | `    });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 71 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 72 | `    const res = await fetch("https://api.anthropic.com/v1/messages", {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 73 | `      method: "POST",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 74 | `      headers: {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 75 | `        "Content-Type": "application/json",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 76 | `        "x-api-key": apiKey,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 77 | `        "anthropic-version": "2023-06-01",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 78 | `      },` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 79 | `      body: JSON.stringify({` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 80 | `        model: "claude-sonnet-4-5",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 81 | `        max_tokens: 4096,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 82 | `        system: systemPrompt,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 83 | `        messages: [{ role: "user", content: userContent }],` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 84 | `      }),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 85 | `    });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 86 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 87 | `    if (!res.ok) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 88 | `      const t = await res.text();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 89 | `      throw new Error(\`Claude API ${res.status}: ${t.slice(0, 300)}\`);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 90 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 91 | `    const json = await res.json();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 92 | `    const raw: string = json?.content?.[0]?.text ?? "";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 93 | `    const html = raw.replace(/^\`\`\`html\s*/i, "").replace(/^\`\`\`\s*/i, "").replace(/\`\`\`\s*$/i, "").trim();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 94 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 95 | `    // Extract a plain-text version for the \`content\` column` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 96 | `    const text = html` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 97 | `      .replace(/<\/(h2|h3|p|li|tr)>/gi, "\n")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 98 | `      .replace(/<br\s*\/?>/gi, "\n")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 99 | `      .replace(/<[^>]+>/g, "")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 100 | `      .replace(/\n{3,}/g, "\n\n")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 101 | `      .trim();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 102 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 103 | `    return { html, text };` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 104 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 105 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
