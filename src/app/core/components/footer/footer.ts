// ============================================
// FOOTER KOMPONENTE
// Enthält Logo, Copyright, Social Links und Legal Notice
// ============================================

import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})

export class FooterComponent {
  // LanguageService für Übersetzungen
  private languageService = inject(LanguageService);

  // Übersetzungstexte als Signal
  texts = this.languageService.texts;
}
