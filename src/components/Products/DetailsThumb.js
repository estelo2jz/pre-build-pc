import React from 'react';
import './styles/DetailsThumb.scss';

export default function DetailsThumb({images, setIndex}) {
    return (
        <div className="details-thumb">
            {
                images.map((img, index)=>(
                    <img src={img} alt="" key={index} 
                    onClick={() => setIndex(index)} />
                ))
            }
        </div>
    )
}