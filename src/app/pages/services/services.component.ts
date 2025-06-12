import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="services-page">
      <div class="container">
        <div class="page-header text-center mb-8">
          <h1 class="page-title fade-in">Nos Services</h1>
          <p class="page-description fade-in">
            Des solutions complètes pour tous vos besoins digitaux
          </p>
        </div>

        <div class="services-grid">
          <div class="service-card card fade-in" *ngFor="let service of services">
            <div class="service-header">
              <div class="service-icon">{{ service.icon }}</div>
              <h3 class="service-title">{{ service.title }}</h3>
            </div>
            <p class="service-description">{{ service.description }}</p>
            <ul class="service-features">
              <li *ngFor="let feature of service.features">{{ feature }}</li>
            </ul>
            <div class="service-price">
              <span class="price">{{ service.price }}</span>
            </div>
          </div>
        </div>

        <div class="cta-section text-center mt-8">
          <h2 class="cta-title">Besoin d'un service personnalisé ?</h2>
          <p class="cta-description">
            Contactez-nous pour discuter de vos besoins spécifiques
          </p>
          <a href="/contact" class="btn btn-primary">
            Demander un devis
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .services-page {
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

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin: 3rem 0;
    }

    .service-card {
      padding: 2rem;
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border: 2px solid transparent;

      &:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-lg);
        border-color: var(--primary-color);
      }
    }

    .service-header {
      margin-bottom: 1.5rem;
    }

    .service-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .service-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    .service-description {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .service-features {
      list-style: none;
      margin-bottom: 2rem;
      text-align: left;

      li {
        padding: 0.5rem 0;
        color: var(--text-secondary);
        position: relative;
        padding-left: 1.5rem;

        &::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--success-color);
          font-weight: bold;
        }
      }
    }

    .service-price {
      border-top: 1px solid var(--border-color);
      padding-top: 1.5rem;
    }

    .price {
      font-size: 2rem;
      font-weight: 700;
      color: var(--primary-color);
    }

    .cta-section {
      background: var(--background-color);
      padding: 3rem 2rem;
      border-radius: 1rem;
      margin-top: 4rem;
    }

    .cta-title {
      font-size: 2rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    .cta-description {
      font-size: 1.125rem;
      color: var(--text-secondary);
      margin-bottom: 2rem;
    }

    @media (max-width: 768px) {
      .page-title {
        font-size: 2rem;
      }

      .services-grid {
        grid-template-columns: 1fr;
      }

      .cta-title {
        font-size: 1.5rem;
      }
    }
  `]
})
export class ServicesComponent {
  services = [
    {
      icon: '🌐',
      title: 'Développement Web',
      description: 'Création de sites web modernes et performants avec les dernières technologies.',
      features: [
        'Sites web responsives',
        'Applications web progressives',
        'E-commerce',
        'CMS personnalisés'
      ],
      price: 'À partir de 1500€'
    },
    {
      icon: '📱',
      title: 'Applications Mobile',
      description: 'Développement d\'applications mobiles natives et hybrides pour iOS et Android.',
      features: [
        'Applications natives',
        'Applications hybrides',
        'Interface utilisateur intuitive',
        'Intégration API'
      ],
      price: 'À partir de 3000€'
    },
    {
      icon: '🎨',
      title: 'Design UX/UI',
      description: 'Conception d\'interfaces utilisateur attrayantes et expériences utilisateur optimales.',
      features: [
        'Recherche utilisateur',
        'Wireframes et prototypes',
        'Design system',
        'Tests d\'utilisabilité'
      ],
      price: 'À partir de 800€'
    }
  ];
}