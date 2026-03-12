/**
 * @fileoverview Legal notice page component for the portfolio website.
 * Displays legally required information such as contact details and business information.
 */

import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';

/**
 * Legal notice (Impressum) page component.
 * Displays required legal information in the current language.
 */
@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss'
})
export class LegalNotice {
  /** Language service for accessing current language setting */
  private languageService = inject(LanguageService);
  
  /** Reactive signal containing the current language code */
  lang = this.languageService.language;
}