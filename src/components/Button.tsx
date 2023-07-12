interface ButtonProps {
  label: string;
  onClick: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <button className="rounded-full font-semibold hover:opacity-80 transition border-2 w-full bg-sky-500 text-white border-sky-500 text-xl px-4 py-2"
    onClick={props.onClick}
    >
    {props.label}
    </button>
  )
}