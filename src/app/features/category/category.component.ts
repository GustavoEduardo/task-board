import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainListComponent } from './components/main-list/main-list.component';
import { ColorListComponent } from './components/color-list/color-list.component';

const CONPONENTS = [MainListComponent, ColorListComponent];

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [...CONPONENTS],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent {}
