import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from 'src/assets/usuarios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  
  insereUsuario(usuario: Usuarios): Observable<Usuarios>{

    const url = `${environment.urlCrudUsuario}usuario/`;
    return this.http.post<Usuarios>(url,usuario);
  }

  obtenhaUsuarios(): Observable<any> {
 const url = `${environment.urlCrudUsuario}usuario`;
    return this.http.get<Usuarios[]>(url);
  }
  obtenhaUsuarioId(id: any): Observable<any> {
    const url = `${environment.urlCrudUsuario}usuario/`;
       return this.http.get<Usuarios[]>(url.concat(id));
     }
  deletaUsuario(id: any): Observable<any>{

    const url = `${environment.urlCrudUsuario}usuario/`;
    return this.http.delete<Usuarios>(url.concat(id));
  }
   
  atualizaUsuario(usuario: Usuarios): Observable<Usuarios>{

    const url = `${environment.urlCrudUsuario}usuario/`;
    return this.http.put<Usuarios>(url,usuario);
  }
}
