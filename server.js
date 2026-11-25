const express = require("express");
const path = require("path");
const router = require("./app/routes/router");

const app = express();
const PORT = process.env.PORT || 3000;

// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "app", "views"));

// Arquivos estáticos (css, js, imagem) -> /css/..., /js/..., /imagem/...
app.use(express.static(path.join(__dirname, "app", "public")));

// Lê os dados dos formulários (method="POST")
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
