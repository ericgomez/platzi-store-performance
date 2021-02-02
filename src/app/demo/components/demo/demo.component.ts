import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  title = 'platzi-store-complete';

  items = ['eric', 'natalia', 'ines']

  power = 10

  addItem() {
    this.items.push('nuevo item');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

}
