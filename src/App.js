import React from 'react';
// import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import todoListState from './store';


function App() {
  // const [inputTodo, setInputTodo] = useState('')
  const todoList = useRecoilValue(todoListState);

  // const addItem = () => {

  // }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-5 bg-gray-800 text-white font-montserrat rounded-md w-1/3">
        <h1 className="text-2xl pb-3 font-bold border-b border-gray-200">Todolist</h1>
        <ul className="mt-5 text-lg">
          {
            todoList.length == 0 ?
              <li className="text-center">Kamu belum punya tugas.</li>
              :
              todoList.map((todo, index) => {
                return (
                  <li key={index} className="pb-1 flex justify-between border-b border-gray-500 pt-3">
                    <span className="w-96">{todo.todo}</span>
                    <button>
                      <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </li>
                )
              })
          }

        </ul>
        <input type="text" className="w-full rounded text-black p-2 mt-10" placeholder="Tulis Todolist" />
      </div>
    </div>
  );
}


export default App;