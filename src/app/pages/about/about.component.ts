import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-page">
      <div class="container">
        <div class="page-header text-center mb-8">
          <h1 class="page-title fade-in">À propos de nous</h1>
          <p class="page-description fade-in">
            Découvrez notre histoire, notre mission et nos valeurs
          </p>
        </div>

        <div class="content-section">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="content-text fade-in">
              <h2 class="content-title">Notre Mission</h2>
              <p class="content-paragraph">
                Nous nous engageons à créer des solutions web innovantes qui transforment 
                la façon dont les entreprises interagissent avec leurs clients. Notre équipe 
                passionnée combine créativité et expertise technique pour livrer des expériences 
                digitales exceptionnelles.
              </p>
              <p class="content-paragraph">
                Depuis notre création, nous avons aidé de nombreuses entreprises à atteindre 
                leurs objectifs grâce à des technologies modernes et des approches centrées 
                sur l'utilisateur.
              </p>
            </div>
            
            <div class="image-placeholder fade-in">
              <div class="placeholder-content">
                <span>Image à venir</span>
              </div>
            </div>
          </div>
        </div>

        <div class="values-section mt-8">
          <h2 class="section-title text-center mb-8">Nos Valeurs</h2>
          <div class="grid grid-cols-1 md:grid-cols-3">
            <div class="value-card card fade-in" *ngFor="let value of values">
              <div class="value-icon">{{ value.icon }}</div>
              <h3 class="value-title">{{ value.title }}</h3>
              <p class="value-description">{{ value.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .about-page {
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

    .content-section {
      margin: 4rem 0;
    }

    .content-title {
      font-size: 2rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 1.5rem;
    }

    .content-paragraph {
      font-size: 1.125rem;
      line-height: 1.7;
      color: var(--text-secondary);
      margin-bottom: 1.5rem;
    }

    .image-placeholder {
      background: var(--border-color);
      border-radius: 0.75rem;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .placeholder-content {
      color: var(--text-secondary);
      font-style: italic;
    }

    .values-section {
      padding: 3rem 0;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--text-primary);
    }

    .value-card {
      text-align: center;
      padding: 2rem;
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }
    }

    .value-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .value-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    .value-description {
      color: var(--text-secondary);
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .page-title {
        font-size: 2rem;
      }

      .content-title {
        font-size: 1.5rem;
      }

      .section-title {
        font-size: 2rem;
      }
    }
  `]
})
export class AboutComponent {
  values = [
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Nous restons à la pointe des technologies pour offrir des solutions avant-gardistes.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins.'
    },
    {
      icon: '⭐',
      title: 'Excellence',
      description: 'Nous nous efforçons de dépasser les attentes dans chaque projet que nous entreprenons.'
    }
  ];
}