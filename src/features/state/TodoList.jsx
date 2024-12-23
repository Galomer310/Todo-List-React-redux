import AddTodo from "../AddTodo";
import TodoItem from "../TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
    const todos = useSelector((state) => state.todosReducer?.todos || []); 

    return (
        <>
            <AddTodo />
            {todos.map((item) => (
                <TodoItem key={item.id} item={item} />
            ))}
        </>
    );
};

export default TodoList;
