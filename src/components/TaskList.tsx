
import {Task } from "../interfaces/Task";
import TaskCard from "./TaskCard";

interface Props{
    tasks: Task[];
}

export default function TaskList({tasks}:Props) {
  return (
    <div>   {tasks.map(task=>{
        return(<>
      <div className="col-md-4">
      <TaskCard task = {task}/>
      </div>
        </>)
       })}</div>
  )
}
