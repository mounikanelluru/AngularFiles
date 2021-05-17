import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-studentdropdown',
  templateUrl: './studentdropdown.component.html',
  styleUrls: ['./studentdropdown.component.scss']
})
export class StudentdropdownComponent implements OnInit {
  sname:String;
  students = [
    new Student(1,'Sparsh','k','kavali',9.3),
    new Student(2,'Amrit','d','kavali',8.6),
    new Student(3,'Manas','g','kavali',7),
    new Student(4,'Priyanka','s','kavali',9),
    new Student(5,'Nivetha','a','Nellore',8),
    new Student(6,'Naina','w','Nellore',10),
    new Student(7,'Jahnavi','q','Nellore',9),
    new Student(8,'Mustafeed','e','Nellore',6),
    new Student(9,'Sundaram','C','Nellore',9),
  ]
  constructor() {
    this.sname="";
   }

  ngOnInit(): void {
  }

}
