import { Component, AfterViewInit, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-secao-portfolio',
  templateUrl: './secao-portfolio.html',
  styleUrls: ['./secao-portfolio.css'],
  standalone: true,
  imports: [CommonModule],
})
export class SecaoPortfolioComponent implements AfterViewInit, OnDestroy {
  currentSlide = 0;
  isBrowser: boolean;

  projects = [
    {
      title: 'Personal Planner - Full-stack',
      description:
        'Aplicação Full-stack para gestão e organização pessoal. Front-end com Angular 20 (Standalone Components, Signals e Control Flow), back-end com Java 21, Spring Boot e PostgreSQL, com OAuth 2.0 e integração OpenAI.',
      tech: ['Angular 20', 'Java 21', 'Spring Boot', 'PostgreSQL'],
      videoSrc: '',
      index: 0,
    },
    {
      title: 'Sistema de Gestão Clínica - React',
      description:
        'Plataforma web para rotinas médicas com agenda, inventário, atendimentos, faturamento, créditos e prescrições em PDF. Desenvolvido com Vite, React, TypeScript, Tailwind CSS, shadcn-ui e TanStack Query.',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      videoSrc: '',
      index: 1,
    },
    {
      title: 'CMV - Gestão de Mercadorias',
      description:
        'Plataforma SPA para controle e análise financeira de estoque. Evolução contínua focada em arquitetura, componentização, autenticação JWT e otimização de performance com Lazy Loading.',
      tech: ['Angular 13+', 'TypeScript', 'Material Design'],
      videoSrc: '',
      index: 2,
    },
    {
      title: 'Minha Coleta - Gestão de Resíduos',
      description:
        'Plataforma para otimizar coleta seletiva e logística reversa. Atuação no ciclo completo do front-end, com foco em usabilidade, performance, acessibilidade e integração de APIs documentadas via Swagger.',
      tech: ['Angular 13', 'Bootstrap', 'Clean Code'],
      videoSrc: '',
      index: 3,
    },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  private readonly onResize = (): void => {
    this.currentSlide = Math.min(this.currentSlide, this.getMaxSlides());
    this.updateCarousel();
  };

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.setupCarousel();
      this.setupVideoModal();
      window.addEventListener('resize', this.onResize);
      this.updateCarousel();
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      window.removeEventListener('resize', this.onResize);
    }
  }

  setupCarousel(): void {
    const prevBtn = document.querySelector('.carousel-btn-prev');
    const nextBtn = document.querySelector('.carousel-btn-next');

    prevBtn?.addEventListener('click', () => this.prevSlide());
    nextBtn?.addEventListener('click', () => this.nextSlide());
  }

  setupVideoModal(): void {
    const containers = document.querySelectorAll('.project-video-container');
    const videoModal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video') as HTMLVideoElement;

    containers.forEach((container, index) => {
      container.addEventListener('click', () => {
        const selectedSrc = this.projects[index].videoSrc;

        if (selectedSrc) {
          modalVideo.src = selectedSrc;
          modalVideo.play();
        } else {
          modalVideo.removeAttribute('src');
          modalVideo.load();
        }

        videoModal!.style.display = 'flex';
      });
    });

    videoModal?.addEventListener('click', (e) => {
      if (e.target === videoModal) {
        videoModal.style.display = 'none';
        modalVideo.pause();
        modalVideo.currentTime = 0;
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && videoModal?.style.display === 'flex') {
        videoModal.style.display = 'none';
        modalVideo.pause();
        modalVideo.currentTime = 0;
      }
    });
  }

  prevSlide(): void {
    const step = this.getVisibleCards();
    this.currentSlide = Math.max(0, this.currentSlide - step);
    this.updateCarousel();
  }

  nextSlide(): void {
    const step = this.getVisibleCards();
    const maxSlides = this.getMaxSlides();
    this.currentSlide = Math.min(maxSlides, this.currentSlide + step);
    this.updateCarousel();
  }

  goToSlide(pageIndex: number): void {
    this.currentSlide = Math.min(this.getMaxSlides(), Math.max(0, pageIndex));
    this.updateCarousel();
  }

  getPaginationIndexes(): number[] {
    return Array.from({ length: this.getMaxSlides() + 1 }, (_, idx) => idx);
  }

  isPaginationActive(pageIndex: number): boolean {
    return this.currentSlide === pageIndex;
  }

  isFeaturedCard(index: number): boolean {
    if (!this.isBrowser || this.getVisibleCards() < 3) {
      return false;
    }

    return index === this.currentSlide + 1;
  }

  updateCarousel(): void {
    const track = document.querySelector('.carousel-track') as HTMLElement;
    if (track) {
      const cardWidth = (document.querySelector('.project-card') as HTMLElement)?.offsetWidth || 0;
      const gapValue = getComputedStyle(track).columnGap || getComputedStyle(track).gap || '0px';
      const gap = Number.parseFloat(gapValue) || 0;
      const translateX = -(this.currentSlide * (cardWidth + gap));
      track.style.transform = `translateX(${translateX}px)`;
    }

    this.updateFeaturedCardState();
    this.updatePaginationState();
  }

  private updateFeaturedCardState(): void {
    const cards = document.querySelectorAll('.project-card');
    const featuredIndex = this.getFeaturedIndex();

    cards.forEach((card, index) => {
      card.classList.toggle('project-card-featured', index === featuredIndex);
    });
  }

  private updatePaginationState(): void {
    const dots = document.querySelectorAll('.pagination-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('is-active', index === this.currentSlide);
    });
  }

  private getVisibleCards(): number {
    if (!this.isBrowser) {
      return 3;
    }

    const viewportEl = document.querySelector('.carousel-viewport') as HTMLElement | null;
    const viewportWidth = viewportEl?.clientWidth ?? window.innerWidth;
    if (viewportWidth <= 768) {
      return 1;
    }
    if (viewportWidth <= 1024) {
      return 2;
    }
    return 3;
  }

  private getMaxSlides(): number {
    return Math.max(0, this.projects.length - this.getVisibleCards());
  }

  private getFeaturedIndex(): number {
    if (this.getVisibleCards() < 3) {
      return -1;
    }

    return this.currentSlide + Math.floor(this.getVisibleCards() / 2);
  }
}
