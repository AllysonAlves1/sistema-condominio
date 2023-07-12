import { IconCircleArrowDown, IconCircleArrowUp } from "@tabler/icons-react";
import { IconCircleCheck } from '@tabler/icons-react';
import axios from "axios";
import { useEffect, useState } from "react";

interface ResidentesProps {
  residentes: [];
}

export default function CardTableVeiculos(props: ResidentesProps) {

  // const [data, setData] = useState('');
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('/pessoa');
  //       const responseData = response.data;
  //       setData(responseData);
  //       console.log(responseData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const [filtro, setFiltro] = useState(null);

  // const handleFiltro = (opcao) => {
  //   if (opcao === filtro) {
  //     setFiltro(null); // Desmarca o filtro se a opção já estiver selecionada
  //   } else {
  //     setFiltro(opcao); // Define o filtro selecionado
  //   }
  // };

  // const dadosFiltrados = filtro ? data.filter(item => item[opcao]) : data;

  return (
    <div className="grid lg:grid-cols-1 p-4 gap-1">
      <h1 className="text-xl text-black font-semibold">Veículos</h1>
      <table className="w-full shadow-lg">
        <thead>
          <tr className="bg-zinc-400">
            <th
              className={
                "px-6 py-3 text-xs uppercase font-semibold text-left"
              }>Nome</th>
              <th
              className={
                "px-6 py-3 text-xs uppercase font-semibold text-left"
              }>Descrição</th>
            <th
              className={
                "px-6 py-3 text-xs uppercase font-semibold text-left"
              }>Apartamento</th>
            <th
              className={
                "px-6 py-3 text-xs uppercase font-semibold text-left"
              }>Status</th>
            <th
              className={
                "px-6 py-3 text-xs uppercase font-semibold text-left"
              }>Automóvel</th>
            <th
              className={
                "px-6 py-3 text-xs uppercase font-semibold text-left"
              }>Placa</th>
            <th
              className={
                "px-4 py-3 text-xs uppercase font-semibold bg-blue-600 text-blue-200"
              }>Ações</th>
          </tr>
        </thead>
        <tbody>
          {props.residentes.map((r: any, indice: number) => (
            <tr key={r.nome}>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-black">
                {r.nome}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-black">
                {r.descricao}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-black">
                {r.cpf}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <div className="flex items-center">
                  <IconCircleCheck />
                  <span className="ml-3 text-black">
                    {r.telefone}
                  </span>
                </div>
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-black">
                {r.veiculo}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-black">
                {r.placa}
              </td>
              <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs p-4 flex justify-around">
                <button className="bg-green-500 rounded-full" onClick={() => props.selecionar(r)}>
                  <IconCircleArrowUp />
                </button>
                <button className="bg-red-500 rounded-full" onClick={() => props.selecionar(r)}>
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