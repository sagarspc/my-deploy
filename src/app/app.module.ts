import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule }     from './app-routing/app-routing.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PmComponent } from './pm/pm.component';
import { FileUploadModule } from 'ng2-file-upload';

import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { TransportListComponent } from './transport/transport-list/transport-list.component';
import { AddTransportComponent } from './transport/add-transport/add-transport.component';
import { MainIndexComponent } from './homepage/main-index/main-index.component';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    PmComponent,
    CustomerComponent,
    CustomerDetailsComponent,
    AddCustomerComponent,
    TransportListComponent,
    AddTransportComponent,
    MainIndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FileUploadModule
  ],
  providers: [httpInterceptorProviders,AuthGuard
],
  bootstrap: [AppComponent]
})
export class AppModule { }
