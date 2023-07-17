import { IconChevronsDown, IconChevronsUp } from "@tabler/icons-react"
import axios from "axios";
import { useEffect, useState } from "react";

export default function CardsVeiculos() {

  const [acesso, setAcesso] = useState('');
  const [saida, setSaida] = useState('');

  useEffect(() => {
    axios.get("http://localhost:3000/acessoveiculo/countAcessoEntrada").then((response) => {
      setAcesso(response.data);
    });
  
    axios.get("http://localhost:3000/acessoveiculo/countAcessoSaida").then((response) => {
      setSaida(response.data);
    });

  }, []);
  
  return (
    <div className="grid lg:grid-cols-2 gap-4 p-6">
      <div className="lg-col-span-2 col-span-1 bg-white flex justify-between w-full border p-6 rounded-lg shadow-lg">
        <div className="flex flex-col text-black w-full gap-2">
          <div className="flex justify-around items-center">
            <span className=""><IconChevronsUp size={72} color="green" /></span>
            <p className="text-5xl">{acesso}</p>
          </div>
          <p className="text-3xl text-center">Acessos</p>
        </div>
      </div>
      <div className="lg-col-span-2 col-span-1 bg-white flex justify-between w-full border p-6 rounded-lg shadow-lg">
        <div className="flex flex-col text-black w-full gap-2">
          <div className="flex justify-around items-center">
            <span className=""><IconChevronsDown size={72} color="red" /></span>
            <p className="text-5xl">{saida}</p>
          </div>
          <p className="text-3xl text-center">Saídas</p>
        </div>
      </div>
    </div>
  )
}