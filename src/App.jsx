import { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const [newProject, setNewProject] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(undefined);
  
  function handleCreateProject() {
    setNewProject(true);
    setSelectedProject(undefined);
  }

  function handleCancel() {
    setNewProject(false);
  }

  function handleAddProject(projectData) {
    setProjects([
      ...projects,
      {
        title: projectData["title"],
        description: projectData["description"],
        dueDate: projectData["dueDate"],
        id: Math.random(),
        tasks: [],
      },
    ]);

    handleCancel();
  }

  function handleSelectProject(projectId) {
    setSelectedProject(projects.filter((projet) => projet.id === projectId)[0]);
  }

  function handleDeleteProject(projectId) {
    const newProjects = projects.filter((project) => project.id !== projectId);
    setProjects(newProjects);
    setSelectedProject(undefined);
  }

  function handleAddTask(task) {
    const newProjects = [...projects];
    for (const project of newProjects) {
      if (project.id === selectedProject.id) {
        project.tasks.unshift({
          title: task,
          id: Math.random()
        });
      }
    }

    setProjects(newProjects);
  }

  function handleClearTask(taskId) {
    const newProjects = [...projects];
    const newTasks = selectedProject.tasks.filter(task => task.id !== taskId);
    for (const project of newProjects) {
      if (project.id === selectedProject.id) {
        project.tasks = newTasks;
      }
    }

    setProjects(newProjects);
  }

  console.log(projects);

  return (
    <>
      <ProjectsSidebar
        handleCreateProject={handleCreateProject}
        projects={projects}
        selectedProject={selectedProject}
        handleSelectProject={handleSelectProject}
      />
      {!selectedProject && (
        <NewProject
          newProject={newProject}
          handleCreateProject={handleCreateProject}
          handleCancel={handleCancel}
          handleAddProject={handleAddProject}
        />
      )}
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          handleDeleteProject={handleDeleteProject}
          handleAddTask={handleAddTask}
          handleClearTask={handleClearTask}
        />
      )}
    </>
  );
}

export default App;
