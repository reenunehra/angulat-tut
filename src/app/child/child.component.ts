import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  // @ Input() item =0;
  
  // send data child to parent component-----------------
   @Output() updateDataEvent= new EventEmitter<string>();
    ngOnInit(): void {
  }

}
