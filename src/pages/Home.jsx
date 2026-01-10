import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SafetyCertificateOutlined, EyeOutlined, ThunderboltOutlined, HomeOutlined, RightOutlined, CheckCircleFilled, PhoneFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import image1 from "../assets/fire.jpg";
import image2 from "../assets/energie.jpeg";
import heroBg from "../assets/image.jpeg";


// Helper to get assets
const assetImages = import.meta.glob('../assets/*.{png,jpg,jpeg,svg}', { eager: true });
const assetList = Object.values(assetImages).map(img => img.default);

const FadeInSection = ({ children, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay }}
        >
            {children}
        </motion.div>
    );
};

const SectionHeader = ({ title, subtitle, light = false }) => (
    <div className={`mb-16 md:mb-24 max-w-4xl ${light ? 'text-white' : 'text-secondary'}`}>
        <motion.div 
            initial={{ width: 0 }} 
            whileInView={{ width: 100 }} 
            className="h-1 bg-primary mb-6"
        ></motion.div>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{title}</h2>
        <p className={`text-xl md:text-2xl leading-relaxed ${light ? 'text-gray-300' : 'text-gray-500'}`}>{subtitle}</p>
    </div>
);

const Home = () => {
    const { scrollY } = useScroll();
    const heroFilter = useTransform(scrollY, [0, 600], ["brightness(0.6)", "brightness(0.2)"]);
    const heroParallax = useTransform(scrollY, [0, 600], [0, 300]);

    return (
        <div className="overflow-hidden bg-white">
            {/* --- HERO SECTION --- */}
            <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
                <motion.div 
                    style={{ y: heroParallax, filter: heroFilter, backgroundImage: `url(${heroBg})` }}
                    className="absolute inset-0 bg-cover bg-center z-0"
                ></motion.div>  
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent z-10"></div>
                
                <div className="container mx-auto px-6 md:px-16 relative z-20 pt-20">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/50 rounded-full bg-black/40 backdrop-blur-md text-primary font-bold tracking-wider text-sm mb-8">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            CERTIFIÉ DAHUA 2023 - EXPERT SÉCURITÉ
                        </div>
                        <h1 className="text-6xl md:text-8xl font-bold text-white leading-[1.1] mb-8">
                            Votre Sécurité,<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Notre Priorité.</span>
                        </h1>
                        <p className="text-2xl text-gray-300 mb-10 max-w-2xl font-light">
                            Spécialiste en **Sécurité Électronique**, **Motorisation de Portails**, **Énergie Solaire** et **Menuiserie Métallique**.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <a href="https://wa.me/237694852384" target="_blank" rel="noopener noreferrer">
                                <Button type="primary" size="large" className="h-16 px-10 text-xl font-bold bg-primary hover:bg-primary-dark border-none rounded-full shadow-[0_10px_30px_rgba(249,115,22,0.4)] flex items-center gap-3">
                                    <PhoneFilled /> Devis Rapide
                                </Button>
                            </a>
                            <Button size="large" ghost className="h-16 px-10 text-xl font-bold text-white border-white/30 hover:bg-white/10 hover:border-white rounded-full">
                                Découvrir nos réalisations
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- 1. CCTV & ACCESS CONTROL (Tech/Clean Theme) --- */}
            <section className="py-32 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-6 md:px-16">
                     <FadeInSection>
                        <SectionHeader 
                            title="Vidéosurveillance & Contrôle d'Accès" 
                            subtitle="Gardez un œil sur ce qui compte vraiment. Technologie Haute Définition."
                        />
                    </FadeInSection>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 space-y-8">
                            <FadeInSection delay={0.1}>
                                <div className="bg-white p-8 rounded-3xl shadow-xl border-l-4 border-primary hover:shadow-2xl transition-all">
                                    <h3 className="text-3xl font-bold text-secondary mb-4 flex items-center gap-3">
                                        <EyeOutlined className="text-primary"/> Vision Nocturne & IP
                                    </h3>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                        Ne laissez aucune zone d'ombre. Nos caméras <strong>DAHUA 4K</strong> offrent une vision cristalline, même dans le noir complet.
                                        Consultez vos caméras en temps réel depuis votre smartphone, où que vous soyez dans le monde.
                                    </p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-500 font-medium">
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full"></div> Détection Humaine IA</li>
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full"></div> Enregistrement 24/7</li>
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full"></div> Zoom Optique x25</li>
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full"></div> Audio Bidirectionnel</li>
                                    </ul>
                                </div>
                            </FadeInSection>

                            <FadeInSection delay={0.2}>
                                <div className="bg-white p-8 rounded-3xl shadow-xl border-l-4 border-secondary hover:shadow-2xl transition-all">
                                    <h3 className="text-3xl font-bold text-secondary mb-4">Biométrie & Accès</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        Contrôlez qui entre et qui sort. Solutions de pointage biométrique, cartes RFID et serrures magnétiques inviolables pour bureaux et zones sensibles.
                                    </p>
                                </div>
                            </FadeInSection>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <FadeInSection delay={0.3}>
                                <div className="relative z-10">
                                    <img src="/cctv_pro_lens.png" className="w-full rounded-2xl shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-700 border-4 border-white" alt="Caméra High Tech" />
                                    {/* <img src="/monitoring_room.png" className="absolute -bottom-12 -left-12 w-2/3 rounded-xl shadow-2xl border-4 border-white hidden md:block" alt="Salle de contrôle" /> */}
                                </div>
                                <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
                            </FadeInSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 2. FIRE SAFETY (Dramatic/Dark Immersive Theme) --- */}
            <section className="relative py-32 bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/fire_alarm_cinematic.png')] bg-cover bg-center opacity-20 fixed-bg"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-red-950 via-gray-900 to-gray-900/80"></div>

                <div className="container mx-auto px-6 md:px-16 relative z-10">
                    <FadeInSection>
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="inline-block py-1 px-3 rounded-md bg-red-600/20 text-red-500 border border-red-500/30 font-bold tracking-widest uppercase mb-6">
                                    Zéro Tolérance
                                </span>
                                <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                                    SÉCURITÉ <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">INCENDIE</span>
                                </h2>
                                <p className="text-2xl text-gray-300 mb-10 leading-relaxed font-light">
                                    Le feu ne prévient pas. <span className="text-white font-bold">Nous si.</span><br/>
                                    Protégez vos vies et votre patrimoine avec nos systèmes de détection précoce et d'extinction automatique.
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                     <div className="p-6 rounded-2xl bg-white/5 border border-red-500/20 hover:bg-red-500/10 transition-colors group">
                                         <SafetyCertificateOutlined className="text-4xl text-red-500 mb-4 group-hover:scale-110 transition-transform"/>
                                         <h4 className="text-xl font-bold mb-2">Détection Précoce</h4>
                                         <p className="text-gray-400 text-sm">Capteurs de fumée et de chaleur ultra-sensibles connectés à une centrale intelligente.</p>
                                     </div>
                                     <div className="p-6 rounded-2xl bg-white/5 border border-red-500/20 hover:bg-red-500/10 transition-colors group">
                                         <ThunderboltOutlined className="text-4xl text-red-500 mb-4 group-hover:scale-110 transition-transform"/>
                                         <h4 className="text-xl font-bold mb-2">Extinction Rapide</h4>
                                         <p className="text-gray-400 text-sm">Extincteurs CO2, Poudre et Eau pulvérisée. Installation et maintenance réglementaire.</p>
                                     </div>
                                </div>

                                <Button type="primary" size="large" className="h-16 px-10 bg-red-600 hover:bg-red-500 border-none rounded-full shadow-lg shadow-red-900/50 text-lg font-bold">
                                    Audit de Sécurité Gratuit
                                </Button>
                            </div>

                            <div className="relative mt-12 lg:mt-0 hover:scale-[1.02] transition-transform duration-500">
                                <div className="absolute inset-0 bg-red-600/20 blur-[100px] rounded-full"></div>
                                <img src={image1} className="relative w-full rounded-2xl shadow-2xl border border-white/10 transform rotate-2 hover:rotate-0 transition-all duration-700 grayscale-[20%] hover:grayscale-0" alt="Extincteur Art" />
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </section>

            {/* --- 2. MOTORISATION (Dark Theme) --- */}
            <section className="py-32 bg-secondary text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]"></div>
                <div className="container mx-auto px-6 md:px-16 relative z-10">
                    <FadeInSection>
                        <SectionHeader 
                            light 
                            title="Motorisation de Portails" 
                            subtitle='"Arrêtez de pousser votre portail - Facilitez-vous la vie"'
                        />
                    </FadeInSection>

                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                             <img src="/gate_automation.png" alt="Gate Automation" className="w-full rounded-3xl shadow-2xl shadow-primary/20 mb-8 transform hover:scale-[1.02] transition-transform duration-500" />
                             <div className="grid grid-cols-2 gap-4">
                                {assetList.slice(4, 6).map((src, i) => (
                                    <img key={i} src={src} className="w-full h-40 object-cover rounded-xl opacity-70 hover:opacity-100 transition-opacity" alt="Gate Asset" />
                                ))}
                             </div>
                        </div>

                        <div>
                            <FadeInSection>
                                <h3 className="text-3xl font-bold text-primary mb-6">Moteurs Coulissants & Battants</h3>
                                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                    Plus besoin de sortir sous la pluie ou de klaxonner. Rentrez chez vous en silence et en sécurité.
                                    Nous installons des moteurs <strong>performants et robustes</strong> adaptés au poids de votre portail.
                                </p>

                                <div className="space-y-6">
                                    <div className="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-md hover:bg-white/15 transition-colors">
                                        <h4 className="text-xl font-bold mb-2 text-white">Portails Coulissants</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {[800, 1000, 1200, 2000, 5000].map(w => (
                                                <span key={w} className="px-3 py-1 bg-primary text-white text-sm font-bold rounded-md shadow-sm">{w} kg</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-md hover:bg-white/15 transition-colors">
                                        <h4 className="text-xl font-bold mb-2 text-white">Portails Double Battant</h4>
                                        <p className="text-gray-300">Gamme puissante de <strong>150kg à 1000kg</strong> par ventail.</p>
                                    </div>
                                    <div className="pl-4 border-l-4 border-primary">
                                        <p className="text-gray-400 italic text-sm">
                                            Aussi disponible : Moteurs pour grille métallique, volets roulants, barrières levantes automatiques et bornes escamotables.
                                        </p>
                                    </div>
                                </div>
                            </FadeInSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 3. ÉNERGIE & MENUISERIE (Premium Block) --- */}
            <section className="py-0">
                {/* Énergie Solaire Block */}
                <div className="relative py-32 bg-gray-900 text-white overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/solar_panels.png')] bg-cover bg-center opacity-30 fixed-bg"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent"></div>
                    
                    <div className="container mx-auto px-6 md:px-16 relative z-10">
                        <FadeInSection>
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                <div>
                                    <span className="text-green-400 font-bold tracking-widest uppercase mb-4 block">Énergie Renouvelable</span>
                                    <SectionHeader 
                                        light 
                                        title={<span className="text-white">Énergie Solaire & Autonomie</span>}
                                        subtitle="Ne soyez plus dépendant des coupures. Produisez votre propre électricité."
                                    />
                                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                        Nous installons des systèmes complets de panneaux solaires pour une <strong>alimentation électrique autonome</strong>. 
                                        Que ce soit pour réduire votre facture ou garantir la continuité de service de vos équipements sensibles, le solaire est la solution d'avenir.
                                    </p>
                                    <ul className="space-y-4 mb-10 text-gray-300">
                                        <li className="flex items-center gap-3"><ThunderboltOutlined className="text-yellow-400 text-xl"/> Autonomie énergétique totale</li>
                                        <li className="flex items-center gap-3"><ThunderboltOutlined className="text-yellow-400 text-xl"/> Installation sur toiture ou au sol</li>
                                        <li className="flex items-center gap-3"><ThunderboltOutlined className="text-yellow-400 text-xl"/> Batteries de stockage haute capacité</li>
                                    </ul>
                                    <Button size="large" type="primary" className="bg-green-600 hover:bg-green-500 border-none h-14 px-8 rounded-full text-lg shadow-lg shadow-green-900/50">
                                        Étude solaire gratuite
                                    </Button>
                                </div>
                                <div className="relative mt-12 lg:mt-0 hover:scale-[1.02] transition-transform duration-500">
                                    <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full"></div>
                                    <img src={image2} className="relative w-full rounded-2xl shadow-2xl border border-white/10 transform rotate-1 hover:rotate-0 transition-all duration-500" alt="Solar Panels" />
                                </div>
                            </div>
                        </FadeInSection>
                    </div>
                </div>

                {/* Menuiserie Block - Premium Dark Theme like Solar */}
                <div className="relative py-32 bg-secondary text-white overflow-hidden mt-1">
                    <div className="absolute inset-0 bg-[url('/modern_aluminium_window.png')] bg-cover bg-center opacity-20 fixed-bg"></div>
                    <div className="absolute inset-0 bg-gradient-to-l from-gray-900 via-gray-900/90 to-transparent"></div>

                    <div className="container mx-auto px-6 md:px-16 relative z-10">
                        <FadeInSection>
                            <div className="grid lg:grid-cols-2 gap-16 items-center flex-row-reverse">
                                 {/* Image Side */}
                                <div className="relative order-1 lg:order-2 mb-12 lg:mb-0 hover:scale-[1.02] transition-transform duration-500">
                                    <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                                    <img src="/iron_gate_ornate.png" className="relative w-full rounded-2xl shadow-2xl border border-white/10 transform -rotate-1 hover:rotate-0 transition-all duration-500" alt="Iron Gate" />
                                </div>

                                {/* Content Side */}
                                <div className="order-2 lg:order-1">
                                    <span className="text-orange-500 font-bold tracking-widest uppercase mb-4 block">Artisanat & Robustesse</span>
                                    <SectionHeader 
                                        light 
                                        title={<span className="text-white">Menuiserie Métallique & Aluminium</span>}
                                        subtitle="L'alliage parfait entre esthétique moderne et sécurité renforcée."
                                    />
                                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                        Nos artisans réalisent vos projets sur mesure avec une précision industrielle. Que ce soit pour le design épuré de l'aluminium ou l'élégance intemporelle du fer forgé, nous garantissons des finitions impeccables.
                                    </p>
                                    
                                    <div className="space-y-8 mb-10">
                                        <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                            <div className="text-3xl">🪟</div>
                                            <div>
                                                <h4 className="text-xl font-bold mb-2 text-white">Travaux en Aluminium</h4>
                                                <p className="text-gray-400">Portes, fenêtres, baies vitrées (simple/double vitrage), Mur rideau, Alucobond et faux plafonds PVC.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                            <div className="text-3xl">⚒️</div>
                                            <div>
                                                <h4 className="text-xl font-bold mb-2 text-white">Métallerie & Acier</h4>
                                                <p className="text-gray-400">Fabrication et pose de portails, barrières, grilles de protection (antivol), clôtures et rampes d'escaliers.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <Button size="large" type="primary" className="bg-orange-600 hover:bg-orange-500 border-none h-14 px-8 rounded-full text-lg shadow-lg shadow-orange-900/50">
                                        Voir nos modèles
                                    </Button>
                                </div>
                            </div>
                        </FadeInSection>
                    </div>
                </div>
            </section>

             {/* --- 4. EXPERTISE & PARTNERS --- */}
             <section className="py-24 bg-gray-900 text-white text-center">
                 <div className="container mx-auto px-6">
                     <h2 className="text-3xl font-bold mb-12">Nos Partenaires de Confiance</h2>
                     <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70">
                        {['DAHUA', 'HIKVISION', 'JUJIANG', 'SOMFY', 'ZKTECO'].map(p => (
                            <span key={p} className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 uppercase tracking-tighter">
                                {p}
                            </span>
                        ))}
                     </div>
                 </div>
             </section>

             {/* --- 5. GALLERY GRID (FULL) --- */}
             <section className="py-32 bg-gray-50">
                 <div className="container mx-auto px-6 md:px-16">
                    <SectionHeader title="Nos Dernières Réalisations" subtitle="Découvrez la qualité de nos installations en images." />
                    
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {assetList.map((src, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="break-inside-avoid"
                            >
                                <img src={src} className="w-full rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300" alt={`Réalisation ${i}`} />
                            </motion.div>
                        ))}
                    </div>
                 </div>
             </section>

             {/* --- 6. CTA FINAL --- */}
             <section className="py-32 bg-primary text-white text-left md:text-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                 <div className="container mx-auto px-6 relative z-10">
                     <h2 className="text-4xl md:text-7xl font-bold mb-8">Un projet en tête ?</h2>
                     <p className="text-2xl opacity-90 mb-12 max-w-2xl mx-auto">"Confiez nous votre sécurité électrique et dormez tranquille !"</p>
                     
                     <div className="flex flex-col md:flex-row justify-center gap-6">
                         <Button size="large" className="h-20 px-12 text-2xl font-bold text-primary bg-white border-none rounded-full shadow-xl">
                            <Link to="/contact">CONTACTEZ-NOUS</Link>
                         </Button>
                         <div className="flex items-center justify-center gap-4 text-xl font-semibold bg-black/20 rounded-full px-8 py-4 backdrop-blur-sm">
                             <PhoneFilled /> (+237) 694 852 384
                         </div>
                     </div>
                 </div>
             </section>
        </div>
    );
};

export default Home;
