const express = require("express");
const app = express();

const cors = require("cors");

app.use(express.json());
app.use(express.static("build"));

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

const generateId = () => {
  const maxId =
    phonebook.length > 0 ? Math.max(...phonebook.map((n) => n.id)) : 0;
  return maxId + 1;
};

app.post("/api/phonebook", (req, res) => {
  const body = req.body;

  const personObj = {
    name: body.name,
    phone: body.phone,
    id: generateId(),
  };

  phonebook = phonebook.concat(personObj);
  console.log(phonebook);
  res.json(personObj);
});

app.get("/api/phonebook", (request, response) => {
  response.json(phonebook);
});

app.get("/api/phonebook/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = phonebook.find((person) => person.id === id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.delete("/api/phonebook/:id", (req, res) => {
  const id = Number(req.params.id);
  phonebook = phonebook.filter((person) => person.id !== id);

  res.send({ success: "done" });
  res.status(204).end();
});

const PORT = process.env.PORT || 3001;
app.listen(3001);
console.log(`running on ${PORT}`);
