import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

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
                    <BookIcon className="w-6 h-6 text-[#e84393]" />
                  </div>
                  <h3 className="text-xl font-bold">Documentation</h3>
                </div>
                <p className="text-[#666] mb-4">Learn more about the Cutesy components and how to use them.</p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-[#e84393] font-medium hover:text-[#d32f2f] transition-colors"
                  prefetch={false}
                >
                  Read Documentation
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
              </Card>
            </div>
          </div>
        </section> 
        
      </main>
    </div>
  )
}

function ArrowRightIcon(props:any) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function BookIcon(props:any) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}

