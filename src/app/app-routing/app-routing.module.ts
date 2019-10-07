import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from '../customer/customer.component';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { TransportListComponent } from '../transport/transport-list/transport-list.component';
import { AddTransportComponent } from '../transport/add-transport/add-transport.component';
import { MainIndexComponent } from '../homepage/main-index/main-index.component';

import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { UserComponent } from '../user/user.component';
import { PmComponent } from '../pm/pm.component';
import { AdminComponent } from '../admin/admin.component';
import { AuthGuard } from '../auth.guard';


// const routes: Routes = [

//   { path: '', component: MainIndexComponent, pathMatch: 'full' },
//   { path: 'index', component: MainIndexComponent,canActivate: [true]},

//     { path: 'login', component: LoginComponent},
//     { path: 'register', component: RegisterComponent },
//    { 
//      path: 'customers', 
//      component: CustomerComponent 
//    },
//    { 
//      path: 'customer/add', 
//      component: AddCustomerComponent 
//    },
//    { 
//      path: 'customers/:id', 
//      component: CustomerDetailsComponent 
//    },

//    { 
//      path: '', 
//      redirectTo: 'transport-list', 
//      pathMatch: 'full'
//    }, 
// ];

const routes: Routes = [
  {
      path: 'home',
      component: MainIndexComponent
     
      
  },
  {
      path: 'user',
      component: UserComponent
  },
  {
      path: 'pm',
      component: PmComponent
  },
  {
      path: 'admin',
      component: AdminComponent
  },
  {
      path: 'auth/login',
      component: LoginComponent
  },
  {
      path: 'signup',
      component: RegisterComponent
      
  },
     { 
     path: 'customers', 
     canActivate: [AuthGuard],
     component: CustomerComponent,
    
     
   },
   { 
     path: 'customer/add', 
     component: AddCustomerComponent
     
   },
   { 
     path: 'customers/:id', 
     component: CustomerDetailsComponent 
   },
   { path: 'transport-list', component: TransportListComponent },
   { path: 'transport/add', component: AddTransportComponent },
   { path: 'transport/:id', component: AddTransportComponent },
  
  {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}