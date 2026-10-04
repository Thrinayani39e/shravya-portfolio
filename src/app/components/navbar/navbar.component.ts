import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NAV_LINKS } from '../../data/portfolio.data';
import { Lang } from '../../data/portfolio.types';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private languageService = inject(LanguageService);
  private themeService = inject(ThemeService);
  readonly nav = inject(NavigationService);

  readonly links = NAV_LINKS;
  readonly lang = this.languageService.lang;
  readonly content = this.languageService.content;
  readonly navLabels = this.languageService.navLabels;
  readonly theme = this.themeService.theme;

  setLang(lang: Lang) {
    this.languageService.set(lang);
  }

  toggleTheme() {
    this.themeService.toggle();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.nav.spy();
  }
}
