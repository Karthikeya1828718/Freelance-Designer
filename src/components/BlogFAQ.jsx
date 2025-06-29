import React from 'react'
import TestimonialSlider from './Testmonial'

const BlogFAQ = () => {
  return (
    <div>
        <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-white text-lg font-bold flex items-center gap-2"><i className="fas fa-asterisk"></i> Blog</h2>
          <a href="#" className="text-xs text-white underline">view all</a>
        </div>
        <div className="space-y-6">
          <article className="bg-black p-4 rounded-xl flex items-center gap-6">
            <img src="blog1.png" className="w-[100px] h-[70px] object-cover rounded-lg" alt="" />
            <div>
              <time className="text-[10px] text-gray-400 font-semibold">Nov 9, 2023</time>
              <h3 className="text-sm font-bold mb-2">How UX works in web</h3>
              <div className="flex gap-2 text-[9px]">
                <span className="border px-2 py-[2px] rounded-full">UI</span>
                <span class="border px-2 py-[2px] rounded-full">UX</span>
              </div>
            </div>
            <button className="bg-white text-black text-xs px-4 py-1 rounded-full">Read</button>
          </article>

          <article className="bg-black p-4 rounded-xl flex items-center gap-6">
            <img src="blog2.png" className="w-[100px] h-[70px] object-cover rounded-lg" alt="" />
            <div>
              <time className="text-[10px] text-gray-400 font-semibold">Nov 9, 2023</time>
              <h3 className="text-sm font-bold mb-2">How UX works in web</h3>
              <div className="flex gap-2 text-[9px]">
                <span className="border px-2 py-[2px] rounded-full">UI</span>
                <span class="border px-2 py-[2px] rounded-full">UX</span>
              </div>
            </div>
            <button className="bg-white text-black text-xs px-4 py-1 rounded-full">Read</button>
          </article>

          <article className="bg-black p-4 rounded-xl flex items-center gap-6">
            <img src="blog3.png" className="w-[100px] h-[70px] object-cover rounded-lg" alt="" />
            <div>
              <time className="text-[10px] text-gray-400 font-semibold">Nov 9, 2023</time>
              <h3 className="text-sm font-bold mb-2">How UX works in web</h3>
              <div className="flex gap-2 text-[9px]">
                <span className="border px-2 py-[2px] rounded-full">UI</span>
                <span class="border px-2 py-[2px] rounded-full">UX</span>
              </div>
            </div>
            <button className="bg-white text-black text-xs px-4 py-1 rounded-full">Read</button>
          </article>
        </div>
      </section>
      <TestimonialSlider/>

      <section class="max-w-5xl mx-auto px-6 py-10">
      

        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">✴ Frequently asked questions</h2>
          <details className="bg-gray-800 rounded-md p-4 mb-2" open>
            <summary className="cursor-pointer font-semibold text-sm">What is your design process?</summary>
            <p className="text-xs text-gray-300 mt-2">My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.</p>
          </details>
          <details className="bg-gray-800 rounded-md p-4 mb-2" close>
            <summary className="cursor-pointer font-semibold text-sm">What tools and software do you use for UX design?</summary>
            <p className="text-xs text-gray-300 mt-2">This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.</p>
          </details>
          <details className="bg-gray-800 rounded-md p-4 mb-2" close>
            <summary className="cursor-pointer font-semibold text-sm">How do you measure the success of your UX designs?</summary>
            <p className="text-xs text-gray-300 mt-2">This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.</p>
          </details>
        </div>
        </section>

            <div className="flex animate-scroll items-center max-w-4xl mx-auto opacity-40 mb-10">
                <div class="flex animate-scroll items-center whitespace-nowrap">
                  <img alt="logo-0" className="mx-4 logo-img" src="marque.png" />
                  <img alt="logo-5" className="mx-4 logo-img" src="marque.png" />
                </div>
            </div>
            </div>
  )
}

export default BlogFAQ;