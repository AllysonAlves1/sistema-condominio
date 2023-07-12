import { ChangeEvent } from "react";

interface InputProps {
  placeholder: string;
  value: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: InputProps) {
  return (
    <input 
      placeholder={props.placeholder}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
      className="w-full p-4 text-lg bg-black border-2 border-neutral-800 rounded-md outline-none text-white focus:border-sky-500 focus:border-2 transition"
    />
  )
}