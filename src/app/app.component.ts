import { Component, effect, inject } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LeadershipComponent } from './components/leadership/leadership.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    PublicationsComponent,
    ProjectsComponent,
    LeadershipComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private languageService = inject(LanguageService);

  constructor() {
    effect(() => {
      const lang = this.languageService.lang();
      document.title = 'Shravya Achanala · ' + (lang === 'de' ? 'Umweltplanung' : 'Environmental Planning');
    });
  }
}
