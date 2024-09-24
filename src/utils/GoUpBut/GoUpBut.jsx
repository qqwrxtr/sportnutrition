import React, { useState, useEffect } from 'react';

const GoUpBut = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 w-12 h-12 bg-white hover:bg-black hover:text-white text-black rounded-full shadow-md flex justify-center items-center text-xl"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default GoUpBut;
