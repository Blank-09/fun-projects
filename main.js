const cardTemplate = document.querySelector('template').content;
const projectCards = document.getElementById('project-cards');

const isDev = !location.hostname.startsWith('https://');

const gitRepo = 'https://github.com/Blank-09/fun-projects/tree/master/';

const projects = [
  {
    name: 'Calculator App',
    description: 'A simple calculator made using HTML, CSS and JavaScript.',
    img: './assets/images/calculator.png',
    code: {
      source: 'calculator',
      live: './calculator',
    },
  },
  {
    name: 'FLAMES',
    description:
      'FLAMES is a popular game named after the acronym: Friends, Lovers, Affectionate, Marriage, Enemies, Sibling. This is a fun game to play with your friends and loved ones. Just enter two names and find the relationship between them.',
    img: './assets/images/flames.png',
    code: {
      source: 'FLAMES',
      live: './FLAMES',
    },
  },
  {
    name: 'Color Disco (Simple)',
    description:
      'Color Disco is an interactive website that celebrates colors. Dive into a world of endless chromatic possibilities, choose favourite colors, and let your imagination run wild as you explore the magic of colors on Color Disco.',
    img: './assets/images/color-disco-simple.png',
    code: {
      source: 'color-disco',
      live: './color-disco',
    },
  },
  {
    name: 'Color Disco (Hex)',
    description:
      'Color Disco is an interactive website that celebrates colors. Dive into a world of endless chromatic possibilities, choose favourite colors, and let your imagination run wild as you explore the magic of colors on Color Disco.',
    img: './assets/images/color-disco-hex.png',
    code: {
      source: 'color-disco',
      live: './color-disco/hex.html',
    },
  },
  {
    name: 'ModCounter',
    description:
      'ModCounter, makes your counting dream true. With the help of this app you can increment, decrement or reset your counter. 😂.',
    img: './assets/images/counter.png',
    code: {
      source: 'counter',
      live: './counter',
    },
  },
  {
    name: 'Stopwatch (with JavaScript)',
    description:
      'This Stop Watch is a mobile-friendly and reliable tool for tracking time. With a simple interface, it allows you to start, pause, and reset the timer with ease. Stay organized and efficient with the convenience of the Stop Watch app.',
    img: './assets/images/stopwatch.png',
    code: {
      source: 'stopwatch',
      live: './stopwatch',
    },
  },
  {
    name: 'Todo list',
    description:
      'The Todo List app is your go-to tool for staying organized and managing tasks effectively. Create, prioritize, and customize your to-do lists with ease. Stay organized and accomplish more with the Todo List App.',
    img: './assets/images/todo-list.png',
    code: {
      source: 'todo-list',
      live: './todo-list',
    },
  },
  {
    name: 'Video Player',
    description:
      'The Video Player app offers a lightweight and user-friendly solution for playing animes. With basic playback controls, compatibility with various web formats, and smooth performance, it provides a hassle-free video viewing experience. Enjoy your favorite anime with ease using the Video Player app.',
    img: './assets/images/video-player.png',
    code: {
      source: 'video-player',
      live: './video-player',
    },
  },
];

projects.forEach((project) => {
  const card = document.importNode(cardTemplate, true);

  const img = card.querySelector('img');
  const title = card.querySelector('.card-title');
  const description = card.querySelector('.card-text');
  const links = card.querySelectorAll('a');

  img.src = project.img;
  img.alt = project.name + ' (preview)';

  title.textContent = project.name;
  description.title = project.description;
  description.textContent = project.description;
  links[0].href = gitRepo + project.code.source;

  if (project.code.live.endsWith('.html')) {
    links[1].href = project.code.live;
  } else {
    links[1].href = project.code.live + (isDev ? '/index.html' : '');
  }

  projectCards.appendChild(card);
});
