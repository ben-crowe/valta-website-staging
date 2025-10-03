// Developer Portfolio Section - Saved Template
// This section can be added back to the About page once real project content is available

{/* Development Projects Showcase */}
<section className="w-full py-12 md:py-24 lg:py-32 bg-white">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
        Not Just an Appraiser - An Active Developer
      </h2>
      <p className="text-xl text-slate-600 max-w-4xl">
        Chris isn't just providing appraisal services to developers - he IS a developer. This gives Valta Property
        Valuations unique insights into what really drives property value.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mb-12">
      <Card className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 rounded-xl">
        <div className="relative">
          <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
            <div className="text-center text-slate-600">
              <div className="text-lg font-semibold mb-2">[PLACEHOLDER PROJECT 1]</div>
              <div className="text-sm">Project Image Here</div>
            </div>
          </div>
          <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold">
            PLACEHOLDER CONTENT
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">
            45-Unit Multifamily Development
          </h3>
          <p className="text-slate-600 text-sm">
            [Placeholder description of the multifamily development project, including key details about size,
            location, and development challenges overcome.]
          </p>
        </CardContent>
      </Card>

      <Card className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 rounded-xl">
        <div className="relative">
          <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
            <div className="text-center text-slate-600">
              <div className="text-lg font-semibold mb-2">[PLACEHOLDER PROJECT 2]</div>
              <div className="text-sm">Project Image Here</div>
            </div>
          </div>
          <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold">
            PLACEHOLDER CONTENT
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">
            Mixed-Use Commercial Project
          </h3>
          <p className="text-slate-600 text-sm">
            [Placeholder description of the mixed-use commercial project, highlighting the complexity of multi-use
            development and market positioning.]
          </p>
        </CardContent>
      </Card>

      <Card className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 rounded-xl">
        <div className="relative">
          <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
            <div className="text-center text-slate-600">
              <div className="text-lg font-semibold mb-2">[PLACEHOLDER PROJECT 3]</div>
              <div className="text-sm">Project Image Here</div>
            </div>
          </div>
          <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold">
            PLACEHOLDER CONTENT
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">
            Self-Storage Facility
          </h3>
          <p className="text-slate-600 text-sm">
            [Placeholder description of the self-storage facility development, emphasizing operational
            understanding and market analysis expertise.]
          </p>
        </CardContent>
      </Card>
    </div>

    <div className="flex justify-center">
      <Button
        size="lg"
        variant="outline"
        className="bg-transparent shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg border-slate-300 hover:bg-slate-50"
      >
        View Chris's Complete Development Portfolio
        <ExternalLink className="ml-2 h-4 w-4" />
      </Button>
    </div>
  </div>
</section>

// Required imports when using this template:
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { ExternalLink } from "lucide-react"