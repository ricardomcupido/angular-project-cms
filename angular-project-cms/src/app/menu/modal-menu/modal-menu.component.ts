import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/conection/data.service';
@Component({
  selector: 'app-modal-menu',
  templateUrl: './modal-menu.component.html',
  styleUrls: ['./modal-menu.component.scss']
})
export class ModalMenuComponent implements OnInit {
  
  firstname:string ="";
  lastname:string ="";
  location:string ="";
  cellphone:string ="";
  gender: string = "";
  constructor(public dialogRef: MatDialogRef<ModalMenuComponent>,private datasv:DataService) {      
  }

  celular:number=0;
  ngOnInit(): void {
    
  }  

  actionAgregar() {    
    var d = new Date();
    this.datasv.adduser({firstName: this.firstname,
      lastName: this.lastname,
      location: this.location ,
      phone: this.cellphone,
      gender: this.gender,
      createdAt: d      
  }).subscribe();
  }

  // If the user clicks the cancel button a.k.a. the go back button, then\
  // just close the modal
  closeModal() {
    this.dialogRef.close();
  }
}
