import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Audio from "@/components/ui/audioplayer"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-[#ffedf5] text-[#333] font-inter">
      <main className="flex-1">
        
    <section className="py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">More Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-[#fff] rounded-2xl shadow-md p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#ffd6e4] rounded-full w-12 h-12 flex items-center justify-center">
                    <GithubIcon className="w-6 h-6 text-[#e84393]" />
                    
                  </div>
                  <h3 className="text-xl font-bold">GitHub</h3>
                </div>
                <p className="text-[#666] mb-4">Check out the Cutesy</p>
                <Link
                  href="https://github.com/nyaughh/cutesy"
                  className="text-[#e84393] font-medium hover:text-[#d32f2f] transition-colors"
                  prefetch={false}
                >
                  Visit GitHub
                </Link>
              </Card>
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