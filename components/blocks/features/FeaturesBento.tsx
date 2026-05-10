import { DynamicIcon } from '@/components/blocks/icons'
import { cn } from '@/lib/utils'

interface Feature {
  id: string
  name: string
  description?: string
}

interface FeaturesBentoProps {
  title: string
  subtitle?: string
  features: Feature[]
  className?: string
}

export function FeaturesBento({
  title,
  subtitle,
  features,
  className,
}: FeaturesBentoProps) {
  const getCardSize = (index: number) => {
    if (index === 0) return 'md:col-span-2 md:row-span-2'
    if (index === 1 || index === 2) return 'md:col-span-1'
    return 'md:col-span-1'
  }

  return (
    <section className={cn('py-24 px-4', className)}>
      <div className="container mx-auto max-w-6xl">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.slice(0, 5).map((feature, index) => (
            <div 
              key={feature.id} 
              className={cn(
                'bg-surface/50 border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group',
                getCardSize(index),
                index === 0 && 'flex flex-col justify-between min-h-[300px]'
              )}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <DynamicIcon 
                  name={feature.name} 
                  size={24} 
                  strokeWidth={1.5}
                  className="text-primary"
                />
              </div>
              
              <div>
                <h3 className={cn(
                  'font-semibold mb-2 font-heading',
                  index === 0 ? 'text-2xl' : 'text-lg'
                )}>
                  {feature.name}
                </h3>
                {feature.description && (
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
