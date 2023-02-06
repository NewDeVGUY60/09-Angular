import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Kitten } from '../kitten';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent {

  @Input() kittens: Kitten[] | undefined ;

  name="";
  breed="";
  date=new Date();
  img="";

  constructor() { }

  addKitten() {
    this.kittens?.push(new Kitten(this.myForm.value.name, this.myForm.value.breed, this.myForm.value.date, this.myForm.value.img));
    this.myForm.reset();
  }

  myForm: FormGroup = new FormGroup ({
    name: new FormControl ("",Validators.required),
    breed: new FormControl ("",Validators.required),
    date: new FormControl( "",Validators.required ),
    img: new FormControl ("",Validators.required)
  })

}
