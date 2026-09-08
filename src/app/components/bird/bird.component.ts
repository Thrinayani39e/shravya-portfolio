import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirdService } from '../../services/bird.service';
import { NavigationService } from '../../services/navigation.service';

/** Sections with an olive (dark, high-contrast) background rather than the default paper one. */
const DARK_SECTIONS = new Set(['#contact']);

/** Decorative mascot that perches near whichever section is currently in view. */
@Component({
  selector: 'app-bird',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bird.component.html',
  styleUrl: './bird.component.scss'
})
export class BirdComponent {
  private birdService = inject(BirdService);
  private nav = inject(NavigationService);

  readonly position = this.birdService.position;
  readonly flying = this.birdService.flying;

  /** True while perched over a section with an olive background, so the bird switches to paper-colored line art. */
  readonly onDark = computed(() => DARK_SECTIONS.has(this.nav.active()));
}
