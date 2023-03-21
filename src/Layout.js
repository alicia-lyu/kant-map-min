import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import "./layout.css";

function Layout() {
    return (
        <div id="wrap">
            <Nav variant="tabs" className="d-flex justify-content-center">
                <Nav.Item>
                    <Nav.Link eventKey="/" as={Link} to="/">KANT MAP</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="terms" as={Link} to="/terms">TERMINOLOGY</Nav.Link>
                </Nav.Item>
            </Nav>
            <Outlet />
        </div>
    )


}

export default Layout;