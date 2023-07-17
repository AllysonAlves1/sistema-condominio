import CardTablePessoas from '@/components/Cards/CardTablePessoas'
import CardTableVeiculos from '@/components/Cards/CardTableVeiculos'
import CardsPessoas from '@/components/Cards/CardsPessoas'
import CardsVeiculos from '@/components/Cards/CardsVeiculos'
import Layout from '@/components/Layout'

export default function Dashboard() {

  return (
    <Layout>
      <div className='bg-gray-100 min-h-screen'>
        <CardsPessoas />
        <CardTablePessoas />
        <CardsVeiculos />
        <CardTableVeiculos />
      </div>
    </Layout>
  )
}
