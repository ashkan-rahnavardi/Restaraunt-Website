import { Parallax } from 'react-parallax'
//import { Parallax } from 'react-scroll-parallax';
import firstImage from '../images/restaurant.jpeg'
import logoImage from '../images/Logo.png';

const ImageOne = () => (
    <Parallax className='imageOne' bgImage={firstImage} strength={800}
        bgImageStyle={{height: '100%'}}>
        <div className='imageOne-content'>
            {/* <span className='imgageOne-txt'>a trip to space</span> */}
            <img src="/Logo.png" className="Logo-image" alt="something"></img>
        </div>
    </Parallax>
);

// const ImageOne = () => (
//     <div className='imageOne-Container'>   
//         <Parallax
//             translateY={[10, -10]}
//         >
//             <div className='imageOne'>
//                 <img src={firstImage}></img>
//             </div>
//         </Parallax>
//         <Parallax
//             translateY={[10, -10]}
//         >
//             <div className='imageOne-content'>
//                 <img src={logoImage} className='Logo-image'></img>
//             </div>
//     </Parallax>
//     </div>
// );

// const ImageOne = () => (
//     <div className='imageOne'>   
//         <Parallax
//             translateY={[10, -10]}
//         >
//             <img src={firstImage} className='imageOne-content'></img>
//         </Parallax>
//         <Parallax
//             translateY={[10, -10]}
//         >
//             <img src={logoImage} className='Logo-image'></img>
//         </Parallax>
//     </div>
// );

export default ImageOne
