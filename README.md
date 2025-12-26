# NFT Marketplace Landing Page

A modern, responsive NFT marketplace landing page built with React and Tailwind CSS.

## Features

- 🎨 Modern UI with gradient backgrounds and glass morphism effects
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⏱️ Live countdown timer for auctions
- 🖼️ Interactive NFT cards with hover effects
- 🎭 Artist showcase section
- 💜 Purple/pink gradient theme matching the design
- ⚡ Built with Vite for fast development

## Project Structure

```
NFT UI/
├── src/
│   ├── components/
│   │   └── LandingPage.jsx    # Main landing page component
│   ├── App.jsx                 # App wrapper
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Components

### LandingPage
Main component that includes:
- **Navbar** - Navigation with wallet connect button
- **HeroSection** - Main banner with stats and featured NFT cards
- **FeaturedArtwork** - Highlighted artwork with live auction timer
- **TrendingSection** - Grid of trending NFT artworks
- **PopularArtists** - Showcase of featured artists
- **CommunitySection** - Call-to-action to join the community
- **Footer** - Links and social media icons

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```js
colors: {
  'nft-purple': '#8b5cf6',
  'nft-dark': '#0f0f23',
}
```

### Images
Replace placeholder images in `LandingPage.jsx` with your own artwork URLs.

### Content
Update text content directly in the component sections.

## Technologies

- React 18
- Tailwind CSS 3
- Vite 5
- Lucide React (for icons)

## Responsive Breakpoints

- Mobile: < 768px (stacked layout)
- Tablet: 768px - 1024px
- Desktop: > 1024px

## License

MIT
