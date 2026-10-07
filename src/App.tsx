import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import DrGeorge from './pages/DrGeorge';
import KingdomBuilders from './pages/KingdomBuilders';
import TheKingdomMethod from './pages/TheKingdomMethod';
import Unirse from './pages/Unirse';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/"                  element={<Inicio />} />
          <Route path="/dr-george"         element={<DrGeorge />} />
          <Route path="/metodo-faos"       element={<TheKingdomMethod />} />
          <Route path="/kingdom-builders"  element={<KingdomBuilders />} />
          <Route path="/unirse"            element={<Unirse />} />

          {/* Legacy redirect */}
          <Route path="/the-kingdom-method" element={<TheKingdomMethod />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
