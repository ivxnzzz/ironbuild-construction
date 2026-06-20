# IronBuild Construction Group

A premium construction company website built with Next.js, featuring a warm industrial luxury design with copper/bronze accents.

![IronBuild Construction Group](https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80)

## Live Demo

[View Live Site](https://ironbuild-construction.vercel.app)

## Features

- **Responsive Design** — Optimized for all screen sizes (mobile, tablet, desktop)
- **Modern UI** — Warm industrial luxury aesthetic with copper/bronze accents
- **Smooth Animations** — Framer Motion for scroll-triggered and hover animations
- **Contact Form** — Fully functional form with validation and success state
- **SEO Optimized** — Meta tags, Open Graph, semantic HTML
- **Performance** — Static generation, optimized images, fast loading

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Fonts:** Space Grotesk + Playfair Display

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/ironbuild-construction.git

# Navigate to project directory
cd ironbuild-construction

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with fonts and metadata
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles and theme
├── components/
│   ├── Navbar.tsx        # Navigation with mobile menu
│   ├── Hero.tsx          # Hero section with stats
│   ├── About.tsx         # About section
│   ├── Services.tsx      # Services grid
│   ├── ServiceCard.tsx   # Individual service card
│   ├── Projects.tsx      # Featured projects
│   ├── ProjectCard.tsx   # Individual project card
│   ├── WhyChooseUs.tsx   # Trust section
│   ├── Process.tsx       # Construction process steps
│   ├── Testimonials.tsx  # Client testimonials
│   ├── TrustBadges.tsx   # Trust badges
│   ├── Contact.tsx       # Contact section with map
│   ├── ContactForm.tsx   # Lead capture form
│   ├── Footer.tsx        # Footer with links
│   └── ui/               # shadcn/ui components
└── lib/
    ├── constants.ts      # Project data and content
    └── utils.ts          # Utility functions
```

## Sections

1. **Navigation** — Sticky navbar with mobile hamburger menu
2. **Hero** — Full-screen hero with construction imagery and stats
3. **About** — Company story with team image
4. **Services** — 6 service cards with icons
5. **Projects** — 3 featured project cards with images
6. **Why Choose Us** — 4 trust points
7. **Process** — 4-step construction process
8. **Testimonials** — 3 client reviews
9. **Trust Badges** — Licensed, Insured, Certified, Guaranteed
10. **Contact** — Form + contact info + office image
11. **Footer** — Navigation, services, contact links

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm run start
```

## Customization

### Colors

Edit `src/app/globals.css` to change the color scheme:

```css
:root {
  --background: #131110;    /* Dark charcoal */
  --foreground: #f5f0eb;    /* Warm white */
  --primary: #c9844c;       /* Copper accent */
  --card: #1c1917;          /* Card background */
}
```

### Content

Edit `src/lib/constants.ts` to update:
- Services
- Projects
- Testimonials
- Contact information
- Navigation links

### Images

Replace Unsplash URLs in components with your own images.

## License

MIT License.

## Contact

IronBuild Construction Group
- Email: hello@ironbuildconstruction.com
- Phone: (02) 5555 6789
- Location: Sydney, Australia
