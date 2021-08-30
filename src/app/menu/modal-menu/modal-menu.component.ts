import { Component, OnInit } from "@angular/core";
import { ThrowStmt } from "@angular/compiler";
import { MatDialogRef } from "@angular/material/dialog";
import { DataService } from "src/app/conection/data.service";
@Component({
  selector: "app-modal-menu",
  templateUrl: "./modal-menu.component.html",
  styleUrls: ["./modal-menu.component.scss"],
})
export class ModalMenuComponent implements OnInit {
  firstname: string = "";
  lastname: string = "";
  location: string = "";
  cellphone: string = "";
  gender: string = "";
  el = document.getElementById("incorrectData");

  constructor(
    public dialogRef: MatDialogRef<ModalMenuComponent>,
    private datasv: DataService
  ) {}

  celular: number = 0;
  ngOnInit(): void {}

  actionAgregar() {
    if (this.checkData()) {
      var d = new Date();
      this.datasv
        .adduser({
          firstName: this.firstname,
          lastName: this.lastname,
          location: this.location,
          phone: this.cellphone,
          gender: this.gender,
          createdAt: d,
        })
        .subscribe();
      alert(
        "usario " +
          this.firstname +
          " " +
          this.lastname +
          " agregado correctamente"
      );
      window.location.reload();
    } else {
      alert("Favor de revisar que sus datos estén completos");
    }
  }
  checkData() {
    if (
      this.firstname != "" &&
      this.lastname != "" &&
      this.location != "" &&
      this.cellphone != "" &&
      this.gender != ""
    ) {
      return true;
    }
    return false;
  }


  closeModal() {
    this.dialogRef.close();
    window.location.reload();
  }
}
