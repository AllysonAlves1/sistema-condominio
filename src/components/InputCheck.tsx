import { ChangeEvent } from "react";

interface InputProps {
  // checked: boolean;
  type: string;
  label: string
  // onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputCheck(props: InputProps) {
  return (
    <div className="flex items-center mb-4">
      <input
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
        type={props.type}
        // checked={props.checked}
        // onChange={props.onChange}
      />
        <label className="ml-2 text-sm font-medium text-gray-900">{props.label}</label>
    </div>
  )
}

