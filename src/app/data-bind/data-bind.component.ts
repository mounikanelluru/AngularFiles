import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.scss']
})
export class DataBindComponent implements OnInit {

  name:string;
  company:string;
  constructor() {
    this.name="Mounika";
    this.company="Mphasis";
   }

  ngOnInit(): void {
  }

}
