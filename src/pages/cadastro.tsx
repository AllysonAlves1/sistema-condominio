import Button from "@/components/Button"
import Input from "@/components/Input"
import InputCheck from "@/components/InputCheck";
import Layout from "@/components/Layout"
import { Select } from "@material-tailwind/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Cadastro() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [descricao, setDescricao] = useState('');
  const [proprietario, setProprietario] = useState(false);
  const [apartamento, setApartamento] = useState([] as any[]);
  const [modelo, setModelo] = useState('');
  const [marca, setMarca] = useState('');
  const [placa, setPlaca] = useState('');
  const [tipo, setTipo] = useState('');

  const [apartamentoSelecionado, setApartamentoSelecionado] = useState('');

  const getApartamento = async () => {
    await axios.get("http://localhost:3000/apartamento")
      .then((response) => {
        setApartamento(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getApartamento();
  }, []);

  const cadastrarPessoa = async (event) => {
    event.preventDefault();
    const pessoa = {
      nome,
      cpf,
      telefone,
      descricao,
      proprietario,
      apartamentoIdApartamento: Number(apartamentoSelecionado) 
    };
    await axios.post("http://localhost:3000/pessoa/registrar", pessoa)
      .then((response) => {
        console.log("Pessoa cadastrada:", response.data);
        router.push('/dashboard')
      })
      .catch((error) => {
        console.error("Erro ao cadastrar Pessoa:", error);
      });
  };

  const cadastrarVeiculo = async (event) => {
    event.preventDefault();
    const veiculo = {
      tipo,
      marca,
      modelo,
      placa,
      apartamentoIdApartamento: Number(apartamentoSelecionado)
    };
    await axios.post("http://localhost:3000/veiculo/registrar", veiculo)
      .then((response) => {
        console.log("Veiculo cadastrado:", response.data);
        router.push('/dashboard')
      })
      .catch((error) => {
        console.error("Erro ao cadastrar Veiculo:", error);
      });
  };

  return (
    <Layout>
      <div className="w-full min-h-screen flex items-center justify-center bg-blue-50">
        <div className="flex flex-col w-full gap-5 p-20 m-20 bg-white rounded-md shadow-lg">
          <div>
            <h1 className="text-2xl text-black">Cadastro de Usuários</h1>
            <p className="text-sm text-gray-500">
              Preencha os campos abaixo para cadastrar um novo residente ou visitante.
            </p>
            <div>
              <Input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
              <div className="flex gap-5">
                <Input type="text" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                <Input type="tel" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
              </div>
              <div className="my-4 flex gap-4">
                <select className="border-2 border-gray-500 focus:border-blue-500 text-gray-700 rounded-md p-3" value={descricao} onChange={e => setDescricao(e.target.value)}>
                  <option value="Morador">Morador</option>
                  <option value="Visitante">Visitante</option>
                </select>
                <select className="border-2 border-gray-500 focus:border-blue-500 text-gray-700 rounded-md p-3" value={apartamentoSelecionado} onChange={e => setApartamentoSelecionado(e.target.value)}>
                  {apartamento.map((item, index) => (
                    <option key={index} value={item.idApartamento}>{item.apartamento} - {item.bloco}</option>
                  ))}
                </select>
              </div>
              {descricao == "Visitante" ? <></> : 
                <InputCheck label="Você é proprietário de um imóvel?" type="checkbox" checked={proprietario} onChange={(e) => setProprietario(e.target.checked)} />
              }
            </div>
            <Button label="Cadastrar" onClick={cadastrarPessoa} />
          </div>
          <span className="border-b-[1px] border-gray-400 w-full"></span>
          <div>
            <h1 className="text-2xl text-black">Cadastro de Veículos</h1>
            <p className="text-sm text-gray-500">
              Preencha os campos abaixo para cadastrar um novo residente ou visitante.
            </p>
            <div>
              <div className="flex gap-5 my-4">
                <Input type="text" placeholder="Modelo" value={modelo} onChange={(e) => setModelo(e.target.value)} />
                <Input type="text" placeholder="Marca" value={marca} onChange={(e) => setMarca(e.target.value)} />
                <Input type="text" placeholder="Placa" value={placa} onChange={(e) => setPlaca(e.target.value)} />
              </div>
              <div className="my-4 flex gap-4">
                <select className="border-2 border-gray-500 focus:border-blue-500 text-gray-700 rounded-md p-3" value={tipo} onChange={e => setTipo(e.target.value)}>
                  <option value="Carro" className="text-sm">Carro</option>
                  <option value="Moto">Moto</option>
                </select>
                <select className="border-2 border-gray-500 focus:border-blue-500 text-gray-700 rounded-md p-3" value={apartamentoSelecionado} onChange={e => setApartamentoSelecionado(e.target.value)}>
                  {apartamento.map((item, index) => (
                    <option key={index} value={item.idApartamento}>{item.apartamento} - {item.bloco}</option>
                  ))}
                </select>
              </div>
              <Button label="Cadastrar" onClick={cadastrarVeiculo} />
            </div>
          </div>

        </div>
      </div>
    </Layout >
  )
}