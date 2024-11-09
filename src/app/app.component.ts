import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ButtonComponent} from "./button/button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <a href="https://rc.material.angular.io/" target="_blank">Material RC docs</a>
    <app-button/>
  `,
  styles: `
  `
})
export class AppComponent {
}
