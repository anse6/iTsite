import React from 'react';
import { motion } from 'framer-motion';
import { 
  CameraOutlined, 
  LockOutlined, 
  ThunderboltOutlined, 
  ToolOutlined, 
  GlobalOutlined, 
  HomeOutlined
} from '@ant-design/icons';

const ServiceSection = ({ title, description, details, icon, image, imagePosition = 'right' }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col-reverse ${imagePosition === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 py-20 overflow-hidden`}
    >
      <div className="flex-1 space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-primary/10 rounded-2xl text-primary text-3xl">
            {icon}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          {description}
        </p>
        <ul className="space-y-4">
          {details.map((item, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="flex items-start gap-3 text-gray-700"
            >
              <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span className="text-lg">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 w-full"
      >
        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500 z-10" />
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 h-full" 
            />
        </div>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
    return (
        <div className="min-h-screen bg-white">
             {/* Hero Section */}
            <div className="relative bg-black text-white py-32 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                   <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Technology Background" />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
                    >
                        Nos Expertises
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Des solutions technologiques de pointe pour sécuriser, automatiser et optimiser votre environnement.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 py-12">
                {/* Vidéosurveillance */}
                <ServiceSection 
                    title="Vidéosurveillance Intelligente"
                    description="Protégez ce qui compte le plus avec nos systèmes de vidéosurveillance de dernière génération. Une surveillance proactive 24/7 pour une tranquillité d'esprit totale."
                    icon={<CameraOutlined />}
                    image="/cctv_security.png"
                    imagePosition="right"
                    details={[
                        "Caméras 4K Ultra HD avec vision nocturne couleur",
                        "Détection d'intrusion par Intelligence Artificielle (Humains/Véhicules)",
                        "Accès et alertes en temps réel sur Smartphone (iOS & Android)",
                        "Reconnaissance faciale et lecture de plaques d'immatriculation"
                    ]}
                />

                {/* Motorisation */}
                <ServiceSection 
                    title="Motorisation & Automatisme"
                    description="Oubliez les contraintes manuelles. Nos systèmes de motorisation allient confort, robustesse et sécurité pour tous vos accès."
                    icon={<ToolOutlined />}
                    image="/gate_automation.png"
                    imagePosition="left"
                    details={[
                        "Motorisation pour portails coulissants (jusqu'à 5000kg)",
                        "Motorisation pour portails battants (Hydraulique & Électromécanique)",
                        "Barrières levantes automatiques pour parking",
                        "Contrôle total via télécommande ou smartphone"
                    ]}
                />

                {/* Énergie Solaire */}
                <ServiceSection 
                    title="Énergie Solaire & Autonomie"
                    description="Passez à l'énergie verte et réduisez vos factures. Nos installations solaires vous garantissent une autonomie énergétique durable."
                    icon={<ThunderboltOutlined />}
                    image="/solar_panels.png"
                    imagePosition="right"
                    details={[
                        "Panneaux photovoltaïques monocristallins haut rendement",
                        "Onduleurs hybrides intelligents",
                        "Batteries Lithium/Gel pour stockage d'énergie",
                        "Retour sur investissement rapide et indépendance énergétique"
                    ]}
                />

                {/* Menuiserie */}
                <ServiceSection 
                    title="Menuiserie Aluminium & Métallique"
                    description="L'alliance parfaite entre esthétique moderne et robustesse. Nous façonnons le métal pour sublimer votre architecture."
                    icon={<HomeOutlined />}
                    image="/modern_aluminium_window.png" 
                    imagePosition="left"
                    details={[
                        "Fenêtres et baies vitrées aluminium double vitrage",
                        "Murs rideaux et façades en Alucobond",
                        "Garde-corps en Inox et verre trempé",
                        "Grilles de sécurité et portails en fer forgé sur mesure"
                    ]}
                />

                {/* Réseau */}
                 <ServiceSection 
                    title="Réseau & Contrôle d'Accès"
                    description="Une infrastructure connectée et sécurisée. Nous déployons des réseaux fiables et des contrôles d'accès stricts pour vos locaux."
                    icon={<GlobalOutlined />}
                    image="/monitoring_room.png"
                    imagePosition="right"
                    details={[
                        "Câblage structuré informatique et téléphonique",
                        "Points d'accès WiFi longue portée et ponts réseaux",
                        "Contrôle d'accès biométrique et RFID",
                        "Serrures connectées pour hôtels et bureaux"
                    ]}
                />
            </div>

            {/* CTA Section */}
            <div className="bg-gray-900 text-white py-20">
                 <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Un projet en tête ?</h2>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">Contactez nos experts pour une étude gratuite et personnalisée de vos besoins.</p>
                    <button className="cursor-pointer bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg">
                        Demander un Devis Gratuit
                    </button>
                 </div>
            </div>
        </div>
    );
};

export default Services;
