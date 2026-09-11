const PUBKEY = 'bc28aad5b167f31dd37c66d8c95d400c6411d83275ed12c504f60965d1f9eec6';

// npub copy button
const npubCopy = document.getElementById('npub-copy');
const npubCopied = document.querySelector('.npub-copied');
npubCopy.addEventListener('click', async () => {
  await navigator.clipboard.writeText(document.querySelector('.npub-full').textContent);
  npubCopied.classList.add('show');
  setTimeout(() => npubCopied.classList.remove('show'), 1500);
});

// tip copy buttons
document.querySelectorAll('.tip').forEach((btn) => {
  btn.addEventListener('click', async () => {
    await navigator.clipboard.writeText(btn.dataset.copy);
    const copied = btn.parentElement.querySelector('.tip-copied');
    copied.classList.add('show');
    setTimeout(() => copied.classList.remove('show'), 1500);
  });
});

// sync profile picture, name, about and theme from Nostr relay
(function() {
  const pfp = document.querySelector('.pfp');
  const nameEl = document.querySelector('h1');
  const aboutEl = document.querySelector('.about');
  let gotProfile = false, gotTheme = false;

  function done() {
    if (gotProfile && gotTheme) ws.close();
  }

  const ws = new WebSocket('wss://relay.ditto.pub/');
  ws.onopen = () => {
    ws.send(JSON.stringify(['REQ', 'profile', { kinds: [0], authors: [PUBKEY], limit: 1 }]));
    ws.send(JSON.stringify(['REQ', 'theme', { kinds: [16767], authors: [PUBKEY], limit: 1 }]));
  };

  ws.onmessage = (e) => {
    const msg = JSON.parse(e.data);
    if (msg[0] !== 'EVENT') return;
    const ev = msg[2];

    if (ev.kind === 0) {
      try {
        const meta = JSON.parse(ev.content);
        if (meta.picture) pfp.src = meta.picture;
        if (meta.name) {
          nameEl.textContent = meta.name;
          document.title = meta.name;
        }
        if (meta.about) {
          aboutEl.textContent = meta.about;
        } else {
          aboutEl.style.display = 'none';
        }
      } catch {}
      gotProfile = true;
      done();
    }

    if (ev.kind === 16767) {
      const colors = {};
      for (const tag of ev.tags) {
        if (tag[0] === 'c' && tag[2]) colors[tag[2]] = tag[1];
      }
      const root = document.documentElement.style;
      if (colors.background) root.setProperty('--bg', colors.background);
      if (colors.text) root.setProperty('--text', colors.text);
      if (colors.primary) root.setProperty('--primary', colors.primary);
      gotTheme = true;
      done();
    }
  };

  ws.onerror = () => ws.close();
  setTimeout(() => { if (ws.readyState < 2) ws.close(); }, 5000);
})();

console.log('%c⚡ roguehashrate.com', 'color: #A855F7; font-weight: 700; font-size: 14px;');
console.log('%cyou found the dev console. now drop a note or a zap.', 'color: #666');