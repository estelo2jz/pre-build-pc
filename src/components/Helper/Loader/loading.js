import React from 'react';
import ReactLoading from 'react-loading';

import './loading.scss';

const loading = () => {
  return (
    <div className="loading">
      <ReactLoading type={"bars"} color={"#fff"} height={200} width={200} />
    </div>
  )
}

export default loading