import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutMeComponent} from './components/about-me/about-me.component';
import {EducationComponent} from './components/education/education.component';
import {HomeComponent} from './components/home/home.component';
import {ExperienceComponent} from './components/experience/experience.component';
import {SkillsComponent} from './components/skills/skills.component';
import {ContactMeComponent} from './components/contact-me/contact-me.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HomeComponent,
    AboutMeComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    ContactMeComponent
  ],
  providers: [
  ]
})
export class ContentModule {}
