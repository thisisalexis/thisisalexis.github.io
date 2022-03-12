import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './modules/content/components/home/home.component';
import {AboutMeComponent} from './modules/content/components/about-me/about-me.component';
import {EducationComponent} from './modules/content/components/education/education.component';
import {ExperienceComponent} from './modules/content/components/experience/experience.component';
import {SkillsComponent} from './modules/content/components/skills/skills.component';
import {ContactMeComponent} from './modules/content/components/contact-me/contact-me.component';
import {CertificationsComponent} from './modules/content/components/certifications/certifications.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact-me', component: ContactMeComponent },
  // TODO { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
