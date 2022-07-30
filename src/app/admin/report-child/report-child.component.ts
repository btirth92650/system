import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-report-child',
  templateUrl: './report-child.component.html',
  styleUrls: ['./report-child.component.scss']
})
export class ReportChildComponent implements OnInit {

  constructor() { }
  @Output() editRequest = new EventEmitter<any>()
  @Input() inputData:any

  searchValue:string ='';
  ngOnInit(): void { 
  }


  passData(outputData:any){
    this.editRequest.emit(outputData)
  }

  deletData(item:any){
    let abc:any = this.inputData.findIndex((el:any):any=>{
      return el.phone === item.phone
    })
      this.inputData.splice(abc,1)
  }
}
