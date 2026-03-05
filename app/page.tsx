import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative w-full h-screen">
        <Image
          src="/images/meme.jpg"
          alt="Meme"
          fill
          priority
          className="object-contain"
        />
      </div>
    </main>
  );
}