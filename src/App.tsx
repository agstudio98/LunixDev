import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/home';
import { Discussions } from './pages/Discussions';
import { Downloads } from './pages/Download';
import './App.css';

export function App() {
  return (
    <Router basename="/LunixDev">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discussions" element={<Discussions />} />
          <Route path="/downloads" element={<Downloads />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
