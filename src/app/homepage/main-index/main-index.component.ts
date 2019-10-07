import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer';
import { CustomerService } from '../../customer.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-main-index',
  templateUrl: './main-index.component.html',
  styleUrls: ['./main-index.component.css']
})
export class MainIndexComponent implements OnInit {

  customers: Customer[];

  filterfishname:string;
  filterfishsize:string;
  filterfishqty:string;
  filterfishprice:string;
  filterfishimageurl:string;
  
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
     this.getCustomers();
    
  }

  getCustomers() {
    return this.customerService.getCustomers()
               .subscribe(
                 customers => {
                  console.log(customers);
                  this.customers = customers
                 }
                );
 }

 getfishdetails(id){
  this.filterfishname = this.customers.filter(item =>{return(item.id === id)})[0].fishname;
  this.filterfishsize = this.customers.filter(item =>{return(item.id === id)})[0].fishsize;
  this.filterfishprice = this.customers.filter(item =>{return(item.id === id)})[0].price;
  this.filterfishqty = this.customers.filter(item =>{return(item.id === id)})[0].qty;
  this.filterfishimageurl = this.customers.filter(item =>{return(item.id === id)})[0].imageurl;
 }

}
