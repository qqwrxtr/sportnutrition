import { useEffect } from 'react';

const policyText = [
    "Misha Company does not capture and store any personal information about individuals who access this website, except where you voluntarily choose to give us your personal details via email, feedback forms, or by enquiring about or ordering any of our services or publications; register for an event; and/or subscribe to one of our newsletters.",
    "When individuals register for newsletters, the data supplied is only used by Misha Company to send specific newsletters. Newsletters contain information such as company news, updates, resources, events, and training opportunities. Individuals can view and update their information via a link in the newsletter email, as well as unsubscribe at any time.",
    "We do not pass any of your personal information to outside organizations except with your express consent. Data shared is encrypted.",
    "Misha Company does not send cookies from this site and only monitors IP addresses to assess which pages are most popular. We do not track individual visits. By using this website, you consent to the processing of your data as outlined in this policy.",
    "You have the right to know what personal information we hold, and you can request data corrections or deletion by contacting Misha Company. We regularly delete data no longer required.",
    "For more details, please visit our full privacy policy."
];

const contactInfo = {
    address: "New Derwent House, 69-73 Theobalds Road, London WC1X 8TA",
    phone: "020 7557 7930",
    email: "info@mishacompany.com"
};

const PolicyContactForm = ({ showPopup, onClose }) => {
    useEffect(() => {
        if (showPopup) {
            document.body.style.overflow = "hidden";  // Prevent scrolling while popup is open
        } else {
            document.body.style.overflow = "auto";  // Re-enable scrolling when popup is closed
        }
    }, [showPopup]);

    return (
        <>
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-full sm:max-w-2xl w-full mx-4 sm:mx-0">
                        <h1 className="text-2xl font-bold mb-4 text-center sm:text-left">Privacy Policy</h1>
                        <div className="space-y-4 text-sm sm:text-base">
                            {policyText.map((paragraph, index) => (
                                <p key={index} className="text-gray-700">{paragraph}</p>
                            ))}
                        </div>
                        <h2 className="text-xl font-bold mt-6 mb-4 text-center sm:text-left">Contact Us</h2>
                        <div className="text-gray-700 space-y-2 text-sm sm:text-base">
                            <p><strong>Address:</strong> {contactInfo.address}</p>
                            <p><strong>Phone:</strong> {contactInfo.phone}</p>
                            <p><strong>Email:</strong> <a href={`mailto:${contactInfo.email}`} className="text-blue-500 hover:underline">{contactInfo.email}</a></p>
                        </div>
                        <button 
                            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full sm:w-auto"
                            onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default PolicyContactForm;
