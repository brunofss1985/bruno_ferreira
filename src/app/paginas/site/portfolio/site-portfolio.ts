import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PortfolioItem {
  title: string;
  category: string;
  image: string;
  highlight: string;
}

@Component({
  selector: 'app-site-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './site-portfolio.html',
  styleUrl: './site-portfolio.css'
})
export class SitePortfolioComponent {
  @Input() portfolioItems: PortfolioItem[] = [];
}
