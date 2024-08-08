"use client"
import HomePage from "@/components/home/Home"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between" style={{padding:"100px 0"}}>
      <div className="z-10 w-full  font-mono text-sm lg:flex" style={{width:"100%"}}>
        <HomePage/>
      </div>
    </main>
  );
}
