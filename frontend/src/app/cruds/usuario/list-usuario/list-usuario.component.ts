import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Usuarios } from 'src/assets/usuarios';
import { Message } from 'primeng/api';
import { Table } from 'primeng/table';
import { UsuarioService } from 'src/app/servicos/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  providers: [ConfirmationService]
})
export class ListUsuarioComponent implements OnInit {

  usuarios: Usuarios[];
  msgs: Message[] = [];
  @ViewChild('dt') table: Table;

  constructor(private usuarioService: UsuarioService, private router: Router, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {

    this.obtenhaUsuarios();
  }
  obtenhaUsuarios() {
    this.usuarioService.obtenhaUsuarios().subscribe(usuarios => this.usuarios = usuarios);
  }

  deletaUsuario(id) {

    this.confirmationService.confirm({
      message: 'Deseja realmente excluir o cadastro?',
      header: 'Exclusão de cadastro',
      icon: 'pi pi-info-circle',

      accept: () => {
        this.usuarioService.deletaUsuario(id).subscribe(paciente => {
          this.msgs = [];
          this.msgs = [{ severity: 'info', summary: 'Concluído', detail: 'Registro Excluido' }];
          window.location.reload;

        },

          error => {
            this.msgs = [];
            this.msgs.push({ severity: 'error', detail: `Erro ao deletar Usuario : ${error.error}` });
          }

        );

        this.confirmationService.close();
      },
      reject: () => {
        this.msgs = [];
        this.msgs = [{ severity: 'info', summary: 'Cancelado', detail: 'Operação Cancelada' }];
        this.confirmationService.close();
      }

    });
  }

}
