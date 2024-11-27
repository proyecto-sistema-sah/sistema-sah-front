import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { INICIO_ROUTES } from './inicio.routes';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@sharedModule/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { UtilitiesService } from '@sharedModule/service/utilities.service';
import { ErrorHandlerService } from '@sharedModule/service/errorHandler.service';
import { CuartosComponent } from './cuartos/cuartos.component';
import { PrincipalComponent } from './principal/principal.component';
import { GastronomiaComponent } from './gastronomia/gastronomia.component';
import { ServicioComponent } from './servicio/servicio.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    HeaderModule,
    FormsModule,
    RouterModule.forChild(INICIO_ROUTES),
  ],
  declarations: [
    InicioComponent,CuartosComponent, PrincipalComponent, GastronomiaComponent, ServicioComponent
 ],
  providers: [ ErrorHandlerService, UtilitiesService]
})
export class InicioModule { }
