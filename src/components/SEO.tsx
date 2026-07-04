import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

const DEFAULT_OG_IMAGE = "https://manasmaster.kz/images/hero_electrician.png";

const SEO = ({ title, description, keywords, canonical, ogImage }: SEOProps) => {
  useEffect(() => {
    // Title
    document.title = title;

    const setMeta = (selector: string, attr: string, value: string, attrKey = "content") => {
      let el = document.querySelector(selector);
      if (el) {
        el.setAttribute(attrKey, value);
      } else {
        el = document.createElement("meta");
        el.setAttribute(attr, selector.match(/\[.*?="(.*?)"\]/)?.[1] ?? "");
        el.setAttribute(attrKey, value);
        document.head.appendChild(el);
      }
    };

    // Standard meta
    setMeta('meta[name="description"]', "name", description);
    if (keywords) setMeta('meta[name="keywords"]', "name", keywords);

    // Open Graph
    const image = ogImage || DEFAULT_OG_IMAGE;
    setMeta('meta[property="og:title"]', "property", title);
    setMeta('meta[property="og:description"]', "property", description);
    setMeta('meta[property="og:url"]', "property", canonical || window.location.href);
    setMeta('meta[property="og:image"]', "property", image);
    setMeta('meta[property="og:type"]', "property", "website");
    setMeta('meta[property="og:locale"]', "property", "ru_RU");

    // Twitter Card
    setMeta('meta[name="twitter:card"]', "name", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", title);
    setMeta('meta[name="twitter:description"]', "name", description);
    setMeta('meta[name="twitter:image"]', "name", image);

    // Canonical link
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }
  }, [title, description, keywords, canonical, ogImage]);

  return null;
};

export default SEO;
