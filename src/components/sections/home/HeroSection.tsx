"use client";

import { DollarSign, ShieldCheck, RefreshCcw } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroWithFeatures() {
  return (
    <section className="w-full px-4 pt-14 pb-12 bg-teal-50">
      <div className="max-w-xl mx-auto text-center">
        {/* Trust Tagline */}
        <p className="text-xl font-bold text-gray-500 tracking-wide mb-2">
          Starting At $0 Deposit
        </p>

        {/* Hero Headline */}
        <h1 className="text-4xl font-extrabold text-teal-700 leading-tight">
          Stop Stressing
        </h1>
        <h2 className="text-xl font-bold text-gray-800">
          Over Helper Arrangements
        </h2>

        {/* Supporting Subtext */}
        <p className="mt-6 text-gray-600 text-base">
          No deposit, no hidden fees. Just reliable, transparent maid services trusted by families across Singapore.
        </p>

        {/* Hero Image */}
        <div>
          <Image
            src="/img/hero-helper-illustration.png"
            alt="Family Illustration"
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>

          {/* CTA Buttons */}
          <div className="mt-6 space-y-3 w-full">
            <Link href="/biodata" passHref className="w-full">
              <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold">
                Find a Helper Now
              </Button>
            </Link>
            <Link href="/quiz" passHref className="w-full">
              <Button variant="outline" className="mt-3 w-full text-teal-700 border-teal-600 hover:bg-teal-500 text-sm font-semibold">
                Take Our Free Quiz
              </Button>
            </Link>
          </div>
      </div>
      {/* Feature Strip */}
      <div className="mt-10 space-y-6 max-w-xl mx-auto text-left">
        {/* Feature 1 */}
        <div className="flex items-start gap-4">
          <div className="p-2 bg-white text-teal-700 rounded-full shadow-sm">
            <DollarSign className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-teal-800">Affordable Excellence</h3>
            <p className="text-sm text-gray-700">
              Enjoy top-quality service with our competitive agency fee of just <span className="font-bold text-teal-600">$888</span>.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-start gap-4">
          <div className="p-2 bg-white text-teal-700 rounded-full shadow-sm">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-teal-800">Peace of Mind</h3>
            <p className="text-sm text-gray-700">
              One simple payment, no hidden costs for <span className="font-semibold">12 months</span>, and <span className="font-semibold">free replacement</span> if needed.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-start gap-4">
          <div className="p-2 bg-white text-teal-700 rounded-full shadow-sm">
            <RefreshCcw className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-teal-800">Flexible Solutions</h3>
            <p className="text-sm text-gray-700">
              We offer short-term helper services to cover for your helper while they are away.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
