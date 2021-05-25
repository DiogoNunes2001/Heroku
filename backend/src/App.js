const express = require("express");
const app = express();
const cors = require("cors");

const employeeRouters = require("./routes/employeeRoute");

// Configurar CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//Configurações
app.set("port", process.env.PORT || 3001);
app.use(cors());

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rotas

app.use("/employee", employeeRouters);

app.listen(app.get("port"), () => {
  console.log("Start server on port " + app.get("port"));
});
