import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-leadership',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leadership.component.html',
  styleUrl: './leadership.component.scss'
})
export class LeadershipComponent {
  private languageService = inject(LanguageService);
  readonly lead = () => this.languageService.content().lead;
}
