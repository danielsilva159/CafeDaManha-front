import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './collaborator/list/list.component';
import { CreateUpdateComponent } from './collaborator/create-update/create-update.component';
import { MatButtonModule } from '@angular/material/button';
  import {MatFormFieldModule} from '@angular/material/form-field';
import { CreateComponent } from './breakfast-options/create/create.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
  import {MatInputModule} from '@angular/material/input';
import { LinkCollaboratorOptionComponent } from './breakfast-options/link-collaborator-option/link-collaborator-option.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateUpdateComponent,
    CreateComponent,
    LinkCollaboratorOptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
