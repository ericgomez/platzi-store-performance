import { Component, OnInit } from '@angular/core';

import { GeneratorService } from '../../../core/services/generator.service';
import { EmployeeData } from '../../../core/models/employeeData.model';

// Array con nombres para alimentar la generacion aleatoria de informacion
const names = ['nicolas', 'juan', 'felipe', 'maria'];

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  // Alamacenara listas con informacion aleatoria
  salesList: EmployeeData[] = [];
  buyList: EmployeeData[] = [];

  constructor(
    private generatorService: GeneratorService
    ) { }

  ngOnInit(): void {
    // Llenamos la lista con onformacion alatoria
    this.salesList = this.generatorService.generate(names, [10, 20], 10);
    this.buyList = this.generatorService.generate(names, [10, 20], 10);
  }

  // Obtenemo el valor que recibimo desde el input en el browser
  addItem(list: EmployeeData[], label: string) {
    list.unshift({
      label,
      num: this.generatorService.generateNumber([10, 20]),
    })
  }

}
