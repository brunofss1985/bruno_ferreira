import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoConhecimentosComponent } from './secao-conhecimentos';

describe('SecaoConhecimentosComponent', () => {
  let component: SecaoConhecimentosComponent;
  let fixture: ComponentFixture<SecaoConhecimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecaoConhecimentosComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SecaoConhecimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
