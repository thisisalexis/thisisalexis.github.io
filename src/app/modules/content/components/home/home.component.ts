import {Component, Input} from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'tia-content-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor() {
    console.log(environment.shortName);
  }

  shortName: string = environment.shortName;
  role: string = environment.role;
  profession: string = environment.profession;
  instagram: string = environment.instagram;
  skype: string = environment.skype;
  stackOverFlowProfile: string = environment.stackOverFlowProfile;
  githubProfile: string = environment.githubProfile;
  linkedInProfile: string = environment.linkedInProfile;
  email: string = environment.email;
  phone: string = environment.phone;


}
