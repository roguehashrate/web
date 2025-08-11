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
        <ul><li><a href="pages/project.html">Projects</a></li></ul>
        <ul><li><a href="pages/about.html">About</a></li></ul>
        <ul><li><a href="pages/contact.html">Contact</a></li></ul>
        <ul><li><a hfer="pages/affiliate.html">Affiliate</a></li></ul>
      </div>
    </div>
  `;

  // Profile picture section
  const pfpDiv = document.createElement('div');
  pfpDiv.className = 'pfp';
  const pfpImg = document.createElement('img');
  pfpImg.src = 'assets/roguehashrate.png';
  pfpImg.alt = 'roguehashrate-pfp';
  pfpDiv.appendChild(pfpImg);

  // Main content
  const main = document.createElement('main');
  const mainContent = document.createElement('div');
  mainContent.className = 'main-content';

  const introPara = document.createElement('p');
  introPara.textContent = "I'm currently interested in:";
  mainContent.appendChild(introPara);

  // Interests list
  const mainListDiv = document.createElement('div');
  mainListDiv.className = 'main-list';

  const interests = ['🐧 All things Linux', '⚙ Building CLI tools', '🎨 Web Development'];
  const ul = document.createElement('ul');
  interests.forEach(interest => {
    const li = document.createElement('li');
    li.textContent = interest;
    ul.appendChild(li);
  });
  mainListDiv.appendChild(ul);
  mainContent.appendChild(mainListDiv);

  // Donation section
  const donateDiv = document.createElement('div');
  donateDiv.className = 'donate';
  const donateText = document.createElement('p');
  donateText.textContent = 'Donations are greatly appreciated.';
  donateDiv.appendChild(donateText);

  const donateQRDiv = document.createElement('div');
  donateQRDiv.className = 'donate-qr';

  const qrData = [
    { img: 'assets/xmr-qr.png', alt: 'xmr-qr', code: '8ASopk7RBMWbEezhFXzWWXAM5EGtJLuCXXgq6JGxxwFz2py9pxPsZFEXXwJhGZ69djQynrybzEsiKJwjc2mk3kJMCvXQztG' },
    { img: 'assets/zec-qr.png', alt: 'zec-qr', code: 'u1xal272aw58nw6g485npgfz0hkq3c9edhfzu3zs8prsjvnaqc2lz62e6wujwajz8v8g0jsqdzksvczzplm4mu6encl8868cagu40a6pahllxg40zqypzj9d4avvacqqgtv6z72y06nksd2e5xwpp97pvgxvfhur6hyzqrq6z43sfnd4u5' },
    { img: 'assets/btc-qr.png', alt: 'btc-qr', code: 'bc1qevwqcm0y8yp9876flasm625tqf3g4dagxmd2k6'},
    { img: 'assets/lbtc-qr.png', alt: 'lbtc-qr', code: 'roguehashrate@strike.me' },
    { img: 'assets/dash-qr.png', alt: 'dash-qr', code: 'XvZyhMJ9Rh77XwnsuRgtNwqs5BbcVGxCRC' },
    { img: 'assets/bch-qr.png', alt: 'bch-qr', code: 'bitcoincash:qz7kmyt4q8wwtggnwcj64n6m56wj5rq06uqx9yqwz4' }


  ];

  qrData.forEach(({ img, alt, code }) => {
    const qrBlock = document.createElement('div');
    qrBlock.className = 'qr-block';

    const qrImg = document.createElement('img');
    qrImg.src = img;
    qrImg.alt = alt;

    const qrCode = document.createElement('code');
    qrCode.textContent = code;

    qrBlock.appendChild(qrImg);
    qrBlock.appendChild(qrCode);
    donateQRDiv.appendChild(qrBlock);
  });

  donateDiv.appendChild(donateQRDiv);
  mainContent.appendChild(donateDiv);

  main.appendChild(mainContent);

  // Append all to app
  app.appendChild(navBar);
  app.appendChild(pfpDiv);
  app.appendChild(main);
});

