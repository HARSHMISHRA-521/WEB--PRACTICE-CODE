// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/harsh');
    console.log("Mr Mishra we are connected .....")

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// With Mongoose, everything is derived from a Schema. Let's get a reference to it and define our kittens.  
const kittySchema = new mongoose.Schema({
    name: String
});

// Kittens can meow, so let's take a look at how to add "speak" functionality to our documents:

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function speak() {
    const greeting = this.name
        ? 'Meow my name is ' + this.name
        : 'I don\'t have a name';
    console.log(greeting);
};


// So far so good.We've got a schema with one property, name, which will be a String. The next step is compiling our schema into a Model.

const Kitten = mongoose.model('Kitten', kittySchema);

// A model is a class with which we construct documents.In this case, each document will be a kitten with properties and behaviors as declared in our schema.Let's create a kitten document representing the little guy we just met on the sidewalk outside:

const harshKitty = new Kitten({ name: 'harshKitty' });//you can give any name 
console.log(harshKitty.name); // 'harshKitty'
// Functions added to the methods property of a schema get compiled into the Model prototype and exposed on each document instance:
harshKitty.speak()


// We have talking kittens! But we still haven't saved anything to MongoDB. Each document can be saved to the database by calling its save method. The first argument to the callback will be an error if any occurred.

 harshKitty.save();
harshKitty.speak();

// Say time goes by and we want to display all the kittens we've seen. We can access all of the kitten documents through our Kitten model.
const kittens = Kitten.find({ name: /^harshKitty/ });
console.log(kittens);

// We just logged all of the kittens in our db to the console.If we want to filter our kittens by name, Mongoose supports MongoDBs rich querying syntax.
// Kitten.find({ name: /^harshKitty/ });
