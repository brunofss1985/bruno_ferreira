import { Component } from '@angular/core';
import { SecaoHeroComponent } from './secao-hero/secao-hero';
import { SecaoSobreComponent } from './secao-sobre/secao-sobre';
import { SecaoServicosComponent } from './secao-servicos/secao-servicos';
import { SecaoPortfolioComponent } from './secao-portfolio/secao-portfolio';
import { SecaoResumoComponent } from './secao-resumo/secao-resumo';
import { SecaoConhecimentosComponent } from './secao-conhecimentos/secao-conhecimentos';
import { SecaoContatosComponent } from './secao-contatos/secao-contatos';
import { SecaoRodapeComponent } from './secao-rodape/secao-rodape';
import { PortfolioSidebarComponent } from './portfolio-sidebar/portfolio-sidebar';
import { PortfolioScrollEffectsDirective } from './portfolio-scroll-effects';

@Component({
  selector: 'app-pagina-portfolio',
  standalone: true,
  imports: [
    PortfolioSidebarComponent,
    PortfolioScrollEffectsDirective,
    SecaoHeroComponent,
    SecaoSobreComponent,
    SecaoServicosComponent,
    SecaoPortfolioComponent,
    SecaoResumoComponent,
    SecaoConhecimentosComponent,
    SecaoContatosComponent,
    SecaoRodapeComponent
  ],
  templateUrl: './pagina_portfolio.html',
  styleUrl: './pagina_portfolio.css'
})
export class PaginaPortfolioComponent {}
