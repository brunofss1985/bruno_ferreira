import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoSobreComponent } from './secao-sobre';

describe('SecaoSobreComponent', () => {
  let component: SecaoSobreComponent;
  let fixture: ComponentFixture<SecaoSobreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecaoSobreComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SecaoSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
