import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUsuarioComponent } from './cruds/usuario/create-usuario/create-usuario.component';
import { MenubarModule } from 'primeng/menubar';
import { MessagesModule } from 'primeng/messages';
import { FieldsetModule } from 'primeng/fieldset';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { KeyFilterModule } from 'primeng/keyfilter';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';

 
import { HeaderComponent } from './navegacao/header/header.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { HomeComponent } from './navegacao/home/home.component';
import { ListUsuarioComponent } from './cruds/usuario/list-usuario/list-usuario.component';
import { EditUsuarioComponent } from './cruds/usuario/edit-usuario/edit-usuario.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateUsuarioComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListUsuarioComponent,
    EditUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    MessagesModule,
    FieldsetModule,
    InputMaskModule,
    InputTextModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    RadioButtonModule,
    KeyFilterModule,
    NgxMaskModule.forRoot(),
    ConfirmDialogModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
