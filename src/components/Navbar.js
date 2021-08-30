import { useSelector } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { selectCart } from '../features/shoppingcart/cartSlice';

const Navbar = () => {
  const cart = useSelector(selectCart);
  const cartCount = cart.reduce((n, { quantity }) => n + quantity, 0);
  return (
    <header>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <p>Logo</p>
          </div>
          <nav className='hidden md:flex space-x-10'>
            <Link
              className='py-2 text-base font-medium text-gray-500 hover:text-gray-900'
              to='/'
            >
              Products
            </Link>

            <Link
              className='py-2 text-base font-medium text-gray-500 hover:text-gray-900'
              to='/cart'
            >
              Shopping Cart
            </Link>
            <Link
              className='py-2 text-base font-medium text-gray-500 hover:text-gray-900'
              to='/orders'
            >
              Orders
            </Link>
          </nav>

          <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
            <div className='flex'>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-11 w-11'
                  viewBox='0 0 20 20'
                  fill='#4f46e5'
                >
                  <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
                </svg>
              </span>
              <span>{cartCount}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
