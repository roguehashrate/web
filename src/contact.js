document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

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
        <ul><li><a href="/pages/soverism.html">Manifesto</a></li></ul>
      </div>
    </div>
  `;

  const main = document.createElement('main');
  const contactDiv = document.createElement('div');
  contactDiv.className = 'main-content-contact';

  const title = document.createElement('p');
  title.textContent = 'Contact Me';
  contactDiv.appendChild(title);

  const links = [
    { href: 'https://ditto.pub/@roguehashrate.com', label: '🦤 Nostr' },
    { href: '@roguehashrate:matrix.org', label: '💬 Matrix', copy: true },
    { href: 'mailto:roguehashrate@duck.com', label: '📬 Email' }
  ];

  links.forEach(link => {
    if (link.copy) {
      const btn = document.createElement('button');
      btn.className = 'contact-method';
      btn.textContent = link.label;
      btn.addEventListener('click', () => {
        navigator.clipboard.writeText(link.href)
          .then(() => alert(`Copied: ${link.href}`))
          .catch(err => console.error('Copy failed', err));
      });
      contactDiv.appendChild(btn);
    } else {
      const a = document.createElement('a');
      a.href = link.href;
      a.target = '_blank';
      a.className = 'contact-method';
      a.textContent = link.label;
      contactDiv.appendChild(a);
    }
  });

  main.appendChild(contactDiv);

  const footer = document.createElement('footer');
  const footerText = document.createElement('p');
  footerText.textContent = `Feel free to ask me any questions you may have, I'm generally pretty good at getting back to people.`;
  footer.appendChild(footerText);

  app.appendChild(navBar);
  app.appendChild(main);
  app.appendChild(footer);
});

