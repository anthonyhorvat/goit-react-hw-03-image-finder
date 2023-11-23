import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

function Loader() {
  return (
    <div style={{ textAlign: 'center', margin: '0 auto' }}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
