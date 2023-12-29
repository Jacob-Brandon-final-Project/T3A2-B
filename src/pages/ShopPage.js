import React, { useState } from 'react'

const ShopPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-blue-100 text-white">
      <aside className="w-64 p-4 bg-black">
        <h2 className="text-xl font-bold mb-4">Filter By:</h2>
        <ul>
          <li>ALL</li>
          <li>
            <div onClick={() => setIsOpen(!isOpen)}>NBA {isOpen ? '▲' : '▼'} </div>
            {isOpen && (
              <ul>
                <li>Boxes</li>
                <li>Singles</li>
                <li>Packs</li>
              </ul>
            )}
          </li>
          <li>Magic The Gathering</li>
          <li>Dragon Ball Z</li>
        </ul>
      </aside>
    </div>
  )
}

export default ShopPage