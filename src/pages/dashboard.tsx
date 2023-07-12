import CardTablePessoas from '@/components/Cards/CardTablePessoas'
import CardTableVeiculos from '@/components/Cards/CardTableVeiculos'
import CardsPessoas from '@/components/Cards/CardsPessoas'
import CardsVeiculos from '@/components/Cards/CardsVeiculos'
import Layout from '@/components/Layout'

export default function Dashboard() {

  const residentes = [
    {
      id: 1,
      nome: 'João',
      cpf: '111.111.111-11',
      descricao: 'morador',
      telefone: '1111111111',
      veiculo: 'Carro',
      placa: 'ABC1234'
    },
    {
      id: 2,
      nome: 'Maria',
      cpf: '222.222.222-22',
      descricao: 'morador',
      telefone: '2222222222',
      veiculo: 'Carro',
      placa: 'DEF4567'
    },
    {
      id: 3,
      nome: 'Pedro',
      cpf: '333.333.333-33',
      descricao: 'morador',
      telefone: '3333333333',
      veiculo: 'Carro',
      placa: 'GHI7890'
    },
    {
      id: 4,
      nome: 'Ana',
      cpf: '444.444.444-44',
      descricao: 'visitante',
      telefone: '4444444444',
      veiculo: 'Carro',
      placa: 'JKL1234'
    },
    {
      id: 5,
      nome: 'Julia',
      cpf: '555.555.555-55',
      descricao: 'morador',
      telefone: '5555555555',
      veiculo: 'Carro',
      placa: 'MNO9876'
    }
  ]
  
  return (
    <Layout>
      <div className='bg-gray-100 min-h-screen'>
        <CardsPessoas />
        <CardsVeiculos />
        <CardTablePessoas residentes={residentes}/>
        <CardTableVeiculos residentes={residentes}/>
      </div>
    </Layout>
  )
}
