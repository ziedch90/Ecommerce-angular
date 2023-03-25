import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListecategoriesComponent } from './categories/listecategories/listecategories.component';
import { InsertcategorieComponent } from './categories/insertcategorie/insertcategorie.component';
import { ModifcategorieComponent } from './categories/modifcategorie/modifcategorie.component';
import { ListearticlesComponent } from './articles/listearticles/listearticles.component';
import { InsertarticlesComponent } from './articles/insertarticles/insertarticles.component';
import { ModifarticlesComponent } from './articles/modifarticles/modifarticles.component';

import { InsertscategorieComponent } from './scategorie/insertscategorie/insertscategorie.component';
import { ModifscategorieComponent } from './scategorie/modifscategorie/modifscategorie.component';

import { ScategorieComponent } from './scategorie/scategorie.component';
import { ListescategorieComponent } from './scategorie/listescategorie/listescategorie.component';
import { ListarticlescardComponent } from './articles/listarticlescard/listarticlescard.component';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { ListearticletableComponent } from './articles/listearticletable/listearticletable.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListecategoriesComponent,
    InsertcategorieComponent,
    ModifcategorieComponent,
    ListearticlesComponent,
    InsertarticlesComponent,
    ModifarticlesComponent,
    
    InsertscategorieComponent,
    ModifscategorieComponent,
    
    ScategorieComponent,
    ListescategorieComponent,
    ListarticlescardComponent,
    ListearticletableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
