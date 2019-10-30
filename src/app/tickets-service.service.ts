import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Ticket} from './tickets/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {


  constructor(private http: HttpClient) {
  }

  public getJSON(): Promise<Ticket[]> {
    return this.http.get<Ticket[]>('./assets/tickets.json').toPromise();
  }

}




