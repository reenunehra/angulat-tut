import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "blog";
  

  // ------------form function-------------------
  // userData:any={};

  // getData(data:NgForm){
  //   console.warn(data)
  //   this.userData=data
  // }

  // <!-- ----------------toggle element function--------------------- -- >
  // display = true;
  // toggle() {
  //   this.display = !this.display;
  // }


  // -------------todo list in angular------------
//   list:any[]=[];
//   addTask(item:string)
//   {
//     this.list.push({id:this.list.length, name:item})
//     console.warn(this.list)
//   }

//   removeTask(id:number)
//   {
//     console.warn(id)
//     this.list=this.list.filter(item => item.id!==id)
//   }


// <!-- pass data child to parent component--------------------------------------- -->

// data=10;
// updateChild()
// {
//   this.data= Math.floor(Math.random()*10)
// }



// send data child to parent component-----------------

data="x";

updateData(item:string)
{
  console.warn(item)
  this.data=item;
}
}