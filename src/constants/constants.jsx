import { 
    web,
    mockup,
    frontend,
    backend 
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
        title_french: "Emploi"
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
            assoifé de défis et avide&nbsp;
            <br className="sm:hidden block"/>
            de nouvelles connaissances.
            </>
        ) 
    }
}

export const about = {
    english: {
        title: "Overview",
        content: "I am passionate about the world of development and proud to finally embrace my inner <strong>geek</strong>. I've had an unconventional journey that has allowed me to overcome challenges, but it's with my recent retraining as a web developer that I've been able to confirm my passion and indulgee my curiosity and insatiable desire for intellectual stimulation. Every line of code is a challenge I look forward to conquering, and my diverse background has strengthened my adaptability to provide unique solutions to every problem I've encountered. When not diving the world of code, you can probably find me under a tree, reading a scientific journal or indulging in popular science across various fields (with a special mention for astrophysics!). If it's raining, I'll likely be cozy indoors, playing a video game older than me. Development offers the opportunity to continually acquire new skills, and I'm seeking employment or an internship with a company that will allow me to contribute to new challenges. Please don't hesitate to <a href=\"#contact\"><strong>contact</strong></a> me for any collaboration opportunities."
    },
    french: {
        title: "Aperçu",
        content: "Passionné par le monde du développement et fier de pouvoir enfin embrasser mon côté <strong>geek</strong>, j'ai eu un PARCOURS atypique qui m'a permis de relever des défis, mais c'est ma récente reconversion dans le web qui a attisé ma passion et enfin pu combler ma curiosité et mon désir insatiable de stimulation intellectuelle. Chaque ligne de code est un défi que j'ai hâte de relever et mon parcours hétéroclite m'a permis de renforcer mes capacités d'adaptation afin d'apporter des solutions uniques à chaque <strong>problème</strong> auquel j'ai fait face. Lorsque je ne suis pas plongé dans le monde du code, vous pourrez sûrement me retrouver sous un arbre en train de lire une revue scientifiques ou de dévorer de la vulgarisation dans des domaines divers et variés (mention spéciale pour l'astrophysique !). S'il pleut, je serai probablement au chaud en train de jouer à un jeu vidéo plus vieux que moi. Le développement offre la possibilité de constamment développer de nouvelles compétences et je cherche un emploi ou une alternance dans une entreprise qui me permettra de contribuer à de nouveaux challenges. N'hésitez pas à me <a href=\"#contact\"><strong>contacter</strong></a> pour toute opportunité de collaboration"
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