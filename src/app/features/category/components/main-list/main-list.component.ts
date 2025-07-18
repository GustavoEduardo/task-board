import { Component, inject } from '@angular/core';
import { CategoryService } from '@app/services/category.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  standalone: true,
})
export class MainListComponent {
  private readonly categoryService = inject(CategoryService);

  public categories = this.categoryService.categories;
}
