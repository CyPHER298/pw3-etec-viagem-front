import { ViagemService } from './../services/viagem.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-viagem',
  templateUrl: './listagem-viagem.component.html',
  styleUrls: ['./listagem-viagem.component.css']
})
export class ListagemViagemComponent implements OnInit {


  viagens: Array<any> = [];

  constructor(private ViagemService: ViagemService) { }

  ngOnInit() {
    return this.listarViagens()
  }

  listarViagens(){
    this.ViagemService.listarTodas().subscribe(e =>
      this.viagens = e
      );
  }

}
