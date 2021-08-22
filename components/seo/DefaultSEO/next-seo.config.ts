import { DefaultSeoProps } from "next-seo"

const NEXT_SEO_CONFIG = {
  titleTemplate: "%s | Startup Weekend UI 2021",
  defaultTitle: "Startup Weekend UI 2021 | Kompetisi Startup terbesar di Indonesia",
  description:
    "Startup Weekend UI 2021 adalah kompetisi startup terbesar di Indonesia. Kami menyediakan speaker, mentor, dan juri yang berkompeten di bidangnya.",
  canonical: "https://www.startupweekendui.com",
  openGraph: {
    type: "website",
    title: "Startup Weekend UI 2021 | Kompetisi Startup terbesar di Indonesia",
    images: [
      {
        url: "/images/seo/og-image.jpg",
        width: 640,
        height: 640,
        alt: "swui-logo",
      },
    ],
    url: "https://www.startupweekendui.com",
    locale: "en_US",
    site_name: "Startup Weekend UI 2021",
  },
  twitter: {
    cardType: "summary",
    site: "@startupweekend.ui",
    handle: "@startupweekend.ui",
  },
} as DefaultSeoProps

export default NEXT_SEO_CONFIG
