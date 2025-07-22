import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '@app/model/category.model';
import { environment } from '@env/environment.prod';
import { catchError, Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private readonly apiUrl = environment.apiUrl;
  private readonly httpClient = inject(HttpClient);

  public categories = toSignal(this.getCategories(), {
    initialValue: [] as Category[],
  });

  public getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.apiUrl}/categories`).pipe(
      catchError(err => {
        console.log(err);
        return [];
      })
    );
  }
}
