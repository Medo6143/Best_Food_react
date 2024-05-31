import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-gray-200">Company</h2>
            <ul className="text-gray-300 dark:text-gray-500 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline text-gray-100 dark:text-gray-200">About</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline text-gray-100 dark:text-gray-200">Careers</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline text-gray-100 dark:text-gray-200">Brand Center</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline text-gray-100 dark:text-gray-200">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-gray-200">Help center</h2>
            <ul className="text-gray-300 dark:text-gray-500 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline text-gray-100 dark:text-gray-200">Discord Server</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline text-gray-100 dark:text-gray-200">Twitter</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline text-gray-100 dark:text-gray-200">Facebook</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline text-gray-100 dark:text-gray-200">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-gray-200">Legal</h2>
            <ul className="text-gray-300 dark:text-gray-500 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline text-gray-100 dark:text-gray-200">Privacy Policy</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline text-gray-100 dark:text-gray-200">Licensing</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline text-gray-100 dark:text-gray-200">Terms & Conditions</a>
              </li>
            </ul>
          </div>
    
        </div>
        <p className="text-gray-900 dark:text-white">© {new Date().getFullYear()} Best Food. All rights reserved.</p>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            {/* Social media icons */}
        </div>
      </div>
    </footer>
  );
};
