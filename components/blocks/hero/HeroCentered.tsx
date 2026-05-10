import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface HeroCenteredProps {
  logo?: string
  strapline?: string
  headline: string
  subheadline: string
  ctaText: string
  ctaLink?: string
  microcopy?: string
  className?: string
}

export function HeroCentered({
  logo,
  strapline,
  headline,
  subheadline,
  ctaText,
  ctaLink = '#signup',
  microcopy,
  className,
}: HeroCenteredProps) {
  return (
    <header 
      className={cn(
        'relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-20',
        className
      )}
    >
      {logo && (
        <div className="mb-8">
          <span className="text-sm font-semibold tracking-[0.3em] uppercase text-primary">
            {logo}
          </span>
        </div>
      )}

      {strapline && (
        <p className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-[0.2em] font-mono">
          {strapline}
        </p>
      )}

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-center mb-8 max-w-4xl leading-[0.95] tracking-tight font-heading">
        {headline}
      </h1>

      <p className="text-lg md:text-xl text-muted-foreground text-center mb-10 max-w-2xl leading-relaxed">
        {subheadline}
      </p>

      <Button 
        size="lg" 
        className="text-base px-8 py-6 rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all duration-300"
        asChild
      >
        <a href={ctaLink}>
          {ctaText}
        </a>
      </Button>

      {microcopy && (
        <p className="mt-5 text-sm text-muted-foreground font-mono tracking-wide">
          {microcopy}
        </p>
      )}
    </header>
  )
}
