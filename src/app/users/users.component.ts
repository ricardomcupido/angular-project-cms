import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/conection/data.service";
import { data_user } from "../conection/ModelInterface";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  userslist!: data_user[];
  userslist2!: data_user[];
  tmpUserList!: data_user[];
  searchText: string = "";

  constructor(private datasv: DataService) {}

  ngOnInit(): void {
    this.update();
  }
  update() {
    if (this.searchText == "") {
      this.datasv.getAllUsers().subscribe((data) => (this.userslist = data));
    } else {
      this.userslist = this.search();
    }
  }
  search() {
    this.datasv.getAllUsers().subscribe((data) => (this.tmpUserList = data));
    this.userslist2 = [];
    var tmpString = this.searchText;
    tmpString = tmpString.toLowerCase();

    for (let user of this.tmpUserList) {
      var stringuser = user.firstName + " " + user.lastName;
      stringuser = stringuser.toLowerCase();
      if (stringuser.includes(tmpString)) {
        this.userslist2.push(user);
      }
    }

    this.userslist2 = [...new Set(this.userslist2)];
    return this.userslist2;
  }
}
