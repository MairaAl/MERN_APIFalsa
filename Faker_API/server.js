const { faker } = require("@faker-js/faker");
const express = require("express");
const app = express();
const port = 6000;

class Usuario {
  constructor() {
    this._id = faker.string.uuid();
    this.primerNombre = faker.person.firstName();
    this.apellido = faker.person.lastName();
    this.numeroDeTelefono = faker.phone.number();
    this.email = faker.internet.email();
    this.contraseña = faker.internet.password();
  }
}

class Empresa {
  constructor() {
    this._id = faker.string.uuid();
    this.nombre = faker.company.name();
    this.calle = faker.location.streetAddress();
    this.ciudad = faker.location.city();
    this.estado = faker.location.state();
    this.zip = faker.location.zipCode();
    this.pais = faker.location.country();
  }
}
console.log(new Empresa());
console.log(new Usuario());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/v1/user/new", (req, res) => {
  const newUser = new Usuario();
  console.log(newUser);
  res.json({ newUser: newUser });
});

app.post("/api/v2/user/new", (req, res) => {
  res.json({ newUser: createUser() });
});

app.post("/api/v1/company/new", (req, res) => {
  const newCompany = new Empresa();
  console.log(newCompany);
  res.json({ newCompany: newCompany });
});
app.post("/api/v2/company/new", (req, res) => {
  res.json({ newCompany: createCompany() });
});

app.post("/api/v1/user/company", (req, res) => {
  const newCompany = new Empresa();
  const newUser = new Usuario();

  res.json({ newCompany, newUser });
});

app.post("/api/v2/user/company", (req, res) => {
  res.json({ newCompany: createCompany(), newUser: createUser() });
});

app.listen(port, () =>
  console.log(`Listening on port: ${port} (http://localhost:${port}/)`)
);

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
