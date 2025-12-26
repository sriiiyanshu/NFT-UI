import React from "react";
import { Users, Target, Award, Zap } from "lucide-react";

const About = () => {
  const stats = [
    { number: "50M+", label: "Total Users" },
    { number: "200K+", label: "NFTs Created" },
    { number: "$2B+", label: "Trading Volume" },
    { number: "150+", label: "Countries" },
  ];

  const values = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Our Mission",
      description: "To democratize digital art and make NFT creation accessible to everyone, from artists to collectors worldwide.",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Community First",
      description: "We believe in building a strong, supportive community where creators and collectors can thrive together.",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Quality & Trust",
      description: "Every NFT on our platform is verified and authenticated, ensuring the highest quality for our users.",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Innovation",
      description: "Constantly pushing boundaries with cutting-edge technology to enhance your NFT experience.",
    },
  ];

  const team = [
    { name: "Sarah Chen", role: "CEO & Founder", image: "https://i.pravatar.cc/150?img=5" },
    { name: "Marcus Johnson", role: "CTO", image: "https://i.pravatar.cc/150?img=12" },
    { name: "Elena Rodriguez", role: "Head of Design", image: "https://i.pravatar.cc/150?img=9" },
    { name: "David Kim", role: "Lead Developer", image: "https://i.pravatar.cc/150?img=14" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 font-heading">About NFTme</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            We're on a mission to revolutionize the digital art world by creating the most accessible and trusted NFT marketplace. Join us in shaping the future of digital ownership.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-semibold text-white font-heading leading-[48px] tracking-[0.2px] mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl blur-2xl"></div>
            <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=700&fit=crop" alt="Our Story" className="relative rounded-3xl w-full h-auto shadow-2xl" />
          </div>

          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-white font-heading">Our Story</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Founded in 2021, NFTme started with a simple idea: make NFTs accessible to everyone. What began as a small project has grown into one of the leading NFT marketplaces, serving millions of
              users worldwide.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We've built a platform where artists can showcase their creativity, collectors can discover unique digital assets, and communities can thrive. Our commitment to innovation and user
              experience has made us a trusted name in the NFT space.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 font-heading">Our Values</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">These core principles guide everything we do</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl backdrop-blur-sm"></div>
              <div className="relative p-8 space-y-4">
                <div className="text-purple-400 group-hover:text-purple-300 transition">{value.icon}</div>
                <h3 className="text-2xl font-bold text-white font-heading">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 font-heading">Meet Our Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">The passionate people behind NFTme</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mx-auto w-48 h-48 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition"></div>
                <img src={member.image} alt={member.name} className="relative w-full h-full rounded-full object-cover border-4 border-purple-500/30 group-hover:border-purple-500 transition" />
              </div>
              <h3 className="text-xl font-bold text-white font-heading mb-1">{member.name}</h3>
              <p className="text-purple-300">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
