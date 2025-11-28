"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const locations = [
  {
    id: 1,
    name: "Hoan Kiem",
    propertyCount: 342,
    image: "/images/home-page/hoan-kiem.jpg",
  },
  {
    id: 2,
    name: "Ba Dinh",
    propertyCount: 287,
    image: "/images/home-page/ba-dinh.jpg",
  },
  {
    id: 3,
    name: "Tay Ho",
    propertyCount: 456,
    image: "/images/home-page/tay-ho.jpg",
  },
  {
    id: 4,
    name: "Cau Giay",
    propertyCount: 523,
    image: "/images/home-page/cau-giay.jpg",
  },
  {
    id: 5,
    name: "Dong Da",
    propertyCount: 398,
    image: "/images/home-page/dong-da.jpg",
  },
  {
    id: 6,
    name: "Hai Ba Trung",
    propertyCount: 312,
    image: "/images/home-page/hai-ba-trung.jpg",
  },
  {
    id: 7,
    name: "Thanh Xuan",
    propertyCount: 267,
    image: "/images/home-page/thanh-xuan.jpg",
  },
  {
    id: 8,
    name: "Long Bien",
    propertyCount: 189,
    image: "/images/home-page/long-bien.jpg",
  },
  {
    id: 9,
    name: "Nam Tu Liem",
    propertyCount: 445,
    image: "/images/home-page/nam-tu-liem.jpg",
  },
  {
    id: 10,
    name: "Ha Dong",
    propertyCount: 378,
    image: "/images/home-page/ha-dong.jpg",
  },
];

export default function LocationCarousel() {
  return (
    <section className="py-16 bg-[#FFFFFF]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-primary text-3xl font-semibold tracking-wider mb-2 font-tangerine">
            Top Locations
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            To Rent Properties in HaNoi
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 px-1 py-3">
            {locations.map((location) => (
              <CarouselItem
                key={location.id}
                className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <Link href={`/locations/${location.id}`}>
                  <Card className="group cursor-pointer overflow-hidden border-0 shadow-md p-0">
                    <CardContent className="p-0 relative">
                      <div className="aspect-3/2 relative overflow-hidden">
                        <Image
                          src={location.image}
                          alt={location.name}
                          fill
                          className="object-cover group-hover:scale-120 transition-transform duration-400"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="text-xl font-semibold mb-1">
                            {location.name}
                          </h3>
                          <p className="text-sm text-gray-200">
                            {location.propertyCount.toLocaleString()} properties
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4.5 bg-white shadow-lg hover:bg-gray-50" />
          <CarouselNext className="hidden md:flex -right-2.5 bg-white shadow-lg hover:bg-gray-50" />
        </Carousel>
      </div>
    </section>
  );
}
