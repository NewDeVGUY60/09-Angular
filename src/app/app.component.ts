import { Component } from '@angular/core';
import { Kitten } from './kitten';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '09_Angular_interactions';

  ngOnInit() {
    const kitten1 = new Kitten("Toto","chat européen","2022-10-05","https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404_960_720.jpg");
    const kitten2 = new Kitten("Titi","chat européen","2023-01-04","https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_960_720.jpg");
    this.kittens.push(kitten1,kitten2)
  }

  kittens: Kitten[] = [];

  kittensAdopted: Kitten[] = [];


}
