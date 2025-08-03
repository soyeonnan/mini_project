import { Button } from '@mantine/core';
import './Main.css';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  return(
    
    <>
      <div className="total">

        <div className="title1">
          <div className="box">
            <h1>운동루틴</h1>
            <p>초급자,중급자,고급자 루틴</p>
          </div>
            <Button variant="light" color="black" onClick={()=>navigate('/routine')}>루틴 보기</Button>
        </div>

          <div className="title2">
            <div className="box">
              <h1>운동시작</h1>
              <p>지금 바로 운동시작</p>
            </div>
            <Button variant="light" color="black" onClick={()=>navigate('/start')}>바로 시작</Button>
        </div>

          <div className="title3">
            <div className="box">
              <h1>운동기록</h1>
              <p>운동 한 날 보기</p>
            </div> 
            <Button variant="light" color="black" onClick={()=>navigate('/history')}>기록 보기 </Button>
        </div>

          <div className="title4">
            <div className="box">
              <h1>챌린지</h1>
              <p>진행률 확인하기</p>
            </div>  
            <Button variant="light" color="black" onClick={()=>navigate('/myCalendar')}>진행 보기</Button>
        </div>

      </div>
    </>
  )
}

export default Main;