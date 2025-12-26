import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-br from-nft-dark via-purple-950 to-nft-dark min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedArtwork />
      <TrendingSection />
      <PopularArtists />
      <CommunitySection />
      <Footer />
    </div>
  );
};

// Navigation Bar Component
const Navbar = () => {
  return (
    <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
      </div>
      
      <div className="flex items-center space-x-8">
        <div className="hidden md:flex space-x-8 text-gray-300">
          <a href="#" className="hover:text-white transition">About us</a>
          <a href="#" className="hover:text-white transition">Store</a>
          <a href="#" className="hover:text-white transition">Games</a>
        </div>
        
        <button className="bg-white text-black px-6 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight font-heading">
          Discover Rare Collections Of Art & NFT's
        </h1>
        
        <p className="text-gray-300 text-lg">
          Create, Explore, & Collect Digital Art NFTs
        </p>
        
        <button className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-purple-600 transition shadow-lg shadow-purple-500/50">
          EXPLORE
        </button>
        
        <div className="grid grid-cols-3 gap-8 pt-8">
          <div>
            <div className="text-[48px] font-semibold text-white font-heading leading-[48px] tracking-[0.2px]">32k+</div>
            <div className="text-gray-400 mt-1">Artwork</div>
          </div>
          <div>
            <div className="text-[48px] font-semibold text-white font-heading leading-[48px] tracking-[0.2px]">20k+</div>
            <div className="text-gray-400 mt-1">Auctions</div>
          </div>
          <div>
            <div className="text-[48px] font-semibold text-white font-heading leading-[48px] tracking-[0.2px]">10k+</div>
            <div className="text-gray-400 mt-1">Artists</div>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <div className="relative transform rotate-6 hover:rotate-3 transition duration-300">
          <NFTCard 
            image="https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=400&h=500&fit=crop"
            title="Remaining Time"
            artist="Laura"
            artistWallet="0.81 Weth"
            time={{ hours: 18, minutes: 57, seconds: 14 }}
            currentBid="2.8 ETH"
          />
        </div>
        
        <div className="absolute -bottom-8 -left-8 transform -rotate-6 hover:rotate-0 transition duration-300">
          <NFTCard 
            image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&h=350&fit=crop"
            small
          />
        </div>
        
        <div className="absolute -top-8 -right-8 transform rotate-12 hover:rotate-6 transition duration-300">
          <NFTCard 
            image="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=300&h=350&fit=crop"
            small
          />
        </div>
      </div>
    </section>
  );
};

// NFT Card Component
const NFTCard = ({ image, title, artist, artistWallet, time, currentBid, small }) => {
  if (small) {
    return (
      <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-purple-500/20 w-48 h-56">
        <img src={image} alt="NFT" className="w-full h-full object-cover" />
      </div>
    );
  }
  
  return (
    <div className="bg-gradient-to-br from-purple-900/80 to-pink-900/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl">
      <img src={image} alt={title} className="w-full h-96 object-cover" />
      
      <div className="p-6 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-purple-600 rounded-full overflow-hidden">
            <img src="https://i.pravatar.cc/150?img=1" alt={artist} className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="text-white font-semibold">{artist}</div>
            <div className="text-purple-300 text-sm">{artistWallet}</div>
          </div>
        </div>
        
        {title && (
          <div className="text-purple-300 text-sm">{title}</div>
        )}
        
        {time && (
          <div className="text-white text-2xl font-bold">
            {time.hours}h : {time.minutes}m : {time.seconds}s
          </div>
        )}
        
        <div className="flex items-center justify-between pt-4">
          <div>
            <div className="text-purple-300 text-sm">Current Bid</div>
            <div className="text-white font-semibold flex items-center space-x-1">
              <span className="text-purple-400">◆</span>
              <span>{currentBid}</span>
            </div>
          </div>
          
          <button className="bg-white text-black px-6 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition">
            PLACE A BID
          </button>
        </div>
        
        <div className="pt-2 border-t border-purple-500/30">
          <div className="text-purple-300 text-sm">Current Bid</div>
          <div className="text-white font-semibold flex items-center space-x-1 mt-1">
            <span className="text-purple-400">◆</span>
            <span>{currentBid}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Featured Artwork Section
const FeaturedArtwork = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 18,
    minutes: 57,
    seconds: 14
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-purple-900/30 to-black/50 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-purple-500/20">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition"></div>
          <img 
            src="https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=600&h=700&fit=crop" 
            alt="Bitcoin Art Work"
            className="relative rounded-2xl w-full h-auto shadow-2xl"
          />
        </div>
        
      <div className="space-y-6">
        <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight font-heading">
          Bitcoin Art Work
        </h2>          <p className="text-purple-300">
            Created by <span className="text-purple-400 font-semibold">Jonathan Borba</span>
          </p>
          
          <div className="grid grid-cols-2 gap-8 py-6">
            <div>
              <div className="text-gray-400 mb-2">Current Bid</div>
              <div className="text-4xl font-bold text-white">1.09 ETH</div>
              <div className="text-gray-400 mt-1">$1,835</div>
            </div>
            
            <div>
              <div className="text-gray-400 mb-2">Auction Ends In</div>
              <div className="flex space-x-4 text-white">
                <div className="text-center">
                  <div className="text-4xl font-bold">{timeLeft.hours}</div>
                  <div className="text-sm text-gray-400">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold">{timeLeft.minutes}</div>
                  <div className="text-sm text-gray-400">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold">{timeLeft.seconds}</div>
                  <div className="text-sm text-gray-400">Seconds</div>
                </div>
              </div>
            </div>
          </div>
          
          <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition flex items-center space-x-2 group">
            <span>View Art Work</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Trending Section
const TrendingSection = () => {
  const artworks = [
    {
      id: 1,
      title: "Sebastian",
      subtitle: "Golden Flower",
      price: "2.3 ETH",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=500&fit=crop"
    },
    {
      id: 2,
      title: "Ferhat Deniz",
      subtitle: "Golden Flower",
      price: "2.3 ETH",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=500&h=500&fit=crop"
    },
    {
      id: 3,
      title: "Polina Kondrashova",
      subtitle: "Golden Flower",
      price: "2.3 ETH",
      image: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=500&h=500&fit=crop"
    },
    {
      id: 4,
      title: "Javier Miranda",
      subtitle: "Golden Flower",
      price: "2.3 ETH",
      image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=500&h=500&fit=crop"
    },
    {
      id: 5,
      title: "Milad Fakurian",
      subtitle: "Golden Flower",
      price: "2.3 ETH",
      image: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=500&h=500&fit=crop"
    },
    {
      id: 6,
      title: "Erick Butler",
      subtitle: "Golden Flower",
      price: "2.3 ETH",
      image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=500&h=500&fit=crop"
    },
  ];

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="mb-12">
        <h2 className="text-5xl font-bold text-white mb-4 font-heading">Trending This Week</h2>
        <p className="text-gray-400 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur dolore adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artworks.map((artwork, index) => (
          <ArtworkCard key={artwork.id} artwork={artwork} large={index === 0 || index === 1} />
        ))}
      </div>
      
      <div className="flex justify-end mt-8">
        <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition flex items-center space-x-2 group">
          <span>Explore More</span>
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
        </button>
      </div>
    </section>
  );
};

