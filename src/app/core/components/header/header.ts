/**
 * @fileoverview Header component for the portfolio website.
 * Handles navigation, language switching, and mobile menu functionality.
 */

import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LanguageService, Language } from '../../services/language.service';

/**
 * Header component displaying logo, navigation links, and language switcher.
 * Manages responsive mobile menu with animations and smooth scroll navigation.
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  /** Language service for managing localization */
  private languageService = inject(LanguageService);
  
  /** Interval reference for the "Say Hi" blink animation */
  private blinkInterval: any;
  
  /** Router service for navigation handling */
  private router = inject(Router);

  /** Reactive signal containing the current language setting */
  currentLanguage = this.languageService.language;
  
  /** Reactive signal containing all localized text strings */
  texts = this.languageService.texts;
  
  /** Tracks whether the mobile menu is currently open */
  isMenuOpen: boolean = false;

  /**
   * Switches the application language.
   * @param language - The language code to switch to ('en' or 'de')
   */
  switchLanguage(language: Language): void {
    this.languageService.setLanguage(language);
  }

  /**
   * Toggles the mobile menu open/closed state.
   * Manages body scroll lock and starts/stops the "Say Hi" blink animation.
   */
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
    if (this.isMenuOpen) {
      this.startSayHiBlink();
    } else {
      this.stopSayHiBlink();
    }
  }

  /**
   * Closes the mobile menu and restores body scroll.
   */
  closeMenu(): void {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
    this.stopSayHiBlink();
  }

  /**
   * Handles navigation link clicks with smooth scroll behavior.
   * @param event - The click event
   * @param targetId - The target section ID to scroll to
   */
  onNavClick(event: Event, targetId: string): void {
    event.preventDefault();
    this.closeMenu();
    setTimeout(() => {
      this.navigateToSection(targetId);
    }, 100);
  }

  /**
   * Handles touch/mouse down on mobile navigation links.
   * Applies visual feedback animation.
   * @param event - The pointer down event
   * @param link - The link element being pressed
   */
  onMobileLinkDown(event: Event, link: HTMLElement): void {
    event.preventDefault();
    link.classList.add('clicked-full');
    setTimeout(() => {
      link.classList.remove('clicked-full');
      link.classList.add('clicked-half');
    }, 200);
  }

  /**
   * Handles touch/mouse up on mobile navigation links.
   * Completes navigation after visual feedback.
   * @param event - The pointer up event
   * @param targetId - The target section ID to scroll to
   */
  onMobileLinkUp(event: Event, targetId: string): void {
    setTimeout(() => {
      this.closeMenuAndResetLinks();
      this.navigateToSection(targetId);
    }, 150);
  }

  /**
   * Closes menu and resets all link visual states.
   * @private
   */
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

  /**
   * Navigates to a section by ID, handling both same-page and cross-page navigation.
   * @private
   * @param targetId - The target section ID (with or without '#' prefix)
   */
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

  /**
   * Starts the alternating color blink animation for "Say Hi" text.
   * @private
   */
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

  /**
   * Stops the "Say Hi" blink animation and resets to default state.
   * @private
   */
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