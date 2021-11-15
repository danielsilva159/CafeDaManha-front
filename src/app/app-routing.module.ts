import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './breakfast-options/create/create.component';
import { CreateUpdateComponent } from './collaborator/create-update/create-update.component';
import { ListComponent } from './collaborator/list/list.component';

const routes: Routes = [
  {path:'create-option', component: CreateComponent},
{path:'', component: ListComponent},
{path:'create-update', component: CreateUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
