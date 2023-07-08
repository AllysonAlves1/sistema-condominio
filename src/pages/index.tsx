import Image from 'next/image'
import Header from '@/components/Header'
import CardTable from '@/components/Cards/CardTable'
import TopCards from '@/components/Cards/TopCards'

export default function Home() {
  const residentes = [
    {
      id: 1,
      nome: "João",
      cpf: "111.111.111-11",
      telefone: "111.111.111-11",
      veiculo: "porsche"
    },
    {
      id: 2,
      nome: "Maria",
      cpf: "222.222.222-22",
      telefone: "222.222.222-22",
      veiculo: "mercendez"
    },
    {
      id: 3,
      nome: "Pedro",
      cpf: "333.333.333-33",
      telefone: "333.333.333-33",
      veiculo: "toyota"
    },
  ]
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Header />
      <TopCards />
      <CardTable residentes={residentes} />
    </div>
  )
}
