"use client";

import * as React from "react";
import { Search, MapPin, FileText, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    id: 1,
    icon: Search,
    title: "Search",
    description:
      "Find properties that match your needs with our advanced search filters and personalized recommendations.",
    details: ["Smart filters", "Save favorites", "Price alerts"],
  },
  {
    id: 2,
    icon: MapPin,
    title: "Property Tour",
    description:
      "Contact us to arrange property tours. Experience your future home in person with our expert guides.",
    details: ["Virtual tours", "In-person visits", "Flexible scheduling"],
  },
  {
    id: 3,
    icon: FileText,
    title: "Contract",
    description:
      "We arrange all related paperwork. Our legal team ensures a smooth and transparent transaction process.",
    details: ["Legal support", "Document review", "Secure signing"],
  },
  {
    id: 4,
    icon: Home,
    title: "Move In & Keep in Touch",
    description:
      "We check the house to ensure a smooth hand over. Our support continues even after you move in.",
    details: ["Final inspection", "Key handover", "24/7 support"],
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = React.useState<number | null>(null);

  return (
    <section className="py-16 bg-[#FFFFFF]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-primary text-3xl font-semibold tracking-wider mb-2 font-tangerine">
            Simple 4-Step Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            To find your perfect property in Hanoi
          </h2>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform -translate-y-1/2 z-0">
            <div className="absolute inset-0 bg-primary/30 blur-sm" />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.id}
                onMouseEnter={() => setActiveStep(step.id)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <Card
                  className={`group relative h-full border-2 transition-all duration-500 cursor-pointer overflow-hidden ${
                    activeStep === step.id
                      ? "border-primary shadow-2xl shadow-primary/20 scale-105"
                      : "border-gray-100 hover:border-primary/50 hover:shadow-xl"
                  }`}
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 transition-opacity duration-500 ${
                      activeStep === step.id ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  <CardContent className="p-6 relative z-10">
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">
                        0{step.id}
                      </span>
                    </div>

                    {/* Icon Container */}
                    <div className="mb-6 relative">
                      <div
                        className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                          activeStep === step.id
                            ? "bg-primary shadow-lg shadow-primary/30"
                            : "bg-primary/10 group-hover:bg-primary/20"
                        }`}
                      >
                        <step.icon
                          className={`w-10 h-10 transition-colors duration-500 ${
                            activeStep === step.id
                              ? "text-white"
                              : "text-primary"
                          }`}
                        />
                      </div>

                      {/* Decorative dots */}
                      <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-primary/20 rounded-full" />
                      <div className="absolute -bottom-4 right-2 w-2 h-2 bg-primary/30 rounded-full" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Features List */}
                    <div
                      className={`space-y-2 transition-all duration-500 ${
                        activeStep === step.id
                          ? "opacity-100 max-h-32"
                          : "opacity-0 max-h-0 overflow-hidden"
                      }`}
                    >
                      {step.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-primary"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {detail}
                        </div>
                      ))}
                    </div>

                    {/* Arrow indicator for next step */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                        <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-primary">
                          <svg
                            className="w-4 h-4 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Ready to find your dream home? Let&apos;s start the journey
            together.
          </p>
          <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105">
            <Search className="w-5 h-5" />
            Start Searching Now
          </button>
        </div>
      </div>
    </section>
  );
}
