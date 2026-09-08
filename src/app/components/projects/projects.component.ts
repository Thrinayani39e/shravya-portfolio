import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  private languageService = inject(LanguageService);
  readonly projects = () => this.languageService.content().projects;

  /** Tracks which project image slots have failed to load, so we can fall back to a placeholder. */
  private missing = signal<Set<string>>(new Set());

  imagePath(slot: string): string {
    return `assets/${slot}.jpg`;
  }

  isMissing(slot: string): boolean {
    return this.missing().has(slot);
  }

  onImageError(slot: string) {
    this.missing.update((set) => new Set(set).add(slot));
  }
}
