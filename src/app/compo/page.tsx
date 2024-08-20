"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import Audio from "@/components/ui/audioplayer"
import IconColorSelector from "@/components/ui/IconColorSelector"

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
  const [activeCode, setActiveCode] = useState<string | null>(null)
  const [notification, setNotification] = useState<string | null>(null)

  const copyToClipboard = (text: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setNotification("Code copied to clipboard!")
        setTimeout(() => setNotification(null), 2000) // Hide notification after 2 seconds
      }).catch(err => {
        console.error('Failed to copy: ', err)
        fallbackCopyToClipboard(text)
      })
    } else {
      fallbackCopyToClipboard(text)
    }
  }

  const fallbackCopyToClipboard = (text: string) => {
    const textArea = document.createElement("textarea")
    textArea.value = text
    textArea.style.position = "fixed"  // Avoid scrolling to bottom
    textArea.style.opacity = "0"  // Make it invisible
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
        <section className="py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Explore our Cutesy Components</h2>
            <div className="flex flex-col gap-8">
              <ComponentCard
                title="Cutesy Audio v1.0"
                description="A cute audio player."
                code={`npx cutesy@latest add audio`}
                component={<Audio />}
                onCodeCopy={() => copyToClipboard('npx cutesy@latest add audio')}
                onToggle={() => setActiveCode(activeCode === 'audio' ? null : 'audio')}
                isActive={activeCode === 'audio'}
              />
              <ComponentCard
                title="Button"
                description="Choose an icon and color combination"
                code={`npx cutesy@latest add button`}
                component={<IconColorSelector />}
                onCodeCopy={() => copyToClipboard('npx cutesy@latest add icon-color-selector')}
                onToggle={() => setActiveCode(activeCode === 'icon-color-selector' ? null : 'icon-color-selector')}
                isActive={activeCode === 'icon-color-selector'}
              />
            </div>
          </div>
        </section>
      </main>
      {notification && (
        <div className="fixed bottom-4 right-4 bg-stone-400 text-white p-2 rounded-lg">
          {notification}
        </div>
      )}
    </div>
  )
}

function ComponentCard({
  title,
  description,
  code,
  component,
  onCodeCopy,
  onToggle,
  isActive,
}: {
  title: string
  description: string
  code: string
  component: React.ReactNode
  onCodeCopy: () => void
  onToggle: () => void
  isActive: boolean
}) {
  return (
    <Card className="bg-[#fff] rounded-2xl shadow-md p-6 flex-1 h-[100vh] relative">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-[#ffeeba] rounded-full w-12 h-12 flex items-center justify-center">
            <BoxIcon className="w-6 h-6 text-[#e84393]" />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-[#666] mb-4">{description}</p>
        <div className="bg-[#ffedf5] rounded-md p-4 overflow-auto flex-1 relative min-h-[200px]">
          {isActive ? (
            <div className="flex items-center justify-center h-full min-h-[200px]">
              <pre className="flex text-sm font-mono items-center justify-center min-h-[60px] bg-[#ffffffcc] p-4 rounded-md whitespace-pre-wrap">{code}</pre>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full min-h-[200px]">
              {component}
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
            onClick={onCodeCopy}
            style={{ position: 'absolute', top: '8px', right: '8px' }}
          >
            <ClipboardIcon className="w-4 h-4" />
            <span className="sr-only">Copy</span>
          </Button>
        </div>
        <div className="flex justify-end mt-4">
          <Button
            variant="ghost"
            size="sm"
            className="text-[#e84393] hover:bg-[#ffedf5] transition-colors"
            onClick={onToggle}
          >
            {isActive ? "Show Preview" : "Show Code"}
          </Button>
        </div>
      </div>
    </Card>
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
      <path d="m3.3 7 8.7 5 8.7-5" />
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

function FileInputIcon(props:any) {
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
      <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M2 15h10" />
      <path d="m9 18 3-3-3-3" />
    </svg>
  )
}