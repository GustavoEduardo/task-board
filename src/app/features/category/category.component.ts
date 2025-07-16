import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainListComponent } from './components/main-list/main-list.component';
import { ColorListComponent } from './components/color-list/color-list.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [MainListComponent, ColorListComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent {}
