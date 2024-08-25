import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitacaoRoutingModule } from './solicitacao-routing.module';
import { SolicitacaoComponent } from './solicitacao.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzNotificationModule } from 'ng-zorro-antd/notification';


@NgModule({
  declarations: [
    SolicitacaoComponent
  ],
  imports: [
    CommonModule,
    SolicitacaoRoutingModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzNotificationModule

  ]
})
export class SolicitacaoModule { }
