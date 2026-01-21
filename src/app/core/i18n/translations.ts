// ============================================
// ZENTRALE ÜBERSETZUNGEN
// Alle Texte der Website in EN und DE
// ============================================

export const TRANSLATIONS = {
  // ------------------------------------------
  // HEADER & NAVIGATION
  // ------------------------------------------
  header: {
    aboutLink: {
      en: 'About me',
      de: 'Über mich',
    },
    skillsLink: {
      en: 'Skills',
      de: 'Skills',
    },
    portfolioLink: {
      en: 'Portfolio',
      de: 'Portfolio',
    },
    sayHi: {
      en: 'Say Hi!',
      de: 'Sag Hallo!',
    },
  },

  // ------------------------------------------
  // ABOUT SECTION
  // ------------------------------------------
  about: {
    title: {
      en: 'About me',
      de: 'Über mich',
    },
    description1: {
      en: `The world of IT fascinates me because it uniquely combines
           creativity, logic, and vision. With code, it is possible to
           build more than just technical systems — you can create
           solutions that simplify the everyday lives of millions of
           people, solve real problems, and even entertain.`,
      de: `Die IT-Welt fasziniert mich, weil sie Kreativität, Logik und
           Vision auf einzigartige Weise vereint. Mit Code lassen sich
           nicht nur technische Systeme bauen, sondern Lösungen schaffen,
           die den Alltag von Millionen Menschen erleichtern, Probleme
           elegant lösen und sogar unterhalten.`,
    },
    description2: {
      en: `What truly drives me is the blend of knowledge, creativity,
           and analytical thinking. Turning an idea into something real
           and functional through structured problem-solving is incredibly
           rewarding. I enjoy breaking down complex challenges into clear,
           manageable steps.`,
      de: `Was mich besonders antreibt, ist die Kombination aus Wissen,
           Kreativität und analytischem Denken. Aus einer Idee wird durch
           strukturiertes Problemlösen etwas Reales, etwas Funktionierendes.
           Ich liebe es, komplexe Probleme in kleine, verständliche
           Schritte zu zerlegen.`,
    },
    location: {
      en: 'Based in Cologne',
      de: 'Wohnhaft in Köln',
    },
    remote: {
      en: 'Open to work remote',
      de: 'Offen für Remote-Arbeit',
    },
    button: {
      en: "Let's talk",
      de: 'Lass uns reden',
    },
  },
} as const;

// Typ-Definition für TypeScript
// Das hilft bei der Autovervollständigung im Editor
export type TranslationKeys = typeof TRANSLATIONS;
