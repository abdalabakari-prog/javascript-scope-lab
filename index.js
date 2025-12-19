// Global scope variables
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Function-scoped variable inside addBurger
function addBurger() {
  const newBurger = 'Flatburger';
  burgers.push(newBurger);
}

// Block-scoped variable inside if statement
if(true) {
  const anotherNewBurger = 'Maple Bacon Burger';
  burgers.push(anotherNewBurger);
}

// Function to change global variable featuredDrink
function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake';
}

// Write your solution in this file!
