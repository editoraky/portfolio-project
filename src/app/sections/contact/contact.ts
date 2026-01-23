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
  private languageService = inject(LanguageService);
  texts = this.languageService.texts;

  formData = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };
  nameError = false;
  emailError = false;
  messageError = false;
  privacyError = false;
  nameSuccess = false;
  emailSuccess = false;
  messageSuccess = false;
  privacyHover = false;
  showSuccessModal = false;
  isSubmitting = false;
  isMobile: boolean = false;
  get isFormValid(): boolean {
    return this.nameSuccess && this.emailSuccess && this.messageSuccess && this.formData.privacy;
  }
  get contactTitle(): string {
    const t = this.texts();
    return this.isMobile ? t.contact.titleMobile : t.contact.title;
  }
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

  onFocus(field: string) {}

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

  async onSubmit() {
    this.validateName();
    this.validateEmail();
    this.validateMessage();
    this.privacyError = !this.formData.privacy;

    if (this.isFormValid) {
      this.isSubmitting = true;
      await this.sendEmail();
    }
  }

  async sendEmail() {
    try {
      const response = await fetch('send-mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.formData),
      });
      if (response.ok) {
        this.showSuccessModal = true;
        this.resetForm();
      }
    } catch (error) {
      console.error('Error:', error);
    }
    this.isSubmitting = false;
  }

  closeModal() {
    this.showSuccessModal = false;
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
