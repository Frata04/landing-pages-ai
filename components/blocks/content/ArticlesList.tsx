import { Card, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Article {
  id: string
  title: string
  description?: string
  type?: 'article' | 'guide' | 'update'
}

interface ArticlesListProps {
  title: string
  subtitle?: string
  articles: Article[]
  className?: string
}

export function ArticlesList({
  title,
  subtitle,
  articles,
  className,
}: ArticlesListProps) {
  const getBadgeVariant = (type?: string) => {
    switch (type) {
      case 'guide': return 'secondary'
      case 'update': return 'outline'
      default: return 'default'
    }
  }

  return (
    <section className={cn('py-24 px-4', className)}>
      <div className="container mx-auto max-w-4xl">
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

        <div className="space-y-4">
          {articles.map((article, index) => (
            <Card 
              key={article.id} 
              className="bg-surface/30 border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer group"
            >
              <CardHeader className="flex flex-row items-start gap-6 p-6">
                <span className="text-4xl font-bold text-muted-foreground/20 font-mono tabular-nums shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-lg font-semibold font-heading group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    {article.type && (
                      <Badge 
                        variant={getBadgeVariant(article.type)} 
                        className="font-mono text-xs shrink-0"
                      >
                        {article.type}
                      </Badge>
                    )}
                  </div>
                  {article.description && (
                    <p className="text-muted-foreground text-sm">
                      {article.description}
                    </p>
                  )}
                </div>

                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
