import Center from '../components/Center.jsx'
import Sidebar from '../components/Sidebar.jsx'

export default function Home() {
  return (
    <div className='bg-black h-screen overflow-hidden'>
      <main className='flex'>
        <Sidebar />
        <Center />
      </main>
      <div>{/* {Player} */}</div>
    </div>
  )
}
