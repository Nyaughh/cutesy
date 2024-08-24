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
  const [selectedIcon, setSelectedIcon] = useState("Cat")
  const [selectedColor, setSelectedColor] = useState("#FF69B4")

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
        <section className="py-16 px-6 md:px-10 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Explore our Cutesy Components</h2>
            <div className="flex flex-col gap-8">
              <ComponentCard
                title="Cutesy Audio v1.0"
                description="A cute audio player."
                code={`npx cutesy@latest add audio`}
                component={<Audio width="w-60 md:w-80 lg:w-96"/>}
                onCodeCopy={() => copyToClipboard('npx cutesy@latest add audio')}
                onToggle={() => setActiveCode(activeCode === 'audio' ? null : 'audio')}
                isActive={activeCode === 'audio'}
              />
              <ComponentCard
                title="Button"
                description="Choose an icon and color combination"
                code={`npx cutesy@latest add button`}
                component={
                  <IconColorSelector
                    selectedIcon={selectedIcon}
                    selectedColor={selectedColor}
                    onIconChange={setSelectedIcon}
                    onColorChange={setSelectedColor}
                  />
                }
                onCodeCopy={(code) => copyToClipboard(code)}
                onToggle={() => setActiveCode(activeCode === 'icon-color-selector' ? null : 'icon-color-selector')}
                isActive={activeCode === 'icon-color-selector'}
                selectedIcon={selectedIcon}
                selectedColor={selectedColor}
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
  selectedIcon,
  selectedColor,
}: {
  title: string
  description: string
  code: string
  component: React.ReactNode
  onCodeCopy: (code: string) => void
  onToggle: () => void
  isActive: boolean
  selectedIcon?: string
  selectedColor?: string
}) {
  const generateButtonCode = () => {
    if (!selectedIcon || !selectedColor) return code;
    
    const iconFunction = getIconFunction(selectedIcon);
    
    return `
import { Button } from "@/components/ui/button"

${iconFunction}

export default function CutesyButton() {
  return (
    <Button
      className="bg-white hover:bg-opacity-100 text-opacity-90 font-medium rounded-full px-8 py-4 transition-all duration-300 flex items-center justify-center gap-2 border-2 shadow-md hover:scale-105"
      style={{
        color: "${selectedColor}",
        borderColor: "${selectedColor}",
        boxShadow: \`0 0 10px ${selectedColor}40\`,
        minWidth: '180px',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = \`0 0 20px ${selectedColor}60\`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = \`0 0 10px ${selectedColor}40\`;
      }}
    >
      <${selectedIcon}Icon className="h-6 w-6" />
      <span className="font-semibold">${selectedIcon}</span>
    </Button>
  )
}
`
  }

  const getIconFunction = (iconName: string) => {
    const iconFunctions: { [key: string]: string } = {
      Cat: `function CatIcon(props: any) {
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
      <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
      <path d="M8 14v.5" />
      <path d="M16 14v.5" />
      <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
    </svg>
  )
}`,
      Dog: `function DogIcon(props: any) {
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
      <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5" />
      <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />
      <path d="M8 14v.5" />
      <path d="M16 14v.5" />
      <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
      <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306" />
    </svg>
  )
}`,
      Bird: `function BirdIcon(props: any) {
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
      <path d="M15 12.9a3 3 0 1 1-5.12 3.13H8.24a5 5 0 0 1-4.92-4.15L2.18 4.11a1 1 0 0 1 1.22-1.19L4 3.1a1 1 0 0 0 1.22-.72l.205-.82A2 2 0 0 1 7.38 0h1.34a2 2 0 0 1 1.956 1.56l.205.82a1 1 0 0 0 1.22.72l.594-.18a1 1 0 0 1 1.22 1.19l-.63 3.78" />
      <path d="M12 16.5V18" />
      <path d="M10 19h4" />
      <path d="M15 5h-6" />
      <path d="M9 9V8" />
      <path d="M6 12.7a4 4 0 0 1 3-1.7" />
    </svg>
  )
}`,
      Bug: `function BugIcon(props: any) {
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
      <path d="m8 2 1.88 1.88" />
      <path d="M14.12 3.88 16 2" />
      <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
      <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
      <path d="M12 20v-9" />
      <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
      <path d="M6 13H2" />
      <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
      <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
      <path d="M22 13h-4" />
      <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
    </svg>
  )
}`,
      Flame: `function FlameIcon(props: any) {
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
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  )
}`,
      Flower: `function FlowerIcon(props: any) {
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
      <path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15" />
      <circle cx="12" cy="12" r="3" />
      <path d="m8 16 1.5-1.5" />
      <path d="M14.5 9.5 16 8" />
      <path d="m8 8 1.5 1.5" />
      <path d="M14.5 14.5 16 16" />
    </svg>
  )
}`,
      Squirrel: `function SquirrelIcon(props: any) {
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
      <path d="M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10" />
      <path d="M16 20c0-1.7 1.3-3 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4" />
      <path d="M15.2 22a3 3 0 0 0-2.2-5" />
      <path d="M18 13h.01" />
    </svg>
  )
}`,
      Beaker: `function BeakerIcon(props: any) {
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
      <path d="M4.5 3h15" />
      <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
      <path d="M6 14h12" />
    </svg>
  )
}`,
      Sun: `function SunIcon(props: any) {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}`,
      Moon: `function MoonIcon(props: any) {
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
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}`,
      Cloud: `function CloudIcon(props: any) {
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
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}`
    };

    return iconFunctions[iconName] || iconFunctions['Cat']; // Default to Cat if icon not found
  }

  return (
    <Card className="bg-[#fff] rounded-2xl shadow-md p-4 flex-1 h-auto relative">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-[#ffeeba] rounded-full w-10 h-10 flex items-center justify-center">
            <BoxIcon className="w-5 h-5 text-[#e84393]" />
          </div>
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
        <p className="text-sm text-[#666] mb-4">{description}</p>
        <div className="bg-[#ffedf5] rounded-md p-3 overflow-auto flex-1 relative min-h-[200px] flex items-center justify-center">
          {isActive ? (
            <div className="w-full max-w-md">
              <pre className="text-xs font-mono bg-[#ffffffcc] p-2 rounded-md whitespace-pre-wrap break-all">
                <code>{title === "Button" ? generateButtonCode() : code}</code>
              </pre>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              {component}
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 w-6 h-6 hover:bg-transparent text-stone-400 hover:text-stone-900"
            onClick={() => onCodeCopy(title === "Button" ? generateButtonCode() : code)}
          >
            <ClipboardIcon className="w-4 h-4" />
            <span className="sr-only">Copy</span>
          </Button>
        </div>
        <div className="flex justify-end mt-4">
          <Button
            variant="ghost"
            size="sm"
            className="text-sm text-[#e84393] hover:bg-[#ffedf5] transition-colors"
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