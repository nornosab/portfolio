document.addEventListener('DOMContentLoaded', () => {

/* Landing Smooth Scroll */

    const hoverOverlay = document.querySelector('.hover-overlay');
    const canUseHoverOverlay = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (hoverOverlay && canUseHoverOverlay) {
        hoverOverlay.addEventListener('click', () => {
            document.querySelector('#about-section').scrollIntoView({behavior: 'smooth'});
        });
    }


/* Language Switcher */

    const translations = {
        en: {
            nav_home: "Home",
            nav_about: "About",
            nav_programs: "Programs",
            nav_certificates: "Certificates",
            nav_works: "Works",
            nav_contact: "Contact",
            nav_theme: "Theme",
            nav_language: "Language",

            scroll_down: "scroll down",
            heading: "About me",
            description: "Professional specialized in the technical fields of Data Analytics and Front-End Development. Due to my upbringing and education based on the country of Andorra, I’ve been acquainted with quite a handful of languages since birth.",
            subtitle: "Languages",
            catalan_level: "C2 – Native",
            deutsch_level: "A2 – Currently in progress",
            language_instructions: "Click on any of the above languages to change the language of the website.",

            programs_h1: "Programs",
            job_title_h2_left: "Data Analytics",
            job_title_h2_right: "Front-End Dev",
            see_more: "see more",
            program_l1_p: "Microsoft Excel | Google Sheets | Apple Numbers. Spreadsheet editors featuring calculation and computational capabilities, graphing tools, pivot tables, etc.",
            program_l2_p: "Structured Query Language (SQL) is a domain-specific language used to manage data, especially in a relational database management system (RDBMS). Particularly useful in handling structured data, i.e., data incorporating relations among entities and variables.",
            program_l3_p: "R is a programming language for statistical computing and data visualization. It has been widely adopted in the fields of data mining, bioinformatics, data analysis, and data science.",
            program_l4_p: "Leading visual analytics and business intelligence (BI) platform. Allows to connect to raw data and transform it into interactive, digestible graphics like dashboards, maps, and charts—making complex patterns, trends, and outliers easily understandable to anyone.",
            program_l5_p: "Microsoft Powerpoint | Google Slides | Apple Keynote. Presentation softwares used extensively throught Data Analytics to present results to stakeholders as well as study participants.",
            program_r1_p: "Core markup language used for structuring and presenting content on the World Wide Web. Introduced to replace older standards, it provides native support for multimedia, semantic elements, and enhanced web application features without requiring external plugins like Flash.",
            program_r2_p: "Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language. CSS is a cornerstone technology of the World Wide Web.",
            program_r3_p: "Programming language and core technology of the Web. JavaScript is a high-level, often just-in-time–compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).",
            program_r4_p: "Figma | Adobe XD. The feature set of Figma focuses on user interface and user experience design, with an emphasis on real-time collaboration, utilizing a variety of vector graphics editor and prototyping tools.",
            program_r5_p: "React is one of the most commonly used web technologies (according to the 2025 Stack Overflow Developer Survey). Free and open-source front-end JavaScript library developed by Meta (priorly Facebook) that aims to make building user interfaces based on components more 'seamless'. It is actively maintained and updated by Meta and a community of individual developers and companies.",

            certificates: "Certificates",
            port_sub: "Professional Certificate",
            port_hover: "View Certificate",
            certificate_l1: "Data Foundations",
            certificate_l2: "Data-Driven Decision Making",
            certificate_l3: "Data Exploration",
            certificate_l4: "Data Processing (SQL)",
            certificate_l5: "Data Analysis (RStudio)",
            certificate_l6: "Data Viz (Tableau)",
            certificate_r1: "JS Programming",
            certificate_r2: "Version Control",
            certificate_r3: "HTML & CSS in-depth",
            certificate_r4: "React Basics",
            certificate_r5: "Advanced React",
            certificate_r6: "UX/UI Design",

            skills_h3: "Skills",
            dev_h1: "Works",
            work_in_dev: "Section still in development 🤭",

            contact_h1: "Want me to work with you?",
            contact_availability: "Currently available for a full-time job",
            contact_sub1: "If you'd like me to work with you as a",
            contact_sub2: "send me a message at",
            form_position: "Position",
            form_proposal: "Proposal",
            form_placeholder: "Message:",
            form_submit: "Submit",
            opt_a: "Data Analyst",
            opt_b: "Front-End Developer",
            opt_c: "Another position",
            opt_1: "Full-time Offer",
            opt_2: "Part-time/Project",
            opt_3: "Another offer",

            validation_error: "Please select both a 'Position' option and a 'Proposal' option.",

            email_verify: "Make sure to check the content of your email, so that it includes the following:",
            email_salary: "- Salary: Either a specific number, range, or price per hour.",
            email_contract: "- Expected contract duration: If applicable.",
            email_expected: "- Expected project duration: If applicable.",
            email_delivery: "- Delivery date: If applicable.",
        },

        fr: {
            nav_home: "Accueil",
            nav_about: "À propos de moi",
            nav_programs: "Logiciels",
            nav_certificates: "Certificats",
            nav_works: "Projets",
            nav_contact: "Contact",
            nav_theme: "Thème",
            nav_language: "Language",

            scroll_down: "faites défiler",
            heading: "À propos de moi",
            description: "Professionnel spécialisé dans les domaines techniques de l'Analyse de Données et du Développement Front-End. Grâce à mon éducation et ma formation en Andorre, je maîtrise plusieurs langues depuis ma enfance.",
            subtitle: "Langues",
            catalan_level: "C2 – Maîtrise Native",
            deutsch_level: "A2 – En cours",
            language_instructions: "Cliquez sur l'une des langues ci-dessus pour changer la langue du site.",

            programs_h1: "Logiciels",
            job_title_h2_left: "Analyste de Données",
            job_title_h2_right: "Développement Front-End",
            see_more: "en savoir plus",
            program_l1_p: "Microsoft Excel | Google Sheets | Apple Numbers. Logiciels de tableur dotés de fonctionnalités de calcul, d'outils de création de graphiques, de tableaux croisés dynamiques, etc.",
            program_l2_p: "Le langage SQL (Structured Query Language) est un langage spécifique à un domaine utilisé pour gérer des données, notamment dans un système de gestion de bases de données relationnelles (SGBDR). Il s'avère particulièrement utile pour traiter des données structurées, c'est-à-dire des données intégrant des relations entre des entités et des variables.",
            program_l3_p: "R est un langage de programmation dédié au calcul statistique et à la visualisation des données. Il est largement utilisé dans les domaines de l'exploration de données, de la bio-informatique, de l'analyse de données et de la science des données.",
            program_l4_p: "Plateforme de référence en matière d'analyse visuelle et d'intelligence économique (BI). Elle permet de se connecter à des données brutes et de les transformer en graphiques interactifs et faciles à comprendre, tels que des tableaux de bord, des cartes et des graphiques, rendant ainsi les schémas complexes, les tendances et les valeurs aberrantes facilement compréhensibles pour tous.",
            program_l5_p: "Microsoft Powerpoint | Google Slides | Apple Keynote. Les logiciels de présentation sont largement utilisés dans le domaine de l'analyse de données pour présenter les résultats aux parties prenantes ainsi qu'aux participants à l'étude.",
            program_r1_p: "Langage de balisage de base utilisé pour structurer et présenter du contenu sur le World Wide Web. Introduit pour remplacer les anciennes normes, il offre une prise en charge native du multimédia, des éléments sémantiques et des fonctionnalités avancées pour les applications Web, sans nécessiter de plug-ins externes tels que Flash.",
            program_r2_p: "Les feuilles de style en cascade (CSS) constituent un langage de feuilles de style utilisé pour définir la présentation et la mise en forme d'un document rédigé dans un langage de balisage. Le CSS est une technologie fondamentale du World Wide Web.",
            program_r3_p: "Langage de programmation et technologie fondamentale du Web. JavaScript est un langage de haut niveau, souvent compilé « juste à temps », conforme à la norme ECMAScript. Il dispose d'un typage dynamique, d'une orientation objet basée sur les prototypes et de fonctions de premier ordre. C'est un langage multiparadigme, prenant en charge les styles de programmation événementiel, fonctionnel et impératif. Il dispose d'interfaces de programmation d'applications (API) permettant de manipuler du texte, des dates, des expressions régulières, des structures de données standard et le Modèle objet de document (DOM).",
            program_r4_p: "Figma | Adobe XD. Les fonctionnalités de Figma sont axées sur la conception d'interfaces utilisateur et d'expériences utilisateur, en mettant l'accent sur la collaboration en temps réel, grâce à divers outils d'édition de graphiques vectoriels et de prototypage.",
            program_r5_p: "React est l'une des technologies web les plus utilisées (selon l'enquête Stack Overflow 2025 auprès des développeurs). Il s'agit d'une bibliothèque JavaScript front-end gratuite et open source développée par Meta (anciennement Facebook), qui vise à rendre la création d'interfaces utilisateur basées sur des composants plus « fluide ». Elle est activement maintenue et mise à jour par Meta ainsi que par une communauté de développeurs indépendants et d'entreprises.",

            certificates: "Certificats",
            port_sub: "Certificat Professionnel",
            port_hover: "Consulter le certificat",
            certificate_l1: "Data Foundations",
            certificate_l2: "Data-Driven Decision Making",
            certificate_l3: "Data Exploration",
            certificate_l4: "Data Processing (SQL)",
            certificate_l5: "Data Analysis (RStudio)",
            certificate_l6: "Data Viz (Tableau)",
            certificate_r1: "Programmation en JS",
            certificate_r2: "Contrôle de Version",
            certificate_r3: "HTML & CSS approfondies",
            certificate_r4: "React Basics",
            certificate_r5: "React Avancé",
            certificate_r6: "Conception UX/UI",

            skills_h3: "Compétences",
            dev_h1: "Projets",
            work_in_dev: "Section en cours d'élaboration 🤭",

            contact_h1: "Voulez vous que je travaille avec vous ?",
            contact_availability: "Actuellement disponible pour un poste à temps plein",
            contact_sub1: "Si vous souhaitez que je travaille avec vous en tant que",
            contact_sub2: "envoie-moi un message à",
            form_position: "Position",
            form_proposal: "Proposition",
            form_placeholder: "Message:",
            form_submit: "Envoie-moi un message",
            opt_a: "Analyste de Données",
            opt_b: "Développeur Front-End",
            opt_c: "Autre proposition",
            opt_1: "Offre d'emploi à temps plein",
            opt_2: "Offre d'emploi à temps partiel / Projet",
            opt_3: "Autre offre",

            validation_error: "Veuillez sélectionner à la fois une option « Poste » et une option « Proposition ».",

            email_verify: "Veillez à vérifier le contenu de votre e-mail afin qu'il comprenne les éléments suivants :",
            email_salary: "- Salaire : un montant précis, une fourchette ou un taux horaire.",
            email_contract: "- Durée prévue du contrat : le cas échéant.",
            email_expected: "- Durée prévue du projet : le cas échéant.",
            email_delivery: "- Date de livraison : le cas échéant.",
        },

        es: {
            nav_home: "Inicio",
            nav_about: "Sobre mi",
            nav_programs: "Programas",
            nav_certificates: "Certificados",
            nav_works: "Proyectos",
            nav_contact: "Contacto",
            nav_theme: "Tema",
            nav_language: "Idioma",

            scroll_down: "Desliza hacia abajo",
            heading: "Sobre mi",
            description: "Profesional especializado en los ámbitos técnicos de Analítica de Datos y Desarrollo Front-End. Gracias a mi formación en Andorra, estoy familiarizado con los siguientes idiomas desde mi nacimiento.",
            subtitle: "Idiomas",
            catalan_level: "C2 – Nativo",
            deutsch_level: "A2 – Actualmente en progreso",
            language_instructions: "Haz clic en cualquiera de los idiomas anteriores para cambiar el idioma de la página web.",

            programs_h1: "Programas",
            job_title_h2_left: "Analítica de Datos",
            job_title_h2_right: "Desarollo Front-End",
            see_more: "ver más",
            program_l1_p: "Microsoft Excel | Google Sheets | Apple Numbers. Programas de hojas de cálculo que incluyen funciones de cálculo y procesamiento de datos, herramientas para crear gráficos, tablas dinámicas, etc.",
            program_l2_p: "Lenguaje de consulta estructurado (SQL) es un lenguaje específico de dominio que se utiliza para gestionar datos, especialmente en un sistema de gestión de bases de datos relacionales (SGBDR). Resulta especialmente útil para manejar datos estructurados, es decir, datos que incorporan relaciones entre entidades y variables.",
            program_l3_p: "R es un lenguaje de programación destinado al cálculo estadístico y a la visualización de datos. Su uso se ha generalizado en los campos de la minería de datos, la bioinformática, el análisis de datos y la ciencia de datos.",
            program_l4_p: "Plataforma líder en análisis visual e inteligencia empresarial (BI). Permite conectarse a datos sin procesar y transformarlos en gráficos interactivos y fáciles de interpretar, como paneles de control, mapas y gráficos, lo que hace que los patrones complejos, las tendencias y los valores atípicos resulten fácilmente comprensibles para cualquier persona.",
            program_l5_p: "Microsoft Powerpoint | Google Slides | Apple Keynote. Programas de presentación que se utilizan ampliamente en el ámbito de Análitica de Datos para presentar los resultados tanto a las partes interesadas (stakeholders) como a los participantes en los estudios.",
            program_r1_p: "Lenguaje de marcado fundamental utilizado para estructurar y presentar contenidos en internet. Introducido para sustituir a estándares más antiguos, ofreciendo compatibilidad nativa con contenidos multimedia, elementos semánticos y funciones mejoradas para aplicaciones web sin necesidad de complementos externos como Flash.",
            program_r2_p: "Las hojas de estilo en cascada (Cascading Style Sheets en inglés, CSS) son un lenguaje de hojas de estilo que se utilizan para especificar la presentación y el estilo de un documento escrito en un lenguaje de marcado. CSS es una tecnología fundamental de internet.",
            program_r3_p: "Lenguaje de programación y tecnología fundamental de la Web. JavaScript es un lenguaje de alto nivel, a menudo compilado 'just-in-time en inglés (JIT)', que cumple con el estándar ECMAScript. Cuenta con tipado dinámico, orientación a objetos basada en prototipos y funciones de primera clase. Es multiparadigma y admite estilos de programación basados en eventos, funcionales e imperativos. Dispone de interfaces de programación de aplicaciones (API) para trabajar con texto, fechas, expresiones regulares, estructuras de datos estándar y el Modelo de Objetos de Documento (DOM).",
            program_r4_p: "Figma | Adobe XD. Las funciones de Figma se centran en el diseño de la interfaz de usuario (UI) y la experiencia de usuario (UX), haciendo hincapié en la colaboración en tiempo real y utilizando diversas herramientas de edición de gráficos vectoriales y de creación de prototipos.",
            program_r5_p: "React es una de las tecnologías web más utilizadas (según la Encuesta de Desarrolladores de Stack Overflow de 2025). Se trata de una biblioteca de JavaScript para Front-End, gratuita y de código abierto, desarrollada por Meta (antes conocido como Facebook), cuyo objetivo es facilitar la creación de interfaces de usuario basadas en componentes modulares. Meta y una comunidad formada por desarrolladores independientes y empresas se encargan de su mantenimiento y actualización de forma activa.",

            certificates: "Certificados",
            port_sub: "Certificado Profesional",
            port_hover: "Ver Certificado",
            certificate_l1: "Data Foundations",
            certificate_l2: "Data-Driven Decision Making",
            certificate_l3: "Data Exploration",
            certificate_l4: "Data Processing (SQL)",
            certificate_l5: "Data Analysis (RStudio)",
            certificate_l6: "Data Viz (Tableau)",
            certificate_r1: "Programación en JS",
            certificate_r2: "Control de Versiones",
            certificate_r3: "HTML & CSS en profundidad",
            certificate_r4: "React Basics",
            certificate_r5: "React Avanzado",
            certificate_r6: "Diseño UX/UI",

            skills_h3: "Competencias",
            dev_h1: "Proyectos",
            work_in_dev: "Sección en desarollo 🤭",

            contact_h1: "¿Queréis trabajar conmigo?",
            contact_availability: "Actualmente disponible para un trabajo a tiempo completo",
            contact_sub1: "Si queréis que trabaje con vosotros como",
            contact_sub2: "enviadme un mensaje a",
            form_position: "Puesto",
            form_proposal: "Propuesta",
            form_placeholder: "Mensaje:",
            form_submit: "Enviadme un mensaje",
            opt_a: "Analista de Datos",
            opt_b: "Desarollador Front-End",
            opt_c: "Otro puesto",
            opt_1: "Oferta tiempo completo",
            opt_2: "Oferta tiempo parcial / Proyecto",
            opt_3: "Otra oferta",

            validation_error: "Por favor seleccionad tanto una opción de 'Puesto' como una opción de 'Propuesta'.",

            email_verify: "Revisad el contenido de vuestro correo electrónico para que incluya la siguiente información:",
            email_salary: "- Salario: una cifra concreta, un rango o una tarifa por hora.",
            email_contract: "- Duración prevista del contrato: si procede.",
            email_expected: "- Duración prevista del proyecto: si procede.",
            email_delivery: "- Fecha de entrega: si procede.",
        },

        ca: {
            nav_home: "Inici",
            nav_about: "Sobre mi",
            nav_programs: "Programes",
            nav_certificates: "Certificats",
            nav_works: "Projectes",
            nav_contact: "Contacte",
            nav_theme: "Tema",
            nav_language: "Idioma",

            scroll_down: "llisqueu cap abaix",
            heading: "Sobre mi",
            description: "Professional especialitzat en els àmbits tècnics de l'Anàlisi de Dades, així com del Desenvolupament Front-End. A causa de la meva criança i formació al país d'Andorra, he estat familiaritzat amb un bon nombre d'idiomes des de mon naixement.",
            subtitle: "Idiomes",
            catalan_level: "C2 – Nadiu",
            deutsch_level: "A2 – Actualment en procés",
            language_instructions: "Feu clic en qualsevol de les llengües anteriors per canviar l'idioma de la pàgina web.",

            programs_h1: "Programes",
            job_title_h2_left: "Anàlitica de Dades",
            job_title_h2_right: "Desenvolupament Front-End",
            see_more: "veure més",
            program_l1_p: "Microsoft Excel | Google Sheets | Apple Numbers. Editors de full de càlcul amb capacitats de càlcul i computació, eines de gràfics, taules dinàmiques, etc.",
            program_l2_p: "Structured Query Language (SQL) és un llenguatge específic d'un domini que s'utilitza per gestionar dades, especialment en un sistema de gestió de bases de dades relacionals (RDBMS). És especialment útil per tractar dades estructurades, és a dir, dades que incorporen relacions entre entitats i variables.",
            program_l3_p: "R és un llenguatge de programació per al càlcul estadístic i la visualització de dades. Ha estat àmpliament adoptat en els camps de l'explotació de dades, la bioinformàtica, l'anàlisi de dades i la ciència de dades.",
            program_l4_p: "Plataforma líder d'anàlisi visual i intel·ligència empresarial (BI). Permet connectar-se a dades brutes i transformar-les en gràfics interactius i fàcils de digerir, com taulers de control, mapes i gràfics, fent que patrons complexos, tendències i valors atípics siguin fàcilment comprensibles per a tothom.",
            program_l5_p: "Microsoft Powerpoint | Google Slides | Apple Keynote. Programaris de presentació utilitzats àmpliament en l'Analítica de Dades per presentar els resultats tant als grups d'interès (stakeholders) com als participants dels estudis.",
            program_r1_p: "Llenguatge de marcatge fundamental (HyperText Markup Language, en anglès), utilitzat per estructurar i presentar contingut a internet. Introduït per substituir estàndards més antics, ofereix suport nadiu per a multimèdia, elements semàntics i funcions avançades d'aplicacions web sense necessitat de complements externs com Flash.",
            program_r2_p: "Llenguatge de full d'estils (Cascading Style Sheets, en anglès) utilitzat per especificar la presentació i l'estil d'un document escrit en un llenguatge de marcatge. El CSS és una tecnologia fonamental d'internet.",
            program_r3_p: "Llenguatge de programació i tecnologia fundamental d'internet. JavaScript és un llenguatge d'alt nivell, sovint compilat just-in-time (JIT, en anglès), que compleix l'estàndard ECMAScript. Disposa de tipatge dinàmic, orientació a objectes basada en prototips i funcions de primera classe. És multiparadigma, ja que admet estils de programació orientats a esdeveniments, funcionals i imperatius. Disposa d'interfícies de programació d'aplicacions (APIs) per treballar amb text, dates, expressions regulars, estructures de dades estàndard i el Model d'Objecte de Document (DOM).",
            program_r4_p: "Figma | Adobe XD. El conjunt de funcions de Figma es centra en el disseny d'interfícies d'usuari (UI) i d'experiència d'usuari (UX), amb un èmfasi en la col·laboració en temps real, utilitzant una varietat d'eines d'edició de gràfics vectorials i de prototipatge.",
            program_r5_p: "React és una de les tecnologies web més utilitzades (segons l'enquesta Stack Overflow Developer Survey del 2025). És una llibreria de JavaScript per a Front-End gratuïta i de codi obert, desenvolupada per Meta (abans Facebook), que té com a objectiu fer que la creació d'interfícies d'usuari basades en components sigui més fluida. És mantinguda i actualitzada activament per Meta i una comunitat de desenvolupadors individuals i empreses.",

            certificates: "Certificats",
            port_sub: "Certificat Professional",
            port_hover: "Veure Certificat",
            certificate_l1: "Data Foundations",
            certificate_l2: "Data-Driven Decision Making",
            certificate_l3: "Data Exploration",
            certificate_l4: "Data Processing (SQL)",
            certificate_l5: "Data Analysis (RStudio)",
            certificate_l6: "Data Viz (Tableau)",
            certificate_r1: "Programació en JS",
            certificate_r2: "Control de Versions",
            certificate_r3: "HTML & CSS en profunditat",
            certificate_r4: "React Basics",
            certificate_r5: "React Avançat",
            certificate_r6: "Disseny UX/UI",

            skills_h3: "Competències",
            dev_h1: "Projectes",
            work_in_dev: "Secció en desenvolupament 🤭",

            contact_h1: "Voleu treballar amb mi?",
            contact_availability: "Actualment disponible per una posició a temps complet",
            contact_sub1: "Si voleu que treballi amb vosaltres com a",
            contact_sub2: "envieu-me un missatge a",
            form_position: "Posició",
            form_proposal: "Proposta",
            form_placeholder: "Missatge: ",
            form_submit: "Envieu-me un missatge",
            opt_a: "Analista de Dades",
            opt_b: "Desenvolupador Front-End",
            opt_c: "Altre posició",
            opt_1: "Oferta laboral a temps complet",
            opt_2: "Oferta laboral a temps parcial / Projecte",
            opt_3: "Altre proposta",

            validation_error: "Seleccioneu tant una opció de 'Posició' com una opció de 'Proposta'.",

            email_verify: "Comproveu el contingut del vostre correu electrònic perquè inclogui la següent informació:",
            email_salary: "- Salari: un nombre específic, un rang o un preu per hora.",
            email_contract: "- Durada prevista del contracte: Si s'escau.",
            email_expected: "- Durada prevista del projecte: Si s'escau.",
            email_delivery: "- Data de lliurament: Si s'escau.",
        },

        de: {
            nav_home: "Startseite",
            nav_about: "Über mich",
            nav_programs: "Programme",
            nav_certificates: "Zertifikate",
            nav_works: "Projekte",
            nav_contact: "Kontakt",
            nav_theme: "Design-Wechsler",
            nav_language: "Sprache",

            scroll_down: "scrolle nach unten",
            heading: "Über mich",
            description: "Fachkraft mit Spezialisierung in den technischen Bereichen Datenanalyse und Frontend-Entwicklung. Da ich in Andorra aufgewachsen bin und dort meine Ausbildung absolviert habe, bin ich seit meiner Geburt mit einer ganzen Reihe von Sprachen vertraut.",
            subtitle: "Sprachen",
            catalan_level: "C2 – Muttersprachliche",
            deutsch_level: "A2 – Derzeit in Arbeit",
            language_instructions: "Klicken Sie auf eine der oben aufgeführten Sprachen, um die Sprache der Website zu ändern.",

            programs_h1: "Programme",
            job_title_h2_left: "Datenanalyse",
            job_title_h2_right: "Frontend-Entwicklung",
            see_more: "mehr erfahren",
            program_l1_p: "Microsoft Excel | Google Sheets | Apple Numbers. Tabellenkalkulationsprogramme mit Berechnungs- und Rechenfunktionen, Diagrammtools, Pivot-Tabellen usw.",
            program_l2_p: "Die Structured Query Language (SQL) ist eine domänenspezifische Sprache, die zur Verwaltung von Daten, insbesondere in einem relationalen Datenbankmanagementsystem (RDBMS), verwendet wird. Sie eignet sich besonders gut für den Umgang mit strukturierten Daten, d. h. Daten, die Beziehungen zwischen Entitäten und Variablen enthalten.",
            program_l3_p: "R ist eine Programmiersprache für statistische Berechnungen und Datenvisualisierung. Sie hat sich in den Bereichen Data Mining, Bioinformatik, Datenanalyse und Data Science weit verbreitet.",
            program_l4_p: "Führende Plattform für visuelle Analysen und Business Intelligence (BI). Ermöglicht den Zugriff auf Rohdaten und deren Umwandlung in interaktive, leicht verständliche Grafiken wie Dashboards, Karten und Diagramme – wodurch komplexe Muster, Trends und Ausreißer für jeden leicht nachvollziehbar werden.",
            program_l5_p: "Microsoft Powerpoint | Google Slides | Apple Keynote. Präsentationsprogramme, die im Bereich der Datenanalyse in grossem Umfang eingesetzt werden, um Ergebnisse sowohl den Interessengruppen als auch den Studienteilnehmenden zu präsentieren.",
            program_r1_p: "Eine zentrale Auszeichnungssprache zur Strukturierung und Darstellung von Inhalten im World Wide Web. Sie wurde als Ersatz für ältere Standards eingeführt und bietet native Unterstützung für Multimedia, semantische Elemente und erweiterte Funktionen für Webanwendungen, ohne dass externe Plugins wie Flash erforderlich sind.",
            program_r2_p: "Cascading Style Sheets (CSS) ist eine Stylesheet-Sprache, mit der die Darstellung und das Design eines in einer Auszeichnungssprache verfassten Dokuments festgelegt werden. CSS ist eine der grundlegenden Technologien des World Wide Web.",
            program_r3_p: "Programmiersprache und Kerntechnologie des Webs. JavaScript ist eine hochrangige, oft just-in-time-kompilierte Sprache, die dem ECMAScript-Standard entspricht. Sie verfügt über dynamische Typisierung, prototypbasierte Objektorientierung und First-Class-Funktionen. Sie ist multiparadigmatisch und unterstützt ereignisgesteuerte, funktionale und imperative Programmierstile. Sie verfügt über Anwendungsprogrammierschnittstellen (APIs) für die Arbeit mit Text, Datumsangaben, regulären Ausdrücken, Standarddatenstrukturen und dem Document Object Model (DOM).",
            program_r4_p: "Figma | Adobe XD. Der Funktionsumfang von Figma konzentriert sich auf das Design von Benutzeroberflächen und Benutzererlebnissen, wobei der Schwerpunkt auf der Zusammenarbeit in Echtzeit liegt und eine Vielzahl von Vektorgrafik-Editoren und Prototyping-Tools zum Einsatz kommt.",
            program_r5_p: "React ist eine der am häufigsten verwendeten Webtechnologien (laut der Stack Overflow-Entwicklerumfrage 2025). Es handelt sich um eine kostenlose und quelloffene Frontend-JavaScript-Bibliothek, die von Meta (ehemals Facebook) entwickelt wurde und darauf abzielt, die Erstellung komponentenbasierter Benutzeroberflächen «nahtloser» zu gestalten.",

            certificates: "Zertifikate",
            port_sub: "Berufliche Zertifizierung",
            port_hover: "Zertifikat anzeigen",
            certificate_l1: "Grundlagen der Datenverarbeitung",
            certificate_l2: "Datengestützte Entscheidungsfindung",
            certificate_l3: "Datenexploration",
            certificate_l4: "Datenverarbeitung (SQL)",
            certificate_l5: "Datenanalyse (RStudio)",
            certificate_l6: "Datenvisualisierung (Tableau)",
            certificate_r1: "JS-Programmierung",
            certificate_r2: "Versionskontrolle",
            certificate_r3: "HTML & CSS im Detail",
            certificate_r4: "React-Grundlagen",
            certificate_r5: "Fortgeschritten React",
            certificate_r6: "UX/UI-Design",

            skills_h3: "Fähigkeiten",
            dev_h1: "Projekte",
            work_in_dev: "Abschnitt befindet sich noch in der Entwicklung 🤭",

            contact_h1: "Möchtest du mit mir zusammenarbeiten?",
            contact_availability: "Derzeit für eine Vollzeitstelle verfügbar",
            contact_sub1: "Falls Sie möchten, dass ich mit Ihnen als",
            contact_sub2: "schick mir eine Nachricht an",
            form_position: "Stellenbezeichnung",
            form_proposal: "Vorschlag",
            form_placeholder: "Nachricht:",
            form_submit: "Schick mir eine Nachricht",
            opt_a: "Datenanalyst",
            opt_b: "Frontend-Entwickler",
            opt_c: "Eine weitere Stelle",
            opt_1: "Vollzeitstelle",
            opt_2: "Teilzeitangebot/Projekt",
            opt_3: "Ein weiterer Vorschlag",

            validation_error: "Bitte wählen Sie sowohl eine Option für die 'Position' als auch eine Option für den 'Vorschlag' aus.",

            email_verify: "Bitte überprüfen Sie den Inhalt Ihrer E-Mail, um sicherzustellen, dass er Folgendes enthält:",
            email_salary: "- Gehalt: Entweder ein konkreter Betrag, eine Spanne oder ein Stundenlohn.",
            email_contract: "- Voraussichtliche Vertragsdauer: Falls zutreffend.",
            email_expected: "- Voraussichtliche Projektdauer: Falls zutreffend.",
            email_delivery: "- Liefertermin: Falls zutreffend.",
        },
    };


/* Browser Language Preference */

    function getPreferredLanguage() {
        const savedLang = localStorage.getItem('user-language');
        if (savedLang && translations[savedLang]) {
            return savedLang;
        }
        const browserLang = navigator.language.split('-')[0];
        if (translations[browserLang]) {
            return browserLang;
        }
        return 'en';
    }

    let currentLang = getPreferredLanguage();


/* Language Dropdown */

    const langTrigger = document.getElementById('lang-trigger');
    const langMenu = document.getElementById('lang-menu');
    if (langTrigger) {
        langTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            langMenu.classList.toggle('show');
        });
    }

    window.addEventListener('click', () => {
        if (langMenu) langMenu.classList.remove('show');
    });


