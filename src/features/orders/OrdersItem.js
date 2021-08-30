import React from 'react';

const OrderItem = (props) => {
  const { order } = props.order;
  return (
    <>
      {order && (
        <>
          {order.map((order, index) => {
            return (
              <tr key={index}>
                <td align='center'>{order.id}</td>
                <td align='center'>{order.name} </td>
                <td align='center'>${order.price} </td>
                <td align='center'>{order.quantity} </td>
                <td align='center'>${order.total}</td>
              </tr>
            );
          })}
        </>
      )}
    </>
  );
};

export default OrderItem;
