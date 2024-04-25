'use client'

import React from "react"

interface MenuItemProps {
label: string,
onClick: () => void
}

export const MenuItem: React.FC<MenuItemProps> = ({ label, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="py-3 px-2 hover:bg-neutral-200 transition font-semibold"
    >
      {label}
    </div>
  )
}
