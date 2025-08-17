import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Menu, X, ChefHat, Sprout, Star } from 'lucide-react';

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About Us' },
    { id: 'services', title: 'Our Work' },
    { id: 'gallery', title: 'Gallery' },
    { id: 'contact', title: 'Contact' },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection setActiveSection={setActiveSection} />;
      case 'about':
        return <AboutSection />;
      case 'services':
        return <ServicesSection />;
      case 'gallery':
        return <GallerySection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="bg-cream-100 font-sans text-gray-800 antialiased">
      <Header 
        navigationLinks={navigationLinks} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <main className="pt-20">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
};

// Header Component
const Header = ({ navigationLinks, activeSection, setActiveSection, isMenuOpen, setIsMenuOpen }) => {
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-800 tracking-wider">
          Malabar<span className="text-orange-500">Feasts</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          {navigationLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-lg font-medium transition-colors duration-300 ${
                activeSection === link.id
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-gray-600 hover:text-orange-500'
              }`}
            >
              {link.title}
            </button>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <nav className="flex flex-col items-center py-4">
            {navigationLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full py-3 text-center text-lg font-medium transition-colors duration-300 ${
                  activeSection === link.id ? 'text-orange-500 bg-green-50' : 'text-gray-600 hover:bg-green-50'
                }`}
              >
                {link.title}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

// Hero Section Component
const HeroSection = ({ setActiveSection }) => {
  return (
    <section 
      id="home" 
      className="relative h-[calc(100vh-80px)] min-h-[500px] flex items-center justify-center text-white"
    >
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <img 
        src="https://images.unsplash.com/photo-1606791422814-b32c70505b86?q=80&w=2070&auto=format&fit=crop" 
        alt="Kerala Sadya Feast" 
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/1920x1080/228B22/FFFFFF?text=Kerala+Cuisine'; }}
      />
      <div className="relative z-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg leading-tight">
          Authentic Kerala Flavours for Every Occasion
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 drop-shadow-md">
          Experience the rich culinary heritage of God's Own Country, brought to your special events with passion and perfection.
        </p>
        <button 
          onClick={() => setActiveSection('contact')}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 transform hover:scale-105 shadow-lg"
        >
          Book An Event
        </button>
      </div>
    </section>
  );
};

// About Us Section Component
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800">A Taste of Tradition</h2>
          <p className="text-lg text-gray-600 mt-2">Our Story of Passion and Flavour</p>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1552590635-27c2c2120ab0?q=80&w=1933&auto=format&fit=crop" 
              alt="Kerala Spices" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/8FBC8F/FFFFFF?text=Kerala+Spices'; }}
            />
          </div>
          <div className="md:w-1/2 text-lg text-gray-700 space-y-4">
            <p>
              Born from a love for authentic Kerala cuisine, Malabar Feasts was founded to share the timeless recipes passed down through generations. Our journey began in a small kitchen in Kochi, with a simple mission: to bring the true taste of Kerala to celebrations big and small.
            </p>
            <p>
              We believe in the magic of fresh, locally-sourced ingredients – from the fragrant spices of the Western Ghats to the fresh catch from the Arabian Sea. Our chefs are not just cooks; they are artisans who pour their heart into every dish, ensuring an unforgettable culinary experience for you and your guests.
            </p>
            <div className="flex justify-around pt-4">
              <div className="text-center">
                <ChefHat className="w-12 h-12 mx-auto text-orange-500"/>
                <p className="mt-2 font-semibold">Expert Chefs</p>
              </div>
              <div className="text-center">
                <Sprout className="w-12 h-12 mx-auto text-green-600"/>
                <p className="mt-2 font-semibold">Fresh Ingredients</p>
              </div>
              <div className="text-center">
                <Star className="w-12 h-12 mx-auto text-yellow-500"/>
                <p className="mt-2 font-semibold">Quality Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section Component
const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
    <div className="text-orange-500 mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-green-800 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      icon: <img src="https://placehold.co/64x64/FF7F50/FFFFFF?text=💍" alt="Wedding" className="rounded-full"/>,
      title: "Wedding Catering",
      description: "From grand Sadhyas on banana leaves to elegant multi-course dinners, we make your special day deliciously memorable."
    },
    {
      icon: <img src="https://placehold.co/64x64/4682B4/FFFFFF?text=💼" alt="Corporate" className="rounded-full"/>,
      title: "Corporate Events",
      description: "Impress your clients and colleagues with our professional catering services, offering a range of menus for meetings, conferences, and parties."
    },
    {
      icon: <img src="https://placehold.co/64x64/32CD32/FFFFFF?text=🎉" alt="Private" className="rounded-full"/>,
      title: "Private Parties",
      description: "Birthdays, anniversaries, or family get-togethers – we bring the celebration to you with customized menus to suit any taste."
    },
    {
      icon: <img src="https://placehold.co/64x64/DAA520/FFFFFF?text=🌿" alt="Sadhya" className="rounded-full"/>,
      title: "Traditional Sadhyas",
      description: "Our specialty! We provide an authentic Onam Sadhya experience with over 25 traditional dishes, served with cultural perfection."
    }
  ];

  return (
    <section id="services" className="py-20 bg-cream-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800">Our Work & Services</h2>
          <p className="text-lg text-gray-600 mt-2">Catering for Every Memorable Moment</p>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Gallery Section Component
const GallerySection = () => {
    const images = [
        { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop", alt: "Delicious Food Spread", placeholder: "Food+Spread" },
        { src: "https://images.unsplash.com/photo-1626082894331-42FC15b3a390?q=80&w=2070&auto=format&fit=crop", alt: "Kerala Sadya on Banana Leaf", placeholder: "Kerala+Sadya" },
        { src: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=1996&auto=format&fit=crop", alt: "Appam and Stew", placeholder: "Appam" },
        { src: "https://images.unsplash.com/photo-1604329226865-bbf7795906ae?q=80&w=2070&auto=format&fit=crop", alt: "Wedding Event Setup", placeholder: "Wedding+Setup" },
        { src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop", alt: "Grilled Fish Preparation", placeholder: "Fish+Grill" },
        { src: "https://images.unsplash.com/photo-1627907222043-9c1a4d0f6e65?q=80&w=1932&auto=format&fit=crop", alt: "Happy Guests at an Event", placeholder: "Happy+Guests" },
    ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800">Visual Feast</h2>
          <p className="text-lg text-gray-600 mt-2">A Glimpse of Our Culinary Creations</p>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="group overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/600x400/CCCCCC/FFFFFF?text=${image.placeholder}`; }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle form submission here (e.g., API call)
    setStatus('Thank you for your message! We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-cream-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800">Get In Touch</h2>
          <p className="text-lg text-gray-600 mt-2">Let's Plan Your Next Unforgettable Event</p>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/3 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-green-800 mb-6">Contact Information</h3>
            <div className="space-y-6 text-lg text-gray-700">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-orange-500 mt-1 mr-4 flex-shrink-0" />
                <span>123 Spice Garden, Panampilly Nagar, Kochi, Kerala 682036, India</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-orange-500">+91 98765 43210</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0" />
                <a href="mailto:contact@malabarfeasts.com" className="hover:text-orange-500">contact@malabarfeasts.com</a>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="lg:w-2/3 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-green-800 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" required />
              </div>
              <div className="mb-6">
                <input type="tel" name="phone" placeholder="Your Phone Number" value={formData.phone} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
              <div className="mb-6">
                <textarea name="message" placeholder="Your Message (Event details, date, number of guests, etc.)" value={formData.message} onChange={handleChange} rows="5" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" required></textarea>
              </div>
              <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 transform hover:scale-105 shadow-lg">
                Submit Inquiry
              </button>
              {status && <p className="mt-4 text-green-700">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg font-bold">MalabarFeasts Catering Services</p>
        <p className="mt-2 text-green-200">Bringing the heart of Kerala to your plate.</p>
        <p className="mt-4 text-sm text-green-300">&copy; {new Date().getFullYear()} MalabarFeasts. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default App;
