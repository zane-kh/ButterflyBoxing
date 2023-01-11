import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/userActions";
import SearchBox from "./SearchBox";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/home");
  };

  return (
    <header
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(1, 1fr)",
      }}
    >
      <Navbar
        style={{ background: "black", width: "100vw" }}
        variant="dark"
        expand="xl"
        collapseOnSelect
        className="py-1"
      >
        <Container>
          <Link to="/home" style={{ gridColumn: "1/2" }}>
            <Navbar.Brand
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textTransform: "capitalize",
                fontVariant: "small-caps",
                verticalAlign: "center",
              }}
            >
              {/* <span style={{ fontSize: "30px", marginLeft: "20px" }}>
                Butterfly Boxing
              </span> */}
              <span
                style={{
                  fontSize: "35px",
                  // marginLeft: "20px",
                }}
              >
                <span className="flipH">B</span>
              </span>
              <img
                alt=""
                src="logo_2.png"
                width="70"
                height="70"
                className="d-inline-block align-top"
              />
              <span
                style={{
                  fontSize: "35px",
                  // marginLeft: "20px",
                }}
              >
                <span className="flipH">B</span>
              </span>
            </Navbar.Brand>
          </Link>
          <SearchBox />

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" expand="xl">
            <Nav className="ms-auto" style={{ fontSize: "20px" }}>
              <Nav.Link as={Link} to="/cart" style={{ marginLeft: "20px" }}>
                <i className="fas fa-shopping-cart"></i> Cart
              </Nav.Link>
              {userInfo && !userInfo.isAdmin ? (
                <NavDropdown
                  title={userInfo.name}
                  id="username"
                  style={{ marginLeft: "40px" }}
                >
                  <Nav.Link>
                    <NavDropdown.Item as={Link} to="/profile">
                      Profile
                    </NavDropdown.Item>
                  </Nav.Link>

                  <Nav.Link>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </Nav.Link>
                </NavDropdown>
              ) : !userInfo ? (
                <Nav.Link as={Link} to="/login" style={{ marginLeft: "20px" }}>
                  <i className="fas fa-user"></i> Sign in
                </Nav.Link>
              ) : userInfo && userInfo.isAdmin ? (
                <NavDropdown
                  title="Admin"
                  id="adminmenu"
                  style={{ marginLeft: "20px" }}
                >
                  <Nav.Link>
                    <NavDropdown.Item as={Link} to="/admin/userList">
                      Users
                    </NavDropdown.Item>
                  </Nav.Link>
                  <Nav.Link>
                    <NavDropdown.Item as={Link} to="/admin/productList">
                      Products
                    </NavDropdown.Item>
                  </Nav.Link>
                  <Nav.Link>
                    <NavDropdown.Item as={Link} to="/admin/orderList">
                      Orders
                    </NavDropdown.Item>
                  </Nav.Link>
                  <Nav.Link>
                    <NavDropdown.Item as={Link} to="/profile">
                      Profile
                    </NavDropdown.Item>
                  </Nav.Link>

                  <Nav.Link>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </Nav.Link>
                </NavDropdown>
              ) : (
                <div></div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
