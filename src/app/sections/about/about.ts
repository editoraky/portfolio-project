import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent implements OnInit, OnDestroy {
  
  isTitleGreen = false;
  isFrameVisible = false;
  isMobile = false;
  
  private titleInterval: any;
  private frameInterval: any;

  ngOnInit() {
    this.checkScreenSize();
  }

  ngOnDestroy() {
    if (this.titleInterval) {
      clearInterval(this.titleInterval);
    }
    if (this.frameInterval) {
      clearInterval(this.frameInterval);
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    const wasMobile = this.isMobile;
    this.isMobile = window.innerWidth <= 768;

    // Mobile'a geçince animasyonları başlat
    if (this.isMobile && !wasMobile) {
      this.startTitleAnimation();
      this.startFrameAnimation();
    }
    
    // Desktop'a geçince animasyonları durdur
    if (!this.isMobile && wasMobile) {
      this.stopTitleAnimation();
      this.stopFrameAnimation();
    }

    // İlk yüklemede mobile ise animasyonları başlat
    if (this.isMobile && !wasMobile && !this.titleInterval) {
      this.startTitleAnimation();
      this.startFrameAnimation();
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

  stopFrameAnimation() {
    if (this.frameInterval) {
      clearInterval(this.frameInterval);
      this.frameInterval = null;
    }
    this.isFrameVisible = false;
  }
}