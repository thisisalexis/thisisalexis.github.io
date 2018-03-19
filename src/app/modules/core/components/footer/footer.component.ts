import { Component } from '@angular/core';

@Component({
  selector: 'tia-core-footer',
  templateUrl: 'footer.component.html'
})
export class FooterComponent {
  public currentYear: number;
  constructor() {
    this.currentYear = this.getCurrentYear();
  }
  private getCurrentYear(): number {
    try {
      return ( new Date() ).getFullYear()
    } catch ( error ) {
      console.log ( 'FooterComponent.getCurrentYear()' );
      console.error ( error )
    }
  }
}
