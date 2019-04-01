import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      { path: 'add', component: AddComponent },
      { path: 'edit/:id', component: EditComponent },
      { path: 'list', component: ListComponent },
      // {path: '**', redirectTo: '../home'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionRoutingModule { }


// 341410521800842 13682D4DFE086 MzQxNDEwNTIxODAwODQy 5179 20857 1001101101000001011010100110111111110000010000110
// 341410521800838 13682D4DFE08A MzQxNDEwNTIxODAwODM4 4d34 19764 1001101101000001011010100110111111110000010001010
// 101000101111001
// 100110100110100
