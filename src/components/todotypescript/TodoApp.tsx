import { ChangeEvent, FC, useState} from 'react'
import {ITask} from '../Interface'
import TodoList from './TodoList'
import './TodoApp.css'

const TodoApp:FC = () => {
  const [text, setText] = useState<string>("")
  const [days, setDays] = useState<number>(0)
  const [todo, setTodo] = useState<ITask[]>([])

const handleSubmit = (event:ChangeEvent<HTMLInputElement>):void =>{
 event.preventDefault()
 if(!text){
  return null
 }
 const newTask:ITask = {Taskname:text, Days:days}
 setTodo([...todo, newTask]);
 setText('')
 setDays(0)

}

const delte = (Taskname:string) =>{
 const newTodo = todo.filter(list => list.Taskname !== Taskname)
 setTodo(newTodo)
}
  return (
    <div className='container'>
      <h1>Todo with Typescript</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} 
        onChange={(e)=> setText(e.target.value)}
        name="text" id="text" />
        <input type="number" 
        value={days} name="days" id="days" 
        onChange={(e)=> setDays(Number(e.target.value))}/>
        <button className='button' type="submit">Add todo</button>
      </form>
      {todo.map((item:ITask, index:number)=>{
        return(
          <TodoList key={index} items={item} delte={delte}/>
        )
      })}
    </div>
  )
}

export default TodoApp