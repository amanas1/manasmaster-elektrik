import fs from 'fs';
import path from 'path';

const seoData = JSON.parse(fs.readFileSync('./src/data/seo-data.json', 'utf-8'));

const DIST_DIR = path.resolve('./dist');
const BASE_URL = 'https://manasmaster.kz';
const currentDate = new Date().toISOString().split('T')[0];
const PHONE1 = '+7 (705) 553-53-32';
const PHONE2 = '+7 (707) 479-10-20';
const WA_LINK = 'https://wa.me/77055535332';

if (!fs.existsSync(DIST_DIR)) {
  console.log("dist directory doesn't exist. Please run npm run build first.");
  process.exit(1);
}

const template = fs.readFileSync(path.join(DIST_DIR, 'index.html'), 'utf-8');

const ensureDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
};

let generatedCount = 0;

// ─── Helper: inject meta into template ───────────────────────────────────────
const buildHead = (template, { title, description, keywords, canonical, ogImage }) => {
  const img = ogImage || `${BASE_URL}/images/hero_electrician.png`;
  return template
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content=".*?"\s*\/>/, `<meta name="description" content="${description}" />`)
    .replace(/<meta name="keywords" content=".*?"\s*\/>/, `<meta name="keywords" content="${keywords}" />`)
    .replace(/<link rel="canonical" href=".*?"\s*\/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:title" content=".*?"\s*\/>/, `<meta property="og:title" content="${title}" />`)
    .replace(/<meta property="og:description" content=".*?"\s*\/>/, `<meta property="og:description" content="${description}" />`)
    .replace(/<meta property="og:url" content=".*?"\s*\/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta name="twitter:title" content=".*?"\s*\/>/, `<meta name="twitter:title" content="${title}" />`)
    .replace(/<meta name="twitter:description" content=".*?"\s*\/>/, `<meta name="twitter:description" content="${description}" />`);
};

