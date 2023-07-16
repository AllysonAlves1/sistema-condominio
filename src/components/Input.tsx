import { ChangeEvent } from "react";

interface InputProps {
  placeholder: string;
  type: string;
}

export default function Input(props: InputProps) {
  return (
    <input
      className="w-full py-3 my-3 text-lg text-black border-b border-gray-300 focus:border-black outline-none focus:outline-none bg-transparent"
      type={props.type}
      placeholder={props.placeholder}
    />
  )
}