// translate.js
// Alterna idioma PT-BR <-> EN usando data-i18n + localStorage

(function () {
    const STORAGE_KEY = "portfolio_lang";
  
    // Dicionário (PT/EN). Chaves = data-i18n
    const translations = {
      "meta.title": {
        "pt-BR": "Léo Fonseca Portfólio",
        "en": "Léo Fonseca Portfolio"
      },
  
      "nav.home": { "pt-BR": "Início", "en": "Home" },
      "nav.skills": { "pt-BR": "Habilidades", "en": "Skills" },
      "nav.projects": { "pt-BR": "Projetos", "en": "Projects" },
      "nav.about": { "pt-BR": "Sobre", "en": "About" },
  
      "hamb.title": { "pt-BR": "Menu", "en": "Menu" },
      "hamb.socialTitle": { "pt-BR": "Redes", "en": "Social" },
      "hamb.appearanceTitle": { "pt-BR": "Aparência", "en": "Appearance" },
      "hamb.languageTitle": { "pt-BR": "Idioma", "en": "Language" },
      "hamb.cvTitle": { "pt-BR": "Currículo", "en": "Resume" },
      "hamb.cvBtn": { "pt-BR": "Visualizar CV", "en": "View Resume" },
  
      "hero.name": { "pt-BR": "Leonardo Fonseca", "en": "Leonardo Fonseca" },
      "hero.role": { "pt-BR": "Desenvolvedor de soluções digitais", "en": "Digital solutions developer" },
      "hero.welcome": { "pt-BR": "Bem-vindo(a) ao meu portfólio", "en": "Welcome to my portfolio" },
      "hero.p1": { "pt-BR": "Aqui você encontra alguns dos meus projetos <br>e experiências em desenvolvimento web.", "en": "Here you can find some of my projects <br>and experience in web development." },
      "hero.p2": { "pt-BR": "Fique à vontade para navegar e conhecer meu trabalho.", "en": "Feel free to browse and explore my work." },
  
      "skills.title": { "pt-BR": "MINHAS HABILIDADES", "en": "MY SKILLS" },
  
      "skills.card1.title": { "pt-BR": "HTML - CSS - JavaScript", "en": "HTML - CSS - JavaScript" },
      "skills.card1.p1": {
        "pt-BR": "<span class='sep'>&#8226;</span> As bases do Front-End: estrutura, estilo e interatividade. Com essas três tecnologias eu construo interfaces responsivas, acessíveis e com boa experiência de uso.",
        "en": "<span class='sep'>&#8226;</span> Front-end fundamentals: structure, styling, and interactivity. With these three technologies I build responsive, accessible interfaces with a great user experience."
      },
      "skills.card1.p2": {
        "pt-BR": "<span class='sep'>&#8226;</span> Comecei minha jornada dominando fundamentos, porque eles fazem a diferença em qualquer projeto, com ou sem frameworks.",
        "en": "<span class='sep'>&#8226;</span> I started by mastering the fundamentals, because they matter in every project, with or without frameworks."
      },
      "skills.card1.p3": {
        "pt-BR": "<span class='sep'>&#8226;</span> Entender o “por trás dos panos” me ajuda a escrever código mais limpo, sustentável e pronto para evoluir.",
        "en": "<span class='sep'>&#8226;</span> Understanding what happens under the hood helps me write cleaner, sustainable code that is ready to evolve."
      },
  
      "skills.card2.title": { "pt-BR": "Angular - Bootstrap - React.JS", "en": "Angular - Bootstrap - React.js" },
      "skills.card2.p1": {
        "pt-BR": "<span class='sep'>&#8226;</span> Após me consolidar nos fundamentos, passei a aprender os frameworks e bibliotecas para ganhar produtividade e organizar melhor a arquitetura do front-end.",
        "en": "<span class='sep'>&#8226;</span> After building strong fundamentals, I moved on to frameworks and libraries to boost productivity and better organize front-end architecture."
      },
      "skills.card2.p2": {
        "pt-BR": "<span class='sep'>&#8226;</span> Estudei sobre componentes reutilizáveis, boas práticas de organização e padrões que facilitam manutenção e evolução do projeto.",
        "en": "<span class='sep'>&#8226;</span> I studied reusable components, organizational best practices, and patterns that make maintenance and evolution easier."
      },
      "skills.card2.p3": {
        "pt-BR": "<span class='sep'>&#8226;</span> Cada ferramenta tem seu papel: do layout responsivo à construção de aplicações mais completas e escaláveis.",
        "en": "<span class='sep'>&#8226;</span> Each tool has its role: from responsive layout to building more complete, scalable applications."
      },
  
      "skills.card3.title": { "pt-BR": "Python - SQL - PowerBI", "en": "Python - SQL - Power BI" },
      "skills.card3.p1": {
        "pt-BR": "<span class='sep'>&#8226;</span> Para o Back-End e dados, venho estudando Python e SQL, aplicando conceitos como CRUD, integração com banco de dados e manipulação de informações.",
        "en": "<span class='sep'>&#8226;</span> For back-end and data, I study Python and SQL, applying concepts such as CRUD, database integration, and data handling."
      },
      "skills.card3.p2": {
        "pt-BR": "<span class='sep'>&#8226;</span> Também utilizo Power BI para transformar dados em dashboards claros, com indicadores e visualizações úteis para tomada de decisão.",
        "en": "<span class='sep'>&#8226;</span> I also use Power BI to turn data into clear dashboards with KPIs and visuals that support decision-making."
      },
      "skills.card3.p3": {
        "pt-BR": "<span class='sep'>&#8226;</span> Meu objetivo é conectar aplicações e dados de forma consistente, com foco em qualidade, organização e valor para o usuário.",
        "en": "<span class='sep'>&#8226;</span> My goal is to connect applications and data consistently, focusing on quality, organization, and user value."
      },
  
      "projects.title": { "pt-BR": "MEUS PROJETOS", "en": "MY PROJECTS" },
      "projects.techTitle": { "pt-BR": "Tecnologias Usadas no projeto:", "en": "Technologies used:" },
      "projects.btnView": { "pt-BR": "Ver projeto", "en": "View project" },
      "projects.btnCode": { "pt-BR": "Ver código", "en": "View code" },
  
      "p1.title": { "pt-BR": "Cifra de César", "en": "Caesar Cipher" },
      "p1.p1": { "pt-BR": "<span class='sep'>&#8226;</span> A Cifra de César, um dos métodos mais clássicos de criptografia", "en": "<span class='sep'>&#8226;</span> The Caesar Cipher, one of the most classic encryption methods" },
      "p1.p2": { "pt-BR": "<span class='sep'>&#8226;</span> O projeto permite criptografar e descriptografar mensagens em tempo real, ajustando o número de casas de deslocamento através de um controle dinâmico.", "en": "<span class='sep'>&#8226;</span> Encrypt and decrypt messages in real time, adjusting the shift amount with a dynamic control." },
      "p1.p3": { "pt-BR": "<span class='sep'>&#8226;</span> A interface foi pensada para tornar o processo visual e intuitivo, simulando o funcionamento tradicional da cifra com discos rotativos do alfabeto.", "en": "<span class='sep'>&#8226;</span> The interface was designed to be visual and intuitive, simulating the traditional cipher with rotating alphabet disks." },
      "p1.p4": { "pt-BR": "<span class='sep'>&#8226;</span> Acesse o projeto para testar diferentes combinações e explorar na prática um dos conceitos fundamentais da criptografia clássica.", "en": "<span class='sep'>&#8226;</span> Open the project to test combinations and explore a fundamental concept of classical cryptography." },
  
      "p2.title": { "pt-BR": "Pomo Do It! - Método Pomodoro", "en": "Pomo Do It! - Pomodoro Method" },
      "p2.p1": { "pt-BR": "<span class='sep'>&#8226;</span> Aplicação desenvolvida com HTML, CSS e JavaScript baseada no método Pomodoro para organização e foco nos estudos.", "en": "<span class='sep'>&#8226;</span> App built with HTML, CSS, and JavaScript based on the Pomodoro method for study focus and organization." },
      "p2.p2": { "pt-BR": "<span class='sep'>&#8226;</span> O sistema inclui temporizador inteligente, controle de tarefas, histórico de sessões e interface interativa.", "en": "<span class='sep'>&#8226;</span> Includes a smart timer, task control, session history, and an interactive UI." },
      "p2.p3": { "pt-BR": "<span class='sep'>&#8226;</span> Conta com recursos como sons ambientes, suporte a múltiplos idiomas e modo claro/escuro para melhorar a experiência do usuário.", "en": "<span class='sep'>&#8226;</span> Features ambient sounds, multi-language support, and light/dark mode to improve UX." },
  
      "p3.title": { "pt-BR": "ToDo List - Kanban", "en": "ToDo List - Kanban" },
      "p3.p1": { "pt-BR": "<span class='sep'>&#8226;</span> Sistema de organização de tarefas desenvolvido com HTML, CSS e JavaScript, baseado no modelo Kanban.", "en": "<span class='sep'>&#8226;</span> Task organization system built with HTML, CSS, and JavaScript based on the Kanban model." },
      "p3.p2": { "pt-BR": "<span class='sep'>&#8226;</span> Permite criar, editar e mover tarefas entre colunas, facilitando o acompanhamento do progresso das atividades.", "en": "<span class='sep'>&#8226;</span> Create, edit, and move tasks between columns to track progress easily." },
      "p3.p3": { "pt-BR": "<span class='sep'>&#8226;</span> Interface responsiva com foco em usabilidade, incluindo suporte a modo claro/escuro e adaptação para dispositivos móveis.", "en": "<span class='sep'>&#8226;</span> Responsive UI focused on usability, including light/dark mode and mobile adaptation." },
      "p3.p4": { "pt-BR": "<span class='sep'>&#8226;</span> O projeto continua em evolução, com planos de adicionar novas funcionalidades de produtividade e personalização.", "en": "<span class='sep'>&#8226;</span> The project is evolving, with plans to add productivity and customization features." },
  
      "p4.title": { "pt-BR": "Jogo da memória - Emojis de animais", "en": "Memory game - Animal emojis" },
      "p4.p1": { "pt-BR": "<span class='sep'>&#8226;</span> Jogo de memória criado do zero com HTML, CSS e JavaScript.", "en": "<span class='sep'>&#8226;</span> Memory game built from scratch with HTML, CSS, and JavaScript." },
      "p4.p2": { "pt-BR": "<span class='sep'>&#8226;</span> Interface simples e dinâmica, com foco em usabilidade e feedback visual.", "en": "<span class='sep'>&#8226;</span> Simple, dynamic interface focused on usability and visual feedback." },
      "p4.p3": { "pt-BR": "<span class='sep'>&#8226;</span> Projeto pensado para ser leve e divertido, inclusive em momentos em família.", "en": "<span class='sep'>&#8226;</span> Designed to be lightweight and fun, including for family moments." },
      "p4.p4": { "pt-BR": "<span class='sep'>&#8226;</span> Próximos passos: novos modos de jogo e níveis de dificuldade.", "en": "<span class='sep'>&#8226;</span> Next steps: new game modes and difficulty levels." },
  
      "p5.title": { "pt-BR": "Player de música - SpotiFAKE", "en": "Music player - SpotiFAKE" },
      "p5.p1": { "pt-BR": "<span class='sep'>&#8226;</span> Um player de música inspirado na experiência do Spotify, com interface simples e navegação intuitiva.", "en": "<span class='sep'>&#8226;</span> A music player inspired by Spotify, with a simple interface and intuitive navigation." },
      "p5.p2": { "pt-BR": "<span class='sep'>&#8226;</span> Projeto desenvolvido com foco em estrutura, estilização e interações no front-end.", "en": "<span class='sep'>&#8226;</span> Built focusing on structure, styling, and front-end interactions." },
      "p5.p3": { "pt-BR": "<span class='sep'>&#8226;</span> A playlist foi montada como uma seleção especial (TOP 10 + 1) para tornar o projeto mais pessoal e divertido.", "en": "<span class='sep'>&#8226;</span> The playlist is a special selection (TOP 10 + 1) to make the project more personal and fun." },
      "p5.p4": { "pt-BR": "<span class='sep'>&#8226;</span> Acesse o projeto e, se quiser, me conte sua opinião.", "en": "<span class='sep'>&#8226;</span> Open the project and, if you want, share your feedback." },
  
      "p6.title": { "pt-BR": "Jogo de clique - Detona Ralph", "en": "Click game - Wreck-It Ralph" },
      "p6.p1": { "pt-BR": "<span class='sep'>&#8226;</span> Jogo desenvolvido com HTML, CSS e JavaScript, com foco em lógica e interatividade.", "en": "<span class='sep'>&#8226;</span> Game built with HTML, CSS, and JavaScript, focused on logic and interactivity." },
      "p6.p2": { "pt-BR": "<span class='sep'>&#8226;</span> Um dos meus primeiros projetos práticos, criado durante um bootcamp de desenvolvimento de jogos (DIO).", "en": "<span class='sep'>&#8226;</span> One of my first hands-on projects, created during a game dev bootcamp (DIO)." },
      "p6.p3": { "pt-BR": "<span class='sep'>&#8226;</span> O projeto segue em evolução: pretendo adicionar melhorias e novas funcionalidades.", "en": "<span class='sep'>&#8226;</span> The project is evolving: I plan to add improvements and new features." },
  
      "about.title": { "pt-BR": "MUITO PRAZER!", "en": "NICE TO MEET YOU!" },
      "about.p1": { "pt-BR": "Olá! Eu sou o Leonardo Fonseca.", "en": "Hi! I'm Leonardo Fonseca." },
      "about.p2": { "pt-BR": "Sou um profissional em transição de carreira para a área da tecnologia.", "en": "I'm transitioning my career into the tech field." },
      "about.p3": { "pt-BR": "Ao longo de mais de 15 anos de carreira, desenvolvi algumas habilidades que considero valiosas, como comunicação, negociação, organização e foco em resultados.", "en": "Over more than 15 years, I developed valuable skills such as communication, negotiation, organization, and results-driven focus." },
      "about.p4": {
        "pt-BR": "Destaco aqui mais algumas das minhas soft skills: <br> <span class='sep'>&#8226;</span> Comunicação assertiva <span class='sep'>&#8226;</span> Facilidade de aprendizado <span class='sep'>&#8226;</span> Negociação e persuasão <span class='sep'>&#8226;</span> Criatividade <span class='sep'>&#8226;</span> Tomada de decisão <span class='sep'>&#8226;</span> Pensamento crítico <span class='sep'>&#8226;</span> Adaptabilidade <span class='sep'>&#8226;</span> Trabalho em equipe <span class='sep'>&#8226;</span> Inteligência emocional <span class='sep'>&#8226;</span> Motivação <span class='sep'>&#8226;</span> Ética profissional <span class='sep'>&#8226;</span> Responsabilidade <span class='sep'>&#8226;</span> Confiabilidade",
        "en": "Here are some of my soft skills: <br> <span class='sep'>&#8226;</span> Assertive communication <span class='sep'>&#8226;</span> Fast learner <span class='sep'>&#8226;</span> Negotiation & persuasion <span class='sep'>&#8226;</span> Creativity <span class='sep'>&#8226;</span> Decision-making <span class='sep'>&#8226;</span> Critical thinking <span class='sep'>&#8226;</span> Adaptability <span class='sep'>&#8226;</span> Teamwork <span class='sep'>&#8226;</span> Emotional intelligence <span class='sep'>&#8226;</span> Motivation <span class='sep'>&#8226;</span> Professional ethics <span class='sep'>&#8226;</span> Responsibility <span class='sep'>&#8226;</span> Reliability"
      },
      "about.p5": { "pt-BR": "Atualmente, curso Análise e Desenvolvimento de Sistemas (ADS) e direciono meus estudos para desenvolvimento Full Stack.", "en": "Currently, I'm studying Systems Analysis and Development and focusing my learning on Full Stack development." },
      "about.p6": { "pt-BR": "Disponibilizei uma versão do meu currículo. Para acessar, clique no botão abaixo.", "en": "I made my resume available. To access it, click the button below." },
      "about.cvBtn": { "pt-BR": "Visualizar CV", "en": "View Resume" },
  
      "footer.by": { "pt-BR": "Desenvolvido por <span>LEONARDO G. FONSECA</span>", "en": "Built by <span>LEONARDO G. FONSECA</span>" },
      "footer.rights": { "pt-BR": "Todos os direitos reservados", "en": "All rights reserved" }
    };
  
    function getSavedLang() {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved === "en" ? "en" : "pt-BR";
    }
  
    function setLang(lang) {
      localStorage.setItem(STORAGE_KEY, lang);
    }
  
    function applyLang(lang) {
      // Atualiza atributo lang do HTML
      const html = document.documentElement;
      html.setAttribute("lang", lang === "en" ? "en" : "pt-br");
  
      // Atualiza <title> se marcado
      const titleEl = document.querySelector("title[data-i18n]");
      if (titleEl) {
        const key = titleEl.getAttribute("data-i18n");
        const t = translations[key]?.[lang];
        if (t) titleEl.textContent = t.replace(/<br\s*\/?>/g, " ");
      }
  
      // Atualiza todos os textos
      const nodes = document.querySelectorAll("[data-i18n]");
      nodes.forEach((el) => {
        const key = el.getAttribute("data-i18n");
        const value = translations[key]?.[lang];
        if (!value) return;
  
        // Permite HTML (para <br> e spans de bullet)
        el.innerHTML = value;
      });
  
      // Atualiza labels dos botões de idioma
      const langLabelDesktop = document.getElementById("langLabelDesktop");
      const langTextMobile = document.getElementById("langTextMobile");
  
      // UX: quando estiver em PT, mostramos "EN" como alvo; quando estiver em EN, mostramos "PT"
      if (langLabelDesktop) langLabelDesktop.textContent = lang === "en" ? "PT" : "EN";
      if (langTextMobile) langTextMobile.textContent = lang === "en" ? "Português" : "English";
    }
  
    function toggleLang() {
      const current = getSavedLang();
      const next = current === "en" ? "pt-BR" : "en";
      setLang(next);
      applyLang(next);
    }
  
    function initTranslator() {
      // Aplica idioma salvo ao carregar
      const initial = getSavedLang();
      applyLang(initial);
  
      // Botões
      const btnDesktop = document.getElementById("langToggleDesktop");
      const btnMobile = document.getElementById("langToggleMobile");
  
      if (btnDesktop) btnDesktop.addEventListener("click", toggleLang);
      if (btnMobile) btnMobile.addEventListener("click", toggleLang);
    }
  
    document.addEventListener("DOMContentLoaded", initTranslator);
  })();