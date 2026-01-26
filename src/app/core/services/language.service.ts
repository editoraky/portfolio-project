import { Injectable, signal, computed } from '@angular/core';
import { TRANSLATIONS } from '../i18n/translations';

export type Language = 'en' | 'de';
export interface TranslatedTexts {
  header: {
    aboutLink: string;
    skillsLink: string;
    portfolioLink: string;
    sayHi: string;
  };
  about: {
    title: string;
    description1: string;
    description2: string;
    location: string;
    remote: string;
    button: string;
  };
  skills: {
    title: string;
    ctaText1: string;
    ctaLink: string;
    ctaText2: string;
  };
  portfolio: {
    subtitle: string;
    project1Desc: string;
    project2Desc: string;
    project3Desc: string;
  };
  contact: {
    title: string;
    titleMobile: string;
    formTitle: string;
    formSubtitle: string;
    labelName: string;
    labelEmail: string;
    labelMessage: string;
    errorName: string;
    errorEmailRequired: string;
    errorEmailInvalid: string;
    errorMessage: string;
    privacyText1: string;
    privacyLink: string;
    privacyText2: string;
    errorPrivacy: string;
    submitButton: string;
    submitButtonMobile: string;
    successTitle: string;
    successMessage: string;
    successButton: string;
  };
  references: {
    title: string;
    subtitle: string;
    roleTeamPartner: string;
    roleFrontendEngineer: string;
    testimonial1: string;
    testimonial2: string;
    testimonial3: string;
  };
  footer: {
    legalNotice: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLanguage = signal<Language>('en');
  language = this.currentLanguage.asReadonly();
  texts = computed(() => this.getTranslatedTexts());

  constructor() {
    this.loadSavedLanguage();
  }

  private loadSavedLanguage(): void {
    const saved = localStorage.getItem('language') as Language;
    if (saved === 'en' || saved === 'de') {
      this.currentLanguage.set(saved);
    }
  }

  setLanguage(lang: Language): void {
    this.currentLanguage.set(lang);
    localStorage.setItem('language', lang);
  }

  getLanguage(): Language {
    return this.currentLanguage();
  }

  private getTranslatedTexts(): TranslatedTexts {
    const lang = this.currentLanguage();

    return {
      header: {
        aboutLink: TRANSLATIONS.header.aboutLink[lang],
        skillsLink: TRANSLATIONS.header.skillsLink[lang],
        portfolioLink: TRANSLATIONS.header.portfolioLink[lang],
        sayHi: TRANSLATIONS.header.sayHi[lang],
      },
      about: {
        title: TRANSLATIONS.about.title[lang],
        description1: TRANSLATIONS.about.description1[lang],
        description2: TRANSLATIONS.about.description2[lang],
        location: TRANSLATIONS.about.location[lang],
        remote: TRANSLATIONS.about.remote[lang],
        button: TRANSLATIONS.about.button[lang],
      },
      skills: {
        title: TRANSLATIONS.skills.title[lang],
        ctaText1: TRANSLATIONS.skills.ctaText1[lang],
        ctaLink: TRANSLATIONS.skills.ctaLink[lang],
        ctaText2: TRANSLATIONS.skills.ctaText2[lang],
      },
      portfolio: {
        subtitle: TRANSLATIONS.portfolio.subtitle[lang],
        project1Desc: TRANSLATIONS.portfolio.project1Desc[lang],
        project2Desc: TRANSLATIONS.portfolio.project2Desc[lang],
        project3Desc: TRANSLATIONS.portfolio.project3Desc[lang],
      },
      contact: {
        title: TRANSLATIONS.contact.title[lang],
        titleMobile: TRANSLATIONS.contact.titleMobile[lang],
        formTitle: TRANSLATIONS.contact.formTitle[lang],
        formSubtitle: TRANSLATIONS.contact.formSubtitle[lang],
        labelName: TRANSLATIONS.contact.labelName[lang],
        labelEmail: TRANSLATIONS.contact.labelEmail[lang],
        labelMessage: TRANSLATIONS.contact.labelMessage[lang],
        errorName: TRANSLATIONS.contact.errorName[lang],
        errorEmailRequired: TRANSLATIONS.contact.errorEmailRequired[lang],
        errorEmailInvalid: TRANSLATIONS.contact.errorEmailInvalid[lang],
        errorMessage: TRANSLATIONS.contact.errorMessage[lang],
        privacyText1: TRANSLATIONS.contact.privacyText1[lang],
        privacyLink: TRANSLATIONS.contact.privacyLink[lang],
        privacyText2: TRANSLATIONS.contact.privacyText2[lang],
        errorPrivacy: TRANSLATIONS.contact.errorPrivacy[lang],
        submitButton: TRANSLATIONS.contact.submitButton[lang],
        submitButtonMobile: TRANSLATIONS.contact.submitButtonMobile[lang],
        successTitle: TRANSLATIONS.contact.successTitle[lang],
        successMessage: TRANSLATIONS.contact.successMessage[lang],
        successButton: TRANSLATIONS.contact.successButton[lang],
      },
      references: {
        title: TRANSLATIONS.references.title[lang],
        subtitle: TRANSLATIONS.references.subtitle[lang],
        roleTeamPartner: TRANSLATIONS.references.roleTeamPartner[lang],
        roleFrontendEngineer: TRANSLATIONS.references.roleFrontendEngineer[lang],
        testimonial1: TRANSLATIONS.references.testimonial1[lang],
        testimonial2: TRANSLATIONS.references.testimonial2[lang],
        testimonial3: TRANSLATIONS.references.testimonial3[lang],
      },
      footer: {
        legalNotice: TRANSLATIONS.footer.legalNotice[lang],
      },
    };
  }
}
