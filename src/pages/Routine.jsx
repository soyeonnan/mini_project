import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SecondHeader from "../components/SecondHeader";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import cho from '../assets/cho.jpg';
import joong from '../assets/joong.jpg';
import go from '../assets/go.jpg';

import './routine/Routine.css'

let show = [
  {
     name: '선택',
    eng: '',
    link: '/routine'

  },
  {
    name: '초보자',
    eng: 'Beginner',
    link: '/routine/beginner'
  },
  {
    name:'중급자',
    eng: 'Intermediate',
    link: '/routine/intermediate'
  },
  {
    name : '고급자',
    eng: 'Advanced',
    link: '/routine/advanced'
  }
]



function Routine(){
  const navigate = useNavigate();
  const location = useLocation();

  return(
    <>
      <SecondHeader show={show} routine={Routine}/>
      <Outlet/>
    {
      location.pathname === '/routine' ?

      <div className="cardShow">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={cho} width="100px" height="180px" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" onClick={()=>navigate('/routine/beginner')}>초보자로!</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={joong} width="100px" height="180px" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" onClick={()=>navigate('/routine/intermediate')}>중급자로!</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={go} width="100px" height="180px" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" onClick={()=>navigate('/routine/advanced')}>고급자로!</Button>
          </Card.Body>
        </Card>
      </div>
      :
      ''
    }

    </>
  )
}

export default Routine;