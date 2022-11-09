import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class ViagemService {

  url = '//etec-boa-viagem-api.herokuapp.com/viagens';

  //injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  //Obtem toadas as viagens
  listarTodas(): Observable<any>{
    return this.httpClient.get(this.url);
  }
}
