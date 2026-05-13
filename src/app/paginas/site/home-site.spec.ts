import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HomeSiteComponent } from './home-site';

describe('HomeSiteComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSiteComponent],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HomeSiteComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render services title', () => {
    const fixture = TestBed.createComponent(HomeSiteComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Tabela Referencial de Servicos');
  });
});
