import { Injectable, signal } from '@angular/core';
import { Theme } from '../data/portfolio.types';

const STORAGE_KEY = 'sa-portfolio-theme';

/** Holds the light/dark theme choice and reflects it as a `data-theme` attribute on <html>. */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<Theme>(this.restore());

  constructor() {
    this.apply(this.theme());
  }

  toggle() {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch { /* storage unavailable */ }
    this.apply(next);
  }

  private restore(): Theme {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'light' || saved === 'dark') return saved;
    } catch { /* storage unavailable */ }
    return 'light';
  }

  private apply(theme: Theme) {
    if (typeof document !== 'undefined') document.documentElement.setAttribute('data-theme', theme);
  }
}
