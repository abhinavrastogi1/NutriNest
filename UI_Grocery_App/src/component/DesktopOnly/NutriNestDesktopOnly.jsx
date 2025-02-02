import React from "react";
 // Optional: For device detection

const NutriNestDesktopOnly = () => {
  // Optional: Only show this message on mobile devices
  

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center ">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          🍎 Welcome to NutriNest! 🥦
        </h1>
        <p className="text-gray-700 text-base mb-4">
          We're so glad you're here! However, it looks like you're trying to
          access NutriNest from a mobile device.
        </p>
        <p className="text-gray-700 text-base mb-4">
          NutriNest is currently optimized for desktop use only. We want to
          ensure you have the best experience possible, so please visit us on
          your desktop computer.
        </p>
        <p className="text-gray-700 text-base mb-6">
          Thank you for understanding! 💚
        </p>
        <div className="flex justify-center">
          <img
            src="/NutriNest.ico"
            alt="NutriNest Logo"
            className="w-32 h-32 rounded-full shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default NutriNestDesktopOnly;
