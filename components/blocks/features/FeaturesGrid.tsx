import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DynamicIcon } from '@/components/blocks/icons'
import { cn } from '@/lib/utils'

interface Feature {
  id: string
  name: string
  description?: string
}

interface FeaturesGridProps {
  title: string
  subtitle?: string
  features: Feature[]
  columns?: 2 | 3 | 4
  className?: string
}

export function FeaturesGrid({
  title,
  subtitle,
  features,
  columns = 3,
  className,
}: FeaturesGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
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

        <div className={cn('grid grid-cols-1 gap-6', gridCols[columns])}>
          {features.map((feature) => (
            <Card 
              key={feature.id} 
              className="bg-surface/50 border-border/50 hover:border-primary/30 transition-all duration-300 group"
            >
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <DynamicIcon 
                    name={feature.name} 
                    size={24} 
                    strokeWidth={1.5}
                    className="text-primary"
                  />
                </div>
                <CardTitle className="text-lg font-semibold">
                  {feature.name}
                </CardTitle>
              </CardHeader>
              
              {feature.description && (
                <CardContent className="pt-0">
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
