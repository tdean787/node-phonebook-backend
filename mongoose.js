const mongoose = require("mongoose");
const db = mongoose.connection;
if (process.argv.length < 3) {
  console.log("please supply password");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://taylor787:${password}@nodephonebook.ypfrx.mongodb.net/note-app?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
});

noteSchema.methods.returnDate = function () {
  const today = this.date ? `the date is ${this.date}` : "no date";
  console.log(today);
};

const Note = mongoose.model("Note", noteSchema);

const note = new Note({
  content: "html is easy",
  date: new Date(),
  important: true,
});

note.returnDate();

//use .find() on Note model to return all notes
/* 
Note.find({}).then((result) => {
  result.forEach((note) => {
    console.log(note);
  });
  db.close();
});
*/

//filter in the .find() function for specific part of schema
Note.find({ important: true }).then((result) => {
  result.forEach((note) => {
    console.log(note);
  });
  db.close();
});

// note.save().then((result) => {
//   console.log("note saved");
//   mongoose.connection.close();
// });
