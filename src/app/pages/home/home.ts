import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { AboutComponent } from '../../sections/about/about';
import { SkillsComponent } from '../../sections/skills/skills';
import { PortfolioComponent } from '../../sections/portfolio/portfolio';
import { ReferencesComponent } from '../../sections/references/references';
import { ContactComponent } from '../../sections/contact/contact';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, SkillsComponent, PortfolioComponent, ReferencesComponent, ContactComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  private languageService = inject(LanguageService);
  lang = this.languageService.language;
}