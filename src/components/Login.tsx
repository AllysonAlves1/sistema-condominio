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
  const [error, setError] = useState('');

  const login = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      senha: senha
    };
    await axios.post("http://localhost:3000/usuario/login", data)
    .then(response => {
        const token = response.data.token;
        localStorage.setItem('token', token);
        router.push('/dashboard');
      })
      .catch(error => {
        console.error("Erro ao fazer login:", error);
        setError(error.response.data.error);
      })
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      router.push("/dashboard");
    }
  }, [router]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-blue-50">
      <div className="w-1/2 h-1/2 flex flex-col p-20 gap-4 justify-between bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-black">
          Login
        </h1>
        <div className="flex justify-between">
          <p className="text-sm mb-2 text-black">Bem-vindo de volta!</p>
          <p className="text-sm font-normal text-blue-gray-500">Não tem conta? <Link href="/register"><span className="text-black font-semibold underline underline-offset-2 cursor-pointer">Cadastre-se</span></Link></p>
        </div>
        <div className="w-full">
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
        </div>
        <div className="w-full flex flex-col">
          <Button label="Entrar" onClick={login} />
        </div>
      </div>
    </div>
  )
}