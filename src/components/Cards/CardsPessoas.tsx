import { IconChevronsDown, IconChevronsUp, IconWalk } from "@tabler/icons-react"
import axios from "axios";
import { useEffect, useState } from "react"

export default function CardsPessoas() {

  const [acesso, setAcesso] = useState('');
  const [saida, setSaida] = useState('');
  const [visitante, setVisitante] = useState('');

  useEffect(() => {
    axios.get("http://localhost:3000/acessopessoa/countAcessoPessoa").then((response) => {
      setAcesso(response.data);
    });
  
    axios.get("http://localhost:3000/acessopessoa/countAcessoSaida").then((response) => {
      setSaida(response.data);
    });

    axios.get("http://localhost:3000/acessopessoa/countAcessoVisitantes").then((response) => {
      setVisitante(response.data);
    });
  }, []);

  return (
    <div className="grid lg:grid-cols-3 gap-4 p-6">
      <div className="lg-col-span-3 col-span-1 bg-white flex justify-between w-full border p-6 rounded-lg shadow-lg">
        <div className="flex flex-col text-black w-full gap-2">
          <div className="flex justify-around items-center">
            <span className=""><IconChevronsUp size={72} color="green" /></span>
            <p className="text-5xl">{acesso}</p>
          </div>
          <p className="text-3xl text-center">Acessos</p>
        </div>
      </div>
      <div className="lg-col-span-3 col-span-1 bg-white flex justify-between w-full border p-6 rounded-lg shadow-lg">
        <div className="flex flex-col text-black w-full gap-2">
          <div className="flex justify-around items-center">
            <span className=""><IconChevronsDown size={72} color="red" /></span>
            <p className="text-5xl">{saida}</p>
          </div>
          <p className="text-3xl text-center">Saídas</p>
        </div>
      </div>
      <div className="lg-col-span-3 col-span-1 bg-white flex justify-between w-full border p-6 rounded-lg shadow-lg">
        <div className="flex flex-col text-black w-full gap-2">
          <div className="flex justify-around items-center">
            <span className=""><IconWalk size={72} color="gray" /></span>
            <p className="text-5xl">{visitante}</p>
          </div>
          <p className="text-3xl text-center">Visitas</p>
        </div>
      </div>
    </div>
  )
}