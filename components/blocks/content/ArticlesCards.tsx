import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AutoImage } from '@/components/AutoImage'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Article {
  id: string
  title: string
  description?: string
  type?: 'article' | 'guide' | 'update'
}

interface ArticlesCardsProps {
  title: string
  subtitle?: string
  articles: Article[]
  columns?: 2 | 3
  className?: string
}

export function ArticlesCards({
  title,
  subtitle,
  articles,
  columns = 3,
  className,
}: ArticlesCardsProps) {
  const gridCols = columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'

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

        <div className={cn('grid grid-cols-1 gap-6', gridCols)}>
          {articles.map((article, index) => (
            <Card 
              key={article.id} 
              className="bg-surface/30 border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer group overflow-hidden"
            >
              <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
                <AutoImage
                  baseName={`article-${index + 1}`}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {article.type && (
                  <Badge 
                    variant="secondary" 
                    className="absolute top-3 left-3 font-mono text-xs bg-background/80 backdrop-blur-sm"
                  >
                    {article.type}
                  </Badge>
                )}

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold font-heading group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </CardTitle>
              </CardHeader>

              {article.description && (
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {article.description}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
