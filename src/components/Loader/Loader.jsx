import React from 'react';
import { Bars } from 'react-loader-spinner';

function Loader() {
  return (
    <Bars
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="bars-loading"
      visible={true}
    />
  );
}

export default Loader;
/* 
function Loader() {
    return (
      <div className={css.spinnerContainer}>
        <div className={css.spinner}>
          <div className={css.spinnerItem}></div>
          <div className={css.spinnerItem}></div>
          <div className={css.spinnerItem}></div>
        </div>
      </div>
    );
  }
  
  export default Loader; */
