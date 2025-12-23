# The Tooth Sanctuary - Dental Website

A modern, SEO-optimized dental website built with Next.js 15, featuring the East Village Dental design aesthetic with Swish Dental's vibrant teal and orange color palette.

## 🎨 Design Features

- **Color Palette**: Swish Dental colors (Teal #00A9A5 + Orange #FF6B35)
- **Typography**: Inter (body) + Poppins (headings)
- **UI Components**: shadcn/ui with Tailwind CSS v4
- **Design Style**: Clean, modern, professional with smooth animations

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Backend**: Supabase (for blog)
- **Fonts**: Google Fonts (Inter, Poppins)

## 📦 Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   NEXT_PUBLIC_SITE_URL=https://thetoothsanctuary.co.uk
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗂️ Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with SEO
│   ├── page.tsx                # Homepage
│   ├── about/page.tsx          # About page
│   ├── services/page.tsx       # Services listing
│   ├── blog/
│   │   ├── page.tsx            # Blog listing
│   │   └── [slug]/page.tsx     # Blog detail
│   ├── contact/page.tsx        # Contact page
│   ├── robots.ts               # SEO robots
│   └── sitemap.ts              # Dynamic sitemap
├── components/
│   ├── ui/                     # shadcn components
│   ├── layout/
│   │   ├── Header.tsx          # Navigation header
│   │   └── Footer.tsx          # Footer with links
│   └── home/
│       ├── Hero.tsx            # Hero section
│       ├── Services.tsx        # Services grid
│       ├── About.tsx           # About section
│       ├── Testimonials.tsx    # Patient reviews
│       └── CTA.tsx             # Call-to-action
├── lib/
│   ├── supabase.ts             # Supabase client
│   ├── seo.ts                  # SEO helpers
│   └── utils.ts                # Utility functions
└── globals.css                 # Global styles
```

## 🎯 Key Features

### Homepage
- **Hero Section**: Eye-catching gradient background with CTAs and trust badges
- **Services Grid**: 6 comprehensive dental services with icons
- **About Section**: Practice introduction with values
- **Testimonials**: Patient reviews with star ratings
- **CTA Section**: Prominent call-to-action with gradient background

### Blog System
- **Supabase Integration**: Full CRUD operations for blog posts
- **SEO Optimized**: Meta tags, OpenGraph, Twitter cards, JSON-LD
- **ISR**: Incremental Static Regeneration (revalidates every hour)
- **Rich Typography**: Beautiful prose styling for blog content

### SEO Features
- **Metadata API**: Comprehensive SEO for all pages
- **Local Business Schema**: Structured data for dental practice
- **Dynamic Sitemap**: Auto-generated with blog posts
- **Robots.txt**: Search engine crawling configuration
- **OpenGraph Images**: Social media sharing optimization

### Design System
- **Swish Colors**:
  - Teal Primary: `#00A9A5`
  - Teal Dark: `#007C7A`
  - Teal Light: `#E0F7F6`
  - Orange Accent: `#FF6B35`
  - Orange Hover: `#E55A2B`
  - Cream: `#FFF8F0`
  - Navy: `#1A2332`

## 🗄️ Supabase Setup

### Database Schema

Create a `blogs` table in your Supabase project:

```sql
create table blogs (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  slug text unique not null,
  excerpt text,
  content text not null,
  "coverImageUrl" text,
  "coverImageAlt" text,
  "authorName" text,
  tags text[],
  "metaTitle" text,
  "metaDescription" text,
  "publishedAt" timestamp with time zone default now(),
  "updatedAt" timestamp with time zone default now()
);

-- Enable Row Level Security
alter table blogs enable row level security;

-- Create policy to allow public read access
create policy "Allow public read access"
  on blogs for select
  to public
  using (true);
```

## 📱 Pages

- **/** - Homepage with all sections
- **/about** - About the practice
- **/services** - Services listing
- **/blog** - Blog listing (with Supabase)
- **/blog/[slug]** - Individual blog posts
- **/contact** - Contact form and information

## 🎨 Color Usage

- **Primary Actions**: Orange accent (`bg-orange-accent`)
- **Secondary Actions**: Teal primary (`bg-teal-primary`)
- **Backgrounds**: Teal light, Cream
- **Text**: Navy (headings), Gray (body)
- **Hover States**: Teal dark, Orange hover

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## 📝 Customization

### Update Practice Information

Edit the following files:
- `src/lib/seo.ts` - Update practice details in schema
- `src/components/layout/Footer.tsx` - Update contact info
- `src/app/layout.tsx` - Update metadata

### Add More Services

Edit `src/components/home/Services.tsx` and `src/app/services/page.tsx`

### Customize Colors

Edit `src/app/globals.css` - Update CSS variables in `:root`

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is created for The Tooth Sanctuary dental practice.

## 🙏 Credits

- Design inspired by [East Village Dental](https://eastvillagedental.co.uk/)
- Color palette from [Swish Dental](https://www.optimizepress.com/inspiration/swish-dental-website/)
- Built with [Next.js](https://nextjs.org/), [shadcn/ui](https://ui.shadcn.com/), and [Tailwind CSS](https://tailwindcss.com/)
