import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, Message, ConfirmationService } from 'primeng/api';
import { Usuarios } from 'src/assets/usuarios';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Router } from "@angular/router";
import { UsuarioService } from 'src/app/servicos/usuario.service';
@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  providers: [ConfirmationService]
})
export class EditUsuarioComponent implements OnInit {
  usuario: Usuarios;
  msgs: Message[] = [];

  public usuarioid;
  id: any;
  nome: string;
  cpf: string;
  data_nascimento: string;
  senha: string;

  constructor(private router: Router,private http: HttpClient,private route: ActivatedRoute,private usuarioService: UsuarioService) { 
    this.route.params.subscribe(params => this.usuarioid = params['id']);
  }

  ngOnInit(): void {
    this.obtenhaUsuarioPorId(this.usuarioid);
  }
  public obtenhaUsuarioPorId(id: any): void {

    this.usuarioService.obtenhaUsuarioId(this.usuarioid).subscribe((usuario: Usuarios) => {

      this.usuario = usuario;
      this.senha = usuario.senha;
      this.nome = usuario.nome;
      this.cpf = usuario.cpf;
      this.data_nascimento = usuario.data_nascimento;
       
    }, () => { });
   }
   atualizaPaciente(usuario: Usuarios): void {
   

          this.usuarioService.atualizaUsuario(usuario)
            .subscribe(
              () => {
                this.msgs = [];
                this.msgs.push({ severity: 'success', detail: 'Usuario Atualizado com sucesso' });

                setTimeout(() => {
                  this.router.navigateByUrl('/usuario-listar');
                }, 2000);

              },
              error => {
                this.msgs = [];
                this.msgs.push({ severity: 'error', detail: `Erro ao atualizar Usuario : ${error.error}` });
                return;
              }
            );
   }
   salvar(): void {

    if (this.nome == null || this.nome == ''
      || this.cpf == null || this.cpf == ''
      || this.senha == null || this.senha == ''
      || this.data_nascimento== null || this.data_nascimento== '') {
      this.msgs = [];
      this.msgs.push({ severity: 'error', detail: 'Precisa preencher todos os campos!' });
      return;
    }


    const usuario = {
      id: this.usuarioid,
      nome: this.nome,
      cpf: this.cpf,
      senha: this.senha,
      data_nascimento: this.data_nascimento

    } as Usuarios;

    this.atualizaPaciente(usuario);
  }

}
