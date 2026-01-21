import { Component, OnInit, OnDestroy, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class ReferencesComponent implements OnInit, OnDestroy {
  // Übersetzungsservice injizieren
  private languageService = inject(LanguageService);

  // Texte in aktueller Sprache (Signal)
  texts = this.languageService.texts;

  isTitleGreen = false;
  isMobile = false;

  private titleInterval: any;

  ngOnInit() {
    this.checkScreenSize();
  }

  ngOnDestroy() {
    if (this.titleInterval) {
      clearInterval(this.titleInterval);
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    const wasMobile = this.isMobile;
    this.isMobile = window.innerWidth <= 768;

    if (this.isMobile && !wasMobile) {
      this.startTitleAnimation();
    }

    if (!this.isMobile && wasMobile) {
      this.stopTitleAnimation();
    }

    if (this.isMobile && !this.titleInterval) {
      this.startTitleAnimation();
    }
  }

  startTitleAnimation() {
    this.isTitleGreen = true;

    this.titleInterval = setInterval(() => {
      if (this.isTitleGreen) {
        this.isTitleGreen = false;
        setTimeout(() => {
          this.isTitleGreen = true;
        }, 1000);
      }
    }, 1500);
  }

  stopTitleAnimation() {
    if (this.titleInterval) {
      clearInterval(this.titleInterval);
      this.titleInterval = null;
    }
    this.isTitleGreen = false;
  }
}
