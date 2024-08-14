import { useState } from "react";

export default function ProjectsSidebar({
  handleCreateProject,
  projects,
  selectedProject,
  handleSelectProject,
}) {
  return (
    <div className="bg-neutral-900 mt-11 rounded-tr-xl w-1/4 h-screen">
      <div className="pt-16 pl-14">
        <h1 className="text-white text-3xl mb-8 font-semibold">
          YOUR PROJECTS
        </h1>
        <button
          onClick={handleCreateProject}
          className="bg-stone-700 hover:bg-stone-600 pt-2 pb-2 pl-4 pr-4 text-base text-stone-400 hover:text-stone-300 rounded-md"
        >
          + Add Project
        </button>

        <ul className="pt-8 text-stone-300 text-lg space-y-1">
          {projects &&
            projects.map((project) => (
              <li
                onClick={() => {
                  handleSelectProject(project.id);
                }}
                key={project.id}
                className={
                  "hover:bg-stone-800 hover:text-stone-200 text-stone-400 py-1 px-2 rounded hover:cursor-pointer w-4/5 " +
                  (project.id === selectedProject?.id ? "bg-stone-800 text-stone-200" : "")
                }
              >
                {project.title}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
