import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalMenuComponent } from './modal-menu/modal-menu.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
 
  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void {
    
  }
  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "50%";
    dialogConfig.width = "40%";   
    const modalDialog = this.matDialog.open(ModalMenuComponent, dialogConfig);
  }
}
