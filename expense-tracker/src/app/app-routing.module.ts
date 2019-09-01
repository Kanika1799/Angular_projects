import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ExpenseComponent } from './expense/expense.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  
  {path: 'expense' , component: ExpenseComponent},
  {path: 'edit' , component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
