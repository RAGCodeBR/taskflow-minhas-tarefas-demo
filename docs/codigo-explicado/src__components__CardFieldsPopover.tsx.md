# src/components/CardFieldsPopover.tsx

Tipo: Componente ou rota React em TypeScript.

Este documento foi gerado para estudo e manutencao. Ele preserva o codigo original e explica linha por linha sem alterar o comportamento do sistema publicado.

| Linha | Codigo original | Explicacao |
| ---: | --- | --- |
| 1 | `import { useState } from "react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 2 | `import {` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 3 | `  DndContext,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 4 | `  PointerSensor,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 5 | `  closestCenter,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 6 | `  useSensor,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 7 | `  useSensors,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 8 | `  type DragEndEvent,` | Declara um contrato de tipos TypeScript para deixar os dados mais seguros e previsiveis. |
| 9 | `} from "@dnd-kit/core";` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 10 | `import {` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 11 | `  SortableContext,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 12 | `  useSortable,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 13 | `  arrayMove,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 14 | `  verticalListSortingStrategy,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 15 | `} from "@dnd-kit/sortable";` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 16 | `import { CSS } from "@dnd-kit/utilities";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 17 | `import { Eye, EyeOff, GripVertical, Settings2 } from "lucide-react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 18 | `import { Button } from "@/components/ui/button";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 19 | `import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 20 | `import {` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 21 | `  ALL_FIELDS,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 22 | `  FIELD_LABELS,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 23 | `  type CardField,` | Declara um contrato de tipos TypeScript para deixar os dados mais seguros e previsiveis. |
| 24 | `  useBoardPreferences,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 25 | `  useUpdateBoardPreferences,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 26 | `} from "@/hooks/use-board-preferences";` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 27 | `import { cn } from "@/lib/utils";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 28 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 29 | `function SortableRow({` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 30 | `  field,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 31 | `  hidden,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 32 | `  onToggle,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 33 | `}: {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 34 | `  field: CardField;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 35 | `  hidden: boolean;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 36 | `  onToggle: () => void;` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 37 | `}) {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 38 | `  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: field });` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 39 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 40 | `    <div` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 41 | `      ref={setNodeRef}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 42 | `      style={{ transform: CSS.Transform.toString(transform), transition }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 43 | `      className={cn(` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 44 | `        "flex items-center gap-2 rounded-md border bg-card px-2 py-1.5",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 45 | `        isDragging && "z-10 shadow",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 46 | `        hidden && "opacity-50",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 47 | `      )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 48 | `    >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 49 | `      <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 50 | `        type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 51 | `        {...attributes}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 52 | `        {...listeners}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 53 | `        className="cursor-grab touch-none rounded p-1 text-muted-foreground hover:bg-muted"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 54 | `        aria-label="Arrastar"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 55 | `      >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 56 | `        <GripVertical className="h-3.5 w-3.5" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 57 | `      </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 58 | `      <span className="flex-1 text-xs">{FIELD_LABELS[field]}</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 59 | `      <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 60 | `        type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 61 | `        onClick={onToggle}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 62 | `        className="rounded p-1 text-muted-foreground hover:bg-muted hover:text-foreground"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 63 | `        title={hidden ? "Mostrar" : "Ocultar"}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 64 | `      >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 65 | `        {hidden ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 66 | `      </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 67 | `    </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 68 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 69 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 70 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 71 | `export function CardFieldsPopover() {` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 72 | `  const [open, setOpen] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 73 | `  const { data: prefs } = useBoardPreferences();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 74 | `  const update = useUpdateBoardPreferences();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 75 | `  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 4 } }));` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 76 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 77 | `  const order = prefs?.field_order ?? [...ALL_FIELDS];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 78 | `  const hidden = prefs?.hidden_fields ?? [];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 79 | `  const color = prefs?.interruption_color ?? "#ef4444";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 80 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 81 | `  function handleDragEnd(e: DragEndEvent) {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 82 | `    const { active, over } = e;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 83 | `    if (!over || active.id === over.id) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 84 | `    const oldIndex = order.indexOf(active.id as CardField);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 85 | `    const newIndex = order.indexOf(over.id as CardField);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 86 | `    if (oldIndex < 0 || newIndex < 0) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 87 | `    update.mutate({ field_order: arrayMove(order, oldIndex, newIndex) });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 88 | `  }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 89 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 90 | `  function toggle(field: CardField) {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 91 | `    const next = hidden.includes(field) ? hidden.filter((f) => f !== field) : [...hidden, field];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 92 | `    update.mutate({ hidden_fields: next });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 93 | `  }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 94 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 95 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 96 | `    <Popover open={open} onOpenChange={setOpen}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 97 | `      <PopoverTrigger asChild>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 98 | `        <Button variant="outline" size="sm" className="gap-1.5">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 99 | `          <Settings2 className="h-3.5 w-3.5" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 100 | `          Configurar card` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 101 | `        </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 102 | `      </PopoverTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 103 | `      <PopoverContent className="w-80 p-3" align="end">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 104 | `        <div className="mb-2 flex items-center justify-between">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 105 | `          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Campos do card</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 106 | `          <div className="flex gap-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 107 | `            <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 108 | `              type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 109 | `              onClick={() => update.mutate({ hidden_fields: [] })}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 110 | `              className="text-[10px] text-primary hover:underline"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 111 | `            >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 112 | `              Mostrar tudo` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 113 | `            </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 114 | `            <span className="text-[10px] text-muted-foreground">·</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 115 | `            <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 116 | `              type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 117 | `              onClick={() => update.mutate({ hidden_fields: [...ALL_FIELDS] })}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 118 | `              className="text-[10px] text-primary hover:underline"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 119 | `            >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 120 | `              Ocultar tudo` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 121 | `            </button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 122 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 123 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 124 | `        <p className="mb-2 text-[10px] text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 125 | `          Arraste para reordenar. Clique no olho para mostrar/ocultar. A configuração vale para todos os cards do quadro.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 126 | `        </p>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 127 | `        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 128 | `          <SortableContext items={order} strategy={verticalListSortingStrategy}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 129 | `            <div className="space-y-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 130 | `              {order.map((field) => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 131 | `                <SortableRow` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 132 | `                  key={field}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 133 | `                  field={field}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 134 | `                  hidden={hidden.includes(field)}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 135 | `                  onToggle={() => toggle(field)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 136 | `                />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 137 | `              ))}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 138 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 139 | `          </SortableContext>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 140 | `        </DndContext>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 141 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 142 | `        <div className="mt-4 border-t pt-3">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 143 | `          <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 144 | `            Cor das interrupções` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 145 | `          </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 146 | `          <div className="flex items-center gap-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 147 | `            <input` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 148 | `              type="color"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 149 | `              value={color}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 150 | `              onChange={(e) => update.mutate({ interruption_color: e.target.value })}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 151 | `              className="h-8 w-12 cursor-pointer rounded border bg-transparent"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 152 | `            />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 153 | `            <input` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 154 | `              type="text"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 155 | `              value={color}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 156 | `              onChange={(e) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 157 | `                const v = e.target.value;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 158 | `                if (/^#[0-9a-fA-F]{0,6}$/.test(v)) update.mutate({ interruption_color: v });` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 159 | `              }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 160 | `              className="h-8 flex-1 rounded border bg-background px-2 text-xs"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 161 | `            />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 162 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 163 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 164 | `      </PopoverContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 165 | `    </Popover>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 166 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 167 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 168 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
