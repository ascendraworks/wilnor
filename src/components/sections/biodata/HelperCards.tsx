"use client";
import { client } from "@/lib/sanity.client";
import { helpersQuery } from "@/lib/queries";
import { useEffect, useState } from "react";

interface Helper {
  _id: string;
  name: string;
  age: number;
  skills: string[];
  salary: string;
  offDays: string;
  nationality?: string;
  languages?: string[];
  photoUrl?: string;
  biodataPDFUrl?: string;
  category?: string; // Added category
}

export default function HelperCards() {
  const [helpers, setHelpers] = useState<Helper[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data: Helper[] = await client.fetch(helpersQuery);
        setHelpers(data);
      } catch (err) {
        setError("Failed to load helper data. Please try again later.");
        console.error("Failed to fetch helpers:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="w-full px-4 py-16 max-w-6xl mx-auto text-center">
        <p className="text-lg text-gray-700">Loading helpers information...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full px-4 py-16 max-w-6xl mx-auto text-center">
        <p className="text-lg text-red-600">{error}</p>
      </section>
    );
  }

  if (helpers.length === 0) {
    return (
      <section className="w-full px-4 py-16 max-w-6xl mx-auto text-center">
        <p className="text-lg text-gray-700">No helpers found at the moment.</p>
      </section>
    );
  }

  const nowInSingapore = helpers.filter(h => h.category === "now-in-singapore");
  const exSingapore = helpers.filter(h => h.category === "ex-singapore");
  const exAbroad = helpers.filter(h => h.category === "ex-abroad");
  const freshHelpers = helpers.filter(h => h.category === "fresh-helpers");

  const renderHelperCard = (helper: Helper) => (
    <div
      key={helper._id}
      className="bg-white rounded-xl shadow-md p-6 space-y-4 border border-teal-200"
    >
      {helper.photoUrl ? (
       <img src={helper.photoUrl} alt={helper.name} className="w-full h-48 object-contain rounded-md mb-2 bg-gray-100" />

      ) : (
        <div className="w-full h-48 bg-gray-200 rounded-md mb-2 flex items-center justify-center">
          <span className="text-gray-500">No Photo</span>
        </div>
      )}
      <div className="space-y-1">
        <h3 className="text-xl font-semibold text-teal-800">{helper.name}</h3>
        <p className="text-sm text-gray-600">
          {helper.nationality ? `${helper.nationality} • ` : ""}{helper.age} YO
        </p>
        <p className="text-sm text-gray-700">
          <strong>Skills:</strong> {(helper.skills ?? []).join(", ") || "Not specified"}
        </p>
        <p className="text-sm text-gray-700">
          <strong>Salary:</strong> {helper.salary}
        </p>
        <p className="text-sm text-gray-700">
          <strong>Off Days:</strong> {helper.offDays}
        </p>
        <p className="text-sm text-gray-700">
          <strong>Language:</strong> {(helper.languages ?? []).join(", ") || "Not specified"}
        </p>
      </div>
      <div className="pt-4 text-center">
        {helper.biodataPDFUrl ? (
          <a
            href={helper.biodataPDFUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white font-medium px-6 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            View Biodata
          </a>
        ) : (
          <button disabled className="bg-gray-400 text-white font-medium px-6 py-2 rounded-lg">
            No Biodata
          </button>
        )}
      </div>
    </div>
  );

  const renderHelperSection = (title: string, helperList: Helper[]) => {
    if (helperList.length === 0) {
      return (
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-teal-700 mb-10">
            {title}
          </h2>
          <p className="text-lg text-gray-700 text-center">No helpers found in this category at the moment.</p>
        </div>
      );
    }
    return (
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-10">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {helperList.map(renderHelperCard)}
        </div>
      </div>
    );
  };

  return (
    <section className="w-full px-4 py-16 max-w-6xl mx-auto">
      {renderHelperSection("Now In Singapore", nowInSingapore)}
      {renderHelperSection("Ex Singapore", exSingapore)}
      {renderHelperSection("Ex Abroad", exAbroad)}
      {renderHelperSection("Fresh Helpers", freshHelpers)}

      <div className="mt-16 text-center">
        <p className="text-lg text-gray-700">
          Looking for more Indonesian, Filipino, or Myanmar helpers?
        </p>
        <p className="mt-2 text-xl font-semibold text-orange-600">
          WhatsApp us directly for the full biodata list.
        </p>
      </div>
    </section>
  );
}
