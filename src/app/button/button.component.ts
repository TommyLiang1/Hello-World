import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  clickMessage!: string;
  constructor() { }

  ngOnInit(): void {
    this.clickMessage = "NOT CLICKED";
  }

  onClick() {
    if(this.clickMessage == "NOT CLICKED")
      this.clickMessage = "CLICKED"
    else
      this.clickMessage = "NOT CLICKED"
  }

}
