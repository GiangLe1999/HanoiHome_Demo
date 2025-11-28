// components/Header.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Heart,
  ChevronDown,
  Phone,
  List,
  Sparkles,
  Mic,
  Menu,
  X,
} from "lucide-react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileApartmentsOpen, setIsMobileApartmentsOpen] = useState(false);
  const [favoritesCount] = useState(3);
  const [viewedCount] = useState(12);

  return (
    <header className="w-full">
      {/* Top Bar - Ẩn trên mobile nhỏ */}
      <div className="bg-white border-b border-gray-200 hidden sm:block">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:h-12 py-2 sm:py-0 gap-2 sm:gap-6">
            {/* AI Search - Responsive text */}
            <div className="flex items-center text-primary gap-2 w-full sm:w-auto justify-center sm:justify-start">
              <Button className="h-7 px-2 shrink-0">
                <Mic className="w-3 h-3 text-white" />
              </Button>
              <span className="text-[11px] sm:text-[13px] text-center sm:text-left">
                Describe your ideal home, and let our AI do the searching for
                you!
              </span>
            </div>

            {/* Favorites & Viewed - Căn giữa trên mobile */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                href="/favorites"
                className="flex items-center gap-1 text-xs text-gray-600 hover:text-primary transition-colors duration-400 font-semibold"
              >
                <Heart className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">My Favorites</span>
                <span className="xs:hidden">Favorites</span>
                {favoritesCount > 0 && <span>({favoritesCount})</span>}
              </Link>
              <Link
                href="/viewed"
                className="flex items-center gap-1 text-xs text-gray-600 hover:text-primary transition-colors duration-400 font-semibold"
              >
                <List className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Viewed List</span>
                <span className="xs:hidden">Viewed</span>
                {viewedCount > 0 && <span>({viewedCount})</span>}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Logo - Responsive size */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Home Logo Hanoi"
                width={60}
                height={44}
                className="sm:w-20 sm:h-[59px]"
              />
            </Link>

            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
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

                {/* Dropdown Menu - Responsive width */}
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
                      "min-w-[800px] xl:min-w-[1000px] grid grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-6",
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
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Phone Button - Responsive */}
              <Link href="tel:0919570330">
                <Button className="rounded-full px-3 sm:px-6 text-sm sm:text-base font-semibold h-9 sm:h-11">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">0919 570 330</span>
                  <span className="sm:hidden">Call</span>
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden h-9 w-9 sm:h-10 sm:w-10"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden bg-white border-b border-gray-200 overflow-hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container mx-auto px-4 py-4 space-y-1 overflow-y-auto max-h-[75vh]">
          <MobileNavLink
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </MobileNavLink>
          <MobileNavLink
            href="/villas"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Villas
          </MobileNavLink>

          {/* Mobile Apartments Accordion */}
          <div className="border-b border-gray-100">
            <button
              onClick={() => setIsMobileApartmentsOpen(!isMobileApartmentsOpen)}
              className="w-full flex items-center justify-between py-3 px-4 text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors duration-200 font-semibold"
            >
              <span>Apartments</span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform duration-300",
                  isMobileApartmentsOpen && "rotate-180"
                )}
              />
            </button>

            <div
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                isMobileApartmentsOpen
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              )}
            >
              <div className="px-4 pb-3 space-y-4">
                {apartmentCategories.map((category, idx) => (
                  <div key={idx} className="space-y-2">
                    <h3 className="font-semibold text-gray-900 text-xs uppercase tracking-wide">
                      {category.title}
                    </h3>
                    <ul className="space-y-1 pl-2">
                      {category.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <Link
                            href={`/apartments/${item
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="text-sm text-gray-600 hover:text-primary transition-colors duration-200 block py-1.5"
                            onClick={() => setIsMobileMenuOpen(false)}
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

          <MobileNavLink
            href="/houses"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Houses
          </MobileNavLink>
          <MobileNavLink
            href="/blogs"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blogs
          </MobileNavLink>
          <MobileNavLink
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </MobileNavLink>

          {/* Mobile Quick Links */}
          <div className="pt-4 mt-4 border-t border-gray-200 space-y-2">
            <Link
              href="/favorites"
              className="flex items-center gap-2 py-3 px-4 text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors duration-200 font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Heart className="w-4 h-4" />
              <span>My Favorites</span>
              {favoritesCount > 0 && (
                <span className="ml-auto text-sm">({favoritesCount})</span>
              )}
            </Link>
            <Link
              href="/viewed"
              className="flex items-center gap-2 py-3 px-4 text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors duration-200 font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <List className="w-4 h-4" />
              <span>Viewed List</span>
              {viewedCount > 0 && (
                <span className="ml-auto text-sm">({viewedCount})</span>
              )}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

// Component NavLink (Desktop)
const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="relative p-2 text-gray-600 hover:text-primary transition-colors duration-400 font-semibold group whitespace-nowrap"
  >
    {children}
    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-0.5 bg-primary origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out" />
  </Link>
);

// Component Mobile NavLink
const MobileNavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className="block py-3 px-4 text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors duration-200 font-semibold border-b border-gray-100"
  >
    {children}
  </Link>
);

export default Header;
