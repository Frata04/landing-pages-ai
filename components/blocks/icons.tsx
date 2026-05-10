'use client'

import {
  Layers,
  Sparkles,
  Shield,
  Zap,
  Brain,
  Target,
  Palette,
  Users,
  Rocket,
  Lock,
  Award,
  TrendingUp,
  Eye,
  Wand2,
  Compass,
  Crown,
  Diamond,
  Gem,
  Star,
  Heart,
  type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  'orchestrazione': Layers,
  'creativ': Palette,
  'design': Palette,
  'visuale': Eye,
  'visual': Eye,
  'estetica': Sparkles,
  'brand': Shield,
  'coerenza': Shield,
  'identità': Shield,
  'memoria': Brain,
  'memory': Brain,
  'velocità': Zap,
  'speed': Zap,
  'omnichannel': Zap,
  'esecuzione': Rocket,
  'execution': Rocket,
  'élite': Crown,
  'elite': Crown,
  'lusso': Diamond,
  'luxury': Diamond,
  'premium': Gem,
  'qualità': Award,
  'quality': Award,
  'strategia': Compass,
  'strategy': Compass,
  'target': Target,
  'obiettivo': Target,
  'ai': Brain,
  'intelligenza': Brain,
  'automazione': Wand2,
  'automation': Wand2,
  'team': Users,
  'community': Users,
  'collaborazione': Users,
  'crescita': TrendingUp,
  'growth': TrendingUp,
  'risultati': TrendingUp,
  'sicurezza': Lock,
  'security': Lock,
  'protezione': Lock,
  'fiducia': Heart,
  'trust': Heart,
  'default': Star,
}

export function getIconForText(text: string): LucideIcon {
  const lowerText = text.toLowerCase()
  
  for (const [keyword, icon] of Object.entries(iconMap)) {
    if (lowerText.includes(keyword)) {
      return icon
    }
  }
  
  return iconMap['default']
}

interface DynamicIconProps {
  name: string
  size?: number
  strokeWidth?: number
  className?: string
}

export function DynamicIcon({ 
  name, 
  size = 24, 
  strokeWidth = 1.5,
  className = ''
}: DynamicIconProps) {
  const IconComponent = getIconForText(name)
  
  return (
    <IconComponent 
      size={size} 
      strokeWidth={strokeWidth}
      className={className}
    />
  )
}

export {
  Layers,
  Sparkles,
  Shield,
  Zap,
  Brain,
  Target,
  Palette,
  Users,
  Rocket,
  Lock,
  Award,
  TrendingUp,
  Eye,
  Wand2,
  Compass,
  Crown,
  Diamond,
  Gem,
  Star,
  Heart,
}
