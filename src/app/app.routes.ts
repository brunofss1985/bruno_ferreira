import { Routes } from '@angular/router';
import { PaginaInicialComponent } from './paginas/pagina-inicial/pagina-inicial';

export const routes: Routes = [
	{ path: '', component: PaginaInicialComponent },
	{ path: 'portfolio', loadComponent: () => import('./paginas/pagina-portfolio/pagina-portfolio').then((m) => m.PaginaPortfolioComponent) },
	{ path: 'sites', loadComponent: () => import('./paginas/site/home-site').then((m) => m.HomeSiteComponent) },
	{ path: '**', redirectTo: '' },
];
