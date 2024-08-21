"use client"

import React, { ReactNode } from 'react';
import { Button } from "@/components/ui/button"

interface CutesyButtonProps {
  children: ReactNode;
  color?: 'pink' | 'blue' | 'purple' | 'green' | 'yellow';
  icon?: 'Cat' | 'Dog' | 'Bird' | 'Bug' | 'Flame' | 'Flower' | 'Squirrel' | 'Beaker' | 'Sun' | 'Moon' | 'Cloud';
  onClick?: () => void;
}

export default function CutesyButton({ children, color = 'pink', icon, onClick }: CutesyButtonProps) {
  const colorVariants = {
    pink: '#FF69B4',
    blue: '#87CEFA',
    purple: '#DDA0DD',
    green: '#98FB98',
    yellow: '#FFFFE0'
  };

  const selectedColor = colorVariants[color];

  const IconComponent = icon ? Icons[icon] : null;

  return (
    <Button
      className="bg-white hover:bg-opacity-100 text-opacity-90 font-medium rounded-full px-8 py-4 transition-all duration-300 flex items-center justify-center gap-2 border-2 shadow-md hover:scale-105"
      style={{
        color: selectedColor,
        borderColor: selectedColor,
        boxShadow: `0 0 10px ${selectedColor}40`,
        minWidth: '180px',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 20px ${selectedColor}60`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 0 10px ${selectedColor}40`;
      }}
      onClick={onClick}
    >
      {IconComponent && <IconComponent className="h-6 w-6" />}
      {children}
    </Button>
  )
}

const Icons = {
  Cat: (props: any) => (
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
  ),
  Dog: (props: any) => (
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
  ),
  // ... Add other icon components here (Bird, Bug, Flame, Flower, Squirrel, Beaker, Sun, Moon, Cloud)
};