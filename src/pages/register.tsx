import Button from "@/components/Button";
import Input from "@/components/Input";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const cadastrarUsuario = async () => {
    try {
      const response = await axios.post(`localhost:3000/usuario/register`, {
        nome: nome,
        email: email,
        senha: senha
      });
      console.log('Usuário cadastrado:', response.data);
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
    }
  };

  useEffect(() => {
    cadastrarUsuario();
  }, []);

  const handleCadastro = () => {
    cadastrarUsuario();
  };
  
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-cyan-50">
      <div className="w-1/2 h-1/2 flex flex-col p-20 gap-4 justify-between bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-black">
          Cadastro
        </h1>
        <div className="flex justify-between">
          <p className="text-sm mb-2 text-black">Crie sua conta!</p>
          <p className="text-sm font-normal text-neutral-500">Você já tem uma conta? <Link href="/"><span className="text-black font-semibold underline underline-offset-2 cursor-pointer">Entrar</span></Link></p>
        </div>
        <div className="w-full">
          <Input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <Input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
        </div>
        <div className="w-full flex flex-col">
          <Button label="Cadastrar" onClick={handleCadastro}/>
        </div>
      </div>
    </div>
  )
}