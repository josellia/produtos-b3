import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-acoes',
  templateUrl: './cadastro-acoes.component.html',
  styleUrls: ['./cadastro-acoes.component.scss']
})
export class CadastroAcoesComponent {
  constructor(private router: Router){}

  redirecionaListaAcoes() {
    this.router.navigate(['/list-acoes']);
  }
}
