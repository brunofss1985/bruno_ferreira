import { AfterViewInit, Component, Inject, Input, OnDestroy, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface ProjectItem {
  title: string;
  category: string;
  image: string;
  highlight: string;
}

@Component({
  selector: 'app-site-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './site-projects.html',
  styleUrl: './site-projects.css'
})
export class SiteProjectsComponent implements AfterViewInit, OnDestroy {
  @Input() projectItems: ProjectItem[] = [];
  currentSlide = 0;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  private readonly onResize = (): void => {
    this.currentSlide = Math.min(this.currentSlide, this.getMaxSlides());
    this.updateCarousel();
  };

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      window.addEventListener('resize', this.onResize);
      this.updateCarousel();
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      window.removeEventListener('resize', this.onResize);
    }
  }

  prevSlide(): void {
    this.currentSlide = Math.max(0, this.currentSlide - 1);
    this.updateCarousel();
  }

  nextSlide(): void {
    const maxSlides = this.getMaxSlides();
    this.currentSlide = Math.min(maxSlides, this.currentSlide + 1);
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
    const track = document.querySelector('.projects-track') as HTMLElement;
    if (track) {
      const cardWidth = (document.querySelector('.projects-card') as HTMLElement)?.offsetWidth || 0;
      const gapValue = getComputedStyle(track).columnGap || getComputedStyle(track).gap || '0px';
      const gap = Number.parseFloat(gapValue) || 0;
      const translateX = -(this.currentSlide * (cardWidth + gap));
      track.style.transform = `translateX(${translateX}px)`;
    }

    this.updateFeaturedCardState();
  }

  private updateFeaturedCardState(): void {
    const cards = document.querySelectorAll('.projects-card');
    const featuredIndex = this.getFeaturedIndex();

    cards.forEach((card, index) => {
      card.classList.toggle('projects-card-featured', index === featuredIndex);
    });
  }

  private getVisibleCards(): number {
    if (!this.isBrowser) {
      return 3;
    }

    const viewportEl = document.querySelector('.projects-viewport') as HTMLElement | null;
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
    return Math.max(0, this.projectItems.length - this.getVisibleCards());
  }

  private getFeaturedIndex(): number {
    if (this.getVisibleCards() < 3) {
      return -1;
    }

    return this.currentSlide + Math.floor(this.getVisibleCards() / 2);
  }
}
