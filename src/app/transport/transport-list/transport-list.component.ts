import { Component, OnInit } from '@angular/core';
import { Transport } from '../transport';
import { TransportService } from '../transport.service';

@Component({
  selector: 'app-transport-list',
  templateUrl: './transport-list.component.html',
  styleUrls: ['./transport-list.component.css']
})
export class TransportListComponent implements OnInit {

  transports: Transport[];

  constructor(private transportService: TransportService) { }

  ngOnInit(): void {
    this.getTransports();
 }

 getTransports() {
  return this.transportService.getTransports()
             .subscribe(
               transports => {
                console.log(transports);
                this.transports = transports
               }
              );
}

deleteTransport(id){
 alert(id)
return this.transportService.deleteTransport(id)
.subscribe(
  result => {
    console.log(result)
    this.getTransports();
  }
 );
 
}
}
