import { Component } from '@angular/core';

@Component({
  selector: 'app-secao-resumo',
  standalone: true,
  imports: [],
  templateUrl: './secao-resumo.html',
  styleUrls: ['./secao-resumo.css']
})
export class SecaoResumoComponent {
  activeIndex = 0;
  readonly totalCards = 2;

  get activeCount(): number {
    return this.activeIndex >= 0 ? this.activeIndex + 1 : 0;
  }

  get progressPercent(): number {
    if (this.activeIndex < 0) {
      return 0;
    }
    return ((this.activeIndex + 1) / this.totalCards) * 100;
  }

  toggleCard(index: number): void {
    this.activeIndex = this.activeIndex === index ? -1 : index;
  }

  selectCard(index: number): void {
    this.activeIndex = index;
  }
}
