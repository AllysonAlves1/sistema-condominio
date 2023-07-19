import Button from "@/components/Button";
import Input from "@/components/Input";
import Layout from "@/components/Layout";
import axios from "axios";
import jwt, { JwtPayload } from 'jsonwebtoken';
import { useEffect, useState } from "react";

export default function Perfil() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('');
  const [decodedJwt, setDecodedJwt] = useState<JwtPayload | null>(null);

  useEffect(() => {
    // Obter o token armazenado no localStorage
    const token = localStorage.getItem("user");

    // Decodificar o token e atualizar o estado com os dados decodificados
    if (token) {
      try {
        const decoded = jwt.decode(token);
        console.log(decoded)
      } catch (error) {
        console.error('Erro ao decodificar o token:', error);
      }
    }
  }, []);

  const editarUsuario = async () => {
    await axios.put("http://localhost:3000/usuario/" + decodedJwt?.idUsuario, {
      nome,
      email,
      senha,
    }).then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <Layout>
      <div className="w-full min-h-screen flex items-center justify-center bg-blue-50">
        <div className="flex flex-col w-full gap-5 p-20 m-20 bg-white rounded-md shadow-lg">
          <div>
            <h1 className="text-2xl text-black">Perfil do Usuário</h1>
            <p className="text-sm text-gray-500">
              Informações sobre o usuário
            </p>
            <Input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
            <Input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
            <Button label="Atualizar" onClick={editarUsuario}/>
          </div>
        </div>
      </div>
    </Layout >
  )
}