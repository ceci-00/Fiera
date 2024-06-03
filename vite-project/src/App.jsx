import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Layout from './components/Layout';
// import ErrorPage from './pages/ErrorPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import ResumePage from './pages/ResumePage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path ="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App
