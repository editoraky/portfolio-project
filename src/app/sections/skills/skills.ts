import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent implements OnInit, OnDestroy {
  
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
    }, 3000);
  }

  stopTitleAnimation() {
    if (this.titleInterval) {
      clearInterval(this.titleInterval);
      this.titleInterval = null;
    }
    this.isTitleGreen = false;
  }
}