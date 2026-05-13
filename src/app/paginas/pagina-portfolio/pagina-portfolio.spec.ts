import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PaginaPortfolioComponent } from './pagina-portfolio';

describe('PaginaPortfolioComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaPortfolioComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PaginaPortfolioComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render hero title', () => {
    const fixture = TestBed.createComponent(PaginaPortfolioComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Olá, eu sou');
    expect(compiled.textContent).toContain('Bruno Ferreira');
  });
});
