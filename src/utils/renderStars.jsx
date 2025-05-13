import React from 'react';

export default function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return [
    ...Array(fullStars).fill(<i className='fa-solid fa-star text-warning'></i>),
    ...Array(halfStar).fill(<i className='fa-solid fa-star-half-stroke text-warning'></i>),
    ...Array(emptyStars).fill(<i className='fa-regular fa-star text-warning'></i>)
  ].map((star, index) => React.cloneElement(star, { key: index }));
};