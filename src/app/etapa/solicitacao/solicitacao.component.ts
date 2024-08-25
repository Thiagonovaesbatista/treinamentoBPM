import { WfProcessStep, workflowCockpit, WfFormData, WorkflowCockpit } from './../../core/service/workflow-cockpit/dist/workflow-cockpit.d';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { nomeIniciaPor } from './solicitacao.validators';
import { WorkflowService } from 'src/app/core/service/workflow/workflow.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { on } from 'events';


@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.css']
})
export class SolicitacaoComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private workflowService: WorkflowService, private notification: NzNotificationService) {
  }

  ngOnInit(): void {
      this.workflowService.onSubmit(this.enviar.bind(this));
      const nome = this.workflowService.getUser().fullname;
      this.setNome = nome;
  };


  inicialInvalida = 'G';

  form  = this.formBuilder.group({
    name: [ '', [ Validators.required, nomeIniciaPor(this.inicialInvalida) ] ]
  });


  get getNome(): string | null | undefined {
    return this.form.get('name')?.value;
  }

  set setNome(nome: string){
    this.form.get('name')?.setValue(nome);
  }

  get getForm() {
    return this.form?.value;
  }

  get stringifyObjeto() {
    const control = this.form.get('name')?.errors;
    return JSON.stringify(control);
  }

  async enviar(processStep: WfProcessStep, workflow: WorkflowCockpit): Promise<WfFormData> {
    const nomeCompleto = this.getNome;
    let algumDadoAssincrono;

    try {
      algumDadoAssincrono = this.workflowService.requestPlatformData();
    } catch (error) {
    }

    if (!this.validarFormulario){
      this.notification.error('Erro', 'Formulário inválido');
      this.workflowService.abortSubmit();

    }

    return {
      formData: {
        nomeCompleto,
        algumDadoAssincrono
      }
    }
  }

  validarFormulario (): Boolean | undefined {

    Object.values(this.form.controls).forEach(control => {
      control.markAsDirty();
      control.updateValueAndValidity({onlySelf: true});
    });

    return (this.form.get('name')?.hasError('required'));
  }

  mostrarValorFormulario() {
    alert(JSON.stringify(this.getForm));
  }
}
