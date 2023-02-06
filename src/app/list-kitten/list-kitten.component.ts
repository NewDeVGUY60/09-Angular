import { Component, Input } from '@angular/core';
import { Kitten } from '../kitten';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent {

  hidden!:boolean

  @Input() kittens:Kitten[] | undefined
  @Input() kittensAdopted:Kitten[] | undefined

  adoptKitten(kittenSelected: Kitten,index:number) {

    this.kittens?.splice(index,1)

    this.kittensAdopted?.push(kittenSelected);

  }


  

}