/* Navigation Bar Scroll Threshold */

    const navbar = document.getElementById('navbar');
    const heroSection = document.querySelector('.home-section');
    const triggerOffset = 100;

    window.addEventListener('scroll', () => {
        if (heroSection.getBoundingClientRect().bottom < triggerOffset) {
            navbar.classList.add('visible');
        } else {
            navbar.classList.remove('visible');
        }
    });


/* Portrait hamburger menu */

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }


/* Portrait full-screen menu */

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            const navLinksMenu = document.getElementById('nav-links');
            if (navLinksMenu && navLinksMenu.classList.contains('active')) {
                navLinksMenu.classList.remove('active');
            }
        });
    });


/* See more toggle */

    document.querySelectorAll('.see-more-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const expandableContainer = btn.closest('.program-card') || btn.closest('.skills-block');
            const textSpan = btn.querySelector('[data-translate="see_more"]') || btn.querySelector('span');

            expandableContainer.classList.toggle('expanded');

            const isExpanded = expandableContainer.classList.contains('expanded');
            btn.setAttribute('aria-expanded', isExpanded);

            if (isExpanded) {
                textSpan.textContent = textSpan.getAttribute('data-lang') === 'fr' ? 'voir moins' : 'see less'; 
            } else {
                textSpan.textContent = textSpan.getAttribute('data-lang') === 'fr' ? 'voir plus' : 'see more';
            }
        });
    });


