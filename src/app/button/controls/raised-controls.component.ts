import {Component, signal} from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-raised-controls',
  standalone: true,
  imports: [
    MatFormField,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
  ],
  template: `
    <section id="Raised Button">
      <h2>Raised Button Settings</h2>

      <div>
        <button mat-raised-button>Basic</button>
        <button mat-raised-button disabled>Disabled</button>
        <a mat-raised-button href="https://www.google.com/" target="_blank">Link</a>
      </div>

      <mat-form-field>
        <mat-label>mdc_protected_button_label_protected_color</mat-label>
        <mat-select [(ngModel)]="$raisedControls.mdc_protected_button_label_protected_color">
          <mat-option value="">Default</mat-option>
          <mat-option value="red">red</mat-option>
          <mat-option value="blue">blue</mat-option>
          <mat-option value="green">green</mat-option>
        </mat-select>
      </mat-form-field>

      <mat-form-field>
        <mat-label>mat_protected_button_horizontal_padding</mat-label>
        <mat-select [(ngModel)]="$raisedControls.mat_protected_button_horizontal_padding">
          <mat-option value="">Default</mat-option>
          <mat-option value="0">0</mat-option>
          <mat-option value="4px">4px</mat-option>
          <mat-option value='12px'>12px</mat-option>

          <mat-option [value]='$random'>Random: {{ $random() }}</mat-option>
        </mat-select>
      </mat-form-field>

      <mat-form-field>
        <mat-label>mdc_protected_button_container_height</mat-label>
        <mat-select [(ngModel)]="$raisedControls.mdc_protected_button_container_height">
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
  `,
  host: {
    '[style.--mdc-protected-button-label-text-color]': "$raisedControls.mdc_protected_button_label_protected_color()",
    '[style.--mat-protected-button-horizontal-padding]': "$raisedControls.mat_protected_button_horizontal_padding()",
    '[style.--mdc-protected-button-container-height]': "$raisedControls.mdc_protected_button_container_height()",
  }
})
export class RaisedControlsComponent {
  $random = signal(`${Math.floor(Math.random() * 100)}px`)

  $raisedControls = {
    mdc_protected_button_label_protected_color: signal(''),
    mat_protected_button_horizontal_padding: signal(''),
    mdc_protected_button_container_height: signal(''),
  }
}
