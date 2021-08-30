import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './users/user/user.component';
import { MatCardModule } from '@angular/material/card';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ModalComponent } from './users/user/modal/modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { HttpClientModule } from '@angular/common/http';
import { ModalMenuComponent } from './menu/modal-menu/modal-menu.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    MenuComponent,
    UserComponent,
    ModalComponent,
    ModalMenuComponent
       
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MatCardModule,
    NoopAnimationsModule,
    MatGridListModule,
    FlexLayoutModule,
    MatDialogModule,
    FormsModule,
    NgxMaskModule.forRoot({
      showMaskTyped : true,
      // clearIfNotMatch : true
    }) ,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
