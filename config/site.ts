import { BASE_URL } from "./const"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Bingkai.id",
  description: "Rayakan hari kemerdekaan bersama Bingkai.id",
  basePath: BASE_URL,
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Create Bingkai",
      href: "/bingkai",
    },
    {
      title: "Watermark",
      href: "/watermark",
    },
    {
      title: "Eksplor",
      href: "/eksplor",
    },
    {
      title: "FAQ",
      href: "/faq",
    },
  ],
  links: [
    {
      title: "whatsapp",
      image: `${BASE_URL}/images/whatsapp.webp`,
      href: "https://wa.me/",
    },
    {
      title: "facebook",
      image: `${BASE_URL}/images/facebook.webp`,
      href: "https://facebook.com/",
    },
    {
      title: "twitter",
      image: `${BASE_URL}/images/twitter.webp`,
      href: "https://twitter.com/",
    },
    {
      title: "instagram",
      image: `${BASE_URL}/images/instagram.webp`,
      href: "https://instagram.com/",
    },
    {
      title: "linkedin",
      image: `${BASE_URL}/images/linkedin.webp`,
      href: "https://linkedin.com/",
    },
    {
      title: "youtube",
      image: `${BASE_URL}/images/youtube.webp`,
      href: "https://youtube.com/",
    },
    {
      title: "tiktok",
      image: `${BASE_URL}/images/tiktok.webp`,
      href: "https://tiktok.com/",
    },
  ],
}
