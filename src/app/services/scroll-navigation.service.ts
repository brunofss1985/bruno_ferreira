import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollNavigationService {
  constructor() {
    this.initializeHashNavigation();
  }

  /**
   * Faz scroll suave para uma seção e atualiza histórico
   */
  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (!section) {
      console.warn(`Seção com id "${sectionId}" não encontrada`);
      return;
    }

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', `#${sectionId}`);
  }

  /**
   * Intercepta cliques em links com href="#..." e faz scroll automático
   */
  private initializeHashNavigation(): void {
    if (typeof document === 'undefined') return;

    document.addEventListener('click', (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest('a[href^="#"]');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const sectionId = href.slice(1); // Remove o "#"
      
      // Só interceptar se a seção existe
      if (document.getElementById(sectionId)) {
        event.preventDefault();
        this.scrollToSection(sectionId);
      }
    });
  }

  /**
   * Retorna a seção visível atualmente baseada no scroll
   */
  getCurrentSection(sectionIds: string[]): string {
    if (typeof window === 'undefined') return sectionIds[0];

    const marker = window.scrollY + window.innerHeight * 0.35;
    let currentSection = sectionIds[0];

    for (const sectionId of sectionIds) {
      const section = document.getElementById(sectionId);
      if (!section) continue;

      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (marker >= top && marker < bottom) {
        currentSection = sectionId;
        break;
      }

      if (marker >= bottom) {
        currentSection = sectionId;
      }
    }

    return currentSection;
  }
}
