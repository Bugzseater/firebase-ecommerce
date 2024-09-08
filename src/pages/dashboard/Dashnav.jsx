import React from 'react'

function Dashnav() {
  return (
    <div className='flex w-[70%] h-[100px] bg-opacity-10 border border-gray-100 justify-center items-center rounded-[30px] bg-gray-100'>
          <ul className='text-black flex gap-5 font-bold text-2xl'>
            <li>
              <Link to="/admin/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/admin/add-products">Add Products</Link>
            </li>
          </ul>
    </div>
  )
}

export default Dashnav
