"use client";

import { Phone, ShieldCheck, Users, BadgeCheck, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const cards = [
  {
    title: "Peace of Mind",
    description: "We handle everything for you — from screening to training — so you can focus on what matters most.",
    icon: ShieldCheck,
    cta: { label: "View Helpers", href: "/helpers" },
  },
  {
    title: "Transparent Pricing",
    description: "One-time 12-month fee. No surprises, no hidden costs — ever.",
    icon: DollarSign,
    cta: { label: "Check Pricing", href: "/pricing" },
  },
  {
    title: "24/7 Support",
    description: "Need help at any time? Our team is always ready to assist you.",
    icon: Phone,
    cta: { label: "View Helpers", href: "/helpers" },
  },
  {
    title: "Perfect Match",
    description: "We pair you with a helper who fits your family’s lifestyle and values.",
    icon: Users,
    cta: { label: "View Helpers", href: "/helpers" },
  },
  {
    title: "Hassle-Free Onboarding",
    description: "Free training to help your helper adapt smoothly to your home.",
    icon: BadgeCheck,
    cta: { label: "View Helpers", href: "/helpers" },
  },
];

export default function TrustCardsSection() {
  return (
    <section className="w-full px-4 py-16 max-w-5xl mx-auto text-center bg-teal-50">
      <h2 className="text-3xl font-bold text-teal-700 mb-12">
        What You Can Expect From Us
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md"
          >
            <div className="bg-teal-100 text-teal-700 p-3 rounded-full mb-4">
              <card.icon className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-semibold mb-2">{card.title}</h4>
            <p className="text-sm text-gray-600 mb-4">{card.description}</p>
            <Button asChild>
              <a href={card.cta.href}>{card.cta.label}</a>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
