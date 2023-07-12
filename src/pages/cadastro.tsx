import Button from "@/components/Button"
import Header from "@/components/Header"
import Input from "@/components/Input"
import SideBar from "@/components/SideBar"

export default function CadastroResidente() {
  return (
    <SideBar>
      <Header />
        <h1>Cadastro de Residente</h1>
        <div>
          <Input placeholder="Nome" />
          <Input placeholder="CPF" />
          <Input placeholder="Telefone" />
          <Input placeholder="Email" />
          <Button label="Cadastrar"/>
      </div>
    </SideBar>
  )
}