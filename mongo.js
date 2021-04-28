const mongoose = require("mongoose");
const db = mongoose.connection;

const password = process.argv[2];

const url = `mongodb+srv://taylor787:${password}@nodephonebook.ypfrx.mongodb.net/phonebook?retryWrites=true&w=majority`;

const personSchema = {
  name: String,
  number: String,
};

const Person = mongoose.model("Person", personSchema);

if (process.argv.length === 3) {
  Person.find({})
    .then((result) => {
      result.forEach((person) => {
        console.log(person);
      });
    })
    .then(() => {
      db.close();
      process.exit(1);
    });
}

console.log(process.argv.length);
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

const person = new Person({
  name: process.argv[3],
  number: process.argv[4],
});

// person.save().then((response) => {
//   console.log(
//     `Added ${person.name} - number ${person.number} saved to database`
//   );

//   db.close();
// });
