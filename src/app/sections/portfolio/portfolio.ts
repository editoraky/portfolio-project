/**
 * @fileoverview Portfolio component that displays project showcases with responsive behavior.
 * Handles mobile-specific title animations and screen size detection.
 */

import { Component, OnInit, OnDestroy, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../core/services/language.service';

/**
 * Portfolio component responsible for displaying the portfolio section.
 * Implements responsive design with mobile-specific title color animations.
 *
 * @example
 * <app-portfolio></app-portfolio>
 */
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class PortfolioComponent implements OnInit, OnDestroy {
  /** @private Language service instance for internationalization */
  private languageService = inject(LanguageService);

  /** Reactive texts object containing all translated strings */
  texts = this.languageService.texts;

  /** Flag indicating whether the title should display in green color */
  isTitleGreen = false;

  /** Flag indicating whether the current viewport is mobile-sized (<=768px) */
  isMobile = false;

  /** @private Interval reference for the title animation timer */
  private titleInterval: any;

  /**
   * Lifecycle hook that initializes the component.
   * Performs initial screen size check on component load.
   */
  ngOnInit() {
    this.checkScreenSize();
  }

  /**
   * Lifecycle hook that cleans up the component.
   * Clears the title animation interval to prevent memory leaks.
   */
  ngOnDestroy() {
    if (this.titleInterval) {
      clearInterval(this.titleInterval);
    }
  }

  /**
   * Host listener that responds to window resize events.
   * Triggers screen size recalculation when the browser window is resized.
   */
  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  /**
   * Checks the current screen size and manages mobile state transitions.
   * Starts or stops the title animation based on whether the device is mobile.
   * Mobile breakpoint is set at 768px width.
   */
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

  /**
   * Starts the title color animation for mobile devices.
   * Creates a pulsing effect by toggling the title color between green and default.
   * Animation cycle: green for 1.5s, then default for 1s, repeating every 2.5s.
   */
  startTitleAnimation() {
    this.isTitleGreen = true;

    this.titleInterval = setInterval(() => {
      if (this.isTitleGreen) {
        this.isTitleGreen = false;
        setTimeout(() => {
          this.isTitleGreen = true;
        }, 1000);
      }
    }, 2500);
  }

  /**
   * Stops the title color animation.
   * Clears the animation interval and resets the title color to default state.
   */
  stopTitleAnimation() {
    if (this.titleInterval) {
      clearInterval(this.titleInterval);
      this.titleInterval = null;
    }
    this.isTitleGreen = false;
  }
}