import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "../features/todoSlice";
import { useState } from "react";

function AddTodo() {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const addNewTodo = () => {
    if (!todo) {
      alert("Please enter a todo");
      return;
    }
    dispatch(addTodo(todo));
    setTodo("");
  };

  return (
    <div className="flex flex-row justify-center items-center w-full max-w-2xl mx-auto my-4 p-4 bg-white dark:bg-stone-100 rounded-lg shadow-md border border-stone-200">
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter Todo"
        type="text"
        className="w-2xs aria-disabled:cursor-not-allowed outline-none focus:outline-none text-stone-800 placeholder:text-stone-600/60 ring-transparent border border-stone-200 transition-all ease-in disabled:opacity-50 disabled:pointer-events-none select-none text-sm py-2 px-2.5 ring shadow-sm bg-white rounded-lg duration-100 hover:border-blue-300 hover:ring-none focus:border-blue-400 focus:ring-none peer"
      />

      <button
        onClick={addNewTodo}
        className="ml-3 inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-stone-800 hover:bg-stone-700 relative bg-gradient-to-b from-stone-700 to-stone-800 border-stone-900 text-stone-50 rounded-lg hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-800 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased"
      >
        Add Todo
      </button>
    </div>
  );
}

export default AddTodo;
