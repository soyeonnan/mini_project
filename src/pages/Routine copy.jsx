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
            <Card.Title>처음 시작하는 당신을 위한 루틴</Card.Title>
            <Card.Text>
              운동이 처음이라도 괜찮아요.
              위험 없이, 쉽고 효과적으로 시작해보세요!
              내 몸의 변화를 느껴보세요.
              
            </Card.Text>
            <Button variant="primary" onClick={()=>navigate('/routine/beginner')}>초보자루틴</Button>
            <Button variant="primary" onClick={()=>navigate('/routine/beginner')}>바로시작!</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={joong} width="100px" height="180px" />
          <Card.Body>
            <Card.Title>더 단단해지고 싶은 당신을 위해</Card.Title>
            <Card.Text>
              이제 기초를 넘어서 균형 잡힌 근육과 체력을 만들어야 할 때!
              다양한 부위 운동으로 전신을 강화하세요.
              
            </Card.Text>
            <Button variant="primary" onClick={()=>navigate('/routine/intermediate')}>중급자루틴</Button>
            <Button variant="primary" onClick={()=>navigate('/routine/intermediate')}>바로시작!</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={go} width="100px" height="180px" />
          <Card.Body>
            <Card.Title>한계에 도전하는 하드 트레이닝</Card.Title>
            <Card.Text>
              강도 높은 루틴으로 진짜 실력을 쌓아보세요.
              지치지 않는 체력과 완벽한 컨디션을 목표로!
              
            </Card.Text>
            <Button variant="primary" onClick={()=>navigate('/routine/advanced')}>고급자루틴</Button>
            <Button variant="primary" onClick={()=>navigate('/routine/intermediate')}>바로시작!</Button>
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