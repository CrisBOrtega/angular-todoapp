import {Component, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import { Tarea } from './../../models/tarea.model'

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tareas = signal<Tarea[]>( [
    {
      id:Date.now(),
      title: 'Crear proyecto',
      completed: false
    },
    {
      id:Date.now(),
      title: 'Crear componentes',
      completed: false
    },
    {
      id:Date.now(),
      title: 'Crear css y estilos',
      completed: false
    }
  ])

  changeHandler(event: Event): void {
    const input  = event.target as HTMLInputElement;
    const nuevaTarea = input.value
    this.addTarea(nuevaTarea)

  }

  addTarea(title: string){
    const newTarea = {
      id: Date.now(),
      title: title,
      completed: false
    }

    this.tareas.update((tareas)=>[...tareas , newTarea])
  }

  deleteTarea(index:number){
    this.tareas.update((tareas) => tareas.filter((tarea, position)=> position !== index))

  }
}
