import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="home-page">
      <!-- Section Hero -->
      <section class="hero">
        <div class="container">
          <div class="hero-content fade-in">
            <h1 class="hero-title">
              Bienvenue sur notre
              <span class="highlight">Site Web Angular</span>
            </h1>
            <p class="hero-description">
              Découvrez une expérience utilisateur moderne et intuitive avec notre application Angular.
              Conçue avec les dernières technologies pour offrir performance et élégance.
            </p>
            <div class="hero-actions">
              <a routerLink="/services" class="btn btn-primary">
                Découvrir nos services
              </a>
              <a routerLink="/about" class="btn btn-secondary">
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Fonctionnalités -->
      <section class="features">
        <div class="container">
          <div class="section-header text-center mb-8">
            <h2 class="section-title">Nos Fonctionnalités</h2>
            <p class="section-description">
              Des outils modernes pour une expérience exceptionnelle
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3">
            <div class="feature-card card fade-in" *ngFor="let feature of features">
              <div class="feature-icon">
                <i [class]="feature.icon"></i>
              </div>
              <h3 class="feature-title">{{ feature.title }}</h3>
              <p class="feature-description">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section CTA -->
      <section class="cta">
        <div class="container">
          <div class="cta-content text-center">
            <h2 class="cta-title">Prêt à commencer ?</h2>
            <p class="cta-description">
              Contactez-nous dès aujourd'hui pour discuter de votre projet
            </p>
            <a routerLink="/contact" class="btn btn-primary">
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 6rem 0;
      text-align: center;
    }

    .hero-title {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }

    .highlight {
      color: #fbbf24;
    }

    .hero-description {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      opacity: 0.9;
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .features {
      padding: 5rem 0;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: var(--text-primary);
    }

    .section-description {
      font-size: 1.125rem;
      color: var(--text-secondary);
      max-width: 600px;
      margin: 0 auto;
    }

    .feature-card {
      text-align: center;
      padding: 2rem;
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-lg);
      }
    }

    .feature-icon {
      width: 4rem;
      height: 4rem;
      background: var(--primary-color);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
      font-size: 1.5rem;
      color: white;
    }

    .feature-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: var(--text-primary);
    }

    .feature-description {
      color: var(--text-secondary);
      line-height: 1.6;
    }

    .cta {
      background: var(--primary-color);
      color: white;
      padding: 4rem 0;
    }

    .cta-title {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .cta-description {
      font-size: 1.125rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    @media (max-width: 768px) {
      .hero {
        padding: 4rem 0;
      }

      .hero-title {
        font-size: 2rem;
      }

      .hero-description {
        font-size: 1rem;
      }

      .hero-actions {
        flex-direction: column;
        align-items: center;
      }

      .features {
        padding: 3rem 0;
      }

      .section-title {
        font-size: 2rem;
      }
    }
  `]
})
export class HomeComponent {
  features = [
    {
      icon: '🚀',
      title: 'Performance',
      description: 'Application optimisée pour des temps de chargement ultra-rapides et une expérience fluide.'
    },
    {
      icon: '🎨',
      title: 'Design Moderne',
      description: 'Interface utilisateur élégante et intuitive, conçue selon les dernières tendances UX/UI.'
    },
    {
      icon: '📱',
      title: 'Responsive',
      description: 'Parfaitement adapté à tous les appareils : desktop, tablette et mobile.'
    }
  ];
}