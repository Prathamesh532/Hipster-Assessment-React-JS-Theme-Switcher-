import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe, Shield } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Contact() {
  const { themeConfig } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'hello@multitheme.com',
      description: 'Get in touch via email',
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      description: 'Monday to Friday, 9am-6pm EST',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: '123 Commerce Street, Tech City',
      description: 'Our headquarters',
    },
    {
      icon: Globe,
      title: 'Website',
      value: 'www.multitheme.com',
      description: 'Explore our work online',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-16"
    >
      {/* Hero Section */}
      <motion.section 
        variants={itemVariants}
        className={`text-center py-16 ${
          themeConfig.layout === 'grid' 
            ? 'bg-gradient-to-br from-blue-100 via-green-100 to-yellow-100 rounded-3xl border-4 border-dashed border-blue-300 transform -rotate-1' 
            : themeConfig.layout === 'sidebar'
            ? 'bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg border border-gray-700'
            : 'bg-gradient-to-b from-blue-50 to-white rounded-lg border border-gray-200'
        }`}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className={`w-20 h-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center mx-auto mb-6 ${
            themeConfig.layout === 'grid' ? 'rounded-full transform rotate-12' : 'rounded-full'
          }`}
        >
          <MessageCircle className="w-10 h-10 text-white" />
        </motion.div>

        <motion.h1 
          className={`font-bold text-[var(--color-text)] mb-6 font-[var(--font-primary)] ${
            themeConfig.layout === 'grid' 
              ? 'text-5xl md:text-6xl transform rotate-1' 
              : 'text-4xl md:text-5xl'
          }`}
          variants={itemVariants}
        >
          Get In Touch
        </motion.h1>
        
        <motion.p 
          className={`text-[var(--color-textSecondary)] max-w-3xl mx-auto font-[var(--font-secondary)] ${
            themeConfig.layout === 'grid' 
              ? 'text-xl md:text-2xl font-medium' 
              : 'text-lg md:text-xl'
          }`}
          variants={itemVariants}
        >
          Have questions about our products or themes? Want to collaborate? 
          We'd love to hear from you. Reach out and let's create something amazing together.
        </motion.p>
      </motion.section>

      {/* Contact Info Grid */}
      <motion.section variants={itemVariants}>
        <div className={`grid gap-6 ${
          themeConfig.layout === 'grid'
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
            : themeConfig.layout === 'sidebar'
            ? 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-4'
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
        }`}>
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`text-center p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-all duration-300 group ${
                  themeConfig.layout === 'grid' 
                    ? 'transform hover:rotate-2 border-2 border-dashed rounded-3xl' 
                    : ''
                }`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform ${
                  themeConfig.layout === 'grid' ? 'rounded-full' : 'rounded-lg'
                }`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`font-semibold text-[var(--color-text)] mb-2 font-[var(--font-primary)] ${
                  themeConfig.layout === 'grid' ? 'text-xl' : 'text-lg'
                }`}>
                  {info.title}
                </h3>
                <p className="text-[var(--color-primary)] font-medium mb-2 font-[var(--font-secondary)]">
                  {info.value}
                </p>
                <p className="text-[var(--color-textSecondary)] text-sm font-[var(--font-secondary)]">
                  {info.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section 
        variants={itemVariants}
        className={`grid gap-12 items-start ${
          themeConfig.layout === 'sidebar' ? 'lg:grid-cols-1' : 'lg:grid-cols-2'
        }`}
      >
        {/* Form */}
        <motion.div
          variants={itemVariants}
          className={`bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 ${
            themeConfig.layout === 'grid' ? 'border-2 border-dashed rounded-3xl' : ''
          }`}
        >
          <h2 className={`font-bold text-[var(--color-text)] mb-6 font-[var(--font-primary)] ${
            themeConfig.layout === 'grid' ? 'text-3xl transform -rotate-1' : 'text-2xl'
          }`}>
            Send us a Message
          </h2>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className={`w-16 h-16 bg-green-500 flex items-center justify-center mx-auto mb-4 ${
                themeConfig.layout === 'grid' ? 'rounded-full transform rotate-12' : 'rounded-full'
              }`}>
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3 className={`font-semibold text-green-600 mb-2 font-[var(--font-primary)] ${
                themeConfig.layout === 'grid' ? 'text-2xl' : 'text-xl'
              }`}>
                Message Sent!
              </h3>
              <p className="text-[var(--color-textSecondary)] font-[var(--font-secondary)]">
                Thank you for reaching out. We'll get back to you soon!
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text)] mb-2 font-[var(--font-secondary)]">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all font-[var(--font-secondary)] ${
                      themeConfig.layout === 'grid' ? 'rounded-2xl border-2' : 'rounded-lg'
                    }`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text)] mb-2 font-[var(--font-secondary)]">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all font-[var(--font-secondary)] ${
                      themeConfig.layout === 'grid' ? 'rounded-2xl border-2' : 'rounded-lg'
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[var(--color-text)] mb-2 font-[var(--font-secondary)]">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all font-[var(--font-secondary)] ${
                    themeConfig.layout === 'grid' ? 'rounded-2xl border-2' : 'rounded-lg'
                  }`}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text)] mb-2 font-[var(--font-secondary)]">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all resize-none font-[var(--font-secondary)] ${
                    themeConfig.layout === 'grid' ? 'rounded-2xl border-2' : 'rounded-lg'
                  }`}
                  placeholder="Tell us more about your project or question..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 bg-[var(--color-primary)] text-white font-semibold hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 font-[var(--font-secondary)] ${
                  themeConfig.layout === 'grid' ? 'rounded-2xl transform hover:rotate-1' : 'rounded-lg'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>

        {/* Additional Info */}
        {themeConfig.layout !== 'sidebar' && (
          <motion.div variants={itemVariants} className="space-y-8">
            <div className={`bg-[var(--color-surface)] border border-[var(--color-border)] p-6 ${
              themeConfig.layout === 'grid' ? 'rounded-3xl border-2 border-dashed' : 'rounded-xl'
            }`}>
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-[var(--color-primary)]" />
                <h3 className={`font-semibold text-[var(--color-text)] font-[var(--font-primary)] ${
                  themeConfig.layout === 'grid' ? 'text-xl' : 'text-lg'
                }`}>
                  Business Hours
                </h3>
              </div>
              <div className="space-y-2 text-[var(--color-textSecondary)] font-[var(--font-secondary)]">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            <div className={`bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] p-6 text-white ${
              themeConfig.layout === 'grid' ? 'rounded-3xl transform -rotate-1' : 'rounded-xl'
            }`}>
              <h3 className={`font-semibold mb-3 font-[var(--font-primary)] ${
                themeConfig.layout === 'grid' ? 'text-xl transform rotate-1' : 'text-lg'
              }`}>
                Quick Response
              </h3>
              <p className="text-white/90 mb-4 font-[var(--font-secondary)]">
                We typically respond to all inquiries within 24 hours during business days.
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Currently online</span>
              </div>
            </div>
          </motion.div>
        )}
      </motion.section>
    </motion.div>
  );
}