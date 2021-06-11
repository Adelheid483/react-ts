import React from 'react';
import {TodoListProps} from "../interfacesAndTypes";

export const TodoList: React.FC<TodoListProps> = ({todos, removeTodo, toggleTodo}) => {

    if (todos.length === 0) {
        return <p className="center"> Nothing to do! </p>
    }

    const removeHandler = (event: React.MouseEvent, id: number) => { // need to read more about type parameters in TS
        event.preventDefault();
        removeTodo(id);
    };

    return (
        <ul>
            {todos.map((todo) => {
                const  classes = ['todo'];
                if (todo.completed) {
                    classes.push('completed')
                }
                return (
                   <li className={classes.join(' ')} key={todo.id}>
                       <label>
                           <input type="checkbox" checked={todo.completed} onChange={toggleTodo.bind(null, todo.id)}/>
                           <span>{todo.title}</span>
                           <i className="material-icons red-text" onClick={(event) => removeHandler(event, todo.id)}>delete</i>
                       </label>
                   </li>
                )
            })}
        </ul>
    );
};

