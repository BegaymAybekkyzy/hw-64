import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="mb-5">
      <Container>
        <NavLink className="navbar-brand fs-2" to="/">
          Мой блог
        </NavLink>
        <Nav className="ms-auto">
          <NavLink className="nav-link" to="/">
            Главная
          </NavLink>
          <NavLink className="nav-link" to="/blog/new-post">
            Добавить пост
          </NavLink>
          <NavLink className="nav-link" to="/about">
            О нас
          </NavLink>
          <NavLink className="nav-link" to="/contacts">
            Контакты
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