// ─── Helper: inject schema + body content ────────────────────────────────────
const injectContent = (html, { schema, bodyHtml }) => {
  const schemaTag = `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
  html = html.replace('</head>', `  ${schemaTag}\n</head>`);
  // Replace the empty root div with pre-rendered content
  html = html.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);
  return html;
};

// ─── Generate NAP block ───────────────────────────────────────────────────────
const napBlock = () => `
  <div style="margin-top:32px;padding:20px;background:#f8f8f8;border-radius:8px;font-family:Arial,sans-serif">
    <strong>Мастер Манас — Электрик Алматы</strong><br>
    📞 <a href="tel:+77055535332" style="color:#DC2626">${PHONE1}</a> &nbsp;
    📞 <a href="tel:+77074791020" style="color:#DC2626">${PHONE2}</a><br>
    <a href="${WA_LINK}" style="color:#25D366">💬 WhatsApp</a> · Работаем 24/7
  </div>`;

// ─── Generate FAQ HTML ────────────────────────────────────────────────────────
const faqHtml = (items) => `
  <section style="margin-top:40px">
    <h2 style="font-size:22px;font-weight:700;margin-bottom:16px">Часто задаваемые вопросы</h2>
    ${items.map(item => `
    <div style="margin-bottom:20px;padding:16px;border:1px solid #e5e7eb;border-radius:8px">
      <h3 style="font-size:16px;font-weight:700;margin-bottom:8px">${item.q}</h3>
      <p style="color:#4b5563;line-height:1.6">${item.a}</p>
    </div>`).join('')}
  </section>`;

// ─── Build body for service+district page ────────────────────────────────────
const buildServiceDistrictBody = (service, district) => {
  const isAlmaty = district.id === 'almaty';
  const locationText = isAlmaty ? 'Алматы' : `${district.nameGenitive} Алматы`;
  const districtName = isAlmaty ? 'Алматы' : district.name;

  const benefits = [
    `Выезд мастера-электрика в ${districtName} за 30–45 минут`,
    'Работаем круглосуточно, включая выходные и праздники',
    'Стоимость работ согласуется до начала — никаких скрытых платежей',
    'Гарантия на все виды выполненных работ',
    'Чистота после работы — убираем за собой',
    'Только сертифицированные материалы и профессиональный инструмент',
  ];

  const faqs = [
    {
      q: `Сколько стоит «${service.title}» в ${districtName}?`,
      a: `Стоимость услуги «${service.title}» в ${districtName} — ${service.price}. Точная цена рассчитывается на месте после осмотра объекта, согласуется до начала работ. Никаких скрытых доплат и неожиданных счетов.`,
    },
    {
      q: `Как быстро приедет электрик в ${districtName}?`,
      a: `Мастер приедет в ${districtName} в течение 30–45 минут после вашего звонка. Работаем круглосуточно, 7 дней в неделю, без выходных — в том числе в праздничные дни.`,
    },
    {
      q: 'Есть ли гарантия на работы?',
      a: 'Да, на все выполненные работы предоставляется официальная гарантия. Срок гарантии зависит от вида работы и используемых материалов. Все условия фиксируются до начала работ.',
    },
    {
      q: 'Нужно ли покупать материалы заранее?',
      a: 'Нет. Мастер приедет со своим профессиональным инструментом и необходимыми расходными материалами. Если для вашей задачи требуются специфические комплектующие — уточним по телефону заранее.',
    },
    {
      q: 'Как вызвать электрика?',
      a: `Позвоните по номеру ${PHONE1} или ${PHONE2}, либо напишите в WhatsApp. Мастер-электрик выедет в ${districtName} в течение 30–45 минут.`,
    },
  ];

  // Other districts for cross-linking
  const otherDistricts = seoData.districts
    .filter(d => d.id !== district.id)
    .slice(0, 6)
    .map(d => `<a href="${BASE_URL}/uslugi/${service.id}/${d.id}" style="color:#DC2626;text-decoration:none;padding:6px 12px;border:1px solid #DC2626;border-radius:20px;font-size:13px">${d.name}</a>`)
    .join(' ');

  // Other services for cross-linking
  const otherServices = seoData.services
    .filter(s => s.id !== service.id)
    .slice(0, 5)
    .map(s => `<a href="${BASE_URL}/uslugi/${s.id}/${district.id}" style="color:#1f2937;text-decoration:none;display:block;padding:8px 0;border-bottom:1px solid #f3f4f6">${s.title} — <span style="color:#DC2626">${s.price}</span></a>`)
    .join('');

  return `
<div style="font-family:'Inter',Arial,sans-serif;color:#1f2937;max-width:1000px;margin:0 auto;padding:0 20px">

  <!-- Breadcrumb -->
  <nav style="padding:16px 0;font-size:13px;color:#6b7280">
    <a href="${BASE_URL}/" style="color:#DC2626">Главная</a> /
    <a href="${BASE_URL}/services" style="color:#DC2626">Услуги</a> /
    <a href="${BASE_URL}/${service.id}-almaty" style="color:#DC2626">${service.title}</a>
    ${!isAlmaty ? `/ ${district.name}` : ''}
  </nav>

  <!-- Hero -->
  <header style="background:linear-gradient(135deg,#DC2626,#B91C1C);color:#fff;padding:40px;border-radius:12px;margin-bottom:32px">
    <h1 style="font-size:32px;font-weight:800;margin:0 0 12px 0;line-height:1.2">
      ${service.title} в ${locationText}
    </h1>
    <p style="font-size:16px;opacity:.9;margin:0 0 20px 0">${service.price} · Выезд за 30 мин · Работаем 24/7</p>
    <div style="display:flex;gap:12px;flex-wrap:wrap">
      <a href="tel:+77055535332" style="background:#4ADE80;color:#111;padding:12px 24px;border-radius:8px;font-weight:700;text-decoration:none">📞 ${PHONE1}</a>
      <a href="${WA_LINK}" style="background:#fff;color:#DC2626;padding:12px 24px;border-radius:8px;font-weight:700;text-decoration:none">💬 WhatsApp</a>
    </div>
  </header>

  <!-- Main content -->
  <div style="display:grid;grid-template-columns:2fr 1fr;gap:32px">

    <!-- Left -->
    <div>
      <section style="background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:32px;margin-bottom:24px">
        <h2 style="font-size:22px;font-weight:700;margin-bottom:16px">О услуге: ${service.title} в ${locationText}</h2>
        <p style="color:#4b5563;line-height:1.7;margin-bottom:20px">${service.longDescription || service.description}</p>

        <h3 style="font-size:18px;font-weight:700;margin-bottom:12px">Почему выбирают нас в ${districtName}:</h3>
        <ul style="list-style:none;padding:0;margin:0">
          ${benefits.map(b => `<li style="padding:8px 0;border-bottom:1px solid #f3f4f6;color:#4b5563">
            <span style="color:#22c55e;font-weight:700;margin-right:8px">✓</span>${b}
          </li>`).join('')}
        </ul>
      </section>

      <section style="background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:32px;margin-bottom:24px">
        <h2 style="font-size:20px;font-weight:700;margin-bottom:16px">Что входит в услугу «${service.title}»</h2>
        <p style="color:#4b5563;line-height:1.7">
          Выполняем ${service.title.toLowerCase()} в ${locationText} под ключ. Мастер самостоятельно оценивает
          объём работ, согласует стоимость и выполняет все необходимые операции профессионально и аккуратно.
          Используем только качественные материалы и проверенные технологии. После завершения работ —
          проверяем результат совместно с вами.
        </p>
        <p style="color:#4b5563;line-height:1.7;margin-top:12px">
          Стоимость услуги: <strong style="color:#DC2626">${service.price}</strong>.
          Среднее время выполнения: <strong>${service.time}</strong>.
          Выезд по ${locationText} — 24/7.
        </p>
      </section>

      ${faqHtml(faqs)}

      <!-- Cross-links: other services -->
      <section style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;padding:32px;margin-bottom:24px;margin-top:24px">
        <h2 style="font-size:18px;font-weight:700;margin-bottom:16px">Другие услуги электрика в ${locationText}</h2>
        ${otherServices}
      </section>

      <!-- Cross-links: other districts -->
      <section style="background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:24px;margin-bottom:24px">
        <h2 style="font-size:18px;font-weight:700;margin-bottom:16px">${service.title} в других районах Алматы</h2>
        <div style="display:flex;flex-wrap:wrap;gap:8px">${otherDistricts}</div>
      </section>
    </div>

    <!-- Right sidebar -->
    <div>
      <div style="background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:24px;position:sticky;top:24px">
        <h3 style="font-size:16px;font-weight:700;text-align:center;margin-bottom:8px">Стоимость услуги</h3>
        <p style="font-size:32px;font-weight:900;color:#DC2626;text-align:center;margin:0 0 20px 0">${service.price}</p>

        <div style="margin-bottom:16px;font-size:14px;color:#4b5563">
          <div style="padding:8px 0;border-bottom:1px solid #f3f4f6">⏱ Время: ${service.time}</div>
          <div style="padding:8px 0;border-bottom:1px solid #f3f4f6">🛡 Гарантия на работу</div>
          <div style="padding:8px 0;border-bottom:1px solid #f3f4f6">📍 Выезд по ${locationText}</div>
          <div style="padding:8px 0">🕐 Работаем 24/7</div>
        </div>

        <a href="tel:+77055535332" style="display:block;background:#4ADE80;color:#111;padding:14px;border-radius:8px;font-weight:700;text-align:center;text-decoration:none;margin-bottom:8px">${PHONE1}</a>
        <a href="tel:+77074791020" style="display:block;background:#4ADE80;color:#111;padding:14px;border-radius:8px;font-weight:700;text-align:center;text-decoration:none;margin-bottom:8px">${PHONE2}</a>
        <a href="${WA_LINK}" style="display:block;background:#DC2626;color:#fff;padding:12px;border-radius:8px;font-weight:700;text-align:center;text-decoration:none">💬 WhatsApp</a>
        <p style="font-size:11px;color:#9ca3af;text-align:center;margin-top:8px">Звонок или WhatsApp · 24/7</p>
      </div>
    </div>
  </div>

  ${napBlock()}
</div>`;
};

// ─── Generate Service+District pages (72 pages) ──────────────────────────────
seoData.services.forEach(service => {
  seoData.districts.forEach(district => {
    const locationText = `${district.nameGenitive} Алматы`;
    const title = `${service.title} в ${locationText} — ${service.price}, 24/7 | Мастер Манас`;
    const description = `${service.title} в ${locationText} — ${service.price}. Мастер-электрик приедет за 30 минут, работаем 24/7. Гарантия на все работы. ☎ ${PHONE1}.`;
    const keywords = `${service.title.toLowerCase()} ${district.name.toLowerCase()}, электрик ${district.name.toLowerCase()}, электрик алматы, ${service.title.toLowerCase()} алматы`;
    const canonical = `${BASE_URL}/uslugi/${service.id}/${district.id}`;
    const ogImage = `${BASE_URL}${service.image}`;

    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Главная', 'item': BASE_URL },
            { '@type': 'ListItem', 'position': 2, 'name': 'Услуги', 'item': `${BASE_URL}/services` },
            { '@type': 'ListItem', 'position': 3, 'name': service.title, 'item': `${BASE_URL}/${service.id}-almaty` },
            { '@type': 'ListItem', 'position': 4, 'name': district.name, 'item': canonical },
          ],
        },
        {
          '@type': 'Service',
          'name': `${service.title} в ${locationText}`,
          'description': service.longDescription || service.description,
          'url': canonical,
          'provider': {
            '@type': 'Electrician',
            'name': 'Мастер Манас',
            'url': BASE_URL,
            'telephone': ['+77055535332', '+77074791020'],
            'openingHoursSpecification': {
              '@type': 'OpeningHoursSpecification',
              'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              'opens': '00:00', 'closes': '23:59',
            },
          },
          'areaServed': { '@type': 'AdministrativeArea', 'name': `${district.name}, Алматы` },
          'offers': {
            '@type': 'Offer',
            'price': service.price.replace(/[^0-9]/g, ''),
            'priceCurrency': 'KZT',
            'availability': 'https://schema.org/InStock',
          },
        },
        {
          '@type': 'FAQPage',
          'mainEntity': [
            {
              '@type': 'Question',
              'name': `Сколько стоит «${service.title}» в ${district.name}?`,
              'acceptedAnswer': { '@type': 'Answer', 'text': `Стоимость услуги «${service.title}» в ${district.name} — ${service.price}. Точная цена рассчитывается после осмотра и согласуется до начала работ.` },
            },
            {
              '@type': 'Question',
              'name': `Как быстро приедет электрик в ${district.name}?`,
              'acceptedAnswer': { '@type': 'Answer', 'text': `Мастер приедет в ${district.name} в течение 30–45 минут. Работаем 24/7 без выходных.` },
            },
            {
              '@type': 'Question',
              'name': 'Есть ли гарантия на работы?',
              'acceptedAnswer': { '@type': 'Answer', 'text': 'Да, на все выполненные работы предоставляется официальная гарантия. Условия фиксируются до начала работ.' },
            },
          ],
        },
      ],
    };

    let html = buildHead(template, { title, description, keywords, canonical, ogImage });
    html = injectContent(html, {
      schema,
      bodyHtml: buildServiceDistrictBody(service, district),
    });

    const routeDir = path.join(DIST_DIR, 'uslugi', service.id, district.id);
    ensureDir(routeDir);
    fs.writeFileSync(path.join(routeDir, 'index.html'), html);
    generatedCount++;
  });
});

// ─── Generate District landing pages (/elektrik-{districtId}-rayon) ──────────
seoData.districts.forEach(district => {
  const title = `Электрик в ${district.nameGenitive} Алматы | Вызов за 30 мин, 24/7 | Мастер Манас`;
  const description = `Электрик в ${district.nameGenitive} Алматы — выезд за 30 минут, работаем 24/7. Ремонт проводки, установка люстр, розеток, сборка щита. от 3 500 ₸. ☎ ${PHONE1}.`;
  const keywords = `электрик ${district.name.toLowerCase()}, электрик ${district.name.toLowerCase()} алматы, вызов электрика, услуги электрика ${district.name.toLowerCase()}`;
  const canonical = `${BASE_URL}/elektrik-${district.id}-rayon`;

  const servicesLinks = seoData.services
    .map(s => `<li style="padding:10px 0;border-bottom:1px solid #f3f4f6">
      <a href="${BASE_URL}/uslugi/${s.id}/${district.id}" style="color:#DC2626;text-decoration:none;font-weight:600">${s.title}</a>
      <span style="color:#6b7280;font-size:13px"> — ${s.price}</span>
    </li>`)
    .join('');

  const bodyHtml = `
<div style="font-family:'Inter',Arial,sans-serif;color:#1f2937;max-width:1000px;margin:0 auto;padding:0 20px">
  <nav style="padding:16px 0;font-size:13px;color:#6b7280">
    <a href="${BASE_URL}/" style="color:#DC2626">Главная</a> / Электрик в ${district.name}
  </nav>

  <header style="background:linear-gradient(135deg,#DC2626,#B91C1C);color:#fff;padding:40px;border-radius:12px;margin-bottom:32px">
    <h1 style="font-size:32px;font-weight:800;margin:0 0 12px 0">Электрик в ${district.nameGenitive} Алматы</h1>
    <p style="font-size:16px;opacity:.9;margin:0 0 20px 0">Выезд за 30 мин · от 3 500 ₸ · Работаем 24/7</p>
    <div style="display:flex;gap:12px;flex-wrap:wrap">
      <a href="tel:+77055535332" style="background:#4ADE80;color:#111;padding:12px 24px;border-radius:8px;font-weight:700;text-decoration:none">📞 ${PHONE1}</a>
      <a href="${WA_LINK}" style="background:#fff;color:#DC2626;padding:12px 24px;border-radius:8px;font-weight:700;text-decoration:none">💬 WhatsApp</a>
    </div>
  </header>

  <section style="background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:32px;margin-bottom:24px">
    <h2 style="font-size:22px;font-weight:700;margin-bottom:16px">Услуги электрика в ${district.nameGenitive} районе Алматы</h2>
    <p style="color:#4b5563;line-height:1.7;margin-bottom:20px">
      Мастер-электрик Манас выполняет все виды электромонтажных работ в ${district.nameGenitive} районе Алматы.
      Выезд мастера по любому адресу района в течение 30–45 минут. Работаем круглосуточно, без выходных.
      Честная стоимость — всегда согласуется до начала работ.
    </p>
    <ul style="list-style:none;padding:0;margin:0">${servicesLinks}</ul>
  </section>

  <section style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;padding:32px;margin-bottom:24px">
    <h2 style="font-size:20px;font-weight:700;margin-bottom:16px">Почему выбирают нас в ${district.nameGenitive} районе</h2>
    <ul style="list-style:none;padding:0;margin:0">
      ${['Выезд за 30–45 минут по любому адресу района', 'Работаем 24/7 — ночь, выходные, праздники', 'Гарантия на все виды работ', 'Честные цены — стоимость согласуется до начала', 'Убираем за собой после завершения работ', 'Опытный мастер с профессиональным инструментом'].map(b =>
        `<li style="padding:8px 0;border-bottom:1px solid #e5e7eb;color:#4b5563"><span style="color:#22c55e;font-weight:700;margin-right:8px">✓</span>${b}</li>`
      ).join('')}
    </ul>
  </section>

  ${napBlock()}
</div>`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Electrician',
        'name': 'Мастер Манас — Электрик Алматы',
        'url': canonical,
        'telephone': ['+77055535332', '+77074791020'],
        'areaServed': { '@type': 'AdministrativeArea', 'name': `${district.name}, Алматы` },
        'openingHoursSpecification': {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          'opens': '00:00', 'closes': '23:59',
        },
        'priceRange': '₸₸',
      },
    ],
  };

  let html = buildHead(template, { title, description, keywords, canonical });
  html = injectContent(html, { schema, bodyHtml });

  const routeDir = path.join(DIST_DIR, `elektrik-${district.id}-rayon`);
  ensureDir(routeDir);
  fs.writeFileSync(path.join(routeDir, 'index.html'), html);
  generatedCount++;
});

// ─── Generate Service landing pages (/{serviceId}-almaty) ────────────────────
seoData.services.forEach(service => {
  const title = `${service.title} в Алматы — ${service.price}, выезд за 30 мин | Мастер Манас`;
  const description = `${service.title} в Алматы — ${service.price}. Мастер-электрик приедет за 30 минут, 24/7. ${service.description} ☎ ${PHONE1}.`;
  const keywords = `${service.title.toLowerCase()} алматы, ${service.seoTitle ? service.seoTitle.toLowerCase() + ', ' : ''}электрик алматы, ${service.title.toLowerCase()}`;
  const canonical = `${BASE_URL}/${service.id}-almaty`;
  const ogImage = `${BASE_URL}${service.image}`;

  const districtsLinks = seoData.districts
    .map(d => `<a href="${BASE_URL}/uslugi/${service.id}/${d.id}" style="display:inline-block;padding:8px 16px;margin:4px;border:1px solid #DC2626;color:#DC2626;border-radius:20px;text-decoration:none;font-size:13px">${d.name}</a>`)
    .join('');

  const bodyHtml = `
<div style="font-family:'Inter',Arial,sans-serif;color:#1f2937;max-width:1000px;margin:0 auto;padding:0 20px">
  <nav style="padding:16px 0;font-size:13px;color:#6b7280">
    <a href="${BASE_URL}/" style="color:#DC2626">Главная</a> /
    <a href="${BASE_URL}/services" style="color:#DC2626">Услуги</a> /
    ${service.title}
  </nav>

  <header style="background:linear-gradient(135deg,#DC2626,#B91C1C);color:#fff;padding:40px;border-radius:12px;margin-bottom:32px">
    <h1 style="font-size:32px;font-weight:800;margin:0 0 12px 0">${service.title} в Алматы</h1>
    <p style="font-size:16px;opacity:.9;margin:0 0 20px 0">${service.price} · Выезд за 30 мин · 24/7</p>
    <div style="display:flex;gap:12px;flex-wrap:wrap">
      <a href="tel:+77055535332" style="background:#4ADE80;color:#111;padding:12px 24px;border-radius:8px;font-weight:700;text-decoration:none">📞 ${PHONE1}</a>
      <a href="${WA_LINK}" style="background:#fff;color:#DC2626;padding:12px 24px;border-radius:8px;font-weight:700;text-decoration:none">💬 WhatsApp</a>
    </div>
  </header>

  <div style="display:grid;grid-template-columns:2fr 1fr;gap:32px">
    <div>
      <section style="background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:32px;margin-bottom:24px">
        <h2 style="font-size:22px;font-weight:700;margin-bottom:16px">О услуге: ${service.title}</h2>
        <p style="color:#4b5563;line-height:1.7">${service.longDescription || service.description}</p>
      </section>

      <section style="background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:24px;margin-bottom:24px">
        <h2 style="font-size:18px;font-weight:700;margin-bottom:16px">${service.title} по районам Алматы</h2>
        <div style="display:flex;flex-wrap:wrap;gap:4px">${districtsLinks}</div>
      </section>

      ${faqHtml([
    { q: `Сколько стоит ${service.title} в Алматы?`, a: `Стоимость: ${service.price}. Точная цена рассчитывается на месте после осмотра и согласуется до начала работ.` },
    { q: 'Как быстро приедет мастер?', a: 'Мастер приедет в любой район Алматы в течение 30–45 минут после звонка. Работаем 24/7.' },
    { q: 'Есть ли гарантия?', a: 'Да, на все работы предоставляется гарантия. Условия фиксируются до начала.' },
    { q: 'Как вызвать мастера?', a: `Позвоните ${PHONE1} или ${PHONE2}, либо напишите в WhatsApp.` },
  ])}
    </div>

    <div>
      <div style="background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:24px;position:sticky;top:24px">
        <h3 style="font-size:16px;font-weight:700;text-align:center;margin-bottom:8px">Стоимость</h3>
        <p style="font-size:32px;font-weight:900;color:#DC2626;text-align:center;margin:0 0 16px 0">${service.price}</p>
        <a href="tel:+77055535332" style="display:block;background:#4ADE80;color:#111;padding:14px;border-radius:8px;font-weight:700;text-align:center;text-decoration:none;margin-bottom:8px">${PHONE1}</a>
        <a href="tel:+77074791020" style="display:block;background:#4ADE80;color:#111;padding:14px;border-radius:8px;font-weight:700;text-align:center;text-decoration:none;margin-bottom:8px">${PHONE2}</a>
        <a href="${WA_LINK}" style="display:block;background:#DC2626;color:#fff;padding:12px;border-radius:8px;font-weight:700;text-align:center;text-decoration:none">💬 WhatsApp</a>
      </div>
    </div>
  </div>

  ${napBlock()}
</div>`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': `${service.title} в Алматы`,
        'description': service.longDescription || service.description,
        'url': canonical,
        'provider': { '@type': 'Electrician', 'name': 'Мастер Манас', 'telephone': ['+77055535332', '+77074791020'], 'url': BASE_URL },
        'areaServed': { '@type': 'City', 'name': 'Алматы' },
        'offers': { '@type': 'Offer', 'price': service.price.replace(/[^0-9]/g, ''), 'priceCurrency': 'KZT' },
      },
    ],
  };

  let html = buildHead(template, { title, description, keywords, canonical, ogImage });
  html = injectContent(html, { schema, bodyHtml });

  const routeDir = path.join(DIST_DIR, `${service.id}-almaty`);
  ensureDir(routeDir);
  fs.writeFileSync(path.join(routeDir, 'index.html'), html);
  generatedCount++;
});

// ─── Generate homepage static content ────────────────────────────────────────
const homepageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Electrician',
      'name': 'Мастер Манас — Электрик Алматы',
      'image': `${BASE_URL}/images/hero_electrician.png`,
      'url': BASE_URL,
      'telephone': ['+77055535332', '+77074791020'],
      'priceRange': '₸₸',
      'address': { '@type': 'PostalAddress', 'streetAddress': 'мкр. Аксай 4-11', 'addressLocality': 'Алматы', 'addressCountry': 'KZ', 'postalCode': '050000' },
      'geo': { '@type': 'GeoCoordinates', 'latitude': 43.238949, 'longitude': 76.889709 },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        'opens': '00:00', 'closes': '23:59',
      },
      'areaServed': [
        { '@type': 'City', 'name': 'Алматы' },
        ...seoData.districts.map(d => ({ '@type': 'AdministrativeArea', 'name': d.name })),
      ],
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Услуги электрика в Алматы',
        'itemListElement': seoData.services.map(s => ({
          '@type': 'Offer',
          'itemOffered': { '@type': 'Service', 'name': s.title, 'description': s.description },
          'price': s.price.replace(/[^0-9]/g, ''),
          'priceCurrency': 'KZT',
        })),
      },
    },
    {
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': 'Сколько стоит вызов электрика в Алматы?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Стоимость вызова электрика начинается от 3 500 ₸. Выезд и диагностика — бесплатно при заказе работ.' } },
        { '@type': 'Question', 'name': 'Как быстро приедет мастер?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Мастер приедет в любой район Алматы в течение 30–40 минут. Работаем круглосуточно, 7 дней в неделю.' } },
        { '@type': 'Question', 'name': 'Какие районы Алматы вы обслуживаете?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Обслуживаем все 8 районов: Алатауский, Алмалинский, Ауэзовский, Бостандыкский, Жетысуский, Медеуский, Наурызбайский и Турксибский.' } },
        { '@type': 'Question', 'name': 'Есть ли гарантия на работы?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Да, на все виды электромонтажных работ предоставляется официальная гарантия.' } },
        { '@type': 'Question', 'name': 'Можно ли вызвать электрика ночью?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Да! Работаем 24/7, включая ночные часы. Аварийный выезд — в течение 30 минут.' } },
      ],
    },
  ],
};

const homepageBodyHtml = `
<div style="font-family:'Inter',Arial,sans-serif;color:#1f2937;max-width:1200px;margin:0 auto;padding:0 20px">

  <!-- Hero -->
  <header style="background:linear-gradient(135deg,#1f2937,#374151);color:#fff;padding:60px 40px;border-radius:12px;margin-bottom:40px;background-image:url('/images/hero_electrician.png');background-size:cover;background-position:center;position:relative">
    <div style="position:absolute;inset:0;background:rgba(17,24,39,0.75);border-radius:12px"></div>
    <div style="position:relative;z-index:1">
      <h1 style="font-size:40px;font-weight:900;margin:0 0 16px 0;line-height:1.2">Электрик в Алматы<br>профессионал своего дела</h1>
      <p style="font-size:18px;opacity:.9;margin:0 0 24px 0;max-width:500px">Электромонтажные работы для квартиры, дома и офиса. Выезд за 30 минут, 24/7.</p>
      <div style="display:flex;gap:12px;flex-wrap:wrap">
        <a href="tel:+77055535332" style="background:#4ADE80;color:#111;padding:16px 32px;border-radius:8px;font-weight:700;text-decoration:none;font-size:16px">📞 ${PHONE1}</a>
        <a href="${WA_LINK}" style="background:#DC2626;color:#fff;padding:16px 32px;border-radius:8px;font-weight:700;text-decoration:none;font-size:16px">💬 WhatsApp</a>
      </div>
    </div>
  </header>

  <!-- Services grid -->
  <section style="margin-bottom:40px">
    <h2 style="font-size:28px;font-weight:800;text-align:center;margin-bottom:24px">Услуги электрика в Алматы</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px">
      ${seoData.services.map(s => `
      <div style="background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:20px">
        <h3 style="font-size:16px;font-weight:700;margin:0 0 8px 0">
          <a href="${BASE_URL}/${s.id}-almaty" style="color:#1f2937;text-decoration:none">${s.title}</a>
        </h3>
        <p style="font-size:13px;color:#6b7280;margin:0 0 12px 0;line-height:1.5">${s.description}</p>
        <span style="font-weight:700;color:#DC2626">${s.price}</span>
      </div>`).join('')}
    </div>
  </section>

  <!-- Districts -->
  <section style="background:#f9fafb;border-radius:12px;padding:32px;margin-bottom:40px">
    <h2 style="font-size:24px;font-weight:700;margin-bottom:8px">Электрик по районам Алматы</h2>
    <p style="color:#4b5563;margin-bottom:20px">Выезжаем во все районы города в течение 30–45 минут.</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px">
      ${seoData.districts.map(d => `
      <a href="${BASE_URL}/elektrik-${d.id}-rayon" style="background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:16px;text-decoration:none;color:#1f2937;font-weight:600;display:block">
        📍 ${d.name}
      </a>`).join('')}
    </div>
  </section>

  <!-- Why us -->
  <section style="margin-bottom:40px">
    <h2 style="font-size:24px;font-weight:700;margin-bottom:20px;text-align:center">Почему выбирают Мастера Манаса</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px">
      ${[
    ['⚡', 'Выезд за 30 мин', 'Приедем быстро в любой район Алматы'],
    ['🕐', 'Работаем 24/7', 'Аварийный выезд — ночью и в праздники'],
    ['🛡', 'Гарантия на работу', 'Официальная гарантия на все виды работ'],
    ['💰', 'Честная цена', 'Стоимость согласуется до начала работ'],
  ].map(([icon, title, desc]) => `
      <div style="background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:20px;text-align:center">
        <div style="font-size:32px;margin-bottom:12px">${icon}</div>
        <h3 style="font-size:16px;font-weight:700;margin:0 0 8px 0">${title}</h3>
        <p style="font-size:13px;color:#6b7280;margin:0">${desc}</p>
      </div>`).join('')}
    </div>
  </section>

  ${napBlock()}
</div>`;

// Inject homepage content into root index.html
let homepageHtml = template
  .replace(/<title>.*?<\/title>/, '<title>Электрик Алматы | Вызов мастера за 30 мин, 24/7 — Мастер Манас</title>')
  .replace(/<meta name="description" content=".*?"\s*\/>/, '<meta name="description" content="Электрик в Алматы — выезд за 30 минут, 24/7. Ремонт проводки, установка люстр, сборка электрощита, розетки. от 3 500 ₸. ☎ +7 (705) 553-53-32." />')
  .replace(/<meta property="og:url" content=".*?"\s*\/>/, `<meta property="og:url" content="${BASE_URL}/" />`);

const homepageSchemaTag = `<script type="application/ld+json">${JSON.stringify(homepageSchema)}</script>`;
homepageHtml = homepageHtml.replace('</head>', `  ${homepageSchemaTag}\n</head>`);
homepageHtml = homepageHtml.replace('<div id="root"></div>', `<div id="root">${homepageBodyHtml}</div>`);
fs.writeFileSync(path.join(DIST_DIR, 'index.html'), homepageHtml);

// ─── Generate 404.html ────────────────────────────────────────────────────────
fs.writeFileSync(path.join(DIST_DIR, '404.html'), template);

console.log(`✅ Static pre-rendering complete. Generated ${generatedCount} HTML pages for SEO and 404.html.`);
