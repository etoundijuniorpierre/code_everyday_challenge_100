var tab = {
    temoignage: [
        "Participer à ce programme a été une expérience incroyable qui m'a permis de développer de nouvelles compétences et de rencontrer des professionnels passionnés. J'ai pu approfondir mes connaissances et appliquer ce que j'ai appris dans des projets concrets, ce qui a vraiment enrichi mon parcours professionnel.",
        "Je recommanderais vivement cette opportunité à quiconque souhaite se perfectionner dans son domaine. Les formateurs sont experts dans leur domaine et l'environnement est propice à l'apprentissage et à la croissance personnelle. Ce fut une expérience transformative qui m'a aidé à atteindre mes objectifs de carrière.",
        "Cette expérience a changé ma vie de manière très positive. Elle m'a offert une nouvelle perspective sur ma carrière et m'a permis de me connecter avec des personnes partageant les mêmes idées. Les compétences que j'ai acquises ici sont inestimables et m'ont aidé à me démarquer dans mon domaine.",
        "L'aventure que j'ai vécue ici est une de celles que je n'oublierai jamais. Chaque jour était une nouvelle découverte, et chaque défi relevé m'a permis de grandir en tant que professionnel et en tant que personne. C'était vraiment un voyage riche en enseignements et en découvertes.",
        "Le service de haute qualité que j'ai reçu, combiné à l'équipe formidable qui m'a soutenu tout au long du processus, a fait de cette expérience quelque chose d'extraordinaire. Je suis reconnaissant pour l'encadrement et le soutien constants qui ont permis de maximiser mon apprentissage.",
        "Le programme a largement dépassé mes attentes. J'ai été impressionné par la profondeur et la pertinence du contenu enseigné. Cela m'a donné de nouvelles perspectives et idées que je n'aurais jamais pu imaginer avant de participer à cette formation.",
        "Je suis extrêmement satisfait des résultats que j'ai obtenus grâce à ce programme. L'investissement de temps et d'effort en valait vraiment la peine, et je repars avec des compétences solides qui m'aideront dans ma carrière future.",
        "L'expérience a été enrichissante du début à la fin. Les sessions étaient interactives, les formateurs très compétents, et le contenu était toujours pertinent et à jour avec les dernières tendances de l'industrie. J'ai beaucoup apprécié chaque moment passé ici.",
        "Grâce à cette opportunité unique, j'ai non seulement appris de nouvelles compétences, mais j'ai également beaucoup grandi personnellement. J'ai été mis au défi d'une manière que je n'avais jamais connue auparavant, ce qui m'a permis de me surpasser et d'atteindre de nouveaux sommets.",
        "La prestation était non seulement professionnelle, mais aussi parfaitement adaptée à mes besoins spécifiques. L'équipe a pris le temps de comprendre mes objectifs et m'a fourni des conseils personnalisés tout au long du programme, ce qui a été inestimable pour mon développement professionnel."
    ],
    img: ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg", "img/10.jpg"],
    nom: ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank", "Grace", "Hank", "Ivy", "Jack"],
    profession: ["Médecin", "Ingénieur", "Professeur", "Designer", "Développeur", "Avocat", "Architecte", "Journaliste", "Photographe", "Musicien"]
}

let cond = 0;

fun()

if (cond <= 10) {
    setInterval(() => {
        cond++
        fun()

        if (cond === 10) {
            
            cond = 0;
            fun()
        }
    }, 1000);

}


function fun() {
    const txt = document.querySelector(".txt p");
    txt.textContent = tab.temoignage[cond]

    const img = document.querySelector("img");
    img.src = tab.img[cond]

    const nom = document.querySelector("#name");
    nom.textContent = tab.nom[cond]

    const prof = document.querySelector("#prof");
    prof.textContent = tab.profession[cond]
}