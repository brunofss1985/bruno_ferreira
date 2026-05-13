import { AfterViewInit, Directive, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Directive({
  selector: '[appPortfolioScrollEffects]',
  standalone: true
})
export class PortfolioScrollEffectsDirective implements AfterViewInit, OnDestroy {
  private bgTween?: gsap.core.Tween;
  private textTween?: gsap.core.Tween;
  private aboutRevealTween?: gsap.core.Tween;

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const hero = document.getElementById('home');
    const bg = document.querySelector('.hero-parallax-bg');
    const aboutSection = document.getElementById('sobre');

    if (hero && bg) {
      this.bgTween = gsap.fromTo(
        bg,
        { yPercent: 0 },
        {
          yPercent: 40,
          ease: 'none',
          scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        }
      );
    }

    const aboutItems = gsap.utils.toArray<HTMLElement>('#sobre .about-animate');

    if (aboutSection && aboutItems.length > 0) {
      this.aboutRevealTween = gsap.fromTo(
        aboutItems,
        { autoAlpha: 0, y: 26 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.72,
          ease: 'power2.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: aboutSection,
            start: 'top 72%',
            once: true
          }
        }
      );
    }
  }

  ngOnDestroy(): void {
    this.aboutRevealTween?.scrollTrigger?.kill();
    this.bgTween?.scrollTrigger?.kill();
    this.textTween?.scrollTrigger?.kill();
    this.aboutRevealTween?.kill();
    this.bgTween?.kill();
    this.textTween?.kill();
  }
}
