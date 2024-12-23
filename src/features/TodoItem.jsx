import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "./state/slice";
import '../css/TodoItem.css';

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(toggleTodo(item.id))} 
      className={item.active ? "newTask" : "completed"} 
    >
      -- {item.todo} -- 
      <button 
        onClick={(e) => {
          e.stopPropagation(); // Prevent onClick from firing
          dispatch(removeTodo(item.id));
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default TodoItem;
