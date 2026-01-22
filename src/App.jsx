import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Mail, Phone, AlertTriangle } from 'lucide-react';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './App.css';

// Fonction pour activer/désactiver le mode maintenance
const MAINTENANCE_MODE = true; // Changez à false pour réactiver le site

// Composant de page de maintenance
const MaintenancePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-2xl w-full">
        {/* Icône de maintenance */}
        <div className="flex justify-center mb-6">
          <div className="bg-yellow-100 rounded-full p-6">
            <AlertTriangle className="w-16 h-16 text-yellow-600" />
          </div>
        </div>
        
        {/* Titre */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
          Site en indisponible
        </h1>
        
        {/* Message */}
        <p className="text-gray-600 text-center mb-8 text-lg leading-relaxed">
          Ce site est actuellement indisponible pour les raisons liées l'hébergement.
          Veuillez contacter l'administrateur pour plus d'informations concernant son hébergement.
        </p>
        
        {/* Section contact */}
        <div className="bg-gray-50 rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">
            Contacter l'Administrateur
          </h2>
          
          {/* Email */}
          <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
            <div className="bg-blue-100 rounded-full p-3">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
            <div className="bg-blue-100 rounded-full p-3">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-500 font-medium">Email</p>
              <a 
                href="mailto:ansevernel@gmail.com"
                className="text-blue-600 hover:text-blue-700 font-medium hover:underline break-all"
              >
                ansevernel@gmail.com
              </a>
            </div>
          </div>
          </div>
          
          {/* Téléphone */}
          <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-green-300 transition-colors">
            <div className="bg-green-100 rounded-full p-3">
              <Phone className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500 font-medium">Téléphone</p>
              <a 
                href="tel:+237695683485"
                className="text-green-600 hover:text-green-700 font-medium hover:underline"
              >
                +237 695 683 485
              </a>
            </div>
          </div>
        </div>
        
        {/* Message de pied */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Merci de votre patience et compréhension
        </p>
      </div>
    </div>
  );
};

function App() {
  // Si le mode maintenance est activé, afficher uniquement la page de maintenance
  if (MAINTENANCE_MODE) {
    return <MaintenancePage />;
  }

  // Sinon, afficher le site normalement
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;