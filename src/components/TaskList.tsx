import { useTasks } from "../context/useTasks";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks } = useTasks();
  
  return (
    <div
      className="flex flex-col justify-center text-center py items-center "
    >
      <h2 className="text-2xl font-bold">Tasks List</h2>
      <ul className="w-full flex flex-wrap gap-2 justify-center">
        {tasks.map(task => (
          <TaskItem task={task} key={task._id}/>
        ))}
        
      </ul>
      
    </div>
  )
}

export default TaskList