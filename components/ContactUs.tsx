import React from 'react';

const ContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-8 bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 flex justify-between">
        <form className="flex-1 mr-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1 text-gray-600">Name *</label>
            <input
              type="text"
              name="name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1 text-gray-600">Mobile *</label>
            <input
              type="text"
              name="mobile"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1 text-gray-600">Email *</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1 text-gray-600">Subject *</label>
            <input
              type="text"
              name="subject"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1 text-gray-600">Message *</label>
            <textarea
              name="message"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" name="captcha" className="mr-2" />
            <label className="text-sm text-gray-600">I&apos;m not a robot</label>
          </div>
          <button
            type="submit"
            className="py-3 px-6 bg-orange-500 text-white rounded hover:bg-orange-600 focus:outline-none"
          >
            SEND MESSAGE
          </button>
        </form>
        <div className="flex-1">
          <div className="mb-8 mt-[5%]">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 pt-16">EasyBidder Corporation - India</h2>
            <p className="mb-2 text-gray-600">
              F-18 Silicon View, Archana-Patia Road, Opp: D.R World Multiplex, Parvat Patia,
              Surat-395010 (Gujarat –India)
            </p>
            <p className="mb-2 text-gray-600">care{`{at}`}easybidder{`{dot}`}com</p>
            <p className="mb-2 text-gray-600">+91-7048213831</p>
            <p className="text-gray-600">(Mon-Fri, 11:00am to 6:00pm)</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">EasyBidder Corporation - UK</h2>
            <p className="mb-2 text-gray-600">
              13, Melvishaw, Leatherhead, Surrey, London kt22 8sx United Kingdom
            </p>
            <p className="text-gray-600">info{`{at}`}easybidder{`{dot}`}com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
