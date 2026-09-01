import { SITE_URL } from '@/lib/site';

// Required by output: 'export' — emitted as a static file at build time.
export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      // Answer-engine crawlers, explicitly allowed for AI citation visibility.
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
