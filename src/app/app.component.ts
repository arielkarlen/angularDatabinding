import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  name= "Ariel Alejandro";
  textPlaceholder ="Escriba su nombre..."
  deshabilitado=true
  img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
  text ="Texto de prueba"
  changeText=""

  constructor()
  {

  }
  ngOnInit(): void {
    setInterval(()=>this.deshabilitado=false, 3000)
  }
  getSuma(num: number, num2: number) {
    return num + num2
  }

  cambiarTexto():void{
    this.text="El texto cambia"
  }

 

}
