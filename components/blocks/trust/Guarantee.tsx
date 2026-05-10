import { Card, CardContent } from '@/components/ui/card'
import { Shield } from 'lucide-react'
import { cn } from '@/lib/utils'

interface GuaranteeProps {
  text: string
  days?: number
  className?: string
}

export function Guarantee({
  text,
  days,
  className,
}: GuaranteeProps) {
  return (
    <div className={cn('py-12 px-4', className)}>
      <div className="container mx-auto max-w-3xl">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="py-8">
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              
              <div className="text-center sm:text-left">
                {days && days > 0 && (
                  <p className="text-lg font-semibold mb-1 font-heading">
                    Garanzia {days} giorni
                  </p>
                )}
                <p className="text-muted-foreground">
                  {text}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
