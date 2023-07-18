import { IconEdit, IconPoint, IconTrash } from "@tabler/icons-react";
import { IconCircleArrowDown, IconCircleArrowUp } from "@tabler/icons-react";
import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";

export default function CardTablePessoas() {

  const [pessoas, setPessoas] = useState([])
  const [idPessoa, setIdPessoa] = useState<Number>();

  const getPessoas = async () => {
    await axios.get("http://localhost:3000/pessoa/list")
      .then((response) => {
        setPessoas(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getPessoas();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'dd/MM/yyyy HH:mm:ss');
  };

  console.log(idPessoa)

  const cadastrarEntrada = async () => {
    await axios.post("http://localhost:3000/acessopessoa/entradapessoa", {
      pessoaIdPessoa: idPessoa
    })
      .then((response) => {
        console.log(response.data)
      }).catch((error) => {
        console.error(error);
      });
  };

  const selecionarEntrada = async () => {
    await axios.put("http://localhost:3000/pessoa/entrada/" + idPessoa)
      .then((response) => {
        console.log(response.data)
      }).catch((error) => {
        console.error(error);
      });
  };

  const cadastrarSaida = async () => {
    await axios.post("http://localhost:3000/acessopessoa/saidapessoa", {
      pessoaIdPessoa: idPessoa
    })
      .then((response) => {
        console.log(response.data)
      }).catch((error) => {
        console.error(error);
      });
  };

  const selecionarSaida = async () => {
    await axios.put("http://localhost:3000/pessoa/saida/" + idPessoa)
      .then((response) => {
        console.log(response.data)
      }).catch((error) => {
        console.error(error);
      });
  };
  
  
  const editarPessoa = async () => {
    await axios.put("http://localhost:3000/pessoa/saida/" + idPessoa)
    .then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.error(error);
    });
  };
  
  const deletarPessoa = async () => {
    await axios.delete("http://localhost:3000/pessoa/" + idPessoa)
      .then((response) => {
        console.log(response.data)
      }).catch((error) => {
        console.error(error);
      });
      window.location.reload();
  };
  
  return (
    <div className="grid lg:grid-cols-1 p-4 gap-1">
      <h1 className="text-xl text-black font-semibold">Pessoas</h1>
      <table className="w-full shadow-lg">
        <thead>
          <tr className="bg-blue-gray-500">
            <th
              className={
                "px-6 py-3 text-sm uppercase font-semibold text-left"
              }>Nome</th>
            <th
              className={
                "px-4 py-3 text-sm uppercase font-semibold text-left"
              }>Telefone</th>
            <th
              className={
                "px-4 py-3 text-sm uppercase font-semibold text-left"
              }>Descrição</th>
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
                "px-4 py-3 text-sm uppercase font-semibold bg-orange-500"
              }>Acessos</th>
              <th
              className={
                "px-4 py-3 text-sm uppercase font-semibold bg-blue-500"
              }>Ações</th>
          </tr>
        </thead>
        <tbody>
          {pessoas.map((r: any) => (
            <tr key={r.idPessoa}>
              <td id="pessoa-id" className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left text-black">
                {r.nome}
              </td>
              <td id="pessoa-id" className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left text-black">
                {r.telefone}
              </td>
              <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left text-black">
                {r.descricao}
              </td>
              <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-black">
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
              <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-sm p-4 text-black">
                {formatDate(r.entrada)}
              </td>
              <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-sm p-4 text-black">
                {formatDate(r.saida)}
              </td>
              <td className="border-t-0 px-3 align-middle border-l-0 border-r-0 text-sm p-4 text-center">
                <button className="bg-green-500 rounded-full mr-1" onClick={() => {
                  setIdPessoa(r.idPessoa)
                  selecionarEntrada()
                  cadastrarEntrada()
                }}>
                  <IconCircleArrowUp />
                </button>
                <button className="bg-red-500 rounded-full" onClick={() => {
                  setIdPessoa(r.idPessoa)
                  selecionarSaida()
                  cadastrarSaida()
                }}>
                  <IconCircleArrowDown />
                </button>
              </td>
              <td className="border-t-0 px-3 align-middle border-l-0 border-r-0 text-sm p-4 text-center">
                <button className="bg-green-500 rounded-full mr-1" onClick={() => {
                  setIdPessoa(r.idPessoa)
                  editarPessoa()
                }}>
                  <IconEdit />
                </button>
                <button className="bg-red-500 rounded-full" onClick={() => {
                  setIdPessoa(r.idPessoa)
                  deletarPessoa()
                }}>
                  <IconTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}