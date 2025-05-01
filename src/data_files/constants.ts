import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Sun City",
  tagline: "Equipe do IFBA de Jequié Bahia para o Baja Sae",
  description:
    "A Sun City Baja é uma equipe de estudantes de engenharia mecânica do IFBA Jequié, que está dando seus passos na competição Baja SAE. Com sede em Jequié, Bahia, somos movidos pela paixão pela engenharia e pela vontade de aplicar nossos conhecimentos em um veículo off-road.",
  description_short:
    "A Sun City Baja é uma equipe de estudantes de engenharia mecânica do IFBA Jequié, que está na competição Baja SAE",
  url: "https://suncity.com.br",
  author: "Gabriel Amaral",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Hardware Tools & Construction Services`,
  description:
    "Equip your projects with Sun City's top-quality hardware tools and expert construction services. Trusted by industry leaders, Sun City offers simplicity, affordability, and reliability. Experience the difference with user-centric design and cutting-edge tools. Start exploring now!",
  image: ogImageSrc,
};

import IFBAIcon from "@images/Patrocinadores/VETORIZADO/IFBA.svg?url";
import MultiArte from "@images/Patrocinadores/VETORIZADO/MultiArte.svg?url";
import TechFisio from "@images/Patrocinadores/VETORIZADO/TechFisio.svg?url";
import PsDrone from "@images/Patrocinadores/VETORIZADO/PsDrone.svg?url";

export const partnersData = [
  {
    icon: IFBAIcon,
    name: "IFBA",
    href: "https://www.instagram.com/ifbajequie/",
  },
  {
    icon: MultiArte,
    name: "MultiArte",
    href: "https://www.instagram.com/multiartejequie/",
  },
  {
    icon: TechFisio,
    name: "TechFisio",
    href: "https://www.instagram.com/techfisiooficial/",
  },
  {
    icon: PsDrone,
    name: "PsDrone",
    href: "https://www.instagram.com/ps.drone/",
  },
];
