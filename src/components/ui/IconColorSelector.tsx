"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export default function IconColorSelector({
  selectedIcon,
  selectedColor,
  onIconChange,
  onColorChange
}: {
  selectedIcon: string
  selectedColor: string
  onIconChange: (icon: string) => void
  onColorChange: (color: string) => void
}) {
  const handleIconChange = (icon: string) => {
    onIconChange(icon)
  }
  const handleColorChange = (color: string) => {
    onColorChange(color)
  }

  const renderIcon = () => {
    switch (selectedIcon) {
      case "Cat":
        return <CatIcon className="h-6 w-6" style={{ color: selectedColor }} />
      case "Dog":
        return <DogIcon className="h-6 w-6" style={{ color: selectedColor }} />
      case "Bird":
        return <BirdIcon className="h-6 w-6" style={{ color: selectedColor }} />
      case "Bug":
        return <BugIcon className="h-6 w-6" style={{ color: selectedColor }} />
      case "Flame":
        return <FlameIcon className="h-6 w-6" style={{ color: selectedColor }} />
      case "Flower":
        return <FlowerIcon className="h-6 w-6" style={{ color: selectedColor }} />
      case "Squirrel":
        return <SquirrelIcon className="h-6 w-6" style={{ color: selectedColor }} />
      case "Beaker":
        return <BeakerIcon className="h-6 w-6" style={{ color: selectedColor }} />
      case "Sun":
        return <SunIcon className="h-6 w-6" style={{ color: selectedColor }} />
      case "Moon":
        return <MoonIcon className="h-6 w-6" style={{ color: selectedColor }} />
      case "Cloud":
        return <CloudIcon className="h-6 w-6" style={{ color: selectedColor }} />
      default:
        return <CatIcon className="h-6 w-6" style={{ color: selectedColor }} />
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full py-4">
      <div className="w-full max-w-[280px] mb-4 px-2">
        <Button
          className="w-full bg-white hover:bg-opacity-100 text-opacity-90 font-medium rounded-full px-4 py-3 transition-all duration-300 flex items-center justify-center gap-2 border-2 shadow-md hover:scale-105"
          style={{
            color: selectedColor,
            borderColor: selectedColor,
            boxShadow: `0 0 10px ${selectedColor}40`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = `0 0 20px ${selectedColor}60`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = `0 0 10px ${selectedColor}40`;
          }}
        >
          {renderIcon()}
          <span className="font-semibold text-sm">{selectedIcon}</span>
        </Button>
      </div>
      <div className="w-full max-w-[280px] flex flex-wrap justify-center gap-2 px-2">
        <div className="w-full sm:w-[calc(50%-4px)]">
          <Select onValueChange={handleIconChange} value={selectedIcon}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Icon" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Cat">Cat</SelectItem>
              <SelectItem value="Dog">Dog</SelectItem>
              <SelectItem value="Bird">Bird</SelectItem>
              <SelectItem value="Bug">Bug</SelectItem>
              <SelectItem value="Flame">Flame</SelectItem>
              <SelectItem value="Flower">Flower</SelectItem>
              <SelectItem value="Squirrel">Squirrel</SelectItem>
              <SelectItem value="Beaker">Beaker</SelectItem>
              <SelectItem value="Sun">Sun</SelectItem>
              <SelectItem value="Moon">Moon</SelectItem>
              <SelectItem value="Cloud">Cloud</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full sm:w-[calc(50%-4px)]">
          <Select onValueChange={handleColorChange} value={selectedColor}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Color" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="#FF69B4">Pink</SelectItem>
              <SelectItem value="#FFD700">Yellow</SelectItem>
              <SelectItem value="#9370DB">Purple</SelectItem>
              <SelectItem value="#FF0000">Red</SelectItem>
              <SelectItem value="#00BFFF">Blue</SelectItem>
              <SelectItem value="#00CED1">Teal</SelectItem>
              <SelectItem value="#FFFF00">Neon</SelectItem>
              <SelectItem value="#8B4513">Brown</SelectItem>
              <SelectItem value="#A0522D">Orange</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}

// Include all the icon components (CatIcon, DogIcon, etc.) here
function CatIcon(props: any) {
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
}

function DogIcon(props: any) {
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
}
function BirdIcon(props: any) {
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
      <path d="m20 7 2 .5-2 .5" />
      <path d="M10 18v3" />
      <path d="M14 17.75V21" />
      <path d="M7 18a6 6 0 0 0 3.84-10.61" />
    </svg>
  )
}

function BugIcon(props: any) {
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
}
function FlameIcon(props: any) {
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
}

function FlowerIcon(props: any) {
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
      <circle cx="12" cy="12" r="3" />
      <path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15" />
      <path d="m8 16 1.5-1.5" />
      <path d="M14.5 9.5 16 8" />
      <path d="m8 8 1.5 1.5" />
      <path d="M14.5 14.5 16 16" />
    </svg>
  )
}
function SquirrelIcon(props: any) {
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
}

function BeakerIcon(props: any) {
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
}

function SunIcon(props: any) {
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
}
function MoonIcon(props: any) {
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
}

function CloudIcon(props: any) {
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
}


