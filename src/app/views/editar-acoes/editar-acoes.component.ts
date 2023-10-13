import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreApiService } from '@core/services/core.api.service';
import { FormErrorService } from '@core/services/erros/form-error.service';
import { AcoesStoreService } from '@core/store/acoes/acoes-store.service';
import { environment } from '@environments/environment';
import { Acao } from '@shared/models/acoes.interface';
import { CustomValidators } from '@shared/utils/custom-validator';

@Component({
  selector: 'app-editar-acoes',
  templateUrl: './editar-acoes.component.html',
  styleUrls: ['./editar-acoes.component.scss'],
})
export class EditarAcoesComponent implements OnInit {
  acoesForm!: FormGroup;

  formErros = {
    nome: '',
    quantidade: null,
    preco: null,
    pvp: null,
  };

  id = this.route.snapshot.paramMap.get('id');

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private formErrorService: FormErrorService,
    private acoesStoreService: AcoesStoreService,
    private route: ActivatedRoute,
    private coreService: CoreApiService<Acao>
  ) {

  }

  ngOnInit(): void {
    this.editarAcoesForm();
  }

  redirecionaListaAcoes() {

   // this.router.navigate(['/list-acoes']);
    //  TODO: refatorar, não é uma boa prática
    window.location.href = '/list-acoes';

  }

  editarAcoesForm(): void {
    this.coreService
      .findById(environment.urlBase, parseInt(this.id!))
      .subscribe((acao) => {
        this.acoesForm = this.formBuilder.group({
          id: [acao.id],
          nome: [
            acao.nome,
            [Validators.required, CustomValidators.validateCharacters],
          ],
          quantidade: [
            acao.quantidade,
            Validators.compose([Validators.required, Validators.min(1)]),
          ],
          preco: [
            acao.preco,
            Validators.compose([Validators.required, Validators.min(0)]),
          ],
          pvp: [
            acao.pvp,
            Validators.compose([Validators.required, Validators.min(0)]),
          ],
        });

        this.acoesForm.valueChanges.subscribe(() => {
          this.formErros = this.formErrorService.validateForm(
            this.acoesForm,
            this.formErros,
            true
          );
        });
      });
  }

  editarAcoes(): void {
    if (this.acoesForm.valid) {
      this.acoesStoreService
        .update$(this.id, this.acoesForm.value)
        .subscribe(() => {
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
