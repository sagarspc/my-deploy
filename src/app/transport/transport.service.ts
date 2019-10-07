import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transport } from './transport';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TransportService {
  private transportsUrl = 'http://localhost:8080/api/transports';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getTransports (): Observable<Transport[]> {
    return this.http.get<Transport[]>(this.transportsUrl)
  }

  getTransport(id: number): Observable<Transport> {
    const url = `${this.transportsUrl}/${id}`;
    return this.http.get<Transport>(url);
  }

  addTransport (transport: Transport): Observable<Transport> {
    return this.http.post<Transport>(this.transportsUrl, transport, httpOptions);
  }

  deleteTransport (transport: Transport | number): Observable<Transport> {
    const id = typeof transport === 'number' ? transport : transport.transportid;
    const url = `${this.transportsUrl}/${id}`;

    return this.http.delete<Transport>(url, httpOptions);
  }

  updateTransport (transport: Transport): Observable<any> {
    return this.http.put(this.transportsUrl, transport, httpOptions);
  }
}