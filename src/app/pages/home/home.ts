/**
 * @fileoverview Home page component for the portfolio website.
 * Serves as the main landing page containing all portfolio sections.
 */

import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { AboutComponent } from '../../sections/about/about';
import { SkillsComponent } from '../../sections/skills/skills';
import { PortfolioComponent } from '../../sections/portfolio/portfolio';
import { ReferencesComponent } from '../../sections/references/references';
import { ContactComponent } from '../../sections/contact/contact';

/**
 * Home page component that composes all main portfolio sections.
 * Includes About, Skills, Portfolio, References, and Contact sections.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, SkillsComponent, PortfolioComponent, ReferencesComponent, ContactComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  /** Language service for accessing current language setting */
  private languageService = inject(LanguageService);
  
  /** Reactive signal containing the current language code */
  lang = this.languageService.language;
}