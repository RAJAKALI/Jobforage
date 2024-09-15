import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
const override = {
  display: 'block',
  margin: '100px auto'
}
const Spinner = ({ loading }) => {
  return (
    <div className='flex items-center justify-center'>
      <div className='flex items-center space-x-4'>
        <ClipLoader color='#44338ca' loading={loading} cssOverride={override} size={50} />
        <h6 className='text-lg'>Loading...</h6>
      </div>
    </div>
  )
};

export default Spinner;