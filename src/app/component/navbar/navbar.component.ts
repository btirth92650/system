import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

// isShow = false;
 
searchText:string = ''
  constructor() { }

  ngOnInit(): void {
  }

  // onClick(){
  //   this.isShow = !this.isShow
  // }

  // questionData=[
  //   {
  //     question:'what is setting ??',
  //     answer:'Setting in the go to the our Lorem, ipsum dolor sit amet.',
  //     id: 1,
  //     check: false
  //   },
  //   {
  //     question:'what is entitey ??',
  //     answer:'Entitey in the go to the our Lorem, ipsum dolor sit amet.',
  //     id: 2,
  //     check: false
  //   },
  //   {
  //     question:'what is our service ??',
  //     answer:'Service in the go to the our Lorem, ipsum dolor sit amet.',
  //     id: 3,
  //     check: false
  //   },
    
  // ]

  // showAnswer(i: number, item: any) {
  //   const index = i + 1
  //   if (index === item.id) {
  //     item.check = !item.check
  //   }
  // }

  clickedOutside():void{
    this.show = false
  }

  show = false;
  fullBox(){
    if(this.show){
      this.show = false;
      // this.visible = false;
    }
    else{
       this.show = true;
      // this.visible = false;

    }

  }

  // closeFullBox(){
  // this.show = false

  // }

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
    status:'Online',
    
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
    status:'Online',
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

  
  search(event:any){
//      let arr = []
//   console.log(event.target.value)
//    for(let el of this.helpData){
//     if(el.name === event.target.value){
//         arr.push(el)
//     }
    
//    }
//    console.log("arr=========?",arr);

//   var marvelHeroes =  this.helpData.filter((item: any) => {

//     return item.name == event.target.value;
//   })
// console.log("marvelHeroes====>>",marvelHeroes);

  }
     
  
}
