import { useEffect, useState } from "react"
import jwt from "jsonwebtoken";
import axios from "axios";
import { useRouter } from "next/router";
import Input from "./Input";
import Button from "./Button";
import Link from "next/link";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    
    try {
      const instance = axios.create({
        baseURL: 'http://localhost:3000/usuario/login'
      });
      const response = await axios.post(`${instance}`, {
        email,
        senha,
      });
      const token = response.data.token;
      const decodedToken = jwt.decode(token);
      localStorage.setItem('token', token);
      router.push('/dashboard');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      router.push('/dashboard');
    }
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-cyan-50">
      <div className="w-1/2 h-1/2 flex flex-col p-20 gap-4 justify-between bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-black">
          Login
        </h1>
        <div className="flex justify-between">
          <p className="text-sm mb-2 text-black">Bem-vindo de volta!</p>
          <p className="text-sm font-normal text-neutral-500">Não tem conta? <Link href="/register"><span className="text-black font-semibold underline underline-offset-2 cursor-pointer">Cadastre-se</span></Link></p>
        </div>
        <div className="w-full">
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <Input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
        </div>
        <div className="w-full flex flex-col">
          <Button label="Entrar" onClick={handleLogin}/>
        </div>
      </div>
    </div>
  )
}