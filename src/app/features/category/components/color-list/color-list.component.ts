import { Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { CategoryService } from '@app/services/category.service';
import { categoryColors } from '@app/shared/constants/colors-list.component';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  imports: [MatDividerModule],
  standalone: true,
})
export class ColorListComponent {
  private readonly categoryService = inject(CategoryService);

  public categories = this.categoryService.categories;

  public categoryColors = categoryColors;
}
