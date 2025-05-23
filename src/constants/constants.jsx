import { 
    api,
    backend,
    contact,
    css,
    cv,
    docker,
    feuocu,
    frontend,
    gameguy,
    gastronomica,
    github,
    greta,
    html,
    id,
    info,
    jest,
    js,
    minecraft,
    mockup,
    mysql,
    node,
    php,
    phpunit,
    pogopvp,
    portfolio,
    ps,
    react,
    restaurant,
    symfony,
    tailwind,
    transport,
    ts,
    univlorraine,
    vscode,
    xd,
    web,
    wordpress,
    whyvision
} from "../assets";

export const dev = {
    english: "Web-developer",
    french: "Développeur-web"
}

export const navLinks = [
    {
        id: "about",
        title_english: "About",
        title_french: "A propos"
    },
    {
        id: "work",
        title_english: "Work",
        title_french: "Projets"
    },
    {
        id: "contact",
        title_english: "Contact",
        title_french: "Contact"
    }
];

export const hero = {
    english: {
        title: "Hi, I'm",
        subText: (
            <>
            IT enthusiast, craving challenges, &nbsp;
            <br className="sm:hidden block"/> 
            and eager for fresh new tech insights.
            </>
        )
    },
    french: {
        title: "Salut, moi c'est",
        subText: (
            <>
            Passionné de développement web,&nbsp;
            <br className="sm:hidden block"/>
            assoiffé de défis et avide&nbsp;
            <br className="sm:hidden block"/>
            de nouvelles connaissances.
            </>
        ) 
    }
}

export const iconLinks = {
    info: {
        link: "#about",
        icon: info
    },
    github: {
        link: "https://github.com/cylb0",
        icon: github
    },
    cv: {
        link: "/cv.pdf",
        icon: cv
    },
    contact: {
        link: "#contact",
        icon: contact
    }
}

export const about = {
    english: {
        title: "Overview",
        content: "I am passionate about the world of development and proud to finally embrace my inner <span style=\"color: #e98a16\">geek</span>. I've had an unconventional journey that has allowed me to overcome <span style=\"color: #e98a16\">challenges</span>, but it's with my recent retraining as a web developer that I've been able to confirm my passion and indulgee my curiosity and insatiable desire for intellectual stimulation. Every line of code is a challenge I look forward to conquering, and my diverse background has strengthened my adaptability to provide unique solutions to every problem I've encountered. When not diving the world of code, you can probably find me under a tree, reading a scientific journal or indulging in popular science across various fields (with a special mention for astrophysics!). If it's raining, I'll likely be cozy indoors, playing a video game older than me. Development offers the opportunity to continually acquire new skills, and I'm seeking employment or an internship with a company that will allow me to contribute to new challenges. Please don't hesitate to <a href=\"#contact\"><span style=\"color: #e98a16\">contact</span></a> me for any collaboration opportunities."
    },
    french: {
        title: "Aperçu",
        content: "Passionné par le monde du développement et fier de pouvoir enfin embrasser mon côté <span style=\"color: #e98a16\"><b>geek</b></span>, j'ai eu un parcours atypique qui m'a permis de relever des défis, mais c'est ma récente reconversion dans le web qui a attisé ma passion et enfin pu combler ma curiosité et mon désir insatiable de stimulation intellectuelle. Chaque ligne de code est un défi que j'ai hâte de relever et mon parcours hétéroclite m'a permis de renforcer mes capacités d'adaptation afin d'apporter des solutions uniques à chaque <span style=\"color: #e98a16\"><b>problème</b></span> auquel j'ai fait face. Lorsque je ne suis pas plongé dans le monde du code, vous pourrez sûrement me retrouver sous un arbre en train de lire une revue scientifiques ou de dévorer de la vulgarisation dans des domaines divers et variés (mention spéciale pour l'astrophysique !). S'il pleut, je serai probablement au chaud en train de jouer à un jeu vidéo plus vieux que moi. Le développement offre la possibilité de constamment développer de nouvelles compétences et je cherche un emploi ou une alternance dans une entreprise qui me permettra de contribuer à de nouveaux challenges. N'hésitez pas à me <a href=\"#contact\"><span style=\"color: #e98a16\"><b>contacter</b></span></a> pour toute opportunité de collaboration"
    }
}

