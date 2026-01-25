import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  private languageService = inject(LanguageService);
  texts = this.languageService.texts;
  private router = inject(Router);

  scrollToTop(): void {
    const isOnHomePage = this.router.url === '/' || this.router.url.startsWith('/#');
    if (isOnHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.router.navigate(['/']);
    }
  }
}