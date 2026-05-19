import fs from 'fs';
const seoData = JSON.parse(fs.readFileSync('./src/data/seo-data.json', 'utf8'));


const BASE_URL = 'https://manasmaster.kz';
const currentDate = new Date().toISOString().split('T')[0];

const generateSitemap = () => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Add Homepage
  xml += `  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>\n`;

  // Add all service + district combinations
  seoData.services.forEach(service => {
    seoData.districts.forEach(district => {
      xml += `  <url>
    <loc>${BASE_URL}/uslugi/${service.id}/${district.id}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
    });
  });

  // Add District landing pages
  seoData.districts.forEach(district => {
    xml += `  <url>
    <loc>${BASE_URL}/elektrik-${district.id}-rayon</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>\n`;
  });

  // Add main service landing pages
  seoData.services.forEach(service => {
    xml += `  <url>
    <loc>${BASE_URL}/${service.id}-almaty</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
  });

  // Add Static pages
  const staticPages = [
    { path: '/services', priority: '0.9', freq: 'weekly' },
    { path: '/prices', priority: '0.8', freq: 'weekly' },
    { path: '/blog', priority: '0.8', freq: 'weekly' },
    { path: '/about', priority: '0.7', freq: 'monthly' },
    { path: '/portfolio', priority: '0.7', freq: 'monthly' },
    { path: '/reviews', priority: '0.7', freq: 'monthly' },
    { path: '/contacts', priority: '0.7', freq: 'monthly' },
  ];
  staticPages.forEach(page => {
    xml += `  <url>
    <loc>${BASE_URL}${page.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.freq}</changefreq>
    <priority>${page.priority}</priority>
  </url>\n`;
  });

  // Add Blog posts
  const blogPosts = [
    'safety', 'lighting', 'wiring', 'shield',
    'appliances', 'smarthome', 'floorheating',
    'ups', 'automation', 'landscape', 'emergency', 'ev'
  ];
  blogPosts.forEach(slug => {
    xml += `  <url>
    <loc>${BASE_URL}/blog/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>\n`;
  });

  xml += '</urlset>';

  fs.writeFileSync('./public/sitemap.xml', xml);
  if (fs.existsSync('./dist')) {
    fs.writeFileSync('./dist/sitemap.xml', xml);
  }
  const total = 1 + seoData.services.length * seoData.districts.length + seoData.districts.length + seoData.services.length + staticPages.length + blogPosts.length;
  console.log('✅ Sitemap generated successfully with', total, 'URLs');
};

generateSitemap();
