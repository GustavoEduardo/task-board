import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  imports: [MatDividerModule],
  standalone: true,
})
export class ColorListComponent {
  constructor() {}
}
