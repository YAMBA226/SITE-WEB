import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="contact-page">
      <div class="container">
        <div class="page-header text-center mb-8">
          <h1 class="page-title fade-in">Contactez-nous</h1>
          <p class="page-description fade-in">
            Nous sommes là pour répondre à toutes vos questions
          </p>
        </div>

        <div class="contact-content">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <!-- Formulaire de contact -->
            <div class="contact-form-section fade-in">
              <div class="card">
                <h2 class="form-title">Envoyez-nous un message</h2>
                <form (ngSubmit)="onSubmit()" #contactForm="ngForm" class="contact-form">
                  <div class="form-group">
                    <label for="name" class="form-label">Nom complet</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      [(ngModel)]="formData.name"
                      required
                      class="form-input"
                      placeholder="Votre nom complet"
                    >
                  </div>

                  <div class="form-group">
                    <label for="email" class="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      [(ngModel)]="formData.email"
                      required
                      class="form-input"
                      placeholder="votre@email.com"
                    >
                  </div>

                  <div class="form-group">
                    <label for="subject" class="form-label">Sujet</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      [(ngModel)]="formData.subject"
                      required
                      class="form-input"
                      placeholder="Sujet de votre message"
                    >
                  </div>

                  <div class="form-group">
                    <label for="message" class="form-label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      [(ngModel)]="formData.message"
                      required
                      rows="5"
                      class="form-textarea"
                      placeholder="Votre message..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    [disabled]="!contactForm.form.valid || isSubmitting"
                    class="btn btn-primary submit-btn"
                  >
                    {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
                  </button>
                </form>

                <div *ngIf="submitMessage" class="submit-message" [class.success]="submitSuccess">
                  {{ submitMessage }}
                </div>
              </div>
            </div>

            <!-- Informations de contact -->
            <div class="contact-info-section fade-in">
              <div class="contact-info">
                <h2 class="info-title">Nos coordonnées</h2>
                
                <div class="info-item" *ngFor="let info of contactInfo">
                  <div class="info-icon">{{ info.icon }}</div>
                  <div class="info-content">
                    <h3 class="info-label">{{ info.label }}</h3>
                    <p class="info-value">{{ info.value }}</p>
                  </div>
                </div>
              </div>

              <div class="business-hours">
                <h3 class="hours-title">Horaires d'ouverture</h3>
                <div class="hours-list">
                  <div class="hours-item" *ngFor="let hour of businessHours">
                    <span class="day">{{ hour.day }}</span>
                    <span class="time">{{ hour.time }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .contact-page {
      padding: 2rem 0 4rem;
    }

    .page-title {
      font-size: 3rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    .page-description {
      font-size: 1.25rem;
      color: var(--text-secondary);
      max-width: 600px;
      margin: 0 auto;
    }

    .contact-content {
      margin-top: 3rem;
    }

    .form-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 2rem;
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
    }

    .form-label {
      font-weight: 500;
      color: var(--text-primary);
      margin-bottom: 0.5rem;
    }

    .form-input,
    .form-textarea {
      padding: 0.75rem;
      border: 1px solid var(--border-color);
      border-radius: 0.5rem;
      font-size: 1rem;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;

      &:focus {
        outline: none;
        border-color: var(--primary-color);
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
      }
    }

    .form-textarea {
      resize: vertical;
      min-height: 120px;
    }

    .submit-btn {
      margin-top: 1rem;
      
      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }

    .submit-message {
      margin-top: 1rem;
      padding: 0.75rem;
      border-radius: 0.5rem;
      background: var(--error-color);
      color: white;
      text-align: center;

      &.success {
        background: var(--success-color);
      }
    }

    .contact-info {
      margin-bottom: 2rem;
    }

    .info-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 2rem;
    }

    .info-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .info-icon {
      font-size: 1.5rem;
      width: 2.5rem;
      height: 2.5rem;
      background: var(--primary-color);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .info-label {
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 0.25rem;
    }

    .info-value {
      color: var(--text-secondary);
    }

    .business-hours {
      background: var(--background-color);
      padding: 1.5rem;
      border-radius: 0.75rem;
    }

    .hours-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    .hours-item {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 0;
      border-bottom: 1px solid var(--border-color);

      &:last-child {
        border-bottom: none;
      }
    }

    .day {
      font-weight: 500;
      color: var(--text-primary);
    }

    .time {
      color: var(--text-secondary);
    }

    @media (max-width: 768px) {
      .page-title {
        font-size: 2rem;
      }

      .contact-content {
        margin-top: 2rem;
      }
    }
  `]
})
export class ContactComponent {
  formData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'contact@monsite.com'
    },
    {
      icon: '📞',
      label: 'Téléphone',
      value: '+33 1 23 45 67 89'
    },
    {
      icon: '📍',
      label: 'Adresse',
      value: '123 Rue de la Paix, 75001 Paris, France'
    }
  ];

  businessHours = [
    { day: 'Lundi - Vendredi', time: '9h00 - 18h00' },
    { day: 'Samedi', time: '10h00 - 16h00' },
    { day: 'Dimanche', time: 'Fermé' }
  ];

  onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.submitMessage = '';

    // Simulation d'envoi de formulaire
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.submitMessage = 'Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.';
      
      // Reset du formulaire
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };

      // Effacer le message après 5 secondes
      setTimeout(() => {
        this.submitMessage = '';
      }, 5000);
    }, 2000);
  }
}