import { Building, Warehouse, Building2 } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  icon: "Home" | "Lightbulb" | "Palette"
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
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
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-xl bg-white group">
      <CardHeader className="p-6 pb-2">
        <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
          <IconComponent />
        </div>
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      </CardHeader>
      <CardContent className="p-6 pt-2">
        <p className="text-slate-600">{description}</p>
      </CardContent>
    </Card>
  )
}
