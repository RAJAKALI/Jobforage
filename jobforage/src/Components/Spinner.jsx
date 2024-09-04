import React from 'react';
import Cliploader from 'react-spinners/ClipLoader';
const override={
    display:'block',
    margin:'100px auto'
}
const Spinner = ({loading}) => {
  return (
    <Cliploader color='#44338ca' loading={loading} cssOverride={override} size={150}/>
  )
};

export default Spinner;