import { useState } from 'react';
import PolicyContactForm from './../Policy_Contact_Form/Polict_Contact_Form';

const Footer = () => {
    const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="foot w-[100vw] bg-black text-white py-10">
            <div className="cont max-w-[1230px] w-full mx-auto flex flex-col md:flex-row items-center justify-between px-6">
                <div className="company text-center md:text-left">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Misha Company. All rights reserved.</p>
                </div>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#!" onClick={openPopup} className="hover:text-gray-400">Privacy Policy</a>
                    <a href="#!" className="hover:text-gray-400">Terms of Service</a>
                    <a href="#!" onClick={openPopup} className="hover:text-gray-400">Contact Us</a>
                </div>
            </div>
            {/* Pass the popup control to the PolicyContactForm */}
            <PolicyContactForm showPopup={showPopup} onClose={closePopup} />
        </div>
    );
};

export default Footer;
