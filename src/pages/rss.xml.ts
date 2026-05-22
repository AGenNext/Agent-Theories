import { getCollection } from 'astro:content';

export async function GET() {
  const theories = await getCollection('theories');

  const items = theories.map((theory) => `
    <item>
      <title>${theory.data.name}</title>
      <link>https://agennext.github.io/Agent-Theories/theories/${theory.slug}</link>
      <description>${theory.data.summary}</description>
      <guid>${theory.data.id}</guid>
    </item>
  `).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Agent Theories</title>
      <link>https://agennext.github.io/Agent-Theories/</link>
      <description>Registry of theories for humans and agents.</description>
      ${items}
    </channel>
  </rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml'
    }
  });
}
