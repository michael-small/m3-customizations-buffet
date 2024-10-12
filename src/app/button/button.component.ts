import {Component, signal} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatInputModule, MatFormFieldModule],
  template: `
    <section>
      <button mat-button>Basic</button>
      <button mat-button disabled>Disabled</button>
      <a mat-button href="https://www.google.com/" target="_blank">Link</a>
    </section>

    <mat-divider />

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
  `,
  styles: `
    :host {
      //--mat-text-button-horizontal-padding: '4px;',
    }
  `,
  host: {
      '[style.--mdc-text-button-label-text-color]': "mdc_text_button_label_text_color()",
      '[style.--mat-text-button-touch-target-display]': "mat_text_button_touch_target_display()",
      '[style.--mat-text-button-horizontal-padding]': "mat_text_button_horizontal_padding()"
  }
})
export class ButtonComponent {
  // empty string makes the var the default from Material
  mdc_text_button_label_text_color = signal('');
  mat_text_button_touch_target_display = signal(''); // useless?
  mat_text_button_horizontal_padding = signal('')
}