export const competences = [
    {
        title_english: "Web developer",
        title_french: "Développeur web",
        icon: web
    },
    {
        title_english: "Mockup design",
        title_french: "Création de maquettes",
        icon: mockup
    },
    {
        title_english: "React developer",
        title_french: "Développeur react",
        icon: frontend
    },
    {
        title_english: "Backend developer",
        title_french: "Développeur back-end",
        icon: backend
    }
]

export const experience = {
    english: {
        subtitle: "Before my retraining",
        title: "What I've been up to"
    },
    french: {
        subtitle: "Jusqu'à ma reconversion",
        title: "Mes dernières expériences"
    }
}

export const resume = {
    english: "Download my resume in PDF format.",
    french: "Télécharger mon CV au format PDF.",
    source: "CV.pdf"
}

export const experiences = [
    {
        title_english: "Web developer",
        title_french: "Développeur web",
        at: "why·Vision",
        where: "Metz",
        icon: whyvision,
        date: "Février 2024 - Oct 2024",
        content_english: [
            "I worked on developing an application that allows users to create videos programmatically.",
            "The app allows users to create videos on a user-friendly UI, those videos are then rendered server-side.",
            "Tech stack: React (Typescript) / NodeJS (Adonisjs + Typescript) / AWS / MySQL / Docker."
        ],
        content_french: [
            "J'ai travaillé au développement d'une application de génération programmatique de videos.",
            "Cette application permet aux utilisateur de créer simplement des videos grâce à une interface simplifiée, ces vidéos sont ensuite rendues côté serveur.",
            "Stack technique: React (Typescript) / NodeJS (Adonisjs + Typescript) / AWS / MySQL / Docker."
        ]
    },
    {
        title_english: "Web Developer training",
        title_french: "Titre professionnel de Développeur Web et Web Mobile - RNCP 5",
        at: "Greta Lorraine Nord",
        where: "Fameck",
        icon: greta,
        date: "2022 - 2023",
        content_english: [
            "I chose this training for its versatility.",
            "I learned how to design mockups and bring them to life using HTML, CSS, Javascript and PHP",
            "I've been introduced to frameworks such as Symfony and Vue.js",
            "Final project: creating an online store and presenting it to a panel of professionals."
        ],
        content_french: [
            "J'ai choisi cette formation pour sa polyvalence.",
            "J'ai appris à concevoir, développer et maintenir des applications web interactives.",
            "Apprentissage des languages HTML, CSS, Javascript et PHP",
            "Initiation aux frameworks Symfony et Vue.js",
            "Projet de fin d'étude: réalisation d'une boutique en ligne et soutenance devant un jury de professionnels."
        ]
    },
    {
        title_english: "Head waiter / Cook",
        title_french: "Chef de rang / Cuisinier",
        where: "Luxembourg",
        icon: restaurant,
        date: "2019 - 2021",
        content_english: [
            "Organizational skills",
            "Interpersonal qualities with both the team and customers to ensure an excellent experience.",
            "Rigour and discipline essential to the quality of provided service.",
            "I worked almost exclusively with Italian team which allowed me to learn a language and enhance my intercultural skills.",
            "Handling stressful situations, working under pressure and resolving conflict."
        ],
        content_french: [
            "Compétences organisationnelles.",
            "Développement des qualités relationnelles avec l'équipe et le client pour garantir une excellente expérience.",
            "Rigueur indispensable à la qualité du service fourni.",
            "J'ai collaboré avec des équipes exclusivement italiennes, ce qui m'a permis d'apprendre la langue et de renforcer mes compétences interculturelles.",
            "Gestion de situations stressantes, travail sous pression et résolution des conflits."
        ]
    },
    {
        title_english: "Employee / Manager",
        title_french: "Employé / Manager",
        at: "Gastronomica",
        where: "Luxembourg",
        icon: gastronomica,
        date: "2018 - 2019",
        content_english: [
            "Paperwork related to two companies: an event-focused restaurant and an import-export company.",
            "Management of imports and exports, international business trips, B2B and B2C trade.",
            "Event organization, manager of the restaurant, occasionally worked in the kitchen to cover staff shortage.",
            "Human resources management.",
            "Highly versatile."
        ],
        content_french: [
            "Tâches administratives relatives à deux sociétés, un restaurant spécialisé dans l'évènementiel et une société d'import-export.",
            "Gestion des importations et des exportations, déplacements professionnels à l'international, commerce BtoB & BtoC.",
            "Organisation d'évènements, manager du restaurant, j'ai parfois travaillé en cuisine.",
            "Gestion des ressources humaines.",
            "Très polyvalent."
        ]
    },
    {
        title_english: "First year of Master's in Applied Foreign Languages with a focus on international strategy and business.",
        title_french: "Première année de Master Langues Etrangères Appliquées mention stratégie et commerce à l'international",
        at: "Université de Lorraine",
        where: "Nancy",
        icon: univlorraine,
        date: "2016 - 2017",
        content_english: [
            "In-depth language learning.",
            "Cost accounting, business taxation and international marketing."
        ],
        content_french: [
            "Apprentissage poussé des langues.",
            "Comptabilité analytique, fiscalité et marketing international."
        ]
    },
    {
        title_english: "Internship as an international charterer",
        title_french: "Stage - Affrèteur international",
        at: "Marchal Transports",
        where: "Nancy",
        icon: transport,
        date: "2015",
        content_english: [
            "Global shipping and logistics solutions",
            "Securing cost-effective transportation and logistics agreements."
        ],
        content_french: [
            "Organisation des transports internationaux.",
            "Négociation et gestion des contrats."
        ]
    },
    {
        title_english: "Bachelor in Applied Foreign Languages and International trade, English - Spanish",
        title_french: "Licence Langues Etrangères Appliquées Anglais - Espagnol",
        at: "Université de Lorraine",
        where: "Nancy",
        icon: univlorraine,
        date: "2015",
        content_english: [
            "Multilingual proficiency in both English and Spanish. Communication skills in both written and spoken languages.",
            "Cultural knowledge, skills in translation and interpreting for business.",
            "Fundamentals in international business, trade and economics."
        ],
        content_french: [
            "Maitrise de l'anglais et de l'espagnol à l'écrit comme à l'oral.",
            "Connaissances culturelles, compétences en traduction et interprétation techniques.",
            "Fondamentaux en affaires internationales, droit, commerce et economie."
        ]
    }
]

