import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, textarea, date, ...props },
  ref
) {
  return (
    <label className="font-bold uppercase w-full text-neutral-600">
      {label}
      {textarea ? (
        <textarea
          ref={ref}
          // onChange={() => handleProjectDataChange('description', event.target.value)}
          rows={4}
          cols={60}
          className="bg-stone-200 w-full pl-2 font-normal rounded-sm border-b-2 border-stone-300 focus:border-stone-500 outline-none"
        />
      ) : (
        <input
          ref={ref}
          // onChange={() => handleProjectDataChange('title', event.target.value)}
          type={!date ? "text" : "date"}
          className="bg-stone-200 w-full pl-2 font-normal h-10 rounded-sm border-b-2 border-stone-300 focus:border-stone-500 outline-none"
        />
      )}
    </label>
  );
});

export default Input;
