import React from 'react'
import { InfinitySpin } from 'react-loader-spinner';


const Loader = () => {
  return (
    <div className='loader'>
      <InfinitySpin color="grey" />
    </div>
    // <div className="loader">Loader</div>
  )
}

export default Loader