export const techs = {
    title_english: "The techs I use",
    title_french: "Les technos que j'utilise"
}

export const technos = {
    Design: {
        xd: {
            name: "Adobe XD",
            icon: xd
        }, 
        ps: {
            name: "Adobe Photoshop",
            icon: ps
        },
        id: {
            name: "Adobe Indesign",
            icon: id
        }
    },
    Frontend: {
        html: {
            name: "HTML5",
            icon: html
        },
        css: {
            name: "CCS3",
            icon: css
        },
        js: {
            name: "Javascript",
            icon: js
        },
        ts: {
            name: "Typescript",
            icon: ts
        },
        react: {
            name: "React",
            icon: react
        },
        tailwind: {
            name: "Tailwind css",
            icon: tailwind
        }
    },
    Backend: {
        php: {
            name: "PHP",
            icon: php
        },
        node: {
            name: "Node.js",
            icon: node
        },
        mysql: {
            name: "MySQL",
            icon: mysql
        },
        symfony: {
            name: "Symfony",
            icon: symfony
        },
        api: {
            name: "Rest Api",
            icon: api
        }
    },
    Diverse: {
        docker: {
            name: "Docker",
            icon: docker
        },
        vscode: {
            name: "Visual Studio Code",
            icon: vscode
        },
        jest: {
            name: "Jest",
            icon: jest
        },
        wordpress: {
            name: "Wordpress",
            icon: wordpress
        },
        phpunit: {
            name: "Phpunit",
            icon: phpunit
        }
    },
}

export const works = {
    english: {
        subtitle: "My work",
        title: "My personal projects"
    },
    french: {
        subtitle: "Mon travail",
        title: "Projets personnels"
    }
}

