export function ValtaContact() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-valta-navy mb-6">
              Ready to accelerate your project?
            </h2>
            <p className="text-xl text-gray-600">
              Get your appraisal started today. Fast turnaround, competitive pricing, guaranteed accuracy.
            </p>
          </div>

          {/* Contact options grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact form preview */}
            <div className="valta-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-valta-navy mb-6">Request Appraisal</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-valta-blue focus:border-transparent"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-valta-blue focus:border-transparent"
                  />
                </div>
                
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-valta-blue focus:border-transparent"
                />
                
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-valta-blue focus:border-transparent">
                  <option>Property Type</option>
                  <option>Multifamily</option>
                  <option>Self-Storage</option>
                  <option>Commercial</option>
                  <option>Mixed-Use</option>
                </select>
                
                <textarea 
                  placeholder="Project details, timeline, any specific requirements..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-valta-blue focus:border-transparent"
                ></textarea>
                
                <button className="w-full valta-cta px-6 py-4 text-lg font-semibold rounded-lg">
                  Submit Request
                </button>
              </form>
              
              <p className="text-sm text-gray-500 mt-4 text-center">
                📞 Urgent projects? Call <span className="font-semibold text-valta-blue">(403) 555-0123</span>
              </p>
            </div>

            {/* Direct contact info */}
            <div className="space-y-8">
              <div className="valta-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-valta-navy mb-6">Meet the Founder</h3>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-valta-blue rounded-full flex items-center justify-center text-white text-xl font-bold">
                    CB
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-valta-navy">Chris Blackwood</h4>
                    <p className="text-gray-600">Certified Appraiser, Former Developer</p>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  After 8 years developing multifamily projects across Alberta, 
                  Chris founded Valta to solve the appraisal bottleneck that consistently delayed his own deals.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-valta-blue">📧</span>
                    <span className="text-gray-700">chris@valtapropertyvaluations.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-valta-blue">📱</span>
                    <span className="text-gray-700">(403) 555-0123</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-valta-blue">🏢</span>
                    <span className="text-gray-700">Calgary, AB • Serving Western Canada</span>
                  </div>
                </div>
              </div>

              {/* Quick facts */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-valta-navy mb-4">Why call us first?</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    "Free project consultation within 24 hours",
                    "Transparent pricing with no hidden fees", 
                    "Direct access to your appraiser throughout",
                    "Rush service available for urgent deals"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-valta-blue rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Service area map placeholder */}
          <div className="bg-gray-100 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-valta-navy mb-4">Service Area</h3>
            <p className="text-gray-600 mb-6">
              Primary: Calgary & Edmonton • Extended: All major Western Canada markets
            </p>
            <div className="bg-white rounded-lg p-8 h-48 flex items-center justify-center">
              <div className="text-gray-400">
                🗺️ Interactive service area map coming soon
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}