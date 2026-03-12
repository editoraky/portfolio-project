/**
 * @fileoverview Privacy policy page component for the portfolio website.
 * Displays data protection and privacy information as required by GDPR.
 */

import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';

/**
 * Privacy policy (Datenschutz) page component.
 * Displays GDPR-compliant privacy information in the current language.
 */
@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss'
})
export class PrivacyPolicy {
  /** Language service for accessing current language setting */
  private languageService = inject(LanguageService);
  
  /** Reactive signal containing the current language code */
  lang = this.languageService.language;
}