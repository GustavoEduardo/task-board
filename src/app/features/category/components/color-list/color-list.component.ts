import { Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { CategoryService } from '@app/services/category.service';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  imports: [MatDividerModule],
  standalone: true,
})
export class ColorListComponent {
  private readonly categoryService = inject(CategoryService);

  public categories = this.categoryService.categories;

  categoryColors: Record<string, string> = {
    green: 'bg-green-600',
    orange: 'bg-orange-600',
    blue: 'bg-blue-600',
    red: 'bg-red-600',
    purple: 'bg-purple-600',
  };
}
