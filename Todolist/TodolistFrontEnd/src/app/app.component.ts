import { Component, OnInit } from '@angular/core';
import {Data,AppService} from './app.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[AppService]
})
export class AppComponent implements OnInit{
  allview = false;
  addnew = false;
  data:Data[];
  error:any;
  editData: Data;

  constructor(private appService:AppService) { }

  ngOnInit(): void {
    this.onAllview();
    this.showData();
  }

  onAllview(){
    this.allview = !this.allview;
  }

  onAddnew(){
    this.addnew = !this.addnew;
  }

  // get
  showData():void {
    this.appService.getData()
      .subscribe(
        data => (this.data = data), // success path
        error => this.error = error // error path
      );
  }

  // post
  createnew(
    title: string, 
    DueDate:any,
    DueTime:any,
    description:string,
    ): void {
    this.editData = undefined;
    title = title.trim();
    DueDate = DueDate.toString().trim();
    DueTime = DueTime.toString().trim();
    description=description.trim();
    if (!title) {
      return;
    }
    const newData: Data = { title,description,DueDate,DueTime } as Data;
    this.appService
      .addData(newData)
      .subscribe(data => this.data.push(data));
    alert('Create Success');
  }

  // delete
  delete(data:Data): void {
    this.data = this.data.filter(h => h !== data);
    this.appService
      .deleteData(data.id)
      .subscribe();
    alert('Delete Success');
  }

  // put
  update(data: Data) {
    this.appService
      .updateData(data.id,data)
      .subscribe();
    
  }

}
