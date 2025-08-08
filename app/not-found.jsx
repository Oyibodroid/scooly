"use client";

import Link from "next/link";
import "@styles/globals.css";

export default function NotFound() {
  return (
    <div className="not-found-main">
      <div className="h-full">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="mb-6">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          href="/admin"
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          Go back to Dashboard
        </Link>
      </div>
    </div>
  );
}
