"use client";

import React from "react";

interface Helper {
  name: string;
  experience: string;
  age: string;
  skills: string;
  salary: string;
  offDays: string;
  language: string;
}

const helpers: Helper[] = [
  {
    name: "SARMILAH",
    experience: "FRESH",
    age: "25 YO",
    skills: "BABY, KIDS, COOK, HOUSE WORK",
    salary: "$550 (Basic)",
    offDays: "1 Off Day",
    language: "Basic English",
  },
  {
    name: "YULINAH",
    experience: "Ex-Singapore",
    age: "27 YO",
    skills: "KIDS, BABY, COOK, HOUSE WORK",
    salary: "$550 (Basic)",
    offDays: "2 Off Days",
    language: "English",
  },
  {
    name: "IFA LESTARI",
    experience: "Ex-Singapore",
    age: "35 YO",
    skills: "Elderly, Cook, House Work",
    salary: "$650 (Basic)",
    offDays: "Every Sunday",
    language: "Basic English",
  },

  {
    name: "CHERRY MAW",
    experience: "MYANMAR",
    age: "35 YO",
    skills: "NEWBORN, KIDS",
    salary: "$750-800 (Basic)",
    offDays: "Every Sunday",
    language: "Fluent English"
  },
  {
    name: "SITI FAJAROH",
    experience: "Ex-Singapore",
    age: "41 YO",
    skills: "NEWBORN, KIDS, ELDERLY",
    salary: "$650-700 (Basic)",
    offDays: "2 Off Days",
    language: "English"
  },
  {
    name: "OCINLIN",
    experience: "Ex-Singapore, Malaysia",
    age: "29 YO",
    skills: "ELDERLY, COOK, HOUSE WORK",
    salary: "$600 (Basic)",
    offDays: "2 Off Days",
    language: "Simple English and Malay"
  },
  {
    name: "NURUL HUSNA BT HERI SUNARDI",
    experience: "Ex-Singapore",
    age: "38 YO",
    skills: "ELDERLY, COOK, HOUSE WORK",
    salary: "$550 (Basic)",
    offDays: "1 Off Day",
    language: "Simple English and Malay"
  },
  {
    name: "FATMAWATI",
    experience: "Ex-Singapore",
    age: "45 YO",
    skills: "ELDERLY, COOK, HOUSE WORK",
    salary: "$550 (Basic)",
    offDays: "1 Off Day",
    language: "Simple English and Malay"
  },
  {
    name: "YATI",
    experience: "Ex-Singapore (4 months)",
    age: "34 YO",
    skills: "BABY, KIDS, ELDERLY, HOUSE WORK, COOK",
    salary: "$550 (Basic)",
    offDays: "1 Off Day",
    language: "Not Specified"
  },
  {
    name: "VERA FONNY ROMBON",
    experience: "Ex-Singapore",
    age: "45 YO",
    skills: "KIDS, ELDERLY, COOK, HOUSE WORK",
    salary: "$600 (Basic)",
    offDays: "2 Off Days (Flexible)",
    language: "Not Specified"
  },
  {
    name: "EKA SUSANTI",
    experience: "Ex-Singapore, Ex-Taiwan",
    age: "40 YO",
    skills: "KIDS, ELDERLY, COOK, HOUSE WORK",
    salary: "$750 (Basic)",
    offDays: "1 Off Day",
    language: "Mandarin"
  },
  {
    name: "FERA MAMONGAN",
    experience: "Ex-Singapore",
    age: "46 YO",
    skills: "BABY, KIDS, ELDERLY, COOK, HOUSE WORK",
    salary: "$600 (Basic)",
    offDays: "2 Off Days (Flexible)",
    language: "Not Specified"
  },
  {
    name: "FADILAH",
    experience: "Ex-Singapore",
    age: "39 YO",
    skills: "BABY, KIDS, ELDERLY, COOK, HOUSE WORK",
    salary: "$600 (Basic)",
    offDays: "2 Off Days",
    language: "Not Specified"
  },
  {
    name: "BERKANIA ANGELITA POLE",
    experience: "Ex-Singapore",
    age: "27 YO",
    skills: "KIDS",
    salary: "$600 (Basic)",
    offDays: "2 Off Days",
    language: "Basic English and Malay"
  },
  {
    name: "YOGA ANGGREANI",
    experience: "Ex-Singapore",
    age: "30 YO",
    skills: "KIDS, BABY, ELDERLY",
    salary: "$600 (Basic)",
    offDays: "2 Off Days",
    language: "Basic English and Malay"
  }
];

export default function HelperCards() {
  return (
    <section className="w-full px-4 py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-teal-700 mb-10">
        Helpers in Singapore
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {helpers.map((helper, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 space-y-4 border border-teal-200"
          >
            <div className="w-full h-48 bg-gray-200 rounded-md mb-2" />
            <div className="space-y-1">
              <h3 className="text-xl font-semibold text-teal-800">{helper.name}</h3>
              <p className="text-sm text-gray-600">
                <strong>{helper.experience}</strong> • {helper.age}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Skills:</strong> {helper.skills}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Salary:</strong> {helper.salary}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Off Days:</strong> {helper.offDays}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Language:</strong> {helper.language}
              </p>
            </div>
            <div className="pt-4 text-center">
              <button className="bg-orange-500 text-white font-medium px-6 py-2 rounded-lg hover:bg-orange-600 transition">
                View Biodata
              </button>
            </div>
          </div>
        ))}
      </div>

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

