import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-normal',
  imports: [FormsModule, NgIf,NgFor],
  templateUrl: './normal.html',
  styleUrl: './normal.scss'
})
export class Normal {
  name : string="";
  names:string[]=[];


  enviar(){
    if(this.name.trim()){
      this.names.push(this.name.trim());
      this.name="";
      console.log(this.names);
    }
  }
}
