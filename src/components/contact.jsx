"use client"
import React, { useState } from 'react';



const ContactMe = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  
  return (
    <section id='contact' className="bg-green-100 text-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">DM the founder</h2>
        
        <br></br>
        <div className="max-w-md mx-auto">

            <div className="text-center bg-green-500 p-4 rounded-lg">
              <p className="font-semibold">Thank you for contacting us,</p>
              <p>the founder will be in touch</p>
            </div>
  
            <form  className="p-7 space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg text-gray-800"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg text-gray-800"
                  placeholder="e.g., 0712345678"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg text-gray-800"
                  rows="3"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
             
              <button
                type="submit"
                className="w-full bg-black text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-100 transition duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Contact Founder'}
              </button>
            </form>

          <div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;