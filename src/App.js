import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
import Home from './pages/home/Home'
import Footer from './components/Footer/Footer';




function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        
      <Footer /> {/* Footer ya jo bhi MUI use karega */}
 

      </Router>
    </div>
  );
}

export default App;
