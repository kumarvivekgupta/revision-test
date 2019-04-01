import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatDividerModule, MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTabsModule, MatProgressBarModule,
} from '@angular/material';

const modules = [
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatTableModule,
  MatRadioModule,
  MatSnackBarModule,
  MatSelectModule,
  MatTooltipModule,
  MatTabsModule,
  MatExpansionModule,
  MatDialogModule,
  MatProgressBarModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {
}
