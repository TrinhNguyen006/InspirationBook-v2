import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginFormModule } from '../../../components/login-form/login-form.module';

@NgModule({
  declarations: [ HeaderComponent ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    RouterModule,
    MatDialogModule,
    LoginFormModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
