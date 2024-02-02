import React from 'react'

const ContactUs = () => {
  return (
    <>
      <div className="container mx-auto p-8 rounded-lg shadow-lg bg-gradient-to-r from-sky-200 to-sky-300">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-12 rounded-lg shadow-inner">
            <div className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Get Updates and News!
            </div>
            <div className="flex items-center">
              <input
                className="p-3 w-full rounded-lg mr-4 border-2 border-gray-400 placeholder-gray-400 font-medium text-lg focus:outline-none focus:border-black"
                type="text"
                placeholder="Your Email Address"
              />
              <button className="bg-gradient-to-r from-sky-500 to-sky-700 text-white p-3 rounded-lg w-40 font-semibold text-xl hover:bg-sky-800 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-100 to-green-100 p-12 rounded-lg shadow-inner">
            <div className="text-3xl font-bold mb-4">Contact Us</div>
            <div>
              <p className="mb-4">
                <i className="fas fa-envelope mr-2"></i> Email: support@example.com
              </p>
              <p className="mb-4">
                <i className="fas fa-phone mr-2"></i> Phone: +1 555-555-5555
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs