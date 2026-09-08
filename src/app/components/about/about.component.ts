import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { OWNER } from '../../data/portfolio.data';
import { Lang } from '../../data/portfolio.types';

const CV_PATHS: Record<Lang, string> = {
  en: 'assets/Shravya-Achanala-CV-EN.pdf',
  de: 'assets/Shravya-Achanala-CV-DE.pdf'
};
const PORTRAIT_PATH = 'assets/portrait.jpg';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  private languageService = inject(LanguageService);
  readonly about = () => this.languageService.content().about;

  readonly owner = OWNER;
  readonly portraitPath = PORTRAIT_PATH;

  /** Whether the portrait image actually exists yet: swaps to a placeholder if not. */
  readonly portraitFound = signal(true);
  /** Whether each language's CV PDF has been uploaded to assets/ yet. */
  private readonly cvFoundByLang = signal<Record<Lang, boolean>>({ en: false, de: false });

  readonly cvPath = computed(() => CV_PATHS[this.languageService.lang()]);
  readonly cvFound = computed(() => this.cvFoundByLang()[this.languageService.lang()]);

  ngOnInit() {
    (Object.keys(CV_PATHS) as Lang[]).forEach((lang) => {
      fetch(CV_PATHS[lang], { method: 'HEAD' })
        .then((res) => this.cvFoundByLang.update((state) => ({ ...state, [lang]: res.ok })))
        .catch(() => this.cvFoundByLang.update((state) => ({ ...state, [lang]: false })));
    });
  }

  onPortraitError() {
    this.portraitFound.set(false);
  }
}
