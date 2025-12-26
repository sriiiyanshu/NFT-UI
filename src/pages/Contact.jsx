import React, { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      details: ["support@nftme.com", "sales@nftme.com"],
      description: "We'll respond within 24 hours",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 765-4321"],
      description: "Mon-Fri 9am-6pm EST",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Us",
      details: ["123 NFT Street", "San Francisco, CA 94102"],
      description: "By appointment only",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 font-heading">Get In Touch</h1>
          <p className="text-xl text-gray-300 leading-relaxed">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl backdrop-blur-sm group-hover:from-purple-900/40 group-hover:to-pink-900/40 transition"></div>
              <div className="relative p-8 text-center space-y-4">
                <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600">
                  <div className="text-white">{info.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-white font-heading">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-300">
                    {detail}
                  </p>
                ))}
                <p className="text-sm text-gray-400">{info.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Left Column - Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold text-white mb-6 font-heading">Let's Talk</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Whether you're a creator looking to mint your first NFT, a collector searching for unique pieces, or a business exploring NFT solutions, we're here to help.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">Fill out the form and our team will get back to you within 24 hours.</p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl blur-2xl"></div>
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop" alt="Contact" className="relative rounded-3xl w-full h-auto shadow-2xl" />
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-3xl backdrop-blur-sm"></div>
            <div className="relative p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-purple-600 transition shadow-lg shadow-purple-500/50 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="container mx-auto px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl h-96">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm flex items-center justify-center">
            <div className="text-center space-y-4">
              <MapPin className="w-16 h-16 text-white mx-auto" />
              <p className="text-2xl font-bold text-white font-heading">Visit Our Office</p>
              <p className="text-gray-300">123 NFT Street, San Francisco, CA 94102</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
