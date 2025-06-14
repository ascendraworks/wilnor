"use client";

import React from "react";

const FixedWhatsAppButton = () => {
  const whatsAppNumber = "6580763141"; // Actual number without '+' or dashes
  const whatsAppUrl = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(
    "Hello! I'm interested in your services."
  )}`;

  return (
    <a
      href={whatsAppUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 animate-pulse"
      aria-label="Chat on WhatsApp"
    >
      {/* Inline WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.529.91 4.843 2.417 6.663L4 29l7.49-2.393A11.936 11.936 0 0016 27c6.627 0 12-5.373 12-12S22.628 3 16.001 3zm0 21.75c-1.882 0-3.63-.55-5.116-1.496l-.366-.23-4.446 1.42 1.393-4.333-.24-.382A9.704 9.704 0 016.25 15c0-5.384 4.366-9.75 9.75-9.75s9.75 4.366 9.75 9.75-4.366 9.75-9.75 9.75zm5.093-7.44c-.278-.14-1.646-.812-1.9-.904-.254-.093-.44-.14-.626.14-.186.279-.718.904-.88 1.09-.163.186-.325.21-.603.07-.278-.14-1.174-.432-2.236-1.38-.827-.738-1.385-1.65-1.547-1.927-.163-.279-.017-.43.122-.569.126-.125.278-.325.418-.488.14-.163.186-.28.279-.465.093-.186.047-.349-.023-.488-.07-.14-.626-1.508-.857-2.07-.226-.544-.455-.47-.625-.479l-.53-.01c-.186 0-.488.07-.743.349-.255.278-.98.958-.98 2.335 0 1.377 1.002 2.704 1.142 2.89.14.186 1.965 3.012 4.761 4.219.666.287 1.186.457 1.59.585.668.213 1.275.183 1.755.111.535-.08 1.646-.672 1.88-1.322.233-.65.233-1.21.163-1.322-.07-.111-.255-.186-.535-.325z" />
      </svg>
    </a>
  );
};

export default FixedWhatsAppButton;
