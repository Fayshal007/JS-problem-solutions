// Define the products as objects with name and price properties
const products = [
    { name: "Laptop", price: 999 },
    { name: "Headphones", price: 99 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 49 }
  ];
  
  // Function to calculate total cost of products in the shopping cart
  function calculateTotalCost(cart) {
    let totalCost = 0;
    for (let i = 0; i < cart.length; i++) {
        totalCost += cart[i].price;
    }
    return totalCost;
  }
  
  // Calculate and display the total cost of the products
  const totalCost = calculateTotalCost(products);
  console.log("Total cost of products in the shopping cart: $" + totalCost);
  