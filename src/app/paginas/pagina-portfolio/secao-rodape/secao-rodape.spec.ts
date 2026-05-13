import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoRodapeComponent } from './secao-rodape';

describe('SecaoRodapeComponent', () => {
  let component: SecaoRodapeComponent;
  let fixture: ComponentFixture<SecaoRodapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecaoRodapeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SecaoRodapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
