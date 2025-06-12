import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="header">
      <div class="container">
        <nav class="nav">
          <div class="nav-brand">
            <a routerLink="/" class="brand-link">
              <h1 class="brand-title">MonSite</h1>
            </a>
          </div>
          
          <div class="nav-menu" [class.active]="isMenuOpen">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-link">
              Accueil
            </a>
            <a routerLink="/about" routerLinkActive="active" class="nav-link">
              À propos
            </a>
            <a routerLink="/services" routerLinkActive="active" class="nav-link">
              Services
            </a>
            <a routerLink="/contact" routerLinkActive="active" class="nav-link">
              Contact
            </a>
          </div>

          <button class="menu-toggle" (click)="toggleMenu()" [attr.aria-expanded]="isMenuOpen">
            <span class="hamburger"></span>
            <span class="hamburger"></span>
            <span class="hamburger"></span>
          </button>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--border-color);
      z-index: 1000;
      transition: all 0.3s ease;
    }

    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0;
    }

    .brand-link {
      text-decoration: none;
      color: var(--text-primary);
    }

    .brand-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary-color);
    }

    .nav-menu {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .nav-link {
      text-decoration: none;
      color: var(--text-secondary);
      font-weight: 500;
      padding: 0.5rem 0;
      position: relative;
      transition: color 0.3s ease;

      &:hover {
        color: var(--primary-color);
      }

      &.active {
        color: var(--primary-color);

        &::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--primary-color);
          border-radius: 1px;
        }
      }
    }

    .menu-toggle {
      display: none;
      flex-direction: column;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      gap: 4px;
    }

    .hamburger {
      width: 24px;
      height: 2px;
      background: var(--text-primary);
      transition: all 0.3s ease;
    }

    @media (max-width: 768px) {
      .nav-menu {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--surface-color);
        flex-direction: column;
        padding: 1rem;
        box-shadow: var(--shadow-lg);
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;

        &.active {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }
      }

      .nav-link {
        padding: 0.75rem 0;
        width: 100%;
        text-align: center;
      }

      .menu-toggle {
        display: flex;
      }
    }
  `]
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}