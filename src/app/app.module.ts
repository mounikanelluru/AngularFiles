import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { DataBindComponent } from './data-bind/data-bind.component';
import { EventdemoComponent } from './eventdemo/eventdemo.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { CalcComponent } from './calc/calc.component';
import { EmployshowComponent } from './employshow/employshow.component';
import { StudentshowComponent } from './studentshow/studentshow.component';
import { EmploydropdownComponent } from './employdropdown/employdropdown.component';
import { StudentdropdownComponent } from './studentdropdown/studentdropdown.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';

// const appRoutes : Routes = [
//   {path:'first',component:FirstComponent},
//   {path:'second',component:SecondComponent},
//   {path:'third',component:ThirdComponent},
//   {path:'event',component:EventdemoComponent},
//   {path:'',component:MenuComponent},
// ]
const appRoutes : Routes = [
  {path:'',component:LoginComponent},
  {path:'',component:MenuComponent},
  {path:'menu',component:MenuComponent,
  children : [
    {path:'first',component:FirstComponent,outlet:'data'},
  {path:'second',component:SecondComponent,outlet:'data'},
  {path:'third',component:ThirdComponent,outlet:'data'},
  {path:'event',component:EventdemoComponent,outlet:'data'},
  {path:'calc',component:CalcComponent,outlet:'data'},
  {path:'employ',component:EmployshowComponent,outlet:'data'},
  {path:'student',component:StudentshowComponent,outlet:'data'},
  {path:'employdropdown',component:EmploydropdownComponent,outlet:'data'},
  {path:'studentdropdown',component:StudentdropdownComponent,outlet:'data'},
  ]
}
]


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    DataBindComponent,
    EventdemoComponent,
    TwoWayComponent,
    CalcComponent,
    EmployshowComponent,
    StudentshowComponent,
    EmploydropdownComponent,
    StudentdropdownComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
     FormsModule,
     RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
