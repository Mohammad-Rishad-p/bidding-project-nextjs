import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; {new Date().getFullYear()} Easy Bidder. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Contact Us
          </a>
        </div>
        <div className="mt-4">
          <a href="https://facebook.com" className="text-gray-400 hover:text-white mx-2">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" className="text-gray-400 hover:text-white mx-2">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-white mx-2">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
