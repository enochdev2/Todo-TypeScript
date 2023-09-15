
import { ITask } from '../Interface'


interface Props{
    items: ITask
    delte(Taskname:string):void
}

const TodoList = ({items,delte}:Props) => {
  return (
    <div className="todolist">

        <div>{items.Taskname}</div>
        <div>{items.Days}</div>
        <button className="delete" onClick={()=> delte(items.Taskname)}>X</button>
    </div>
  )
}

export default TodoList