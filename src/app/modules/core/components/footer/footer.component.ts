import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'tia-core-footer',
  templateUrl: 'footer.component.html'
})
export class FooterComponent {

  public currentYear: Number;
  public shortName: string;
  public instagram: string;
  public skype: string;
  public stackOverFlowProfile: string;
  public githubProfile: string;
  public linkedInProfile: string;
  public email: string;
  public phone: string;


  constructor() {
    this.currentYear = this.getCurrentYear();
    this.shortName = environment.shortName;
    this.instagram = environment.instagram;
    this.skype = environment.skype;
    this.stackOverFlowProfile = environment.stackOverFlowProfile;
    this.githubProfile = environment.githubProfile;
    this.linkedInProfile = environment.linkedInProfile;
    this.email = environment.email;
    this.phone = environment.phone;
  }

  private getCurrentYear(): Number {
    try {
      return ( new Date() ).getFullYear()
    } catch ( error ) {
      console.log ( 'FooterComponent.getCurrentYear()' );
      console.error ( error )
      return 0;
    }
  }

}
