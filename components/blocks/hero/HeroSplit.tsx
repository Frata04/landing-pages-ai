import { Button } from '@/components/ui/button'
import { AutoImage } from '@/components/AutoImage'
import { cn } from '@/lib/utils'

interface HeroSplitProps {
  logo?: string
  strapline?: string
  headline: string
  subheadline: string
  ctaText: string
  ctaLink?: string
  microcopy?: string
  heroImage?: string
  imagePosition?: 'left' | 'right'
  className?: string
}

export function HeroSplit({
  logo,
  strapline,
  headline,
  subheadline,
  ctaText,
  ctaLink = '#signup',
  microcopy,
  heroImage = 'hero',
  imagePosition = 'right',
  className,
}: HeroSplitProps) {
  return (
    <header 
      className={cn(
        'min-h-[80vh] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 py-16',
        className
      )}
    >
      <div className={cn(
        'flex flex-col justify-center',
        imagePosition === 'left' && 'lg:order-2'
      )}>
        {logo && (
          <span className="text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-6">
            {logo}
          </span>
        )}

        {strapline && (
          <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-[0.2em] font-mono">
            {strapline}
          </p>
        )}

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-[0.95] tracking-tight font-heading">
          {headline}
        </h1>

        <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
          {subheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-start gap-4">
          <Button 
            size="lg" 
            className="text-base px-8 py-6 rounded-full bg-foreground text-background hover:bg-foreground/90"
            asChild
          >
            <a href={ctaLink}>
              {ctaText}
            </a>
          </Button>
          
          {microcopy && (
            <p className="text-sm text-muted-foreground font-mono self-center">
              {microcopy}
            </p>
          )}
        </div>
      </div>

      <div className={cn(
        'relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden',
        imagePosition === 'left' && 'lg:order-1'
      )}>
        <AutoImage
          baseName={heroImage}
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
      </div>
    </header>
  )
}
