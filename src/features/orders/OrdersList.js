import { useEffect } from 'react';
import OrderItem from './OrdersItem';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders, selectOrders } from './ordersSlice';

const OrderList = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectOrders);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return (
    <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
      <h1 className='text-2xl font-extrabold tracking-tight text-gray-900'>
        Your Orders
      </h1>
      <div className=''>
        {data && (
          <>
            {data.map((order, index) => {
              return (
                <div className='mb-8' key={index}>
                  <table className='min-w-full divide-y divide-gray-200'>
                    <thead className='bg-gray-50'>
                      <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>item total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <OrderItem order={order} />
                    </tbody>
                  </table>
                  <p>Order Total: ${order.total}</p>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default OrderList;
