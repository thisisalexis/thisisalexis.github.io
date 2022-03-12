import {Component} from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'tia-content-about-me',
  templateUrl: 'about-me.component.html'
})
export class AboutMeComponent {

  shortName: string = environment.shortName;
  role: string = environment.role;
  currentCountry: string = environment.currentCountry;
  age: Number = this.calculateAge();


  private calculateAge(): Number {
    let birthdate: Date = new Date(environment.birthdate);
    let timeDiff = Math.abs(Date.now() - birthdate.getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
    console.log("age is" + age)
    return age;
  }

}
