"use client";

import React from "react";
import { RoughNotation } from "react-rough-notation";

const pricingPackages = [
  {
    price: "$888",
    title: "Direct Hire and Temporary Hire Package",
    features: [
      "Free MOM cost",
      "Free Medical Check-up",
      "Free SIP for fresh helper",
      "Free Logistics for Temp Hire",
      "Free 12 months insurance",
      "Exclude overseas cost",
      "Not refundable",
    ],
    ctaText: "View Biodatas Now",
    isPopular: false,
  },
  {
    price: "$2280",
    title: "One-Time Payment Guarantee",
    features: [
      "MOM Application and Issuance Fee",
      "Logistics",
      "Agency Fee",
      "SIP for first time helper",
      "Medical Check-up",
      "Overseas Maid Handling Fee (Myanmar & Indonesia)",
      "Insurance (worth $583)",
      "Free unlimited 12 months replacement @ $70 + insurance",
    ],
    ctaText: "View Biodatas Now",
    isPopular: true,
  },
  {
    price: "$1688",
    title: "Transfer Helper Package",
    features: [
      "MOM Application and Issuance Fee",
      "Logistics",
      "Agency Fee",
      "Insurance (worth $583)",
      "Exclude medical and SIP and overseas handling fee.",
    ],
    ctaText: "View Biodatas Now",
    isPopular: false,
  },
];

const PricingCard = ({ title, price, features, ctaText, isPopular }: any) => (
    <div className="bg-gradient-to-br from-white to-teal-50 rounded-2xl shadow-lg p-8 border border-teal-200 hover:shadow-xl transition-shadow duration-300 flex flex-col min-h-[500px] relative">
      {isPopular && (
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-sm font-bold px-5 py-1.5 rounded-full shadow-lg animate-pulse ring-2 ring-white flex items-center justify-center whitespace-nowrap min-w-[180px]">
          🌟 MOST POPULAR 🌟
        </div>
      )}
      <div className="text-center">
        <p className="text-3xl font-extrabold text-gray-800">{price}</p>
        <h3 className="text-lg font-bold text-teal-700 mt-2 underline decoration-teal-400">
          {title}
        </h3>
      </div>
      <ul className="text-sm text-gray-800 space-y-2 mt-4 flex-1">
        {features.map((feature: string, idx: number) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-teal-500">✔</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="pt-4 text-center mt-auto">
        <a
          href="#"
          className="inline-block bg-orange-500 text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-orange-600 transition-colors"
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
  

export default function PromotionsPage() {
  return (
    <section className="w-full px-4 py-16 max-w-6xl mx-auto">
      <div className="relative text-center max-w-2xl mx-auto mb-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-teal-800 leading-snug tracking-tight space-y-3">
          <span className="block">
          <h2 className="...">
            Stop{" "}
            <RoughNotation type="circle" color="teal" strokeWidth={5} show>
                stressing
            </RoughNotation>{" "}
            about helper arrangements!
            </h2>

          </span>
          <span className="block mt-4 text-orange-500 font-extrabold">
            <RoughNotation
              type="underline"
              color="#FB923C"
              strokeWidth={8}
              show={true} 
              animationDelay={1200}
              animationDuration={1000}
            >
              Get a quick, easy quote for our One-Time Payment Guarantee Package today.
            </RoughNotation>
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {pricingPackages.map((pkg, idx) => (
          <PricingCard key={idx} {...pkg} />
        ))}
      </div>
    </section>
  );
}
