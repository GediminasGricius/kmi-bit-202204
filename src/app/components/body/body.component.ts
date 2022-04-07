import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  
  public ugis:number=180;
  public svoris:number=90;

  constructor() { }

  ngOnInit(): void {
  }

}
