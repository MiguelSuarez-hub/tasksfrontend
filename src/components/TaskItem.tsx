import { Task } from "../interfaces/task.interface";
import { BsCheck2All, BsTrash } from 'react-icons/bs';
import { useTasks } from "../context/useTasks";

interface Props {
  task: Task;
}

const TaskItem = ( {task}: Props) => {

  const { deleteTask, updateTask } = useTasks()

  return (
    <li key={task._id} className="flex justify-between bg-zinc-800 rounded-md px-2 h-20 w-[280px] ">
      <div className="flex flex-col justify-center items-start text-left w-3/5 ">
        <h3 className="uppercase font-bold">{task.title}</h3>
        <p className="text-xs">{task.description}</p>
      </div>
      <div className="flex flex-wrap gap-3 items-center justify-end text-right w-3/5">
        <button className={`${task.done ? 'text-green-500' : 'text-gray-500'}`} onClick={async () => {await updateTask(task._id, {done: !task.done})}}><BsCheck2All /></button>
        <button onClick={async () => {await deleteTask(task._id)}}>
          <BsTrash />
        </button>
      </div>
    </li>
  )
}

export default TaskItem