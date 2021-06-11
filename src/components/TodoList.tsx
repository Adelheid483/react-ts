import React from 'react';
import {ITodo} from "../interfaces";

type TodoListProps = {
    todos: ITodo[],
    toggleTask(id: number): void,
    removeTask: (id: number) => void
}

export const TodoList: React.FC<TodoListProps> = ({todos, removeTask, toggleTask}) => {

    if (todos.length === 0) {
        return <p className="center"> Nothing to do! </p>
    }

    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault();
        removeTask(id);
    }

    return (
        <ul>
            {todos.map((todo) => {
                const  classes = ['todo']
                if (todo.completed) {
                    classes.push('completed')
                }
                return (
                   <li className={classes.join(' ')} key={todo.id}>
                       <label>
                           <input type="checkbox" checked={todo.completed} onChange={toggleTask.bind(null, todo.id)}/>
                           <span>{todo.title}</span>
                           <i className="material-icons red-text" onClick={(event) => removeHandler(event, todo.id)}>delete</i>
                       </label>
                   </li>
                )
            })}
        </ul>
    );
};

