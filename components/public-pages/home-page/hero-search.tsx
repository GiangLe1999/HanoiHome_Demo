"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Search, MapPin, SlidersHorizontal, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const amenitiesList = [
  { id: "air-condition", label: "Air Condition" },
  { id: "disabled-access", label: "Disabled Access" },
  { id: "floor", label: "Floor" },
  { id: "heating", label: "Heating" },
  { id: "renovation", label: "Renovation" },
  { id: "window-type", label: "Window Type" },
  { id: "cable-tv", label: "Cable TV" },
  { id: "elevator", label: "Elevator" },
  { id: "furnishing", label: "Furnishing" },
  { id: "intercom", label: "Intercom" },
  { id: "security", label: "Security" },
  { id: "search-property", label: "Search Property" },
  { id: "ceiling-height", label: "Ceiling Height" },
  { id: "fence", label: "Fence" },
  { id: "garage", label: "Garage" },
  { id: "parking", label: "Parking" },
  { id: "swimming-pool", label: "Swimming Pool" },
  { id: "construction-year", label: "Construction Year" },
  { id: "fireplace", label: "Fireplace" },
  { id: "garden", label: "Garden" },
  { id: "pet-friendly", label: "Pet Friendly" },
  { id: "wifi", label: "WiFi" },
];

const propertyTypes = [
  { value: "all", label: "All" },
  { value: "villa", label: "Villa" },
  { value: "studio", label: "Studio" },
  { value: "office", label: "Office" },
  { value: "house", label: "House" },
];

export default function HeroSearch() {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([100, 650000]);
  const [sizeRange, setSizeRange] = useState([500, 1500]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([
    "floor",
  ]);

  const toggleAmenity = (amenityId: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenityId)
        ? prev.filter((id) => id !== amenityId)
        : [...prev, amenityId]
    );
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center py-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/home-page/hero-search-banner.jpg')",
        }}
      ></div>

      <div className="absolute inset-0 bg-[#161e2d] opacity-50 z-1"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 font-tangerine">
            <span className="bg-linear-to-r from-[#00f1a9] via-[#fffb00] to-white bg-clip-text text-transparent">
              Find Your Perfect Apartment
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-white text-lg">
            Our AI-powered platform helps you discover your dream apartment in
            the fastest and most effortless way. Your ideal living space is just
            a few clicks away.
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-4xl mx-auto">
          <Collapsible open={isAdvancedOpen} onOpenChange={setIsAdvancedOpen}>
            <div className="bg-white rounded-2xl shadow-xl p-6">
              {/* Main Search Row */}
              <div className="flex flex-col md:flex-row gap-4 items-end">
                {/* Type Select */}
                <div className="w-full md:w-40">
                  <label className="text-xs text-gray-500 mb-1 block">
                    Type
                  </label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                      {propertyTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Location Input */}
                <div className="w-full md:flex-1">
                  <label className="text-xs text-gray-500 mb-1 block">
                    Location
                  </label>
                  <Input placeholder="Search Location" />
                </div>

                {/* Keyword Input */}
                <div className="w-full md:flex-1">
                  <label className="text-xs text-gray-500 mb-1 block">
                    Keyword
                  </label>
                  <Input placeholder="Search Keyword" />
                </div>

                {/* Buttons */}
                <div className="flex gap-4 w-full md:w-auto">
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "flex-1 md:flex-none transition duration-400",
                        isAdvancedOpen
                          ? "bg-primary hover:bg-primary hover:text-white text-white"
                          : ""
                      )}
                    >
                      <SlidersHorizontal className="h-4 w-4" />
                      Search advanced
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          isAdvancedOpen ? "rotate-180" : ""
                        )}
                      />
                    </Button>
                  </CollapsibleTrigger>
                  <Button className="flex-1 md:flex-none rounded-md">
                    <Search className="h-4 w-4" />
                    Search
                  </Button>
                </div>
              </div>

              {/* Advanced Search Panel */}
              <CollapsibleContent className="mt-6 overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                <div className="border-t pt-6 space-y-6">
                  {/* Price & Size Range */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Price Range */}
                    <div>
                      <div className="flex justify-between mb-3">
                        <span className="text-sm font-medium text-gray-700">
                          Price
                        </span>
                        <span className="text-sm text-gray-500">
                          ${priceRange[0].toLocaleString()} - $
                          {priceRange[1].toLocaleString()}
                        </span>
                      </div>
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={1000000}
                        min={0}
                        step={1000}
                        className="**:[[role=slider]]:bg-primary **:[[role=slider]]:border-primary [&_.bg-primary]:bg-primary"
                      />
                    </div>

                    {/* Size Range */}
                    <div>
                      <div className="flex justify-between mb-3">
                        <span className="text-sm font-medium text-gray-700">
                          Size
                        </span>
                        <span className="text-sm text-gray-500">
                          {sizeRange[0]} Sqft - {sizeRange[1]} Sqft
                        </span>
                      </div>
                      <Slider
                        value={sizeRange}
                        onValueChange={setSizeRange}
                        max={5000}
                        min={0}
                        step={50}
                        className="**:[[role=slider]]:bg-primary *:[[role=slider]]:border-primary [&_.bg-primary]:bg-primary"
                      />
                    </div>
                  </div>

                  {/* Rooms, Bathrooms, Bedrooms, Type */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        Rooms
                      </label>
                      <Select defaultValue="2">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        Bathrooms
                      </label>
                      <Select defaultValue="2">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        Bedrooms
                      </label>
                      <Select defaultValue="2">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        Type
                      </label>
                      <Select defaultValue="2">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-4 block">
                      Amenities:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                      {amenitiesList.map((amenity) => (
                        <div
                          key={amenity.id}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={amenity.id}
                            checked={selectedAmenities.includes(amenity.id)}
                            onCheckedChange={() => toggleAmenity(amenity.id)}
                            className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                          />
                          <label
                            htmlFor={amenity.id}
                            className="text-[12px] text-gray-500 cursor-pointer"
                          >
                            {amenity.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>
        </div>
      </div>
    </section>
  );
}
