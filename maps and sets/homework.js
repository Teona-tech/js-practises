class DB {
    constructor (){
       this.person = new Map();
       this.id = 0
    }
    
    create(person){
        if(typeof person !== 'object' || !person.name || !person.age || !person.salary || !person.country){
            throw new Error("blabla");
        }
        let user = this.person.set(this.id.toString(), person);
        let tempid = this.id
        this.id++;
        return tempid.toString();
        
    }
    read(id){
        if(typeof id !== 'string'){
            throw new Error ("id must be String");
        }
        else if (this.person.has(id) === false){
            return null;
        }
        else if(this.person.has(id)){
           return this.person.get(id);
      } 
    } 
    readAll(){
    if(arguments.length != 0) throw new Error('there shouldnt be any arguments')
    	let array = [];
      this.person.forEach((index)=>array.push(index));
      return array;
    }
    update(id,obj){
			if(!this.person.has(id) || typeof id != 'string' || Object.values(obj).length < 1)
      throw new Error('wrong id')
      this.person.set(id,{...this.person.get(id),...obj})
      return id;
    }
    delete(id){
    console.log(id, this.person.get(id))
    if(!this.person.has(id))throw new Error('that person doesnt exist')
    	return this.person.delete(id)
    }
}
const db = new DB();

const person1 = {
    name: 'Pitter', // required field with type string
    age: 21, // required field with type number
    country: 'ge', // required field with type string
    salary: 500 // required field with type number
};


let id1 = db.create(person1);
let id2 = db.create(person1);
let id3 = db.create(person1);
console.log(db.read(id1));
db.readAll();
db.update(id2, {age: 6});
db.update(id1, {age: 16, name: 'teo'});
db.delete(id3);
db.readAll();