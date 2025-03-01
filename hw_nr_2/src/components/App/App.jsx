import Greeting from '../Greeting/Greeting';
import OrderStatus from '../OrderStatus/OrderStatus';
import ShoppingList from '../ShoppingList/ShoppingList';

import './App.css';


function App() {

  const products = ["Яблоки", "Бананы", "Кофе", "Молоко", "Хлеб"];

  const orders = [
    { orderId: 123, status: 'в пути' },
    { orderId: 658, status: 'обработан' },
    { orderId: 195, status: 'доставлен' },
  ];

  return (
    <>
      <div className="App-greeting">
        <Greeting name="Алина" />
      </div>

      <div className="App-shopping">
        <h2>Список покупок</h2>
        <ShoppingList items={products} />
      </div>

      <div className="App-order">
        <h2>Статусы заказов</h2>
        {orders.map(order => (
          <OrderStatus key={order.orderId} orderId={order.orderId} status={order.status} />
        ))}
      </div>
    </>
  );
}
export default App;