// Artwork Card Component
const ArtworkCard = ({ artwork, large }) => {
  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/40 to-black/60 backdrop-blur-lg border border-purple-500/20 hover:border-purple-500/40 transition ${large ? 'md:row-span-2' : ''}`}>
      <div className={`relative ${large ? 'h-96 md:h-full' : 'h-64'} overflow-hidden`}>
        <img 
          src={artwork.image} 
          alt={artwork.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
        <div className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold">
          {artwork.price}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-white text-xl font-semibold mb-1 font-heading">{artwork.title}</h3>
        <p className="text-purple-300 text-sm">{artwork.subtitle}</p>
      </div>
    </div>
  );
};

// Popular Artists Section
const PopularArtists = () => {
  const artists = [
    { name: "Ferhat Deniz", image: "https://i.pravatar.cc/150?img=1" },
    { name: "Sebastian", image: "https://i.pravatar.cc/150?img=33" },
    { name: "Javier Miranda", image: "https://i.pravatar.cc/150?img=12" },
    { name: "Erick Butler", image: "https://i.pravatar.cc/150?img=8" },
  ];

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-5xl font-bold text-white font-heading">Popular Artists</h2>
        <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition flex items-center space-x-2 group">
          <span>View all Artists</span>
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
        </button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {artists.map((artist, index) => (
          <div key={index} className="text-center group cursor-pointer">
            <div className="relative mx-auto w-40 h-40 mb-4">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition"></div>
              <img 
                src={artist.image} 
                alt={artist.name}
                className="relative w-full h-full rounded-full object-cover border-4 border-purple-500/30 group-hover:border-purple-500 transition grayscale group-hover:grayscale-0"
              />
            </div>
            <h3 className="text-white text-xl font-semibold font-heading">{artist.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

// Community Section
const CommunitySection = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 p-12 lg:p-20">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=600&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(2px)'
          }}></div>
        </div>
        
        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-96 rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=600&fit=crop" 
              alt="Community"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight font-heading">
              Join The Community And Get The Best NFT Collection
            </h2>
            
            <button className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-purple-600 transition shadow-lg shadow-purple-500/50">
              JOIN COMMUNITY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-lg border-t border-purple-500/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-1">
            <h3 className="text-white text-2xl font-bold mb-4 font-heading">NFTme</h3>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Art</a></li>
              <li><a href="#" className="hover:text-white transition">Collectibles</a></li>
              <li><a href="#" className="hover:text-white transition">Music</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Marketplace</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">All NFTs</a></li>
              <li><a href="#" className="hover:text-white transition">New</a></li>
              <li><a href="#" className="hover:text-white transition">Trending</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Artists</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Top Sellers</a></li>
              <li><a href="#" className="hover:text-white transition">Verified</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Support</a></li>
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-purple-500/20">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white transition">Privacy policy</a>
            <span className="text-gray-600">|</span>
            <p className="text-gray-400">Copyright @ Kartik Bansal 2022. All Rights Reserved.</p>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-400 hover:text-white transition">Terms of service</a>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingPage;
