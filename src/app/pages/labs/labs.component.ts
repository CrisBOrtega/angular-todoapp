import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-labs',
  imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome: string = "Welcome to the app";
  tareas = signal( [
    'instalacion',
    'saturacion'
  ])

  nombre = signal("shaman")
  deshabilitado = true
  person1 = {
    name: "shaman",
    dios: "merak",
    age: 56
  }

  clickHandler = () => {
    alert('clicked');
  }

  changeHandler(evt: Event): void {
    console.log(evt);
  }

  keyDownHandler(evt: Event): void {
    const input = evt.target as HTMLInputElement;
    const newValue = input.value;
    this.nombre.set(newValue)
  }
}
