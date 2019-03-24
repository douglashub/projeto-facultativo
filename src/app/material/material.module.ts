import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatFormFieldModule,
  MatMenuModule
} from '@angular/material';

const modules = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatMenuModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class MaterialModule {}
