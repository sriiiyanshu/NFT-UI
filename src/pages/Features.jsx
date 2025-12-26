import React from 'react';
import { Wallet, Shield, Zap, Globe, Layers, TrendingUp, Lock, Users } from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      icon: <Wallet className="w-16 h-16" />,
      title: "Easy Wallet Integration",
      description: "Connect your favorite crypto wallet in seconds. We support MetaMask, WalletConnect, Coinbase Wallet, and more.",
      color: "from-purple-600 to-purple-400"
    },
    {
      icon: <Shield className="w-16 h-16" />,
      title: "Secure Transactions",
      description: "Bank-level security with blockchain verification. Your assets are protected with military-grade encryption.",
      color: "from-pink-600 to-pink-400"
    },
    {
      icon: <Zap className="w-16 h-16" />,
      title: "Lightning Fast",
      description: "Instant minting and trading with low gas fees. Experience the fastest NFT marketplace in the industry.",
      color: "from-blue-600 to-blue-400"
    },
    {
      icon: <Globe className="w-16 h-16" />,
      title: "Global Marketplace",
      description: "Reach millions of collectors worldwide. List your NFTs and connect with a global audience.",
      color: "from-green-600 to-green-400"
    }
  ];

  const additionalFeatures = [
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Multi-Chain Support",
      description: "Trade on Ethereum, Polygon, Solana, and more"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Track your portfolio with real-time insights"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Private Collections",
      description: "Create exclusive collections for select audiences"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Tools",
      description: "Build and engage with your collector community"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Connect Wallet",
      description: "Link your crypto wallet to get started in seconds"
    },
    {
      number: "02",
      title: "Create NFT",
      description: "Upload your artwork and mint it as an NFT"
    },
    {
      number: "03",
      title: "List & Sell",
      description: "Set your price and list on the marketplace"
    },
    {
      number: "04",
      title: "Earn Revenue",
      description: "Receive payments directly to your wallet"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 font-heading">
            Powerful Features
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Everything you need to create, sell, and collect NFTs in one powerful platform
          </p>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {mainFeatures.map((feature, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-3xl backdrop-blur-sm"></div>
              <div className="relative p-12 space-y-6">
                <div className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${feature.color}`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white font-heading">{feature.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 font-heading">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get started with NFTme in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center space-y-4">
                <div className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-600 font-heading">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-white font-heading">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-purple-600 to-transparent -translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Additional Features */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 font-heading">More Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover all the tools you need to succeed
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalFeatures.map((feature, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl backdrop-blur-sm group-hover:from-purple-900/30 group-hover:to-pink-900/30 transition"></div>
              <div className="relative p-8 space-y-4">
                <div className="text-purple-400 group-hover:text-purple-300 transition">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white font-heading">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl p-12 lg:p-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-pink-900/30 backdrop-blur-sm"></div>
          
          <div className="relative text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight font-heading">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands of creators and collectors on the world's leading NFT marketplace
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-purple-600 transition shadow-lg shadow-purple-500/50">
              START CREATING
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
