import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import log from "../../assets/lms-logo-wide.png";
import { RiHome4Fill } from "react-icons/ri";
import { FaSignInAlt } from "react-icons/fa";
import { HiOutlineLogin } from "react-icons/hi";
import { AiFillDashboard } from "react-icons/ai";
import { IoLogOutSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { logOutApi } from "../../services/authAPI";
import { setUser } from "../../features/user/userSlice";
import { InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

export const Header = () => {
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  const handleOnLogout = () => {
    // call api to logout from backend
    logOutApi();

    //logout from frontend
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("refreshJWT");
    dispatch(setUser({}));
  };

  return (
    <Navbar expand="md" className="bg-dark" variant="dark">
      <Container>
        <Link to="/">
          <img src={log} width="100px" alt="log" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className=" w-100  d-flex justify-content-between flex-column flex-md-row ">
            <div> </div>
            <Form style={{ width: "40%" }}>
              <InputGroup className=" ">
                <Form.Control
                  placeholder="Search your book"
                  aria-label="Search your book"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">
                  <FaSearch />
                </InputGroup.Text>
              </InputGroup>
            </Form>

            <Nav className=" ">
              <Link className="nav-link" to="/">
                <RiHome4Fill /> Home
              </Link>
              {user?._id ? (
                <>
                  <Link className="nav-link" to="/user">
                    <AiFillDashboard /> Dashboard
                  </Link>
                  <Link className="nav-link" to="/" onClick={handleOnLogout}>
                    <IoLogOutSharp /> LogOut
                  </Link>
                </>
              ) : (
                <>
                  <Link className="nav-link" to="/signup">
                    <FaSignInAlt /> Sign Up
                  </Link>
                  <Link className="nav-link" to="/login">
                    <HiOutlineLogin /> LogIn
                  </Link>
                </>
              )}
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
