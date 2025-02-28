import './App.css';
import About from './pages/About';
import { HashRouter, Route, Routes } from "react-router-dom";
import Guests from './pages/Guests';
import Inventory from './pages/Inventory';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    },
});

function App() {

    return (
        <ThemeProvider theme={darkTheme}>
            <HashRouter>
                <nav>
                    <ul className="navbar-list">
                        <li><a href="/">About</a></li>
                        <li><a href="/#/inventory">Inventory</a></li>
                        <li><a href="/#/guests">Guests</a></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/guests" element={<Guests />} />
                </Routes>
            </HashRouter>
        </ThemeProvider>

    )
}

export default App
