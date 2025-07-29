function History (){
  let history = localStorage.getItem('startWorkTime');
  history = JSON.parse(history);
  
  return(
    <>
      <h1>운동기록</h1>

        <div>
          <table> 

            <thead>

              <tr>
                <th>날짜/시간</th> 
                <th>레벨</th>
                <th>운동명</th>
                <th>세트(개수)</th>
              </tr>

            </thead>

            <tbody>
            {
            history.map((his,i)=>{
              
              return(
               
                <tr>
                <td>{his.todayTime}</td>
                <td>{his.level}</td>
                <td>{his.name}</td>
                <td>{his.workTime}</td>
                </tr>
                
              )})
            }
            </tbody>
          </table>
        </div>  
    </> 
  );
}

export default History;