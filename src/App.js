import React, { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import todoListState from './store';


function App() {
  const [inputTodo, setInputTodo] = useState('')
  const todoList = useRecoilValue(todoListState);
  const setTodoList = useSetRecoilState(todoListState)
  const addItem = () => {
    inputTodo === "" ?
      <div>a</div>
      :
      setTodoList((oldTodoList) => [
        ...oldTodoList,
        {
          todo: inputTodo
        }
      ]);
    setInputTodo('')
  }

  const removeTodoList = (index) => {
    const newList = removeItemAtIndex(todoList, index);
    console.log(newList);
    setTodoList(newList);
  };

  const removeItemAtIndex = (arr, index) => {
    console.log(arr);
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }

  return (
    <div className="flex px-3 lg:px-0 justify-center items-center h-screen bg-black">
      <div className="p-5 bg-gray-800 text-white font-montserrat rounded-md w-full lg:w-1/3">
        <h1 className="text-2xl pb-3 font-bold border-b border-gray-200">Todolist</h1>
        <ul className="mt-5 text-lg overflow-auto h-60 pr-3">
          {
            todoList.length === 0 ?
              <li className="text-center">Kamu belum punya tugas.</li>
              :
              todoList.map((todo, index) => {
                return (
                  <li key={index} className="pb-1 flex justify-between border-b border-gray-500 pt-3">
                    <span className="w-96">{todo.todo}</span>
                    <button onClick={() => removeTodoList(index)}>
                      <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </li>
                )
              })
          }

        </ul>
        <input type="text" value={inputTodo} onChange={(e) => setInputTodo(e.target.value)} className="w-full rounded text-black p-2 mt-10" placeholder="Tulis Todolist" />
        <button className="bg-gray-700 font-bold w-full p-2 mt-4 border border-gray-400 rounded" onClick={addItem}>Add</button>
      </div>
    </div>
  );
}

export default App;