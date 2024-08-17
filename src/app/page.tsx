import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-[#ffedf5] text-[#333] font-inter">
      
      <main className="flex-1">
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#fff] rounded-b-2xl shadow-md">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Discover the Cutesy React Components</h1>
              <p className="text-lg text-[#666] mb-6">
                Elevate your web applications with our delightful, easy-to-use React components.
              </p>
              <div className="flex gap-4">
                  <Link
                  href="/compo"
                  className="rounded-full px-4 py-2 text-sm font-medium bg-[#e84393] text-white hover:bg-[#d32f2f] transition-colors"
                  prefetch={false}
                > Get Started
                  </Link>
                <Link
                  href="https://github.com/nyaughh/cutesy/"
                  className="inline-flex items-center gap-2 text-[#e84393] font-medium hover:text-[#d32f2f] transition-colors"
                  prefetch={false}
                >
                  <GithubIcon className="w-5 h-5" />
                  GitHub
                </Link>
              </div>
            </div>
            <div className="justify-self-center">
              <img src="/pl.png" width={400} height={400} alt="Cutesy Illustration" />
            </div>
          </div>
        </section>
        
      </main>
    </div>
  )
}

function GithubIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


