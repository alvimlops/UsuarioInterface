import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, Message } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from 'src/assets/usuarios';
import { UsuarioService } from 'src/app/servicos/usuario.service';

@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html'
})
export class CreateUsuarioComponent implements OnInit {
  msgs: Message[] = [];
  nome: string;
  cpf: string;
  data_nascimento: string;
  senha: string;

  constructor(private primengConfig: PrimeNGConfig,
    private http: HttpClient, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  salvar(): void {

    if (this.nome == null || this.nome == ''
      || this.cpf == null || this.cpf == ''
      || this.senha == null || this.senha == ''
      || this.data_nascimento == null || this.data_nascimento == '') {
      this.msgs = [];
      this.msgs.push({ severity: 'error', detail: 'Precisa preencher todos os campos!' });
      return;
    }


    const usuario = {
      nome: this.nome,
      cpf: this.cpf,
      senha: this.senha,
      data_nascimento: this.data_nascimento

    } as Usuarios;

    this.insereUsuario(usuario);
  }

  insereUsuario(usuario: Usuarios): void {

    this.usuarioService.insereUsuario(usuario)
      .subscribe(
        () => {
          this.msgs = [];
          this.msgs.push({ severity: 'success', detail: 'Usuario Cadastrado com sucesso!' });

        },
        error => {
          this.msgs = [];
          this.msgs.push({ severity: 'error', detail: `Erro ao cadastrar Usuario : ${error.error}` });

        });
  }


}
