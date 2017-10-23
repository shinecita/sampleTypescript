/*
 * Interfaces
 * - Describes an object
 * - Two types are compatible if their internal structure is compatible.
 * - This allows us to implement an interface just by having the shape the
 * interface requires
 */
interface Person {
  name: string;
  lastname: string;
  age? : number;
}

interface Dog {
  name: string;
  age?: number;
}

/*
 * Type annotations
 * lightweight ways to record the intended contract of the function or variable
 */
function bark(dog : Dog) : void {
  console.log(dog.name, "arf arf")
}
/*
 * Classes
 * TypeScript supports new features in JavaScript,
 * like support for class-based object-oriented programming
 */

class Labrador {
  swims : boolean = true;
  petname : string

  constructor(public name, public owner : Person) {
    this.petname = this.name + ' ' + owner.lastname;
  }

}
let petMom : Person = {name : "Caro", lastname : "Urquhart"}
let carosDog : Dog = { name : "Robin", age : 6};

let carosLabrador = new Labrador('Robin', petMom);

bark(carosDog);
bark(carosLabrador);
