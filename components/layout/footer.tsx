"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { MapPin, Phone, Mail, Send, ChevronDown } from "lucide-react";
import Image from "next/image";
import CustomFacebook from "../ui/icons/custom-facebook";
import CustomLinkedin from "../ui/icons/custom-linkedin";
import CustomX from "../ui/icons/custom-x";
import CustomIns from "../ui/icons/custom-ins";
import CustomPhone from "../ui/icons/custom-phone";
import CustomMail from "../ui/icons/custom-mail";
import CustomMap from "../ui/icons/custom-map";

const apartments = [
  { label: "Vinhomes Condos", href: "/apartments/vinhomes-condos" },
  {
    label: "Apartment in high-rise Condos",
    href: "/apartments/high-rise-condos",
  },
  { label: "Serviced Apartments", href: "/apartments/serviced" },
  { label: "Luxury Serviced Apartments", href: "/apartments/luxury-serviced" },
];

const villas = {
  visible: [
    { label: "Villas in Ciputra", href: "/villas/ciputra" },
    { label: "Villas in Tay Ho Westlake", href: "/villas/tay-ho-westlake" },
    { label: "Villas in Splendora", href: "/villas/splendora" },
    { label: "Vinhomes Riverside", href: "/villas/vinhomes-riverside" },
  ],
  hidden: [{ label: "Villas in Ba Dinh", href: "/villas/ba-dinh" }],
};

const houses = {
  visible: [
    { label: "Houses in Tay Ho", href: "/houses/tay-ho" },
    { label: "Houses in Ciputra", href: "/houses/ciputra" },
    { label: "Houses in Splendora", href: "/houses/splendora" },
    { label: "Houses in Cau Giay", href: "/houses/cau-giay" },
  ],
  hidden: [
    {
      label: "Houses in The Manor Central Park",
      href: "/houses/manor-central-park",
    },
  ],
};

const locations = {
  visible: [
    { label: "Dong Da", href: "/location/dong-da" },
    { label: "Ciputra", href: "/location/ciputra" },
    { label: "Splendora", href: "/location/splendora" },
    { label: "Truc Bach", href: "/location/truc-bach" },
  ],
  hidden: [{ label: "Tay Ho", href: "/location/tay-ho" }],
};

const collections = [
  { label: "New properties list", href: "/collections/new" },
  { label: "Popular property list", href: "/collections/popular" },
  { label: "Saleoff property list", href: "/collections/saleoff" },
  { label: "Find property in collection", href: "/collections/find" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "What's On", href: "/whats-on" },
  { label: "Discovery Vietnam", href: "/discovery-vietnam" },
  { label: "Must know", href: "/must-know" },
  { label: "Our Photos", href: "/photos" },
  { label: "Our Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

const socialLinks = [
  { icon: CustomFacebook, href: "https://facebook.com", label: "Facebook" },
  { icon: CustomLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: CustomX, href: "https://twitter.com", label: "Twitter" },
  { icon: CustomIns, href: "https://instagram.com", label: "Instagram" },
];

interface ExpandableLinkListProps {
  title: string;
  visible: { label: string; href: string }[];
  hidden?: { label: string; href: string }[];
}

function ExpandableLinkList({
  title,
  visible,
  hidden,
}: ExpandableLinkListProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h4 className="text-primary font-semibold text-base mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {visible.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-sm text-gray-500 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {hidden && hidden.length > 0 && (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleContent>
            <ul className="space-y-2.5 mt-2.5">
              {hidden.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </CollapsibleContent>
          <CollapsibleTrigger asChild>
            <button className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 mt-3 transition-colors">
              <span>{isOpen ? "Show less" : "... Show more"}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </CollapsibleTrigger>
        </Collapsible>
      )}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-white border-t">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        {/* Top Section - Property Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6 pb-12 border-b border-gray-200">
          {/* Apartments */}
          <ExpandableLinkList title="Apartments" visible={apartments} />

          {/* Villas */}
          <ExpandableLinkList
            title="Villas"
            visible={villas.visible}
            hidden={villas.hidden}
          />

          {/* Houses */}
          <ExpandableLinkList
            title="Houses"
            visible={houses.visible}
            hidden={houses.hidden}
          />

          {/* Location */}
          <ExpandableLinkList
            title="Location"
            visible={locations.visible}
            hidden={locations.hidden}
          />

          {/* Collections */}
          <ExpandableLinkList title="Collections" visible={collections} />

          {/* Quick Links */}
          <ExpandableLinkList title="Quick Links" visible={quickLinks} />
        </div>

        {/* Bottom Section - Company Info & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 pt-12">
          {/* Company Info */}
          <div className="space-y-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/images/logo.png"
                  alt="Home Logo Hanoi"
                  width={80}
                  height={59}
                />
              </Link>
              <div>
                <h3 className="text-primary font-bold text-lg">HaNoi Home</h3>
                <p className="text-xs text-slate-400">Real Estate Agency</p>
              </div>
            </Link>

            <p className="text-sm text-gray-500 leading-relaxed">
              Specialized in providing high-class real estate services for those
              in need. Our services are provided by our professional team.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-base mb-4">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <CustomMap className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
                <span className="text-gray-500">
                  No 31/6 Trinh Cong Son St, Tay Ho Ward , Hanoi
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <CustomPhone className="w-4 h-4 text-gray-500 shrink-0" />
                <span className="text-gray-500"> +84 919570330</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <CustomMail className="w-4 h-4 text-gray-500 shrink-0" />
                <span className="text-gray-500">info@hanoihome.com.vn</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary flex items-center justify-center transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4">
              Newsletter
            </h4>
            <p className="text-sm text-slate-400 mb-4">
              Your Weekly/Monthly Dose of Knowledge and Inspiration.
            </p>

            {/* Newsletter Form */}
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-primary"
              />
              <Button
                size="icon"
                className="bg-primary hover:bg-primary/90 text-white shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              ©{new Date().getFullYear()} Homelengo. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/terms"
                className="text-sm text-slate-500 hover:text-primary transition-colors"
              >
                Terms Of Services
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-slate-500 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookies"
                className="text-sm text-slate-500 hover:text-primary transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
