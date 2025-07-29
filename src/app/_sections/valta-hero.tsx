export function ValtaHero() {
  return (
    <section className="relative min-h-[calc(100vh-var(--header-height))] valta-hero text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent z-10" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-valta-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-valta-blue/5 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-[calc(100vh-var(--header-height))] text-center">
        {/* Trust indicator banner */}
        <div className="mb-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
          <p className="text-sm text-white/90 font-medium">
            ⚡ 2-3 Week Delivery • Trusted by 200+ Developers & Investors
          </p>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 max-w-4xl leading-tight">
          Built by developers,
          <br />
          <span className="text-valta-blue">for developers</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl leading-relaxed">
          Fast, accurate commercial appraisals for multifamily and self-storage properties. 
          We understand your timelines because we've been in your shoes.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <button className="valta-cta px-8 py-4 text-lg font-semibold rounded-lg flex-1">
            Request Appraisal
          </button>
          <button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 flex-1">
            View Portfolio
          </button>
        </div>

        {/* Key differentiators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
          <div className="text-center">
            <div className="text-valta-blue text-4xl font-bold mb-2">2-3</div>
            <div className="text-white/80">Week delivery vs 4-6 industry standard</div>
          </div>
          <div className="text-center">
            <div className="text-valta-blue text-4xl font-bold mb-2">200+</div>
            <div className="text-white/80">Projects appraised across Western Canada</div>
          </div>
          <div className="text-center">
            <div className="text-valta-blue text-4xl font-bold mb-2">15+</div>
            <div className="text-white/80">Years combined industry experience</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}