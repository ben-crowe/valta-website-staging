export function ValtaAdvantage() {
  return (
    <section className="py-20 bg-gradient-to-br from-valta-navy to-slate-800 text-white">
      <div className="container mx-auto px-6">
        {/* Main advantage section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Why developers choose Valta
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Founded by developers who understand the critical path of your projects. 
              We've experienced the frustration of delayed appraisals killing deals, 
              so we built a better solution.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  title: "Developer-First Approach",
                  desc: "We understand acquisition timelines, financing deadlines, and the cost of delays."
                },
                {
                  title: "Technology-Enabled Process", 
                  desc: "Modern tools and workflows that eliminate traditional bottlenecks."
                },
                {
                  title: "Western Canada Expertise",
                  desc: "Deep market knowledge from Calgary to Vancouver, including emerging markets."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-valta-blue rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-white/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats/metrics side */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-valta-blue text-4xl font-bold mb-2">98%</div>
              <div className="text-white/80">On-time delivery rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-valta-blue text-4xl font-bold mb-2">$2.1B</div>
              <div className="text-white/80">Properties appraised</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-valta-blue text-4xl font-bold mb-2">48hrs</div>
              <div className="text-white/80">Average response time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-valta-blue text-4xl font-bold mb-2">5★</div>
              <div className="text-white/80">Client satisfaction</div>
            </div>
          </div>
        </div>

        {/* Testimonial section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
          <blockquote className="text-2xl font-medium mb-6 text-white/90">
            "Valta delivered our multifamily appraisal in 10 days when others quoted 6 weeks. 
            That speed difference saved our acquisition timeline and ultimately the deal."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-valta-blue rounded-full flex items-center justify-center text-white font-bold">
              MK
            </div>
            <div className="text-left">
              <div className="font-semibold">Michael Klein</div>
              <div className="text-white/60">Principal, Klein Development Group</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}