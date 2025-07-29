// src/App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

// Pages
import Home from './components/home.jsx';
import Projects from './components/projects.jsx';
import About from './components/about.jsx';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/projects" element={<Projects />} />
         <Route path="/about" element={<About />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
