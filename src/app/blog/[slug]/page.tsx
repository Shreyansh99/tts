import { getBlogBySlug, getAllBlogs } from "@/lib/supabase";
import { generateBlogMetadata, generateBlogJsonLd } from "@/lib/seo";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) return {};
  return generateBlogMetadata(blog);
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  
  if (!blog) {
    notFound();
  }
  
  const readTime = Math.ceil(blog.content.split(' ').length / 200);
  const jsonLd = generateBlogJsonLd(blog);
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Button
            variant="ghost"
            className="mb-8 text-teal-primary hover:text-teal-dark hover:bg-teal-light"
            asChild
          >
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {blog.tags?.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-teal-light text-teal-primary">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600">
              {blog.authorName && (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{blog.authorName}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={blog.publishedAt}>
                  {new Date(blog.publishedAt).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{readTime} min read</span>
              </div>
            </div>
          </header>
          
          {/* Cover Image */}
          {blog.coverImageUrl && (
            <div className="aspect-video rounded-2xl overflow-hidden mb-12 shadow-xl">
              <img 
                src={blog.coverImageUrl} 
                alt={blog.coverImageAlt || blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          {/* Content */}
          <div 
            className="prose prose-lg prose-slate max-w-none
              prose-headings:font-display prose-headings:text-navy prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-teal-primary prose-a:no-underline hover:prose-a:underline prose-a:font-medium
              prose-strong:text-navy prose-strong:font-semibold
              prose-ul:my-6 prose-ol:my-6
              prose-li:text-gray-700 prose-li:my-2
              prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
              prose-blockquote:border-l-4 prose-blockquote:border-teal-primary prose-blockquote:bg-teal-light/30 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
              prose-code:text-teal-primary prose-code:bg-teal-light/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-gradient-to-br from-teal-light to-cream rounded-2xl">
            <div className="text-center space-y-4">
              <h3 className="font-display text-2xl font-bold text-navy">
                Ready to Improve Your Dental Health?
              </h3>
              <p className="text-gray-600">
                Book a consultation with our expert team today
              </p>
              <Button
                size="lg"
                className="bg-orange-accent hover:bg-orange-hover text-white font-semibold"
                asChild
              >
                <Link href="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
