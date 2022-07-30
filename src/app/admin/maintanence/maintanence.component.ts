import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintanence',
  templateUrl: './maintanence.component.html',
  styleUrls: ['./maintanence.component.scss']
})
export class MaintanenceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  maintenenceData = [
    {
      icon:'fa fa-pencil-square-o fa-4x',
      name:'Warranty',
      description:'Lorem ipsum dolor amet, consecte tempor incididunt ut labore et dolore tumber tur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mauris commodo quis imperdiet massa tincidunt. Nisl rhoncus mattis rhoncus urna neque viverra justo. Leo in vitae turpis massa sed elementum.',
      buttonName:'View More',
      color:'#afd3ce',
    },
    {
      icon:'fa fa-recycle fa-4x',
      name:'Recycling',
      description:'Lorem ipsum dolor amet, consecte tempor incididunt ut labore et dolore tumber tur adipisicing elit. Lorem ipsum dolor amet, consecte tempor incididunt ut labore et dolore tumber tur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonName:'View More',
      color:'#ebd2b4'
    },
    {
      icon:'fa fa-picture-o fa-4x',
      name:'Computer Repair',
      description:'Lorem ipsum dolor amet, consecte tempor incididunt ut labore et dolore tumber tur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mauris commodo quis imperdiet massa tincidunt. Nisl rhoncus mattis rhoncus urna neque viverra justo. Leo in vitae turpis massa sed elementum.',
      buttonName:'View More',
      color:'#c1bebe',
    },
    {
      icon:'fa fa-thumbs-up fa-4x',
      name:'Smartphone Repair',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mauris commodo quis imperdiet massa tincidunt. Nisl rhoncus mattis rhoncus urna neque viverra justo. Leo in vitae turpis massa sed elementum.',
      buttonName:'View More',
      color:'#bcd9df'
    },
  ]
}
