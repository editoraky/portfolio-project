import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
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
  private router = inject(Router);

  currentLanguage = this.languageService.language;
  texts = this.languageService.texts;
  isMenuOpen: boolean = false;

  switchLanguage(language: Language): void {
    this.languageService.setLanguage(language);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
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

  onNavClick(event: Event, targetId: string): void {
    event.preventDefault();
    this.closeMenu();
    setTimeout(() => {
      this.navigateToSection(targetId);
    }, 100);
  }

  onMobileLinkDown(event: Event, link: HTMLElement): void {
    event.preventDefault();
    link.classList.add('clicked-full');
    setTimeout(() => {
      link.classList.remove('clicked-full');
      link.classList.add('clicked-half');
    }, 200);
  }

  onMobileLinkUp(event: Event, targetId: string): void {
    setTimeout(() => {
      this.closeMenuAndResetLinks();
      this.navigateToSection(targetId);
    }, 150);
  }

  private closeMenuAndResetLinks(): void {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
    this.stopSayHiBlink();
    setTimeout(() => {
      document.querySelectorAll('.mobile-nav__link').forEach((el) => {
        el.classList.remove('clicked-full', 'clicked-half');
      });
    }, 350);
  }

  private navigateToSection(targetId: string): void {
    const fragment = targetId.replace('#', '');
    const isOnHomePage = this.router.url === '/' || this.router.url.startsWith('/#');
    if (isOnHomePage) {
      const target = document.querySelector(targetId);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate(['/'], { fragment: fragment });
    }
  }

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
    setTimeout(blink, greenDuration);
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
