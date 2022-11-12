import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Estilo - Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Components - Layout
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';
import Wrapper from './components/layouts/Wrapper';

//Components - Pages
import Form from './components/pages/Form';
import Card from './components/pages/Card';
import Pricing from './components/pages/Pricing';
import Home from './components/pages/Home';


export default function App() {
  return (
    <Router>
      <Wrapper>
        <Navbar/>
          <Routes>
            <Route path="/form" element={<Form />} />
            <Route path="/card" element={<Card />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/" element={<Home />} />
          </Routes>           
        <Footer />    
      </Wrapper>
    </Router>
  );
}

