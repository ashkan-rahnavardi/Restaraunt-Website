import { ParallaxProvider } from 'react-scroll-parallax';
import Hamburger from './components/Hamburger'
import TopImage from './components/TopImage'
import Middle from './components/Middle'
import MiddleImage from './components/MiddleImage'
import Bottom from './components/Bottom'
import Footer from './components/Footer'
import ImageOne from './components/ImageOne'
import Forth from './components/Forth';

function App() {
  return (
    <ParallaxProvider>
      <div className='App'>
      {/* <Hamburger/> */}
      <ImageOne/>
      {/* <TopImage/> */}
      <Middle/>
      <MiddleImage/>
      <Forth/>
      <Footer/>
      </div>
    </ParallaxProvider>
  )
}

export default App
