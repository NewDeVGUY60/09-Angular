import { Component, Input } from '@angular/core';
import { Kitten } from '../kitten';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent {

  @Input() kittensAdopted:Kitten[] | undefined
  @Input() kittens:Kitten[] | undefined


  cancelAdopt(kitten: Kitten,index:number) {
    this.kittensAdopted?.splice(index,1);
    this.kittens?.push(kitten)

  }

  
  hidden:boolean=false

  
}
