/**
 * @fileoverview Footer component for the portfolio website.
 * Displays site navigation links, social media icons, and copyright information.
 */

import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

/**
 * Footer component that appears at the bottom of every page.
 * Provides navigation back to home and displays localized text content.
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  /** Language service for accessing localized text content */
  private languageService = inject(LanguageService);
  
  /** Reactive signal containing all localized text strings */
  texts = this.languageService.texts;
  
  /** Router service for navigation handling */
  private router = inject(Router);

  /**
   * Scrolls to top of page if on home page, otherwise navigates to home.
   * Provides smooth scrolling animation when already on home page.
   */
  scrollToTop(): void {
    const isOnHomePage = this.router.url === '/' || this.router.url.startsWith('/#');
    if (isOnHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.router.navigate(['/']);
    }
  }
}