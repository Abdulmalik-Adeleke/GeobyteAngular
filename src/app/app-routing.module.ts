import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { StaffnavComponent } from './staffnav/staffnav.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'staff',
    component: StaffnavComponent,
   //canActivate:[AuthGuard], 
    data: { iamrole: 'ROLE_STAFF' },
    loadChildren: () => import('./staff/staff.module')
                        .then(m => m.StaffModule)
  },
  {
    path: 'admin', 
    component: AdminnavComponent,
    //canActivate:[AuthGuard], 
    data: { iamrole: 'ROLE_ADMIN' },
    loadChildren: () => import('./admin/admin.module')
                        .then(m => m.AdminModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
