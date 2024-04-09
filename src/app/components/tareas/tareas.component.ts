import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TareaInterface } from 'src/app/interfaces/tarea.interface';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
})
export class TareasComponent {
  public todoForm = new FormGroup({
    nuevaTarea: new FormControl(''),
  });

  public todoList: TareaInterface[] = [];

  constructor() {}

  onSubmit() {
    // console.log('Form: ', this.todoForm.value);
    const { nuevaTarea } = this.todoForm.value;
    if (nuevaTarea !== '') {
      const newTodo: TareaInterface = {
        nombre: nuevaTarea!.toString(),
        estado: false,
      };
      this.todoList.push(newTodo);
      this.todoForm.reset();
    }
  }

  remove(index: number) {
    console.log('index', index);
    const currentTodo = this.todoList[index];
    console.log('CurrentTodo: ', currentTodo);
    this.todoList.splice(index, 1);
  }
  update(index: number) {
    const currentTodo = this.todoList[index];
    console.log('Update: ', currentTodo);

    this.todoList[index].estado = !currentTodo.estado;
  }
}
