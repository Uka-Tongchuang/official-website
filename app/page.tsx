"use client"
import HomePage from "@/components/home/Home"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full font-mono text-sm">
        <HomePage />
      </div>
    </main>
  );
}
