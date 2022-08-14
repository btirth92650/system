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

  table!: FormGroup
  data:any = []
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



}
