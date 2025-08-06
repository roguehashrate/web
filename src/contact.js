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
        <ul><li><a href="/pages/about.html">About</a></li></ul>
        <ul><li><a href="/pages/contact.html">Contact</a></li></ul>
      </div>
    </div>
  `;

  // Main contact section
  const main = document.createElement('main');
  const contactDiv = document.createElement('div');
  contactDiv.className = 'main-content-contact';

  const title = document.createElement('p');
  title.textContent = 'Contact Me';
  contactDiv.appendChild(title);

  const links = [
    { href: 'https://mstdn.social/@roguehashrate', label: '🐘 Mastodon' },
    { href: 'https://ditto.pub/@roguehashrate.com', label: '🦤 Nostr' },
    { href: 'mailto:roguehashrate@gmail.com', label: '📬 Send me an Email' }
  ];

  links.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.target = '_blank';
    a.className = 'contact-method';
    a.textContent = link.label;
    contactDiv.appendChild(a);
  });

  main.appendChild(contactDiv);

  // Footer
  const footer = document.createElement('footer');
  const footerText = document.createElement('p');
  footerText.textContent = `Feel free to ask me any questions you may have, I'm generally pretty good at getting back to people.`;
  footer.appendChild(footerText);

  // Append everything
  app.appendChild(navBar);
  app.appendChild(main);
  app.appendChild(footer);
});
