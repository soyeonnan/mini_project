import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SecondHeader from "../components/SecondHeader";


import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
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

      <div className="cardShow" style={{marginTop:50}}>
        <Card shadow="sm" padding="lg" radius="md" withBorder w={500}>
          <Card.Section>
            <Image
              src={cho}
              height={300}
              alt="Norway"
            />
          </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
         <Text fw={500}>처음 시작하는 당신을 위한 루틴</Text>
         <Badge color="pink">초보</Badge>
        </Group>

        <Text size="sm" c="dimmed">
          운동이 처음이라도 괜찮아요.
          위험 없이, 쉽고 효과적으로 시작해보세요!
          내 몸의 변화를 느껴보세요.
        </Text>  

        <Group justify="center" gap="sm" grow>
          <Button color="blue" size="md"  radius="md" >
            초보자 루틴
          </Button>
          <Button color="" size="md"  radius="md">
            바로 시작!
          </Button>
        </Group>
      </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder w={500}>
          <Card.Section>
            <Image
              src={joong}
              height={300}
              alt="Norway"
            />
          </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
         <Text fw={500}>더 단단해지고 싶은 당신을 위해</Text>
         <Badge color="pink">중급</Badge>
        </Group>

        <Text size="sm" c="dimmed">
         이제 기초를 넘어서 균형 잡힌 근육과 체력을 만들어야 할 때!
          다양한 부위 운동으로 전신을 강화하세요.
        </Text>  

        <Group justify="center" gap="sm" grow>
          <Button color="blue" size="md"  radius="md" >
            중급자 루틴
          </Button>
          <Button color="" size="md"  radius="md">
            바로 시작!
          </Button>
        </Group>
      </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder w={500}>
          <Card.Section>
            <Image
              src={go}
              height={300}
              alt="Norway"
            />
          </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
         <Text fw={500}>한계에 도전하는 하드 트레이닝</Text>
         <Badge color="pink">고급</Badge>
        </Group>

        <Text size="sm" c="dimmed">
          강도 높은 루틴으로 진짜 실력을 쌓아보세요.
          지치지 않는 체력과 완벽한 컨디션을 목표로!
        </Text>  

        <Group justify="center" gap="sm" grow>
          <Button color="blue" size="md"  radius="md" >
            고급자 루틴
          </Button>
          <Button color="" size="md"  radius="md">
            바로 시작!
          </Button>
        </Group>
      </Card>
        
      </div>

      
    

      :
      ''
    }

    </>
  )
}

export default Routine;