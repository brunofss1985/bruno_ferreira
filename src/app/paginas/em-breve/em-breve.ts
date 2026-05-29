import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-em-breve',
  imports: [RouterLink],
  templateUrl: './em-breve.html',
  styleUrl: './em-breve.css'
})
export class EmBreveComponent {
  protected readonly whatsappUrl = 'https://wa.me/5521997901014';
}
