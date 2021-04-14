import { Component, OnInit, OnDestroy } from '@angular/core';

import { GeneratorService } from '../../../core/services/generator.service';
import { EmployeeData } from '../../../core/models/employeeData.model';
import { Observable, Subscription } from 'rxjs';

// Array con nombres para alimentar la generacion aleatoria de informacion
const names = ['nicolas', 'juan', 'felipe', 'maria'];

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  // Alamacenara listas con informacion aleatoria
  salesList: EmployeeData[] = [];
  buyList: EmployeeData[] = [];

  value!: number;

  // Variable para guardando la suscription actual
  sub$!: Subscription;

  constructor(
    private generatorService: GeneratorService
    ) { }

  ngOnInit(): void {
    // Llenamos la lista con onformacion alatoria
    this.salesList = this.generatorService.generate(names, [10, 20], 10);
    this.buyList = this.generatorService.generate(names, [10, 20], 10);

    //Guardamos la suscription
    this.sub$ = this.generatorService.geData()
      .subscribe(value => {
        this.value = value;
        console.log(this.value);
      });
  }

  //Ciclo de vida: cuando se destruye
  ngOnDestroy(): void {
    console.log('destroy');
    // Nos desuscribimos
    this.sub$.unsubscribe();
  }

  // Obtenemo el valor que recibimo desde el input en el browser
  addItem(list: EmployeeData[], label: string) {
    list.unshift({
      label,
      num: this.generatorService.generateNumber([10, 20]),
    })
  }

}
