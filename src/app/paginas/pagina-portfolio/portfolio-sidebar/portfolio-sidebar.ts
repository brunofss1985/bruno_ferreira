import { Component, HostListener, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ScrollNavigationService } from '../../../services/scroll-navigation.service';

@Component({
  selector: 'app-portfolio-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './portfolio-sidebar.html',
  styleUrls: ['./portfolio-sidebar.css']
})
export class PortfolioSidebarComponent implements OnInit {
  isSidebarOpen = true;
  activeSection = 'home';
  private readonly scrollNav = inject(ScrollNavigationService);
  private readonly router = inject(Router);
  private readonly sectionIds = [
    'home',
    'sobre',
    'servicos-section',
    'portfolio-section',
    'conhecimentos-section',
    'experiencia-section',
    'contact-section'
  ];

  ngOnInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const hash = window.location.hash.replace('#', '');
    if (hash) {
      this.activeSection = hash;
    }

    this.syncSidebarStateForViewport();
    requestAnimationFrame(() => this.updateActiveSectionFromScroll());
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.syncSidebarStateForViewport();
    this.updateActiveSectionFromScroll();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateActiveSectionFromScroll();
  }

  toggleSidebar(): void {
    if (!this.isMobileViewport()) {
      return;
    }

    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar(): void {
    if (!this.isMobileViewport()) {
      return;
    }

    this.isSidebarOpen = false;
  }

  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    this.scrollNav.scrollToSection(sectionId);
    this.activeSection = sectionId;
    this.router.navigate([], { fragment: sectionId });

    if (this.isMobileViewport()) {
      this.isSidebarOpen = false;
    }
  }

  private syncSidebarStateForViewport(): void {
    if (!this.isMobileViewport()) {
      this.isSidebarOpen = true;
    }
  }

  private isMobileViewport(): boolean {
    if (typeof window === 'undefined') {
      return false;
    }

    return window.matchMedia('(max-width: 52rem)').matches;
  }

  private updateActiveSectionFromScroll(): void {
    this.activeSection = this.scrollNav.getCurrentSection(this.sectionIds);
  }
}
