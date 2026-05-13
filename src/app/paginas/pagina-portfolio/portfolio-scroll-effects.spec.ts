import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioScrollEffectsDirective } from './portfolio-scroll-effects';

@Component({
  standalone: true,
  imports: [PortfolioScrollEffectsDirective],
  template: '<div appPortfolioScrollEffects></div>'
})
class HostComponent {}

describe('PortfolioScrollEffectsDirective', () => {
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
  });

  it('should create host with directive', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
