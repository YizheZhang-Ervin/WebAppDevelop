import { Component, OnInit,Input } from '@angular/core';
import {Data} from '../../app.service'

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.scss']
})
export class DetailviewComponent implements OnInit {
  @Input('data') todolistdata:Data

  constructor() { }

  ngOnInit(): void {
  }

}
