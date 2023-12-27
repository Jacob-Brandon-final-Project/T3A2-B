import React from 'react'

const ShopPage = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 p-4 bg-blue-100">
        <h2 className="text-xl font-bold mb-4">Filter By:</h2>
        <ul>
          <li>ALL</li>
          <li>NBA</li>
          <li>Magic The Gathering</li>
          <li>Dragon Ball Z</li>
        </ul>
      </aside>
    </div>
  )
}

export default ShopPage