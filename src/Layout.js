import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./layout.css";

function Layout() {
    const location = useLocation();
    return (
        <div id="wrap">
            <Navbar expand="lg" sticky="top">
                <Nav defaultActiveKey={location.pathname}>
                    <Nav.Link eventKey="/" as={Link} to="/">KANT MAP</Nav.Link>
                    <Nav.Link eventKey="terms" as={Link} to="/terms">TERMINOLOGY</Nav.Link>
                </Nav>
            </Navbar>
            <Outlet />
        </div>
    )


}

export default Layout;