// Dados das ONGs exibidas na vitrine e na tela de detalhes.
// ATENÇÃO: nomes, números e contatos abaixo são EXEMPLOS fictícios.
// Troque pelos dados reais (ou, depois, por uma consulta ao banco).
module.exports = [
    {
        slug: "semear-saber",
        nome: "Instituto Semear Saber",
        categoria: "Educação",
        resumo: "Levando conhecimento e oportunidades para todos.",
        imagem: "/imagem/ONGs_educacao.webp",
        sobre: "O Instituto Semear Saber oferece reforço escolar, alfabetização de jovens e adultos e cursos de informática para comunidades da periferia. Acreditamos que a educação é a ferramenta mais poderosa para romper ciclos de desigualdade.",
        missao: "Garantir que toda criança e jovem tenha acesso a uma educação de qualidade, independentemente de onde more.",
        fundacao: 2012,
        local: "Barueri, SP",
        impacto: [
            { numero: "1.200+", rotulo: "alunos atendidos" },
            { numero: "85", rotulo: "voluntários ativos" },
            { numero: "12", rotulo: "anos de atuação" }
        ],
        atividades: ["Reforço escolar", "Alfabetização de adultos", "Aulas de informática", "Biblioteca comunitária"],
        voluntarios: ["Professores e monitores", "Doação de livros e material escolar", "Oficinas e palestras", "Apoio administrativo"],
        contato: { email: "contato@semearsaber.org", telefone: "(11) 4000-1001", site: "www.semearsaber.org" }
    },
    {
        slug: "raizes-verdes",
        nome: "Raízes Verdes",
        categoria: "Meio Ambiente",
        resumo: "Promovendo sustentabilidade e preservação ambiental.",
        imagem: "/imagem/ONGs_ambiental.webp",
        sobre: "A Raízes Verdes atua no reflorestamento de áreas degradadas, na educação ambiental em escolas e na organização de mutirões de limpeza de rios e praças. Cada muda plantada é um passo para um futuro mais saudável.",
        missao: "Proteger e recuperar os ecossistemas locais engajando a comunidade em ações concretas de sustentabilidade.",
        fundacao: 2015,
        local: "Santana de Parnaíba, SP",
        impacto: [
            { numero: "30 mil", rotulo: "árvores plantadas" },
            { numero: "40", rotulo: "mutirões realizados" },
            { numero: "9", rotulo: "anos de atuação" }
        ],
        atividades: ["Plantio de mudas nativas", "Mutirões de limpeza", "Educação ambiental", "Hortas comunitárias"],
        voluntarios: ["Plantio e manutenção", "Guias de trilhas ecológicas", "Divulgação nas redes", "Doação de mudas e ferramentas"],
        contato: { email: "ola@raizesverdes.org", telefone: "(11) 4000-1002", site: "www.raizesverdes.org" }
    },
    {
        slug: "ponte-cultural",
        nome: "Ponte Cultural",
        categoria: "Cultura",
        resumo: "Preservando tradições e incentivando a expressão cultural.",
        imagem: "/imagem/ONGs_cultura.avif",
        sobre: "A Ponte Cultural promove oficinas de música, dança, teatro e artesanato, além de festivais que valorizam as tradições populares brasileiras. Criamos espaços onde a arte conecta gerações.",
        missao: "Democratizar o acesso à cultura e valorizar os saberes e tradições das comunidades.",
        fundacao: 2010,
        local: "Osasco, SP",
        impacto: [
            { numero: "800+", rotulo: "participantes por ano" },
            { numero: "25", rotulo: "oficinas ativas" },
            { numero: "14", rotulo: "anos de atuação" }
        ],
        atividades: ["Oficinas de música e dança", "Teatro comunitário", "Festivais culturais", "Artesanato tradicional"],
        voluntarios: ["Instrutores de oficinas", "Produção de eventos", "Fotografia e vídeo", "Apoio na organização de festivais"],
        contato: { email: "contato@pontecultural.org", telefone: "(11) 4000-1003", site: "www.pontecultural.org" }
    },
    {
        slug: "teto-amigo",
        nome: "Teto Amigo",
        categoria: "Moradia",
        resumo: "Promovendo moradia e qualidade de vida para todos.",
        imagem: "/imagem/ONGs_moradia.jpg",
        sobre: "O Teto Amigo organiza mutirões de construção e reforma de moradias para famílias em situação de vulnerabilidade, além de oferecer orientação sobre regularização fundiária e acolhimento temporário.",
        missao: "Garantir moradia digna e segura para famílias que mais precisam.",
        fundacao: 2014,
        local: "Carapicuíba, SP",
        impacto: [
            { numero: "350", rotulo: "casas reformadas" },
            { numero: "120", rotulo: "famílias acolhidas" },
            { numero: "10", rotulo: "anos de atuação" }
        ],
        atividades: ["Mutirões de construção", "Reforma de moradias", "Orientação jurídica", "Acolhimento temporário"],
        voluntarios: ["Pedreiros e profissionais da construção", "Arquitetos e engenheiros", "Doação de materiais", "Apoio jurídico"],
        contato: { email: "contato@tetoamigo.org", telefone: "(11) 4000-1004", site: "www.tetoamigo.org" }
    },
    {
        slug: "patas-felizes",
        nome: "Patas Felizes",
        categoria: "Animais",
        resumo: "Resgatamos, cuidamos e encontramos lares para animais abandonados.",
        imagem: "/imagem/ONGs_animais.jpg",
        sobre: "A Patas Felizes resgata cães e gatos em situação de abandono, cuida da saúde de cada um e promove feiras de adoção responsável. Também realiza campanhas de castração e conscientização.",
        missao: "Oferecer uma segunda chance a animais abandonados e promover a guarda responsável.",
        fundacao: 2016,
        local: "Barueri, SP",
        impacto: [
            { numero: "2.500+", rotulo: "animais resgatados" },
            { numero: "1.900", rotulo: "adoções realizadas" },
            { numero: "8", rotulo: "anos de atuação" }
        ],
        atividades: ["Resgate de animais", "Atendimento veterinário", "Feiras de adoção", "Campanhas de castração"],
        voluntarios: ["Passeio e socialização", "Lar temporário", "Doação de ração e medicamentos", "Divulgação para adoção"],
        contato: { email: "contato@patasfelizes.org", telefone: "(11) 4000-1005", site: "www.patasfelizes.org" }
    }
];
