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
        <ul><li><a href="/pages/project.html">Projects</a></li></ul>
        <ul><li><a href="/pages/contact.html">Contact</a></li></ul>
        <ul><li><a href="/pages/affiliate.html">Affiliate</a></li></ul>
      </div>
    </div>  `;

  // Main Title
  const main = document.createElement('main');

  const content = document.createElement('div');
  content.className = 'main-content-contact';

  const title = document.createElement('p');
  title.textContent = 'Affiliate Links';
  content.appendChild(title);
  main.appendChild(content);

  // Projects
  const cardContainer = document.createElement('div');
  cardContainer.className = 'card-container';

  const links = [
    {
      name: 'Apple 2025 MacBook Air 13-inch',
      link: 'https://amzn.to/3Hqwcvc',
    },
    {
      name: 'Lenovo Gen 12 Thinkpad X1 Carbon',
      link: 'https://amzn.to/47nHBGE',

    },
    {
      name: 'Redragon Mechanical Gaming Keyboard',
      link: 'https://amzn.to/46LJBs7',

    },
    {
      name: 'RK Royal Kludge R65 Wired Gaming Keyboard with knob',
      link: 'https://amzn.to/46QjvUN',
    },
    {
      name: 'Google Pixel 9 - Unlocked',
      link: 'https://amzn.to/3JtltRa',
    },
    {
      name: 'Google Pixel 9a - Unlocked',
      link: 'https://amzn.to/4m8s3uS',
    },


  ];

  links.forEach(({ name, link }) => {
    const card = document.createElement('a');
    card.className = 'card';
    card.href = link;
    card.target = '_blank';

    const title = document.createElement('h3');
    title.textContent = name;

    card.appendChild(title);
    cardContainer.appendChild(card);
  });

  main.appendChild(cardContainer);

  // Assemble full page
  app.appendChild(navBar);
  app.appendChild(main);
});

