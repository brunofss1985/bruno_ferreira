import { Routes } from '@angular/router';
import { PaginaInicialComponent } from './paginas/pagina-inicial/pagina-inicial';

export const routes: Routes = [
	{ path: '', component: PaginaInicialComponent },
	{ path: 'portfolio', loadComponent: () => import('./paginas/pagina-portfolio/pagina-portfolio').then((m) => m.PaginaPortfolioComponent) },
	{ path: 'em-breve', loadComponent: () => import('./paginas/em-breve/em-breve').then((m) => m.EmBreveComponent) },
	{ path: 'sites', loadComponent: () => import('./paginas/em-breve/em-breve').then((m) => m.EmBreveComponent) },
	{ path: '**', redirectTo: '' },
];
