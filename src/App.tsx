import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Careers from './components/Careers';
import Courses from './components/Courses';
import Products from './components/Products';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Quote from './components/Quote';
import Footer from './components/Footer';
import TalkToExpert from './pages/TalkToExpert';
import WebDevelopment from './pages/WebDevelopment';
import MobileDevelopment from './pages/MobileApps';
import CloudSolutions from './pages/CloudSolutions';
import DataAnalytics from './pages/DataAnalytics';
import AIAutomation from './pages/AIAutomation';
import Cybersecurity from './pages/Cybersecurity';


// Home Page Component
function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Courses />
      <Products />
      <Portfolio />
      <Contact />
      <Quote />
    </>
  );
}

// Careers Page Component
function CareersPage() {
  return (
    <>
      <div className="pt-20"> {/* Add padding for fixed header */}
        <Careers />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/talk-to-expert" element={<TalkToExpert />} />
          <Route path="/web-development" element={<WebDevelopment />}  />
          <Route path="/mobile-development" element={<MobileDevelopment />}  />
          <Route path="/cloud-Solutions" element={<CloudSolutions />}  />
          <Route path="/ai-automation" element={<AIAutomation />}  />
          <Route path="/cyber-security" element={<Cybersecurity />}  />
          <Route path="/data-analytics" element={<DataAnalytics />}  />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;