import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoServicosComponent } from './secao-servicos';

describe('SecaoServicosComponent', () => {
  let component: SecaoServicosComponent;
  let fixture: ComponentFixture<SecaoServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecaoServicosComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SecaoServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
