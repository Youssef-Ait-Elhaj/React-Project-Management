import { useRef } from "react";
import noProjects from "../assets/no-projects.png";
import Input from "./Input";
import ErrorModal from "./ErrorModal";

export default function NewProject({
  newProject,
  handleCreateProject,
  handleCancel,
  handleAddProject,
}) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const errorModalRef = useRef();

  // let projectData = {};

  // function handleProjectDataChange(identifier, value) {
  //   projectData = {
  //     ...projectData,
  //     [identifier]: value
  //   }
  // }

  function handleSaveProject() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;

    // user input validation
    if (title.trim() === '' || description.trim() === '' || dueDate.trim() === '') {
      // show error modal
      errorModalRef.current.show();
    } else {
      handleAddProject({title, description, dueDate});
    }
  }

  return (
    <div className="w-3/4 h-screen flex justify-center mt-40">
      {!newProject && (
        <div className="text-center">
          <img width="100px" className="mb-6 mx-auto" src={noProjects} />
          <h2 className="text-3xl mb-6 font-bold text-stone-500">
            No Project Selected
          </h2>
          <p className="mb-8 text-stone-500 text-lg">
            Select a project to get started with a new one
          </p>
          <button
            onClick={handleCreateProject}
            className="bg-stone-700 hover:bg-stone-600 pt-2 pb-2 pl-4 pr-4 text-lg text-stone-300 hover:text-stone-200 rounded-md"
          >
            Create new project
          </button>
        </div>
      )}

      {newProject && (
        <div className="w-5/6 h-20 text-lg space-y-20">
          <div className="float-right">
            <button
              onClick={handleCancel}
              className="pt-2 pb-2 pl-4 pr-4 rounded-md mr-8 hover:text-stone-500"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                handleSaveProject();
              }}
              className="pt-2 pb-2 pl-4 pr-4 rounded-md bg-stone-800 hover:bg-stone-900 text-white"
            >
              Save
            </button>
          </div>
          <div className="space-y-6">
            <div>
              <Input ref={titleRef} label="title" />
            </div>
            <div>
              <Input ref={descriptionRef} label="description" textarea />
            </div>
            <div>
              <Input ref={dueDateRef} label="due date" date />
            </div>
          </div>
        </div>
      )}

      <ErrorModal ref={errorModalRef} />
    </div>
  );
}
