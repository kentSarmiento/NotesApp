import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NotesListComponent } from "./notes/notes-list/notes-list.component";
import { NotesPrivateComponent } from "./notes/notes-private/notes-private.component";
import { NotesCreateComponent } from "./notes/notes-create/notes-create.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";
import { AuthGuard } from "./auth/auth-guard";

const routes: Routes = [
  { path: '', component: NotesListComponent },
  { path: 'personal', component: NotesPrivateComponent, canActivate: [AuthGuard] },
  { path: 'create', component: NotesCreateComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: NotesCreateComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {

}