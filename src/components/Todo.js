import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import todoListState from '../store';

function Todo() {
   const todoList = useRecoilValue(todoListState);
   const setTodoList = useSetRecoilState(todoListState)
   const removeTodoList = (index) => {
      const newList = removeItemAtIndex(todoList, index);
      setTodoList(newList);
   };

   const removeItemAtIndex = (arr, index) => {
      return [...arr.slice(0, index), ...arr.slice(index + 1)];
   }
   return (
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
   );
}

export default Todo;