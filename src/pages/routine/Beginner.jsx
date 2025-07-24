import Table from 'react-bootstrap/Table';


function Beginner (){
  return(
  
    <>
      <h1>초보자</h1>
      <h3>주 3회 (월,수,금)</h3>
      <p>전신 운동 (풀 바디)</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>요일</th>
            <th>운동 부위</th>
            <th>운동 종목</th>
            <th>세트 x 반복 수</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>월</td>
            <td>전신</td>
            <td>스쿼트, 푸쉬업(무릎 가능), 플랭크, 암워킹</td>
            <td>각 3세트 x 10~12회 (플랭크는 20초)</td>
            <td>맨몸 위주, 천천히 정확하게 수행</td>
          </tr>
          
          <tr>
           <td>수</td>
            <td>전신 </td>
            <td>런지, 슈퍼맨 자세, 버드독, 사이드 플랭크</td>
            <td>각 3세트 x 10회 (양쪽), 플랭크 15초</td>
            <th>균형감과 코어 자극에 집중</th>
          </tr>
         
          <tr>
            <td>금</td>
            <td>전신 </td>
            <td>브릿지, 스텝업, 마운틴 클라이머, 벽 푸쉬업</td>
            <td>각 3세트 x 10~15회</td>
            <th>운동 후 스트레칭 필수, 유산소처럼 움직이기</th>
          </tr>

        </tbody>
      </Table>

          <br />
          <ul> 

            <li>각 운동 세트 사이 휴식은 30~60초.</li>
            <li>운동 전 5분 걷기 또는 제자리 뛰기로 워밍업.</li>
            <li>운동 후에는 가벼운 스트레칭으로 마무리.</li>

          </ul>
      
    </>
  )
}

export default Beginner;