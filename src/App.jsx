import { useState } from "react";

import Order from "./Components/Confirmation Order";
import { Food } from "./Components/Food Order ";

function App() {
  const [food, setFood] = useState(0);

  // const handleOrder = (e) => {
  //   e.preventDefault();
  //   window.alert(`Your Order has successfully been collected`);
  // };

  const handleFoodAdd = (e) => {
    e.preventDefault();
    window.alert(`Your Order has been added to your cart`);
  };

  const handleFoodRemove = (e) => {
    e.preventDefault();
    window.alert(`This Order has been removed from your cart`);
  };

  const handleNewOrder = (e) => {
    e.preventDefault();
    window.alert(`Your Orders is coming, start a new Order?`);
  };

  const orderPage = () => setFood(1);

  return (
    <>

      {food === 0 && (
        <Food
          addCart={handleFoodAdd}
          order={orderPage}                    
          remove={handleFoodRemove}
        />
      )}

      {food === 1 && <Order newOrder={handleNewOrder} />}
    </>
  );
}

export default App;
