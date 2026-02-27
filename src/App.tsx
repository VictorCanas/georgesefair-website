import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import DrGeorge from './pages/DrGeorge';
import KingdomBuilders from './pages/KingdomBuilders';
import Eventos from './pages/Eventos';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/dr-george" element={<DrGeorge />} />
          <Route path="/kingdom-builders" element={<KingdomBuilders />} />
          <Route path="/eventos" element={<Eventos />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
