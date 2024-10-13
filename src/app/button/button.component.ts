import {Component, signal} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatOption, MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatInputModule, MatFormFieldModule, FormsModule, MatSelect, MatOption],
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

    <section id="Basic Button">
      <h2>Basic Button Settings</h2>
      <mat-form-field>
        <mat-label>mdc_text_button_label_text_color</mat-label>
        <mat-select [(ngModel)]="mdc_text_button_label_text_color">
          <mat-option value="">Default</mat-option>
          <mat-option value="red">red</mat-option>
          <mat-option value="blue">blue</mat-option>
          <mat-option value="green">green</mat-option>
        </mat-select>
      </mat-form-field>

      <mat-form-field>
        <mat-label>mat_text_button_horizontal_padding</mat-label>
        <mat-select [(ngModel)]="mat_text_button_horizontal_padding">
          <mat-option value="">Default</mat-option>
          <mat-option value="0">0</mat-option>
          <mat-option value="4px">4px</mat-option>
          <mat-option value='12px'>12px</mat-option>
        </mat-select>
      </mat-form-field>
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
      '[style.--mat-text-button-horizontal-padding]': "mat_text_button_horizontal_padding()",
      '[style.--mdc-outlined-button-label-text-color]': "mdc_outlined_button_label_text_color()",
      '[style.--mdc-outlined-button-label-text-size]': "mdc_outlined_button_label_text_size()",
      '[style.--mdc-filled-button-label-text-size]': "mdc_filled_button_label_text_size()",
  }
})
export class ButtonComponent {
  // empty string makes the var the default from Material

  // basic
  mdc_text_button_label_text_color = signal('');
  mat_text_button_touch_target_display = signal(''); // useless?
  mat_text_button_horizontal_padding = signal('');

  // outlined
  mdc_outlined_button_label_text_color = signal('');
  mdc_outlined_button_label_text_size = signal('');
  mdc_filled_button_label_text_size = signal('');
}
