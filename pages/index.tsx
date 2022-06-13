import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Homepage from '../components/Homepage'
import Aboutus from '../components/Aboutus'
import Photo from '../components/Photo'
import Services from '../components/Services'
import Prices from '../components/Prices'
import Gallery from '../components/Gallery'
import Blog from '../components/Blog'
import Shop from '../components/Shop'
import Option from '../components/Option'
import Faq from '../components/Faq'
import Tagline from '../components/Tagline'
import Footer from '../components/Footer'
import Unav from '../components/Unav'
// import Button from '../components/Button'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col'>
    <Unav/>
     <Navbar/>
     {/* <Button/> */}
     <Homepage/>
     <Aboutus/>
     <Photo/>
     <Services/>
     <Prices/>
     <Gallery/>
     <Blog/>
     <Shop/>
     <Option/>
     <Faq/>
     <Tagline/>
     <Footer/>
    
    </div>
  )
}

export default Home
