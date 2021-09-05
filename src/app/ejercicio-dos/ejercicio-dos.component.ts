import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio-dos',
  templateUrl: './ejercicio-dos.component.html',
  styleUrls: ['./ejercicio-dos.component.css']
})
export class EjercicioDosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.generarPromedioX();
    this.calcularMediana();
    this.calcularModa();
  }

  elementoX: number[] = [ 3, 5, 1, 9, 0 , 3, 8, 0 , 1, 8 ];
  elementoY: number[] = [ -1, 9, 3, 0, -1, 4, -1, 3, -1, 10 ];
  elementoZ: number[] = [ 1, 10, -1, 4, 6, 9, -1, 2, -1, 9 ];
  vaciosX: number[] = [];
  sumatoriaX: number= 0;
  promedioX: number= 0;

  busqueda: number = 0;
  elementoYoriginal: number[] = [ 9, 3, 0, 4, 3, 10 ];
  elementosYordenado: number[] = [];
  mediana: number = 0;

  elementoZoriginal: number[] = [1, 10, 4, 6, 9, 2, 9];
  moda: number = -1;
  veces: number = 0;





  generarPromedioX(){

    for(let i=0; i < this.elementoX.length; i++){
      if(this.elementoX[i]==0){
        this.vaciosX.push(i);
        console.log(i);
      }
      this.sumatoriaX = this.sumatoriaX + this.elementoX[i];
    }
    this.promedioX = this.sumatoriaX / 8 ;
    this.elementoX[4] = this.promedioX;
    this.elementoX[7] = this.promedioX;

    // console.log("Sumatoria: "+this.sumatoriaX);
    // console.log("posiciones vacias "+this.vaciosX);
    // console.log("Promedio "+this.promedioX);
    // console.log("array Final:  "+this.elementoX );
  }

  calcularMediana(){

    this.elementosYordenado = this.elementoYoriginal.sort((a, b) => a - b );
    let valorInicial: number = (this.elementosYordenado.length/2)-1;
    let valorFinal: number = this.elementosYordenado.length/2;
    this.mediana =  (this.elementosYordenado[valorInicial] + this.elementosYordenado[valorFinal])/2;

    for (let i=0; i < this.elementoY.length; i++){
      if (this.elementoY[i] == -1)
        this.elementoY[i] = this.mediana;
    }

    // console.log("La cantidad de elementos del arreglo es: "+ this.elementoYoriginal.length);
    // console.log("Este es mi array Original "+ this.elementoYoriginal);
    // console.log("Este es mi array Ordenado "+ this.elementosYordenado);
    // console.log("elemento antes de la mitad  "+ valorInicial);
    // console.log("elemento despues de la mitad  "+ valorFinal);
    // console.log("el valor de la mediana es: "+ this.mediana);
    // console.log("array con los reemplazados: "+ this.elementoY);

  }

  calcularModa(){
    let copia: number[] = this.elementoZoriginal;

    for(let i=0; i < copia.length; i++){
      if(this.moda == -1){
        this.moda = copia[i];
      }

      let posible: number = copia[i];
      let cant: number = 0;

      for(let j=0; j < copia.length; j++){
        if(copia[j] == posible)
          cant = cant + 1;
      }

      if (cant > this.veces){
        this.veces = cant;
        this.moda = posible;
      }

    }

    for (let i=0; i < this.elementoZ.length; i++){
      if (this.elementoZ[i] == -1)
        this.elementoZ[i] = this.moda;
    }

    // console.log("La moda del array es: "+this.moda);
    // console.log("El numero de veces encontrada es: "+this.veces);
    // console.log("el array sobre el que se itera  "+this.elementoZoriginal);
    // console.log("el array resultante  "+this.elementoZ);




  }






}
