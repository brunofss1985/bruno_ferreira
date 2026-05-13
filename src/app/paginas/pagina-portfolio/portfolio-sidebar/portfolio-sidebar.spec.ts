import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSidebarComponent } from './portfolio-sidebar';

describe('PortfolioSidebarComponent', () => {
  let component: PortfolioSidebarComponent;
  let fixture: ComponentFixture<PortfolioSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioSidebarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
