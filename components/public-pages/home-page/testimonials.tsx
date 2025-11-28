"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mr. Tom Marley - PwC South East Asia Consulting",
    role: "Senior Manager",
    text: "The service provided was very professional and it meant that my search for a new home was very seamless. Sunny was extremely helpful and brought me round a number of different properties. She was very flexible and based on my requirements was able to find a number of new properties for me to view. When I decided on my property Sunny was also brilliant liaising with the landlord and negotiating on my behalf. I definitely appreciated all of this effort. Overall I am very satisfied with Hanoi Home property services and will be utilising them again if want to move after 12 months.",
    avt: "/images/home-page/testimonials/mr-tom-harley.jpg",
  },
  {
    name: "Mr. Kevin Teo - Kinh Bac City Development Holding Corp",
    role: "CDO Hospitality",
    text: "Sunny is attentive, and would help to get things done even if not within her scope. I received quick support from Sunny and good service attitude during house visit",
    avt: "/images/home-page/testimonials/mr-kevin-teo.jpg",
  },
  {
    name: "Ms. Nikki Treacher",
    role: "Tenant",
    text: "Sunny was incredible to work with. She really listened to what I was looking for and took the time to show me the right apartments. I actually found my new place on the very first day! She went above and beyond to support me through the move-in process, making sure everything was set up smoothly. Even after I moved in, Sunny continued to check in on me and helped communicate with my landlady during the first few weeks. She was always kind, responsive, and genuinely cared about making the transition easy for me.",
    avt: "/images/home-page/testimonials/ms-nikki-treacher.jpg",
  },
  {
    name: "Mr. Raffaele Conone",
    role: "Tentnant",
    text: "Vu was my agent and he’s been amazing. Great communication and very responsive to my requests. Vu is a very professional agent and he helped me find a new place in only few days! Highly recommended! ",
    avt: "/images/home-page/testimonials/mr-raffaele-conone.png",
  },
  {
    name: "Ms. Irena Popova",
    role: "Tenant",
    text: "Mr. Duc was absolutely fantastic to work with! He is professional, friendly, and incredibly helpful throughout the entire process. Always responsive and patient, he went above and beyond to make everything smooth and stress-free. I truly appreciate his support and highly recommend him to anyone looking for a reliable housing agent! Keep up the great service!",
    avt: "/images/home-page/testimonials/ms-irena-popova.jpg",
  },
  {
    name: "Mr. Matt de Leeuw",
    role: "ISPH Teacher",
    text: "When searching for a home in Hanoi, Duc was incredibly helpful and patient. He arranged viewings across a range of options and price points, making the process smooth and stress-free. Even after I settled on a home, Duc has continued to support me as a liaison with the landlord, particularly when official paperwork was needed. I’ve already recommended Duc to several friends who are also very satisfied with his services. His prompt and reliable communication is truly appreciated.",
    avt: "/images/home-page/testimonials/ms-irena-popova.jpg",
  },
  {
    name: "Mrs. Ruby Anne Minay",
    role: "Tentnant",
    text: "I've been using Hanoi Home as my agent for the past 3 years. They are excellent in handling requests and addressing concerns, as well as inquiries of friends I refer. They are also prompt in terms of documents you needed, as well as they liase very well with your landlord. If you are an expat, this agent will be helpful for you as they all are competent in speaking English, so you get to communicate your needs and wants well. I have recommended this to many of my friends and will continue to do so.",
    avt: "/images/home-page/testimonials/mrs-ruby-anne-minay.jpg",
  },
  {
    name: "Mrs. Erica Zhang",
    role: "ISPH Teacher",
    text: "For three consecutive years, Anh Duc has been my dependable guide through the challenging rental market. His patience is truly remarkable, as he never hesitated to arrange tours of numerous apartments until we found the perfect fit each time. Anh Duc is incredibly quick to respond to any query, always providing clear and helpful information to inform our decisions. His attentiveness to our needs and preferences made the entire process feel personalized and smooth. Throughout every interaction, he maintained a consistently professional and courteous demeanor. It is his unique combination of dedication and expertise that sets him apart from others. I never felt rushed or pressured, only thoroughly supported. Without a doubt, Anh Duc is an exceptional agent who genuinely cares about his clients' satisfaction.",
    avt: "/images/home-page/testimonials/mrs-rrica-zhang.jpg",
  },
];

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="py-24 bg-white">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="text-center mb-10">
          <p className="text-primary text-3xl font-semibold tracking-wider mb-2 font-tangerine">
            Our Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What&apos;s People Say&apos;s about Our Services
          </h2>
          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base mx-auto">
            Our seasoned team has earned client trust with years of successful
            market navigation, offering informed decisions and tangible results.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="mt-10 w-full">
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-3 md:-ml-4 py-1">
            {testimonials.map((item, index) => (
              <CarouselItem
                key={index}
                // 80% mobile, 60% tablet, 45% md, 23% lg+ để có 3 full + 2/3 2 bên
                className="pl-3 md:pl-4 basis-[80%] sm:basis-[60%] md:basis-[45%] lg:basis-[23%] cursor-pointer"
              >
                <Card className="h-full rounded-3xl border-slate-100 bg-white p-6 shadow-sm">
                  <Quote className="mb-4 h-6 w-6 text-primary" />

                  <p className="mb-6 text-sm leading-relaxed text-slate-700 sm:text-[15px]">
                    {item.text}
                  </p>

                  <div className="mt-auto flex items-center gap-4">
                    <Avatar className="h-14 w-14">
                      {/* Thay src bằng avatar thật nếu có */}
                      <AvatarImage src={item.avt} alt={item.name} />
                      <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
                        {item.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-slate-900 mb-1">
                        {item.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dots */}
        <div className="mt-8 flex w-full items-center justify-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => api?.scrollTo(index)}
              className={`h-2.5 w-2.5 rounded-full border border-primary/30 transition-all ${
                index === current
                  ? "scale-110 bg-primary shadow-sm"
                  : "bg-primary/10"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
