const { body, validationResult } = require("express-validator");

/* ---------- Regras reaproveitadas ---------- */

const email = body("email")
    .trim()
    .isEmail().withMessage("Informe um e-mail válido.")
    .normalizeEmail();

const telefone = body("telefone")
    .trim()
    .matches(/^\(?\d{2}\)?\s?9?\d{4}-?\d{4}$/).withMessage("Informe um telefone válido com DDD.");

const senhaNova = body("senha")
    .isLength({ min: 8 }).withMessage("A senha deve ter no mínimo 8 caracteres.")
    .matches(/\d/).withMessage("A senha deve ter pelo menos um número.");

// CPF: 11 dígitos e dígitos verificadores corretos
function cpfValido(valor) {
    const n = valor.replace(/\D/g, "");
    if (n.length !== 11 || /^(\d)\1+$/.test(n)) return false;

    const digito = (tam) => {
        let soma = 0;
        for (let i = 0; i < tam; i++) soma += n[i] * (tam + 1 - i);
        return ((soma * 10) % 11) % 10;
    };
    return digito(9) === +n[9] && digito(10) === +n[10];
}

/* ---------- Regras de cada formulário ---------- */

const login = [
    email,
    body("senha").notEmpty().withMessage("Informe a senha."),
];

const cadastroPessoa = [
    body("nome").trim().isLength({ min: 3, max: 100 }).withMessage("Informe seu nome completo."),
    body("cpf").custom(cpfValido).withMessage("CPF inválido."),
    telefone,
    email,
    senhaNova,
];

const cadastroOng = [
    body("ong").trim().isLength({ min: 2, max: 100 }).withMessage("Informe o nome da ONG."),
    body("descricao").trim().isLength({ min: 10, max: 1000 }).withMessage("Descreva a ONG (10 a 1000 caracteres)."),
    body("categoria")
        .isIn(["educacao", "saude", "meio_ambiente", "moradia", "direitos_humanos", "cultura", "alimentacao", "animais", "causas_emergenciais"])
        .withMessage("Escolha uma categoria válida."),
    email,
    telefone,
    body("site").trim().optional({ values: "falsy" }).isURL({ require_protocol: true }).withMessage("Use um endereço completo, ex.: https://www.suaong.org"),
    body("estado").isIn(["SP", "RJ", "MG", "ES"]).withMessage("Escolha um estado válido."),
    senhaNova,
];

/* ---------- Middleware: se houver erro, mostra a página de novo ---------- */

function validar(pagina) {
    return (req, res, next) => {
        const resultado = validationResult(req);
        if (resultado.isEmpty()) return next();

        const erros = resultado.formatWith((e) => e.msg).mapped();
        const { senha, ...valores } = req.body; // a senha não volta para a tela

        res.status(422).render(pagina, { erros, valores });
    };
}

module.exports = { login, cadastroPessoa, cadastroOng, validar };
