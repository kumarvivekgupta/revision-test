import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { GenerateComponent } from './generate/generate.component';
import { VerifyComponent } from './verify/verify.component';

const routes: Routes = [{
  path: '', component: ShellComponent,
  children: [
    {path: '', redirectTo: 'generate', pathMatch: 'full'},
    { path: 'generate', component: GenerateComponent },
    { path: 'verify', component: VerifyComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
