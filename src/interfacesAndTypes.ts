export interface ITodo {
    title: string,
    id: number,
    completed: boolean
}

export interface ITodoFormProps {
    addTodo(title: string): void,
}

export type TodoListProps = {
    todos: ITodo[],
    toggleTodo(id: number): void, // two different types of writing
    removeTodo: (id: number) => void // two different types of writing
}
