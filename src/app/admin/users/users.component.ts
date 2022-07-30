import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userData=[
    {
      image:'https://mobirise.com/extensions/engagem4/assets/images/person2.jpg',
      name:'John Smith',
      des:'Programmer',
    },
    {
      image:'https://mobirise.com/extensions/engagem4/assets/images/person4.jpg',
      name:'Sarah Palmer',
      des:'Manager',
    },
    {
      image:'https://mobirise.com/extensions/engagem4/assets/images/person3.jpg',
      name:'Jessica Swift',
      des:'Analyst',
    },
    {
      image:'https://mobirise.com/extensions/coworkingamp/conference_room/assets/images/face7.jpg',
      name:'Jake Black',
      des:'Programmer',
    },
    {
      image:'https://mobirise.com/extensions/coworkingamp/conference_room/assets/images/face11.jpg ',
      name:'Paul Brown',
      des:'Programmer',
    },
    {
      image:'https://mobirise.com/extensions/coworkingamp/conference_room/assets/images/face4.jpg',
      name:'Joe Blue',
      des:'MANAGER',
    },
  ]

}
