import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Blog type definition
export type Blog = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  coverImageUrl?: string;
  coverImageAlt?: string;
  authorName?: string;
  tags?: string[];
  metaTitle?: string;
  metaDescription?: string;
  publishedAt: string;
  updatedAt: string;
};

// Fetch all blogs
export async function getAllBlogs(): Promise<Blog[]> {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .order('publishedAt', { ascending: false });
  
  if (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
  
  return data as Blog[];
}

// Fetch blog by slug
export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .single();
  
  if (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
  
  return data as Blog;
}

// Create new blog
export async function createBlog(payload: Omit<Blog, 'id' | 'publishedAt' | 'updatedAt'>): Promise<Blog | null> {
  const now = new Date().toISOString();
  const { data, error } = await supabase
    .from('blogs')
    .insert({ ...payload, publishedAt: now, updatedAt: now })
    .select()
    .single();
  
  if (error) {
    console.error('Error creating blog:', error);
    return null;
  }
  
  return data as Blog;
}
