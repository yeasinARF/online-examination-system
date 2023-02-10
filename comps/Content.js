import { Button, Container } from "react-bootstrap";
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

export default function Content() {
    const router = useRouter()
    const style = {
        backgroundColor: router.asPath === '/' ? 'rgb(19, 19, 127)' : 'rgb(8, 117, 207)',
    }
    return (
        <Container fluid>
            <Container className={styles.allSection}>
                <Button type="button" className={styles.buttonAll} style={style} onClick={() => router.push('/')}>
                    All Sections
                </Button>
                <Button type="button" className={styles.buttonAll} style={{ backgroundColor: router.asPath === '/physics' ? 'rgb(19, 19, 127)' : 'rgb(8, 117, 207)' }} onClick={() => router.push('/physics')}>
                    PHYSICS
                </Button>
                <Button type="button" className={styles.buttonAll} style={{ backgroundColor: router.asPath === '/chemistry' ? 'rgb(19, 19, 127)' : 'rgb(8, 117, 207)' }} onClick={() => router.push('/chemistry')}>
                    CHEMISTRY
                </Button>
                <Button type="button" className={styles.buttonAll} style={{ backgroundColor: router.asPath === '/maths' ? 'rgb(19, 19, 127)' : 'rgb(8, 117, 207)' }} onClick={() => router.push('/maths')}>
                    MATHS
                </Button>
            </Container>

        </Container>
    );
}
