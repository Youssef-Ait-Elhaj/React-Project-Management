import { useImperativeHandle, forwardRef, useRef } from "react";

const ErrorModal = forwardRef(function ErrorModal(props, ref) {
  const errorModal = useRef();

  useImperativeHandle(ref, () => {
    return {
      show() {
        errorModal.current.showModal();
      },
    };
  });
  return (
    <dialog
      ref={errorModal}
      className="space-y-3 py-8 px-4 rounded-md shadow-md text-stone-700 font-medium backdrop:bg-stone-900/50"
    >
      <h1 className="font-extrabold text-base">Invalid Input</h1>
      <p>Oops ... looks like you forgot to enter a value.</p>
      <p>Please make sure you provide a valid value for every input field.</p>
      <form method="dialog">
        <button className="float-right bg-stone-800 text-stone-500 hover:text-stone-300 py-1.5 px-3.5 rounded-md">
          Okay
        </button>
      </form>
    </dialog>
  );
});

export default ErrorModal;
