import React from 'react';
import { Button, Form, Input, Card } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined, WhatsAppOutlined, SendOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const Contact = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
        // Here you would typically send the email
        window.open(`mailto:infotechautoserv@gmail.com?subject=Contact Site Web: ${values.subject}&body=De: ${values.name} (${values.email})%0D%0A%0D%0A${values.message}`);
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pt-20 min-h-screen bg-gray-50"
        >
            <div className="bg-secondary text-white py-16 mb-12">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">Une question ? Un devis ? Notre équipe est à votre écoute 24/7.</p>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 mb-20">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-secondary mb-6">Nos Coordonnées</h2>
                            <p className="text-gray-600 mb-8">N'hésitez pas à nous contacter via WhatsApp pour une réponse immédiate, ou remplissez le formulaire ci-contre.</p>
                        </div>

                        <div className="grid gap-6">
                             <Card hoverable className="border-l-4 border-l-primary shadow-md">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary text-2xl"><PhoneOutlined /></div>
                                    <div>
                                        <h3 className="font-bold text-lg text-secondary">Téléphone</h3>
                                        <p className="text-gray-600 font-medium">(+237) 694 852 384</p>
                                        <p className="text-gray-600 font-medium">(+237) 651 619 488</p>
                                    </div>
                                </div>
                            </Card>

                            <Card hoverable className="border-l-4 border-l-green-500 shadow-md">
                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-3 rounded-full text-green-600 text-2xl"><WhatsAppOutlined /></div>
                                    <div>
                                        <h3 className="font-bold text-lg text-secondary">WhatsApp</h3>
                                        <p className="text-gray-600 mb-2">Discutez directement avec un expert.</p>
                                        <a href="https://wa.me/237694852384" target="_blank" rel="noopener noreferrer">
                                            <Button type="primary" className="bg-green-500 hover:bg-green-600 border-none font-bold">
                                                Ouvrir WhatsApp
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </Card>

                            <Card hoverable className="border-l-4 border-l-primary shadow-md">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary text-2xl"><EnvironmentOutlined /></div>
                                    <div>
                                        <h3 className="font-bold text-lg text-secondary">Adresse</h3>
                                        <p className="text-gray-600">Yaoundé - Derrière Dovv Hôpital Général (Dovv Ngousso)</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                        <h3 className="text-2xl font-bold text-secondary mb-6">Envoyez-nous un message</h3>
                        <Form layout="vertical" onFinish={onFinish} size="large">
                            <Form.Item name="name" label="Nom complet" rules={[{ required: true, message: 'Champ requis' }]}>
                                <Input prefix={<span className="text-gray-400">👤</span>} placeholder="Votre nom" />
                            </Form.Item>
                            <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'Email valide requis' }]}>
                                <Input prefix={<span className="text-gray-400">@</span>} placeholder="votre@email.com" />
                            </Form.Item>
                            <Form.Item name="subject" label="Sujet" rules={[{ required: true }]}>
                                <Input placeholder="Demande de devis, Information..." />
                            </Form.Item>
                            <Form.Item name="message" label="Message" rules={[{ required: true }]}>
                                <Input.TextArea rows={4} placeholder="Comment pouvons-nous vous aider ?" />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" size="large" block className="h-12 bg-primary hover:bg-primary-dark font-bold shadow-lg shadow-primary/30">
                                    <SendOutlined /> Envoyer le message
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-96 bg-gray-200 grayscale contrast-125">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15923.149987648354!2d11.5367615!3d3.8422325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7a3a3a3a3b%3A0x1a2b3c4d5e6f7g8h!2sH%C3%B4pital%20G%C3%A9n%C3%A9ral%20de%20Yaound%C3%A9!5e0!3m2!1sfr!2scm!4v1620000000000!5m2!1sfr!2scm" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                ></iframe>
            </div>
        </motion.div>
    );
};

export default Contact;
