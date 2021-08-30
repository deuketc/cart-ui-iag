import React from 'react';

const ProductItem = (props) => {
  const { id, name, price } = props.product;

  return (
    <>
      <div className='w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none'></div>
      <h2 className='mt-4 text-sm text-gray-700'>id: {id}</h2>
      <p className='mt-1 text-sm text-gray-500'>Name: {name}</p>
      <p className='mt-1 mb-4 text-lg font-medium text-gray-900'>
        Price: ${price}
      </p>
    </>
  );
};

export default ProductItem;
