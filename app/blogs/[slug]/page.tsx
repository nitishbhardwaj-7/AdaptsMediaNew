import { getSinglePost } from "@/lib/getPosts";
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};


// This function replaces the "Create Next App" default with real blog data
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getSinglePost(slug);

  if (!post) return { title: "Post Not Found" };

  const yoast = post.yoast_head_json;

  return {
    // 1. Titles & Descriptions
    title: yoast?.title || post.title.rendered,
    description: yoast?.description || "Read more about this insight...",

    // 2. Canonicals (The SEO Team's priority)
    alternates: {
      canonical: yoast?.canonical || `https://adaptsmedia.com/blog/${slug}`,
    },

    // 3. Social Media (Open Graph)
    openGraph: {
      title: yoast?.og_title || yoast?.title || post.title.rendered,
      description: yoast?.og_description || yoast?.description,
      url: yoast?.og_url || `https://adaptsmedia.com/blog/${slug}`,
      siteName: yoast?.og_site_name || 'Adapts Media',
      type: 'article',
      images: [
        {
          url: yoast?.og_image?.[0]?.url || post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/default-og.jpg",
        },
      ],
    },

    // 4. Search Engine Instructions
    robots: {
      index: yoast?.robots?.index !== 'noindex',
      follow: yoast?.robots?.follow !== 'nofollow',
    }
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getSinglePost(resolvedParams.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Post not found
      </div>
    );
  }

  return (
    <>
      {post.yoast_head_json?.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(post.yoast_head_json.schema) }}
        />
      )}

      <article className="bg-black min-h-screen text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          <div className="relative w-full h-[400px] mb-10 rounded-2xl overflow-hidden">
            <img 
              src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url} 
              alt={post.title.rendered} 
              className="w-full h-auto object-cover" 
            />
          </div>

          {/* Title */}
          <h1 
            className="text-4xl md:text-6xl font-bold mb-8"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }} 
          />

          {/* Content */}
          <div className="max-w-4xl mx-auto py-10 bg-black text-white">
            <div className="
              /* Style Paragraphs */
              [&_p]:text-gray-300 [&_p]:leading-relaxed [&_p]:mb-6 [&_p]:text-lg
              
              /* Style Headings */
              [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:text-white [&_h1]:mb-8
              [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:text-[#f5a623] [&_h2]:mt-10 [&_h2]:mb-4
              [&_h3]:text-2xl [&_h3]:font-medium [&_h3]:text-[#f5a623] [&_h3]:mt-8 [&_h3]:mb-3
              
              /* Style Lists */
              [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-6 [&_ul]:space-y-2
              [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:mb-6 [&_ol]:space-y-2
              [&_li]:text-gray-300
              
              /* Style Links */
              [&_a]:text-[#f5a623] [&_a]:underline hover:[&_a]:text-white
              
              /* Style Images inside content */
              [&_img]:rounded-2xl [&_img]:my-8 [&_img]:w-full [&_img]:h-auto
              
              /* Style Bold Text */
              [&_strong]:text-white [&_strong]:font-bold
            ">
              <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}