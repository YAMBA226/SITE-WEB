import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3 class="footer-title">MonSite</h3>
            <p class="footer-description">
              Une application Angular moderne avec un design élégant et des fonctionnalités avancées.
            </p>
          </div>
          
          <div class="footer-section">
            <h4 class="section-title">Liens rapides</h4>
            <ul class="footer-links">
              <li><a href="/" class="footer-link">Accueil</a></li>
              <li><a href="/about" class="footer-link">À propos</a></li>
              <li><a href="/services" class="footer-link">Services</a></li>
              <li><a href="/contact" class="footer-link">Contact</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4 class="section-title">Contact</h4>
            <div class="contact-info">
              <p>Email: contact@monsite.com</p>
              <p>Téléphone: +33 1 23 45 67 89</p>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} MonSite. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--text-primary);
      color: white;
      padding: 3rem 0 1rem;
      margin-top: 4rem;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .footer-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary-color);
      margin-bottom: 1rem;
    }

    .footer-description {
      color: #cbd5e1;
      line-height: 1.6;
    }

    .section-title {
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .footer-links {
      list-style: none;
    }

    .footer-link {
      color: #cbd5e1;
      text-decoration: none;
      display: block;
      padding: 0.25rem 0;
      transition: color 0.3s ease;

      &:hover {
        color: var(--primary-color);
      }
    }

    .contact-info {
      color: #cbd5e1;
      
      p {
        margin-bottom: 0.5rem;
      }
    }

    .footer-bottom {
      border-top: 1px solid #374151;
      padding-top: 1rem;
      text-align: center;
      color: #9ca3af;
    }

    @media (max-width: 768px) {
      .footer {
        padding: 2rem 0 1rem;
      }

      .footer-content {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}