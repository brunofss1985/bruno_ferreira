import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoHeroComponent } from './secao-hero';

describe('SecaoHeroComponent', () => {
  let component: SecaoHeroComponent;
  let fixture: ComponentFixture<SecaoHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecaoHeroComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SecaoHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
