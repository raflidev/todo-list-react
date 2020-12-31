import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import Todo from './components/Todo';
import todoListState from './store';


function App() {
  const [inputTodo, setInputTodo] = useState('')
  const setTodoList = useSetRecoilState(todoListState)
  const addItem = () => {
    inputTodo !== "" ?
      setTodoList((oldTodo) => [
        ...oldTodo,
        {
          todo: inputTodo
        }
      ])
      :
      <div></div>

    setInputTodo('')
  }

  const keyHandler = (e) => {
    if (e.key === "Enter") {
      inputTodo !== "" ?
        setTodoList((oldTodo) => [
          ...oldTodo,
          {
            todo: inputTodo
          }
        ])
        :
        <div></div>

      setInputTodo('')
    }
  }

  return (
    <div className="flex px-3 lg:px-0 justify-center items-center h-screen bg-black">
      <div className="p-5 bg-gray-800 text-white font-montserrat rounded-md w-full lg:w-1/3">
        <h1 className="text-2xl pb-3 font-bold border-b border-gray-200">Todolist</h1>
        <Todo />
        <input type="text" value={inputTodo} onKeyDown={keyHandler} onChange={(e) => setInputTodo(e.target.value)} className="w-full rounded text-black p-2 mt-10" placeholder="Tulis Todolist" />
        <button className="bg-gray-700 font-bold w-full p-2 mt-4 border border-gray-400 rounded" onClick={addItem}>Add</button>
      </div>
    </div>
  );
}

export default App;