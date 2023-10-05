import {useContext} from "react";
import {UserContext} from "../context/userDetails";
import {Container, Navbar} from "react-bootstrap";


const NavPanel = () => {
    const {user} = useContext(UserContext)
    return (
        <Navbar className="shadow">
            <Container>
                <Navbar.Brand href="/">useContext</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="/login"><span className="text-uppercase"> {user?.username}</span></a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
export default NavPanel