import { useState } from "react";
import './index.css';

const App = () => {
  const [items, setItems] = useState([
    { id: 0, name: '1번', image: '대충 주소', price: 1000 },
    { id: 1, name: '2번', image: '대충 주소', price: 2000 },
    { id: 2, name: '3번', image: '대충 주소', price: 3000 },
    { id: 3, name: '4번', image: '대충 주소', price: 4000 },
    { id: 4, name: '5번', image: '대충 주소', price: 5000 },
    { id: 5, name: '6번', image: '대충 주소', price: 6000 },
    { id: 6, name: '7번', image: '대충 주소', price: 7000 },
    { id: 7, name: '8번', image: '대충 주소', price: 8000 },
  ]);

  return (
    <>
      {items.map((item) => (
        <div key={item.id} className='item'>
          <div className='item-img'>
            <img src={`/${item.image}`} alt={item.name} />
          </div>
          <div className='item-name'>{item.name}</div>
          <div className='item-price'>{item.price.toLocaleString()}원</div>
        </div>
      ))}
    </>
  );
};

export default App;
