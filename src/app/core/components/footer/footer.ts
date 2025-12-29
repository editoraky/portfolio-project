// ============================================
// FOOTER KOMPONENTE
// Enthält Logo, Copyright, Social Links und Legal Notice
// ============================================

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  // Aktuell keine Logik nötig
  // Die Komponente ist rein visuell (statisch)
}
