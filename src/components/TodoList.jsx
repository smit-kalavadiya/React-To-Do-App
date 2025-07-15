import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "../features/todoSlice";
import { useEffect, useState } from "react";

function TodoList() {
  const todoName = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <div className="rounded shadow flex flex-col mt-3  w-full max-w-2xl mx-auto p-4 bg-white dark:bg-stone-100 border border-stone-100">
      <ul>
        {todoName.map((todo, index) => (
          
          <li className="bg-white p-4 m-2 h-17 rounded-md" key={index}>
            {todo.name}
            <button
              onClick={() => dispatch(removeTodo(index))}
              className="pl-3 pr-3 text-white rounded-md h-9 bg-red-400 float-right ml-2"
            >
              Delete
            </button>
            <button
              onClick={() =>
                dispatch(
                  updateTodo({ index, newTodo: prompt("Enter new Todo") })
                )
              }
              className="pl-3 pr-3 text-white border rounded-md h-9 bg-orange-400 float-right ml-2"
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
