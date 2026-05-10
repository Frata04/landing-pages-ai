import { Badge } from '@/components/ui/badge'
import { AutoImage } from '@/components/AutoImage'
import { cn } from '@/lib/utils'

interface Article {
  id: string
  title: string
  description?: string
  type?: 'article' | 'guide' | 'update'
}

interface ArticlesMasonryProps {
  title: string
  subtitle?: string
  articles: Article[]
  className?: string
}

export function ArticlesMasonry({
  title,
  subtitle,
  articles,
  className,
}: ArticlesMasonryProps) {
  const getItemClass = (index: number) => {
    if (index === 0) return 'md:col-span-2 md:row-span-2'
    return ''
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
          {articles.map((article, index) => (
            <article 
              key={article.id} 
              className={cn(
                'group relative overflow-hidden rounded-xl bg-surface/50 border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer',
                getItemClass(index)
              )}
            >
              <div className={cn(
                'relative w-full bg-gradient-to-br from-primary/10 to-primary/5',
                index === 0 ? 'aspect-[4/3]' : 'aspect-video'
              )}>
                <AutoImage
                  baseName={`article-${index + 1}`}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {article.type && (
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 left-4 font-mono text-xs bg-background/80 backdrop-blur-sm"
                  >
                    {article.type}
                  </Badge>
                )}
              </div>

              <div className="p-5">
                <h3 className={cn(
                  'font-semibold font-heading group-hover:text-primary transition-colors line-clamp-2',
                  index === 0 ? 'text-xl' : 'text-base'
                )}>
                  {article.title}
                </h3>
                {article.description && index === 0 && (
                  <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                    {article.description}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
