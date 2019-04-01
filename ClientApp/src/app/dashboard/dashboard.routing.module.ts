import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './container/dashboard/dashboard.component';

export const routes: Routes = [

  {
    path: '',
    redirectTo: '/demo',
    pathMatch: 'full'
  },
  {
    path: '', component: DashboardComponent, children: [
      { path: 'admission', loadChildren: 'src/app/dashboard/admission/admission.module#AdmissionModule' },
      { path: 'enquiry', loadChildren: 'src/app/dashboard/enquiry/enquiry.module#EnquiryModule' },
      { path: 'demo', loadChildren: 'src/app/dashboard/demo/demo.module#DemoModule' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
