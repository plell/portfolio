

import Menu from './menu'
import Experience from './experience'
import { BrowserRouter } from 'react-router-dom';

export default function App() {
    return <BrowserRouter>
            <>
                <Menu />
                <Experience />
            </>
            </BrowserRouter>
        
}
    
