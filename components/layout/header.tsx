// components/Header.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Heart, ChevronDown, Phone, List, Sparkles, Mic } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Image from "next/image";

// Data cho dropdown Apartments
const apartmentCategories = [
  {
    title: "Vinhomes Condos",
    items: [
      "Vinhomes Nguyen Chi Thanh",
      "Vinhomes D'Capitale",
      "Vinhomes Symphony",
      "Vinhomes Skylake",
      "Vinhomes Metropolis Lieu Giai",
      "Park Hill Times City",
      "Royal City",
      "Vinhomes Westpoint",
      "Vinhomes Greenbay",
    ],
  },
  {
    title: "Apartment in high-rise Condos",
    items: [
      "Starlake Tay Ho",
      "Sunshine City",
      "Ciputra Hanoi",
      "Ecopark",
      "Golden Westlake Hanoi",
      "Keangnam Hanoi",
      "Thang Long Number One",
      "Splendora An Khanh",
      "Indochina Plaza Hanoi",
      "Watermark",
      "Mandarin Garden",
      "Home City 177 Trung Kinh",
      "Golden Palace",
      "Hong Kong tower",
    ],
  },
  {
    title: "Serviced Apartments",
    items: [
      "Apartments in Tay Ho Westlake",
      "Apartments in Truc Bach",
      "Apartment in Thanh Xuan",
      "Apartments in Ba Dinh",
      "Apartment in Cau Giay",
      "Apartment in Hoan Kiem",
      "Apartments in Dong Da",
      "Apartment in Hai Ba Trung",
      "Apartments in Ha Dong",
    ],
  },
  {
    title: "Luxury Serviced Apartments",
    items: [
      "Somerset Westpoint Hanoi",
      "Oak Wood Residence Hanoi",
      "Diamond Westlake Suites Hanoi",
      "Elegant Suites Westlake",
      "Fraser Suites Hanoi",
      "Hanoi Lake View Suites",
    ],
  },
];

const Header = () => {
  const [isApartmentsOpen, setIsApartmentsOpen] = useState(false);
  const [favoritesCount] = useState(3);
  const [viewedCount] = useState(12);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-12 gap-6">
            <div className="flex items-center text-primary gap-2">
              <Button className="h-7 px-2!">
                <Mic className="w-3 h-3 text-white" />
              </Button>

              <span className="text-[13px]">
                Describe your ideal home, and let our AI do the searching for
                you!
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/favorites"
                className="flex items-center gap-1 text-xs text-gray-600 hover:text-primary transition-colors duration-400 font-semibold"
              >
                <Heart className="w-3.5 h-3.5" />
                <span>My Favorites</span>
                {favoritesCount > 0 && <span>({favoritesCount})</span>}
              </Link>
              <Link
                href="/viewed"
                className="flex items-center gap-1 text-xs text-gray-600 hover:text-primary transition-colors duration-400 font-semibold"
              >
                <List className="w-3.5 h-3.5" />
                <span>Viewed List</span>
                {viewedCount > 0 && <span>({viewedCount})</span>}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Home Logo Hanoi"
                width={80}
                height={59}
              />
            </Link>

            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center gap-8">
              <NavLink href="/about">About Us</NavLink>
              <NavLink href="/villas">Villas</NavLink>

              {/* Apartments với Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsApartmentsOpen(true)}
                onMouseLeave={() => setIsApartmentsOpen(false)}
              >
                <button
                  className={cn(
                    "group relative flex items-center gap-1 px-2 py-2 text-gray-600 hover:text-primary transition-colors duration-400 font-semibold",
                    isApartmentsOpen && "text-primary"
                  )}
                >
                  Apartments
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 transition-transform duration-300 mt-px",
                      isApartmentsOpen && "rotate-180"
                    )}
                  />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-0.5 bg-primary origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out" />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={cn(
                    "absolute top-[114%] left-1/2 -translate-x-1/2 pt-2 z-50",
                    "transition-all duration-300 ease-out",
                    isApartmentsOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  )}
                >
                  <div
                    className={cn(
                      "bg-white rounded-lg shadow-xl border border-gray-200 p-6",
                      "min-w-[1000px] grid grid-cols-4 gap-6",
                      "transition-all duration-300 ease-out origin-top",
                      isApartmentsOpen ? "scale-100" : "scale-95"
                    )}
                  >
                    {apartmentCategories.map((category, idx) => (
                      <div key={idx} className="space-y-3">
                        <h3 className="font-semibold text-gray-900 text-[13px] border-b border-gray-200 pb-2">
                          {category.title}
                        </h3>
                        <ul className="space-y-1">
                          {category.items.map((item, itemIdx) => (
                            <li
                              key={itemIdx}
                              className={cn(
                                "transition-all duration-300",
                                isApartmentsOpen
                                  ? "opacity-100 translate-y-0"
                                  : "opacity-0 translate-y-2"
                              )}
                              style={{
                                transitionDelay: isApartmentsOpen
                                  ? `${itemIdx * 20}ms`
                                  : "0ms",
                              }}
                            >
                              <Link
                                href={`/apartments/${item
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
                                className="text-xs text-gray-600 hover:text-primary transition-colors duration-400 block py-1"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <NavLink href="/houses">Houses</NavLink>
              <NavLink href="/blogs">Blogs</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </nav>

            {/* Right Side Buttons */}
            <div className="flex items-center gap-3">
              <Link href="tel:0919570330">
                <Button className="rounded-full px-6! text-base font-semibold h-11">
                  <Phone />
                  0919 570 330
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// Component NavLink
const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="relative p-2 text-gray-600 hover:text-primary transition-colors duration-400 font-semibold group"
  >
    {children}
    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-0.5 bg-primary origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out" />
  </Link>
);

export default Header;
