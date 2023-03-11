const express = require("express");
const mongoClient = require("mongoose");
const routes_system = require("./src/routes");
const app = express();
require("dotenv").config();

app.listen(process.env.PORT_PC, ()=>
    console.log(`connect in the port_PC ${process.env.PORT_PC}`)
);

mongoClient.set("strictQuery", false);

mongoClient
    .connect(process.env.STRING_CONNECTION)
    .then(()=>console.log("Success Conection"))
    .catch((err)=> console.error(err));

app.use(express.json());
routes_system(app);