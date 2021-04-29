require("dotenv").config();
const { response } = require("express");
const express = require("express");
const app = express();
const Person = require("./models/person");

const errorHandler = (error, request, response, next) => {
  console.log(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformmated" });
  }

  next(error);
};
app.use(express.json());
app.use(express.static("build"));

app.use(errorHandler);
let phonebook = [
  {
    name: "Dan Abramov",
    id: 1,
    phone: "12-43-234345",
  },
  {
    name: "Mary Poppendieck",
    id: 2,
    phone: "39-23-6423122",
  },
  { id: 3, name: "Arto Hellas", phone: "040-123456" },
  { id: 4, name: "Ada Lovelace", phone: "39-44-5323523" },
];

//below is obsolete - using id from mongoDB now
/* const generateId = () => {
  const maxId =
    phonebook.length > 0 ? Math.max(...phonebook.map((n) => n.id)) : 0;
  return maxId + 1;
}; 
 */
app.post("/api/phonebook", (req, res) => {
  const body = req.body;

  //need to make sure request is application/json and wrapped in quotes for each key value pair
  const person = new Person({
    name: body.name,
    number: body.number,
  });

  person.save().then((savedPerson) => {
    res.json(savedPerson);
  });
  /*
  const personObj = {
    name: body.name,
    phone: body.phone,
    id: generateId(),
  };
*/
  // phonebook = phonebook.concat(personObj);
  // console.log(phonebook);
  // res.json(personObj);
});

app.get("/api/phonebook", (request, response) => {
  Person.find({}).then((person) => {
    response.json(person);
  });
});

app.get("/api/phonebook/:id", (req, res) => {
  Person.findById(req.params.id)
    .then((person) => {
      if (person) {
        res.json(person);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => {
      console.log(error);
      response.status(400).send({ error: "malformatted id" });
    });
  // const id = Number(req.params.id);
  // const person = phonebook.find((person) => person.id === id);
  // if (person) {
  //   res.json(person);
  // } else {
  //   res.status(404).end();
  // }
});

app.delete("/api/phonebook/:id", (req, res) => {
  Person.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.status(204).end();
    })
    .catch((error) => console.log(error));

  const id = Number(req.params.id);
  phonebook = phonebook.filter((person) => person.id !== id);

  res.status(204).end();
});

app.put("/api/phonebook/:id", (request, response, next) => {
  const body = request.body;

  console.log(body);
  const person = {
    name: body.name,
    number: body.number,
  };
  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then((updatedPerson) => {
      response.json(updatedPerson);
    })
    .catch((error) => next(error));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT);
console.log(`running on ${PORT}`);
