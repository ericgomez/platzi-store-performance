import { Component, OnInit } from '@angular/core';
import { addDays, compareAsc, format } from 'date-fns'

@Component({
  selector: 'app-dates',
  template: `<h1>{{ date }}</h1>`,
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent implements OnInit {

  date!: string;
  
  constructor() { }

  ngOnInit(): void {
    // this.date = moment().add(20, 'days').format('YYYY/MMMM/DD');
    
    const addNewDays = addDays (new Date(), 20)
    this.date = format(addNewDays, 'yyyy-MM-dd')

  }

}
