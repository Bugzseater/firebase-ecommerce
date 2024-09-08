// src/components/Admin.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import AddProducts from './AddProducts';

function Admin() {
  return (
    <div className='flex flex-col min-h-screen'>
      
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-products" element={<AddProducts />} />
          <Route path="/" element={<AddProducts />} /> {/* Default route */}
        </Routes>
    </div>
  );
}

export default Admin;
