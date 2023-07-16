import Button from "@/components/Button";
import Input from "@/components/Input";
import Layout from "@/components/Layout";

export default function Perfil() {
  return (
    <Layout>
      <div className="w-full min-h-screen flex items-center justify-center bg-blue-50">
        <div className="flex flex-col w-full gap-5 p-20 m-20 bg-white rounded-md shadow-lg">
          <div>
            <h1 className="text-2xl text-black">Perfil do Usuário</h1>
            <p className="text-sm text-gray-500">
              Informações sobre o usuário
            </p>
            <Input type="text" placeholder="Nome"/>
            <Input type="password" placeholder="Senha"/>
            <Button label="Atualizar" />
          </div>
        </div>
      </div>
    </Layout >
  )
}