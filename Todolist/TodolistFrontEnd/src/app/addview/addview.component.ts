import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-addview',
  templateUrl: './addview.component.html',
  styleUrls: ['./addview.component.scss']
})
export class AddviewComponent implements OnInit {

  constructor(private appComponent:AppComponent) { }

  ngOnInit(): void {
  }

  // post
  createnew(title:string,dueDate:string,dueTime:string,desc:string){
    this.appComponent.createnew(title,dueDate,dueTime,desc);
  }
  
  
}
