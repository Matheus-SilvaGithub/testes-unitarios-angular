import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { map, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../_models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {

  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}
  
  getAll() {
    return this.http.get<Todo[]>(this.baseUrl + 'todos');
    pipe(
      map((response) => {
        return response
      })
    )
  }

  getBy_Id(id: number) {
    return this.http.get<Todo>(this.baseUrl + `todos/${id}`);
    pipe(
      map((response) => {
        return response
      })
    )
  }


}
