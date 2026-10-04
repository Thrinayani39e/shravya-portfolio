import { Component, effect, inject, signal } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LanguageService } from './services/language.service';
import { NAV_LABELS } from './data/portfolio.data';
import { Lang } from './data/portfolio.types';

const HOME_TITLE: Record<Lang, string> = { en: 'Environmental Planning', de: 'Umweltplanung' };
/** Matches the order of NAV_LINKS in portfolio.data.ts: experience, projects, engagement, contact. */
const NAV_TITLE_KEYS = ['experience', 'projects', 'engagement', 'contact'];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private languageService = inject(LanguageService);
  private router = inject(Router);

  private titleKey = signal('home');

  constructor() {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      let route = this.router.routerState.root;
      while (route.firstChild) route = route.firstChild;
      this.titleKey.set((route.snapshot.data['titleKey'] as string) ?? 'home');
    });

    effect(() => {
      const lang = this.languageService.lang();
      const key = this.titleKey();
      const index = NAV_TITLE_KEYS.indexOf(key);
      const suffix = index >= 0 ? NAV_LABELS[lang][index] : HOME_TITLE[lang];
      document.title = `Shravya Achanala · ${suffix}`;
    });
  }
}
