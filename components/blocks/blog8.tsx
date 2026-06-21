import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
  tags?: string[];
}

interface Blog8Props {
  heading?: string;
  description?: string;
  posts?: Post[];
}

const Blog8 = ({
  heading = "Blog Posts",
  description = "Discover the latest insights and tutorials about modern web development, UI design, and component-driven architecture.",
  posts = [
    {
      id: "post-1",
      title:
        "Building Modern UIs: A Deep Dive into Shadcn and React Components",
      summary:
        "Join us for an in-depth exploration of building modern user interfaces using shadcn/ui and React. Learn best practices and advanced techniques.",
      label: "Web Design",
      author: "Sarah Chen",
      published: "15 Feb 2024",
      url: "https://shadcnblocks.com",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
      tags: ["Web Design", "UI Development"],
    },
    {
      id: "post-2",
      title: "Mastering Tailwind CSS: From Basics to Advanced Techniques",
      summary:
        "Discover how to leverage the full power of Tailwind CSS to create beautiful, responsive websites with clean and maintainable code.",
      label: "Web Design",
      author: "Michael Park",
      published: "22 Feb 2024",
      url: "https://shadcnblocks.com",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&auto=format&fit=crop&q=80",
      tags: ["Web Design", "CSS"],
    },
    {
      id: "post-3",
      title: "The Future of Component-Driven Architecture in 2024",
      summary:
        "Explore the evolving landscape of component-driven development and how it's reshaping the way we build scalable web applications.",
      label: "Architecture",
      author: "Emily Zhang",
      published: "28 Feb 2024",
      url: "https://shadcnblocks.com",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80",
      tags: ["Architecture", "React"],
    },
    {
      id: "post-4",
      title: "Optimizing Performance in Next.js Applications",
      summary:
        "Learn key strategies and best practices for optimizing your Next.js applications for speed, scalability, and exceptional user experiences.",
      label: "Performance",
      author: "James Rodriguez",
      published: "05 Mar 2024",
      url: "https://shadcnblocks.com",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
      tags: ["Next.js", "Performance"],
    },
  ],
}: Blog8Props) => {
  return (
    <section className="min-h-screen bg-[#121212] py-32 px-6 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16">
        <div className="text-center max-w-3xl">
          <span className="font-mono text-[#0f6bff] tracking-widest text-xs uppercase block font-semibold mb-4">
            LATEST INSIGHTS
          </span>
          <h2 className="mb-6 text-pretty text-3xl font-display font-black tracking-tight md:text-4xl lg:max-w-3xl text-white">
            {heading}
          </h2>
          <p className="mx-auto max-w-2xl text-neutral-400 md:text-lg font-display">
            {description}
          </p>
        </div>

        <div className="grid w-full gap-y-10 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="border-0 bg-transparent shadow-none"
            >
              <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
                <div className="sm:col-span-5">
                  <div className="mb-4 md:mb-6">
                    <div className="flex flex-wrap gap-3 text-xs uppercase tracking-wider text-neutral-500 md:gap-5 lg:gap-6 font-mono">
                      {post.tags?.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl font-display text-white">
                    <a
                      href={post.url}
                      target="_blank"
                      className="hover:text-[#FFD200] transition-colors"
                    >
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-4 text-neutral-400 md:mt-5 font-display text-sm md:text-base leading-relaxed">
                    {post.summary}
                  </p>
                  <div className="mt-6 flex items-center space-x-4 text-sm md:mt-8">
                    <span className="text-neutral-500">{post.author}</span>
                    <span className="text-neutral-700">•</span>
                    <span className="text-neutral-500">
                      {post.published}
                    </span>
                  </div>
                  <div className="mt-6 flex items-center space-x-2 md:mt-8">
                    <a
                      href={post.url}
                      target="_blank"
                      className="inline-flex items-center font-semibold hover:text-[#FFD200] transition-colors md:text-base text-white"
                    >
                      <span>Read more</span>
                      <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
                <div className="order-first sm:order-last sm:col-span-5">
                  <a href={post.url} target="_blank" className="block">
                    <div className="aspect-[16/9] overflow-clip rounded-lg border border-neutral-800">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-opacity duration-200 hover:opacity-70"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Blog8 };
