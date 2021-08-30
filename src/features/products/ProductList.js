import { useEffect } from 'react';
import ProductItem from './ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, selectProducts } from './productsSlice';
import { addProduct } from '../shoppingcart/cartSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const addToCartOnClick = (product) => {
    dispatch(addProduct(product));
  };

  return (
    <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
      <h1 className='text-2xl font-extrabold tracking-tight text-gray-900'>
        Our Products
      </h1>
      <div className='mt-6 grid grid-cols-1 gap-y-20 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-16'>
        {data && (
          <>
            {data.map((product) => {
              return (
                <div className='group relative flex flex-col' key={product.id}>
                  <ProductItem product={product} />
                  <button
                    className='mt-auto w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-3 md:text-lg md:px-10'
                    onClick={() => addToCartOnClick(product)}
                  >
                    Add to cart
                  </button>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductList;
