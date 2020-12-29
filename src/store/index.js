import { atom } from 'recoil'

const todoListState = atom({
   key: "todoListState",
   default: [
      { todo: "Menulis Blog" },
      { todo: "Tidur" },
      { todo: "Nonton" }
   ]
})

export default todoListState