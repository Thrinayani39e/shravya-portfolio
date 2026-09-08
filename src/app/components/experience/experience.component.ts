import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { TIMELINE_YEARS, timelineBar } from '../../data/portfolio.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  private languageService = inject(LanguageService);
  readonly exp = () => this.languageService.content().exp;
  readonly years = TIMELINE_YEARS;
  readonly bar = timelineBar;
}
