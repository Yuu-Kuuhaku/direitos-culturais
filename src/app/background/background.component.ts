import { Component } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent {


  backgrounds = [
    'assets/backgrounds/consultorio\ 4.jpeg',
    'assets/backgrounds/consultorio\ 2.jpeg',
    'assets/backgrounds/consultorio\ 3.jpeg'

  ]

  backgroundSrc: string = 'assets/backgrounds/consultorio\ 4.jpeg';  // Imagem do cenário

  ngOnInit(): void {
    let index = Math.floor(Math.random() * 3);
    this.backgroundSrc = this.backgrounds[index]
  }

}
