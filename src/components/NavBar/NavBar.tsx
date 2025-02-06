import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="mb-5">
      <Container>
        <NavLink className="navbar-brand fs-2" to='/'>Мой блог</NavLink>
        <Nav className="ms-auto">
          <NavLink className='nav-link' to='/'>Главная</NavLink>
          <NavLink className='nav-link' to='/blog/add'>Добавить пост</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;