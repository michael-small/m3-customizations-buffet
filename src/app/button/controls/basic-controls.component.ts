import {Component, signal} from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";


@Component({
  selector: 'app-basic-controls',
  standalone: true,
  imports: [
    MatFormField,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
  ],
  template: `
    <section id="Basic Button">
      <h2>Basic Button Settings</h2>

      <div>
        <button mat-button>Basic</button>
        <button mat-button disabled>Disabled</button>
        <a mat-button href="https://www.google.com/" target="_blank">Link</a>
      </div>

      <mat-form-field>
        <mat-label>mdc_text_button_label_text_color</mat-label>
        <mat-select [(ngModel)]="$basicControls.mdc_text_button_label_text_color">
          <mat-option value="">Default</mat-option>
          <mat-option value="red">red</mat-option>
          <mat-option value="blue">blue</mat-option>
          <mat-option value="green">green</mat-option>
        </mat-select>
      </mat-form-field>

      <mat-form-field>
        <mat-label>mat_text_button_horizontal_padding</mat-label>
        <mat-select [(ngModel)]="$basicControls.mat_text_button_horizontal_padding">
          <mat-option value="">Default</mat-option>
          <mat-option value="0">0</mat-option>
          <mat-option value="4px">4px</mat-option>
          <mat-option value='12px'>12px</mat-option>

          <mat-option [value]='$random'>Random: {{ $random() }}</mat-option>
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
    '[style.--mdc-text-button-label-text-color]': "$basicControls.mdc_text_button_label_text_color()",
    '[style.--mat-text-button-horizontal-padding]': "$basicControls.mat_text_button_horizontal_padding()",
  }
})
export class BasicControlsComponent {
  $random = signal(`${Math.floor(Math.random() * 100)}px`)

  $basicControls = {
    mdc_text_button_label_text_color: signal(''),
    mat_text_button_horizontal_padding: signal('')
  }
}
