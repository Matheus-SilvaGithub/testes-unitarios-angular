import { TestBed } from '@angular/core/testing';

import { TodosService } from './todos.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { environment } from '../../environments/environment.development';
import { TODO_STRING, TODOS_STRING } from '../../../server/db-mock';

describe('TodosService', () => {
  let todosService: TodosService;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodosService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    todosService = TestBed.inject(TodosService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(todosService).toBeTruthy();
  });

  it('deve retornar uma lista de todos', () => {
    todosService.getAll().subscribe((todos) => {
      expect(todos).toBeTruthy();
      expect(todos.length).toEqual(200);

      const todo = todos.find((t) => t.id === 15);
      expect(todo?.title).toEqual('ab voluptatum amet voluptas');
    });

    const req = httpTestingController.expectOne(environment.apiUrl + 'todos');
    expect(req.request.method).toEqual('GET');
    req.flush(JSON.parse(TODOS_STRING));

  });

  it('deve retornar um todo específico por ID', () => {
    todosService.getBy_Id(15).subscribe((todo) => {
      expect(todo).toBeTruthy();
      expect(todo?.title).toEqual('ab voluptatum amet voluptas');
    });

    const req = httpTestingController.expectOne(environment.apiUrl + 'todos/15');
    expect(req.request.method).toEqual('GET');
    req.flush(JSON.parse(TODO_STRING));
  });
  });

