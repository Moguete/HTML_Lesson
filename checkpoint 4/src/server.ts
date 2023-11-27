import express from "express";
import "express-async-errors";
import morgan from "morgan";

const app = express();
const port = 3000;

type Usuario = {
  id: number;
  name: string;
  city: string;
};

type BaseDeDatos = Usuario[];

let baseDeDatos: BaseDeDatos = [
  {
    id: 1,
    name: "Marcoski",
    city: "Madrid",
  },
  {
    id: 2,
    name: "Esteve",
    city: "Barcelona",
  },
  {
    id: 3,
    name: "Erick",
    city: "Tarragona",
  },
  {
    id: 4,
    name: "Marcos",
    city: "Gijón",
  },
  {
    id: 5,
    name: "Barbara",
    city: "Sevilla",
  },
];

app.use(morgan("dev"));
app.use(express.json());

app.get("/checkpoint/", (req, res) => {
  res.status(200).json(baseDeDatos);
});

app.get("/checkpoint/:id", (req, res) => {
  const { id } = req.params;
  const user = baseDeDatos.find((u) => u.id === Number(id));
  res.status(200).json(user);
});

app.post("/checkpoint", (req, res) => {
  const { id, name, city } = req.body;
  const newUser = { id, name, city };
  baseDeDatos = [...baseDeDatos, newUser];
  res.status(201).json({ msg: "Usuario creado correctamente" });

  console.log(baseDeDatos);
});

app.put("/checkpoint/:id", (req, res) => {
  const { id } = req.params;
  const { name, city } = req.body;
  baseDeDatos = baseDeDatos.map((u) =>
    u.id === Number(id) ? { ...u, name, city } : u
  );
  res.status(200).json({ msg: "Usuario modificado" });

  console.log(baseDeDatos);
});

app.delete("/checkpoint/:id", (req, res) => {
  const { id } = req.params;
  baseDeDatos = baseDeDatos.filter((u) => u.id !== Number(id));
  res.status(200).json({ msg: "Usuario borrado" });

  console.log(baseDeDatos);
});
app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
