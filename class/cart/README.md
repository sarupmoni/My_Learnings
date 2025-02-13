
# Online Shopping Cart

## 🚀 Case: Online Shopping Cart

Create a **`ShoppingCart`** class that manages items in an online shopping cart.

### **Requirements:**

1. Each cart should have:  
   - `#items` (private array to store cart items).  

2. **Methods:**

   - `addItem(name, price, quantity)` → Adds an item to the cart.  
   - `removeItem(name)` → Removes an item from the cart if it exists.  
   - `updateQuantity(name, newQuantity)` → Updates the quantity of an item.  
   - `calculateTotal()` → Returns the total price of all items in the cart.  
   - `getCartDetails()` → Returns a list of items in the cart with name, price, and quantity.  

### **🔹 Example Usage**

```javascript
const cart = new ShoppingCart();

cart.addItem("Laptop", 1200, 1);
cart.addItem("Mouse", 25, 2);
cart.addItem("Keyboard", 45, 1);

console.log(cart.getCartDetails());
// Output: 
// 1. Laptop - $1200 x 1
// 2. Mouse - $25 x 2
// 3. Keyboard - $45 x 1

console.log(cart.calculateTotal()); // Output: 1295

cart.updateQuantity("Mouse", 3);
cart.removeItem("Keyboard");

console.log(cart.calculateTotal()); // Output: 1275
```

### **🔥 Bonus Challenge (Optional)**  
- Add a `clearCart()` method to remove all items.  
- Ensure `updateQuantity()` doesn’t allow **zero or negative quantities**.  

