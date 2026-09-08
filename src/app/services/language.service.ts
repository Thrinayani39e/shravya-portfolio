import { Injectable, computed, signal } from '@angular/core';
import { CONTENT, NAV_LABELS } from '../data/portfolio.data';
import { Lang } from '../data/portfolio.types';

const STORAGE_KEY = 'sa-portfolio-lang';

/** Holds the active language and exposes the matching content bundle as a computed signal. */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Lang>(this.restore());
  readonly content = computed(() => CONTENT[this.lang()]);
  readonly navLabels = computed(() => NAV_LABELS[this.lang()]);

  constructor() {
    this.applyDocumentLang(this.lang());
  }

  set(lang: Lang) {
    this.lang.set(lang);
    try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* storage unavailable */ }
    this.applyDocumentLang(lang);
  }

  private restore(): Lang {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'de') return saved;
    } catch { /* storage unavailable */ }
    return 'en';
  }

  private applyDocumentLang(lang: Lang) {
    if (typeof document !== 'undefined') document.documentElement.lang = lang;
  }
}
