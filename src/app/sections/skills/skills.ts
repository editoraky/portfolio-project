/**
 * @fileoverview Skills component that displays technical skills and competencies.
 * Features responsive behavior with mobile-specific animations and intersection observer for scroll effects.
 */

import { Component, OnInit, OnDestroy, HostListener, inject, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../core/services/language.service';

/**
 * Skills component responsible for displaying the developer's technical skills section.
 * Implements responsive design with mobile-specific title animations and
 * scroll-triggered arrow animations using IntersectionObserver.
 *
 * @example
 * <app-skills></app-skills>
 */
@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent implements OnInit, OnDestroy, AfterViewInit {
  /** @private Language service instance for internationalization */
  private languageService = inject(LanguageService);

  /** @private ElementRef for accessing native DOM elements */
  private elementRef = inject(ElementRef);

  /** Reactive texts object containing all translated strings */
  texts = this.languageService.texts;

  /** Flag indicating whether the title should display in green color */
  isTitleGreen = false;

  /** Flag indicating whether the current viewport is mobile-sized (<=768px) */
  isMobile = false;

  /** Flag indicating whether the arrow animation has been triggered */
  arrowAnimated = false;

  /** @private Interval reference for the title animation timer */
  private titleInterval: any;

  /** @private IntersectionObserver instance for detecting arrow element visibility */
  private arrowObserver: IntersectionObserver | null = null;

  /**
   * Lifecycle hook that initializes the component.
   * Performs initial screen size check on component load.
   */
  ngOnInit() {
    this.checkScreenSize();
  }

  /**
   * Lifecycle hook called after the view has been initialized.
   * Sets up the arrow observer if the device is mobile.
   */
  ngAfterViewInit() {
    if (this.isMobile) {
      this.setupArrowObserver();
    }
  }

  /**
   * Lifecycle hook that cleans up the component.
   * Clears the title animation interval and disconnects the intersection observer
   * to prevent memory leaks.
   */
  ngOnDestroy() {
    if (this.titleInterval) {
      clearInterval(this.titleInterval);
    }
    if (this.arrowObserver) {
      this.arrowObserver.disconnect();
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
   * Handles starting/stopping title animation and arrow observer based on device type.
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

    
    if (this.isMobile && !this.arrowObserver) {
      this.setupArrowObserver();
    }
    if (!this.isMobile && this.arrowObserver) {
      this.arrowObserver.disconnect();
      this.arrowObserver = null;
      this.arrowAnimated = false;
    }
  }

  /**
   * Starts the title color animation for mobile devices.
   * Creates a pulsing effect by toggling the title color between green and default.
   * Animation cycle: green for 2s, then default for 1s, repeating every 3s.
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
    }, 3000);
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

  /**
   * Sets up an IntersectionObserver to detect when the arrow element enters the viewport.
   * Triggers the arrow animation once when 50% of the element is visible.
   * Only activates on mobile devices.
   */
  setupArrowObserver() {
    const arrowElement = this.elementRef.nativeElement.querySelector('.skills__arrow');

    if (arrowElement) {
      this.arrowObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.arrowAnimated) {
            this.arrowAnimated = true;
          }
        });
      }, { threshold: 0.5 });

      this.arrowObserver.observe(arrowElement);
    }
  }

  /**
 * Handles arrow click navigation with smooth scroll behavior.
 * Prevents default anchor behavior and scrolls to the target section.
 * @param event - The click event
 * @param targetId - The target section ID to scroll to (e.g. '#portfolio')
 */
onArrowClick(event: Event, targetId: string): void {
  event.preventDefault();
  const target = document.querySelector(targetId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}
}