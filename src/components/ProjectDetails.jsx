import { useState } from "react";

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ProjectDetails({
  project,
  handleDeleteProject,
  handleAddTask,
  handleClearTask
}) {
  const [enteredTask, setEnteredTask] = useState('')

  function handleTaskChange(task) {
    setEnteredTask(task);
  }

  function handleAddTaskClick() {
    handleAddTask(enteredTask);
    setEnteredTask('');
  }

  return (
    <div className="w-2/3 text-lg text-stone-900 ml-12 mt-28 h-20 space-y-8">
      <div>
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold text-stone-700">{project.title}</h1>
          <button
            onClick={() => {
              handleDeleteProject(project.id);
            }}
            className="font-medium hover:text-stone-500"
          >
            Delete
          </button>
        </div>
        <p className="text-stone-400 mt-2">{formatDate(project.dueDate)}</p>
      </div>

      <p className="text-stone-700 whitespace-break-spaces">
        {project.description}
      </p>
      <hr className="h-0.5 bg-stone-400"></hr>

      <h1 className="text-4xl	font-bold text-stone-700">Tasks</h1>
      <div className="w-2/4">
        <input
          value={enteredTask}
          onChange={() => {
            handleTaskChange(event.target.value);
          }}
          className="bg-stone-200 rounded-sm w-6/12 pl-2 h-8"
          type="text"
        />
        <button
          onClick={() => {
            handleAddTaskClick();
          }}
          className="ml-6 font-normal font-medium hover:text-stone-500"
        >
          Add Task
        </button>
      </div>
      {project.tasks.length === 0 && (
        <p>This project does not have any tasks yet.</p>
      )}

      {project.tasks.length > 0 && (
        <div className="w-2/4 bg-stone-200/35 px-4 py-6 rounded-sm space-y-4">
          {project.tasks.map((task) => (
            <div className="flex justify-between">
              <p>{task.title}</p>
              <button onClick={() => {handleClearTask(task.id)}} className="hover:text-rose-600">Clear</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
