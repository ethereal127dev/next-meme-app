"use client";

import { useState } from "react";
import Image from "next/image";

export default function HomePage() {
  const [showImage, setShowImage] = useState(false);

  return (
    <main className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative w-full h-screen flex items-center justify-center">

        {/* ปุ่ม */}
        {!showImage && (
          <button
            onClick={() => setShowImage(true)}
            className="px-8 py-4 text-lg font-bold text-black bg-white rounded-xl 
            hover:scale-110 transition-transform duration-200 shadow-lg"
          >
            OPEN!
          </button>
        )}

        {/* รูป */}
        {showImage && (
          <div className="absolute inset-0 animate-pop">
            <Image
              src="/images/meme.jpg"
              alt="Meme"
              fill
              priority
              className="object-contain"
            />
          </div>
        )}
      </div>
    </main>
  );
}