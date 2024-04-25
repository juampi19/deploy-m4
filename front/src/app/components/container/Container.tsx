'use client'

import type { ContainerProps } from "./type"

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <section className="max-w-full mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      {children}
    </section>
  )
}
