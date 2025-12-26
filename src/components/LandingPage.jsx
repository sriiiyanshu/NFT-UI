import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedArtwork />
      <TrendingSection />
      <PopularArtists />
      <CommunitySection />
    </div>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight font-heading">Discover Rare Collections Of Art & NFT's</h1>

        <p className="text-gray-300 text-lg">Create, Explore, & Collect Digital Art NFTs</p>

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
          <NFTCard image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&h=350&fit=crop" small />
        </div>

        <div className="absolute -top-8 -right-8 transform rotate-12 hover:rotate-6 transition duration-300">
          <NFTCard image="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=300&h=350&fit=crop" small />
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

        {title && <div className="text-purple-300 text-sm">{title}</div>}

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

          <button className="bg-white text-black px-6 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition">PLACE A BID</button>
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
    seconds: 14,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
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
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition"></div>
          <img src="https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=600&h=700&fit=crop" alt="Bitcoin Art Work" className="relative rounded-2xl w-full h-auto shadow-2xl" />
        </div>

        <div className="space-y-6">
          <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight font-heading">Bitcoin Art Work</h2>{" "}
          <p className="text-purple-300">
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
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=500&fit=crop",
    },
    {
      id: 2,
      title: "Javier Miranda",
      subtitle: "Golden Flower",
      price: "2.3 ETH",
      image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=500&h=500&fit=crop",
    },
    {
      id: 3,
      title: "Milad Fakurian",
      subtitle: "Golden Flower",
      price: "2.3 ETH",
      image: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=500&h=500&fit=crop",
    },
    {
      id: 4,
      title: "Ferhat Deniz",
      subtitle: "Golden Flower",
      price: "2.3 ETH",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=500&h=500&fit=crop",
    },
    {
      id: 5,
      title: "Polina Kondrashova",
      subtitle: "Golden Flower",
      price: "2.3 ETH",
      image: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=500&h=500&fit=crop",
    },
    {
      id: 6,
      title: "Erick Butler",
      subtitle: "Golden Flower",
      price: "2.3 ETH",
      image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=500&h=500&fit=crop",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="mb-12">
        <h2 className="text-5xl font-bold text-white mb-4 font-heading">Trending This Week</h2>
        <p className="text-gray-400 max-w-2xl">Lorem ipsum dolor sit amet, consectetur dolore adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          <ArtworkCard artwork={artworks[0]} large />
          <ArtworkCard artwork={artworks[1]} />
          <ArtworkCard artwork={artworks[2]} />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <ArtworkCard artwork={artworks[3]} />
          <ArtworkCard artwork={artworks[4]} />
          <ArtworkCard artwork={artworks[5]} />
        </div>
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
    <div className={`group relative overflow-hidden rounded-2xl ${large ? "h-[500px]" : "h-64"}`}>
      <div className="relative w-full h-full overflow-hidden">
        <img src={artwork.image} alt={artwork.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        {/* Content overlay */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          <div className="flex justify-end">
            <div className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-sm">{artwork.price}</div>
          </div>

          <div>
            <h3 className="text-white text-xl font-semibold font-heading mb-1">{artwork.title}</h3>
            <p className="text-gray-300 text-sm">{artwork.subtitle}</p>
          </div>
        </div>
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
      <div className="relative overflow-hidden rounded-3xl p-12 lg:p-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-pink-900/30 backdrop-blur-sm"></div>

        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-96 rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=600&fit=crop" alt="Community" className="w-full h-full object-cover" />
          </div>

          <div className="space-y-6">
            <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight font-heading">Join The Community And Get The Best NFT Collection</h2>

            <button className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-purple-600 transition shadow-lg shadow-purple-500/50">
              JOIN COMMUNITY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
