import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { DataService } from 'src/app/conection/data.service';
import {data_user} from '../../conection/ModelInterface'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  
  @Input() parentData:data_user[]  = [];

  @Input("data") modifiedName:data_user[]  = [];
  constructor( public matDialog: MatDialog) {}
  
  ngOnInit(): void {
  
  }

  openModal(x: data_user) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '50%';
    dialogConfig.width = '40%';
    dialogConfig.data=x;
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  }

 
}
