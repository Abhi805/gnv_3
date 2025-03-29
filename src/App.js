import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
import Home from './pages/home/Home'
import Footer from './components/Footer/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme(); // Default theme

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <ThemeProvider theme={theme}>
      <CssBaseline />
      <Footer /> {/* Footer ya jo bhi MUI use karega */}
    </ThemeProvider>

      </Router>
    </div>
  );
}

export default App;
