import { IconCircleArrowDown, IconCircleArrowUp, IconEdit, IconPoint, IconTrash } from "@tabler/icons-react";
import axios from "axios";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import React from "react";

export default function CardTableVeiculos() {

  const [veiculos, setVeiculos] = useState([])
  const [idVeiculo, setIdVeiculo] = useState('');
  const [open, setOpen] = useState(false);
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [placa, setPlaca] = useState('');

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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'dd/MM/yyyy HH:mm:ss');
  };

  const selecionarEntrada = async (id: number) => {
    const idVeiculo = id
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

  };

  const selecionarSaida = async (id: number) => {
    const idVeiculo = id
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

  };

  const editarVeiculo = async () => {
    await axios.put("http://localhost:3000/veiculo/" + idVeiculo, {
      marca,
      modelo,
      placa,
    }).then((response) => {
      console.log(response.data)
      window.location.reload();
    }).catch((error) => {
      console.error(error);
    });
  };
  
  const deletarVeiculo = async (id: number) => {
    const idVeiculo = id
    await axios.delete("http://localhost:3000/veiculo/" + idVeiculo)
      .then((response) => {
        console.log(response.data)
      }).catch((error) => {
        console.error(error);
      });
      window.location.reload();
  };

  function ModalEditar(id: string) {
    setOpen((cur) => !cur);
    setIdVeiculo(id)
    console.log(id)
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
              }>Marca</th>
              <th
              className={
                "px-4 py-3 text-sm uppercase font-semibold text-left"
              }>Modelo</th>
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
                "px-4 py-3 text-sm uppercase font-semibold bg-orange-500"
              }>Acessos</th>
              <th
              className={
                "px-4 py-3 text-sm uppercase font-semibold bg-blue-500"
              }>Ações</th>
          </tr>
        </thead>
        <tbody>
          {veiculos.map((r: any) => (
            <tr key={r.idVeiculo}>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left text-black">
                {r.marca}
              </td>
              <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left text-black">
                {r.modelo}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-black">
                {r.tipo}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-black">
                {r.placa}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-black">
                {r.apartamento?.bloco} - {r.apartamento?.apartamento}
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
              <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm p-4 text-center">
                <button className="bg-green-500 rounded-full mr-1" onClick={() => {
                  selecionarEntrada(r.idVeiculo)
                }}>
                  <IconCircleArrowUp />
                </button>
                <button className="bg-red-500 rounded-full" onClick={() => {
                  selecionarSaida(r.idVeiculo)
                }}>
                  <IconCircleArrowDown />
                </button>
              </td>
              <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm p-4 text-center">
                <button className="bg-green-500 rounded-full mr-1" onClick={() => {
                  ModalEditar(r.idVeiculo)
                }}>
                  <IconEdit />
                </button>
                <button className="bg-red-500 rounded-full" onClick={() => {
                  deletarVeiculo(r.idVeiculo)
                }}>
                  <IconTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <React.Fragment>
        <Dialog
          size="xs"
          open={open}
          handler={ModalEditar}
          className="bg-transparent shadow-none"
        >
          <Card className="mx-auto w-full max-w-[24rem]">
            <CardHeader
              variant="gradient"
              color="blue"
              className="mb-4 grid p-5"
            >
              <Typography variant="h3" color="white">
                Editar
              </Typography>
              <Typography variant="p" color="white">
                Atualize as informações do veículo
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input label="Marca" size="lg" value={marca} onChange={(e) => setMarca(e.target.value)} />
              <Input label="Modelo" size="lg" value={modelo} onChange={(e) => setModelo(e.target.value)} />
              <Input label="Placa" size="lg" value={placa} onChange={(e) => setPlaca(e.target.value)} />
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" onClick={editarVeiculo} fullWidth>
                Concluir
              </Button>
            </CardFooter>
          </Card>
        </Dialog>
      </React.Fragment>
    </div>
  )
}