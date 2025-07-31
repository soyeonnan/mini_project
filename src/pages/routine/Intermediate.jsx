import Table from 'react-bootstrap/Table';

function Intermediate (){
  return(
    <>
      <h1>중급자</h1>
      <h3>주 4~5회</h3>
      <p>분할 운동 (상체/하체)</p>
    
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
            <td>상체 (가슴, 등)</td>
            <td>벤치프레스, 랫풀다운, 덤벨 플라이, 바벨로우</td>
            <td>4세트 x 8~10회</td>
            <td>중간 무게, 폼 집중</td>
          </tr>
          <tr>
            <td>화</td>
            <td>하체</td>
            <td>스쿼트, 레그프레스, 루마니안 데드리프트, 런지</td>
            <td>4세트 x 8~10회</td>
            <th>근력과 근지구력 함께 강화</th>
          </tr>
          <tr>
            <td>수</td>
            <td colSpan={3}>휴식 또는 가벼운 유산소</td>
            <td>회복 및 심폐 강화</td>
          </tr>
          <tr>
            <td>목</td>
            <td>상체 (어깨, 팔) </td>
            <td>숄더프레스, 사이드 레터럴 레이즈, 바벨컬, 트라이셉스 익스텐션</td>
            <td>4세트 x 8~10회</td>
            <th>자세와 범위에 집중</th>
          </tr>
          <tr>
            <td>금</td>
            <td>하체 + 코어 </td>
            <td>레그 컬, 힙 쓰러스트, 플랭크, 러시안 트위스트</td>
            <td>4세트 × 8~10회 (코어는 시간 기반)</td>
            <th>코어 강화 및 하체 보완</th>
          </tr>
          <tr>
            <td>주말</td>
            <td colSpan={3}>휴식 또는 가벼운 활동</td>
            <td>유연성 및 회복 중심</td>
          </tr>
          
        </tbody>
      </Table>
    </>
    
  )
}

export default Intermediate;