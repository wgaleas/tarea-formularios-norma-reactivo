import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactivo',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './reactivo.html',
  styleUrl: './reactivo.scss'
})
export class Reactivo {
  form: FormGroup;
  nombres: string[] = [];
  correos: string[]=[];


  constructor(private fb: FormBuilder){
    this.form=this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]]
      
    });
  }

  enviar(){
    if(this.form.valid){
      this.nombres.push(this.form.value.nombre);
      this.correos.push(this.form.value.correo);
      this.form.reset();
      console.log(this.correos, this.nombres);

    }
  }
}