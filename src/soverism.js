document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  // --- NavBar ---
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

  // --- Main Content ---
  const main = document.createElement('main');
  const manifestoDiv = document.createElement('div');
  manifestoDiv.className = 'main-content';

  // Title
  const title = document.createElement('h1');
  title.textContent = 'The Soverist Manifesto';
  manifestoDiv.appendChild(title);

  // Flag image
  const flag = document.createElement('img');
  flag.src = '/assets/soverist-flag.png';
  flag.alt = 'Soverism Flag';
  flag.style.width = '300px';
  flag.style.height = 'auto';
  flag.style.margin = '16px 0';
  manifestoDiv.appendChild(flag);

  // Single green box wrapping all sections
  const manifestoBox = document.createElement('div');
  manifestoBox.className = 'main-list'; 

  // Sections of the manifesto
  const sections = [
    {
      heading: "I. Declaration of Sovereignty",
      paragraphs: [
        "I am sovereign over my life. My mind, my possessions, and my choices answer only to me. Freedom is not granted—it is a natural state, actively maintained through deliberate action, responsibility, and counter-economics. I may follow rules, beliefs, or community practices by choice or because they serve my life, but I reject all obligations imposed without my consent."
      ]
    },
    {
      heading: "II. The Problem",
      paragraphs: [
        "Many systems impose tyranny and limit individual agency. People are forced into actions, obligations, and agreements they did not freely choose, diminishing autonomy and the capacity to live deliberately. Coercion undermines life, liberty, and self-determination."
      ]
    },
    {
      heading: "III. Principles of Soverism",
      paragraphs: [
        "Sovereignty: Every person governs their own life, decisions, and property. No one holds authority over you without your consent.",
        "Freedom: An inherent birthright, yet maintained through responsibility and deliberate action.",
        "Self-Defense: An inherent birthright. Autonomy requires the ability to resist tyranny; protection of oneself and one’s property is essential. Defense is justified; aggression is not.",
        "Ethics: Respect the autonomy of others. Interfere only when provoked. Voluntary association, reciprocity, and consent guide all engagement.",
        "Rules by Choice: Rules are valid only when freely chosen or personally beneficial. Individuals may follow any system, belief, or community practices—including faith-based or cultural traditions—as long as it is by their own free will.",
        "Voluntary Trade: All exchanges should be freely chosen, consensual, and mutually beneficial. Once free from coercive systems, trade naturally becomes voluntary.",
        "Counter-Economics: Use voluntary, non-coercive economic methods to exit or reduce dependence on oppressive systems. If your rules limit my freedom, I choose alternatives that preserve mine and peacefully weaken yours."
      ]
    },
    {
      heading: "IV. Practices of Sovereignty",
      paragraphs: [
        "Live deliberately: make conscious choices in every aspect of life.",
        "Cultivate skills, knowledge, and resources to sustain autonomy.",
        "Engage in voluntary trade and exchange; seek mutually beneficial interactions.",
        "Use counter-economic methods only to escape coercive systems or preserve autonomy.",
        "Participate in communities only by choice, honoring the consent of all involved.",
        "Follow rules only by choice or because they serve your own well-being; reject those enforced upon you without consent.",
        "Defend life, liberty, and property when threatened, without unnecessary aggression."
      ]
    },
    {
      heading: "V. Vision",
      paragraphs: [
        "Soverism fosters individuals who own their lives, act responsibly, and interact voluntarily. Freedom and self-defense are birthrights; sovereignty is preserved through ethics, deliberate action, and mutual respect. Tyranny finds no foothold; sovereignty becomes a natural, lived reality."
      ]
    }
  ];

  // Append all sections to the single manifesto box
  sections.forEach(section => {
    const h2 = document.createElement('h2');
    h2.textContent = section.heading;
    manifestoBox.appendChild(h2);

    section.paragraphs.forEach(text => {
      const p = document.createElement('p');
      p.textContent = text;
      manifestoBox.appendChild(p);
    });
  });

  manifestoDiv.appendChild(manifestoBox);
  main.appendChild(manifestoDiv);

  // --- Append all to app ---
  app.appendChild(navBar);
  app.appendChild(main);
});

