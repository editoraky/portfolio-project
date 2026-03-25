/**
 * @fileoverview About section component for the portfolio website.
 * Displays personal introduction, location info, and profile image with animations.
 */

import { Component, OnInit, OnDestroy, HostListener, inject, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../core/services/language.service';

/**
 * About section component displaying personal information and profile image.
 * Features responsive animations for title, image frame, and navigation arrow.
 */
@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent implements OnInit, OnDestroy, AfterViewInit {
  private languageService = inject(LanguageService);
  private elementRef = inject(ElementRef);
  texts = this.languageService.texts;

  isTitleGreen = false;
  isFrameVisible = false;
  isMobile = false;
  arrowAnimated = false;

  private titleInterval: any;
  private frameInterval: any;
  private arrowObserver: IntersectionObserver | null = null;

  ngOnInit() {
    this.checkScreenSize();
  }

  ngAfterViewInit() {
    if (this.isMobile) {
      this.setupArrowObserver();
    }
  }

  /**
   * Cleans up all intervals and observers on component destruction.
   */
  ngOnDestroy() {
    if (this.titleInterval) {
      clearInterval(this.titleInterval);
    }
    if (this.frameInterval) {
      clearInterval(this.frameInterval);
    }
    if (this.arrowObserver) {
      this.arrowObserver.disconnect();
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  /**
   * Checks screen size and manages mobile-specific animations.
   * Starts animations when entering mobile view, stops when leaving.
   */
  checkScreenSize() {
    const wasMobile = this.isMobile;
    this.isMobile = window.innerWidth <= 768;

    if (this.isMobile && !wasMobile) {
      this.startTitleAnimation();
      this.startFrameAnimation();
    }

    if (!this.isMobile && wasMobile) {
      this.stopTitleAnimation();
      this.stopFrameAnimation();
    }

    if (this.isMobile && !wasMobile && !this.titleInterval) {
      this.startTitleAnimation();
      this.startFrameAnimation();
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
   * Starts the title color alternating animation.
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
    }, 1500);
  }

  /**
   * Stops the title animation and resets to default color.
   */
  stopTitleAnimation() {
    if (this.titleInterval) {
      clearInterval(this.titleInterval);
      this.titleInterval = null;
    }
    this.isTitleGreen = false;
  }

  /**
   * Starts the image frame visibility animation.
   */
  startFrameAnimation() {
    this.isFrameVisible = true;

    this.frameInterval = setInterval(() => {
      if (this.isFrameVisible) {
        this.isFrameVisible = false;
        setTimeout(() => {
          this.isFrameVisible = true;
        }, 1000);
      }
    }, 1500);
  }

  /**
   * Stops the frame animation and hides the frame.
   */
  stopFrameAnimation() {
    if (this.frameInterval) {
      clearInterval(this.frameInterval);
      this.frameInterval = null;
    }
    this.isFrameVisible = false;
  }

  /**
   * Sets up Intersection Observer to trigger arrow animation on scroll.
   * Animation triggers once when arrow becomes 50% visible in viewport.
   */
  setupArrowObserver() {
    const arrowElement = this.elementRef.nativeElement.querySelector('.about__arrow');

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
  * @param targetId - The target section ID to scroll to (e.g. '#skills')
  */
onArrowClick(event: Event, targetId: string): void {
  event.preventDefault();
  const target = document.querySelector(targetId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}
}