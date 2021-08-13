import { Component, OnInit } from '@angular/core';
import { LoginFormComponent } from '../../../components/login-form/login-form.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'ib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onShowLoginForm() {
    this.dialog.open(LoginFormComponent, {
      width: '904px'
    });
  }
}
