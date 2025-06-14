"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BiodataPasswordPage() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/set-biodata-cookie", {
      method: "POST",
      body: JSON.stringify({ password: input }),
    });

    if (res.ok) {
      router.push("/biodata");
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Enter Password to View Biodata</h1>
      <input
        type="password"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 w-full mb-4"
        required
      />
      {error && <p className="text-red-500 mb-2">Incorrect password</p>}
      <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}
