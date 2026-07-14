let customerName = prompt("Enter customer name:");
let productCategory = prompt("Enter product category (Electronics, Clothing, Books, Other):");
let productPrice = Number(prompt("Enter product price:"));
let quantity = Number(prompt("Enter quantity:"));
let couponCode = prompt("Enter coupon code or click OK):");
let paymentMethod = prompt("Enter payment method (CreditCard, DigitalWallet, Cash):");

let subtotal = productPrice * quantity;

let categoryDiscount = 0;
if (productCategory === "Electronics") {
    categoryDiscount = subtotal * 0.10;
} else if (productCategory === "Clothing") {
    categoryDiscount = subtotal * 0.15;
} else if (productCategory === "Books") {
    categoryDiscount = subtotal * 0.05;
}

let couponDiscount = 0;
if (couponCode === "SAVE20") {
    couponDiscount = 20;
} else if (couponCode === "WELCOME5") {
    couponDiscount = 5;
}

let paymentDiscount = 0;
if (paymentMethod === "CreditCard") {
    paymentDiscount = subtotal * 0.02;
} else if (paymentMethod === "DigitalWallet") {
    paymentDiscount = subtotal * 0.05;
}

let totalDiscounts = categoryDiscount + couponDiscount + paymentDiscount;
let taxableAmount = subtotal - totalDiscounts;

if (taxableAmount < 0) {
    taxableAmount = 0;
}

let vatRate = 0.14;
let vatAmount = taxableAmount * vatRate;

let finalTotal = taxableAmount + vatAmount;

console.log("=========================================");
console.log("             CHECKOUT INVOICE            ");
console.log("=========================================");
console.log("Customer Name: " + customerName);
console.log("Category: " + productCategory);
console.log("Price per Item: " + productPrice);
console.log("Quantity: " + quantity);
console.log("Payment Method: " + paymentMethod);
console.log("Coupon Code: " + (couponCode ? couponCode : "None"));
console.log("-----------------------------------------");
console.log("Subtotal: " + subtotal);
console.log("Category Discount: -" + categoryDiscount);
console.log("Payment Discount: -" + paymentDiscount);
console.log("Coupon Discount: -" + couponDiscount);
console.log("-----------------------------------------");
console.log("Taxable Amount: " + taxableAmount);
console.log("VAT (14%): +" + vatAmount);
console.log("=========================================");
console.log("FINAL TOTAL: " + finalTotal);
console.log("=========================================");