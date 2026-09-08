import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirdService } from '../../services/bird.service';

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

  readonly position = this.birdService.position;
  readonly flying = this.birdService.flying;
}
