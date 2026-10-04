import { Component } from '@angular/core';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { EducationComponent } from '../../components/education/education.component';

@Component({
  selector: 'app-experience-page',
  standalone: true,
  imports: [ExperienceComponent, EducationComponent],
  template: `
    <app-experience></app-experience>
    <app-education></app-education>
  `
})
export class ExperiencePage {}
