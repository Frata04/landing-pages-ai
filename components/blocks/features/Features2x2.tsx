import { Card } from '@/components/ui/card'
import { DynamicIcon } from '@/components/blocks/icons'
import { cn } from '@/lib/utils'

interface Feature {
  id: string
  name: string
  description?: string
}

interface Features2x2Props {
  title: string
  subtitle?: string
  features: Feature[]
  className?: string
}

export function Features2x2({
  title,
  subtitle,
  features,
  className,
}: Features2x2Props) {
  const displayFeatures = features.slice(0, 4)

  return (
    <section className={cn('py-24 px-4', className)}>
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight font-heading">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayFeatures.map((feature) => (
            <Card 
              key={feature.id} 
              className="bg-surface/50 border-border/50 hover:border-primary/30 transition-all duration-300 group p-8"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <DynamicIcon 
                    name={feature.name} 
                    size={28} 
                    strokeWidth={1.25}
                    className="text-primary"
                  />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-heading">
                    {feature.name}
                  </h3>
                  {feature.description && (
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
