'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface AutoImageProps {
  baseName: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
}

const EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp', '.svg']

export function AutoImage({
  baseName,
  alt,
  width = 400,
  height = 300,
  className,
  priority = false,
  fill = false,
}: AutoImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [allFailed, setAllFailed] = useState(false)

  useEffect(() => {
    setCurrentIndex(0)
    setIsLoaded(false)
    setAllFailed(false)
  }, [baseName])

  if (allFailed) {
    return null
  }

  const currentSrc = `/images/${baseName}${EXTENSIONS[currentIndex]}`

  const handleError = () => {
    if (currentIndex < EXTENSIONS.length - 1) {
      setCurrentIndex(prev => prev + 1)
    } else {
      setAllFailed(true)
    }
  }

  return (
    <Image
      key={currentSrc}
      src={currentSrc}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      className={cn(
        'transition-opacity duration-300',
        isLoaded ? 'opacity-100' : 'opacity-0',
        className
      )}
      priority={priority}
      quality={90}
      onError={handleError}
      onLoad={() => setIsLoaded(true)}
    />
  )
}
