import React, { useState } from 'react';

const TestimonialSlider = () => {
  const messages = [
    "“Synergy’s resume builder is fantastic. It helped me create a professional resume that stood out to employers.”",
    "“The design workflow is intuitive and fast. I was able to build a full mockup in no time.”",
    "“The UI design and attention to detail are outstanding. This product saved me hours of work.”"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const showPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + messages.length) % messages.length);
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  return (
    <section class="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">✴ What they say</h2>  
        <div class="flex flex-col md:flex-row mb-10 gap-6">
            <div className="flex items-center gap-4">
                <img class="w-12 h-12 rounded-full" src="what-they-say.png" alt="" />
                <div>
                    <p className="font-semibold">Floyd Miles</p>
                    <p className="text-xs text-gray-400">Eddy</p>
                </div>
            </div>
          
        
            <div className="flex items-center gap-4 w-full max-w-3xl mx-auto min-h-20">
                <div className="flex-1 min-w-0">
                    <p className="text-sm text-white min-h-12 flex items-center">
                    {messages[currentIndex]}
                    </p>
                </div>

                <div className="flex gap-3 shrink-0">
                    <button onClick={showPrevious} className="w-8 h-8 bg-white text-black rounded-full">
                    <i className="fas fa-arrow-left"></i>
                    </button>
                    <button onClick={showNext} className="w-8 h-8 bg-white text-black rounded-full">
                    <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default TestimonialSlider;
