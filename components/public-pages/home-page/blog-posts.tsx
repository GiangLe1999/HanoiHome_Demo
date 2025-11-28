"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const blogPosts = [
  {
    id: 1,
    date: "January 28, 2024",
    author: "Jerome Bell",
    category: "Furniture",
    title: "Building Gains Into Housing Stocks And How To Trade The Sector",
    excerpt:
      "The average contract interest rate for 30-year fixed-rate mortgages with conforming loan balances...",
    image: "/images/home-page/blog/test-blog-thumb-1.jpg",
    slug: "building-gains-into-housing-stocks",
  },
  {
    id: 2,
    date: "January 28, 2024",
    author: "Jerome Bell",
    category: "Furniture",
    title: "Building Gains Into Housing Stocks And How To Trade The Sector",
    excerpt:
      "The average contract interest rate for 30-year fixed-rate mortgages with conforming loan balances...",
    image: "/images/home-page/blog/test-blog-thumb-2.jpg",
    slug: "building-gains-into-housing-stocks-2",
  },
  {
    id: 3,
    date: "January 28, 2024",
    author: "Jerome Bell",
    category: "Furniture",
    title: "Building Gains Into Housing Stocks And How To Trade The Sector",
    excerpt:
      "The average contract interest rate for 30-year fixed-rate mortgages with conforming loan balances...",
    image: "/images/home-page/blog/test-blog-thumb-3.jpg",
    slug: "building-gains-into-housing-stocks-3",
  },
];

export default function BlogPosts() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-primary text-3xl font-semibold tracking-wider mb-2 font-tangerine">
            Latest News
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            From Our Blog
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="group border-0 shadow-none overflow-hidden">
                {/* Image Container */}
                <div className="relative aspect-4/3 overflow-hidden rounded-xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-400"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Date Badge */}
                  <Badge className="absolute top-4 left-4 bg-primary hover:bg-primary text-white text-xs font-medium px-3 py-1.5 rounded-full">
                    {post.date}
                  </Badge>
                </div>

                {/* Content */}
                <CardContent className="px-1 pt-5 pb-2">
                  {/* Author & Category */}
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                    <span className="font-medium text-slate-700">
                      {post.author}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span>{post.category}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-slate-500 line-clamp-2">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
