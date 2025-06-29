import React from 'react'

const Work = () => {
  return (
    <>

        <section className="max-w-5xl mx-auto px-6 py-10">
        <header className="flex justify-between items-center text-gray-300 mb-6">
          <h2 className="text-lg font-semibold flex items-center gap-2"><i className="fas fa-asterisk"></i> Works</h2>
          <a href="#" className="text-xs text-gray-600">view all</a>
        </header>
        <div className="space-y-6">
          <article className="flex flex-col md:flex-row bg-gray-700 rounded-xl overflow-hidden">
            <img src="blog1.png" alt="" className="md:w-1/2 object-cover" id='img' />
            <div className="p-6 text-sm text-gray-300 md:w-1/2">
              <h3 className="font-semibold mb-2">Analysis Application</h3>
              <p className="mb-4 text-xs">A fully featured UI design for financial management.</p>
              <button className="text-xs border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-600 transition">Case Study</button>
            </div>
          </article>
          <article className="flex flex-col md:flex-row bg-gray-700 rounded-xl overflow-hidden">
            <img src="blog2.png" alt="" className="md:w-1/2 object-cover" id='img' />
            <div className="p-6 text-sm text-gray-300 md:w-1/2">
              <h3 className="font-semibold mb-2">Fortknox Application</h3>
              <p className="mb-4 text-xs">Modern responsive design for a digital vault platform.</p>
              <button className="text-xs border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-600 transition">Case Study</button>
            </div>
          </article>
          <article className="flex flex-col md:flex-row bg-gray-700 rounded-xl overflow-hidden">
            <img src="blog3.png" alt="" className="md:w-1/2 object-cover" id='img' />
            <div className="p-6 text-sm text-gray-300 md:w-1/2">
              <h3 className="font-semibold mb-2">Zenocide Application</h3>
              <p className="mb-4 text-xs">Creative branding + UI/UX for a concept startup app.</p>
              <button className="text-xs border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-600 transition">Case Study</button>
            </div>
          </article>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10">
        <header className="flex justify-between items-center text-gray-300 mb-6">
        <h2 className="text-base font-semibold mb-4 flex items-center"><i className="fas fa-asterisk mr-2"></i>Experience</h2>
        </header>
        <ul className="divide-y divide-gray-700 text-xs text-gray-300 max-w-4xl mx-auto">
          <li className="flex justify-between py-3"><span className="font-semibold">Lead Product Designer</span><span>Rynflow</span></li>
          <li className="flex justify-between py-3"><span className="font-semibold">Intern Designer</span><span>CW Creative</span></li>
          <li className="flex justify-between py-3"><span className="font-semibold">UI Designer</span><span>Doradesign</span></li>
          <li className="flex justify-between py-3"><span className="font-semibold">Frontend Developer</span><span>OpenCulture</span></li>
        </ul>
      </section>
      
    </>
  )
}

export default Work