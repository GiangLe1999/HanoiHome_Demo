"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CustomBed from "@/components/ui/icons/custom-bed";
import CustomBathTub from "@/components/ui/icons/custom-bath-tub";
import CustomSquare from "@/components/ui/icons/custom-square";

const properties = [
  {
    id: 1,
    title: "Casa Lomas De Machalí Machas",
    address: "145 Brooklyn Ave, California, New York",
    price: 7250.0,
    beds: 3,
    baths: 2,
    sqft: 1150,
    image: "/images/home-page/test-property-thumb.jpg",
    featured: true,
    category: "apartment",
    agent: {
      name: "Arlene McCoy",
      avatar: "/images/home-page/test-avt.png",
    },
  },
  {
    id: 2,
    title: "Casa Lomas De Machalí Machas",
    address: "145 Brooklyn Ave, California, New York",
    price: 7250.0,
    beds: 3,
    baths: 2,
    sqft: 1150,
    image: "/images/home-page/test-property-thumb.jpg",
    featured: true,
    category: "villa",
    agent: {
      name: "Arlene McCoy",
      avatar: "/images/home-page/test-avt.png",
    },
  },
  {
    id: 3,
    title: "Casa Lomas De Machalí Machas",
    address: "145 Brooklyn Ave, California, New York",
    price: 7250.0,
    beds: 3,
    baths: 2,
    sqft: 1150,
    image: "/images/home-page/test-property-thumb.jpg",
    featured: false,
    category: "house",
    agent: {
      name: "Arlene McCoy",
      avatar: "/images/home-page/test-avt.png",
    },
  },
  {
    id: 4,
    title: "Casa Lomas De Machalí Machas",
    address: "145 Brooklyn Ave, California, New York",
    price: 7250.0,
    beds: 3,
    baths: 2,
    sqft: 1150,
    image: "/images/home-page/test-property-thumb.jpg",
    featured: true,
    category: "apartment",
    agent: {
      name: "Arlene McCoy",
      avatar: "/images/home-page/test-avt.png",
    },
  },
  {
    id: 5,
    title: "Casa Lomas De Machalí Machas",
    address: "145 Brooklyn Ave, California, New York",
    price: 7250.0,
    beds: 3,
    baths: 2,
    sqft: 1150,
    image: "/images/home-page/test-property-thumb.jpg",
    featured: true,
    category: "villa",
    agent: {
      name: "Arlene McCoy",
      avatar: "/images/home-page/test-avt.png",
    },
  },
  {
    id: 6,
    title: "Casa Lomas De Machalí Machas",
    address: "145 Brooklyn Ave, California, New York",
    price: 7250.0,
    beds: 3,
    baths: 2,
    sqft: 1150,
    image: "/images/home-page/test-property-thumb.jpg",
    featured: true,
    category: "studio",
    agent: {
      name: "Arlene McCoy",
      avatar: "/images/home-page/test-avt.png",
    },
  },
];

export default function TopProperties() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fId) => fId !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-16 bg-[#FFFFFF]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-primary text-3xl font-semibold tracking-wider mb-2 font-tangerine">
            Top Properties
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Best Property Value
          </h2>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <Card
              key={property.id}
              className="group py-0 overflow-hidden border-0 shadow-sm hover:shadow-lg transition-shadow duration-400"
            >
              {/* Image Container */}
              <Link
                href={`/properties/${property.id}`}
                className="relative aspect-3/2 overflow-hidden"
              >
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-400"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                {/* Top badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {property.featured && (
                    <Badge className="bg-primary text-white text-[13px]">
                      Featured
                    </Badge>
                  )}

                  <Badge className="text-white text-[13px] bg-black/30">
                    For Rent
                  </Badge>
                </div>

                {/* Favorite button */}
                <button
                  onClick={() => toggleFavorite(property.id)}
                  className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      favorites.includes(property.id)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-600"
                    }`}
                  />
                </button>

                {/* Address on image */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center gap-1 text-white/90 text-sm">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate text-xs">{property.address}</span>
                  </div>
                </div>
              </Link>

              <CardContent className="px-4 py-6">
                {/* Title */}
                <Link href={`/properties/${property.id}`}>
                  <h3 className="font-semibold text-gray-900 text-lg hover:text-primary transition-colors line-clamp-1 mb-3">
                    {property.title}
                  </h3>
                </Link>

                {/* Features */}
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1.5">
                    <CustomBed className="w-3.5 h-3.5 text-gray-300" />
                    <span>
                      Beds: <span className="text-black">{property.beds}</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CustomBathTub className="w-3.5 h-3 text-gray-300" />
                    <span>
                      Baths:{" "}
                      <span className="text-black">{property.baths}</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <CustomSquare className="w-4 h-4 text-gray-300" />
                    <span>
                      Sqft: <span className="text-black">{property.sqft}</span>
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    {/* Agent */}
                    <div className="flex items-center gap-2">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={property.agent.avatar} />
                        <AvatarFallback className="bg-primary/10 text-primary text-xs">
                          {property.agent.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-gray-600">
                        {property.agent.name}
                      </span>
                    </div>

                    {/* Price */}
                    <p className="text-xl font-bold text-primary">
                      ${property.price.toLocaleString()}
                      <span className="font-bold text-2xl font-tangerine">
                        /month
                      </span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <Button asChild className="px-8 py-6 rounded-full">
            <Link href="/properties">
              View All Properties
              <span className="ml-2">→</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
