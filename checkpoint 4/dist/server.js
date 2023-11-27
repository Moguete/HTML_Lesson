import express from "express";
import "express-async-errors";
import morgan from "morgan";
const app = express();
const port = 3000;
let baseDeDatos = [
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
app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
