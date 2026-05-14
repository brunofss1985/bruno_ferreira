import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProjectItem {
  title: string;
  category: string;
  image: string;
  highlight: string;
}

@Component({
  selector: 'app-site-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './site-projects.html',
  styleUrl: './site-projects.css'
})
export class SiteProjectsComponent {
  @Input() projectItems: ProjectItem[] = [];
}
