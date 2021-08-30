import { useSelector, useDispatch } from 'react-redux';
import CartItem from './cartItem';
import {
  selectCart,
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
  submitOrder,
} from './cartSlice';

const ShoppingCart = () => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce(
    (n, { price, quantity }) => n + price * quantity,
    0
  );

  const formattedTotalPrice = new Intl.NumberFormat().format(totalPrice);

  const increaseOnClick = (product) => {
    dispatch(increaseQuantity(product));
  };

  const decreaseOnClick = (product) => {
    dispatch(decreaseQuantity(product));
  };

  const removeItemOnClick = (product) => {
    dispatch(removeProduct(product));
  };

  const submitOrderOnClick = () => {
    dispatch(submitOrder(cart));
  };

  return (
    <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
      <h1 className='text-2xl font-extrabold tracking-tight text-gray-900'>
        Your Shopping Cart
      </h1>
      <div className='mt-6 grid grid-cols-1 gap-y-20 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-16'>
        {cart.map((item) => {
          return (
            <div className='group relative flex flex-col mb-8' key={item.id}>
              <CartItem product={item} />
              <span> Quantity: {item.quantity} </span>
              <div>
                <button
                  className='mb-1 mr-1 mt-auto items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-3 md:text-lg md:px-10'
                  onClick={() => {
                    decreaseOnClick(item);
                  }}
                >
                  -
                </button>
                <button
                  className='mb-1 mr-1 mt-auto items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-3 md:text-lg md:px-10'
                  onClick={() => {
                    increaseOnClick(item);
                  }}
                >
                  +
                </button>
                <button
                  className='mb-1 mt-auto items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-3 md:text-lg md:px-10'
                  onClick={() => {
                    removeItemOnClick(item);
                  }}
                >
                  Remove Item
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {cart.length !== 0 && (
        <button
          onClick={() => {
            submitOrderOnClick();
          }}
          className='mb-8 mt-auto items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-500 md:py-3 md:text-lg md:px-10'
        >
          Place Order
        </button>
      )}
      <p>Products in cart {cart.length}</p>
      <p>Total: {`$${formattedTotalPrice}`}</p>
    </div>
  );
};
export default ShoppingCart;
