// ============================================
// HEADER KOMPONENTE
// ============================================

import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService, Language } from '../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  
  private languageService = inject(LanguageService);
  private blinkInterval: any;

  currentLanguage = this.languageService.language;
  isMenuOpen: boolean = false;

  switchLanguage(language: Language): void {
    this.languageService.setLanguage(language);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
    
    // Menü açılınca blink başlat
    if (this.isMenuOpen) {
      this.startSayHiBlink();
    } else {
      this.stopSayHiBlink();
    }
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
    this.stopSayHiBlink();
  }

  /**
   * Mobile link - basılı tutunca animasyon başlar
   */
  onMobileLinkDown(event: Event, link: HTMLElement): void {
    event.preventDefault();
    
    // 1. Önce tam çizgi
    link.classList.add('clicked-full');
    
    // 2. 200ms sonra sağ yarım
    setTimeout(() => {
      link.classList.remove('clicked-full');
      link.classList.add('clicked-half');
    }, 200);
  }

  /**
   * Mobile link - bırakınca linke git
   */
  onMobileLinkUp(event: Event, targetId: string): void {
    setTimeout(() => {
      this.isMenuOpen = false;
      document.body.style.overflow = '';
      this.stopSayHiBlink();
      
      // Menü kapandıktan sonra tüm class'ları temizle
      setTimeout(() => {
        document.querySelectorAll('.mobile-nav__link').forEach(el => {
          el.classList.remove('clicked-full', 'clicked-half');
        });
      }, 350);
      
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  }

  // ============================================
  // SAY HI! BLINK EFEKTİ
  // 3sn yeşil, 2sn beyaz - süreleri buradan ayarla
  // ============================================
  private startSayHiBlink(): void {
    const sayHi = document.querySelector('.mobile-nav__sayhi');
    if (!sayHi) return;

    const greenDuration = 1300;
    const whiteDuration = 1000;

    const blink = () => {
      sayHi.classList.add('white');
      setTimeout(() => {
        sayHi.classList.remove('white');
      }, whiteDuration);
    };

    // İlk yeşil süresinden sonra başlat
    setTimeout(blink, greenDuration);
    // Sonra döngüyle tekrarla
    this.blinkInterval = setInterval(blink, greenDuration + whiteDuration);
  }

  private stopSayHiBlink(): void {
    if (this.blinkInterval) {
      clearInterval(this.blinkInterval);
    }
    const sayHi = document.querySelector('.mobile-nav__sayhi');
    if (sayHi) {
      sayHi.classList.remove('white');
    }
  }
}