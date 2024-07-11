import React from "react";
import {useSelector ,useDispatch} from "react-redux"
import { addTodo ,removeTodo ,updateTodo } from "../features/todo/todoSlice";

function AddTodo(){
    const [input ,setInput]  = React.useState('')
    const dispatch  = useDispatch()
    const todos = useSelector(state =>state.todos)
    const addTodoHandler = (e)=>{
        e.preventDefault()
        
        dispatch(addTodo(input))
        setInput('')
    }
    const updateTodoHandler =(id)=>{
        
        const ans ={
            text :input,
            id : id
        }
        dispatch(updateTodo(ans))
        setInput('')
    }
    
    return (
        <>
        <form onSubmit={addTodoHandler} >
        <input type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"

        placeholder="enter the TODO"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
        
        <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"> ADD TODO </button>

        </form>
        
        <ul>
            {todos.map((todo)=>(
                <li key = {todo.id}>
                    <div className='text-white'>{todo.text}</div>
                    <button onClick={()=> dispatch(removeTodo(todo.id))}>DELETE</button>
                    <button onClick={()=> updateTodoHandler(todo.id)}>UPDATE</button>
                </li>

            ))}

        </ul>
        </>

    )
}

export default AddTodo;