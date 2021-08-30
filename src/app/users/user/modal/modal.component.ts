import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { data_user } from "src/app/conection/ModelInterface";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Inject } from "@angular/core";
import { DataService } from "src/app/conection/data.service";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    private datasv: DataService,
    @Inject(MAT_DIALOG_DATA) public data: data_user
  ) {}

  ngOnInit(): void {}

  actionUpdate() {
    if (this.checkData()) {
      var d = new Date();
      this.datasv
        .updateUsers({
          id: this.data.id,
          firstName: this.data.firstName,
          lastName: this.data.lastName,
          location: this.data.location,
          phone: this.data.phone,
          gender: this.data.gender,
          updatedAt: d,
        })
        .subscribe();
      alert(
        "usario " +
          this.data.firstName +
          " " +
          this.data.lastName +
          " agregado correctamente"
      );
      window.location.reload();
    } else {
      alert("Favor de revisar que sus datos estén completos");
    }
  }
  checkData() {
    if (
      this.data.firstName != "" &&
      this.data.lastName != "" &&
      this.data.location != "" &&
      this.data.phone != "" &&
      this.data.gender != ""
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
