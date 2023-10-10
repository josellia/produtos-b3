import { Component, OnInit } from '@angular/core';
import { AcoesStoreService } from '@core/store/acoes/acoes-store.service';
import { Acao } from '@shared/models/acoes.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-acoes',
  templateUrl: './list-acoes.component.html',
  styleUrls: ['./list-acoes.component.scss']
})
export class ListAcoesComponent implements OnInit {

  acoes$!: Observable<Acao[]>;

 constructor(private acoesStoreService: AcoesStoreService){
  this.acoesStoreService.init();
 }

  ngOnInit(): void {
   this.acoes$ = this.acoesStoreService.getAll$();
  }
}
