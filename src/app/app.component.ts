import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonComponent} from "./button/button.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ButtonComponent],
    template: `
    <app-button />
  `,
    styles: `
  `
})
export class AppComponent {
}
