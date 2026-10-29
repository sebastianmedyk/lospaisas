// Resubmit all sitemap URLs to IndexNow (Bing, Yandex, etc.). Usage: node scripts/indexnow.mjs
const HOST = 'lospaisastires.com';
const KEY = '8d6bdb9a18800bd56b93fbe773740706';
const base = `https://${HOST}`;
const get = async (u) => (await fetch(u)).text();
const locs = (xml) => [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
const index = await get(`${base}/sitemap.xml`);
let urls = [];
if (index.includes('<sitemapindex')) {
  for (const sm of locs(index)) urls.push(...locs(await get(sm)));
} else urls = locs(index);
urls = [...new Set(urls)];
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${base}/${KEY}.txt`, urlList: urls }),
});
console.log(`Submitted ${urls.length} URLs -> HTTP ${res.status}`, await res.text());
