import { ChangeEvent, FormEvent, useState } from "react";
import { useTasks } from "../context/useTasks";

const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    done: false,
  });

  const { createTask } = useTasks();

  const handleChange = (e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTask(task);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" onChange={handleChange} className="border-1  border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2" placeholder="Write the title of your task" />
        <textarea name="description" rows={3} onChange={handleChange} className="border-1  border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2" placeholder="Write the description of your task"></textarea>
        <label htmlFor="" className="inline-flex items-center gap-x-2">
          <input type="checkbox" onChange={() => setTask({ ...task, done: !task.done })} className="h-5 w-5 text-indigo-600" />
          <span>Done</span>
        </label>
        <button className="bg-indigo-700 px-3 py-2 block w-full rounded-md">Add</button>
      </form>
    </div>
  )
}

export default TaskForm