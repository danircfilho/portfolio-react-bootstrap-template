import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

//Estilo - Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Components - Layout
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';
import Wrapper from './components/layouts/Wrapper';

//Components - Pages
import Home from './components/pages/Home';
import Card from './components/pages/Card';
import Form from './components/pages/Form';


export default function App() {
  return (
    <Router>
      <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/card" element={<Card />} />
            <Route path="/form" element={<Form />} />
            <Route path="/" element={<Home />} />
          </Routes>           
        </Wrapper>
      <Footer />    
    </Router>
  );
}

