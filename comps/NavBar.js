import { Button, Container, Navbar } from "react-bootstrap";
import styles from '../styles/Home.module.css';
export default function NavBar() {
    return (
        <Navbar className={styles.navBar} expand="xs">
            <Container>
                <h4 href="#home" className='navbarTitle my-2 mx-auto'>DEMO ONLINE TEST</h4>
            </Container>
            
            
        </Navbar>
        
    );
}
