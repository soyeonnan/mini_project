import Carousel from 'react-bootstrap/Carousel';
import man from '../img/man.jpg';
import dumbel from '../img/dumbel.jpg';
import girl from '../img/girl.jpg';

import './Intro.css' //폰트 

function Intro() {
  return(
    <div className='Intro'>
      <button className="buttonStyle" onClick={()=>{}}>Start</button>
      <Carousel>
      <Carousel.Item>
        <img src={man} alt="First slide" style={{width:'100%', height : '100vh'}}/>
        <Carousel.Caption>
          <h3 className='Intro2'>이건 첫 번째 레슨</h3>
          <p>"Your transformation starts here."</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={dumbel} alt="Second slide" style={{width:'100%', height : '100vh'}}/>
        <Carousel.Caption>
          <h3 className='Intro2'>이제 두 번째 레슨</h3>
          <p>"New to fitness? Don’t worry, we’ll take it step by step."</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={girl} alt="Third slide" style={{width:'100%', height : '100vh'}}/>
        <Carousel.Caption>
          <h3 className='Intro2'>드디어 세 번째 레슨</h3>
          <p>
            "Health is a choice. Make yours today."
          </p>
    
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Intro;