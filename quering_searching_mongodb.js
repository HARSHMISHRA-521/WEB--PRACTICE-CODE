// // Searching for data in mongo db
// use harsh

// //this qyery will return all objects 
// db.items.find()
// //output
// [
//     {
//         _id: ObjectId("64557b2d83a7c59f5deb975d"),
//         name: 'samsung',
//         price: 15000,
//         rating: 4.5,
//         qty: 233,
//         sold: 98
//     },
//     {
//         _id: ObjectId("64557c9983a7c59f5deb975e"),
//         name: 'Samsung 30s',
//         price: 22000,
//         rating: 4.5,
//         qty: 233,
//         sold: 98
//     },
//     {
//         _id: ObjectId("64557c9983a7c59f5deb975f"),
//         name: 'Moto 30s',
//         price: 29000,
//         rating: 3.5,
//         qty: 133,
//         sold: 598
//     },
//     {
//         _id: ObjectId("64557c9983a7c59f5deb9760"),
//         name: 'Realme 80s',
//         price: 129000,
//         rating: 2.5,
//         qty: 633,
//         sold: 98,
//         isBig: true
//     }
// ]



// // This query will return all the objects with rating equal to 3.5
// db.items.find({ rating: 3.5 })
// db.items.find({ rating: { $gte: 3.5 } })
// //output
// [
//     {
//         _id: ObjectId("64557b2d83a7c59f5deb975d"),
//         name: 'samsung',
//         price: 15000,
//         rating: 4.5,
//         qty: 233,
//         sold: 98
//     },
//     {
//         _id: ObjectId("64557c9983a7c59f5deb975e"),
//         name: 'Samsung 30s',
//         price: 22000,
//         rating: 4.5,
//         qty: 233,
//         sold: 98
//     },
//     {
//         _id: ObjectId("64557c9983a7c59f5deb975f"),
//         name: 'Moto 30s',
//         price: 29000,
//         rating: 3.5,
//         qty: 133,
//         sold: 598
//     }
// ]



// db.items.find({ rating: { $gt: 3.5 } })


// // And operator
// db.items.find({ rating: { $gt: 3.5 }, price: { $gt: 4000 } })

// db.items.find({ rating: { $lt: 3.5 }, price: { $gt: 114000 } })
// //output
// [
//     {
//         _id: ObjectId("64557c9983a7c59f5deb9760"),
//         name: 'Realme 80s',
//         price: 129000,
//         rating: 2.5,
//         qty: 633,
//         sold: 98,
//         isBig: true
//     }
// ]





// //or
// db.items.find({
//     $or: [{ rating: { $lt: 3.5 } }, { price: { $gt: 114000 } }]
// })
// //output
// [
//     {
//         _id: ObjectId("64557c9983a7c59f5deb9760"),
//         name: 'Realme 80s',
//         price: 129000,
//         rating: 2.5,
//         qty: 633,
//         sold: 98,
//         isBig: true
//     }
// ]



// //projection

// db.items.find({ rating: { $gt: 3.5 } }, { rating: 1 })
// //output
// [
//     { _id: ObjectId("64557b2d83a7c59f5deb975d"), rating: 4.5 },
//     { _id: ObjectId("64557c9983a7c59f5deb975e"), rating: 4.5 }
// ]