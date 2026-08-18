# src/components/TaskFilters.tsx

Tipo: Componente ou rota React em TypeScript.

Este documento foi gerado para estudo e manutencao. Ele preserva o codigo original e explica linha por linha sem alterar o comportamento do sistema publicado.

| Linha | Codigo original | Explicacao |
| ---: | --- | --- |
| 1 | `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 2 | `import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 3 | `import { Button } from "@/components/ui/button";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 4 | `import { Checkbox } from "@/components/ui/checkbox";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 5 | `import { Input } from "@/components/ui/input";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 6 | `import { Badge } from "@/components/ui/badge";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 7 | `import { ChevronDown, X, Users, UserCheck, PenSquare, Filter as FilterIcon, RotateCcw } from "lucide-react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 8 | `import { useMemo, useState } from "react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 9 | `import { useClients, useProfiles, useTaskStatuses } from "@/hooks/use-data";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 10 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 11 | `import { dateFilterLabels, matchDateFilter, type DateFilter } from "@/lib/task-utils";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 12 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 13 | `export type TaskScope = "all" | "mine" | "created";` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 14 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 15 | `interface Filters {` | Declara um contrato de tipos TypeScript para deixar os dados mais seguros e previsiveis. |
| 16 | `  scope?: TaskScope;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 17 | `  date?: DateFilter;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 18 | `  statusIds?: string[];` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 19 | `  client?: string; // legacy single-select (still respected)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 20 | `  clients?: string[]; // multi-select` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 21 | `  assignee?: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 22 | `  priority?: string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 23 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 24 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 25 | `const DATE_OPTIONS: DateFilter[] = [` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 26 | `  "all", "today", "due_today", "tomorrow", "this_week", "this_month", "overdue", "no_due", "pending", "completed",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 27 | `];` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 28 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 29 | `export function TaskFilters({ filters, onChange }: { filters: Filters; onChange: (f: Filters) => void }) {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 30 | `  const { data: clients } = useClients();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 31 | `  const { data: profiles } = useProfiles();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 32 | `  const { data: statuses = [] } = useTaskStatuses();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 33 | `  const [clientsOpen, setClientsOpen] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 34 | `  const [statusOpen, setStatusOpen] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 35 | `  const [search, setSearch] = useState("");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 36 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 37 | `  const scope: TaskScope = filters.scope ?? "all";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 38 | `  const dateVal: DateFilter = filters.date ?? "all";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 39 | `  const statusIds = filters.statusIds ?? [];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 40 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 41 | `  const selectedClients = useMemo<string[]>(() => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 42 | `    if (filters.clients && filters.clients.length > 0) return filters.clients;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 43 | `    if (filters.client) return [filters.client];` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 44 | `    return [];` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 45 | `  }, [filters.clients, filters.client]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 46 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 47 | `  const setSelectedClients = (ids: string[]) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 48 | `    onChange({ ...filters, clients: ids.length > 0 ? ids : undefined, client: undefined });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 49 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 50 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 51 | `  const toggleClient = (id: string) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 52 | `    setSelectedClients(` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 53 | `      selectedClients.includes(id)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 54 | `        ? selectedClients.filter((c) => c !== id)` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 55 | `        : [...selectedClients, id],` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 56 | `    );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 57 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 58 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 59 | `  const toggleStatus = (id: string) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 60 | `    const next = statusIds.includes(id) ? statusIds.filter((s) => s !== id) : [...statusIds, id];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 61 | `    onChange({ ...filters, statusIds: next.length > 0 ? next : undefined });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 62 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 63 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 64 | `  const filteredClients = useMemo(() => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 65 | `    const q = search.trim().toLowerCase();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 66 | `    const list = clients ?? [];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 67 | `    return q ? list.filter((c) => c.name.toLowerCase().includes(q)) : list;` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 68 | `  }, [clients, search]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 69 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 70 | `  const allSelected = (clients?.length ?? 0) > 0 && selectedClients.length === clients?.length;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 71 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 72 | `  const clientsLabel = selectedClients.length === 0` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 73 | `    ? "Clientes"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 74 | `    : selectedClients.length === 1` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 75 | `      ? clients?.find((c) => c.id === selectedClients[0])?.name ?? "1 cliente"` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 76 | `      : \`${selectedClients.length} clientes\`;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 77 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 78 | `  const statusLabel = statusIds.length === 0` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 79 | `    ? "Status"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 80 | `    : statusIds.length === 1` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 81 | `      ? statuses.find((s) => s.id === statusIds[0])?.name ?? "1 status"` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 82 | `      : \`${statusIds.length} status\`;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 83 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 84 | `  const activeCount = [` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 85 | `    scope !== "all",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 86 | `    dateVal !== "all",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 87 | `    statusIds.length > 0,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 88 | `    selectedClients.length > 0,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 89 | `    !!filters.assignee,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 90 | `    !!filters.priority,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 91 | `  ].filter(Boolean).length;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 92 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 93 | `  const clearAll = () => onChange({});` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 94 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 95 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 96 | `    <div className="flex flex-wrap items-center gap-2 rounded-lg border bg-card p-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 97 | `      {/* Scope segmented */}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 98 | `      <div className="inline-flex rounded-md border bg-muted/40 p-0.5">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 99 | `        <ScopeBtn active={scope === "all"} onClick={() => onChange({ ...filters, scope: undefined })} icon={<Users className="h-3.5 w-3.5" />}>Todas</ScopeBtn>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 100 | `        <ScopeBtn active={scope === "mine"} onClick={() => onChange({ ...filters, scope: "mine" })} icon={<UserCheck className="h-3.5 w-3.5" />}>Atribuídas a mim</ScopeBtn>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 101 | `        <ScopeBtn active={scope === "created"} onClick={() => onChange({ ...filters, scope: "created" })} icon={<PenSquare className="h-3.5 w-3.5" />}>Criadas por mim</ScopeBtn>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 102 | `      </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 103 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 104 | `      {/* Date compact select */}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 105 | `      <Select value={dateVal} onValueChange={(v) => onChange({ ...filters, date: v as DateFilter })}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 106 | `        <SelectTrigger className="h-8 w-36"><SelectValue /></SelectTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 107 | `        <SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 108 | `          {DATE_OPTIONS.map((d) => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 109 | `            <SelectItem key={d} value={d}>{dateFilterLabels[d]}</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 110 | `          ))}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 111 | `        </SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 112 | `      </Select>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 113 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 114 | `      {/* Status multi */}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 115 | `      <Popover open={statusOpen} onOpenChange={setStatusOpen}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 116 | `        <PopoverTrigger asChild>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 117 | `          <Button variant="outline" size="sm" className="h-8 justify-between gap-2 font-normal">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 118 | `            <span className="truncate max-w-32">{statusLabel}</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 119 | `            {statusIds.length > 0 && <Badge variant="secondary" className="h-5 px-1.5">{statusIds.length}</Badge>}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 120 | `            <ChevronDown className="h-4 w-4 opacity-50" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 121 | `          </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 122 | `        </PopoverTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 123 | `        <PopoverContent align="start" className="w-56 p-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 124 | `          <div className="flex items-center justify-between mb-1 px-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 125 | `            <span className="text-xs text-muted-foreground">Filtrar por status</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 126 | `            {statusIds.length > 0 && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 127 | `              <button className="text-xs text-muted-foreground hover:text-foreground" onClick={() => onChange({ ...filters, statusIds: undefined })}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 128 | `                Limpar` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 129 | `              </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 130 | `            )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 131 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 132 | `          <div className="max-h-64 overflow-y-auto">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 133 | `            {statuses.length === 0 && <div className="px-2 py-4 text-center text-sm text-muted-foreground">Sem status</div>}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 134 | `            {statuses.map((s) => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 135 | `              <label key={s.id} className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-accent cursor-pointer text-sm">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 136 | `                <Checkbox checked={statusIds.includes(s.id)} onCheckedChange={() => toggleStatus(s.id)} />` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 137 | `                <span className="h-2.5 w-2.5 rounded-full" style={{ background: s.color }} />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 138 | `                <span className="truncate">{s.name}</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 139 | `              </label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 140 | `            ))}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 141 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 142 | `        </PopoverContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 143 | `      </Popover>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 144 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 145 | `      {/* Clients multi */}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 146 | `      <Popover open={clientsOpen} onOpenChange={setClientsOpen}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 147 | `        <PopoverTrigger asChild>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 148 | `          <Button variant="outline" size="sm" className="h-8 justify-between gap-2 font-normal">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 149 | `            <span className="truncate max-w-40">{clientsLabel}</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 150 | `            {selectedClients.length > 0 && <Badge variant="secondary" className="h-5 px-1.5">{selectedClients.length}</Badge>}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 151 | `            <ChevronDown className="h-4 w-4 opacity-50" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 152 | `          </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 153 | `        </PopoverTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 154 | `        <PopoverContent align="start" className="w-64 p-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 155 | `          <div className="flex items-center gap-2 mb-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 156 | `            <Input placeholder="Buscar cliente..." value={search} onChange={(e) => setSearch(e.target.value)} className="h-8" />` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 157 | `            {selectedClients.length > 0 && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 158 | `              <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0" onClick={() => setSelectedClients([])} title="Limpar seleção">` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 159 | `                <X className="h-4 w-4" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 160 | `              </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 161 | `            )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 162 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 163 | `          <div className="flex items-center justify-between px-2 py-1.5 border-b mb-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 164 | `            <label className="flex items-center gap-2 text-sm cursor-pointer">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 165 | `              <Checkbox` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 166 | `                checked={allSelected}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 167 | `                onCheckedChange={(v) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 168 | `                  if (v) setSelectedClients((clients ?? []).map((c) => c.id));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 169 | `                  else setSelectedClients([]);` | Define o caminho alternativo da condicao anterior. |
| 170 | `                }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 171 | `              />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 172 | `              <span>Selecionar todos</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 173 | `            </label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 174 | `            <span className="text-xs text-muted-foreground">{selectedClients.length}/{clients?.length ?? 0}</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 175 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 176 | `          <div className="max-h-64 overflow-y-auto">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 177 | `            {filteredClients.length === 0 ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 178 | `              <div className="px-2 py-4 text-sm text-muted-foreground text-center">Nenhum cliente</div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 179 | `            ) : (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 180 | `              filteredClients.map((c) => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 181 | `                <label key={c.id} className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-accent cursor-pointer text-sm">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 182 | `                  <Checkbox checked={selectedClients.includes(c.id)} onCheckedChange={() => toggleClient(c.id)} />` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 183 | `                  <span className="truncate">{c.name}</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 184 | `                </label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 185 | `              ))` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 186 | `            )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 187 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 188 | `        </PopoverContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 189 | `      </Popover>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 190 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 191 | `      {/* Assignee */}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 192 | `      <Select value={filters.assignee ?? "all"} onValueChange={(v) => onChange({ ...filters, assignee: v === "all" ? undefined : v })}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 193 | `        <SelectTrigger className="h-8 w-40"><SelectValue placeholder="Responsável" /></SelectTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 194 | `        <SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 195 | `          <SelectItem value="all">Todos responsáveis</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 196 | `          {profiles?.map(p => <SelectItem key={p.id} value={p.id}>{p.full_name || p.email}</SelectItem>)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 197 | `        </SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 198 | `      </Select>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 199 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 200 | `      {/* Priority */}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 201 | `      <Select value={filters.priority ?? "all"} onValueChange={(v) => onChange({ ...filters, priority: v === "all" ? undefined : v })}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 202 | `        <SelectTrigger className="h-8 w-32"><SelectValue placeholder="Prioridade" /></SelectTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 203 | `        <SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 204 | `          <SelectItem value="all">Todas prioridades</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 205 | `          <SelectItem value="low">Baixa</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 206 | `          <SelectItem value="medium">Média</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 207 | `          <SelectItem value="high">Alta</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 208 | `          <SelectItem value="urgent">Urgente</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 209 | `        </SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 210 | `      </Select>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 211 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 212 | `      {activeCount > 0 && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 213 | `        <Button size="sm" variant="ghost" className="h-8 ml-auto text-muted-foreground" onClick={clearAll}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 214 | `          <RotateCcw className="mr-1 h-3.5 w-3.5" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 215 | `          Limpar ({activeCount})` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 216 | `        </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 217 | `      )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 218 | `      {activeCount === 0 && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 219 | `        <div className="ml-auto flex items-center gap-1 text-xs text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 220 | `          <FilterIcon className="h-3.5 w-3.5" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 221 | `          Nenhum filtro` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 222 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 223 | `      )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 224 | `    </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 225 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 226 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 227 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 228 | `function ScopeBtn({ active, onClick, icon, children }: { active: boolean; onClick: () => void; icon: React.ReactNode; children: React.ReactNode }) {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 229 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 230 | `    <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 231 | `      type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 232 | `      onClick={onClick}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 233 | `      className={\`inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-xs font-medium transition ${` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 234 | `        active ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 235 | `      }\`}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 236 | `    >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 237 | `      {icon}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 238 | `      {children}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 239 | `    </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 240 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 241 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 242 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 243 | `export function applyTaskFilters<T extends { id: string; client_id: string | null; assignee_id: string | null; priority: string | null; status_id?: string | null; created_by?: string | null; due_date: string | null; status: string | null; completed_at: string | null; }>(` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 244 | `  tasks: T[], f: Filters, opts?: { userId?: string | null; subtaskAssigneeTaskIds?: Set<string> | null; subtaskAssigneeTaskIdsByUser?: Map<string, Set<string>> | null },` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 245 | `) {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 246 | `  const clientIds = f.clients && f.clients.length > 0` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 247 | `    ? f.clients` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 248 | `    : f.client` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 249 | `      ? [f.client]` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 250 | `      : null;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 251 | `  const uid = opts?.userId ?? null;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 252 | `  const subIds = opts?.subtaskAssigneeTaskIds ?? null;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 253 | `  return tasks.filter(t => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 254 | `    if (f.scope === "mine") {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 255 | `      if (!uid) return false;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 256 | `      const mine = t.assignee_id === uid || (subIds ? subIds.has(t.id) : false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 257 | `      if (!mine) return false;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 258 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 259 | `    if (f.scope === "created" && (!uid || t.created_by !== uid)) return false;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 260 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 261 | `    if (f.date && f.date !== "all" && !matchDateFilter(t, f.date)) return false;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 262 | `    if (f.statusIds && f.statusIds.length > 0) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 263 | `      if (!t.status_id || !f.statusIds.includes(t.status_id)) return false;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 264 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 265 | `    if (clientIds && (!t.client_id || !clientIds.includes(t.client_id))) return false;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 266 | `    if (f.assignee) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 267 | `      const assigneeSubtasks = opts?.subtaskAssigneeTaskIdsByUser?.get(f.assignee);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 268 | `      if (t.assignee_id !== f.assignee && !assigneeSubtasks?.has(t.id)) return false;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 269 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 270 | `    if (f.priority && t.priority !== f.priority) return false;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 271 | `    return true;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 272 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 273 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 274 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 275 | `export type { Filters as TaskFilterValue };` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 276 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 277 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
