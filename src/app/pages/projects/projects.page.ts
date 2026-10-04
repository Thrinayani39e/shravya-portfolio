import { Component } from '@angular/core';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { PublicationsComponent } from '../../components/publications/publications.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [ProjectsComponent, PublicationsComponent],
  template: `
    <app-publications></app-publications>
    <app-projects></app-projects>
  `
})
export class ProjectsPage {}
