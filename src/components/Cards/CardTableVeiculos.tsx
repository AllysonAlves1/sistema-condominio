import { IconCircleArrowDown, IconCircleArrowUp, IconPoint } from "@tabler/icons-react";
import { IconCircleCheck } from '@tabler/icons-react';
import axios from "axios";
import { useEffect, useState } from "react";

export default function CardTableVeiculos() {

  const [veiculos, setVeiculos] = useState([])
  const [selecionado, setSelecionado] = useState(false);
  const [idVeiculo, setIdVeiculo] = useState<Number>();

  const getVeiculos = async () => {
    await axios.get("http://localhost:3000/veiculo/list")
      .then((response) => {
        setVeiculos(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getVeiculos();
  }, []);

  const selecionarEntrada = async () => {
    await axios.post("http://localhost:3000/acessoveiculo/entradaveiculo", {
      veiculoIdVeiculo: idVeiculo
    })
      .then((response) => {
        console.log(response.data)
      }).catch((error) => {
        console.error(error);
      });

    await axios.put("http://localhost:3000/veiculo/entrada/" + idVeiculo)
      .then((response) => {
        console.log(response.data)
      }).catch((error) => {
        console.error(error);
      });

    setSelecionado(!selecionado)
  };

  const selecionarSaida = async () => {
    await axios.post("http://localhost:3000/acessoveiculo/saidaveiculo", {
      veiculoIdVeiculo: idVeiculo
    })
      .then((response) => {
        console.log(response.data)
      }).catch((error) => {
        console.error(error);
      });

    await axios.put("http://localhost:3000/veiculo/saida/" + idVeiculo)
      .then((response) => {
        console.log(response.data)
      }).catch((error) => {
        console.error(error);
      });

    setSelecionado(!selecionado)
  };

  return (
    <div className="grid lg:grid-cols-1 p-4 gap-1">
      <h1 className="text-xl text-black font-semibold">Veículos</h1>
      <table className="w-full shadow-lg">
        <thead>
          <tr className="bg-blue-gray-500">
            <th
              className={
                "px-4 py-3 text-sm uppercase font-semibold text-left"
              }>Modelo</th>
              <th
              className={
                "px-4 py-3 text-sm uppercase font-semibold text-left"
              }>Marca</th>
            <th
              className={
                "px-4 py-3 text-sm uppercase font-semibold text-left"
              }>Tipo</th>
              <th
              className={
                "px-4 py-3 text-sm uppercase font-semibold text-left"
              }>Placa</th>
              <th
              className={
                "px-4 py-3 text-sm uppercase font-semibold text-left"
              }>Apartamento</th>
            <th
              className={
                "px-4 py-3 text-sm uppercase font-semibold text-left"
              }>Status</th>
              <th
              className={
                "px-4 py-3 text-sm uppercase font-semibold text-left"
              }>Acesso</th>
              <th
              className={
                "px-4 py-3 text-sm uppercase font-semibold text-left"
              }>Saída</th>
            <th
              className={
                "px-4 py-3 text-sm uppercase font-semibold bg-blue-500"
              }>Ações</th>
          </tr>
        </thead>
        <tbody>
          {veiculos.map((r: any) => (
            <tr key={r.modelo}>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left text-black">
                {r.modelo}
              </td>
              <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left text-black">
                {r.marca}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-black">
                {r.tipo}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-black">
                {r.placa}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-black">
                {r.apartamento.bloco} - {r.apartamento.apartamento}
              </td>
              <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                {r.entrada > (r.saida) ?
                  <div className="flex items-center">
                    <IconPoint color="green" stroke={8} />
                    <span className="ml-3 text-black">
                      Presente
                    </span>
                  </div>
                  :
                  <div className="flex items-center">
                    <IconPoint color="red" stroke={8} />
                    <span className="ml-3 text-black">
                      Ausente
                    </span>
                  </div>
                }
              </td>
              <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-black">
                {r.entrada}
              </td>
              <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-black">
                {r.saida}
              </td>
              <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm p-4 flex justify-around">
                <button className="bg-green-500 rounded-full" onClick={() => {
                  setIdVeiculo(r.idVeiculo)
                  selecionarEntrada()
                }}>
                  <IconCircleArrowUp />
                </button>
                <button className="bg-red-500 rounded-full" onClick={() => {
                  setIdVeiculo(r.idVeiculo)
                  selecionarSaida()
                }}>
                  <IconCircleArrowDown />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}