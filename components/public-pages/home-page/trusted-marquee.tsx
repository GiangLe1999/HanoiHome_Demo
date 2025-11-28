"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const partners = [
  {
    name: "ABB Group",
    logo: "/images/home-page/trusted-marquee/abb.png",
  },
  {
    name: "British International School Hanoi",
    logo: "/images/home-page/trusted-marquee/british-international-school.png",
  },
  {
    name: "British University Vietnam",
    logo: "/images/home-page/trusted-marquee/british-university.png",
  },
  {
    name: "Hanoi International School",
    logo: "/images/home-page/trusted-marquee/hanoi-international-school.png",
  },
  {
    name: "The International School @ ParkCity Hanoi",
    logo: "/images/home-page/trusted-marquee/isph.png",
  },
  {
    name: "Norwegian People's Aid VietNam",
    logo: "/images/home-page/trusted-marquee/norwegian-people-s-aid.png",
  },
  {
    name: "St. Mary's International Kindergarten",
    logo: "/images/home-page/trusted-marquee/st-mary-s-international-school.png",
  },
  {
    name: "St. Paul American School Hanoi",
    logo: "/images/home-page/trusted-marquee/st-paul-american-school.png",
  },
  {
    name: "TH School",
    logo: "/images/home-page/trusted-marquee/th-school.png",
  },
  {
    name: "Vin School",
    logo: "/images/home-page/trusted-marquee/vin-school.png",
  },
  {
    name: "VP Bank",
    logo: "/images/home-page/trusted-marquee/vp-bank.png",
  },
];

export function TrustedMarquee() {
  return (
    <Card className="border-0 bg-white">
      <CardHeader className="pb-6">
        <CardTitle className="text-center text-4xl font-semibold text-slate-700 font-tangerine">
          Trusted By Over <span className="text-primary">20+</span> Partner
        </CardTitle>
      </CardHeader>
      <CardContent className="px-6 pb-6 pt-2">
        <Marquee pauseOnHover gradient={false} speed={40}>
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center space-x-3 mr-24"
            >
              <div className="relative h-10 w-20">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>
              <p className="text-xs text-slate-500">{partner.name}</p>
            </div>
          ))}
        </Marquee>
      </CardContent>
    </Card>
  );
}
