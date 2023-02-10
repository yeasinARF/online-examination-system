import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import '../styles/globals.css';

import { useEffect } from 'react';
import Main from '../comps/Main';


function MyApp({ Component, pageProps }) {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap');
    }, []);

    return (
        <Main>
            <Component {...pageProps} />
        </Main>
    );
}

export default MyApp;
