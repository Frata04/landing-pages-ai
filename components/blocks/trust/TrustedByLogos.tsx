import { AutoImage } from '@/components/AutoImage'
import { cn } from '@/lib/utils'

interface TrustedByLogosProps {
  text?: string
  logoCount?: number
  animated?: boolean
  className?: string
}

export function TrustedByLogos({
  text = 'Trusted by industry leaders',
  logoCount = 5,
  animated = false,
  className,
}: TrustedByLogosProps) {
  const logos = Array.from({ length: logoCount }, (_, i) => `client-${i + 1}`)

  return (
    <div className={cn('py-12 px-4', className)}>
      <div className="container mx-auto max-w-5xl">
        <p className="text-xs font-medium text-muted-foreground mb-8 uppercase tracking-[0.25em] text-center font-mono">
          {text}
        </p>
        
        <div className={cn(
          'flex flex-wrap justify-center items-center gap-x-12 gap-y-6',
          animated && 'animate-scroll'
        )}>
          {logos.map((baseName) => (
            <div 
              key={baseName}
              className="opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              <AutoImage
                baseName={baseName}
                alt={`Client logo`}
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
