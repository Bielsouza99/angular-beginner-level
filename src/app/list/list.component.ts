import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users;
  displayedColumns: string[] = ['position', 'name', 'email', 'phone'];


  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.listUsers().then(data => {
      this.users = data;
    })
  }

}
