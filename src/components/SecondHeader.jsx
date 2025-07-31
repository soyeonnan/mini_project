import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';




function SecondHeader({show}) {
  const navigate = useNavigate();
 
  return (
    
      <Nav variant="underline" defaultActiveKey="link-0">
        {show.map((title,i) => {
          return (
             <Nav.Item key={i}>
              <Nav.Link eventKey={`link-${i}`} onClick={()=>navigate(title.link)}>{title.name}</Nav.Link>
             </Nav.Item>
          )
        })}
      
      
      </Nav>
  
  );
}

export default SecondHeader;