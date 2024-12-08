import {Component, signal} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tareas = signal( [
    'instalacion',
    'saturacion'
  ])

  changeHandler(event: Event): void {
    const input  = event.target as HTMLInputElement;
    const nuevaTarea = input.value
    this.tareas.update((tareas)=>[...tareas , nuevaTarea])
  }

  deleteTarea(index:number){
    this.tareas.update((tareas) => tareas.filter((tarea, position)=> position !== index))

  }
}
