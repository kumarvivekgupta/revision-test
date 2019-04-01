import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { VerifyComponent } from './verify/verify.component';
import { GenerateComponent } from './generate/generate.component';
import { ShellComponent } from './shell/shell.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [VerifyComponent, GenerateComponent, ShellComponent],
  imports: [
    CommonModule,
    FormsModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
