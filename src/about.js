document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  // Create navbar
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

  // Profile picture section
  const pfpDiv = document.createElement('div');
  pfpDiv.className = 'pfp';
  const pfpImg = document.createElement('img');
  pfpImg.src = '../assets/roguehashrate.png';
  pfpImg.alt = 'roguehashrate-pfp';
  pfpDiv.appendChild(pfpImg);

  // Main content
  const main = document.createElement('main');
  const mainContent = document.createElement('div');
  mainContent.className = 'main-content';

  const introPara = document.createElement('p');
  introPara.textContent = "About:";
  mainContent.appendChild(introPara);

  // Interests list
  const mainListDiv = document.createElement('div');
  mainListDiv.className = 'main-list';

  const about = [
    'I’m a fan of Linux and BSD, though admittedly I’ve primarily used Linux.',
    'I am a fan of firearms as well.',
    'Currently, I run Alpine Linux as my distro of choice.',
    'My desktop environment of choice is GNOME.',
    'I use mksh as my shell.',
    'Neovim is my go-to text editor.',
    'I use the Colemak keyboard layout.',
    'When it comes to favorite food, I’m torn between cheeseburgers and pizza.',
    'I’m a fan of root beer — one of the few sodas I actually enjoy.',
    'My biggest programming flaw is hopping between languages too often, which means I’m okay at many but haven’t mastered any.',
  ];
  const ul = document.createElement('ul');
  about.forEach(interest => {
    const li = document.createElement('li');
    li.textContent = interest;
    ul.appendChild(li);
  });
  mainListDiv.appendChild(ul);
  mainContent.appendChild(mainListDiv);

  main.appendChild(mainContent);

  // Append all to app
  app.appendChild(navBar);
  app.appendChild(pfpDiv);
  app.appendChild(main);
});

