import React from 'react'

const Expertise = () => {
  return (
    <div>
    
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2"><i className="fas fa-star"></i> Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-300">
          <div>
            <p className="font-semibold mb-1">• Branding</p>
            <p>I create efficient, adaptable, and engaging websites. Webflow forms the foundation of my web development approach.</p>
          </div>
          <div>
            <p className="font-semibold mb-1">• UI Design</p>
            <p>Efficient and engaging websites with a foundation in Webflow, tailored without predefined patterns.</p>
          </div>
          <div>
            <p className="font-semibold mb-1">• UX Design</p>
            <p>Using user-focused methods to innovate and deliver meaningful solutions while achieving business goals.</p>
          </div>
          <div>
            <p className="font-semibold mb-1">• Development</p>
            <p>Custom, secure, and scalable website development without cookie-cutter templates.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Expertise