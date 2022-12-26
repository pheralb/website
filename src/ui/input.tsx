import React from "react";

interface InputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  className?: string;
  placeholder?: string;
}

const Input = (props: InputProps) => {
  return (
    <>
      <div className="relative">
        <input
          type="text"
          onChange={props.onChange}
          value={props.value}
          placeholder={props.placeholder}
          className={`w-full px-4 py-2 mb-2 bg-gray-100 border rounded-md dark:bg-neutral-900 dark:text-neutral-100 ring-0 focus:ring-0 focus:outline-none border-neutral-300 dark:border-neutral-800 ${props.className}
          `}
        />
      </div>
    </>
  );
};

export default Input;
