// ============================================
// ROUTING KONFIGURATION
// Definiert welche URL zu welcher Seite führt
// ============================================

import { Routes } from '@angular/router';

export const routes: Routes = [
  // Startseite (Home)
  // URL: http://localhost:4200/
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },

  // Impressum (Legal Notice)
  // URL: http://localhost:4200/legal-notice
  {
    path: 'legal-notice',
    loadComponent: () => import('./pages/legal-notice/legal-notice').then(m => m.LegalNotice)
  },

  // Datenschutz (Privacy Policy)
  // URL: http://localhost:4200/privacy-policy
  {
    path: 'privacy-policy',
    loadComponent: () => import('./pages/privacy-policy/privacy-policy').then(m => m.PrivacyPolicy)
  },

  // Fallback: Unbekannte URLs → zurück zur Startseite
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];