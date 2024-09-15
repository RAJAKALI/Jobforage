import React from 'react'

const Delete = ({ isOpen, onClose, onDelete }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className='fixed inset-0 bg-gray-800 opacity-50' onClick={onClose}></div>
      <div className='bg-white p-6 rounded shadow-lg z-10'>
        <h2 className='text-lg font-semibold mb-4'>Confirm Deletion</h2>
        <p className='mb-4'>Are you sure you want to delete this job ?</p>
        <div className='flex justify-end gap-4'>
          <button className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600' onClick={onDelete}>Delete
          </button>
          <button className='bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600' onClick={onClose}>Cancel
          </button>
        </div>
      </div>
    </div>
  )
};

export default Delete;