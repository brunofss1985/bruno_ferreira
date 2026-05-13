import { Component, AfterViewInit } from '@angular/core';

declare var lucide: any;

@Component({
  selector: 'app-secao-servicos',
  standalone: true,
  imports: [],
  templateUrl: './secao-servicos.html',
  styleUrls: ['./secao-servicos.css']
})
export class SecaoServicosComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }
}
