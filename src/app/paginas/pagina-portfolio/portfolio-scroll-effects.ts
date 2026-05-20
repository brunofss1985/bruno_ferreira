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
  private aboutCurtainTrigger?: ScrollTrigger;
  private servicesTween?: gsap.core.Tween;
  private servicesTrigger?: ScrollTrigger;
  private servicesMedia?: gsap.MatchMedia;

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const hero = document.getElementById('home');
    const bg = document.querySelector('.hero-parallax-bg');
    const aboutSection = document.getElementById('sobre');
    const aboutCard = document.querySelector<HTMLElement>('#sobre .about-inner');
    const servicesSection = document.getElementById('servicos-section');
    const serviceCards = gsap.utils.toArray<HTMLElement>('#servicos-section .service-card');

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

    if (aboutSection && aboutCard) {
      this.aboutCurtainTrigger = ScrollTrigger.create({
        trigger: aboutSection,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          aboutCard.classList.toggle('is-revealed', self.progress >= 0.4);
        },
        onLeave: () => {
          aboutCard.classList.remove('is-revealed');
        },
        onLeaveBack: () => {
          aboutCard.classList.remove('is-revealed');
        }
      });
    }

    if (servicesSection && serviceCards.length > 0) {
      this.servicesMedia = gsap.matchMedia();

      this.servicesMedia.add('(min-width: 64.001rem)', () => {
        gsap.set(serviceCards, {
          autoAlpha: 0,
          x: (index) => (index % 2 === 0 ? -80 : 80)
        });

        this.servicesTween = gsap.to(serviceCards, {
          autoAlpha: 1,
          x: 0,
          duration: 0.45,
          ease: 'power2.out',
          stagger: 0.08,
          paused: true
        });

        this.servicesTrigger = ScrollTrigger.create({
          trigger: servicesSection,
          start: 'top bottom',
          end: 'bottom top',
          onUpdate: (self) => {
            if (self.progress >= 0.4) {
              this.servicesTween?.play();
            } else {
              this.servicesTween?.reverse();
            }
          }
        });

        return () => {
          this.servicesTrigger?.kill();
          this.servicesTrigger = undefined;
          this.servicesTween?.kill();
          this.servicesTween = undefined;
        };
      });

      this.servicesMedia.add('(max-width: 64rem)', () => {
        gsap.set(serviceCards, {
          autoAlpha: 0,
          x: (index) => (index < 2 ? -80 : 80)
        });

        this.servicesTween = gsap.to(serviceCards, {
          autoAlpha: 1,
          x: 0,
          duration: 0.45,
          ease: 'power2.out',
          stagger: 0.08,
          paused: true
        });

        this.servicesTrigger = ScrollTrigger.create({
          trigger: servicesSection,
          start: 'top bottom',
          end: 'bottom top',
          onUpdate: (self) => {
            if (self.progress >= 0.4) {
              this.servicesTween?.play();
            } else {
              this.servicesTween?.reverse();
            }
          }
        });

        return () => {
          this.servicesTrigger?.kill();
          this.servicesTrigger = undefined;
          this.servicesTween?.kill();
          this.servicesTween = undefined;
        };
      });
    }
  }

  ngOnDestroy(): void {
    this.aboutRevealTween?.scrollTrigger?.kill();
    this.aboutCurtainTrigger?.kill();
    this.servicesTrigger?.kill();
    this.bgTween?.scrollTrigger?.kill();
    this.textTween?.scrollTrigger?.kill();
    this.aboutRevealTween?.kill();
    this.servicesTween?.kill();
    this.servicesMedia?.revert();
    this.bgTween?.kill();
    this.textTween?.kill();
  }
}
