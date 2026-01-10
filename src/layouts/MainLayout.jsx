import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button, Drawer } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { MenuOutlined, PhoneOutlined, MailOutlined, EnvironmentOutlined, FacebookFilled, InstagramFilled } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const menuItems = [
        { key: '/', label: <Link to="/">ACCEUIL</Link> },
        { key: '/services', label: <Link to="/services">NOS SERVICES</Link> },
        { key: '/contact', label: <Link to="/contact">CONTACT</Link> },
    ];

    return (
        <Layout className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <header 
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
                    scrolled 
                    ? 'h-20 bg-white/80 backdrop-blur-md border-gray-200 shadow-sm' 
                    : 'h-24 bg-transparent border-transparent'
                }`}
            >
                <div className="container mx-auto px-6 h-full flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className={`relative w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl transition-all duration-500 overflow-hidden ${
                            scrolled ? 'bg-primary shadow-primary/30' : 'bg-white/20 backdrop-blur-sm shadow-black/10'
                        }`}>
                            <div className={`absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                            <span className="relative z-10">IT</span>
                        </div>
                        <div className="leading-tight">
                            <h1 className={`font-bold m-0 text-xl tracking-tight transition-colors duration-300 ${
                                scrolled ? 'text-gray-900' : 'text-white'
                            }`}>
                                IT & Automation
                            </h1>
                            <p className={`text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${
                                scrolled ? 'text-primary' : 'text-white/80'
                            }`}>
                                Services SARL
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8 bg-white/5 backdrop-blur-sm px-8 py-3 rounded-full border border-white/10">
                        {menuItems.map((item) => (
                            <Link 
                                key={item.key} 
                                to={item.key}
                                className={`text-sm font-bold tracking-wider hover:text-primary transition-colors duration-300 relative group px-2 py-1 ${
                                   location.pathname === item.key 
                                    ? (scrolled ? 'text-primary' : 'text-white') 
                                    : (scrolled ? 'text-gray-600' : 'text-white/90')
                                }`}
                            >
                                {item.label.props.children}
                                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                                    location.pathname === item.key ? 'scale-x-100' : ''
                                }`} />
                            </Link>
                        ))}
                    </nav>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <a href="https://wa.me/237694852384" target="_blank" rel="noopener noreferrer" className="hidden md:block">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-primary text-white font-bold px-8 py-3 rounded-full shadow-lg shadow-primary/30 hover:bg-primary-dark transition-colors"
                            >
                                Devis Gratuit
                            </motion.button>
                        </a>
                        
                        <button 
                            className={`md:hidden text-2xl transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <MenuOutlined />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Drawer */}
            <Drawer
                title={<span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">MENU</span>}
                placement="right"
                onClose={() => setMobileMenuOpen(false)}
                open={mobileMenuOpen}
                width={300}
                classNames={{ body: 'p-0' }} // Updated for AntD v5+ if needed, or use className for body
                className="backdrop-blur-xl bg-white/90"
            >
                <div className="flex flex-col h-full bg-white/50 p-6">
                    <div className="flex flex-col gap-6 mt-8">
                        {menuItems.map((item) => (
                            <Link 
                                key={item.key}
                                to={item.key}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-xl font-bold p-4 rounded-xl transition-all duration-300 ${
                                    location.pathname === item.key 
                                    ? 'bg-primary/10 text-primary translate-x-2' 
                                    : 'text-gray-600 hover:bg-gray-50 hover:pl-6'
                                }`}
                            >
                                {item.label.props.children}
                            </Link>
                        ))}
                    </div>
                    
                    <div className="mt-auto mb-8">
                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                             <h4 className="font-bold text-gray-900 mb-2">Besoin d'aide ?</h4>
                             <p className="text-sm text-gray-500 mb-4">Nos experts sont disponibles 24/7 pour vous répondre.</p>
                             <a href="https://wa.me/237694852384" target="_blank" rel="noopener noreferrer">
                                <Button type="primary" size="large" block className="bg-primary border-none shadow-lg h-12 font-bold rounded-xl">
                                    <PhoneOutlined className="mr-2" /> Contacter
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </Drawer>

            <Content className="pt-0 min-h-screen flex flex-col">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex-grow w-full"
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </Content>

            <Footer className="bg-secondary text-white py-16">
                 <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/40">IT</div>
                                <span className="text-2xl font-bold tracking-tight">IT & Auto.</span>
                            </div>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Votre partenaire de confiance pour la sécurité électronique, l'automatisme et l'énergie solaire au Cameroun.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-6 text-white inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary after:rounded-full">Contact</h3>
                            <ul className="space-y-4 text-gray-400 text-sm">
                                <li className="flex items-start gap-3">
                                    <EnvironmentOutlined className="text-primary mt-1" />
                                    <span>Yaoundé, Cameroun<br/>Derrière Dovv Ngousso</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <PhoneOutlined className="text-primary" />
                                    <span>(+237) 694 852 384</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <MailOutlined className="text-primary" />
                                    <span>contact@it-automation.cm</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-6 text-white inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary after:rounded-full">Liens Rapides</h3>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li><Link to="/" className="hover:text-primary transition-colors hover:pl-2 duration-300 block">Accueil</Link></li>
                                <li><Link to="/services" className="hover:text-primary transition-colors hover:pl-2 duration-300 block">Nos Services</Link></li>
                                <li><Link to="/contact" className="hover:text-primary transition-colors hover:pl-2 duration-300 block">Contactez-nous</Link></li>
                                <li><a href="#" className="hover:text-primary transition-colors hover:pl-2 duration-300 block">Demander un Devis</a></li>
                            </ul>
                        </div>

                        <div>
                             <h3 className="text-lg font-bold mb-6 text-white inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary after:rounded-full">Suivez-nous</h3>
                             <div className="flex gap-4">
                                <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 text-white shadow-lg">
                                    <FacebookFilled className="text-xl" />
                                </a>
                                <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 text-white shadow-lg">
                                    <InstagramFilled className="text-xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/5 bg-black/20 py-8">
                    <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
                        © {new Date().getFullYear()} IT & Automation Services SARL. Tous droits réservés.
                    </div>
                </div>
            </Footer>
        </Layout>
    );
};

export default MainLayout;
