import { Building, Warehouse, Building2 } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  icon: "Home" | "Lightbulb" | "Palette"
  backgroundImage?: string
}

export default function ServiceCard({ title, description, icon, backgroundImage }: ServiceCardProps) {
  const IconComponent = () => {
    switch (icon) {
      case "Home":
        return <Building className="h-10 w-10 text-blue-600" />
      case "Lightbulb":
        return <Warehouse className="h-10 w-10 text-blue-600" />
      case "Palette":
        return <Building2 className="h-10 w-10 text-blue-600" />
      default:
        return <Building className="h-10 w-10 text-blue-600" />
    }
  }

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-xl group relative">
      {/* Background Image Layer - subtle and barely visible */}
      {backgroundImage && (
        <>
          <div 
            className="absolute inset-0 z-0 opacity-10 group-hover:opacity-15 transition-opacity duration-500"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/95 via-white/93 to-white/90" />
        </>
      )}
      
      {/* Content Layer */}
      <div className="relative z-10">
        <CardHeader className="p-6 pb-2">
          <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
            <IconComponent />
          </div>
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        </CardHeader>
        <CardContent className="p-6 pt-2">
          <p className="text-slate-600">{description}</p>
        </CardContent>
      </div>
    </Card>
  )
}
