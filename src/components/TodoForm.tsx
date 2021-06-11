import React, {useRef} from 'react';

interface TodoFormProps {
    addTask(title: string): void,
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {

    const ref = useRef<HTMLInputElement>(null);

    const onKeyPressHandler = (event: any) => {
        if (event.key === 'Enter') {
            props.addTask(ref.current!.value);
            // ! тс выбрасывает ошибку, потому что первонач значение null, а мы говорим что уверены, что null не будет
            ref.current!.value = '';
        }
    }

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
