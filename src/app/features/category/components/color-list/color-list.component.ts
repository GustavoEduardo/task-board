import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

const CONPONENTS = [MatDividerModule];

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  imports: [...CONPONENTS],
  standalone: true,
})
export class ColorListComponent {
  constructor() {}
}
