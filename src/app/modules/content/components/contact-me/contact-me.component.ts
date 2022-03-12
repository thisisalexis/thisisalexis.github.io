import {Component} from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'tia-content-contact-me',
  templateUrl: 'contact-me.component.html'
})
export class ContactMeComponent {

  email: string = environment.email;
  phone: string = environment.phone;
  currentCompany: string = environment.currentCompanyName;
  currentCompanyWebSite: string = environment.currentCompanyWebSite;
  currentCompanyDescription: string = environment.currentCompanyDescription;
  currentCountry: string = environment.currentCountry;
  githubProfile: string = environment.githubProfile;
  linkedInProfile: string = environment.linkedInProfile;



  role: string = environment.role;
  profession: string = environment.profession;
  instagram: string = environment.instagram;
  skype: string = environment.skype;
  stackOverFlowProfile: string = environment.stackOverFlowProfile;



}
