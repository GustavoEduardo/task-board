import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TaskComponent } from './../../features/task/task.component';
import { CategoryComponent } from '../../features/category/category.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CategoryComponent, TaskComponent, MatDividerModule],
  templateUrl: './main.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
