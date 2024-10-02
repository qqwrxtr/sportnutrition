import { useState, useEffect } from "react";

const DisclaimerPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-10">Health Disclaimer</h2>
          <p className="text-md text-gray-700 mb-10">
            The content presented on this page is intended for general
            informational purposes only and is not a substitute for professional
            medical advice, diagnosis, or treatment. Individual results may vary
            depending on various factors, including genetics, exercise, and diet.
            Always consult with a qualified healthcare provider for specific 
            advice regarding your health and fitness goals. The authors and 
            publisher of this content are not responsible for any adverse 
            effects resulting from following the recommendations discussed 
            herein. Use of this information is at your own risk.
          </p>
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-blue-500 text-white text-lg rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            I Understand
          </button>
        </div>
      </div>
    )
  );
};

export default DisclaimerPopup;
