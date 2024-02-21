import SummaryDiv from '@/Components/Home/SummaryDiv'
import Navbar from '../Components/Navbar'
import GraphDetails from "../Components/Home/GraphDetails"
import InputTab from '@/Components/Home/InputTab'
const Home = () => {
  return (
    <div className=''>
        <Navbar page='Home' />
      <div className='px-20 mt-10'>
        <InputTab />
        <SummaryDiv />
        <GraphDetails />
      </div>
    </div>
  )
}

export default Home
