/**
 * @fileoverview Contact section component for the portfolio website.
 * Provides a contact form with validation and email submission functionality.
 */

import { Component, OnInit, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';

/**
 * Contact form component with real-time validation and email submission.
 * Supports responsive layout with different text for mobile/desktop views.
 */
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
  emailErrorType: 'required' | 'invalid' | null = null;
  messageError = false;
  privacyError = false;
  nameSuccess = false;
  emailSuccess = false;
  messageSuccess = false;
  privacyHover = false;
  showSuccessModal = false;
  isSubmitting = false;
  isMobile: boolean = false;

  /**
   * Checks if the entire form is valid and ready for submission.
   * @returns True when all fields pass validation and privacy is accepted
   */
  get isFormValid(): boolean {
    return this.nameSuccess && this.emailSuccess && this.messageSuccess && this.formData.privacy;
  }

  /**
   * Returns the appropriate contact section title based on screen size.
   * @returns Mobile or desktop version of the title string
   */
  get contactTitle(): string {
    const t = this.texts();
    return this.isMobile ? t.contact.titleMobile : t.contact.title;
  }

  /**
   * Returns the appropriate submit button text based on screen size.
   * @returns Mobile or desktop version of the button label
   */
  get submitButtonText(): string {
    const t = this.texts();
    return this.isMobile ? t.contact.submitButtonMobile : t.contact.submitButton;
  }

  /** Initializes the component by checking the current screen size */
  ngOnInit() {
    this.checkScreenSize();
  }

  /** Recalculates screen size when the browser window is resized */
  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  /** Updates the isMobile flag based on the current viewport width */
  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
  }

  /**
   * Handles hover state for the privacy checkbox (desktop only).
   * @param isHovering - Whether the mouse is currently over the checkbox
   */
  onCheckboxHover(isHovering: boolean) {
    if (!this.isMobile) {
      this.privacyHover = isHovering;
    }
  }

  /**
   * Placeholder for future focus behavior on form fields.
   * @param field - The name of the focused field
   */
  onFocus(field: string) {}

  /**
   * Validates the specified field when it loses focus.
   * @param field - The field name to validate ('name', 'email', or 'message')
   */
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

  /** Validates the name field — sets error if empty, success if filled */
  validateName() {
    if (this.formData.name.trim() === '') {
      this.nameError = true;
      this.nameSuccess = false;
    } else {
      this.nameError = false;
      this.nameSuccess = true;
    }
  }

  /**
   * Validates email format using regex pattern.
   * Sets appropriate error type for required or invalid format.
   */
  validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = this.formData.email.trim();
    if (email === '') {
      this.emailError = true;
      this.emailErrorType = 'required';
      this.emailSuccess = false;
    } else if (!emailRegex.test(email)) {
      this.emailError = true;
      this.emailErrorType = 'invalid';
      this.emailSuccess = false;
    } else {
      this.emailError = false;
      this.emailErrorType = null;
      this.emailSuccess = true;
    }
  }

  /** Validates the message field — sets error if empty, success if filled */
  validateMessage() {
    if (this.formData.message.trim() === '') {
      this.messageError = true;
      this.messageSuccess = false;
    } else {
      this.messageError = false;
      this.messageSuccess = true;
    }
  }

  /** Toggles the privacy checkbox state and clears its error */
  togglePrivacy() {
    this.formData.privacy = !this.formData.privacy;
    this.privacyError = false;
  }

  /**
   * Handles form submission after validating all fields.
   * Sends email if form is valid.
   */
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

  /**
   * Sends form data to backend PHP script.
   * Shows success modal and resets form on successful submission.
   */
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

  /** Hides the success modal after the user acknowledges it */
  closeModal() {
    this.showSuccessModal = false;
  }

  /** Resets all form fields to empty values and clears success states */
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