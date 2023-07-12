import { useEffect, useState } from "react"
import jwt from "jsonwebtoken";
import axios from "axios";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      // Fazer a requisição para o backend
      const response = await axios.post('/usuario/login', {
        email,
        senha,
      });

      // Obter o token JWT da resposta
      const token = response.data.token;

      // Decodificar o token JWT para obter as informações do usuário
      const decodedToken = jwt.decode(token);

      // Armazenar o token no localStorage
      localStorage.setItem('token', token);

      useEffect(() => {
        const token = localStorage.getItem('token');
    
        if (token) {
          // O usuário está autenticado, redirecionar para a página protegida
          router.push('/dashboard');
        }
      }, []);

    } catch (error) {
      // Tratar erros de autenticação
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white">
      <div className="w-1/2 h-1/2 flex flex-col p-20 justify-between bg-slate-200 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-black">
          Entre no sistema
        </h1>
        <div className="w-full flex flex-col">
          <h3 className="text-2xl font-semibold mb-4 text-black">Login</h3>
          <p className="text-sm mb-2 text-black">Bem-vindo de volta!</p>
        </div>
        <div className="w-full">
          <p className="text-sm font-normal text-black">Você já tem uma conta? <span className="font-semibold underline underline-offset-2 cursor-pointer">Cadastre-se no sistema</span></p>
        </div>
      </div>
    </div>
  )
}