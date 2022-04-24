import { Component, OnInit } from '@angular/core';
import { RecordsService } from './records.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
  providers: [RecordsService]
})
export class ClassComponent implements OnInit {

  dataReceived1: string[] = []
  dataReceived2: string[] = []
  dataReceived3: string[] = []

  getDataFromClass1(){
    if(this.dataReceived1.length == 0)
      this.dataReceived1 = this.rservice.getdata1()
    else
      this.dataReceived1 = []
  }
  getDataFromClass2(){
    if(this.dataReceived2.length == 0)
      this.dataReceived2 = this.rservice.getdata2()
    else
      this.dataReceived2 = []
  }
  getDataFromClass3(){
    if(this.dataReceived3.length == 0)
      this.dataReceived3 = this.rservice.getdata3()
    else
      this.dataReceived3 = []
  }
  constructor(private rservice: RecordsService) {}

  ngOnInit(): void {
  }
}
