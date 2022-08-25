import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  // opened: boolean = false
  constructor(private formbuilder: FormBuilder) { }

  table!: FormGroup;
  data:any = [];
  ngOnInit(): void {
    this.table = this.formbuilder.group({
      fName: "",
      lName: "",
      email: "",
      password: "",
      age: "", 
      address: "",
      phone: ""
    })
    console.log(this.list);
    
  }


  submit(){
  // console.log("data table====",this.table);
  

  let abc:any = this.data.find((el:any):any=>{
    return el.phone === this.table.value.phone})
    if(abc === undefined){
      this.data.push(this.table.value)
      console.log(this.data)
      this.table.reset();
    }else{
      alert("this number is allready exists")
    }
  } 

  editData(item:any){
this.table.setValue(item);

let abc:any = this.data.findIndex((el:any):any=>{
  return el.phone === item.phone
})
 this.data.splice(abc,1)
  }
  // value = 0
  // increse(){
  //   if(this.value <= 20)
  //   this.value++;  
  // }
  // decrese(){
  //   if(this.value -1 >= 0){
  //   this.value -= 1;
  //   }
  //   //  this.value--;
  // }


  arrey=[
    {
      srNo:1,
      name:'realloc',
      status:'active'
    },
    {
      srNo:2,
      name:'realloc',
      status:'active'
    },
    {
      srNo:3,
      name:'realloc',
      status:'active'
    },
    {
      srNo:4,
      name:'realloc',
      status:'active'
    },
    {
      srNo:5,
      name:'realloc',
      status:'active'
    },
    {
      srNo:6,
      name:'realloc',
      status:'active'
    },
    {
      srNo:7,
      name:'realloc',
      status:'active'
    },
    {
      srNo:8,
      name:'realloc',
      status:'active'
    },
    {
      srNo:9,
      name:'realloc',
      status:'active'
    },
    {
      srNo:10,
      name:'realloc',
      status:'active'
    },
    {
      srNo:11,
      name:'realloc',
      status:'active'
    },
    {
      srNo:12,
      name:'realloc',
      status:'active'
    },
    {
      srNo:13,
      name:'realloc',
      status:'active'
    },
    {
      srNo:14,
      name:'realloc',
      status:'active'
    },
  ]

  
    length = this.arrey.length


  list = this.arrey.slice(this.length-5,this.length)

}
