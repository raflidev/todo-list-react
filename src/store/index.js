import React from 'react'
import { atom } from 'recoil'

const todoListState = atom({
   key: "todoListState",
   default: [
      { todo: "Menulis Blog" },
      { todo: "Tidur" }
   ]
})

export default todoListState