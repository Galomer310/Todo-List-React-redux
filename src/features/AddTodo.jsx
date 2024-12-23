import { addTodo } from "./state/slice";
import { useDispatch } from "react-redux";
import { useRef } from "react";

const AddTodo = () => {
    const dispatch = useDispatch();
    const inputRef = useRef();

    const toAddTodo = () => {
        const value = inputRef.current?.value?.trim();
        if (!value) return; // Handles empty string, null, or undefined
        dispatch(addTodo({ value })); 
        inputRef.current.value = ""; 
    };

    return (
        <>
            <h1>Add your Todo</h1>
            <input placeholder="Add To Do ..." ref={inputRef} />
            <button onClick={toAddTodo}>Add</button>
        </>
    );
};

export default AddTodo;
