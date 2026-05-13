import { TestBed } from '@angular/core/testing';
import { PaginaInicialComponent } from './pagina-inicial';

describe('PaginaInicialComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaInicialComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PaginaInicialComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render all quick links', async () => {
    const fixture = TestBed.createComponent(PaginaInicialComponent);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.link-button').length).toBe(5);
  });
});
