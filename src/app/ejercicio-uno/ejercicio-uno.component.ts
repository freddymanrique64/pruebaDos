import { Component, OnInit } from '@angular/core';

interface Estudiante {
  id?: number;
  materia: string;
  nombre: string;
  nota: number;
}

const ESTUDIANTES: Estudiante[] = [
  { id: 1, materia: 'Historia', nombre: 'Yesid Sanchez', nota: 4.3 },
  { id: 2, materia: 'Historia', nombre: 'John Camargo', nota: 3.8 },
  { id: 3, materia: 'Historia', nombre: 'Jorge Medina', nota: 1.5 },
  { id: 4, materia: 'Historia', nombre: 'Willinton Blanco', nota: 4.8 },
  { id: 5, materia: 'Historia', nombre: 'Freddy Manrique', nota: 2.7 },
  { id: 6, materia: 'Historia', nombre: 'Yeison Gallego', nota: 3.6 },
  { id: 7, materia: 'Historia', nombre: 'Angelo Montenegro', nota: 4.1 },
  { id: 8, materia: 'Geografia', nombre: 'Freddy Manrique', nota: 4.5 },
  { id: 9, materia: 'Geografia', nombre: 'Yeison Gallego', nota: 2.4 },
  { id: 10, materia: 'Geografia', nombre: 'Miguel Ortiz', nota: 2.9 },
  { id: 11, materia: 'Geografia', nombre: 'Walter Rivera', nota: 3.2 },
  { id: 12, materia: 'Geografia', nombre: 'Angelo Montenegro', nota: 4.1 },
  { id: 13, materia: 'Geografia', nombre: 'Geiner Uribe', nota: 3.8 },
];

@Component({
  selector: 'app-ejercicio-uno',
  templateUrl: './ejercicio-uno.component.html',
  styleUrls: ['./ejercicio-uno.component.css'],
})
export class EjercicioUnoComponent implements OnInit {
  estudiantesTodos: Estudiante[] = ESTUDIANTES;
  materia: string = 'Historia';
  estudiantes: Estudiante[] = [];
  // cantidad: number = this.estudiantesTodos.length;

  constructor() {}

  ngOnInit(): void {
    this.cambiarMateria();
  }

  cambiarMateria() {
    this.estudiantes = [];

    if (this.materia == 'Historia')
      this.materia = 'Geografia';
    else
      this.materia = 'Historia';


    for (let i = 0; i < this.estudiantesTodos.length; i++) {
      if (this.materia == this.estudiantesTodos[i].materia)
        this.estudiantes.push(this.estudiantesTodos[i]);
    }
  }



}
