import { IconHome, IconInfoCircle, IconSettings, IconUserEdit, IconUserPlus } from "@tabler/icons-react";
import Link from "next/link";

export default function SideBar(props: any) {
  return (
    <div className="flex">
      <div className="fixed w-56 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between items-center">
        <div className="flex flex-col items-start">
          <Link href='/'>
            <div className="flex items-center mb-4">
              <div className="bg-blue-800 text-white p-3 rounded-lg inline-block mr-2">
                <IconHome size={20} />
              </div>
                <span className="text-black">Dashboard</span>
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full"></span>
          <Link href='/cadastro'>
            <div className="flex items-center">
              <div className="bg-blue-300 hover:bg-blue-500 text-white my-4 p-3 rounded-lg inline-block mr-2">
                <IconUserPlus size={20} />
              </div>
                <span className="text-black">Cadastrar</span>
            </div>
          </Link>
         
          <Link href='/editar'>
            <div className="flex items-center">
              <div className="bg-blue-300 hover:bg-blue-500 text-white my-4 p-3 rounded-lg inline-block mr-2">
                <IconUserEdit size={20} />
              </div>
                <span className="text-black">Editar</span>
            </div>
          </Link>
          
          <Link href='/perfil'>
            <div className="flex items-center">
              <div className="bg-blue-300 hover:bg-blue-500 text-white my-4 p-3 rounded-lg inline-block mr-2">
                <IconSettings size={20} />
              </div>
                <span className="text-black">Perfil</span>
            </div>
          </Link>
        </div>
      </div>
      <main className="ml-56 w-full">{props.children}</main>
    </div>
  )
}