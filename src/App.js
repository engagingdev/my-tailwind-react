// src/App.js
import React from 'react';

function App() {
  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to My Tailwind App</h1>
        <p className="text-gray-700">This is a simple example of a React app styled with Tailwind CSS.</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
          Click me!
        </button>
      </div>
    </div>
  );
}

export default App;