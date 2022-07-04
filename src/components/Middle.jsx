import { Parallax, useParallax } from 'react-scroll-parallax';

const Middle = () => (
  <div className='Restaurant'>
    <Parallax
    translateY={[5, -60]}
  >
      <div className="Restaurant-img">
        <img src="/spaghetti.jpeg"></img>
      </div>
    </Parallax>
  <div className="Restaurant-text">
      <h3>Restaurant name</h3>
      <h1>A casual restaurant specializing in greek souvlakis and bakhlava, just like how grandma used to make.</h1>
      <button>View Menu</button>
    </div>
  </div>
)

export default Middle;