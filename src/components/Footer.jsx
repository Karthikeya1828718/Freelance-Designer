import React from 'react'

const Footer = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <footer className="text-center text-white text-xs border-t border-gray-1000 pt-5 ">
          <h3 className="text-lg font-bold mb-2">LET’S TALK!</h3>
          <a href="mailto:rehanurraihan@gmail.com" className="text-xs underline">rehanurraihan@gmail.com</a>
          <div className="flex justify-between items-center text-gray-500 mt-6">
            <p>© Rehan Raihan – 2023</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:underline">Dribbble</a>
              <a href="#" className="hover:underline">Behance</a>
              <a href="#" className="hover:underline">Twitter</a>
              <a href="#" class="hover:underline">Instagram</a>
            </div>
          </div>
        </footer>

    </div>
  )
}

export default Footer