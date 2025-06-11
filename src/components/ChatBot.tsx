'use client';

import { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { usePathname } from "next/navigation";

interface userDetails {
  name: string;
  phone: string;
  pincode: string;
  qualityOfGold: string;
  quantityOfGold: number;
  otp?: string;
}

const questions = [
  {
    id: 'initial',
    text: 'Does you need gold loan right now?',
    options: [
      { text: 'Yes, I need it now', value: 'yes' },
      { text: 'Just exploring', value: 'explore' },
      { text: 'No, thanks', value: 'no' },
    ],
  },
  {
    id: 'userDetails',
    text: 'Please enter your details',
    type: 'input',
    fields: [
      { name: 'name', label: 'Your Name', type: 'text', required: true },
      { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
      { name: 'pincode', label: 'Pin Code', type: 'text', required: true },
      { name: 'qualityOfGold', label: 'Quality of Gold', type: 'text', required: true },
      { name: 'quantityOfGold', label: 'Quantity of Gold', type: 'number', required: true },
    ],
  },
  {
    id: 'confirm',
    text: 'Confirm submission?',
    options: [
      { text: 'Yes, proceed', value: 'confirm' },
      { text: 'No, go back', value: 'back' },
    ],
  },
];

export default function Chatbot() {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const baseUrl = "http://localhost:4000";
  const [messages, setMessages] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [userDetails, setUserDetails] = useState<userDetails>({
    name: "",
    phone: "",
    pincode: "",
    qualityOfGold: "",
    quantityOfGold: 0,
    otp: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const messagesContainerRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // const handleSubmit = async () => {

  //   if (!userDetails.name.trim()) {
  //     return;
  //   }

  //   if (!/^\d{6}$/.test(userDetails.pincode)) {
  //    // setError("Please enter a valid 6-digit pincode");
  //     return;
  //   }

  //   if (userDetails.quantityOfGold <= 0) {
  //     //setError("Please enter valid gold quantity");
  //     return;
  //   }

  //   try {
  //     const response = await axios.post(`${baseUrl}/api/lead`, {
  //       name: userDetails.name,
  //       phone: userDetails.phone,
  //       pincode: userDetails.pincode,
  //       qualityOfGold: userDetails.qualityOfGold,
  //       quantityOfGold: Number(userDetails.quantityOfGold),
  //     });
  //       // Reset form
  //       setUserDetails({
  //         name: "",
  //         phone: "",
  //         pincode: "",
  //         qualityOfGold: "",
  //         quantityOfGold: 0,
  //       });

  //   } catch (err) {
  //     const errorMessage =
  //       err.response?.data?.message ||
  //       err.message ||
  //       "Submission failed. Please try again.";
  //   }
  // };

  const handleOptionClick = async (option) => {
    const currentQuestion = questions[currentQuestionIndex];

    setMessages((prev) => [...prev, { type: 'user', content: option.text }]);
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: option.value }));

    if (currentQuestion.id === 'initial' && option.value === 'no') {
      setMessages((prev) => [...prev, { type: 'bot', content: 'Thank you for your time. Have a great day!' }]);
      setIsComplete(true);
      return;
    }

    if (currentQuestion.id === 'confirm') {
      if (option.value === 'back') {
        setCurrentQuestionIndex((prev) => prev - 1);
        setMessages((prev) => prev.slice(0, -2));
        return;
      }

      setIsSubmitting(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setMessages((prev) => [
          ...prev,
          { type: 'bot', content: `Your Swarn Sathi request has been submitted successfully! We will contact you at ${userDetails.phone} within 24 hours.` },
        ]);
      } catch (error) {
        setMessages((prev) => [...prev, { type: 'bot', content: 'Sorry, there was an error processing your request. Please try again later.' }]);
      }
      setIsSubmitting(false);
      setIsComplete(true);
      return;
    }

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
      setMessages((prev) => [...prev, { type: 'bot', content: questions[nextIndex].text }]);
    }
  };

  const handleInputChange = (field, value) => {
    setUserDetails((prev) => ({ ...prev, [field]: value }));
  };

  const handleContinueClick = async () => {
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.type === 'input' && currentQuestion.fields) {
      // Validate required fields
      const requiredFields = currentQuestion.fields.filter(field => field.required);
      const missingFields = requiredFields.filter(field => !userDetails[field.name]);

      if (missingFields.length > 0) {
        setMessages(prev => [...prev, {
          type: 'bot',
          content: `Please fill in all required fields: ${missingFields.map(f => f.label).join(', ')}`
        }]);
        return;
      }


      const handleSubmit = async () => {
        console.log("cvvbnm,");
        if (!userDetails.name.trim()) {
          return;
        }

        if (!/^\d{6}$/.test(userDetails.pincode)) {
          // setError("Please enter a valid 6-digit pincode");
          return;
        }

        if (userDetails.quantityOfGold <= 0) {
          //setError("Please enter valid gold quantity");
          return;
        }

        try {
          const response = await axios.post(`${url}/api/lead`, {
            name: userDetails.name,
            phone: userDetails.phone,
            pincode: userDetails.pincode,
            qualityOfGold: userDetails.qualityOfGold,
            quantityOfGold: Number(userDetails.quantityOfGold),
          });
          // Reset form
          setUserDetails({
            name: "",
            phone: "",
            pincode: "",
            qualityOfGold: "",
            quantityOfGold: 0,
          });

        } catch (err) {
          const errorMessage =
            err.response?.data?.message ||
            err.message ||
            "Submission failed. Please try again.";
        }
      };
      handleSubmit();
      // Save details message to chat
      const detailsMessage = ` Name: ${userDetails.name}, Phone: ${userDetails.phone} , PinCode:${userDetails.pincode} `;
      setMessages(prev => [...prev, { type: 'user', content: detailsMessage }]);


      // Move to next question after OTP is sent
      const nextIndex = currentQuestionIndex + 1;
      if (nextIndex < questions.length) {
        setCurrentQuestionIndex(nextIndex);
        setMessages(prev => [...prev, { type: 'bot', content: questions[nextIndex].text }]);
      }
    }
  };


  const restartChat = () => {
    setMessages([]);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setUserDetails({
      name: '', phone: '', pincode: '', qualityOfGold: "",
      quantityOfGold: 0,
      otp: ''
    });
    setIsComplete(false);
    setMessages([{ type: 'bot', content: questions[0].text }]);
  };

  return (
    <div className="chatbot-container">
      {isMinimized && (

        <button onClick={() => { setIsMinimized(false); setMessages([{ type: 'bot', content: questions[0].text }]); }} className="chat-button">
          <span className="text-white">Chat with us</span>
        </button>
      )}

      {!isMinimized && (
        <div className="chat-box">
          <div className="chat-header">
            <div className="chat-header-left">
              <div className="chat-header-icon">💬</div>
              <div>
                <h3 className="chat-header-title">Swarn Sathi Assistant</h3>
                <p className="chat-header-status">Online</p>
              </div>
            </div>
            <button onClick={() => setIsMinimized(true)} className="close-button">−</button>
          </div>

          <div className="chat-body">
            <div ref={messagesContainerRef} className="chat-messages">
              {messages.map((message, index) => (
                <div key={index} className={`message-row ${message.type}`}>
                  <div className={`message-bubble ${message.type}`}>
                    {message.content}
                  </div>
                </div>
              ))}
            </div>

            {!isComplete && !isSubmitting && (
              <div className="input-section">
                {(() => {
                  const currentQuestion = questions[currentQuestionIndex];
                  if (currentQuestion.type === 'input' && Array.isArray(currentQuestion.fields)) {
                    return (
                      <div className="input-fields">
                        {currentQuestion.fields.map((field) => (
                          <div key={field.name} className="input-group">
                            <label>{field.label}</label>
                            <input
                              type={field.type}
                              value={userDetails[field.name]}
                              onChange={(e) => handleInputChange(field.name, e.target.value)}
                              placeholder={field.name === 'otp' ? 'Enter 6-digit OTP' : ''}
                            />
                          </div>
                        ))}
                        <button
                          className="primary-button"
                          onClick={handleContinueClick} disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Processing...' : 'Continue'}
                        </button>
                      </div>
                    );
                  } else if (Array.isArray(currentQuestion.options)) {
                    return (
                      <div className="options-grid">
                        {currentQuestion.options.map((option) => (
                          <button key={option.value} onClick={() => handleOptionClick(option)} className="option-button">
                            {option.text}
                          </button>
                        ))}
                      </div>
                    );
                  }
                  return null;
                })()}
              </div>
            )}

            {isComplete && <button onClick={restartChat} className="primary-button">Start New Conversation</button>}

            {isSubmitting && <div className="loading">Processing...</div>}
          </div>
        </div>
      )}
    </div>
  );
}
