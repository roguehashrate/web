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
  manifestoDiv.appendChild(title);

  // Flag image
  const flag = document.createElement('img');
  flag.src = '/assets/soverist-flag.png';
  flag.alt = 'Soverism Flag';
  flag.style.width = '300px';
  flag.style.height = 'auto';
  flag.style.margin = '16px 0';
  manifestoDiv.appendChild(flag);

  // Language Toggle
  const langToggle = document.createElement('div');
  langToggle.style.margin = '16px 0';
  const enBtn = document.createElement('button');
  enBtn.textContent = 'English';
  const ruBtn = document.createElement('button');
  ruBtn.textContent = 'Русский';
  [enBtn, ruBtn].forEach(btn => {
    btn.style.marginRight = '8px';
    btn.style.padding = '6px 12px';
    btn.style.cursor = 'pointer';
  });
  langToggle.appendChild(enBtn);
  langToggle.appendChild(ruBtn);
  manifestoDiv.appendChild(langToggle);

  // Manifesto Box
  const manifestoBox = document.createElement('div');
  manifestoBox.className = 'main-list';
  manifestoDiv.appendChild(manifestoBox);

  // --- Content Data ---
  const manifestos = {
    en: {
      title: "The Soverist Manifesto",
      sections: [
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
      ]
    },
    ru: {
      title: "Соверист Манифест",
      sections: [
        {
          heading: "I. Декларация суверенитета",
          paragraphs: [
            "Я суверенен в своей жизни. Мой разум, моё имущество и мой выбор подчиняются только мне. Свобода не даруется — это естественное состояние, активно поддерживаемое осознанными действиями, ответственностью и контрэкономикой. Я могу следовать правилам, убеждениям или общественным практикам по собственному выбору или потому, что они служат моей жизни, но я отвергаю любые обязательства, наложенные без моего согласия."
          ]
        },
        {
          heading: "II. Проблема",
          paragraphs: [
            "Многие системы навязывают тиранию и ограничивают индивидуальную свободу действий. Людей принуждают к действиям, обязательствам и соглашениям, которые они не выбирали свободно, что ограничивает автономию и способность жить осознанно. Принуждение подрывает жизнь, свободу и самоопределение."
          ]
        },
        {
          heading: "III. Принципы суверенизма",
          paragraphs: [
            "Суверенитет: Каждый человек сам управляет своей жизнью, своими решениями и имуществом. Никто не имеет власти над вами без вашего согласия.",
            "Свобода: неотъемлемое право от рождения, которое, однако, поддерживается ответственностью и осознанными действиями.",
            "Самооборона: неотъемлемое право от рождения. Автономия требует способности противостоять тирании; защита себя и своей собственности необходима. Оборона оправдана; агрессия — нет.",
            "Этика: Уважайте автономию других. Вмешивайтесь только в случае провокации. Добровольное объединение, взаимность и согласие определяют все взаимодействия.",
            "Правила по выбору: Правила действительны только тогда, когда они выбраны свободно или лично выгодны. Люди могут следовать любой системе, убеждениям или общественным практикам, включая религиозные или культурные традиции, если это происходит по их собственной свободной воле.",
            "Добровольная торговля: Все обмены должны быть свободно выбранными, консенсуальными и взаимовыгодными. Освободившись от принудительных систем, торговля естественным образом становится добровольной.",
            "Контрэкономика: Используйте добровольные, ненасильственные экономические методы для выхода или снижения зависимости от репрессивных систем. Если ваши правила ограничивают мою свободу, я выбираю альтернативы, которые сохраняют мою и мирно ослабляют вашу."
          ]
        },
        {
          heading: "IV. Практики суверенитета",
          paragraphs: [
            "Живите осознанно: делайте осознанный выбор во всех аспектах жизни.",
            "Развивайте навыки, знания и ресурсы для поддержания автономии.",
            "Участвуйте в добровольной торговле и обмене; стремитесь к взаимовыгодному взаимодействию.",
            "Используйте контрэкономические методы только для того, чтобы избежать принудительных систем или сохранить автономию.",
            "Участвуйте в жизни сообществ только по собственному выбору, уважая согласие всех участников.",
            "Соблюдайте правила только по собственному выбору или потому, что они служат вашему благополучию; отвергайте те, которые навязываются вам без согласия.",
            "Защищайте жизнь, свободу и собственность в случае угрозы, избегая ненужной агрессии."
          ]
        },
        {
          heading: "V. Видение",
          paragraphs: [
            "Соверизм способствует развитию людей, которые сами распоряжаются своей жизнью, действуют ответственно и взаимодействуют добровольно. Свобода и самооборона – неотъемлемые права; суверенитет сохраняется благодаря этике, осознанным действиям и взаимному уважению. Тирания не находит опоры; суверенитет становится естественной, жизненной реальностью."
          ]
        }
      ]
    }
  };

  // --- Rendering function ---
  function renderManifesto(lang) {
    // Update title
    title.textContent = manifestos[lang].title;

    // Clear manifestoBox
    manifestoBox.innerHTML = '';

    // Render sections
    manifestos[lang].sections.forEach(section => {
      const h2 = document.createElement('h2');
      h2.textContent = section.heading;
      manifestoBox.appendChild(h2);

      section.paragraphs.forEach(text => {
        const p = document.createElement('p');
        p.textContent = text;
        manifestoBox.appendChild(p);
      });
    });
  }

  // Default language = English
  renderManifesto('en');

  // Event listeners
  enBtn.addEventListener('click', () => renderManifesto('en'));
  ruBtn.addEventListener('click', () => renderManifesto('ru'));

  // --- Append all to app ---
  main.appendChild(manifestoDiv);
  app.appendChild(navBar);
  app.appendChild(main);
});