export const projects = [
    {
        mobile: true,
        name: "Portfolio",
        description_english: "The website you're browsing right now.",
        description_french: "Le portfolio que vous visitez actuellement.",
        tags: {
            front: [
                "react", "threejs", "tailwind"
            ]
        },
        screenshot: portfolio,
        link: "/",
        link_github: "https://github.com/cylb0/threejs-portfolio"
    },
    {
        mobile: true,
        name: "Feuocu",
        description_english: "Final project of my training that I presented to a panel of professional developers. It is an online shop with a back-office developed from scratch using Symfony 6.",
        description_french: "Le projet de fin de formation que j'ai soutenu devant un jury de professionnels. Une boutique en ligne fictive et son back-office développée sous Symfony 6.",
        download: "feuocu.pdf",
        download_english: "Download my dissertation (in french).",
        download_french: "Télécharger mon dossier.",
        tags: {
            front: [
                "stimulus", "css"
            ],
            back: [
                "symfony", "twig", "mysql"
            ]
        },
        screenshot: feuocu,
        link: "https://feuocu.morganfoucaut.fr",
        link_github: ""
    },
    {
        mobile: true,
        name: "Pogopvp",
        description_english: "An application built with React that fetches an existing API and allows the user to calculate stats for the mobile game Pokemon GO. It will eventually use my own custom API with French (and more languages ?) data and developed using Nodejs.",
        description_french: "Une application React exploitant une API anglophone et permettant de calculer des statistiques pour le jeu mobile Pokemon GO. A terme il exploitera ma propre API personnalisée et en français que je développe sous nodeJS.",
        tags: {
            front: [
                "nextjs", "react"
            ],
            back: [
                "api", "json"
            ]
        },
        screenshot: pogopvp,
        link: "https://pogopvp.morganfoucaut.fr",
        link_github: "https://github.com/cylb0/nextjs-pogopvp-app"

    },
    {
        mobile: true,
        name: "PVP api",
        description_english: "A project of public API with multilingual support for Pokemon GO mobile game.",
        description_french: "Mon projet d'API publique pour le jeu mobile Pokemon GO. Elle fournira des données en plusieurs langues et surtout en français.",
        tags: {
            front: [
                "react, typescript"
            ],
            back: [
                "nodejs", "sequelize", "express"
            ]
        },
        screenshot: null,
        link: null,
        link_github: "https://github.com/cylb0/nodejs-pokemongo-pvp-api"
    },
    {
        mobile: false,
        name: "Game Guy",
        description_english: "An interactive famous handheld look-alike on which you can play a famous block game.",
        description_french: "Un petit projet de console portable permettant de jouer à un célèbre jeu de blocs.",
        tags: {
            front: [
                "react, typescript"
            ]
        },
        screenshot: gameguy,
        link: "https://gameguy.morganfoucaut.fr",
        link_github: "https://github.com/cylb0/blocks"
    },
    {
        mobile: false,
        name: "Minecraft Clone",
        description_english: "An on-progress full web minecraft clone.",
        description_french: "Un project minecraft-like 100% web.",
        tags: {
            front: [
                "react", "typescript", "three.js",
            ]
        },
        screenshot: minecraft,
        link: null,
        link_github: "https://github.com/cylb0/minecraft_like_sandbox_V2",
    }
]

export const contactSection = {
    english: {
        message: "Feel free to contact me anytime.",
        name_label: "Your name",
        name_placeholder: "What is your name ?",
        email_label: "Your email",
        email_placeholder: "What is your email ?",
        message_label: "Your message",
        message_placeholder: "What can I do for you ?",
        consent_label: "I consent to my data being used to be contacted.",
        consent_alert: "You need to consent to be able to send an email.",
        button: "Send",
        button_loading: "Sending...",
        confirm: "Thank you for your message, I will get back to you a soon as possible.",
        error: "Oh ! Something went wrong, please try again."
    },
    french: {
        message: "N'hésitez pas à me contacter pour toute opportunité de collaboration.",
        name_label: "Votre nom",
        name_placeholder: "Quel est votre nom ?",
        email_label: "Votre email",
        email_placeholder: "Quel est votre email ?",
        message_label: "Votre message",
        message_placeholder: "Que puis-je faire pour vous ?",
        consent_label: "J'accepte que mes données soient utilisées pour être contacté.",
        consent_alert: "Vous devez accepter d'être recontacté pour pouvoir envoyer un message.",
        button: "Envoyer",
        button_loading: "Envoi en cours...",
        confirm: "Merci pour votre message, je vous recontacterai au plus vite.",
        error: "Un problème est survenu, veuillez réessayer."
    }
}