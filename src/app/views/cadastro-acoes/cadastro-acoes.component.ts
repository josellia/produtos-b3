import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormErrorService } from '@core/services/erros/form-error.service';
import { AcoesStoreService } from '@core/store/acoes/acoes-store.service';
import { CustomValidators } from '@shared/utils/custom-validator';

@Component({
  selector: 'app-cadastro-acoes',
  templateUrl: './cadastro-acoes.component.html',
  styleUrls: ['./cadastro-acoes.component.scss'],
})
export class CadastroAcoesComponent implements OnInit {
  acoesForm!: FormGroup;

  formErros = {
    nome: '',
    quantidade: null,
    preco: null,
    pvp: null,
  };
  constructor(
    private form: FormBuilder,
    private router: Router,
    private formErrorService: FormErrorService,
    private acoesStoreService: AcoesStoreService
  ) {}

  ngOnInit(): void {
    this.cadastrarAcoesForm();
  }

  redirecionaListaAcoes() {
    this.router.navigate(['/list-acoes']);
  }

  cadastrarAcoesForm(): void {
    this.acoesForm = this.form.group({
      nome: ['', [Validators.required, CustomValidators.validateCharacters]],
      quantidade: ['', Validators.compose([
        Validators.required,
        Validators.min(1)
      ])],
      preco: ['', Validators.compose([
        Validators.required,
        Validators.min(0)
      ])],
      pvp:  ['', Validators.compose([
        Validators.required,
        Validators.min(0)
      ])],
    });

    this.acoesForm.valueChanges.subscribe(() => {
      this.formErros = this.formErrorService.validateForm(
        this.acoesForm,
        this.formErros,
        true
      );
    });
  }

  criaAcoes(): void {
    if (this.acoesForm.valid) {
      this.acoesStoreService.create$(this.acoesForm.value).subscribe(() => {
        console.log('Salvo com sucesso');
       this.redirecionaListaAcoes();
      });
    } else {
      this.formErros = this.formErrorService.validateForm(
        this.acoesForm,
        this.formErros,
        false
      );
    }
  }
}
