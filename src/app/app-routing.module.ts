import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'staff', 
    loadChildren: () => import('./staff/staff.module')
                        .then(m => m.StaffModule)
  },
  {
    path: 'admin', 
    component: AdminnavComponent,
    loadChildren: () => import('./admin/admin.module')
                        .then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
