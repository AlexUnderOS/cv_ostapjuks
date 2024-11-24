const translations = {
    lv: {
        developerTitle: 'Aleksandrs Ostapjuks',
        job: 'Front-end izstrādātājs',
        careerObjective:
            'Front-end programmētājs, man interesē lietotāja interfeisa izstrāde, orientējoties uz ReactJS, HTML un CSS tīmekļa vietņu izkārtojumu, veidojot praktiskus UI/UX dizainus.',
        goals: [
            'Padziļināt savas zināšanas par WEB, koncentrējoties uz React bibliotēku',
            'Izprast izstrādes principus komerciālā jomā',
        ],
        currentGoal: 'Esošie mērķi:',
        education: 'Izglītība',
        educationSpec: 'programmēšanas tehniķis',
        miniProject: 'Mini demonstrējumu projekts',
        miniProjectContext:
            'Projekts, kas demonstrē lielāko daļu no manas prasmes web izstrādē. Vairāk informācijas dokumentācijā.',
        skills: 'Prasmes',
        warning:
            'Projekts vēl tiek izstrādāts. Tomēr lielākā daļa projektā plānoto funkciju jau ir pieejamas pašreizējās versijās.',
    },
    ru: {
        developerTitle: 'Александр Остапюк',
        job: 'Front-end разработчик',
        careerObjective:
            'Front-end программист, меня интересует разработка пользовательского интерфейса, фокусируясь на ReactJS, HTML и CSS верстке сайтов, создании практичных UI/UX дизайнов.',
        goals: [
            'Углубить свои знания о WEB, сосредоточившись на библиотеке React',
            'Понять принципы коммерческого проектирования сайтов',
        ],
        currentGoal: 'Текущие цели:',
        education: 'Образование',
        educationSpec: 'техник-программист',
        miniProject: 'Демонстрационный мини-проект',
        miniProjectContext:
            'Проект, демонстрирующий большинство моих навыков веб-разработки. Больше информации в документации.',
        skills: 'Навыки',
        warning:
            'Проект все еще находится в стадии разработки. Однако большинство функций, запланированных в проекте, уже доступны в текущих версиях.',
    },
    en: {
        developerTitle: 'Alex Ostapjuk',
        job: 'Front-end developer',
        careerObjective:
            "Front-end programmer, I'm interested in UI development, focusing on ReactJS, HTML and CSS website layout, creating practical UI/UX designs.",
        goals: [
            'Improve my WEB knowledge skills by focusing on the React library',
            'Understand the principles of commercial website engineering',
        ],
        currentGoal: 'Current goals:',
        education: 'Education',
        educationSpec: 'technical programmer',
        miniProject: 'Mini-project demonstration',
        miniProjectContext:
            'A Project that demonstrates most of my web development skills. More information in the documentation.',
        skills: 'Skills',
        warning:
            'The project is still under development. However, most of the features planned in the project are already available in current versions.',
    },
}

function switchLanguage(lang) {

    const languageLinks = document.querySelectorAll('.languages a');
    languageLinks.forEach(link => link.classList.remove('active')); // Убираем класс у всех языков
    const activeLink = Array.from(languageLinks).find(link => link.textContent.toLowerCase() === lang);
    if (activeLink) activeLink.classList.add('active');

    const content = translations[lang]

    document.querySelector('.top-header h1').textContent =
        content.developerTitle
    document.querySelector('.top-header h2').textContent = content.job

    // goals
    document.querySelector('.career-objective p').textContent =
        content.careerObjective
    const goalsList = document.querySelector('.career-objective ul')
    goalsList.innerHTML = content.goals
        .map((goal) => `<li>${goal}</li>`)
        .join('')

    // current goal title
    document.querySelector('.career-objective h4').textContent =
        content.currentGoal

    // education
    document.querySelector('.education h3').textContent = content.education
    document.querySelector(
        '#specContainer'
    ).textContent = `${content.educationSpec}`

    // mini-project
    document.querySelector('.mini-project h3').textContent = content.miniProject
    document.querySelector('.mini-project .context p').textContent =
        content.miniProjectContext

    // skills
    document.querySelector('.skills h3').textContent = content.skills

    // warning
    const warningElement = document.querySelector('#warningContainer')
    warningElement.textContent = content.warning
}

document.addEventListener('DOMContentLoaded', () => {
    switchLanguage('en')
})
