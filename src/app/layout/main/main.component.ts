import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TaskComponent } from './../../features/task/task.component';
import { CategoryComponent } from '../../features/category/category.component';
import { MatDividerModule } from '@angular/material/divider';

const COMPONENTS = [CategoryComponent, TaskComponent];

const MODULES = [MatDividerModule];

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [...COMPONENTS, ...MODULES],
  templateUrl: './main.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
