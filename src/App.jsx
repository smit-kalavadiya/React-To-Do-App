import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList';

import "./App.css";

function App() {
  return (
   <>

  <div className='container p-4 justify-center m-auto m-5'>
    <AddTodo />
    <TodoList/>
  </div>

   </>
  );
}

export default App;
