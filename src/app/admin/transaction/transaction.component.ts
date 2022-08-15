import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  transactionData=[
    {
      image:'https://mobiri.se/assets/images/mobirisebuilder-1.jpg',
      name:'Website Builder',
      description:'Mobirise is a free WYSIWYG Web Editor that allows any user with absolute no coding skills to set up a beautiful website in no longer than a few hours.',
      button:'FREE WEBSITE BUILDER',
      color:'red',
      content:'show'
    },
    {
      image:'https://mobiri.se/assets/images/themes.jpg',
      name:'Themes and Templates',
      description:'Mobirise offers a wide range of pre-made website themes and templates related to many fields of life and business. Each theme has a rich set of blocks that are responsive and easy to manage.',
      button:'VIEW TEMPLATE',
      color:'green',
      content:'aaa',
    },
    {
      image:'https://mobiri.se/assets/images/extensions.jpg',
      name:'Extensions',
      description:'With Mobirise Extensions, you will be able to manually make your website, add social comments, integrate site analytics and much more.',
      button:'ADD EXTENTION',
      color:'blue',
      content:'show',
    },
    {
      image:'https://mobiri.se/assets/images/mobirisebuilder-1.jpg',
      name:'Website Builder',
      description:'Mobirise is a free WYSIWYG Web Editor that allows any user with absolute no coding skills to set up a beautiful website in no longer than a few hours.',
      button:'FREE WEBSITE BUILDER',
      color:'yellow',
      content:'aaa',
    },
    {
      image:'https://mobiri.se/assets/images/themes.jpg',
      name:'Themes and Templates',
      description:'Mobirise offers a wide range of pre-made website themes and templates related to many fields of life and business. Each theme has a rich set of blocks that are responsive and easy to manage.',
      button:'VIEW TEMPLATE',
      color:'gray',
      content:'show',
    },
    {
      image:'https://mobiri.se/assets/images/extensions.jpg',
      name:'Extensions',
      description:'With Mobirise Extensions, you will be able to manually make your website, add social comments, integrate site analytics and much more.',
      button:'ADD EXTENTION',
      color:'purple',
      content:'aaa',
    },


  ]

}
