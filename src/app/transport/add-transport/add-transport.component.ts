import { Component, OnInit } from '@angular/core';
import { Transport } from '../transport';
import { TransportService } from '../transport.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-transport',
  templateUrl: './add-transport.component.html',
  styleUrls: ['./add-transport.component.css']
})
export class AddTransportComponent implements OnInit {

  transport = new Transport();
  submitted = false;

  constructor(private transportService: TransportService,
    private location: Location) { }

  ngOnInit() {
  }

  newTransport(): void {
    this.submitted = false;
    this.transport = new Transport();  
  }

  addTransport() {
    this.submitted = true;
    this.save();
  }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    console.log(this.transport);
    this.transportService.addTransport(this.transport)
        .subscribe();
        
  }


}
