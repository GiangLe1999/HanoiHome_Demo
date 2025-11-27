"use client";

import Image from "next/image";

const benefits = [
  {
    icon: "/images/home-page/ai-icon.png",
    title: "AI-Powered Matching",
    description:
      "Our intelligent AI helps you find the perfect property tailored to your needs—just tell us what you're looking for, and we’ll do the rest.",
  },
  {
    icon: "/images/home-page/proven-expertises-icon.png",
    title: "Proven Expertise",
    description:
      "Our seasoned team excels in real estate with years of successful market navigation, offering informed decisions and optimal results.",
  },
  {
    icon: "/images/home-page/transparent-partnerships-icon.png",
    title: "Transparent Partnerships",
    description:
      "Transparency is key in our client relationships. We prioritize clear communication and ethical practices, fostering trust and reliability throughout.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-16 bg-[#FFFFFF]">
      <div className="container mx-auto px-4">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          {/* Cột trái: hình phòng khách */}
          <div className="relative">
            <div className="aspect-3/4 overflow-hidden bg-muted">
              {/* Thay src bằng hình của bạn */}
              <Image
                src="/images/home-page/why-choose-hanoi-home.webp"
                alt="Modern living room"
                fill
                className="object-cover rounded-3xl"
                sizes="(min-width: 1024px) 550px, 100vw"
              />
            </div>
          </div>

          {/* Cột phải: nội dung + benefit blocks */}
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-primary text-3xl font-semibold tracking-wider mb-2 font-tangerine">
                Our Benefit
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Why Choose HaNoi Home?
              </h2>
              <p className="text-sm text-muted-foreground sm:text-base">
                Our seasoned team excels in real estate with years of successful
                market navigation, offering informed decisions and optimal
                results.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((item) => {
                return (
                  <div
                    key={item.title}
                    className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-white/70 p-6 shadow-sm transition duration-500 hover:border-primary/30 hover:bg-white"
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      className="transition-transform duration-1000 group-hover:rotate-y-360"
                      width={100}
                      height={100}
                    />

                    <div className="space-y-1 pr-2">
                      <h3 className="text-lg font-semibold text-primary">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
