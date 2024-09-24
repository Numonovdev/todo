import { useEffect, useState } from 'react';
import Card from './components/Card';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  function headTodo(event) {
    event.preventDefault();
    if (!todo) {
      return alert('Please enter a task');
    }
    const todoText = {
      todo,
      key: Date.now(),
    };
    let copy = [...todos];
    copy.push(todoText);
    setTodos(copy);
        let todoStorage = [];
    if (localStorage.getItem('todos')) {
      todoStorage = JSON.parse(localStorage.getItem('todos'));
    }
    todoStorage.push(todoText);
    localStorage.setItem('todos', JSON.stringify(todoStorage));
    setTodo('');
  }

  useEffect(() => {
    let storageTodo = [];
    if (localStorage.getItem('todos')) {
      storageTodo = JSON.parse(localStorage.getItem('todos'));
    }
    setTodos(storageTodo);
  }, []);
  function deletTodo(key) {
    let copy = [...todos];
    copy = copy.filter((todo) => todo.key !== key);
    setTodos(copy);
    localStorage.setItem('todos', JSON.stringify(copy));
  }
  return (
    <div className='container w-full h-full flex-initial bg-neutral-900 text-white'>
      <div className="todo flex gap-2 w-[400px] mx-auto">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          className='w-full px-3 py-2 border-2 rounded-[14px] outline-0 border-purple-900 bg-transparent'
          placeholder='Add a new task'
        />
        <button
          onClick={headTodo}
          className='hover:bg-teal-800 p-0 bg-teal-900 border-0 text-[56px] w-[50px] h-[40px] rounded-[8px] relative'
        >
          <p style={{ marginTop: '-28px' }}>+</p>
        </button>
      </div>

      <div className="wrapper mt-[50px] mx-auto box-border flex gap-[20px] flex-col w-[400px]">
        <h3>Tasks to do - {todos.length}</h3>
        {
          todos.length > 0 && todos.map((value) => (
            <Card user={value} key={value.key} deletTodo={deletTodo} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
