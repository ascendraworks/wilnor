"use client";

import React from "react";

export default function QuizPage() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-white">
      <iframe
        src="/quiz.html"
        className="w-full h-screen border-none"
        title="Helper Quiz"
      ></iframe>
    </div>
  );
}
