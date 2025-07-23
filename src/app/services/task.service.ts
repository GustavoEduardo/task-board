import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Task } from '@app/model/task.model';
import { environment } from '@env/environment';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly apiUrl = environment.apiUrl;
  private readonly httpClient = inject(HttpClient);

  public tasks = signal<Task[]>([]);
  public numberOfTasks = computed(() => this.tasks().length);

  public getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${this.apiUrl}/tasks`).pipe(
      tap(res => {
        this.tasks.set(res);
      })
    );
  }

  public createTasks(task: Partial<Task>): Observable<Task> {
    return this.httpClient.post<Task>(`${this.apiUrl}/tasks`, task).pipe(
      tap(res => {
        this.tasks.set([...this.tasks(), res]);
      })
    );
  }

  public updateTasks(id: string, task: Partial<Task>): Observable<Task> {
    return this.httpClient.put<Task>(`${this.apiUrl}/tasks${id}`, task).pipe(
      tap(res => {
        this.tasks.update(tasks => tasks.filter(t => t.id !== id));
      })
    );
  }

  public removeTasks(id: string): Observable<Task> {
    return this.httpClient.delete<Task>(`${this.apiUrl}/tasks${id}`).pipe(
      tap(() => {
        const updatedTasks = this.tasks().filter(t => t.id !== id);

        this.tasks.set(updatedTasks);
      })
    );
  }
}
