import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

import { EmployeeData } from './../../../core/models/employeeData.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush // OnPush: Detecta a que componente enverdad esta realizinado el cambio y solo hace la deteccion de cambios a ese componente como tal
})
export class ListComponent implements OnInit {

  @Input() title!: string;
  @Input() data: EmployeeData[] = [];

  // Output para cuando quiera agregar
  @Output() add = new EventEmitter<string>();

  label!: string;

  constructor() { }

  ngOnInit(): void {
  }

  addItem() {
    this.add.emit(this.label);

    // Limpiamos el label
    this.label = '';
  }

}
