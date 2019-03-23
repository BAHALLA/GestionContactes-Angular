import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {NewContactComponent} from './new-contact/new-contact.component';


const routes: Routes = [
  { path : 'contact' , component : ContactComponent },
  { path : 'about' , component : AboutComponent },
  { path : 'notFound', component : NotFoundComponent },
  { path : 'new-contact', component : NewContactComponent },
  { path : '' , redirectTo : 'contact' , pathMatch : 'full' },
  { path : '**' , redirectTo : 'notFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
