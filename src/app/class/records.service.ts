import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  data1: string[] = ["Adam Taylor", "2131", "20", "ataylor@gmail.com"]
  data2: string[] = ["Eric Hemsworth", "2317", "21", "ehemsworth@gmail.com"]
  data3: string[] = ["Totally Fire", "4325", "17", "tfire@gmail.com"]
  
  getdata1(): string[]{
    return this.data1
  }
  getdata2(): string[]{
    return this.data2
  }
  getdata3(): string[]{
    return this.data3
  }
  constructor() { }
}
