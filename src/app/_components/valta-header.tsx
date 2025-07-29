export function ValtaHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-valta-blue w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              V
            </div>
            <span className="text-xl font-bold text-valta-navy">Valta Property Valuations</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-valta-blue transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-valta-blue transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-valta-blue transition-colors">About</a>
            <a href="#portfolio" className="text-gray-700 hover:text-valta-blue transition-colors">Portfolio</a>
            <a href="#contact" className="text-gray-700 hover:text-valta-blue transition-colors">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <a href="tel:4035550123" className="hidden md:block text-sm text-gray-600">
              📞 (403) 555-0123
            </a>
            <button className="bg-valta-blue text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
              Request Appraisal
            </button>
            
            {/* Mobile menu button */}
            <button className="md:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}