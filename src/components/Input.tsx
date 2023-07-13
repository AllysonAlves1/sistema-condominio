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
      className="w-full py-3 my-3 text-lg text-black border-b border-neutral-400 focus:border-black outline-none focus:outline-none"
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  )
}