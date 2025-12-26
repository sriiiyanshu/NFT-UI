import React, { useState } from "react";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for trying out the platform",
      price: { monthly: 0, annual: 0 },
      features: ["Up to 10 NFTs per month", "Basic marketplace listing", "Standard support", "Community access", "2.5% transaction fee"],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Creator",
      description: "For serious artists and creators",
      price: { monthly: 29, annual: 290 },
      features: ["Unlimited NFT minting", "Featured marketplace listing", "Priority support", "Advanced analytics", "1.5% transaction fee", "Custom collection pages", "Early access to new features"],
      cta: "Start Creating",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For brands and large collections",
      price: { monthly: 99, annual: 990 },
      features: [
        "Everything in Creator",
        "Dedicated account manager",
        "White-label solutions",
        "API access",
        "0.5% transaction fee",
        "Custom smart contracts",
        "Multi-user team access",
        "Priority blockchain processing",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major cryptocurrencies including ETH, MATIC, and SOL. We also support credit card payments for plan subscriptions.",
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences.",
    },
    {
      question: "What's your refund policy?",
      answer: "We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, we'll refund your payment, no questions asked.",
    },
    {
      question: "Are there any hidden fees?",
      answer: "No hidden fees! The only costs are your subscription fee and the transaction fees clearly listed in each plan.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 font-heading">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">Choose the perfect plan for your NFT journey</p>

          {/* Toggle */}
          <div className="inline-flex items-center space-x-4 bg-purple-900/30 backdrop-blur-sm rounded-full p-2">
            <button onClick={() => setIsAnnual(false)} className={`px-6 py-3 rounded-full font-semibold transition ${!isAnnual ? "bg-purple-600 text-white" : "text-gray-300 hover:text-white"}`}>
              Monthly
            </button>
            <button onClick={() => setIsAnnual(true)} className={`px-6 py-3 rounded-full font-semibold transition ${isAnnual ? "bg-purple-600 text-white" : "text-gray-300 hover:text-white"}`}>
              Annual
              <span className="ml-2 text-sm text-purple-300">Save 17%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative ${plan.popular ? "md:-mt-8" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-semibold text-sm flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-current" />
                  <span>Most Popular</span>
                </div>
              )}

              <div className={`relative overflow-hidden rounded-3xl ${plan.popular ? "border-2 border-purple-500" : ""}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm"></div>

                <div className="relative p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white font-heading mb-2">{plan.name}</h3>
                    <p className="text-gray-400">{plan.description}</p>
                  </div>

                  <div>
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-white font-heading">${isAnnual ? plan.price.annual : plan.price.monthly}</span>
                      {plan.price.monthly > 0 && <span className="text-gray-400 ml-2">/{isAnnual ? "year" : "month"}</span>}
                    </div>
                    {isAnnual && plan.price.monthly > 0 && <p className="text-sm text-gray-400 mt-1">${(plan.price.annual / 12).toFixed(2)} per month</p>}
                  </div>

                  <button
                    className={`w-full py-4 rounded-xl font-semibold transition ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:from-purple-700 hover:to-purple-600 shadow-lg shadow-purple-500/50"
                        : "bg-white text-black hover:bg-gray-100"
                    }`}
                  >
                    {plan.cta}
                  </button>

                  <div className="space-y-4 pt-6 border-t border-purple-500/20">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4 font-heading">Frequently Asked Questions</h2>
            <p className="text-gray-400">Everything you need to know about our pricing</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl backdrop-blur-sm"></div>
                <div className="relative p-8">
                  <h3 className="text-xl font-bold text-white font-heading mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl p-12 lg:p-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-pink-900/30 backdrop-blur-sm"></div>

          <div className="relative text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight font-heading">Still Have Questions?</h2>
            <p className="text-xl text-gray-300">Our team is here to help you choose the right plan</p>
            <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition">CONTACT SALES</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
