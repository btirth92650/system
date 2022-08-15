import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

// isShow = false;
 
searchText:string = ''
isChatOpen = false;
  isChatListOpen = false;
  isChatUserList = false
  isActiveNumber:number = 0;
  headerList =[
    {
    image:'https://react.pixelstrap.com/endless/static/media/1.df2fec22b78ae473a473.jpg',
    name:'Vincent Porter',
    status:'online',
   },
  ]

  storeHeaderobject(item){
    // this.headerList.push(item)
    this.headerList = [item]
  }
  
  

  constructor() { }

  ngOnInit(): void {
    console.log(this.headerList);
    
  }

  
  clickedOutside():void{
    this.show = false
  }

  show = false;
  fullBox(){
    if(this.show){
      this.show = false;
    }
    else{
       this.show = true;
    }

  }

  visible = false; 
  popup(){
    this.visible = !this.visible
   }

   helpData=[
    {
    image:'https://react.pixelstrap.com/endless/static/media/1.df2fec22b78ae473a473.jpg',
    name:'Vincent Porter',
    status:'online',
   },
   {
    image:'https://react.pixelstrap.com/endless/static/media/5.53a215ed00aac31d7543.jpg',
    name:'kori Thomas',
    status:'online',    
   },
   {
    image:'https://react.pixelstrap.com/endless/static/media/4.af13b24b764747328fb2.jpg',
    name:'Aiden Chavez',
    status:'28 minute ago',
   },
   {
    image:'https://react.pixelstrap.com/endless/static/media/7.e30fc62d991f11de1ef0.jpg',
    name:'Ginger Johnston',
    status:'45 minute ago',
   },
   {
    image:'https://react.pixelstrap.com/endless/static/media/4.af13b24b764747328fb2.jpg',
    name:'Piden Bhavez',
    status:'1 hour ago',
   },
   {
    image:'https://react.pixelstrap.com/endless/static/media/5.53a215ed00aac31d7543.jpg',
    name:'Erica Hughes',
    status:'online',
   },
   {
    image:'https://react.pixelstrap.com/endless/static/media/1.df2fec22b78ae473a473.jpg',
    name:'Vincent Porter',
    status:'online',
   },
   {
    image:'https://react.pixelstrap.com/endless/static/media/5.53a215ed00aac31d7543.jpg',
    name:'kori Thomas',
    status:'online',    
   },
   {
    image:'https://react.pixelstrap.com/endless/static/media/4.af13b24b764747328fb2.jpg',
    name:'Aiden Chavez',
    status:'28 minute ago',
   },
  ]
  
  helpDataList=[
    {
    image:'https://react.pixelstrap.com/endless/static/media/1.df2fec22b78ae473a473.jpg',
    name:'Vincent Porter',
    status:'online',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, animi. Inventore quae impedit id ipsum dicta quisquam expedita asperiores placeat praesentium a corrupti fugiat reiciendis, porro culpa tempora fuga amet architecto assumenda? Quis aperiam nam cum enim iste nihil, commodi perferendis ratione dolorem. Sint praesentium ipsam hic accusantium nemo reprehenderit.',
    id:1,
   },
   {
    image:'https://react.pixelstrap.com/endless/static/media/5.53a215ed00aac31d7543.jpg',
    name:'kori Thomas',
    status:'online',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, animi. Inventore quae impedit id ipsum dicta quisquam expedita asperiores placeat praesentium a corrupti fugiat reiciendis, porro culpa tempora fuga amet architecto assumenda? Quis aperiam nam cum enim iste nihil, commodi perferendis ratione dolorem. Sint praesentium ipsam hic accusantium nemo reprehenderit.',
    id:2,
   },
   {
    image:'https://react.pixelstrap.com/endless/static/media/4.af13b24b764747328fb2.jpg',
    name:'Aiden Chavez',
    status:'28 minute ago',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, animi. Inventore quae impedit id ipsum dicta quisquam expedita asperiores placeat praesentium a corrupti fugiat reiciendis, porro culpa tempora fuga amet architecto assumenda? Quis aperiam nam cum enim iste nihil, commodi perferendis ratione dolorem. Sint praesentium ipsam hic accusantium nemo reprehenderit.',
    id:3,
   },
   {
    image:'https://react.pixelstrap.com/endless/static/media/7.e30fc62d991f11de1ef0.jpg',
    name:'Ginger Johnston',
    status:'45 minute ago',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, animi. Inventore quae impedit id ipsum dicta quisquam expedita asperiores placeat praesentium a corrupti fugiat reiciendis, porro culpa tempora fuga amet architecto assumenda? Quis aperiam nam cum enim iste nihil, commodi perferendis ratione dolorem. Sint praesentium ipsam hic accusantium nemo reprehenderit.',
    id:4,

   },
   {
    image:'https://react.pixelstrap.com/endless/static/media/4.af13b24b764747328fb2.jpg',
    name:'Piden Bhavez',
    status:'1 hour ago',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, animi. Inventore quae impedit id ipsum dicta quisquam expedita asperiores placeat praesentium a corrupti fugiat reiciendis, porro culpa tempora fuga amet architecto assumenda? Quis aperiam nam cum enim iste nihil, commodi perferendis ratione dolorem. Sint praesentium ipsam hic accusantium nemo reprehenderit.',
    id:5,

   },
   {
    image:'https://react.pixelstrap.com/endless/static/media/5.53a215ed00aac31d7543.jpg',
    name:'Erica Hughes',
    status:'online',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, animi. Inventore quae impedit id ipsum dicta quisquam expedita asperiores placeat praesentium a corrupti fugiat reiciendis, porro culpa tempora fuga amet architecto assumenda? Quis aperiam nam cum enim iste nihil, commodi perferendis ratione dolorem. Sint praesentium ipsam hic accusantium nemo reprehenderit.',
    id:6,
   },
  ]
  // value:any

  
 

  groupChatting = [
    {
      key : 1,
      msg :'Good Morning',
      send : "Abhishek  10:23 AM"
    },
    {
      key : 2,
      msg :'Good Morning',
      send : "Manish 10:24 AM"
    },
    {
      key : 1,
      msg :'How Are You',
      send : "Abhishek  10:23 AM"
    },
    {
      key : 2,
      msg :'I am Fine',
      send : "10:23 AM"
    },
    {
      key : 2,
      msg :'Whats About You',
      send : "Abhishek  10:23 AM"
    },
    {
      key : 1,
      msg :'what do you do',
      send : "Abhishek  10:23 AM"
    },
    {
      key : 2,
      msg :'task complete',
      send : "Manish 10:24 AM"
    },
  ]

  
     
  
}
