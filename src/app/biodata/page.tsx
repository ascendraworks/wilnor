"use client";

import { useEffect, useState } from "react";
import Navbar from '@/components/layout/Navbar';
import HelperCards from '@/components/sections/biodata/HelperCards';
import Footer from '@/components/sections/Footer';
import { useRouter } from "next/navigation";

export default function BiodataPage() {
  const [authorized, setAuthorized] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("biodata_access="));
    setAuthorized(!!cookie);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/set-bio-data-cookie", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: password.trim() }),
    });

    if (res.ok) {
      setAuthorized(true);
      router.refresh();
    } else {
      setError("Incorrect password");
    }
  };

  if (authorized === false) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 shadow-lg rounded-lg space-y-4 max-w-sm w-full border border-teal-200"
        >
          <h1 className="text-2xl font-bold text-center text-teal-700">Enter Access Password</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
          >
            Submit
          </button>

          {/* WhatsApp Contact Button with raw SVG */}
          <a
            href="https://wa.me/6580763141?text=Hi%2C%20I%20would%20like%20to%20request%20the%20password%20for%20biodata%20access."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 mt-3 w-full text-sm font-medium text-white bg-green-600 hover:bg-green-700 py-2 rounded-md transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 .02 5.37 0 12c0 2.11.55 4.16 1.6 5.99L0 24l6.24-1.6A11.96 11.96 0 0 0 12 24c6.63 0 12-5.37 12-12a11.93 11.93 0 0 0-3.48-8.52zM12 22c-1.78 0-3.5-.47-5.02-1.36l-.36-.2-3.7.94.99-3.6-.23-.37A9.9 9.9 0 0 1 2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm5.2-7.79c-.28-.14-1.64-.8-1.9-.89-.26-.1-.45-.14-.63.14-.19.28-.73.88-.9 1.06-.17.19-.33.21-.61.07-.28-.14-1.18-.44-2.25-1.42-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.47.14-.15.18-.25.28-.42.09-.19.05-.35-.02-.49-.07-.14-.63-1.52-.86-2.1-.23-.56-.47-.48-.65-.49h-.55c-.18 0-.46.07-.7.35s-.92.89-.92 2.17.95 2.51 1.08 2.68c.14.18 1.86 2.84 4.52 3.98.63.27 1.12.43 1.5.55.63.2 1.2.17 1.66.1.51-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.11-.25-.18-.52-.32z" />
            </svg>
            Contact Us to Get the Password
          </a>
        </form>
      </div>
    );
  }

  if (authorized === null) {
    return null;
  }

  return (
    <>
      <Navbar />
      <HelperCards />
      <Footer />
    </>
  );
}
