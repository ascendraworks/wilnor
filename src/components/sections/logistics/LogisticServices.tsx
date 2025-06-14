"use client";

import React from "react";
import { HomeIcon, CarIcon, StethoscopeIcon, GlobeIcon, BadgeCheckIcon, UsersIcon } from "lucide-react";

interface Service {
  title: string;
  price: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Lodging Place",
    price: "$25/day",
    description: "Includes meals and basic accommodation for helpers.",
    icon: <HomeIcon className="w-6 h-6 text-teal-600" />,
  },
  {
    title: "Ad-Hoc Transport (incl. CDE Interviews)",
    price: "$50–$80/trip",
    description: "Flexible transport for interviews or errands.",
    icon: <CarIcon className="w-6 h-6 text-teal-600" />,
  },
  {
    title: "Complete Service (with Medical + SIP)",
    price: "$250 (or $170 without SIP)",
    description: "Covers pick-up, SIP, medical, fingerprinting, and lodging before deployment.",
    icon: <StethoscopeIcon className="w-6 h-6 text-teal-600" />,
  },
  {
    title: "Embassy & Passport Processing",
    price: "$1300 POEA / $100+ for passport renewal",
    description: "Embassy contract and passport renewal for Indonesian helpers.",
    icon: <GlobeIcon className="w-6 h-6 text-teal-600" />,
  },
  {
    title: "Work Pass / PR Applications",
    price: "$1000 + govt fees",
    description: "S Pass, Employment Pass, PR applications. Admin fee excludes government costs.",
    icon: <BadgeCheckIcon className="w-6 h-6 text-teal-600" />,
  },
  {
    title: "Temporary Helper (Confinement/Elderly)",
    price: "$888 (admin fee incl. insurance)",
    description: "Max 3 months. Non-refundable. Excludes salary.",
    icon: <UsersIcon className="w-6 h-6 text-teal-600" />,
  },
];

export default function LogisticsSection() {
  return (
    <section className="w-full px-4 py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-teal-700 mb-12">
        Our Logistics Services and Others
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white border border-teal-100 shadow-sm rounded-xl p-6 space-y-3 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              {service.icon}
              <h3 className="text-lg font-semibold text-teal-800">{service.title}</h3>
            </div>
            <p className="text-sm text-gray-800">{service.description}</p>
            <p className="text-sm font-bold text-orange-600">{service.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
