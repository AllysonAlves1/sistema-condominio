import { IconUser, IconUserCircle } from "@tabler/icons-react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-white flex justify-between items-center px-4 h-14">
      <h2 className="text-black font-semibold uppercase">Dashboard</h2>
      <Link href="/perfil">
        <IconUserCircle color="black" size={32} />
      </Link>
    </div>
  )
}