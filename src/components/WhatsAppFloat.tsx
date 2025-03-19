// import React from "react";

// const WhatsAppFloat = () => {
//     return (
//         <a
//             href="https://wa.me/7044494994#033-4804-0009"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="float"
//         >
//             <img
//                 src="https://swarnsathi.com/images/whatsapp.png"
//                 alt="WhatsApp"
//             />
//         </a>
//     );
// };

// export default WhatsAppFloat;

// import React from 'react';

// const WhatsAppFloat: React.FC = () => {
//   return (
//     <a 
//       href="https://wa.me/7044494994#033-4804-0009" 
//       target="_blank" 
//       rel="noopener noreferrer" 
//       className="whatsapp-float"
//     >
//       <img 
//         src="https://swarnsathi.com/images/whatsapp.png" 
//         alt="Chat on WhatsApp"
//         className="whatsapp-icon" 
//       />
//     </a>
//   );
// };

// export default WhatsAppFloat;

// // Add this to your CSS file or CSS-in-JS solution
// import './WhatsAppFloat.css'; // Create this CSS file or use CSS-in-JS

import React from 'react';

const WhatsAppFloat: React.FC = () => {
  return (
    <a
      href="https://wa.me/7044494994#033-4804-0009"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <img
        src="https://swarnsathi.com/images/whatsapp.png"
        alt="Chat on WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
};

export default WhatsAppFloat;

// CSS styles
import './WhatsAppFloat.css'; // Create this file or use CSS-in-JS