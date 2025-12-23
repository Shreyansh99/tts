import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thetoothsanctuary.co.uk';

// Generate metadata for blog posts
export function generateBlogMetadata(blog: {
  title: string;
  excerpt?: string;
  coverImageUrl?: string;
  slug: string;
}): Metadata {
  return {
    title: blog.title,
    description: blog.excerpt || blog.title,
    openGraph: {
      title: blog.title,
      description: blog.excerpt || blog.title,
      url: `${siteUrl}/blog/${blog.slug}`,
      type: 'article',
      images: blog.coverImageUrl ? [{
        url: blog.coverImageUrl,
        width: 1200,
        height: 630,
        alt: blog.title,
      }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt || blog.title,
      images: blog.coverImageUrl ? [blog.coverImageUrl] : [],
    },
    alternates: {
      canonical: `${siteUrl}/blog/${blog.slug}`,
    },
  };
}

// Generate JSON-LD structured data for blog posts
export function generateBlogJsonLd(blog: {
  title: string;
  excerpt?: string;
  content: string;
  coverImageUrl?: string;
  authorName?: string;
  publishedAt: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.excerpt,
    image: blog.coverImageUrl,
    author: {
      '@type': 'Person',
      name: blog.authorName || 'The Tooth Sanctuary',
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Tooth Sanctuary',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/icons/image.png`,
      },
    },
    datePublished: blog.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${blog.slug}`,
    },
  };
}

// Generate local business schema
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'The Tooth Sanctuary',
    image: `${siteUrl}/icons/image.png`,
    '@id': siteUrl,
    url: siteUrl,
    telephone: '+442082056690',
    priceRange: '££',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '222-224 Edgware Rd',
      addressLocality: 'London',
      postalCode: 'NW9 6LG',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.5884074,
      longitude: -0.2518498,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/toothsanctuary',
      'https://www.instagram.com/toothsanctuary',
      'https://twitter.com/toothsanctuary',
    ],
  };
}
