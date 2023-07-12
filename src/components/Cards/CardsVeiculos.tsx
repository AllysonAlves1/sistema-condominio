import { IconChevronsDown, IconChevronsUp, IconWalk } from "@tabler/icons-react"

export default function CardsVeiculos() {
  
  return (
    <div className="grid lg:grid-cols-3 gap-4 p-6">
      <div className="lg-col-span-3 col-span-1 bg-white flex justify-between w-full border p-6 rounded-lg shadow-lg">
        <div className="flex flex-col text-black w-full gap-2">
          <div className="flex justify-around items-center">
            <span className=""><IconChevronsUp size={72} color="green" /></span>
            <p className="text-5xl">1234</p>
          </div>
          <p className="text-3xl text-center">Acessos</p>
        </div>
      </div>
      <div className="lg-col-span-3 col-span-1 bg-white flex justify-between w-full border p-6 rounded-lg shadow-lg">
        <div className="flex flex-col text-black w-full gap-2">
          <div className="flex justify-around items-center">
            <span className=""><IconChevronsDown size={72} color="red" /></span>
            <p className="text-5xl">1234</p>
          </div>
          <p className="text-3xl text-center">Saídas</p>
        </div>
      </div>
      <div className="lg-col-span-3 col-span-1 bg-white flex justify-between w-full border p-6 rounded-lg shadow-lg">
        <div className="flex flex-col text-black w-full gap-2">
          <div className="flex justify-around items-center">
            <span className=""><IconWalk size={72} color="gray" /></span>
            <p className="text-5xl">1234</p>
          </div>
          <p className="text-3xl text-center">Visitas</p>
        </div>
      </div>
    </div>
  )
}