import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
    data: { titleKey: 'home' }
  },
  {
    path: 'experience',
    loadComponent: () => import('./pages/experience/experience.page').then((m) => m.ExperiencePage),
    data: { titleKey: 'experience' }
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.page').then((m) => m.ProjectsPage),
    data: { titleKey: 'projects' }
  },
  {
    path: 'engagement',
    loadComponent: () => import('./pages/engagement/engagement.page').then((m) => m.EngagementPage),
    data: { titleKey: 'engagement' }
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.page').then((m) => m.ContactPage),
    data: { titleKey: 'contact' }
  },
  { path: '**', redirectTo: '' }
];
