import React from 'react'

const Header = () => {
  return (
    <div className="container mx-auto px-6 py-10">
        <header className="flex justify-between items-center mb-10">
          <div className="logo text-white font-orbitron text-2xl flex items-center gap-2">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAgCAYAAACCcSF5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF7SURBVHgB7ZfhbYNADIUfVQdghOsGbFC6QTZoRsgGJRO0G4Rs0E4QOkGzQdmg3SC1hVOiSAk2yh3+wSdZEPISnn3HccZBR4UR0O9K5f8HjOAeI6Cb5XRYUjxS5HL5g+I9y7IWqVBWpjrRFxTfF3Q/FM8n2qiVv7OI5SY7inBBwqNQs2kkwGSe2KCfJkO66KjNS9VLpTykqL6l8gE2SkQmpvnoWMw3sLFHZNTmZf1ulHLW+jEvrJW6bYqXlck8GWownMCadBUSYK08xNgDxZbiVy7z8ZPiKZVxZtTeRqbEEhNjrrwnZvNTMZufCpfmpYnZSXNzkOZnc960uDPPJtE1PCX63iGgW5q/6PvFUevKPBl7wfX3ByfDI1DwBzfmZUpUCikn8Monniq/MGj5mcg9mS+M+jAvlTfC1LzQ5nDvyXyNfout0fqpPFWSjWs6tfaoczXnKYE3XE+gRdfw8HFcMxIT7sRoGazpdIV+BeJRaSS5f9yZZ6SyqyHdHy7/L/EWYoIkAAAAAElFTkSuQmCC" alt="" />
          </div>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="text-gray-400 hover:text-white">Home</a>
            <a href="#" className="text-gray-400 hover:text-white">About</a>
            <a href="#" className="text-gray-400 hover:text-white">Projects</a>
            <a href="#" className="text-gray-400 hover:text-white">Contact</a>
          </nav>
          <button className="border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">Hire Me</button>
        </header>
    </div>
  )
}

export default Header