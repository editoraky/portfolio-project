import { Component, OnInit, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent implements OnInit {
  // Übersetzungsservice injizieren
  private languageService = inject(LanguageService);

  // Texte in aktueller Sprache (Signal)
  texts = this.languageService.texts;

  formData = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };

  // Error states
  nameError = false;
  emailError = false;
  messageError = false;
  privacyError = false;

  // Success states
  nameSuccess = false;
  emailSuccess = false;
  messageSuccess = false;

  // Hover states
  privacyHover = false;

  // Mobile detection
  isMobile: boolean = false;

  // Form geçerliliği kontrolü
  get isFormValid(): boolean {
    return this.nameSuccess && this.emailSuccess && this.messageSuccess && this.formData.privacy;
  }

  // Dynamischer Titel (Desktop/Mobile)
  get contactTitle(): string {
    const t = this.texts();
    return this.isMobile ? t.contact.titleMobile : t.contact.title;
  }

  // Dynamischer Button-Text (Desktop/Mobile)
  get submitButtonText(): string {
    const t = this.texts();
    return this.isMobile ? t.contact.submitButtonMobile : t.contact.submitButton;
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
  }

  onCheckboxHover(isHovering: boolean) {
    if (!this.isMobile) {
      this.privacyHover = isHovering;
    }
  }

  onFocus(field: string) {
    // Focus logic
  }

  onBlur(field: string) {
    switch (field) {
      case 'name':
        this.validateName();
        break;
      case 'email':
        this.validateEmail();
        break;
      case 'message':
        this.validateMessage();
        break;
    }
  }

  validateName() {
    if (this.formData.name.trim() === '') {
      this.nameError = true;
      this.nameSuccess = false;
    } else {
      this.nameError = false;
      this.nameSuccess = true;
    }
  }

  validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (this.formData.email.trim() === '' || !emailRegex.test(this.formData.email)) {
      this.emailError = true;
      this.emailSuccess = false;
    } else {
      this.emailError = false;
      this.emailSuccess = true;
    }
  }

  validateMessage() {
    if (this.formData.message.trim() === '') {
      this.messageError = true;
      this.messageSuccess = false;
    } else {
      this.messageError = false;
      this.messageSuccess = true;
    }
  }

  togglePrivacy() {
    this.formData.privacy = !this.formData.privacy;
    this.privacyError = false;
  }

  onSubmit() {
    this.validateName();
    this.validateEmail();
    this.validateMessage();
    this.privacyError = !this.formData.privacy;

    if (!this.nameError && !this.emailError && !this.messageError && !this.privacyError) {
      console.log('Form submitted:', this.formData);
      this.resetForm();
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      message: '',
      privacy: false,
    };
    this.nameSuccess = false;
    this.emailSuccess = false;
    this.messageSuccess = false;
  }
}
