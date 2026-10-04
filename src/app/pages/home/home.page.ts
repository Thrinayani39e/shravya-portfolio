import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroComponent, AboutComponent],
  template: `
    <app-hero></app-hero>
    <app-about></app-about>
  `
})
export class HomePage {}
