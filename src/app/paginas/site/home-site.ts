import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteFeaturesComponent } from './features/site-features';
import { SiteFooterComponent } from './footer/site-footer';
import { SiteHeaderComponent } from './header/site-header';
import { SiteHeroComponent } from './hero/site-hero';
import { SitePortfolioComponent } from './portfolio/site-portfolio';
import { SiteTableComponent } from './table/site-table';

@Component({
  selector: 'app-home-site',
  imports: [
    CommonModule,
    SiteHeaderComponent,
    SiteHeroComponent,
    SiteFeaturesComponent,
    SitePortfolioComponent,
    SiteTableComponent,
    SiteFooterComponent
  ],
  templateUrl: './home-site.html',
  styleUrl: './home-site.css'
})
export class HomeSiteComponent {
  protected readonly whatsappUrl = 'https://wa.me/5500000000000?text=Ol%C3%A1%2C%20quero%20solicitar%20um%20or%C3%A7amento.';

  portfolioItems = [
    {
      title: 'E-commerce Fashion',
      category: 'Web App SaaS',
      image: 'https://images.unsplash.com/photo-1661956601348-fea92036ad16?w=600&h=400&fit=crop',
      highlight: '+340% vendas em 6 meses'
    },
    {
      title: 'Agência Digital',
      category: 'Site Institucional',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      highlight: 'Gerador de leads de sucesso'
    },
    {
      title: 'SaaS Fintech',
      category: 'Web App MVP',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=600&h=400&fit=crop',
      highlight: '50K+ usuários ativos'
    },
    {
      title: 'Clínica Odontológica',
      category: 'Landing Page Avançada',
      image: 'https://images.unsplash.com/photo-1606811841689-23cc3ee582fa?w=600&h=400&fit=crop',
      highlight: '120 agendamentos/mês'
    },
    {
      title: 'Startup EdTech',
      category: 'Web App SaaS',
      image: 'https://images.unsplash.com/photo-1516534775068-bb57e5155714?w=600&h=400&fit=crop',
      highlight: '1M+ horas de aprendizado'
    }
  ];

}
