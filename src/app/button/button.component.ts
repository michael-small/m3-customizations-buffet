import {Component, model, signal} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatOption, MatSelect} from "@angular/material/select";
import {BasicControlsComponent} from "./controls/basic-controls.component";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatInputModule, MatFormFieldModule, FormsModule, MatSelect, MatOption, BasicControlsComponent],
  template: `
    <section>
      <button mat-raised-button>Basic</button>
      <button mat-raised-button disabled>Disabled</button>
      <button mat-raised-button disabled>Disabled</button>
    </section>

    <mat-divider />

    <section>
      <button mat-stroked-button>Basic</button>
      <button mat-stroked-button disabled>Disabled</button>
      <a mat-stroked-button href="https://www.google.com/" target="_blank">Link</a>
    </section>

    <mat-divider />

    <section>
      <button mat-flat-button>Basic</button>
      <button mat-flat-button disabled>Disabled</button>
      <a mat-flat-button href="https://www.google.com/" target="_blank">Link</a>
    </section>

    <mat-divider />

    <app-basic-controls />
  `,
  host: {
      '[style.--mdc-outlined-button-label-text-color]': "mdc_outlined_button_label_text_color()",
      '[style.--mdc-outlined-button-label-text-size]': "mdc_outlined_button_label_text_size()",
      '[style.--mdc-filled-button-label-text-size]': "mdc_filled_button_label_text_size()",
  }
})
export class ButtonComponent {
  // empty string makes the var the default from Material
  basicControls = model<string[]>([])


  // outlined
  mdc_outlined_button_label_text_color = signal('');
  mdc_outlined_button_label_text_size = signal('');
  mdc_filled_button_label_text_size = signal('');
}
