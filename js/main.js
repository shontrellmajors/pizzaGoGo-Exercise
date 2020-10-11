//PizzaGoGo - ✨🍕💵🚗
//1.Order a Pizza [x]
//2.Pay for Pizza [x]
//3.Request an Uber [x]
console.clear();

function placeOrder(menuItem, orderDetails, callbackFn) {
  console.info(`🍕 You just ordered a ${orderDetails} ${menuItem}`);
  setTimeout(() => {
    const order = {
      menuItem,
      orderDetails,
      cost: 12.99
    };
    callbackFn(order);
  }, 3000);
}

function payForOrder(order, cash, callbackFn) {
  console.info(
    `💵 You are paying for a ${order.menuItem} with a value of ${order.cost}`
  );
  setTimeout(() => {
    const receipt = {
      order,
      change: order.cost - cash
    };
    callbackFn(receipt);
  }, 1000);
}

function orderAnUber(destination, numberOfRiders, callbackFn) {
  console.info(`🚗 Hailed an uber for ${numberOfRiders}
riders(s), headed towards ${destination}`);
  setTimeout(() => {
    callbackFn("Your uber has arrived!");
  }, 5000);
}

placeOrder("pizza", "pepperoni", (order) => {
  console.log("Got my order back", order);
  payForOrder(order, 15, (receipt) => {
    console.log("Got my receipt", receipt);
    orderAnUber("Broadway", 2, (msg) => {
      console.log(msg);
    });
  });
});
