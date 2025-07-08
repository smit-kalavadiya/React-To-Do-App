import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "../features/todoSlice";

function TodoList() {
  const todoName = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <div className="p-4 rounded shadow flex flex-col mt-3 bg-green-100">
      <ul>
        {todoName.map((todo, index) => (
          <li key={index}>
            {todo.name}
            <button
              onClick={() => dispatch(removeTodo(index))}
              className="border rounded-md h-8 border-red-400"
            >
              Delete
            </button>
            <button
              onClick={() =>
                dispatch(
                  updateTodo({ index, newTodo: prompt("Enter new Todo") })
                )
              }
              className="border rounded-md h-8 border-orange-400"
            >
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
