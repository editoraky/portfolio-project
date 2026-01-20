import { Injectable, signal } from '@angular/core';

export type Language = 'en' | 'de';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage = signal<Language>('en');
  
  language = this.currentLanguage.asReadonly();

  constructor() {
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
}