'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState } from "react"

function ClipboardIcon(props: any) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}

export default function Component() {
  const [notification, setNotification] = useState<string | null>(null)

  const copyToClipboard = (text: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setNotification("Code copied to clipboard!")
        setTimeout(() => setNotification(null), 2000) // Hide notification after 2 seconds
      }).catch(err => {
        fallbackCopyTextToClipboard(text)
      })
    } else {
      fallbackCopyTextToClipboard(text)
    }
  }

  const fallbackCopyTextToClipboard = (text: string) => {
    const textArea = document.createElement("textarea")
    textArea.value = text
    textArea.style.position = "fixed"  // Avoid scrolling to bottom
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    try {
      document.execCommand('copy')
      setNotification("Code copied to clipboard!")
      setTimeout(() => setNotification(null), 2000) // Hide notification after 2 seconds
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err)
    }
    document.body.removeChild(textArea)
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#ffedf5] text-[#333] font-inter">
      <main className="flex-1">
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#ffedf5]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Get Started with Cutesy</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Installation</h3>
                <p className="text-[#666] mb-4">Install the Cutesy library:</p>
                <div className="bg-[#fff] rounded-md p-4 relative">
                  <pre className="text-sm font-mono" style={{ whiteSpace: 'pre-wrap' }}>{`npm i cutesy-ui`}</pre>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                    onClick={() => copyToClipboard('npm i cutesy-ui')}
                  >
                    <ClipboardIcon className="w-4 h-4" />
                    <span className="sr-only">Copy</span>
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Download Components</h3>
                <p className="text-[#666] mb-4">Use the Cutesy CLI to add components to your project:</p>
                <div className="bg-[#fff] rounded-md p-4 relative">
                  <pre className="text-sm font-mono" style={{ whiteSpace: 'pre-wrap' }}>{`npx cutesy-ui add <component-name>`}</pre>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                    onClick={() => copyToClipboard('npx cutesy-ui add <component-name>')}
                  >
                    <ClipboardIcon className="w-4 h-4" />
                    <span className="sr-only">Copy</span>
                  </Button>
                </div>
                <p className="text-[#666] mt-4">Replace <code>&lt;component-name&gt;</code> with the name of the component you want to add.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Usage</h3>
                <p className="text-[#666] mb-4">
                  Import the components you need and start using them in your application:
                </p>
                <div className="bg-[#fff] rounded-md p-4 relative">
                  <pre className="text-sm font-mono" style={{ whiteSpace: 'pre-wrap' }}>{`import Audio from "@/components/cutesy/audio"

export default function AudioDemo() {
  return (
    <div className="flex flex-col min-h-screen bg-[#ffedf5] text-[#333] font-inter">
      <main className="flex-1">
        <section className="py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <Audio />
          </div>
        </section>
      </main>
    </div>
  )
}
`}</pre>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                    onClick={() => copyToClipboard(`import Audio from "@/components/ui/audioplayer"

export default function AudioDemo() {
  return (
    <div className="flex flex-col min-h-screen bg-[#ffedf5] text-[#333] font-inter">
      <main className="flex-1">
        <section className="py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <Audio />
          </div>
        </section>
      </main>
    </div>
  )
}`)}
                  >
                    <ClipboardIcon className="w-4 h-4" />
                    <span className="sr-only">Copy</span>
                  </Button>
                </div>
              </div>
            </div>
            {notification && (
              <div className="fixed bottom-4 right-4 bg-stone-400 text-white p-2 rounded-lg">
                {notification}
              </div>
            )}
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


function BirdIcon(props:any) {
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
      <path d="M16 7h.01" />
      <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
      <path d="M20 7 2 .5-2 .5" />
      <path d="M10 18v3" />
      <path d="M14 17.75V21" />
      <path d="M7 18a6 6 0 0 0 3.84-10.61" />
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


function BoxIcon(props:any) {
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
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="M3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function CheckIcon(props:any) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function ChevronDownIcon(props:any) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
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


function PaletteIcon(props:any) {
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
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  )
}


function StepForwardIcon(props:any) {
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
      <line x1="6" x2="6" y1="4" y2="20" />
      <polygon points="10,4 20,12 10,20" />
    </svg>
  )
}


function ToggleRightIcon(props:any) {
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
      <rect width="20" height="12" x="2" y="6" rx="6" ry="6" />
      <circle cx="16" cy="12" r="2" />
    </svg>
  )
}


function XIcon(props:any) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}