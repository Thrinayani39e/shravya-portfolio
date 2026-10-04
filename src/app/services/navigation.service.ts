import { Injectable, signal } from '@angular/core';

/** Holds the mobile nav drawer's open/closed state. */
@Injectable({ providedIn: 'root' })
export class NavigationService {
  readonly menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
