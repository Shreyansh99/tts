import { getAllBlogs } from "@/lib/supabase";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Health Blog",
  description: "Expert advice, tips, and insights on dental health, oral hygiene, and the latest treatments.",
};

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
  const blogs = await getAllBlogs();
  
  return (
    <div className="py-16 md:py-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
            Dental Health <span className="text-teal-primary">Blog</span>
          </h1>
          <p className="text-lg text-gray-600">
            Expert advice and insights to help you maintain optimal oral health
          </p>
        </div>
        
        {blogs.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-teal-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="font-display text-2xl font-semibold text-navy mb-2">No blog posts yet</h2>
            <p className="text-gray-600">Check back soon for expert dental health advice and tips!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link key={blog.id} href={`/blog/${blog.slug}`}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden group border-gray-200 hover:border-teal-primary">
                  {blog.coverImageUrl && (
                    <div className="aspect-video overflow-hidden bg-gradient-to-br from-teal-light to-cream">
                      <img 
                        src={blog.coverImageUrl} 
                        alt={blog.coverImageAlt || blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      {blog.tags?.[0] && (
                        <Badge variant="secondary" className="bg-teal-light text-teal-primary hover:bg-teal-primary hover:text-white">
                          {blog.tags[0]}
                        </Badge>
                      )}
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(blog.publishedAt).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </div>
                    </div>
                    
                    <h2 className="font-display text-xl font-semibold text-navy mb-2 group-hover:text-teal-primary transition-colors line-clamp-2">
                      {blog.title}
                    </h2>
                    
                    {blog.excerpt && (
                      <p className="text-gray-600 line-clamp-3 leading-relaxed">
                        {blog.excerpt}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
