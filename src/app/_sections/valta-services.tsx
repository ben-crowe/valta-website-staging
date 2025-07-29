export function ValtaServices() {
  const services = [
    {
      title: "Multifamily Appraisals",
      description: "Comprehensive valuations for apartment buildings, condos, and residential investment properties across Western Canada.",
      features: ["Income approach analysis", "Market comparables", "Highest & best use assessment", "Rent roll analysis"],
      icon: "🏢"
    },
    {
      title: "Self-Storage Appraisals", 
      description: "Specialized expertise in self-storage facility valuations with deep market knowledge and industry-specific methodologies.",
      features: ["Operating expense analysis", "Occupancy trend evaluation", "Revenue optimization assessment", "Market penetration studies"],
      icon: "🏪"
    },
    {
      title: "Commercial Properties",
      description: "Full-service appraisals for office buildings, retail centers, industrial properties, and mixed-use developments.",
      features: ["Cash flow analysis", "Cap rate determination", "Market positioning", "Development feasibility"],
      icon: "🏬"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-valta-navy mb-6">
            Specialized Appraisal Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We focus on the property types that matter most to developers and investors, 
            delivering accurate valuations with the speed your projects demand.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="valta-card rounded-lg p-8 group hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-valta-navy mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-valta-blue rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process timeline */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-valta-navy text-center mb-12">Our Streamlined Process</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Initial Consultation", desc: "Project scope and timeline discussion" },
              { step: "02", title: "Property Analysis", desc: "On-site inspection and data collection" },
              { step: "03", title: "Valuation Research", desc: "Market analysis and comparable studies" },
              { step: "04", title: "Final Report", desc: "Comprehensive appraisal delivery" }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-valta-blue text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold text-valta-navy mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-valta-blue/30 -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}