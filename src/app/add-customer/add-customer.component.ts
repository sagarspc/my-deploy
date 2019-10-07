import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Location } from '@angular/common';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
const URL = 'http://localhost:8080/api/customers/uploads';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})

export class AddCustomerComponent{

  customer = new Customer();
  submitted = false;
  
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  constructor(
    private customerService: CustomerService,
    private location: Location
  ) { }


  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false;
      
    };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         if(this.customer.imageurl == null)
         this.customer.imageurl = "../../assets/" + item.file.name;
         console.log(this.customer)
         this.addCustomer();
     };
     
  }


  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
     
  }

 addCustomer() {
   this.submitted = true;
   this.save();

 }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    console.log(this.customer);
    this.customerService.addCustomer(this.customer)
        .subscribe();
        
  }
}
