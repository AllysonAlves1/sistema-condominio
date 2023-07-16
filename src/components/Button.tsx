interface ButtonProps {
  label: string;
}

export default function Button(props: ButtonProps) {
  return (
    <button className="w-full text-center rounded-full font-semibold hover:opacity-80 transition bg-blue-500 text-white text-xl px-4 py-2"
    >
    {props.label}
    </button>
  )
}