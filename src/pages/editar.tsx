import Input from "@/components/Input";
import InputCheck from "@/components/InputCheck";
import Layout from "@/components/Layout";
import { Option, Select } from "@material-tailwind/react";

interface EditarPessoaProps {
  pessoa: any[]
  idPessoa: number
}

export default function EditarResidente(props: EditarPessoaProps) {

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
              <Input type="text" placeholder="Nome" />
              <div className="flex gap-5">
                <Input type="text" placeholder="CPF" />
                <Input type="tel" placeholder="Telefone" />
              </div>
              <div className="my-4 flex gap-4">
                <div className="w-full">
                  <Select label="Selecione a descrição">
                    <Option value="Morador">Morador</Option>
                    <Option value="Visitante">Visitante</Option>
                    <Option value="Porteiro">Porteiro</Option>
                  </Select>
                </div>
                <div className="w-full">
                  <Select label="Selecione o apartamento">
                    <Option value="1">Bloco 1</Option>
                  </Select>
                </div>
              </div>
              <InputCheck label="Você é proprietário de um imóvel?" type="checkbox" />
            </div>
          </div>
          <span className="border-b-[1px] border-gray-400 w-full"></span>
          <div>
            <h1 className="text-2xl text-black">Cadastro de Veículos</h1>
            <p className="text-sm text-gray-500">
              Preencha os campos abaixo para cadastrar um novo residente ou visitante.
            </p>
            <div>
              <div className="flex gap-5">
                <Input type="text" placeholder="Modelo" />
                <Input type="text" placeholder="Marca" />
              </div>
              <div className="flex items-center gap-5">
                <Select label="Selecione o tipo de veículo">
                  <Option value="Moto">Moto</Option>
                  <Option value="Carro">Carro</Option>
                </Select>
                <Input type="text" placeholder="Placa" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout >
  )
}