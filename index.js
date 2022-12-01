import express from "express";
import cors from "cors";

import userRoutes from "./src/routes/user.routes.js";
import { mongoConnect } from "./src/storage/db/mongo.connect.js";

// crear instancia de express
const app = express();
// configurar express
const port = 5000;

// middlewares
app.use(express.json());
app.use(cors());

mongoConnect();

// rutas
app.use("/users", userRoutes);

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
