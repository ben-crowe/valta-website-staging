// Icon Showcase Component - View all available Lucide icons for your project
// To view this, temporarily add <IconShowcase /> to any page

import React from 'react'
import * as Icons from 'lucide-react'

// Recommended icons for Real Estate/Appraisal business
const recommendedIcons = {
  // Buildings & Property
  'Building': Icons.Building,
  'Building2': Icons.Building2,
  'Home': Icons.Home,
  'Landmark': Icons.Landmark,
  'Castle': Icons.Castle,
  'Warehouse': Icons.Warehouse,
  'Store': Icons.Store,
  
  // Business & Finance
  'TrendingUp': Icons.TrendingUp,
  'TrendingDown': Icons.TrendingDown,
  'BarChart': Icons.BarChart,
  'BarChart2': Icons.BarChart2,
  'BarChart3': Icons.BarChart3,
  'LineChart': Icons.LineChart,
  'PieChart': Icons.PieChart,
  'Calculator': Icons.Calculator,
  'DollarSign': Icons.DollarSign,
  'Briefcase': Icons.Briefcase,
  'FileText': Icons.FileText,
  'ClipboardCheck': Icons.ClipboardCheck,
  'FileCheck': Icons.FileCheck,
  'Receipt': Icons.Receipt,
  
  // Quality & Trust
  'Shield': Icons.Shield,
  'ShieldCheck': Icons.ShieldCheck,
  'Award': Icons.Award,
  'Medal': Icons.Medal,
  'Star': Icons.Star,
  'BadgeCheck': Icons.BadgeCheck,
  'Stamp': Icons.Stamp,
  'CheckCircle': Icons.CheckCircle,
  'CheckCircle2': Icons.CheckCircle2,
  'Verified': Icons.BadgeCheck,
  
  // Time & Speed
  'Clock': Icons.Clock,
  'Timer': Icons.Timer,
  'Zap': Icons.Zap,
  'Rocket': Icons.Rocket,
  'FastForward': Icons.FastForward,
  'Gauge': Icons.Gauge,
  
  // Analysis & Search
  'Search': Icons.Search,
  'ScanSearch': Icons.ScanSearch,
  'Microscope': Icons.Microscope,
  'Eye': Icons.Eye,
  'Focus': Icons.Focus,
  'Target': Icons.Target,
  'Crosshair': Icons.Crosshair,
  'ZoomIn': Icons.ZoomIn,
  
  // People & Service
  'Users': Icons.Users,
  'UserCheck': Icons.UserCheck,
  'Handshake': Icons.Handshake,
  'HeartHandshake': Icons.HeartHandshake,
  'MessageCircle': Icons.MessageCircle,
  'UserPlus': Icons.UserPlus,
  'UsersRound': Icons.UsersRound,
  
  // Navigation & Process
  'Compass': Icons.Compass,
  'Map': Icons.Map,
  'MapPin': Icons.MapPin,
  'Route': Icons.Route,
  'GitBranch': Icons.GitBranch,
  'Workflow': Icons.Workflow,
  'ArrowRight': Icons.ArrowRight,
  'ChevronRight': Icons.ChevronRight,
  'TrendingUp2': Icons.TrendingUp,
  
  // Communication
  'Phone': Icons.Phone,
  'Mail': Icons.Mail,
  'MessageSquare': Icons.MessageSquare,
  'Send': Icons.Send,
  'Bell': Icons.Bell,
  
  // Success & Growth
  'Trophy': Icons.Trophy,
  'Crown': Icons.Crown,
  'Sparkles': Icons.Sparkles,
  'Lightbulb': Icons.Lightbulb,
  'Flame': Icons.Flame,
}

export default function IconShowcase() {
  return (
    <div className="p-8 bg-white">
      <h1 className="text-3xl font-bold mb-8">Icon Library for Valta</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
        {Object.entries(recommendedIcons).map(([name, Icon]) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center p-4 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <Icon className="h-8 w-8 text-blue-600 mb-2" />
            <span className="text-xs text-center text-slate-600">{name}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-12 p-6 bg-slate-50 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Usage Example:</h2>
        <pre className="bg-slate-900 text-white p-4 rounded overflow-x-auto">
          <code>{`import { Building2, ShieldCheck, Zap } from 'lucide-react'

// In your component:
<Building2 className="h-8 w-8 text-blue-600" />
<ShieldCheck className="h-8 w-8 text-blue-600" />
<Zap className="h-8 w-8 text-blue-600" />`}</code>
        </pre>
      </div>
    </div>
  )
}