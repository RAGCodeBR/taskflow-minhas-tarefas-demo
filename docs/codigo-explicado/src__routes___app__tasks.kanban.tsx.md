# src/routes/_app/tasks.kanban.tsx

Tipo: Componente ou rota React em TypeScript.

Este documento foi gerado para estudo e manutencao. Ele preserva o codigo original e explica linha por linha sem alterar o comportamento do sistema publicado.

| Linha | Codigo original | Explicacao |
| ---: | --- | --- |
| 1 | `import { createFileRoute } from "@tanstack/react-router";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 2 | `import { useEffect, useLayoutEffect, useMemo, useRef, useState, type CSSProperties } from "react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 3 | `import {` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 4 | `  DndContext, type CollisionDetection, type DragEndEvent, PointerSensor, TouchSensor, useSensor, useSensors,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 5 | `  DragOverlay, useDroppable, closestCenter, getFirstCollision, pointerWithin, rectIntersection,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 6 | `} from "@dnd-kit/core";` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 7 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 8 | `import {` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 9 | `  SortableContext, useSortable, horizontalListSortingStrategy, verticalListSortingStrategy, arrayMove,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 10 | `} from "@dnd-kit/sortable";` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 11 | `import { CSS } from "@dnd-kit/utilities";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 12 | `import { useQueryClient } from "@tanstack/react-query";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 13 | `import { Plus, MoreVertical, Pencil, Trash2, GripVertical, FolderOpen, ArrowUp, ArrowDown, FileDown, Rows, Columns } from "lucide-react";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 14 | `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 15 | `import { ClientFilesSheet } from "@/components/ClientFilesSheet";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 16 | `import { Button } from "@/components/ui/button";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 17 | `import { Input } from "@/components/ui/input";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 18 | `import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 19 | `import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 20 | `import { supabase } from "@/integrations/supabase/client";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 21 | `import { useAuth } from "@/hooks/use-auth";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 22 | `import { useTasks, useColumns, useClients, useProfiles, useTaskTags, useTaskStatuses, useTaskTagLinks, useUserColumnOrder, useUserTaskOrder, useSubtasks, type Task, type KanbanColumn } from "@/hooks/use-data";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 23 | `import { TaskCard } from "@/components/TaskCard";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 24 | `import { TaskDialog } from "@/components/TaskDialog";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 25 | `import { TagManagerDialog } from "@/components/TagManagerDialog";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 26 | `import { StatusManagerDialog } from "@/components/StatusManagerDialog";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 27 | `import { TaskFilters, applyTaskFilters, type TaskFilterValue } from "@/components/TaskFilters";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 28 | `import { CardFieldsPopover } from "@/components/CardFieldsPopover";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 29 | `import { useBoardPreferences, useUpdateBoardPreferences } from "@/hooks/use-board-preferences";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 30 | `import { toast } from "sonner";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 31 | `import { format } from "date-fns";` | Importa bibliotecas, componentes, tipos ou funcoes usados neste arquivo. |
| 32 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 33 | `export const Route = createFileRoute("/_app/tasks/kanban")({` | Exporta valor, funcao, tipo ou componente para ser usado por outros arquivos. |
| 34 | `  component: KanbanPage,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 35 | `});` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 36 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 37 | `function SortableTaskCard({ task, colId, onEdit, onDuplicate, clients, profiles, columns, tags, statuses, orientation }: any) {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 38 | `  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 39 | `    id: task.id,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 40 | `    data: { type: "task", colId: colId ?? task.column_id },` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 41 | `    animateLayoutChanges: () => false,` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 42 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 43 | `  const style = {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 44 | `    transform: CSS.Translate.toString(transform),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 45 | `    transition: transition ?? "transform 180ms cubic-bezier(0.2, 0, 0, 1)",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 46 | `    opacity: isDragging ? 0.4 : 1,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 47 | `    willChange: "transform",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 48 | `    ...(task.card_width ? { width: task.card_width, minWidth: task.card_width } : null),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 49 | `  } as CSSProperties;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 50 | `  const widthClass = task.card_width` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 51 | `    ? "shrink-0"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 52 | `    : "w-72 min-w-0 shrink-0";` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 53 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 54 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 55 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 56 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 57 | `    <div ref={setNodeRef} style={style} className={widthClass}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 58 | `      <TaskCard` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 59 | `        task={task}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 60 | `        columns={columns}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 61 | `        clients={clients}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 62 | `        profiles={profiles}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 63 | `        tags={tags}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 64 | `        statuses={statuses}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 65 | `        onEdit={onEdit}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 66 | `        onDuplicate={onDuplicate}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 67 | `        dragHandleProps={{ ...attributes, ...listeners }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 68 | `      />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 69 | `    </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 70 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 71 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 72 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 73 | `const COMPLETED_COL_ID = "__completed__";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 74 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 75 | `type SortField = "position" | "due_date" | "created_at" | "tag" | "priority" | "status";` | Declara um contrato de tipos TypeScript para deixar os dados mais seguros e previsiveis. |
| 76 | `type SortDirection = "asc" | "desc";` | Declara um contrato de tipos TypeScript para deixar os dados mais seguros e previsiveis. |
| 77 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 78 | `function compareByField(field: SortField, a: any, b: any, tagNameForTask: Map<string, string>, statuses: any[]): number {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 79 | `  switch (field) {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 80 | `    case "due_date":` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 81 | `      if (!a.due_date && !b.due_date) return 0;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 82 | `      if (!a.due_date) return 1;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 83 | `      if (!b.due_date) return -1;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 84 | `      return new Date(a.due_date).getTime() - new Date(b.due_date).getTime();` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 85 | `    case "created_at":` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 86 | `      return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 87 | `    case "tag":` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 88 | `      return (tagNameForTask.get(a.id) ?? "").localeCompare(tagNameForTask.get(b.id) ?? "");` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 89 | `    case "priority": {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 90 | `      const order: Record<string, number> = { low: 1, medium: 2, high: 3, urgent: 4 };` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 91 | `      return (order[a.priority ?? ""] || 0) - (order[b.priority ?? ""] || 0);` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 92 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 93 | `    case "status": {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 94 | `      const sa = statuses.find((s: any) => s.id === a.status_id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 95 | `      const sb = statuses.find((s: any) => s.id === b.status_id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 96 | `      return (sa ? sa.position : 9999) - (sb ? sb.position : 9999);` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 97 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 98 | `    default:` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 99 | `      return 0;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 100 | `  }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 101 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 102 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 103 | `function CompletedColumn({ taskIds, count, children, orientation }: any) {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 104 | `  const { setNodeRef, isOver } = useDroppable({` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 105 | `    id: \`drop:${COMPLETED_COL_ID}\`,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 106 | `    data: { type: "column-drop", colId: COMPLETED_COL_ID },` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 107 | `  });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 108 | `  const isH = orientation === "horizontal";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 109 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 110 | `    <div className={isH ? "flex w-72 shrink-0 flex-col" : "flex w-full flex-col"}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 111 | `      <div className="mb-2 flex items-center gap-1.5 px-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 112 | `        <span className="h-3 w-3 rounded-full bg-emerald-500" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 113 | `        <h3 className="font-semibold">Concluídas</h3>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 114 | `        <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-medium text-emerald-600">{count}</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 115 | `        {!isH && <span className="ml-2 text-xs text-muted-foreground">Arraste tarefas aqui para concluir</span>}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 116 | `      </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 117 | `      <SortableContext items={taskIds} strategy={isH ? verticalListSortingStrategy : horizontalListSortingStrategy}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 118 | `        <div` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 119 | `          ref={setNodeRef}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 120 | `          className={\`kanban-scroll rounded-lg border-2 border-dashed p-2 transition ${` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 121 | `            isH ? "flex flex-col gap-2 overflow-y-auto" : "flex items-start gap-2 overflow-x-auto overflow-y-hidden"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 122 | `          } ${isOver ? "border-emerald-500 bg-emerald-500/10" : "border-emerald-500/30 bg-emerald-500/5"}\`}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 123 | `          style={{ minHeight: isH ? 200 : 120, maxHeight: isH ? "calc(100vh - 360px)" : undefined }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 124 | `        >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 125 | `          {children}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 126 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 127 | `      </SortableContext>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 128 | `    </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 129 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 130 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 131 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 132 | `function SortableColumn({ col, taskIds, children, onEdit, onDelete, onAdd, orientation, canManage }: any) {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 133 | `  const sortable = useSortable({ id: \`col:${col.id}\`, data: { type: "column", colId: col.id } });` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 134 | `  const { setNodeRef: setSortRef, attributes, listeners, transform, transition, isDragging } = sortable;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 135 | `  const { setNodeRef: setDropRef, isOver } = useDroppable({ id: \`drop:${col.id}\`, data: { type: "column-drop", colId: col.id } });` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 136 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 137 | `  const style = {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 138 | `    transform: CSS.Transform.toString(transform),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 139 | `    transition,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 140 | `    opacity: isDragging ? 0.5 : 1,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 141 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 142 | `  const isH = orientation === "horizontal";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 143 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 144 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 145 | `    <div ref={setSortRef} style={style} className={isH ? "flex w-fit min-w-72 shrink-0 flex-col" : "flex w-full flex-col"}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 146 | `      <div className="mb-2 flex items-center justify-between px-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 147 | `        <div className="flex items-center gap-1.5">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 148 | `          <span` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 149 | `            {...attributes}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 150 | `            {...listeners}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 151 | `            className="inline-flex h-6 w-6 cursor-grab items-center justify-center rounded-md text-muted-foreground hover:bg-muted active:cursor-grabbing"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 152 | `            title="Arrastar coluna"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 153 | `          >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 154 | `            <GripVertical className="h-4 w-4" />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 155 | `          </span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 156 | `          <span className="h-3 w-3 rounded-full" style={{ background: col.color || "#1e3a8a" }} />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 157 | `          <h3 className="font-semibold">{col.name}</h3>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 158 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 159 | `        <div className="flex items-center gap-1">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 160 | `          <Button size="icon" variant="ghost" className="h-7 w-7" onClick={onAdd}><Plus className="h-4 w-4" /></Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 161 | `          {canManage && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 162 | `            <DropdownMenu>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 163 | `              <DropdownMenuTrigger asChild><Button size="icon" variant="ghost" className="h-7 w-7"><MoreVertical className="h-4 w-4" /></Button></DropdownMenuTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 164 | `              <DropdownMenuContent align="end">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 165 | `                <DropdownMenuItem onClick={onEdit}><Pencil className="mr-2 h-4 w-4" />Editar</DropdownMenuItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 166 | `                <DropdownMenuItem onClick={onDelete} className="text-destructive"><Trash2 className="mr-2 h-4 w-4" />Excluir</DropdownMenuItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 167 | `              </DropdownMenuContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 168 | `            </DropdownMenu>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 169 | `          )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 170 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 171 | `      </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 172 | `      <SortableContext items={taskIds} strategy={isH ? verticalListSortingStrategy : horizontalListSortingStrategy}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 173 | `        <div` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 174 | `          ref={setDropRef}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 175 | `          className={\`kanban-scroll rounded-lg border-2 border-dashed p-2 transition ${` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 176 | `            isH ? "flex flex-col gap-3 overflow-y-auto" : "flex items-start gap-4 overflow-x-auto overflow-y-hidden"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 177 | `          } ${isOver ? "border-primary bg-primary/5" : "border-transparent bg-muted/40"}\`}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 178 | `          style={{ minHeight: isH ? 200 : 120, maxHeight: isH ? "calc(100vh - 360px)" : undefined }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 179 | `        >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 180 | `          {children}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 181 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 182 | `      </SortableContext>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 183 | `    </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 184 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 185 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 186 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 187 | `function KanbanPage() {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 188 | `  const qc = useQueryClient();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 189 | `  const { user, isAdmin } = useAuth();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 190 | `  const { data: tasks = [] } = useTasks();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 191 | `  const { data: rawColumns = [] } = useColumns();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 192 | `  const { data: userColOrder = [] } = useUserColumnOrder();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 193 | `  const { data: userTaskOrder = [] } = useUserTaskOrder();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 194 | `  const { data: clients = [] } = useClients();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 195 | `  const { data: profiles = [] } = useProfiles();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 196 | `  const { data: tags = [] } = useTaskTags();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 197 | `  const { data: statuses = [] } = useTaskStatuses();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 198 | `  const { data: boardPrefs } = useBoardPreferences();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 199 | `  const { data: allSubtasks = [] } = useSubtasks();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 200 | `  const updatePrefs = useUpdateBoardPreferences();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 201 | `  const orientation = boardPrefs?.kanban_orientation ?? "vertical";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 202 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 203 | `  const subtaskAssigneeTaskIds = useMemo(() => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 204 | `    const s = new Set<string>();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 205 | `    if (!user?.id) return s;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 206 | `    for (const st of allSubtasks as any[]) if (st.assignee_id === user.id && st.task_id) s.add(st.task_id);` | Inicia uma repeticao sobre dados ou condicoes. |
| 207 | `    return s;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 208 | `  }, [allSubtasks, user?.id]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 209 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 210 | `  const subtaskAssigneeTaskIdsByUser = useMemo(() => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 211 | `    const map = new Map<string, Set<string>>();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 212 | `    for (const st of allSubtasks as any[]) {` | Inicia uma repeticao sobre dados ou condicoes. |
| 213 | `      if (!st.assignee_id || !st.task_id) continue;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 214 | `      const set = map.get(st.assignee_id) ?? new Set<string>();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 215 | `      set.add(st.task_id);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 216 | `      map.set(st.assignee_id, set);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 217 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 218 | `    return map;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 219 | `  }, [allSubtasks]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 220 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 221 | `  // Apply per-user column ordering (fallback to global position)` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 222 | `  const columns = useMemo(() => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 223 | `    const ord = new Map(userColOrder.map((u) => [u.column_id, u.position]));` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 224 | `    return [...rawColumns].sort((a, b) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 225 | `      const ap = ord.has(a.id) ? (ord.get(a.id) as number) : a.position + 10000;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 226 | `      const bp = ord.has(b.id) ? (ord.get(b.id) as number) : b.position + 10000;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 227 | `      return ap - bp;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 228 | `    });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 229 | `  }, [rawColumns, userColOrder]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 230 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 231 | `  // Per-user task position map (fallback to task.position)` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 232 | `  const userTaskPos = useMemo(() => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 233 | `    const m = new Map<string, number>();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 234 | `    userTaskOrder.forEach((u) => m.set(u.task_id, u.position));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 235 | `    return m;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 236 | `  }, [userTaskOrder]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 237 | `  const [filters, setFilters] = useState<TaskFilterValue>({});` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 238 | `  const [sort, setSort] = useState<{ field: SortField; direction: SortDirection }>({ field: "position", direction: "asc" });` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 239 | `  const [sort2, setSort2] = useState<{ field: SortField | "none"; direction: SortDirection }>({ field: "none", direction: "asc" });` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 240 | `  const [activeTask, setActiveTask] = useState<Task | null>(null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 241 | `  const [dialogOpen, setDialogOpen] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 242 | `  const [editTask, setEditTask] = useState<Task | null>(null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 243 | `  const [defaultCol, setDefaultCol] = useState<string | null>(null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 244 | `  const [tagsOpen, setTagsOpen] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 245 | `  const [statusesOpen, setStatusesOpen] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 246 | `  const [filesOpen, setFilesOpen] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 247 | `  const [exportingPdf, setExportingPdf] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 248 | `  const [completedRange, setCompletedRange] = useState<{ start: string; end: string }>({ start: "", end: "" });` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 249 | `  const [columnEditor, setColumnEditor] = useState<{ open: boolean; id: string | null; name: string; color: string }>({ open: false, id: null, name: "", color: "#1e3a8a" });` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 250 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 251 | `  const completedStatus = useMemo(() => statuses.find((s) => s.is_completed) ?? null, [statuses]);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 252 | `  const fallbackStatus = useMemo(() => statuses.find((s) => !s.is_completed) ?? null, [statuses]);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 253 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 254 | `  const { data: tagLinks = [] } = useTaskTagLinks();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 255 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 256 | `  const tagNameForTask = useMemo(() => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 257 | `    const map = new Map<string, string>();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 258 | `    const linksByTask = new Map<string, string[]>();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 259 | `    tagLinks.forEach((l) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 260 | `      if (!linksByTask.has(l.task_id)) linksByTask.set(l.task_id, []);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 261 | `      linksByTask.get(l.task_id)!.push(l.tag_id);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 262 | `    });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 263 | `    tasks.forEach((t) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 264 | `      const linkIds = linksByTask.get(t.id) ?? [];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 265 | `      if (t.tag_id) linkIds.push(t.tag_id);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 266 | `      const uniqueIds = [...new Set(linkIds)];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 267 | `      const names = uniqueIds` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 268 | `        .map((id) => tags.find((tag) => tag.id === id)?.name ?? "")` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 269 | `        .filter(Boolean)` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 270 | `        .sort();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 271 | `      map.set(t.id, names[0] ?? "");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 272 | `    });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 273 | `    return map;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 274 | `  }, [tagLinks, tags, tasks]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 275 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 276 | `  const completedTasks = useMemo(() => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 277 | `    const startToday = new Date(); startToday.setHours(0, 0, 0, 0);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 278 | `    const endToday = new Date(); endToday.setHours(23, 59, 59, 999);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 279 | `    const hasRange = !!(completedRange.start || completedRange.end);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 280 | `    let all = tasks.filter((t) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 281 | `      if (t.status !== "done" && !t.completed_at) return false;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 282 | `      const ref = t.completed_at ? new Date(t.completed_at) : new Date(t.updated_at);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 283 | `      if (hasRange) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 284 | `        const start = completedRange.start ? new Date(\`${completedRange.start}T00:00:00\`) : null;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 285 | `        const end = completedRange.end ? new Date(\`${completedRange.end}T23:59:59\`) : null;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 286 | `        return (!start || ref >= start) && (!end || ref <= end);` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 287 | `      }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 288 | `      // Padrão: apenas as concluídas de hoje` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 289 | `      return ref >= startToday && ref <= endToday;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 290 | `    });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 291 | `    all = applyTaskFilters(all, filters, { userId: user?.id ?? null, subtaskAssigneeTaskIds, subtaskAssigneeTaskIdsByUser });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 292 | `    all.sort((a, b) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 293 | `      let cmp = 0;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 294 | `      switch (sort.field) {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 295 | `        case "due_date": {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 296 | `          if (!a.due_date && !b.due_date) cmp = 0;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 297 | `          else if (!a.due_date) cmp = 1;` | Define o caminho alternativo da condicao anterior. |
| 298 | `          else if (!b.due_date) cmp = -1;` | Define o caminho alternativo da condicao anterior. |
| 299 | `          else cmp = new Date(a.due_date).getTime() - new Date(b.due_date).getTime();` | Define o caminho alternativo da condicao anterior. |
| 300 | `          break;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 301 | `        }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 302 | `        case "created_at": {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 303 | `          cmp = new Date(a.created_at).getTime() - new Date(b.created_at).getTime();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 304 | `          break;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 305 | `        }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 306 | `        case "tag": {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 307 | `          cmp = (tagNameForTask.get(a.id) ?? "").localeCompare(tagNameForTask.get(b.id) ?? "");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 308 | `          break;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 309 | `        }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 310 | `        case "priority": {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 311 | `          const order: Record<string, number> = { low: 1, medium: 2, high: 3, urgent: 4 };` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 312 | `          cmp = (order[a.priority ?? ""] || 0) - (order[b.priority ?? ""] || 0);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 313 | `          break;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 314 | `        }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 315 | `        case "status": {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 316 | `          const sa = statuses.find((s) => s.id === a.status_id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 317 | `          const sb = statuses.find((s) => s.id === b.status_id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 318 | `          const ap = sa ? sa.position : 9999;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 319 | `          const bp = sb ? sb.position : 9999;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 320 | `          cmp = ap - bp;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 321 | `          break;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 322 | `        }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 323 | `        case "position":` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 324 | `        default: {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 325 | `          cmp = (b.completed_at ?? b.updated_at ?? "").localeCompare(a.completed_at ?? a.updated_at ?? "");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 326 | `          break;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 327 | `        }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 328 | `      }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 329 | `      if (cmp === 0 && sort2.field !== "none") {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 330 | `        const c2 = compareByField(sort2.field as SortField, a, b, tagNameForTask, statuses);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 331 | `        cmp = sort2.direction === "asc" ? c2 : -c2;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 332 | `      }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 333 | `      if (cmp === 0) cmp = (b.completed_at ?? b.updated_at ?? "").localeCompare(a.completed_at ?? a.updated_at ?? "");` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 334 | `      return sort.direction === "asc" ? cmp : -cmp;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 335 | `    });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 336 | `    return all;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 337 | `  }, [tasks, filters, sort, sort2, tagNameForTask, completedRange, statuses, user?.id, subtaskAssigneeTaskIds, subtaskAssigneeTaskIdsByUser]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 338 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 339 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 340 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 341 | `  const sensors = useSensors(` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 342 | `    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 343 | `    useSensor(TouchSensor, { activationConstraint: { delay: 150, tolerance: 8 } }),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 344 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 345 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 346 | `  const filtered = useMemo(() => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 347 | `    let r = tasks.filter((t) => t.status !== "done" && !t.completed_at);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 348 | `    r = applyTaskFilters(r, filters, { userId: user?.id ?? null, subtaskAssigneeTaskIds, subtaskAssigneeTaskIdsByUser });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 349 | `    return r;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 350 | `  }, [tasks, filters, user?.id, subtaskAssigneeTaskIds, subtaskAssigneeTaskIdsByUser]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 351 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 352 | `  const sortedTasks = useMemo(() => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 353 | `    const r = [...filtered];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 354 | `    r.sort((a, b) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 355 | `      let cmp = 0;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 356 | `      switch (sort.field) {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 357 | `        case "due_date": {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 358 | `          if (!a.due_date && !b.due_date) cmp = 0;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 359 | `          else if (!a.due_date) cmp = 1;` | Define o caminho alternativo da condicao anterior. |
| 360 | `          else if (!b.due_date) cmp = -1;` | Define o caminho alternativo da condicao anterior. |
| 361 | `          else cmp = new Date(a.due_date).getTime() - new Date(b.due_date).getTime();` | Define o caminho alternativo da condicao anterior. |
| 362 | `          break;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 363 | `        }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 364 | `        case "created_at": {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 365 | `          cmp = new Date(a.created_at).getTime() - new Date(b.created_at).getTime();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 366 | `          break;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 367 | `        }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 368 | `        case "tag": {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 369 | `          cmp = (tagNameForTask.get(a.id) ?? "").localeCompare(tagNameForTask.get(b.id) ?? "");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 370 | `          break;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 371 | `        }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 372 | `        case "priority": {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 373 | `          const order: Record<string, number> = { low: 1, medium: 2, high: 3, urgent: 4 };` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 374 | `          cmp = (order[a.priority ?? ""] || 0) - (order[b.priority ?? ""] || 0);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 375 | `          break;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 376 | `        }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 377 | `        case "status": {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 378 | `          const sa = statuses.find((s) => s.id === a.status_id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 379 | `          const sb = statuses.find((s) => s.id === b.status_id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 380 | `          const ap = sa ? sa.position : 9999;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 381 | `          const bp = sb ? sb.position : 9999;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 382 | `          cmp = ap - bp;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 383 | `          break;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 384 | `        }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 385 | `        case "position":` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 386 | `        default: {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 387 | `          const ap = userTaskPos.has(a.id) ? (userTaskPos.get(a.id) as number) : (a.position ?? 0) + 100000;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 388 | `          const bp = userTaskPos.has(b.id) ? (userTaskPos.get(b.id) as number) : (b.position ?? 0) + 100000;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 389 | `          cmp = ap - bp;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 390 | `          break;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 391 | `        }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 392 | `      }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 393 | `      if (cmp === 0 && sort2.field !== "none") {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 394 | `        const c2 = compareByField(sort2.field as SortField, a, b, tagNameForTask, statuses);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 395 | `        cmp = sort2.direction === "asc" ? c2 : -c2;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 396 | `      }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 397 | `      if (cmp === 0) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 398 | `        const ap = userTaskPos.has(a.id) ? (userTaskPos.get(a.id) as number) : (a.position ?? 0) + 100000;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 399 | `        const bp = userTaskPos.has(b.id) ? (userTaskPos.get(b.id) as number) : (b.position ?? 0) + 100000;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 400 | `        cmp = ap - bp;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 401 | `      }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 402 | `      return sort.direction === "asc" ? cmp : -cmp;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 403 | `    });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 404 | `    return r;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 405 | `  }, [filtered, sort, sort2, tagNameForTask, userTaskPos, statuses]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 406 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 407 | `  const tasksByCol = useMemo(() => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 408 | `    const map = new Map<string, Task[]>();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 409 | `    columns.forEach(c => map.set(c.id, []));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 410 | `    const firstColId = columns[0]?.id;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 411 | `    sortedTasks.forEach(t => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 412 | `      if (t.column_id && map.has(t.column_id)) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 413 | `        map.get(t.column_id)!.push(t);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 414 | `        return;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 415 | `      }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 416 | `      if (firstColId && map.has(firstColId)) map.get(firstColId)!.push(t);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 417 | `    });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 418 | `    return map;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 419 | `  }, [sortedTasks, columns]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 420 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 421 | `  const columnIds = useMemo(() => columns.map((c) => \`col:${c.id}\`), [columns]);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 422 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 423 | `  const collisionDetectionStrategy: CollisionDetection = (args) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 424 | `    const activeType = args.active.data.current?.type;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 425 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 426 | `    if (activeType === "column") {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 427 | `      return closestCenter({` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 428 | `        ...args,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 429 | `        droppableContainers: args.droppableContainers.filter(` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 430 | `          (container) => container.data.current?.type === "column",` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 431 | `        ),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 432 | `      });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 433 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 434 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 435 | `    const pointerIntersections = pointerWithin(args);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 436 | `    const intersections = pointerIntersections.length > 0 ? pointerIntersections : rectIntersection(args);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 437 | `    const overId = getFirstCollision(intersections, "id");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 438 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 439 | `    if (overId) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 440 | `      const matchedColumn = columns.find(` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 441 | `        (column) => \`drop:${column.id}\` === overId || \`col:${column.id}\` === overId,` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 442 | `      );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 443 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 444 | `      if (matchedColumn) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 445 | `        const taskIds = (tasksByCol.get(matchedColumn.id) ?? []).map((task) => task.id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 446 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 447 | `        if (taskIds.length > 0) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 448 | `          const taskCollisions = closestCenter({` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 449 | `            ...args,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 450 | `            droppableContainers: args.droppableContainers.filter((container) =>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 451 | `              taskIds.includes(String(container.id)),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 452 | `            ),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 453 | `          });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 454 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 455 | `          if (taskCollisions.length > 0) return taskCollisions;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 456 | `        }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 457 | `      }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 458 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 459 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 460 | `    if (intersections.length > 0) return intersections;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 461 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 462 | `    return closestCenter({` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 463 | `      ...args,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 464 | `      droppableContainers: args.droppableContainers.filter((container) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 465 | `        const type = container.data.current?.type;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 466 | `        return type === "task" || type === "column-drop" || type === "column";` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 467 | `      }),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 468 | `    });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 469 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 470 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 471 | `  const onDragEnd = async (e: DragEndEvent) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 472 | `    setActiveTask(null);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 473 | `    const activeType = e.active.data.current?.type;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 474 | `    if (!e.over) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 475 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 476 | `    if (activeType === "column") {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 477 | `      const overType = e.over.data.current?.type;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 478 | `      if (overType !== "column") return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 479 | `      const oldIndex = columns.findIndex((c) => \`col:${c.id}\` === e.active.id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 480 | `      const newIndex = columns.findIndex((c) => \`col:${c.id}\` === e.over!.id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 481 | `      if (oldIndex === -1 || newIndex === -1 || oldIndex === newIndex) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 482 | `      if (!user) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 483 | `      const next = arrayMove(columns, oldIndex, newIndex);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 484 | `      // Optimistic local order: refresh user_column_order cache so columns memo recomputes` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 485 | `      qc.setQueryData(["user_column_order"], next.map((c, i) => ({ column_id: c.id, position: i })));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 486 | `      // Persist per-user ordering only (does NOT affect other users)` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 487 | `      const rows = next.map((c, i) => ({ user_id: user.id, column_id: c.id, position: i }));` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 488 | `      const { error } = await supabase.from("user_column_order").upsert(rows, { onConflict: "user_id,column_id" });` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 489 | `      if (error) toast.error(error.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 490 | `      qc.invalidateQueries({ queryKey: ["user_column_order"] });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 491 | `      return;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 492 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 493 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 494 | `    // task drag` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 495 | `    const taskId = e.active.id as string;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 496 | `    const overData = e.over.data.current as any;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 497 | `    const overId = e.over.id as string;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 498 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 499 | `    const task = tasks.find((t) => t.id === taskId);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 500 | `    if (!task) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 501 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 502 | `    let targetCol: string | null = null;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 503 | `    let targetIndex = -1;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 504 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 505 | `    if (overData?.type === "task") {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 506 | `      targetCol = overData.colId as string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 507 | `      const colTasks = tasksByCol.get(targetCol) ?? [];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 508 | `      targetIndex = colTasks.findIndex((t) => t.id === overId);` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 509 | `    } else if (overData?.type === "column-drop") {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 510 | `      targetCol = overData.colId as string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 511 | `      const colTasks = tasksByCol.get(targetCol) ?? [];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 512 | `      targetIndex = colTasks.length;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 513 | `    } else if (overData?.type === "column") {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 514 | `      // Hit the column header/sortable wrapper — treat as drop at end of that column` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 515 | `      targetCol = overData.colId as string;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 516 | `      const colTasks = tasksByCol.get(targetCol) ?? [];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 517 | `      targetIndex = colTasks.length;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 518 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 519 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 520 | `    if (!targetCol) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 521 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 522 | `    const wasCompleted = !!task.completed_at || task.status === "done";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 523 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 524 | `    // Drop into the "Concluídas" lane` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 525 | `    if (targetCol === COMPLETED_COL_ID) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 526 | `      if (wasCompleted) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 527 | `      const patch: Partial<Task> = {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 528 | `        status: "done",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 529 | `        completed_at: new Date().toISOString(),` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 530 | `      };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 531 | `      if (completedStatus?.id) patch.status_id = completedStatus.id;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 532 | `      qc.setQueryData<Task[]>(["tasks"], (curr = []) =>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 533 | `        curr.map((t) => (t.id === taskId ? { ...t, ...patch } as Task : t)),` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 534 | `      );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 535 | `      const { error } = await supabase.from("tasks").update(patch).eq("id", taskId);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 536 | `      if (error) toast.error(error.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 537 | `      qc.invalidateQueries({ queryKey: ["tasks"] });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 538 | `      toast.success("Tarefa concluída");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 539 | `      return;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 540 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 541 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 542 | `    // Drag out of "Concluídas" back into a normal column → restore` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 543 | `    if (wasCompleted) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 544 | `      const patch: Partial<Task> = {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 545 | `        status: "todo",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 546 | `        completed_at: null,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 547 | `        column_id: targetCol,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 548 | `      };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 549 | `      if (fallbackStatus?.id) patch.status_id = fallbackStatus.id;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 550 | `      else patch.status_id = null;` | Define o caminho alternativo da condicao anterior. |
| 551 | `      qc.setQueryData<Task[]>(["tasks"], (curr = []) =>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 552 | `        curr.map((t) => (t.id === taskId ? { ...t, ...patch } as Task : t)),` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 553 | `      );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 554 | `      const { error } = await supabase.from("tasks").update(patch).eq("id", taskId);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 555 | `      if (error) toast.error(error.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 556 | `      qc.invalidateQueries({ queryKey: ["tasks"] });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 557 | `      toast.success("Tarefa restaurada");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 558 | `      return;` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 559 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 560 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 561 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 562 | `    const sourceCol = task.column_id;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 563 | `    const sourceList = sourceCol ? tasksByCol.get(sourceCol) ?? [] : [];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 564 | `    const targetList = tasksByCol.get(targetCol) ?? [];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 565 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 566 | `    let nextTargetList: Task[];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 567 | `    if (sourceCol === targetCol) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 568 | `      const oldIdx = sourceList.findIndex((t) => t.id === taskId);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 569 | `      if (oldIdx === -1 || oldIdx === targetIndex) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 570 | `      nextTargetList = arrayMove(sourceList, oldIdx, targetIndex);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 571 | `    } else {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 572 | `      nextTargetList = [...targetList];` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 573 | `      const insertAt = targetIndex === -1 ? nextTargetList.length : targetIndex;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 574 | `      nextTargetList.splice(insertAt, 0, { ...task, column_id: targetCol });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 575 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 576 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 577 | `    if (!user) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 578 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 579 | `    // Optimistic local: update task.column_id if it changed` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 580 | `    if (sourceCol !== targetCol) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 581 | `      qc.setQueryData<Task[]>(["tasks"], (curr = []) =>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 582 | `        curr.map((t) => (t.id === taskId ? { ...t, column_id: targetCol! } as Task : t)),` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 583 | `      );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 584 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 585 | `    // Optimistic per-user ordering for the target column` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 586 | `    qc.setQueryData<{ task_id: string; position: number }[]>(["user_task_order"], (curr = []) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 587 | `      const filteredOrder = curr.filter((u) => !nextTargetList.some((t) => t.id === u.task_id));` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 588 | `      const newOrders = nextTargetList.map((t, i) => ({ task_id: t.id, position: i }));` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 589 | `      return [...filteredOrder, ...newOrders];` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 590 | `    });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 591 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 592 | `    // Persist: column change is GLOBAL; ordering is PER-USER` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 593 | `    if (sourceCol !== targetCol) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 594 | `      const { error } = await supabase.from("tasks").update({ column_id: targetCol }).eq("id", taskId);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 595 | `      if (error) toast.error(error.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 596 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 597 | `    const rows = nextTargetList.map((t, i) => ({ user_id: user.id, task_id: t.id, position: i }));` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 598 | `    const { error: ordErr } = await supabase.from("user_task_order").upsert(rows, { onConflict: "user_id,task_id" });` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 599 | `    if (ordErr) toast.error(ordErr.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 600 | `    qc.invalidateQueries({ queryKey: ["tasks"] });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 601 | `    qc.invalidateQueries({ queryKey: ["user_task_order"] });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 602 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 603 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 604 | `  const addColumn = () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 605 | `    if (!isAdmin) return toast.error("Apenas administradores podem criar colunas");` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 606 | `    setColumnEditor({ open: true, id: null, name: "", color: "#1e3a8a" });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 607 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 608 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 609 | `  const renameColumn = (col: KanbanColumn) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 610 | `    setColumnEditor({ open: true, id: col.id, name: col.name, color: col.color || "#1e3a8a" });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 611 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 612 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 613 | `  const saveColumn = async () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 614 | `    if (!user) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 615 | `    const name = columnEditor.name.trim();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 616 | `    if (!name) { toast.error("Informe um nome"); return; }` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 617 | `    const color = /^#[0-9a-fA-F]{6}$/.test(columnEditor.color) ? columnEditor.color : "#1e3a8a";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 618 | `    if (columnEditor.id) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 619 | `      const { error } = await supabase.from("kanban_columns").update({ name, color }).eq("id", columnEditor.id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 620 | `      if (error) return toast.error(error.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 621 | `    } else {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 622 | `      const { error } = await supabase.from("kanban_columns").insert({ name, color, position: columns.length, created_by: user.id });` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 623 | `      if (error) return toast.error(error.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 624 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 625 | `    setColumnEditor({ open: false, id: null, name: "", color: "#1e3a8a" });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 626 | `    qc.invalidateQueries({ queryKey: ["columns"] });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 627 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 628 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 629 | `  const deleteColumn = async (col: KanbanColumn) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 630 | `    if (!confirm(\`Excluir coluna "${col.name}"? As tarefas ficarão sem coluna.\`)) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 631 | `    const { error } = await supabase.from("kanban_columns").delete().eq("id", col.id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 632 | `    if (error) toast.error(error.message);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 633 | `    qc.invalidateQueries({ queryKey: ["columns"] });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 634 | `    qc.invalidateQueries({ queryKey: ["tasks"] });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 635 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 636 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 637 | `  const duplicateTask = async (task: Task) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 638 | `    if (!user) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 639 | `    try {` | Inicia bloco protegido para capturar erros durante a execucao. |
| 640 | `      // 1. Criar nova tarefa` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 641 | `      const { data: newTask, error: taskError } = await supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 642 | `        .from("tasks")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 643 | `        .insert({` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 644 | `          title: \`${task.title} (cópia)\`,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 645 | `          description: task.description,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 646 | `          status: task.status === "done" ? "todo" : task.status,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 647 | `          priority: task.priority,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 648 | `          column_id: task.column_id,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 649 | `          client_id: task.client_id,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 650 | `          assignee_id: task.assignee_id,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 651 | `          due_date: task.due_date,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 652 | `          color: task.color,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 653 | `          status_id: task.status_id,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 654 | `          created_by: user.id,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 655 | `          position: 9999,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 656 | `        })` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 657 | `        .select()` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 658 | `        .single();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 659 | `      if (taskError) throw taskError;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 660 | `      const newTaskId = newTask.id;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 661 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 662 | `      // 2. Copiar subtarefas` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 663 | `      const { data: subs } = await supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 664 | `        .from("subtasks")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 665 | `        .select("title, done, position")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 666 | `        .eq("task_id", task.id);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 667 | `      if (subs && subs.length > 0) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 668 | `        await supabase.from("subtasks").insert(` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 669 | `          subs.map((s) => ({ task_id: newTaskId, title: s.title, done: s.done, position: s.position }))` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 670 | `        );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 671 | `      }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 672 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 673 | `      // 3. Copiar comentários` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 674 | `      const { data: coms } = await supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 675 | `        .from("comments")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 676 | `        .select("body, author_id")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 677 | `        .eq("task_id", task.id);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 678 | `      if (coms && coms.length > 0) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 679 | `        await supabase.from("comments").insert(` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 680 | `          coms.map((c) => ({ task_id: newTaskId, body: c.body, author_id: c.author_id }))` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 681 | `        );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 682 | `      }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 683 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 684 | `      // 4. Copiar tags` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 685 | `      const { data: tagLinks } = await supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 686 | `        .from("task_tag_links")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 687 | `        .select("tag_id")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 688 | `        .eq("task_id", task.id);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 689 | `      if (tagLinks && tagLinks.length > 0) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 690 | `        await supabase.from("task_tag_links").insert(` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 691 | `          tagLinks.map((t) => ({ task_id: newTaskId, tag_id: t.tag_id }))` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 692 | `        );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 693 | `      }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 694 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 695 | `      // 5. Copiar anexos (arquivos no storage também)` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 696 | `      const { data: atts } = await supabase` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 697 | `        .from("attachments")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 698 | `        .select("file_name, storage_path, mime_type, size_bytes, uploaded_by")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 699 | `        .eq("task_id", task.id);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 700 | `      if (atts && atts.length > 0) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 701 | `        for (const a of atts) {` | Inicia uma repeticao sobre dados ou condicoes. |
| 702 | `          if (a.mime_type === "text/uri-list") {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 703 | `            // Links não precisam copiar arquivo` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 704 | `            await supabase.from("attachments").insert({` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 705 | `              task_id: newTaskId,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 706 | `              file_name: a.file_name,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 707 | `              storage_path: a.storage_path,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 708 | `              mime_type: a.mime_type,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 709 | `              size_bytes: a.size_bytes,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 710 | `              uploaded_by: a.uploaded_by,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 711 | `            });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 712 | `          } else {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 713 | `            try {` | Inicia bloco protegido para capturar erros durante a execucao. |
| 714 | `              const { data: fileData, error: dlErr } = await supabase.storage` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 715 | `                .from("task-attachments")` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 716 | `                .download(a.storage_path);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 717 | `              if (!dlErr && fileData) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 718 | `                const newPath = \`${newTaskId}/${Date.now()}-${a.file_name}\`;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 719 | `                await supabase.storage.from("task-attachments").upload(newPath, fileData, {` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 720 | `                  contentType: a.mime_type || "application/octet-stream",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 721 | `                });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 722 | `                await supabase.from("attachments").insert({` | Espera uma operacao assincrona terminar, como chamada ao Supabase ou processamento externo. |
| 723 | `                  task_id: newTaskId,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 724 | `                  file_name: a.file_name,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 725 | `                  storage_path: newPath,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 726 | `                  mime_type: a.mime_type,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 727 | `                  size_bytes: a.size_bytes,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 728 | `                  uploaded_by: a.uploaded_by,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 729 | `                });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 730 | `              }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 731 | `            } catch {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 732 | `              // ignora erro de arquivo individual` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 733 | `            }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 734 | `          }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 735 | `        }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 736 | `      }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 737 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 738 | `      qc.invalidateQueries({ queryKey: ["tasks"] });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 739 | `      toast.success("Tarefa duplicada");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 740 | `    } catch (e) {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 741 | `      toast.error((e as Error).message);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 742 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 743 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 744 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 745 | `  const exportPdf = async () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 746 | `    setExportingPdf(true);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 747 | `    const esc = (s: string) =>` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 748 | `      s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 749 | `    const prioLabel: Record<string, string> = { low: "Baixa", medium: "Média", high: "Alta", urgent: "Urgente" };` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 750 | `    const prioColor: Record<string, string> = { low: "#64748b", medium: "#2563eb", high: "#f59e0b", urgent: "#dc2626" };` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 751 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 752 | `    const tagsByTask = new Map<string, { name: string; color: string }[]>();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 753 | `    tagLinks.forEach((l) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 754 | `      const tag = tags.find((t) => t.id === l.tag_id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 755 | `      if (!tag) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 756 | `      if (!tagsByTask.has(l.task_id)) tagsByTask.set(l.task_id, []);` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 757 | `      tagsByTask.get(l.task_id)!.push({ name: tag.name, color: tag.color });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 758 | `    });` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 759 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 760 | `    const renderTask = (t: Task) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 761 | `      const client = clients.find((c) => c.id === t.client_id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 762 | `      const assignee = profiles.find((p) => p.id === t.assignee_id);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 763 | `      const taskTags = tagsByTask.get(t.id) ?? [];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 764 | `      const due = t.due_date ? format(new Date(t.due_date), "dd/MM/yyyy HH:mm") : "";` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 765 | `      return \`` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 766 | `        <div class="task" style="border-left:4px solid ${t.color || "#1e3a8a"}">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 767 | `          <div class="task-title">${esc(t.title)}</div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 768 | `          ${t.description ? \`<div class="task-desc">${esc(t.description)}</div>\` : ""}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 769 | `          <div class="task-meta">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 770 | `            <span class="prio" style="background:${prioColor[t.priority ?? "medium"]}">${prioLabel[t.priority ?? "medium"]}</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 771 | `            ${due ? \`<span class="meta-item">📅 ${due}</span>\` : ""}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 772 | `            ${client ? \`<span class="meta-item">🏢 ${esc(client.name)}</span>\` : ""}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 773 | `            ${assignee ? \`<span class="meta-item">👤 ${esc(assignee.full_name || assignee.email || "")}</span>\` : ""}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 774 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 775 | `          ${taskTags.length ? \`<div class="tags">${taskTags` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 776 | `            .map((tg) => \`<span class="tag" style="background:${tg.color}20;color:${tg.color};border-color:${tg.color}55">${esc(tg.name)}</span>\`)` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 777 | `            .join("")}</div>\` : ""}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 778 | `        </div>\`;` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 779 | `    };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 780 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 781 | `    const renderCol = (name: string, color: string, items: Task[]) => \`` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 782 | `      <section class="col">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 783 | `        <h2 style="border-color:${color}"><span class="dot" style="background:${color}"></span>${esc(name)} <span class="count">${items.length}</span></h2>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 784 | `        <div class="col-body">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 785 | `          ${items.length === 0 ? '<div class="empty">Nenhuma tarefa</div>' : items.map(renderTask).join("")}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 786 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 787 | `      </section>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 788 | `    \`;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 789 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 790 | `    const colsHtml = columns` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 791 | `      .map((c) => renderCol(c.name, c.color || "#1e3a8a", tasksByCol.get(c.id) ?? []))` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 792 | `      .join("");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 793 | `    const completedLabel = completedRange.start || completedRange.end` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 794 | `      ? "Concluídas no período"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 795 | `      : filters.date === "completed"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 796 | `        ? "Concluídas"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 797 | `        : filters.date === "this_month"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 798 | `          ? "Concluídas no mês"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 799 | `          : "Concluídas hoje";` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 800 | `    const completedHtml = renderCol(completedLabel, "#10b981", completedTasks);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 801 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 802 | `    const html = \`<style>` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 803 | `  *{box-sizing:border-box}` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 804 | `  .kanban-pdf-root{width:1800px;font-family:Arial,Helvetica,sans-serif;padding:28px;color:#0f172a;background:#fff}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 805 | `  .kanban-pdf-root header{display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid #0f172a;padding-bottom:8px;margin-bottom:16px}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 806 | `  .kanban-pdf-root header h1{margin:0;font-size:22px}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 807 | `  .kanban-pdf-root header .meta{font-size:12px;color:#64748b}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 808 | `  .board{display:flex;flex-direction:column;gap:14px}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 809 | `  .col{border:1px solid #e2e8f0;border-radius:8px;background:#f8fafc;break-inside:avoid;padding:10px}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 810 | `  .col h2{font-size:14px;margin:0 0 8px;padding-bottom:6px;border-bottom:2px solid #cbd5e1;display:flex;align-items:center;gap:6px}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 811 | `  .col .dot{width:10px;height:10px;border-radius:999px;display:inline-block}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 812 | `  .col .count{margin-left:auto;font-size:11px;background:#e2e8f0;padding:2px 8px;border-radius:999px;color:#475569}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 813 | `  .col-body{display:flex;align-items:flex-start;flex-wrap:wrap;gap:8px;min-height:70px}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 814 | `  .task{width:260px;flex:0 0 260px;background:#fff;border:1px solid #e2e8f0;border-radius:6px;padding:8px;font-size:12px;break-inside:avoid}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 815 | `  .task-title{font-weight:600;font-size:13px;margin-bottom:4px}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 816 | `  .task-desc{color:#475569;font-size:11px;margin-bottom:6px;white-space:pre-wrap}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 817 | `  .task-meta{display:flex;flex-wrap:wrap;gap:4px;font-size:10px;color:#475569}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 818 | `  .meta-item{background:#f1f5f9;padding:2px 6px;border-radius:4px}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 819 | `  .prio{color:#fff;padding:2px 6px;border-radius:4px;font-weight:600}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 820 | `  .tags{margin-top:6px;display:flex;flex-wrap:wrap;gap:4px}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 821 | `  .tag{padding:1px 6px;border-radius:999px;font-size:10px;border:1px solid}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 822 | `  .empty{color:#94a3b8;font-size:11px;font-style:italic;text-align:center;padding:12px 0}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 823 | `</style>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 824 | `<div class="kanban-pdf-root">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 825 | `  <header>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 826 | `    <h1>Relatório Kanban</h1>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 827 | `    <div class="meta">${format(new Date(), "dd/MM/yyyy 'às' HH:mm")}</div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 828 | `  </header>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 829 | `  <div class="board">${colsHtml}${completedHtml}</div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 830 | `  </div>\`;` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 831 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 832 | `    try {` | Inicia bloco protegido para capturar erros durante a execucao. |
| 833 | `      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([import("html2canvas"), import("jspdf")]);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 834 | `      const wrapper = document.createElement("div");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 835 | `      wrapper.style.position = "fixed";` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 836 | `      wrapper.style.left = "-10000px";` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 837 | `      wrapper.style.top = "0";` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 838 | `      wrapper.innerHTML = html;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 839 | `      document.body.appendChild(wrapper);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 840 | `      const target = wrapper.querySelector(".kanban-pdf-root") as HTMLElement;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 841 | `      const canvas = await html2canvas(target, { backgroundColor: "#ffffff", scale: 2, logging: false, useCORS: true });` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 842 | `      wrapper.remove();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 843 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 844 | `      const pdf = new jsPDF("landscape", "mm", "a4");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 845 | `      const pageWidth = pdf.internal.pageSize.getWidth();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 846 | `      const pageHeight = pdf.internal.pageSize.getHeight();` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 847 | `      const margin = 8;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 848 | `      const imgWidth = pageWidth - margin * 2;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 849 | `      const imgHeight = (canvas.height * imgWidth) / canvas.width;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 850 | `      const imgData = canvas.toDataURL("image/png");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 851 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 852 | `      let y = margin;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 853 | `      let heightLeft = imgHeight;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 854 | `      pdf.addImage(imgData, "PNG", margin, y, imgWidth, imgHeight);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 855 | `      heightLeft -= pageHeight - margin * 2;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 856 | `      while (heightLeft > 0) {` | Inicia uma repeticao sobre dados ou condicoes. |
| 857 | `        pdf.addPage();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 858 | `        y = margin - (imgHeight - heightLeft);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 859 | `        pdf.addImage(imgData, "PNG", margin, y, imgWidth, imgHeight);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 860 | `        heightLeft -= pageHeight - margin * 2;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 861 | `      }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 862 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 863 | `      pdf.save(\`relatorio-kanban-${format(new Date(), "yyyy-MM-dd-HHmm")}.pdf\`);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 864 | `      toast.success("PDF gerado");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 865 | `    } catch (e) {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 866 | `      toast.error((e as Error).message || "Não foi possível gerar o PDF");` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 867 | `    } finally {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 868 | `      setExportingPdf(false);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 869 | `    }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 870 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 871 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 872 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 873 | `    <div className="flex h-screen flex-col">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 874 | `      <header className="border-b bg-background p-4">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 875 | `        <div className="flex items-center justify-between gap-4">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 876 | `          <h1 className="text-2xl font-bold tracking-tight">Kanban</h1>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 877 | `          <div className="flex flex-wrap gap-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 878 | `            <Button variant="outline" onClick={() => void exportPdf()} disabled={exportingPdf}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 879 | `              <FileDown className="mr-2 h-4 w-4" />{exportingPdf ? "Gerando…" : "Exportar PDF"}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 880 | `            </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 881 | `            <Button variant="outline" onClick={() => setFilesOpen(true)}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 882 | `              <FolderOpen className="mr-2 h-4 w-4" />Arquivos Cliente` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 883 | `            </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 884 | `            <Button variant="outline" onClick={() => setStatusesOpen(true)}>Status</Button>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 885 | `            <Button variant="outline" onClick={() => setTagsOpen(true)}>Tags</Button>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 886 | `            {isAdmin && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 887 | `              <Button variant="outline" onClick={addColumn}><Plus className="mr-2 h-4 w-4" />Coluna</Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 888 | `            )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 889 | `            <Button onClick={() => { setEditTask(null); setDefaultCol(columns[0]?.id ?? null); setDialogOpen(true); }}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 890 | `              <Plus className="mr-2 h-4 w-4" />Tarefa` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 891 | `            </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 892 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 893 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 894 | `        <div className="mt-4 space-y-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 895 | `          <TaskFilters filters={filters} onChange={setFilters} />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 896 | `          <div className="flex items-center justify-end gap-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 897 | `            <Button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 898 | `              size="sm"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 899 | `              variant="outline"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 900 | `              className="h-8 gap-1.5"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 901 | `              onClick={() =>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 902 | `                updatePrefs.mutate({` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 903 | `                  kanban_orientation: orientation === "horizontal" ? "vertical" : "horizontal",` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 904 | `                })` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 905 | `              }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 906 | `              title={orientation === "horizontal" ? "Mudar para vertical" : "Mudar para horizontal"}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 907 | `            >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 908 | `              {orientation === "horizontal" ? <Rows className="h-3.5 w-3.5" /> : <Columns className="h-3.5 w-3.5" />}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 909 | `              {orientation === "horizontal" ? "Vertical" : "Horizontal"}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 910 | `            </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 911 | `            <CardFieldsPopover />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 912 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 913 | `          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 914 | `            <span className="font-medium text-foreground">Concluídas no período</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 915 | `            <Input` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 916 | `              type="date"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 917 | `              value={completedRange.start}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 918 | `              onChange={(e) => setCompletedRange((range) => ({ ...range, start: e.target.value }))}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 919 | `              className="h-8 w-40"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 920 | `            />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 921 | `            <span>até</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 922 | `            <Input` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 923 | `              type="date"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 924 | `              value={completedRange.end}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 925 | `              onChange={(e) => setCompletedRange((range) => ({ ...range, end: e.target.value }))}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 926 | `              className="h-8 w-40"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 927 | `            />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 928 | `            {(completedRange.start || completedRange.end) ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 929 | `              <Button variant="ghost" size="sm" className="h-8" onClick={() => setCompletedRange({ start: "", end: "" })}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 930 | `                Limpar período` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 931 | `              </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 932 | `            ) : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 933 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 934 | `          <div className="flex flex-wrap items-center gap-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 935 | `            <span className="text-xs font-medium text-muted-foreground">Ordenar:</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 936 | `            <Select value={sort.field} onValueChange={(v) => setSort((s) => ({ ...s, field: v as SortField }))}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 937 | `              <SelectTrigger className="h-8 w-44"><SelectValue placeholder="1º critério" /></SelectTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 938 | `              <SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 939 | `                <SelectItem value="position">Posição (manual)</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 940 | `                <SelectItem value="status">Status</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 941 | `                <SelectItem value="priority">Prioridade</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 942 | `                <SelectItem value="due_date">Prazo</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 943 | `                <SelectItem value="created_at">Data de criação</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 944 | `                <SelectItem value="tag">Tag</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 945 | `              </SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 946 | `            </Select>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 947 | `            <Button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 948 | `              variant="outline"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 949 | `              size="sm"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 950 | `              className="h-8"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 951 | `              onClick={() => setSort((s) => ({ ...s, direction: s.direction === "asc" ? "desc" : "asc" }))}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 952 | `              title="Inverter direção"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 953 | `            >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 954 | `              {sort.direction === "asc" ? <ArrowUp className="h-3.5 w-3.5" /> : <ArrowDown className="h-3.5 w-3.5" />}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 955 | `            </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 956 | `            <span className="text-xs text-muted-foreground">então:</span>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 957 | `            <Select value={sort2.field} onValueChange={(v) => setSort2((s) => ({ ...s, field: v as SortField | "none" }))}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 958 | `              <SelectTrigger className="h-8 w-44"><SelectValue placeholder="2º critério" /></SelectTrigger>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 959 | `              <SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 960 | `                <SelectItem value="none">— nenhum —</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 961 | `                <SelectItem value="status">Status</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 962 | `                <SelectItem value="priority">Prioridade</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 963 | `                <SelectItem value="due_date">Prazo</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 964 | `                <SelectItem value="created_at">Data de criação</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 965 | `                <SelectItem value="tag">Tag</SelectItem>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 966 | `              </SelectContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 967 | `            </Select>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 968 | `            {sort2.field !== "none" && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 969 | `              <Button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 970 | `                variant="outline"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 971 | `                size="sm"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 972 | `                className="h-8"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 973 | `                onClick={() => setSort2((s) => ({ ...s, direction: s.direction === "asc" ? "desc" : "asc" }))}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 974 | `                title="Inverter direção secundária"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 975 | `              >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 976 | `                {sort2.direction === "asc" ? <ArrowUp className="h-3.5 w-3.5" /> : <ArrowDown className="h-3.5 w-3.5" />}` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 977 | `              </Button>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 978 | `            )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 979 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 980 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 981 | `      </header>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 982 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 983 | `      <KanbanScrollArea orientation={orientation}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 984 | `        <DndContext` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 985 | `          sensors={sensors}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 986 | `          collisionDetection={collisionDetectionStrategy}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 987 | `          autoScroll={{ layoutShiftCompensation: false, threshold: { x: 0.15, y: 0.15 } }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 988 | `          onDragStart={(e) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 989 | `            if (e.active.data.current?.type === "task") {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 990 | `              setActiveTask(tasks.find((t) => t.id === e.active.id) ?? null);` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 991 | `            }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 992 | `          }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 993 | `          onDragEnd={onDragEnd}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 994 | `          onDragCancel={() => setActiveTask(null)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 995 | `        >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 996 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 997 | `          <SortableContext items={columnIds} strategy={orientation === "horizontal" ? horizontalListSortingStrategy : verticalListSortingStrategy}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 998 | `            <div className={orientation === "horizontal" ? "flex flex-row items-start gap-4" : "flex flex-col gap-4"}>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 999 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1000 | `              {columns.map((col) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1001 | `                const colTasks = tasksByCol.get(col.id) ?? [];` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1002 | `                return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 1003 | `                  <SortableColumn` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1004 | `                    key={col.id}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1005 | `                    col={col}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1006 | `                    orientation={orientation}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1007 | `                    taskIds={colTasks.map((t) => t.id)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1008 | `                    onAdd={() => { setEditTask(null); setDefaultCol(col.id); setDialogOpen(true); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1009 | `                    onEdit={() => renameColumn(col)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1010 | `                    onDelete={() => deleteColumn(col)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1011 | `                    canManage={isAdmin}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1012 | `                  >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1013 | `                    {colTasks.map((t) => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1014 | `                      <SortableTaskCard` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1015 | `                        key={t.id}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1016 | `                        task={t}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1017 | `                        orientation={orientation}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1018 | `                        clients={clients}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1019 | `                        profiles={profiles}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1020 | `                        columns={columns}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1021 | `                        tags={tags}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1022 | `                        statuses={statuses}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1023 | `                        onEdit={() => { setEditTask(t); setDialogOpen(true); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1024 | `                        onDuplicate={() => duplicateTask(t)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1025 | `                      />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1026 | `                    ))}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1027 | `                  </SortableColumn>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1028 | `                );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1029 | `              })}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1030 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1031 | `              <CompletedColumn` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1032 | `                count={completedTasks.length}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1033 | `                orientation={orientation}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1034 | `                taskIds={completedTasks.map((t) => t.id)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1035 | `              >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1036 | `                {completedTasks.length === 0 ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1037 | `                  <div className="flex w-full items-center justify-center text-xs text-muted-foreground">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1038 | `                    Nenhuma tarefa concluída ainda.` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1039 | `                  </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1040 | `                ) : completedTasks.map((t) => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1041 | `                  <SortableTaskCard` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1042 | `                    key={t.id}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1043 | `                    task={t}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1044 | `                    colId={COMPLETED_COL_ID}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1045 | `                    orientation={orientation}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1046 | `                    clients={clients}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1047 | `                    profiles={profiles}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1048 | `                    columns={columns}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1049 | `                    tags={tags}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1050 | `                    statuses={statuses}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1051 | `                    onEdit={() => { setEditTask(t); setDialogOpen(true); }}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1052 | `                    onDuplicate={() => duplicateTask(t)}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1053 | `                  />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1054 | `                ))}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1055 | `              </CompletedColumn>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1056 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1057 | `          </SortableContext>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1058 | `          <DragOverlay>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1059 | `            {activeTask && (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1060 | `              <div className="rotate-2 opacity-90">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1061 | `                <TaskCard` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1062 | `                  task={activeTask}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1063 | `                  clients={clients}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1064 | `                  profiles={profiles}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1065 | `                  columns={columns}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1066 | `                  tags={tags}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1067 | `                  statuses={statuses}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1068 | `                />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1069 | `              </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1070 | `            )}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1071 | `          </DragOverlay>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1072 | `        </DndContext>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1073 | `      </KanbanScrollArea>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1074 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1075 | `      <TaskDialog open={dialogOpen} onOpenChange={setDialogOpen} task={editTask} defaultColumnId={defaultCol} />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1076 | `      <TagManagerDialog open={tagsOpen} onOpenChange={setTagsOpen} />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1077 | `      <StatusManagerDialog open={statusesOpen} onOpenChange={setStatusesOpen} />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1078 | `      <ClientFilesSheet open={filesOpen} onOpenChange={setFilesOpen} />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1079 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1080 | `      <Dialog open={columnEditor.open} onOpenChange={(o) => { if (!o) setColumnEditor((c) => ({ ...c, open: false })); }}>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1081 | `        <DialogContent className="max-w-sm">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1082 | `          <DialogHeader>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1083 | `            <DialogTitle>{columnEditor.id ? "Editar coluna" : "Nova coluna"}</DialogTitle>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1084 | `          </DialogHeader>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1085 | `          <div className="space-y-3">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1086 | `            <div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1087 | `              <label className="mb-1 block text-xs font-medium text-muted-foreground">Nome</label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1088 | `              <Input` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1089 | `                value={columnEditor.name}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1090 | `                onChange={(e) => setColumnEditor((c) => ({ ...c, name: e.target.value }))}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1091 | `                placeholder="Ex.: Em revisão"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1092 | `                autoFocus` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1093 | `              />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1094 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1095 | `            <div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1096 | `              <label className="mb-1 block text-xs font-medium text-muted-foreground">Cor</label>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1097 | `              <div className="flex items-center gap-2">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1098 | `                <input` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1099 | `                  type="color"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1100 | `                  value={columnEditor.color}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1101 | `                  onChange={(e) => setColumnEditor((c) => ({ ...c, color: e.target.value }))}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1102 | `                  className="h-9 w-14 cursor-pointer rounded border bg-transparent"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1103 | `                />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1104 | `                <Input` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1105 | `                  value={columnEditor.color}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1106 | `                  onChange={(e) => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1107 | `                    const v = e.target.value;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1108 | `                    if (/^#[0-9a-fA-F]{0,6}$/.test(v)) setColumnEditor((c) => ({ ...c, color: v }));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1109 | `                  }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1110 | `                  className="flex-1"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1111 | `                />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1112 | `              </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1113 | `              <div className="mt-2 flex flex-wrap gap-1.5">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1114 | `                {["#1e3a8a", "#0ea5e9", "#10b981", "#f59e0b", "#ef4444", "#a855f7", "#ec4899", "#64748b"].map((c) => (` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1115 | `                  <button` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1116 | `                    key={c}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1117 | `                    type="button"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1118 | `                    onClick={() => setColumnEditor((cur) => ({ ...cur, color: c }))}` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1119 | `                    className="h-6 w-6 rounded-full border border-border shadow-sm transition hover:scale-110"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1120 | `                    style={{ background: c }}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1121 | `                    title={c}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1122 | `                  />` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1123 | `                ))}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1124 | `              </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1125 | `            </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1126 | `          </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1127 | `          <DialogFooter>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1128 | `            <Button variant="outline" onClick={() => setColumnEditor((c) => ({ ...c, open: false }))}>Cancelar</Button>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1129 | `            <Button onClick={() => void saveColumn()}>Salvar</Button>` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1130 | `          </DialogFooter>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1131 | `        </DialogContent>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1132 | `      </Dialog>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1133 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1134 | `    </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1135 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1136 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1137 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1138 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1139 | `function KanbanScrollArea({` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1140 | `  orientation,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1141 | `  children,` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1142 | `}: {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1143 | `  orientation: "horizontal" | "vertical";` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1144 | `  children: React.ReactNode;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1145 | `}) {` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1146 | `  const mainRef = useRef<HTMLDivElement>(null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1147 | `  const topRef = useRef<HTMLDivElement>(null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1148 | `  const [innerWidth, setInnerWidth] = useState(0);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1149 | `  const [needsScroll, setNeedsScroll] = useState(false);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1150 | `  const syncing = useRef<"top" | "main" | null>(null);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1151 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1152 | `  // Mede largura interna do conteúdo para espelhar no scrollbar superior` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 1153 | `  useLayoutEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1154 | `    const el = mainRef.current;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1155 | `    if (!el) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 1156 | `    const measure = () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1157 | `      setInnerWidth(el.scrollWidth);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1158 | `      setNeedsScroll(el.scrollWidth > el.clientWidth + 1);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1159 | `    };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1160 | `    measure();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1161 | `    const ro = new ResizeObserver(measure);` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1162 | `    ro.observe(el);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1163 | `    Array.from(el.children).forEach((c) => ro.observe(c));` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1164 | `    return () => ro.disconnect();` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1165 | `  }, [children, orientation]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1166 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1167 | `  // Sincroniza scroll entre barra de cima e container principal` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 1168 | `  const onMainScroll = () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1169 | `    if (syncing.current === "top") { syncing.current = null; return; }` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 1170 | `    if (!topRef.current || !mainRef.current) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 1171 | `    syncing.current = "main";` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1172 | `    topRef.current.scrollLeft = mainRef.current.scrollLeft;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1173 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1174 | `  const onTopScroll = () => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1175 | `    if (syncing.current === "main") { syncing.current = null; return; }` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 1176 | `    if (!topRef.current || !mainRef.current) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 1177 | `    syncing.current = "top";` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1178 | `    mainRef.current.scrollLeft = topRef.current.scrollLeft;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1179 | `  };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1180 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1181 | `  // Wheel vertical → scroll horizontal quando estiver no modo horizontal` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 1182 | `  useEffect(() => {` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1183 | `    const el = mainRef.current;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1184 | `    if (!el || orientation !== "horizontal") return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 1185 | `    const onWheel = (e: WheelEvent) => {` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1186 | `      // se não há overflow horizontal, ignora` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 1187 | `      if (el.scrollWidth <= el.clientWidth) return;` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 1188 | `      // ignora se o alvo está dentro de uma coluna que tem rolagem vertical útil` | Comentario existente no codigo; registra uma observacao para quem esta lendo ou mantendo o arquivo. |
| 1189 | `      const target = e.target as HTMLElement | null;` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1190 | `      const column = target?.closest(".kanban-scroll");` | Cria uma variavel ou constante usada pela logica deste trecho. |
| 1191 | `      if (column && column !== el && (column as HTMLElement).scrollHeight > (column as HTMLElement).clientHeight + 1) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 1192 | `        return; // deixa o navegador rolar a coluna` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 1193 | `      }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1194 | `      if (e.deltaY !== 0 && e.deltaX === 0) {` | Inicia uma decisao condicional para tratar cenarios diferentes. |
| 1195 | `        e.preventDefault();` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1196 | `        el.scrollLeft += e.deltaY;` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1197 | `      }` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1198 | `    };` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1199 | `    el.addEventListener("wheel", onWheel, { passive: false });` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1200 | `    return () => el.removeEventListener("wheel", onWheel);` | Define uma funcao ou callback que sera executado quando a aplicacao precisar dessa logica. |
| 1201 | `  }, [orientation]);` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1202 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1203 | `  return (` | Devolve o resultado da funcao ou renderiza a interface do componente. |
| 1204 | `    <div className="flex flex-1 flex-col overflow-hidden">` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1205 | `      {needsScroll && orientation === "horizontal" ? (` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1206 | `        <div` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1207 | `          ref={topRef}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1208 | `          onScroll={onTopScroll}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1209 | `          className="kanban-scroll-top mx-4 mt-2 h-3 overflow-x-auto overflow-y-hidden rounded-full bg-muted/40"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1210 | `          title="Use para rolar o Kanban horizontalmente"` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1211 | `        >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1212 | `          <div style={{ width: innerWidth, height: 1 }} />` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1213 | `        </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1214 | `      ) : null}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1215 | `      <div` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1216 | `        ref={mainRef}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1217 | `        onScroll={onMainScroll}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1218 | `        className="kanban-scroll flex-1 overflow-auto p-4"` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1219 | `      >` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1220 | `        {children}` | Linha de implementacao que compoe a regra de negocio, a interface ou a configuracao do arquivo. |
| 1221 | `      </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1222 | `    </div>` | Renderiza elemento de interface React/JSX e aplica estilos ou propriedades. |
| 1223 | `  );` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1224 | `}` | Fecha o bloco, objeto, funcao ou chamada iniciado nas linhas anteriores. |
| 1225 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1226 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
| 1227 | `(linha em branco)` | Separa blocos de codigo para melhorar a leitura. |
