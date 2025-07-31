import Table from 'react-bootstrap/Table';

function Advanced (){
  return (
    <>
      <h1>고급자</h1>
      <h3>주 5~6회</h3>
      <p>고강도 분할 운동 + 유산소 혼합</p>
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
            <td>가슴 + 삼두</td>
            <td>벤치프레스, 인클라인 벤치프레스, 딥스, 트라이셉스 푸쉬다운</td>
            <td>5세트 x 6~8회</td>
            <td>고중량, 휴식 60~90초</td>
          </tr>
          <tr>
            <td>화</td>
            <td>등 +이두 </td>
            <td>데드리프트, 바벨로우, 랫풀다운, 바벨컬, 해머컬</td>
            <td>5세트 x 6~8회</td>
            <th>중량 점진적 증가</th>
          </tr>
          <tr>
           <td>수</td>
            <td>하체 + 코어 </td>
            <td>스쿼트, 레그프레스, 루마니안 데드리프트, 플랭크, 러시안 트위스트</td>
            <td>5세트 x 6~8회 (코어는 시간 기반)</td>
            <th>코어 운동 집중</th>
          </tr>
          <tr>
            <td>목</td>
            <td>어깨 + 유산소 </td>
            <td>밀리터리 프레스, 사이드 레터럴 레이즈, 페이스 풀, 러닝 또는 HIIT 20~30분</td>
            <td>5세트 x 6~8회</td>
            <th>유산소 포함, 심폐 강화</th>
          </tr>
          <tr>
            <td>금</td>
            <td>전신 서킷 트레이닝 </td>
            <td>버피, 케틀벨 스윙, 점핑 런지, 마운틴 클라이머, 푸쉬업</td>
            <td>4~5라운드 x 30초 운동 / 15초 휴식</td>
            <th>최대한 빠른 템포, 심폐 집중</th>
          </tr>
          <tr>
            <td>토</td>
            <td colSpan={2}>휴식 또는 가벼운 스트레칭 및 요가</td>
            <td>회복 중점</td>
          </tr>
          <tr>
            <td>일</td>
            <td colSpan={2}>휴식 또는 자유 운동</td>
            <td>유연성 및 회복</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default Advanced;