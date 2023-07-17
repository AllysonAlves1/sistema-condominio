import Button from "@/components/Button";
import Input from "@/components/Input";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { SetStateAction, useState } from "react";

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const register = async (event) => {
    event.preventDefault();
    const data = {
      nome,
      email,
      senha,
    };
    await axios.post("http://localhost:3000/usuario/register", data)
      .then((response) => {
        console.log("Usuário cadastrado:", response.data);
        router.push("/");
      })
      .catch((error) => {
        console.error("Erro ao cadastrar usuário:", error);
      });
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-blue-50">
      <div className="w-1/2 h-1/2 flex flex-col p-20 gap-4 justify-between bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-black">
          Cadastro
        </h1>
        <div className="flex justify-between">
          <p className="text-sm mb-2 text-black">Crie sua conta!</p>
          <p className="text-sm font-normal text-blue-gray-500">Você já tem uma conta? <Link href="/"><span className="text-black font-semibold underline underline-offset-2 cursor-pointer">Entrar</span></Link></p>
        </div>
        <div className="w-full">
          <Input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
        </div>
        <div className="w-full flex flex-col">
          <Button label="Cadastrar" onClick={register} />
        </div>
      </div>
    </div>
  )
}