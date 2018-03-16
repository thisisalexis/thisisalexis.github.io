import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './modules/content/components/home/home.component';
import {AboutMeComponent} from './modules/content/components/about-me/about-me.component';
import {EducationComponent} from './modules/content/components/education/education.component';
import {ExperienceComponent} from './modules/content/components/experience/experience.component';
import {SkillsComponent} from './modules/content/components/skills/skills.component';
import {ContactMeComponent} from './modules/content/components/contact-me/contact-me.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact-me', component: ContactMeComponent },
  // TODO { path: '**', component: ErrorPageComponent }
];
export const appRouting = RouterModule.forRoot( routes );
