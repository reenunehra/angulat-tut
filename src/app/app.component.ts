import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blog';
  data = 'by ReenuNehra';

  //  getData(val: string){

  //   console.warn(val);

  //  }
  // ----get text box value and print-------
  // displayval = ' ';
  // getUsername(val: string) {
  //   console.log(val);
  //   this.displayval = val;
  // }

// count = 0;
// counter(type:string){
// type=== 'add' ? this.count++ : this.count--;
// }

// name = "reenu" 
// disable = true


// show = false

// color =  "frefrf";

// users = ['Raam','Shaam','Peter','Sam','Rokky','Heyat'];

// userDetails = [
//   {name : 'Raam' , email : 'raam123@gmail.com'},
//   {name : 'Shaam' , email : 'shaam13@gmail.com'},
//   {name : 'peter' , email : 'peter@gmail.com'},
//   {name : 'sam' , email : 'sam343@gmail.com'},
//   {name : 'Rokky' , email : 'rokk23@gmail.com'},
//   {name : 'heyat' , email : 'heyat2356@gmail.com'},
// ]

// users = [
//   {name : 'Raam' , email : 'raam123@gmail.com', socialAccount:['facebook','insta','whtp']},
//   {name : 'Shaam' , email : 'shaam13@gmail.com', socialAccount:['facebook','insta','whtp']},
//   {name : 'peter' , email : 'peter@gmail.com', socialAccount:['facebook','insta','whtp']},
// ]
 

colors = "color-update"
color="red";

change(){
  this.color="blue"
}



}
// -----clouser------------------

// function addition (a) {
//   let b = 20;
//   function sumval(){
//     let sum =a + b;
//     console.log('${sum}')
//   }
//   sumval();
// }
// addition(5);

