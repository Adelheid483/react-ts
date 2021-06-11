import React, {useRef} from 'react';
import {ITodoFormProps} from "../interfacesAndTypes";

export const TodoForm: React.FC<ITodoFormProps> = (props) => {

    const ref = useRef<HTMLInputElement>(null);

    const onKeyPressHandler = (event: React.KeyboardEvent) => { // need to read more about type parameters in TS
        if (event.key === 'Enter') {
            props.addTodo(ref.current!.value); // write ! to say TS that here will be no error
            ref.current!.value = '';
        }
    };

    return (
        <div className="input-field mt-2">
            <input
                type="text"
                id="title"
                placeholder="enter task"
                onKeyPress={onKeyPressHandler}
                ref={ref}
            />
            <label htmlFor="title" className="active"> </label>
        </div>
    )
};
