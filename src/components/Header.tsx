import { IconUserCircle } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()
  return (
    <div className="bg-white flex justify-between items-center px-4 h-14">
      <h2 className="text-black font-semibold uppercase">{router.pathname.split("/").pop()}</h2>
      <Link href="/perfil">
        <IconUserCircle color="black" size={32} />
      </Link>
    </div>
  )
}