import { Injectable, signal } from '@angular/core';
import { NAV_LINKS } from '../data/portfolio.data';

export type SectionId = string;

const SCROLL_OFFSET = 140;

/** Tracks the currently active section (for nav highlighting) and mobile menu open state. */
@Injectable({ providedIn: 'root' })
export class NavigationService {
  readonly hrefs: string[] = NAV_LINKS.map((l) => l.href);
  readonly active = signal<SectionId>('#top');
  readonly menuOpen = signal(false);

  /** Called from nav links / CTAs: closes the mobile menu. */
  navigate(href: string) {
    this.menuOpen.set(false);
    this.active.set(href);
  }

  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  /** Called on scroll: updates the active section for the nav underline. */
  spy() {
    if (typeof document === 'undefined') return;
    let active = '#top';
    for (const href of this.hrefs) {
      const el = document.querySelector(href);
      if (el && el.getBoundingClientRect().top <= SCROLL_OFFSET) active = href;
    }
    // The last section can be shorter than the viewport, so its top may never cross
    // SCROLL_OFFSET even when fully scrolled into view. Treat being at the bottom of
    // the page as being on the last section instead.
    const scrolledToBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (scrolledToBottom) active = this.hrefs[this.hrefs.length - 1];
    if (active !== this.active()) {
      this.active.set(active);
    }
  }
}
