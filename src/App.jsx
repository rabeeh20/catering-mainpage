import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Star, Users, Calendar, Award, ChefHat, Utensils, Heart } from 'lucide-react';

const CateringWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guests: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      guests: '',
      message: ''
    });
  };

  const galleryImages = [
    'https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop'
  ];

  const services = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Wedding Catering",
      description: "Traditional Kerala wedding feasts with authentic flavors and grand presentation"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Corporate Events",
      description: "Professional catering services for meetings, conferences, and corporate gatherings"
    },
    {
      icon: <Calendar className="w-8 h-8 text-green-500" />,
      title: "Social Events",
      description: "Birthday parties, anniversaries, and family celebrations with customized menus"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: "Festival Catering",
      description: "Special occasion catering for Onam, Vishu, and other Kerala festivals"
    }
  ];

  const testimonials = [
    {
      name: "Priya Nair",
      event: "Wedding Reception",
      review: "Absolutely incredible service! The traditional Kerala sadya was perfect and all our guests loved it.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      event: "Corporate Event",
      review: "Professional team, delicious food, and excellent presentation. Highly recommended!",
      rating: 5
    },
    {
      name: "Meera Pillai",
      event: "Birthday Party",
      review: "They made our celebration special with authentic Kerala cuisine and wonderful service.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <ChefHat className="w-8 h-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-800">Kerala Delights Catering</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition">Home</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition">About</a>
              <a href="#services" className="text-gray-700 hover:text-green-600 transition">Services</a>
              <a href="#gallery" className="text-gray-700 hover:text-green-600 transition">Gallery</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-600"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                <a href="#home" className="text-gray-700 hover:text-green-600 py-2">Home</a>
                <a href="#about" className="text-gray-700 hover:text-green-600 py-2">About</a>
                <a href="#services" className="text-gray-700 hover:text-green-600 py-2">Services</a>
                <a href="#gallery" className="text-gray-700 hover:text-green-600 py-2">Gallery</a>
                <a href="#contact" className="text-gray-700 hover:text-green-600 py-2">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-br from-green-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                Authentic Kerala
                <span className="text-green-600 block">Catering Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Experience the rich flavors of Kerala cuisine with our professional catering services. 
                From traditional weddings to corporate events, we bring the taste of God's Own Country to your special occasions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition text-center"
                >
                  Get Quote
                </a>
                <a
                  href="#gallery"
                  className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-600 hover:text-white transition text-center"
                >
                  View Gallery
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&h=400&fit=crop"
                alt="Kerala Traditional Food"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Kerala Delights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over 15 years of experience in Kerala's catering industry, we specialize in bringing 
              authentic flavors and traditional hospitality to your events.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1577303935007-0d306ee638cf?w=500&h=400&fit=crop"
                alt="Our Kitchen"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Story</h3>
              <p className="text-gray-600 mb-6">
                Founded in 2008 in the heart of Kochi, Kerala Delights Catering began as a small family business 
                with a passion for authentic Kerala cuisine. Today, we're proud to be one of Kerala's most 
                trusted catering services, having served over 5,000 events across the state.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of experienced chefs uses traditional recipes passed down through generations, 
                combined with modern presentation techniques to create memorable dining experiences.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">5000+</div>
                  <div className="text-gray-600">Events Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">50+</div>
                  <div className="text-gray-600">Menu Items</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">100%</div>
                  <div className="text-gray-600">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive catering solutions for all your special occasions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-green-600 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Our Specialties</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <Utensils className="w-12 h-12 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Traditional Kerala Sadya</h4>
                <p className="text-sm">Authentic vegetarian feast served on banana leaf</p>
              </div>
              <div>
                <ChefHat className="w-12 h-12 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Malabar Cuisine</h4>
                <p className="text-sm">Spicy and flavorful dishes from North Kerala</p>
              </div>
              <div>
                <Heart className="w-12 h-12 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Seafood Specialties</h4>
                <p className="text-sm">Fresh coastal delicacies prepared with authentic spices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Event Gallery</h2>
            <p className="text-xl text-gray-600">
              A glimpse of our culinary creations and memorable events
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.review}"</p>
                <div>
                  <div className="font-bold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">
              Ready to make your event memorable? Get in touch with us today!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800">Address</h4>
                    <div className="text-gray-600">
                      <div>123 MG Road, Kochi</div>
                      <div>Kerala 682016, India</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+91 98470 12345</p>
                    <p className="text-gray-600">+91 98470 67890</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800">Email</h4>
                    <p className="text-gray-600">info@keralaldelights.com</p>
                    <p className="text-gray-600">booking@keraladelights.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-bold text-gray-800 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Request a Quote</h3>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="+91 98470 12345"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Event Type</label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    >
                      <option value="">Select Event Type</option>
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="festival">Festival</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Event Date</label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Number of Guests</label>
                    <input
                      type="number"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      min="10"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="e.g. 50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Additional Requirements</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="Tell us more about your event requirements..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition font-medium"
                >
                  Send Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <ChefHat className="w-8 h-8 text-green-500" />
                <span className="text-2xl font-bold">Kerala Delights Catering</span>
              </div>
              <p className="text-gray-300 mb-4">
                Bringing authentic Kerala flavors to your special occasions with over 15 years of experience in catering excellence.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-white transition">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white transition">About Us</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white transition">Services</a></li>
                <li><a href="#gallery" className="text-gray-300 hover:text-white transition">Gallery</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-300">
                <p>123 MG Road, Kochi</p>
                <p>Kerala 682016, India</p>
                <p>+91 98470 12345</p>
                <p>info@keraladelights.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>© 2024 Kerala Delights Catering. All rights reserved. | Designed with love for Kerala's food lovers</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CateringWebsite;