/* Scroll Animation */

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -30% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');

                if (entry.target.matches('.about-section') || entry.target.querySelector('.progress-fill')) {
                    observer.unobserve(entry.target);
                }
            } else {
                if (!entry.target.matches('.about-section') && !entry.target.querySelector('.progress-fill')) {
                    entry.target.classList.remove('show');
                }
            }
        });
    }, { threshold: 0.1 });


/* Tracking */

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));

/* Theme Toggle */
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('theme', newTheme);
            themeToggle.textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
        });
    }

    const positionEl = document.querySelector('.contact-position');
    const positionKeys = ['opt_a', 'opt_b'];
    let currentPosIndex = 0;

function updateLanguage(langCode, isInit = false) {
        if (!isInit && currentLang === langCode) return;

        currentLang = langCode;

        localStorage.setItem('user-language', langCode);

        const elementsToTranslate = document.querySelectorAll('[data-translate]');
        elementsToTranslate.forEach(el => {
            const translationKey = el.getAttribute('data-translate');

            if (translationKey === 'contact_pos') {
                const targetKey = positionKeys[currentPosIndex];
                el.textContent = (translations[langCode] && translations[langCode][targetKey])
                    ? translations[langCode][targetKey]
                    : translations['en'][targetKey];
                return;
            }

            if (translations[langCode] && translations[langCode][translationKey]) {
                el.classList.add('fade-in');

                if (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') {
                    el.setAttribute('placeholder', translations[langCode][translationKey]);
                } else {
                    el.textContent = translations[langCode][translationKey];
                }

                if(translationKey === 'see_more') {
                     el.setAttribute('data-lang', langCode);
                }

                setTimeout(() => el.classList.remove('fade-in'), 500);
            }
        });
    }

    if (langMenu) {
        langMenu.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', () => {
                const selectedLang = btn.getAttribute('data-lang');
                updateLanguage(selectedLang);
            });
        });
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedLang = btn.getAttribute('data-lang');
            updateLanguage(selectedLang);
        });
    });


