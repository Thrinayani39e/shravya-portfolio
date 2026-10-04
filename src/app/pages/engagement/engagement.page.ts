import { Component } from '@angular/core';
import { LeadershipComponent } from '../../components/leadership/leadership.component';
import { SkillsComponent } from '../../components/skills/skills.component';

@Component({
  selector: 'app-engagement-page',
  standalone: true,
  imports: [LeadershipComponent, SkillsComponent],
  template: `
    <app-leadership></app-leadership>
    <app-skills></app-skills>
  `
})
export class EngagementPage {}
