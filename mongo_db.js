//inserting data in mongo db
use harsh
db.items.insertOne({name:"samsung",price:15000,rating: 4.5, qty: 233,sold: 98})

db.items.insertMany([{ name: "Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98 }, { name: "Moto 30s", price: 29000, rating: 3.5, qty: 133, sold: 598 }, { name: "Realme 80s", price: 129000, rating: 2.5, qty: 633, sold: 98, isBig: true }])