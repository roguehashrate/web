document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  // NavBar
  const navBar = document.createElement('div');
  navBar.className = 'navBar';
  navBar.innerHTML = `
    <div class="nav-inner">
      <div class="menu-logo">
        <ul><li><a href="/">RogueHashrate</a></li></ul>
      </div>
      <div class="menu">
        <ul><li><a href="/">Home</a></li></ul>
        <ul><li><a href="pages/project.html">Projects</a></li></ul>
        <ul><li><a href="pages/about.html">About</a></li></ul>
        <ul><li><a href="pages/contact.html">Contact</a></li></ul>
        <ul><li><a hfer="pages/affiliate.html">Affiliate</a></li></ul>
      </div>
    </div>
  `;

  // Main Title
  const main = document.createElement('main');

  const content = document.createElement('div');
  content.className = 'main-content-contact';

  const title = document.createElement('p');
  title.textContent = 'Projects';
  content.appendChild(title);
  main.appendChild(content);

  // License Link (before projects)
  const licenseWrapper = document.createElement('div');
  licenseWrapper.className = 'license-wrapper';

  const licenseLink = document.createElement('a');
  licenseLink.href = 'https://rpl.roguehashrate.com';
  licenseLink.textContent = 'Rogue Pact License (RPL)';
  licenseLink.className = 'license-link'
  licenseWrapper.appendChild(licenseLink);
  content.appendChild(licenseLink);
  main.appendChild(licenseWrapper);

  // Projects
  const cardContainer = document.createElement('div');
  cardContainer.className = 'card-container';

  const projects = [
    {
      name: 'Pkgz',
      img: '../assets/pkgz-logo.png',
      link: 'https://github.com/roguehashrate/pkgz',
      desc: 'Fast, extensible CLI package manager in Crystal 💎. Unified install across Apt, Flatpak, Pacstall, Pacman, Paru and Dnf.'
    },
    {
      name: 'Rogue Alpine Setup',
      img: '../assets/project6.png',
      link: 'https://github.com/roguehashrate/rogue-alpine-setup',
      desc: 'A post-install script that transforms a fresh Alpine Linux system into a modern GNOME desktop — complete with audio, Bluetooth, Flatpak, and GUI-based network management.'
    },
    {
      name: 'PkgUp',
      img: '../assets/project4.png',
      link: 'https://github.com/roguehashrate/pkgup',
      desc: 'A simple Crystal CLI tool to update system packages and Flatpak apps on Debian-based GNU/Linux systems.'
    },
    {
      name: 'Zcash to Fiat',
      img: '../assets/project1.png',
      link: 'https://github.com/roguehashrate/zcash-to-fiat',
      desc: 'A simple little CLI program that shows the current ZEC price in fiat currency and allows for basic conversions ZEC↔Fiat.'
    },
    {
      name: 'Pay me in M or Z',
      img: '../assets/project2.png',
      link: 'https://roguehashrate.github.io/paymeinmorz/',
      desc: 'A simple payment URI/QR code generator for Monero (XMR) and Zcash (ZEC).'
    },
    {
      name: 'Zecret Explorer',
      img: '../assets/project3.png',
      link: 'https://github.com/roguehashrate/zecret-explorer',
      desc: 'A simple command-line Zcash blockchain explorer written in Python. Fetch detailed information about any Zcash block by height or hash.'
    }
  ];

  projects.forEach(({ name, img, link, desc }) => {
    const card = document.createElement('a');
    card.className = 'card';
    card.href = link;
    card.target = '_blank';

    const title = document.createElement('h3');
    title.textContent = name;

    const image = document.createElement('img');
    image.src = img;
    image.alt = `${name} project image`;

    const description = document.createElement('p');
    description.textContent = desc;

    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(description);
    cardContainer.appendChild(card);
  });

  main.appendChild(cardContainer);

  // Assemble full page
  app.appendChild(navBar);
  app.appendChild(main);
});

