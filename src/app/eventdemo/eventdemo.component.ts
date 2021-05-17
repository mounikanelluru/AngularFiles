import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventdemo',
  templateUrl: './eventdemo.component.html',
  styleUrls: ['./eventdemo.component.scss']
})
export class EventdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show(){ alert("Welcome to Angular") }
  trainer() { alert("trainer is Prasanna...") }
}
