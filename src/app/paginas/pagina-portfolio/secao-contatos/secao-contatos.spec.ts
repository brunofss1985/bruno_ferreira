import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoContatosComponent } from './secao-contatos';

describe('SecaoContatosComponent', () => {
  let component: SecaoContatosComponent;
  let fixture: ComponentFixture<SecaoContatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecaoContatosComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SecaoContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
