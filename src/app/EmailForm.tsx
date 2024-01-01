'use client';
import React, { useState } from 'react';
import Modal from './Modal';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    // Hide modal on new submission attempt
    setShowModal(false);

    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
  
    if (response.ok) {
      // Show success modal if submission is successful
      setShowModal(true);

      // Optional: Clear the email input after successful submission
      setEmail('');
      
      // Optional: Hide the modal after some time
      setTimeout(() => setShowModal(false), 10000);
    } else {
      // Handle errors, such as displaying an error message to the user
      console.error('There was an issue with the subscription.');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto my-8">
      {showModal && (
      <Modal></Modal>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          Reserve Your Spot
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
