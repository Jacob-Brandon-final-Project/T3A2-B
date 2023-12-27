import React from 'react'
import ash from "../photos/ash.png"



const HomePage = () => {
  return (
    <div className="bg-blue-100 h-screen flex items-center justify-center">
      <div className="flex items-center">
        <img src={ash} alt="Logo" className="w-96 h-96 rounded-full mx-auto border-4 border-red-500" />
        <div className="ml-8">
        <h1 className="text-6x1 font-bold mb-4">ASHTON CARDBOARD CIRCUS</h1>
        <p className="text-lg">Experience the thrill of our amazing Product!!!</p>
        </div>
      </div>
      
      
    </div>
  );
}

export default HomePage