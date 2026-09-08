import { Injectable, inject, signal } from '@angular/core';
import { NAV_LINKS } from '../data/portfolio.data';
import { BirdService } from './bird.service';

export type SectionId = string;

const SCROLL_OFFSET = 140;

/** Tracks the currently active section (for nav highlighting) and mobile menu open state. */
@Injectable({ providedIn: 'root' })
export class NavigationService {
  private bird = inject(BirdService);

  readonly hrefs: string[] = NAV_LINKS.map((l) => l.href);
  readonly active = signal<SectionId>('#top');
  readonly menuOpen = signal(false);

  /** Called from nav links / CTAs: closes the mobile menu and flies the bird there. */
  navigate(href: string) {
    this.menuOpen.set(false);
    this.active.set(href);
    setTimeout(() => this.bird.flyTo(href, true), 60);
  }

  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  /** Called on scroll: updates the active section for the nav underline, without moving the bird. */
  spy() {
    if (typeof document === 'undefined') return;
    let active = '#top';
    for (const href of this.hrefs) {
      const el = document.querySelector(href);
      if (el && el.getBoundingClientRect().top <= SCROLL_OFFSET) active = href;
    }
    if (active !== this.active()) this.active.set(active);
  }
}
