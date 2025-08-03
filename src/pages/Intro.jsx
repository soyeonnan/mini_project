import Carousel from 'react-bootstrap/Carousel';
import man from '../img/man.jpg';
import dumbel from '../img/dumbel.jpg';
import girl from '../img/girl.jpg';

import './Intro.css' //폰트 

import { useNavigate } from 'react-router-dom'; // navigate로 메인으로 이동
import { Button } from '@mantine/core';

function Intro() {
  const navigate = useNavigate();

  return(
    <div className='Intro'>
      <Button className="buttonStyle" variant="filled" color="red" onClick={()=>navigate('/main')}>Start</Button>
      <Carousel>
      <Carousel.Item className="slider1">
        <img src={man} alt="First slide" style={{width:'100%', height : '100vh', objectFit : 'cover'}}/>
        <Carousel.Caption>
          <h3 className='Intro2'>이건 첫 번째 레슨</h3>
          <p>"Your transformation starts here."</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="slider2">
        <img src={dumbel} alt="Second slide" style={{width:'100%', height : '100vh', objectFit : 'cover'}}/>
        <Carousel.Caption>
          <h3 className='Intro2'>이제 두 번째 레슨</h3>
          <p>"New to fitness? Don’t worry, we’ll take it step by step."</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="slider3">
        <img src={girl} alt="Third slide" style={{width:'100%', height : '100vh', objectFit : 'cover'}}/>
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