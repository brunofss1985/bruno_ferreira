import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoResumoComponent } from './secao-resumo';

describe('SecaoResumoComponent', () => {
  let component: SecaoResumoComponent;
  let fixture: ComponentFixture<SecaoResumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecaoResumoComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SecaoResumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
