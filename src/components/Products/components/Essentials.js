import React from 'react';

import './styles/Essentials.scss';

const Essentials = ({ essentials }) => {
  return (
    <div className="essentials-thumb">
      {
        essentials.map((img, index) => (
          <img src={img} alt="" key={index} />
        ))
      }
    </div>
  )
}

export default Essentials
