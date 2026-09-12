import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import CompaniesPage from './pages/CompaniesPage';
import ServicePage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SpecialtiesPage from './pages/SpecialtiesPage';
import PlansPage from './pages/PlansPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/specialties" element={<SpecialtiesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
