import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/conection/data.service';
import { data_user } from '../conection/ModelInterface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  userslist!: data_user[];
  userslist2!: data_user[];
  searchText: string = '';

  constructor(private datasv: DataService) {}

  ngOnInit(): void {
    this.update();
  }
  update() {
    if (this.searchText == '') {
      this.datasv.getAllUsers().subscribe((data) => (this.userslist = data));
    } else {
      this.userslist = this.search();
    }
  }
  search() {
    this.userslist2 = [];
    const myArr = this.searchText.split(' ');

    for (let index = 0; index < myArr.length; index++) {
      for (let user of this.userslist) {
        var stringuser = JSON.stringify(user);
        if (stringuser.includes(myArr[index])) {
          this.userslist2.push(user);
        }
      }
    }
    this.userslist2 = [...new Set(this.userslist2)];
    return this.userslist2;
  }
}
