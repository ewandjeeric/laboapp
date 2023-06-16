import { Component, Input, OnInit } from '@angular/core';
import { TypeInput } from 'src/app/model/input';



@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

 // @Input() inputId?:string;
//  @Input() inputHelp?:string;
//  @Input() inputTextHelp?:string;
  @Input() inputType?:string;

 // @Input() inputTextInvalid?:string;
  @Input() inputName?:string;

  constructor() { }

  ngOnInit(): void {
  }

}
