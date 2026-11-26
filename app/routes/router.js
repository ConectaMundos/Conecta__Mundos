const express = require("express");
const router = express.Router();
const v = require("./validacoes");
const ongs = require("../data/ongs");

// Páginas sem erro recebem objetos vazios
const vazio = { erros: {}, valores: {} };

router.get("/", (req, res) => res.render("pages/index", { ongs }));

// Tela de detalhes de uma ONG
router.get("/ong/:slug", (req, res) => {
    const ong = ongs.find((o) => o.slug === req.params.slug);
    if (!ong) return res.redirect("/#ongs");
    res.render("pages/ong", { ong });
});

// Login de pessoa
router.get("/login", (req, res) => res.render("pages/login-pessoa", vazio));
router.post("/login", v.login, v.validar("pages/login-pessoa"), (req, res) => {
    // TODO: conferir e-mail e senha no banco
    res.redirect("/");
});

// Login de ONG
router.get("/login-ong", (req, res) => res.render("pages/login-ongs", vazio));
router.post("/login-ong", v.login, v.validar("pages/login-ongs"), (req, res) => {
    // TODO: conferir e-mail e senha no banco
    res.redirect("/");
});

// Cadastro de pessoa
router.get("/cadastro", (req, res) => res.render("pages/cadastro-pessoa", vazio));
router.post("/cadastro", v.cadastroPessoa, v.validar("pages/cadastro-pessoa"), (req, res) => {
    // TODO: salvar no banco (senha com hash, ex.: bcrypt)
    res.redirect("/login");
});

// Cadastro de ONG
router.get("/cadastro-ong", (req, res) => res.render("pages/cadastro-ong", vazio));
router.post("/cadastro-ong", v.cadastroOng, v.validar("pages/cadastro-ong"), (req, res) => {
    // TODO: salvar no banco (senha com hash, ex.: bcrypt)
    res.redirect("/login-ong");
});

module.exports = router;
