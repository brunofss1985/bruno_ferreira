import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface LinkRapido {
  label: string;
  url: string;
  ariaLabel: string;
  icon: string;
}

@Component({
  selector: 'app-pagina-inicial',
  imports: [RouterLink, CommonModule],
  templateUrl: './pagina-inicial.html',
  styleUrl: './pagina-inicial.css'
})
export class PaginaInicialComponent {
  private readonly sanitizer = inject(DomSanitizer);

  private readonly iconMap: Record<string, string> = {
    'message-circle': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
    'linkedin': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>`,
    'instagram': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><circle cx="17.5" cy="6.5" r="1.5"></circle></svg>`,
    'briefcase': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path></svg>`,
    'github': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>`,
    'globe': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>`
  };

  protected readonly perfil = {
    foto: '/assets/img/perfil.jpeg',
    nome: 'Bruno Ferreira',
    bio: 'Fullstack Developer | Especialista em Interfaces Modernas',
    tag: 'dev.bruno.ferreira',
    nota: '💡 Vamos conversar sobre seu próximo projeto?'
  };

  protected readonly linksRapidos: LinkRapido[] = [


    {
      label: 'portfolio',
      url: '/portfolio',
      ariaLabel: 'Abrir meu portfólio',
      icon: 'briefcase'
    },
    {
      label: 'Site',
      url: '/sites',
      ariaLabel: 'Abrir página de sites e serviços',
      icon: 'globe'
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/brunofss1985/',
      ariaLabel: 'Abrir perfil no LinkedIn',
      icon: 'linkedin'
    },
    {
      label: 'GitHub',
      url: 'https://github.com/brunofss1985',
      ariaLabel: 'Abrir perfil no GitHub',
      icon: 'github'
    },
    {
      label: 'WhatsApp',
      url: 'https://wa.me/5521997901014',
      ariaLabel: 'Iniciar conversa no WhatsApp',
      icon: 'message-circle'
    }
  ];

  protected getIcon(iconName: string): SafeHtml {
    const svg = this.iconMap[iconName] || this.iconMap['briefcase'];
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
