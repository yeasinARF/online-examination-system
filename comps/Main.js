import { Card, Col, Container, Row } from "react-bootstrap";
import Content from "./Content";
import Footer from "./Footer";
import NavBar from "./NavBar";


const Main = ({ children }) => {
    return (
        <div>
            <NavBar></NavBar>
            <Content></Content>
            <Container>
                {children}
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;