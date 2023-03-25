import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertarticlesComponent } from './articles/insertarticles/insertarticles.component';
import { ListarticlescardComponent } from './articles/listarticlescard/listarticlescard.component';
import { ListearticlesComponent } from './articles/listearticles/listearticles.component';
import { ListecategoriesComponent } from './categories/listecategories/listecategories.component';
import { ListescategorieComponent } from './scategorie/listescategorie/listescategorie.component';
import { ModifarticlesComponent } from './articles/modifarticles/modifarticles.component';
import { InsertcategorieComponent } from './categories/insertcategorie/insertcategorie.component';
import { ModifcategorieComponent } from './categories/modifcategorie/modifcategorie.component';
import { InsertscategorieComponent } from './scategorie/insertscategorie/insertscategorie.component';
import { ListearticletableComponent } from './articles/listearticletable/listearticletable.component';
import { ModifscategorieComponent } from './scategorie/modifscategorie/modifscategorie.component';


const routes: Routes = [   
{path:"larticles",component:ListearticlesComponent}, 
{path:"lcategorie",component:ListecategoriesComponent},
{path:"lscategorie",component:ListescategorieComponent},
{path:"larticlecard",component:ListarticlescardComponent},
{path:"insertart",component:InsertarticlesComponent},
{path:"modifart/:id",component:ModifarticlesComponent},
{path:"insertcat",component:InsertcategorieComponent},
{path:"modifcat/:id",component:ModifcategorieComponent},
{path:"insertscat",component:InsertscategorieComponent},
{path:"larttable",component:ListearticletableComponent},
{path:"modifscat/:id",component:ModifscategorieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
