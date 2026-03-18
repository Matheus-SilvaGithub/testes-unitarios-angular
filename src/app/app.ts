import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosService } from './_services/todos.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('testes-unitarios');

  constructor(private todoService: TodosService) {}

  ngOnInit(): void {
    this.todoService.getAll().subscribe((response) => {
      console.log(response);
    });

    this.todoService.getBy_Id(1).subscribe((response) => {
      console.log(response);
    });
  }
}
