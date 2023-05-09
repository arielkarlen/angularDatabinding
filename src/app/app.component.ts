import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  name= "Ariel Alejandro";
  constructor()
  {

    setInterval(()=>this.name="Jorgito", 3000)
  }

  getSuma(num: number, num2: number) {
    return num + num2
  }
}
