import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import {Data} from '../app.service'
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-allview',
  templateUrl: './allview.component.html',
  styleUrls: ['./allview.component.scss']
})
export class AllviewComponent implements OnInit {
  @Input('data') todolistdata:Data
  detailview = false;
  detailData = undefined;

  constructor(private appComponent:AppComponent) { }

  ngOnInit(): void {
  }

  onDetailview(dt:Data){
    
    this.detailview = !this.detailview;
    this.detailData = dt;
  }

  update(data:Data){
    data.status =!data.status;
    this.appComponent.update(data);
  }

  delete(data:Data){
    this.appComponent.delete(data);
  }
}
