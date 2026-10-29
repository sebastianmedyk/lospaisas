<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  exclude-result-prefixes="s xhtml">
  <xsl:output method="html" encoding="UTF-8" indent="yes" doctype-system="about:legacy-compat"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="robots" content="noindex,follow"/>
        <title>XML Sitemap · Los Paisas Tires</title>
        <style>
          body { margin: 0; font: 14px/1.5 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; color: #111; background: #fafafa; }
          header { background: #000; color: #fff; padding: 24px 32px; border-bottom: 4px solid #F4C20D; }
          header h1 { margin: 0 0 4px; font-size: 22px; }
          header h1 span { color: #F4C20D; }
          header p { margin: 0; color: #ccc; }
          main { padding: 24px 32px; }
          table { width: 100%; border-collapse: collapse; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,.08); }
          th { text-align: left; background: #111; color: #F4C20D; padding: 10px 12px; font-weight: 600; }
          td { padding: 8px 12px; border-top: 1px solid #eee; vertical-align: top; }
          tr:hover td { background: #fff8db; }
          a { color: #111; text-decoration: none; border-bottom: 1px solid #E01E1E; }
          a:hover { color: #E01E1E; }
          .num { text-align: right; white-space: nowrap; }
          .count { display: inline-block; background: #E01E1E; color: #fff; border-radius: 10px; padding: 0 8px; font-size: 12px; margin-left: 6px; }
        </style>
      </head>
      <body>
        <header>
          <h1>Los Paisas Tires <span>XML Sitemap</span></h1>
          <p>This XML sitemap is meant for search engines. Generated for <a href="https://lospaisastires.com" style="color:#F4C20D;border-color:#F4C20D">lospaisastires.com</a>.</p>
        </header>
        <main>
          <xsl:apply-templates select="s:sitemapindex | s:urlset"/>
        </main>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="s:sitemapindex">
    <p>This sitemap index contains <strong><xsl:value-of select="count(s:sitemap)"/></strong> sitemaps.</p>
    <table>
      <tr><th>Sitemap</th><th class="num">Last modified</th></tr>
      <xsl:for-each select="s:sitemap">
        <tr>
          <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
          <td class="num"><xsl:value-of select="s:lastmod"/></td>
        </tr>
      </xsl:for-each>
    </table>
  </xsl:template>

  <xsl:template match="s:urlset">
    <p>This sitemap contains <strong><xsl:value-of select="count(s:url)"/></strong> URLs. <a href="/sitemap.xml">← Sitemap index</a></p>
    <table>
      <tr><th>URL</th><th class="num">Last modified</th><th class="num">Language alternates</th></tr>
      <xsl:for-each select="s:url">
        <tr>
          <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
          <td class="num"><xsl:value-of select="s:lastmod"/></td>
          <td class="num"><span class="count"><xsl:value-of select="count(xhtml:link)"/></span></td>
        </tr>
      </xsl:for-each>
    </table>
  </xsl:template>
</xsl:stylesheet>
