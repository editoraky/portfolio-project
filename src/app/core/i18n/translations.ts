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
      de: 'Lass Sie uns reden',
    },
  },
  // ------------------------------------------
  // SKILLS SECTION
  // ------------------------------------------
  skills: {
    title: {
      en: 'My skills',
      de: 'Meine Skills',
    },
    ctaText1: {
      en: "Don't see the skill you need?",
      de: 'Nicht die passende Fähigkeit dabei?',
    },
    ctaLink: {
      en: 'Contact me',
      de: 'Kontaktieren Sie mich',
    },
    ctaText2: {
      en: "I'm always ready to learn!",
      de: 'Ich lerne gerne Neues dazu!',
    },
  },

  // ------------------------------------------
  // PORTFOLIO SECTION
  // ------------------------------------------
  portfolio: {
    subtitle: {
      en: 'Explore a selection of my work here - Interact with projects to see my skills in action.',
      de: 'Entdecken Sie hier eine Auswahl meiner Arbeiten - Interagieren Sie mit den Projekten, um meine Fähigkeiten in Aktion zu sehen.',
    },
    project1Desc: {
      en: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe find coins and salsa bottles to fight against the killer chicken.',
      de: 'Ein einfaches Jump-and-Run-Spiel basierend auf einem objektorientierten Ansatz. Hilf Pepe, Münzen und Salsa-Flaschen zu finden, um gegen das Killer-Huhn zu kämpfen.',
    },
    project2Desc: {
      en: 'Based on the PokéAPI, a simple library that provides and catalogues Pokémon information.',
      de: 'Basierend auf der PokéAPI, eine einfache Bibliothek, die Pokémon-Informationen bereitstellt und katalogisiert.',
    },
    project3Desc: {
      en: 'A Slack-inspired chat application with real-time messaging, channels, and direct messages.',
      de: 'Eine von Slack inspirierte Chat-Anwendung mit Echtzeit-Nachrichten, Kanälen und Direktnachrichten.',
    },
  },
  // ------------------------------------------
  // CONTACT SECTION
  // ------------------------------------------
  contact: {
    title: {
      en: 'Say Hi!',
      de: 'Sag Hallo!',
    },
    titleMobile: {
      en: 'Say hi!',
      de: 'Sag hallo!',
    },
    formTitle: {
      en: 'Want to discuss a new project?',
      de: 'Möchten Sie ein neues Projekt besprechen?',
    },
    formSubtitle: {
      en: "Say hello! let's discuss your ideas and make it happen",
      de: 'Schreiben Sie mir! Lassen Sie uns Ihre Ideen besprechen und umsetzen',
    },
    labelName: {
      en: 'Your name',
      de: 'Ihr Name',
    },
    labelEmail: {
      en: 'Your email',
      de: 'Ihre E-Mail',
    },
    labelMessage: {
      en: 'Your message',
      de: 'Ihre Nachricht',
    },
    errorName: {
      en: 'Your name is required',
      de: 'Ihr Name ist erforderlich',
    },
    errorEmail: {
      en: 'Your email is required',
      de: 'Ihre E-Mail ist erforderlich',
    },
    errorMessage: {
      en: 'Your message is required',
      de: 'Ihre Nachricht ist erforderlich',
    },
    privacyText1: {
      en: "I've read the ",
      de: 'Ich habe die ',
    },
    privacyLink: {
      en: 'privacy policy',
      de: 'Datenschutzerklärung',
    },
    privacyText2: {
      en: ' and agree to the processing of my data as outlined.',
      de: ' gelesen und stimme der Verarbeitung meiner Daten zu.',
    },
    errorPrivacy: {
      en: 'Please accept the privacy policy',
      de: 'Bitte akzeptieren Sie die Datenschutzerklärung',
    },
    submitButton: {
      en: 'Send message',
      de: 'Nachricht senden',
    },
    submitButtonMobile: {
      en: 'Say hello ;)',
      de: 'Sag hallo ;)',
    },
  },
} as const;

// Typ-Definition für TypeScript
// Das hilft bei der Autovervollständigung im Editor
export type TranslationKeys = typeof TRANSLATIONS;