/* Form submition */

    const submitFormBtn = document.getElementById('form-submit-btn');
    if (submitFormBtn) {
        submitFormBtn.addEventListener('click', () => {
            if (submitFormBtn.classList.contains('is-loading')) return;

            const positionSelect = document.getElementById('position-select');
            const proposalSelect = document.getElementById('proposal-select');
            const messageArea = document.getElementById('form-text-message');

            const dictionary = translations[currentLang] || translations['en'];

            if (!positionSelect.value || !proposalSelect.value) {
                const alertMsg = dictionary.validation_error || "Please select both a Position option and a Proposal option.";
                alert(alertMsg);
                return;
            }

            submitFormBtn.classList.add('is-loading');

            const posText = positionSelect.options[positionSelect.selectedIndex].text;
            const propText = proposalSelect.options[proposalSelect.selectedIndex].text;
            const userCustomText = messageArea.value.trim();

            const emailSubject = `${propText} – ${posText}`;

            let emailBody = `${dictionary.email_verify || ''}\n\n` +
                             `${dictionary.email_salary || ''}\n` +
                             `${dictionary.email_contract || ''}\n` +
                             `${dictionary.email_expected || ''}\n` +
                             `${dictionary.email_delivery || ''}\n\n`;

            if (userCustomText) {
                emailBody += `––––––––––––––––––––––––––––––––\n\n`+userCustomText;
            }

            const mailtoUrl = `mailto:neil.berenguer.work@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
            window.location.href = mailtoUrl;

            setTimeout(() => {
                submitFormBtn.classList.remove('is-loading');
            }, 3000);
        });
    }


/* Fade-in on Scroll */

    function cyclePositionText() {
        if (!positionEl) return;

        positionEl.classList.add('fade-out');

        setTimeout(() => {
            currentPosIndex = (currentPosIndex + 1) % positionKeys.length;
            const targetKey = positionKeys[currentPosIndex];

            const localizedText = (translations[currentLang] && translations[currentLang][targetKey]) 
                ? translations[currentLang][targetKey] 
                : translations['en'][targetKey];

            positionEl.textContent = localizedText;
            positionEl.classList.remove('fade-out');
        }, 500); 
    }

    updateLanguage(currentLang);

    if (positionEl) {
        const structuralKey = positionKeys[currentPosIndex];
        positionEl.textContent = (translations[currentLang] && translations[currentLang][structuralKey])
            ? translations[currentLang][structuralKey]
            : translations['en'][structuralKey];

        setInterval(cyclePositionText, 4000);
    }
});


/* 3D Icon Tilt */

    const featureIcons = document.querySelectorAll('.program-icon');
    const maxTiltAngle = 22.5;

    featureIcons.forEach(icon => {
        icon.addEventListener('mousemove', (e) => {
            if (window.matchMedia('(max-width: 768px)').matches) {
                return;
            }

            const rect = icon.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const normalizedX = (mouseX - centerX) / centerX;
            const normalizedY = (mouseY - centerY) / centerY;
            const tiltX = -normalizedY * maxTiltAngle;
            const tiltY = normalizedX * maxTiltAngle;

            icon.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(12px)`;
        });

        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)';
        });
    });