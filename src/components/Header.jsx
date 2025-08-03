import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header () {
  const navigate = useNavigate();

  return(
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="header" href="/main">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate('/routine')}>운동루틴</Nav.Link>
            <Nav.Link onClick={()=>navigate('/start')}>운동시작</Nav.Link>
            <Nav.Link onClick={()=>navigate('/history')}>운동기록</Nav.Link>
            <Nav.Link onClick={()=>navigate('/myCalendar')}>챌린지</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>

  )
}

export default Header;