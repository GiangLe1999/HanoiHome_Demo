"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CustomPhone from "@/components/ui/icons/custom-phone";
import CustomMail from "@/components/ui/icons/custom-mail";
import Link from "next/link";
import CustomLinkedin from "@/components/ui/icons/custom-linkedin";
import CustomX from "@/components/ui/icons/custom-x";
import CustomFacebook from "@/components/ui/icons/custom-facebook";
import CustomIns from "@/components/ui/icons/custom-ins";

interface Agent {
  name: string;
  role: string;
  image: string;
}

const agents: Agent[] = [
  {
    name: "Hang Nguyen",
    role: "Leasing Professional",
    image: "/images/home-page/agents/hang-nguyen.jpg",
  },
  {
    name: "Bui Long Vu",
    role: "Leasing Executive",
    image: "/images/home-page/agents/bui-long-vu.jpg",
  },
  {
    name: "Nguyen Thi Ha",
    role: "Leasing Executive",
    image: "/images/home-page/agents/nguyen-thi-ha.jpg",
  },
  {
    name: "Dang Long Nhat",
    role: "Leasing Executive",
    image: "/images/home-page/agents/dang-long-nhat.jpg",
  },
  {
    name: "Le Thi Thu Ha",
    role: "Leasing Executive",
    image: "/images/home-page/agents/le-thi-thu-ha.jpg",
  },
];

const AgentCard = ({ agent }: { agent: Agent }) => {
  return (
    <Link
      href="#"
      className="group relative bg-white transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-white">
        <Image
          src={agent.image}
          alt={agent.name}
          fill
          className="object-cover rounded-lg"
        />

        {/* Hover Social Block - slides up from bottom */}
        <div className="absolute bottom-0 left-[45px] right-[45px] grid grid-cols-4 py-3 rounded-lg bg-black/20 backdrop-blur-sm translate-y-full group-hover:-translate-y-5 transition-transform duration-500 ease-out">
          <Link
            href="#"
            className="flex items-center justify-center text-white border-r border-gray-500 hover:text-green-500 transition duration-400"
          >
            <CustomLinkedin className="w-4 h-4" />
          </Link>
          <Link
            href="#"
            className="flex items-center justify-center text-white border-r border-gray-500 hover:text-green-500 transition duration-400"
          >
            <CustomX className="w-4 h-4" />
          </Link>
          <Link
            href="#"
            className="flex items-center justify-center text-white border-r border-gray-500 hover:text-green-500 transition duration-400"
          >
            <CustomFacebook className="w-4 h-4" />
          </Link>
          <Link
            href="#"
            className="flex items-center justify-center text-white hover:text-green-500 transition duration-400"
          >
            <CustomIns className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Info Section */}
      <div className="py-4 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-gray-900 text-lg">{agent.name}</h3>
          <p className="text-sm text-gray-500">{agent.role}</p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href=""
            className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition duration-400"
          >
            <CustomPhone className="w-3 h-3" />
          </Link>
          <Link
            href=""
            className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition duration-400"
          >
            <CustomMail className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default function AgentsCarousel() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-primary text-3xl font-semibold tracking-wider mb-2 font-tangerine">
            Our Teams
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Meet Our Agents
          </h2>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 p-1">
            {agents.map((agent, index) => (
              <CarouselItem
                key={index}
                className="pl-8 basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <AgentCard agent={agent} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
