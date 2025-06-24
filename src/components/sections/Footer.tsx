"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 px-6 py-12 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left: Company Info */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold italic">Wilnor & Lavett's Employment Pte Ltd</h2>
          <p className="italic text-sm">354 Clementi Ave 2 #01-177A</p>
          <p className="italic text-sm">Singapore 120354</p>
        </div>

        {/* Right: Contact Info + Attribution */}
        <div className="space-y-4">
          <a
            href="https://wa.me/6580763141"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-teal-700"
          >
            <FaWhatsapp className="text-teal-600 w-5 h-5" />
            <span className="text-sm">+65 8076 3141</span>
          </a>
          <div className="flex items-center gap-2">
            <HiOutlineMail className="text-teal-600 w-5 h-5" />
            <span className="text-sm">wilnorlavett@gmail.com</span>
          </div>

          <p className="text-xs text-gray-500 italic pt-2 text-center md:text-left">
            Made by{" "}
            <Link 
              href="https://wa.me/6587670797?text=Good%20day%2C%20I%20would%20like%20to%20inquire%20about%20your%20web%20development%20services.%20Please%20let%20me%20know%20a%20convenient%20time%20to%20discuss%20my%20needs."
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-gray-700"
            >
              Ascendra
            </Link>

          </p>
          <div className="text-xs text-gray-500 italic pt-2 text-center md:text-left space-x-4">
            <Link href="/terms" className="underline hover:text-gray-700">
              Terms and Conditions
            </Link>
            <Link href="/privacy" className="underline hover:text-gray-700">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
