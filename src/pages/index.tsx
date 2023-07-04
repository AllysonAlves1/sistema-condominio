import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBars/indexNavBar'
import Dashboard from './admin/dashboard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <NavBar />
      <Dashboard />
    </div>
  )
}
